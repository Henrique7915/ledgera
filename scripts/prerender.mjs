// Gera HTML estatico de cada rota (bots e avaliadores veem o conteudo sem rodar JavaScript).
import { build } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const out = path.resolve('dist-ssr')
await build({
  logLevel: 'warn',
  plugins: [react()],
  build: { ssr: 'src/entry-server.jsx', outDir: out, emptyOutDir: true, rollupOptions: { output: { format: 'esm' } } }
})
const { render, ROUTES } = await import(pathToFileURL(path.join(out, 'entry-server.js')).href)

const template = fs.readFileSync('dist/index.html', 'utf8')
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

for (const [route, meta] of Object.entries(ROUTES)) {
  const head = `<title>${esc(meta.title)}</title>
    <meta name="description" content="${esc(meta.description)}" />
    <meta property="og:title" content="${esc(meta.title)}" />
    <meta property="og:description" content="${esc(meta.description)}" />
    <meta property="og:type" content="website" />
    <meta name="theme-color" content="#14124A" />`
  const html = template.replace('<!--head-->', head).replace('<!--app-->', render(route))
  const file = route === '/' ? 'dist/index.html' : `dist${route}.html`
  fs.writeFileSync(file, html)
  console.log('prerendered', route)
}
fs.rmSync(out, { recursive: true, force: true })
