# Inventario de imágenes

**Todas las imágenes son provisionales** (licencia Unsplash: uso libre, sin atribución obligatoria; se acredita igualmente en el pie de la web).
Ninguna corresponde a GEF. **Deben sustituirse por fotografías oficiales antes de publicar.**

Archivos en `public/images/provisional/`, en WebP a 800 y 1600 px de ancho (el hero también a 2200 px).
La web aplica un tratamiento B/N común (`.grade`) para dar coherencia.

| Archivo | Procedencia | Representa en la web | Oficial | Sustituir |
|---|---|---|---|---|
| `hero-racks-*` | [Mirko Meister / Unsplash](https://unsplash.com/photos/j4T5z94b8ns) | Hero · sala de fuerza | No | Sí — foto horizontal de la sala de GEF |
| `kettlebells-*` | [Heidi Erickson / Unsplash](https://unsplash.com/photos/CPSjcuuV8E8) | El gimnasio · material funcional | No | Sí |
| `barra-peso-*` | [Benjamin Brunner / Unsplash](https://unsplash.com/photos/wcOGQeT1jIw) | Zona 01 · peso libre | No | Sí — barras / racks reales |
| `mancuernas-*` | [Stefan Vibes / Unsplash](https://unsplash.com/photos/zudOP2bkdXc) | Zona 02 · mancuernas | No | Sí — mancuernero real (vertical) |
| `sacos-boxeo-*` | [Sam Davis / Unsplash](https://unsplash.com/photos/fTe0U5LmJwQ) | Zona 03 · boxeo | No | Sí — sacos reales (vertical) |
| `cuerdas-*` | [Ken Mathiasen / Unsplash](https://unsplash.com/photos/UXOf3-uwCQg) | Zona 04 · funcional | No | Sí — zona funcional / barras |
| `peso-muerto-*` | [Victor Freitas / Unsplash](https://unsplash.com/photos/vqDAUejnwKw) | Entrenamiento · fuerza | No | Sí |
| `magnesio-*` | [Herbert Goetsch / Unsplash](https://unsplash.com/photos/jybQOCm2jXo) | Entrenamiento · calistenia / galería | No | Opcional (detalle de ambiente) |
| `guantes-*` | [Mike Cox / Unsplash](https://unsplash.com/photos/LpWreRGMK74) | Galería · detalle boxeo | No | Sí |
| `fila-mancuernas-*` | [Jason Grant / Unsplash](https://unsplash.com/photos/m4Jqyv5VwqY) | Entrenamiento · seguimiento / galería | No | Sí |
| `/og-image.jpg` | Recorte 1200×630 de `hero-racks` | Vista previa al compartir | No | Sí |

Descartadas durante la selección: dos fotos (anillas, dominadas) mostraban rótulos de **otros gimnasios** al fondo.

## Fotos oficiales a pedir al gimnasio (lista de toma)

1. Fachada y acceso (C. Blasco Ibáñez, 2), de día.
2. Sala completa en horizontal, con la pared verde lima y el ladrillo visto (candidata a hero).
3. Racks y barras / peso libre.
4. Mancuernero (vertical).
5. Sacos de boxeo y zona de golpeo (vertical).
6. Zona de barras / calistenia, anillas, cuerdas y cadenas.
7. Detalles: discos, agarres, magnesio, kettlebells.
8. Responsables / equipo, solo con su consentimiento.
9. Logotipo oficial en vectorial (SVG / AI / PDF).

## Cómo sustituir

1. Exportar cada foto en WebP a 800 y 1600 px de ancho (`nombre-800.webp`, `nombre-1600.webp`) en `public/images/`.
2. En `src/content/images.ts`, actualizar `base`, `width`, `height`, `alt`, `focus` y poner `official: true` (desaparece la etiqueta “Foto provisional”).
3. Si las fotos oficiales tienen buen color, se puede quitar la clase `grade` en `src/components/ui/Photo.tsx`.
