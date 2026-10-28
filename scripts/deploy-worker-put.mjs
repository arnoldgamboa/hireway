#!/usr/bin/env node
/**
 * Deploy built Nuxt worker to Cloudflare (requires CLOUDFLARE_API_TOKEN).
 * Static assets must already be uploaded; pass completion JWT as first arg.
 */
import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'

const assetsJwt = process.argv[2]
const apiToken = process.env.CLOUDFLARE_API_TOKEN
const accountId = process.env.CLOUDFLARE_ACCOUNT_ID || 'f79b3dab2b6ede78d5b8c48833c31b81'
const scriptName = process.env.CLOUDFLARE_WORKER_NAME || 'arnoldgamboa-hireway'

if (!assetsJwt) {
  console.error('Usage: CLOUDFLARE_API_TOKEN=... node scripts/deploy-worker-put.mjs <assetsCompletionJwt>')
  process.exit(1)
}
if (!apiToken) {
  console.error('Missing CLOUDFLARE_API_TOKEN')
  process.exit(1)
}

execSync('npx wrangler --cwd .output deploy --dry-run --outdir /tmp/wrangler-out', {
  stdio: 'inherit',
  cwd: path.resolve('.'),
})

const workerCode = fs.readFileSync('/tmp/wrangler-out/index.js', 'utf8')
const metadata = {
  main_module: 'index.js',
  compatibility_date: '2025-07-15',
  compatibility_flags: ['nodejs_compat', 'no_nodejs_compat_v2'],
  assets: { jwt: assetsJwt },
  bindings: [{ type: 'assets', name: 'ASSETS' }],
}

const boundary = 'FormBoundary' + Date.now()
const bodyParts = [
  `--${boundary}`,
  'Content-Disposition: form-data; name="metadata"',
  'Content-Type: application/json',
  '',
  JSON.stringify(metadata),
  `--${boundary}`,
  'Content-Disposition: form-data; name="index.js"; filename="index.js"',
  'Content-Type: application/javascript+module',
  '',
  workerCode,
  `--${boundary}--`,
]
const body = bodyParts.join('\r\n')

const putRes = await fetch(
  `https://api.cloudflare.com/client/v4/accounts/${accountId}/workers/scripts/${scriptName}`,
  {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${apiToken}`,
      'Content-Type': `multipart/form-data; boundary=${boundary}`,
    },
    body,
  },
)
const putJson = await putRes.json()
if (!putJson.success) {
  console.error(JSON.stringify(putJson, null, 2))
  process.exit(1)
}

await fetch(
  `https://api.cloudflare.com/client/v4/accounts/${accountId}/workers/scripts/${scriptName}/subdomain`,
  {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ enabled: true }),
  },
).catch(() => {})

console.log(JSON.stringify({ scriptName, accountId, result: putJson.result }, null, 2))
