# 10. Videos curados: "Watch and learn"

Fecha de curación: 2026-10-23. Alcance: las 36 lecciones de Venturoo (20 del Launch Path en `web/src/content/path.ts` y 16 de los dos tracks de Nivel 2 en `web/src/content/tracks.ts`).

Cada lección puede llevar de 0 a 2 videos públicos de YouTube en el campo opcional `videos` (`youtubeId`, `title`, `channel`, `why`, `minutes?`). La app los muestra como extra opcional "Watch and learn" y el adulto los ve también en el Parent Corner.

## 1. Criterios de selección

1. **ID verificado.** Solo se usa un video si su URL exacta (`youtube.com/watch?v=ID`) apareció en un resultado de búsqueda que revisamos. Nunca se adivina ni se construye un ID. El título y el canal coinciden con lo que mostraba la búsqueda (o la página oficial de la organización que lo publica).
2. **Fuente de confianza.** Canales educativos reconocidos y aptos para niños: Sesame Street / Sesame Workshop, Khan Academy, Crash Course Kids, TED-Ed, Common Sense Education.
3. **Encaja con la idea de la lección**, no solo con el tema general.
4. **Corto y apto para 8 a 14 años.** Preferimos videos de menos de 10 minutos, sin lenguaje adulto.
5. **Se excluye:** "hazte rico rápido", gurús de dropshipping, cripto, apuestas, dramas de influencers, videos que animan a mostrar la cara o a crear cuentas, y canales que venden productos a niños.
6. **Calidad antes que cantidad.** Si no pudimos verificar un buen video, la lección se queda sin video.

### Límites de esta verificación

- La comprobación con oEmbed (`https://www.youtube.com/oembed?...`) **no fue posible**: el proxy de red de este entorno bloquea `www.youtube.com` (CONNECT 403) y WebFetch tampoco resuelve el dominio. Los IDs, títulos y canales se verificaron solo con resultados de búsqueda.
- El presupuesto de búsquedas web de la sesión se agotó antes de cubrir todas las lecciones. Por eso muchas lecciones quedan sin video (ver sección 3).
- La duración exacta no se pudo confirmar, así que el campo `minutes` se dejó vacío. Para los videos de Sesame Workshop, su página oficial indica "menos de 5 minutos".
- **Recomendación:** antes de publicar, un adulto del equipo debe abrir cada enlace, confirmar el canal oficial, la duración y que el video sigue público, y rellenar `minutes`.

## 2. Videos añadidos (7 videos en 7 lecciones)

