// Convierte dist-artifact/index.html en page.html para publicarlo como enlace:
// el servicio añade su propio <!doctype>/<head>/<body>, así que aquí solo queda el contenido.
import { readFileSync, writeFileSync } from 'node:fs'

const dir = 'dist-artifact'
const html = readFileSync(`${dir}/index.html`, 'utf8')

const head = html.match(/<head>([\s\S]*?)<\/head>/)[1]
const body = html.match(/<body>([\s\S]*?)<\/body>/)[1]

const page = (head + body)
  .replace(/<meta charset[^>]*>\s*/i, '')
  .replace(/<meta\s+name="viewport"[^>]*>\s*/i, '')
  .replace(/<title>[\s\S]*?<\/title>/, '<title>Propuesta web GEF</title>')
  // Rutas absolutas del index.html → relativas
  .replaceAll('"/images/', '"images/')
  .replaceAll(' /images/', ' images/')
  .replaceAll('"/favicon.svg"', '"favicon.svg"')
  .replaceAll('"/og-image.jpg"', '"og-image.jpg"')

writeFileSync(`${dir}/page.html`, page.trimStart())
console.log('page.html listo:', page.length, 'bytes')
