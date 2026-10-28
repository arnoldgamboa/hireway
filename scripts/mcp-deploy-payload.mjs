#!/usr/bin/env node
/**
 * Builds a JSON payload for Cloudflare MCP execute deploy (manifest + base64 assets + worker bundle).
 */
import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

const publicDir = path.resolve('.output/public')
const workerBundle = path.resolve('/tmp/wrangler-out/index.js')

function hashFile(content) {
  return crypto.createHash('sha256').update(content).digest('hex').slice(0, 32)
}

function walkAssets(dir, base = '') {
  const manifest = {}
  const filesByHash = {}
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name)
    const rel = `${base}/${name}`.replace(/\\/g, '/')
    const stat = fs.statSync(full)
    if (stat.isDirectory()) {
      Object.assign(manifest, walkAssets(full, rel).manifest)
      Object.assign(filesByHash, walkAssets(full, rel).filesByHash)
    } else {
      const content = fs.readFileSync(full)
      const hash = hashFile(content)
      const key = rel.startsWith('/') ? rel : `/${rel}`
      manifest[key] = { hash, size: content.length }
      filesByHash[hash] = content.toString('base64')
    }
  }
  return { manifest, filesByHash }
}

const { manifest, filesByHash } = walkAssets(publicDir)
const workerContent = fs.readFileSync(workerBundle)
const workerBase64 = workerContent.toString('base64')

const payload = {
  scriptName: 'arnoldgamboa-hireway',
  compatibility_date: '2025-07-15',
  compatibility_flags: ['nodejs_compat', 'no_nodejs_compat_v2'],
  manifest,
  filesByHash,
  workerBase64,
  main_module: 'index.js',
}

process.stdout.write(JSON.stringify(payload))