| Lección | Título | Canal | Enlace | Duración | Por qué (`why`) |
|---|---|---|---|---|---|
| `what-is-a-business` (What Is a Business?) | Advice from young entrepreneurs | Careers and Personal Finance by Khan Academy | https://www.youtube.com/watch?v=ZL-hdqYGuOw | Sin confirmar (corto) | Hear real young business owners share what they wish they knew at the start. |
| `needs-and-wants` (Needs vs Wants) | Wants and Needs with Bert and Ernie | Sesame Workshop | https://www.youtube.com/watch?v=8X03VasFY38 | Menos de 5 min (según Sesame Workshop) | Watch Bert help Ernie sort needs from wants at the grocery store. |
| `quick-prototype` (Your First Prototype) | The Engineering Process: Crash Course Kids #12.2 | Crash Course Kids | https://www.youtube.com/watch?v=fxJWin195kU | Sin confirmar (corto) | See how makers plan, build, test, and improve, step by step. |
| `family-feedback` (The Feedback Mission) | Sesame Street: Power of Yet Lyric Video with Janelle Monáe | Sesame Street | https://www.youtube.com/watch?v=_y5jkSQDC5E | Sin confirmar (canción corta) | A catchy song about how practice and feedback help you get better. |
| `the-safe-circle` (The Safe Circle) | Pause & Think Online | Common Sense Education | https://www.youtube.com/watch?v=X_duZ-1LApg | Sin confirmar (corto) | Learn to stop and think before you share anything online. |
| `money-jars-and-next` (Money Jars and Product #2) | Elmo’s Spend, Share, and Save Jars | Sesame Workshop | https://www.youtube.com/watch?v=oqgtFqd8nHo | Menos de 5 min (según Sesame Workshop) | See how three jars help Abby decide what to spend, share, and save. |
| `pod-spot-the-scam` (Spot the Get-Rich-Quick Trap) | How to spot a pyramid scheme - Stacie Bosley | TED-Ed | https://www.youtube.com/watch?v=SBGfHk91Vrk | Sin confirmar (lección animada corta) | Learn the tricks some money schemes use so nobody can fool you. |

Notas:
- Los dos videos de Sesame están pensados para niños más pequeños. Para 8 a 10 años funcionan bien; los de 12 a 14 quizá los vean como "de peques", por eso son opcionales.
- El video de TED-Ed sobre esquemas piramidales es el más adecuado para la franja de 11 a 14 años.
- El video de Khan Academy forma parte de su sección de emprendimiento (serie con la Kauffman Foundation).

## 3. Lecciones sin video y oportunidad de contenido

Estas 29 lecciones no tienen video verificado. Cada hueco es una oportunidad para que **Venturoo produzca sus propios videos cortos sin rostro con Guroo** (animación o manos y pantalla, 1 a 3 minutos, sin datos personales, con subtítulos), alojados en un canal propio marcado como "made for kids".

### Launch Path

| Lección | Qué tipo de video llenaría el hueco |
|---|---|
| `problems-are-treasure` | Guroo convierte 3 problemas cotidianos (mochila desordenada, aburrimiento en un viaje) en ideas de producto. |
| `who-would-buy` | Animación sobre "tu cliente" y el círculo seguro: familia y amigos de confianza primero. |
| `make-once-sell-many` | Comparación visual: limonada (hay que hacerla cada vez) frente a un PDF (se hace una vez y se vende muchas). |
| `quality-check` | Guroo revisa un producto con su checklist, incluida la revisión de lo que hizo la IA. |
| `make-it-yours` | Qué hace la IA y qué haces tú; copyright explicado con ejemplos sencillos y por qué ser honesto sobre la IA. |
| `finish-your-file` | Pantalla grabada: juntar páginas en un solo PDF limpio. |
| `secret-shop-name` | Qué es una marca y por qué nunca usar tu nombre real; trucos para inventar nombres. |
| `brand-look-and-tagline` | Colores y emociones, mascota y eslogan, con ejemplos de marcas inventadas. |
| `words-that-sell` | Antes y después de un título y una descripción de producto. |
| `price-it-right` | Precio, costo y ganancia con números simples y un puesto de limonada animado. |
| `cover-and-publish` | Cómo hacer una portada atractiva y la revisión de la tienda con el adulto. |
| `faceless-marketing` | Ideas de contenido sin rostro: manos, pantalla, mockups; revisar fondos para no mostrar datos. |
| `your-share-message` | Cómo escribir un mensaje que la gente quiera leer, con ejemplo. |
| `first-sale` | Celebrar la primera venta, dar las gracias y llevar un registro. |

### Track Merch Makers (print-on-demand)

| Lección | Qué tipo de video llenaría el hueco |
|---|---|
| `pod-what-is-dropshipping` | Explicación honesta, sin promesas de dinero: quién fabrica, quién envía, dónde va el dinero. |
| `pod-print-on-demand` | Recorrido de un pedido: diseño, impresión bajo pedido y envío (idealmente del canal oficial de Printify o Redbubble). |
| `pod-margin-math` | Cálculo de margen con una camiseta y un sticker. |
| `pod-design-for-product` | Diseñar pensando en el producto: tamaño, contraste, fondo transparente. |
| `pod-ai-design` | La IA como ayudante de diseño y por qué el toque final es tuyo. |
| `pod-mockups` | Tutorial de mockups (idealmente del canal oficial de Canva). |
| `pod-list-and-link` | Cómo se publica un producto y quién comparte el enlace (el adulto). |

### Track YouTube sin rostro

| Lección | Qué tipo de video llenaría el hueco |
|---|---|
| `yt-whose-channel` | Por qué el canal es del adulto (mínimo 13 años, cuentas supervisadas). |
| `yt-faceless-formats` | Ejemplos de formatos sin rostro: dibujo acelerado, manos con Lego, pantalla. |
| `yt-made-for-kids` | COPPA y la opción "made for kids" explicada para familias (idealmente de YouTube Creators o YouTube Help). |
| `yt-ad-money-truth` | La verdad sobre el dinero de anuncios: cuánto se gana de verdad y por qué no es dinero rápido. |
| `yt-script-with-ai` | Usar la IA para ideas y guiones, revisando y reescribiendo con tu voz. |
| `yt-edit-and-music` | Editores gratuitos y música segura (Biblioteca de audio de YouTube). |
| `yt-thumbnails-and-labels` | Miniaturas claras y honestas y la etiqueta de contenido alterado o sintético (IA). |
| `yt-quality-over-quantity` | Por qué un buen video vale más que diez apresurados. |

Candidatos encontrados pero **no añadidos** por no poder confirmar el canal oficial: un video "What is AI?" vinculado a las lecciones de AI Literacy de Common Sense (ID b0KaGBOU4Ys), "Sesame Street: Grover and Elmo's Lemonade Stand" (ID pS2f8PdxYuE) y "Personal & Private Information" (ID NKb0S3laHhk). Se pueden revisar a mano y añadir en una próxima pasada. Tutoriales de terceros sobre Printify, Canva, miniaturas o "made for kids" se descartaron por no ser canales oficiales o por tono de "gana dinero".

## 4. Notas de seguridad para madres, padres y tutores

- **Embeds con privacidad mejorada.** Los videos se reproducen con `youtube-nocookie.com`, el modo de privacidad mejorada de YouTube, que no guarda cookies de seguimiento hasta que se pulsa reproducir.
- **Sin reproducción automática.** Ningún video arranca solo. El niño o la niña tiene que pulsar para verlo.
- **Primero pregunta a un adulto.** La app invita a pedir permiso a un adulto antes de ver un video. Recomendamos verlos juntos, sobre todo en los de 8 a 10 años.
- **Siempre son opcionales.** Ninguna lección necesita el video para completarse.
- **Fuera de la app, otras reglas.** Al terminar un video, YouTube puede sugerir otros contenidos si se abre en youtube.com. Dentro de Venturoo el video se queda incrustado; si se abre en YouTube, conviene usar YouTube Kids o una cuenta supervisada.
- **Revisión periódica.** Un video puede volverse privado, cambiar de título o desaparecer. Recomendamos revisar la lista cada trimestre y avisarnos si un enlace falla o el contenido no parece adecuado.
