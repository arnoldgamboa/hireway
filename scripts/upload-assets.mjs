#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'

const uploadJwt = process.argv[2]
const bucketsPath = process.argv[3]
if (!uploadJwt || !bucketsPath) {
  console.error('Usage: upload-assets.mjs <uploadJwt> <buckets.json>')
  process.exit(1)
}

const payload = JSON.parse(fs.readFileSync('/tmp/cf-payload.json', 'utf8'))
const buckets = JSON.parse(fs.readFileSync(bucketsPath, 'utf8'))
const accountId = 'f79b3dab2b6ede78d5b8c48833c31b81'

const hashToBase64 = payload.filesByHash

let completionJwt = uploadJwt

for (let i = 0; i < buckets.length; i++) {
  const bucket = buckets[i]
  const form = new FormData()
  for (const hash of bucket) {
    const b64 = hashToBase64[hash]
    if (!b64) throw new Error(`Missing file for hash ${hash}`)
    const blob = new Blob([b64], { type: 'application/octet-stream' })
    form.append(hash, blob, hash)
  }
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/workers/assets/upload?base64=true`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${completionJwt}`,
      },
      body: form,
    },
  )
  const json = await res.json()
  if (!json.success) {
    console.error(JSON.stringify(json, null, 2))
    process.exit(1)
  }
  if (json.result?.jwt) completionJwt = json.result.jwt
  console.error(`Uploaded bucket ${i + 1}/${buckets.length}`)
}

console.log(completionJwt)
