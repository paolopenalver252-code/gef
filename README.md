# Demo web — Gimnasio GEF Alto Rendimiento

Propuesta conceptual de web para **Gimnasio GEF Alto Rendimiento** (C. Blasco Ibáñez, 2 · 46540 El Puig de Santa Maria).
No es la web oficial del gimnasio ni ha sido aprobada por él.

- Investigación previa y fuentes: [docs/INVESTIGACION.md](docs/INVESTIGACION.md)
- Inventario de imágenes (todas provisionales): [docs/IMAGENES.md](docs/IMAGENES.md)

## Stack

React 19 · TypeScript · Vite · Tailwind CSS 4 · Lucide React · fuentes autoalojadas (Big Shoulders Display + Archivo, licencia OFL).
Sin backend, sin formularios, sin analítica, sin cookies propias.

## Ejecutar

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # genera /dist (estático)
npm run preview    # sirve /dist en local
npm run lint
```

## Estructura

```
src/
  content/business.ts   ← datos del negocio (NAP, horario, enlaces, valoración) con estado de verificación
  content/images.ts     ← inventario de imágenes: sustituir aquí las provisionales por las oficiales
  content/nav.ts        ← navegación
  components/           ← una sección por archivo (Hero, About, Facilities, Training, WhyGef, Reviews, Gallery, Contact…)
  components/Logo.tsx   ← logotipo TIPOGRÁFICO provisional (sustituir por el oficial)
public/images/provisional/  ← fotos provisionales (webp 800 / 1600 px)
index.html              ← title, meta description, Open Graph, JSON-LD (ExerciseGym)
```

## Notas de la propuesta

La barra superior incluye **“Ocultar notas / Ver notas”**: muestra u oculta las etiquetas *Foto provisional* y las notas
de datos pendientes de confirmar. Útil para enseñar el diseño limpio durante la reunión. La preferencia se recuerda en el navegador.

## Compartir la demo con un enlace

**Versión actual publicada (privada):** https://claude.ai/artifact/HVD3EZ8XtBxUTCSdoQi432 — se comparte desde su menú *Compartir*.
Se genera con `npm run build:artifact` (rutas relativas, fuentes embebidas y mapa como enlace, porque allí no se permiten iframes).

Para un hosting propio, la carpeta `dist/` es un sitio estático. Opciones rápidas:

1. **Netlify Drop** — `npm run build` y arrastrar la carpeta `dist` a <https://app.netlify.com/drop>. Da una URL pública al momento.
2. **Vercel** — `npx vercel` desde la raíz del proyecto (detecta Vite automáticamente).
3. **Cloudflare Pages / GitHub Pages** — subir el repositorio y configurar `npm run build` con salida `dist`.

Antes de compartir:

- La web lleva `<meta name="robots" content="noindex, nofollow">` para que la demo no compita en Google con la ficha real del gimnasio. Mantenerlo mientras sea una propuesta.
- `og:image` es relativa (`/og-image.jpg`); al tener la URL definitiva, cambiarla por la absoluta y añadir `og:url` y `<link rel="canonical">`.

## Antes de convertirla en la web oficial

- Sustituir todas las fotos provisionales por fotografías oficiales (ver inventario).
- Sustituir el logotipo tipográfico por el oficial (vectorial).
- Confirmar con el gimnasio todo lo marcado como *confirmar* en `src/content/business.ts` y en las notas de la web.
- Redactar aviso legal y política de privacidad con los datos del titular.
- Retirar la barra de “Propuesta de diseño”, las notas y el `noindex`.
