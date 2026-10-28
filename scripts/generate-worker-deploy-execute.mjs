#!/usr/bin/env node
import fs from 'node:fs'

const worker = fs.readFileSync('/tmp/wrangler-out/index.js', 'utf8')
const assetsJwt = fs.readFileSync('/tmp/completion-jwt.txt', 'utf8').trim()
const scriptName = 'arnoldgamboa-hireway'

const metadata = {
  main_module: 'index.js',
  compatibility_date: '2025-07-15',
  compatibility_flags: ['nodejs_compat', 'no_nodejs_compat_v2'],
  assets: { jwt: assetsJwt },
  bindings: [{ type: 'assets', name: 'ASSETS' }],
}

const code = `async () => {
  const scriptName = ${JSON.stringify(scriptName)};
  const workerCode = ${JSON.stringify(worker)};
  const metadata = ${JSON.stringify(metadata)};
  const b = 'F' + Date.now();
  const body = [
    '--' + b,
    'Content-Disposition: form-data; name="metadata"',
    'Content-Type: application/json',
    '',
    JSON.stringify(metadata),
    '--' + b,
    'Content-Disposition: form-data; name="index.js"; filename="index.js"',
    'Content-Type: application/javascript+module',
    '',
    workerCode,
    '--' + b + '--',
  ].join('\\r\\n');
  const put = await cloudflare.request({
    method: 'PUT',
    path: \`/accounts/\${accountId}/workers/scripts/\${scriptName}\`,
    body,
    contentType: 'multipart/form-data; boundary=' + b,
    rawBody: true,
  });
  await cloudflare.request({
    method: 'POST',
    path: \`/accounts/\${accountId}/workers/scripts/\${scriptName}/subdomain\`,
    body: { enabled: true },
  }).catch(() => null);
  return put.result;
}`

fs.writeFileSync('/tmp/worker-deploy-code.txt', code)
console.error('code bytes', code.length)
