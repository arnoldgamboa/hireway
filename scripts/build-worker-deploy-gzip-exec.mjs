#!/usr/bin/env node
import fs from 'node:fs'
import zlib from 'node:zlib'

const assetsJwt = fs.readFileSync('/tmp/completion-jwt.txt', 'utf8').trim()
const workerGz = zlib.gzipSync(fs.readFileSync('/tmp/wrangler-out/index.js'))
const workerGzB64 = workerGz.toString('base64')

const code = `async () => {
  const scriptName = 'arnoldgamboa-hireway';
  const assetsJwt = ${JSON.stringify(assetsJwt)};
  const workerGzB64 = ${JSON.stringify(workerGzB64)};
  const bin = Uint8Array.from(atob(workerGzB64), (c) => c.charCodeAt(0));
  const workerCode = await new Response(new Blob([bin]).stream().pipeThrough(new DecompressionStream('gzip'))).text();
  const metadata = {
    main_module: 'index.js',
    compatibility_date: '2025-07-15',
    compatibility_flags: ['nodejs_compat', 'no_nodejs_compat_v2'],
    assets: { jwt: assetsJwt },
    bindings: [{ type: 'assets', name: 'ASSETS' }],
  };
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
  try {
    await cloudflare.request({
      method: 'POST',
      path: \`/accounts/\${accountId}/workers/scripts/\${scriptName}/subdomain\`,
      body: { enabled: true },
    });
  } catch (e) {}
  return { id: put.result?.id, workerBytes: workerCode.length };
}`

fs.writeFileSync('/tmp/deploy-gzip-exec.json', JSON.stringify({ account_id: 'f79b3dab2b6ede78d5b8c48833c31b81', code }))
console.error('code bytes', code.length, 'gzip b64', workerGzB64.length)
