# Venturoo: dirección visual "Soft 3D World + Adventure Patches"

Fecha: 23 de octubre de 2026. Versión 1.0. Dueño: dirección de arte.
Documento para el fundador y el equipo, en español. Todo texto de producto aparece en inglés *en cursiva* (el producto es en inglés).

Documentos relacionados: [`venturoo-brand-book.md`](./venturoo-brand-book.md) (marca, voz, Guroo, colores y tipografía actuales), [`opciones-de-marca.md`](./opciones-de-marca.md), y el código de estilos en `web/src/app/globals.css` y `web/src/components/Mascot.tsx`.

Este documento **no reemplaza** el libro de marca: lo extiende. Si algo aquí contradice una regla de seguridad, privacidad o voz del libro de marca, manda el libro de marca.

---

## 0. Resumen en 30 segundos

- **La dirección:** un **mundo suave en 3D** (cielo, nubes, objetos redondos y brillantes, Guroo en render 3D para los grandes momentos) más un **sistema de parches de aventura** (insignias planas con contorno grueso, como las de un campamento) para el progreso.
- **Qué se queda:** Sun, Ink, Leaf, Sky, Coral y Cream, Baloo 2 + Nunito, el Guroo SVG plano, los botones con "borde de juego", el respeto a `prefers-reduced-motion`.
- **Qué cambia:** fondo de cielo con degradado y nubes en el mundo del niño, tarjetas grandes y redondas con anillos de progreso, una barra inferior flotante en forma de píldora, íconos de categoría redondos y brillantes, y un movimiento más elástico (squash and stretch).
- **Qué no se toca:** nada de caras de niños (ni fotos ni niños en 3D), nada de culpa con las rachas, las pantallas de padres siguen tranquilas y planas.
- **Prioridad 1:** tokens, barra inferior, Level card, tarjetas con anillo, sistema de insignias y animación de botones. Unas 3 semanas de un ingeniero front-end más 1 a 2 semanas de un ilustrador.

---

## 1. Qué aprendemos de las referencias y del mercado

### 1.1 Las cuatro referencias del fundador (descritas, no vistas por mí)

| Referencia | Lo que tomamos | Lo que NO tomamos |
|---|---|---|
| 1. "Toco & Muku" (Funtyx): zorro 3D estilo Pixar, cielo azul saturado, nubes 3D blancas, fresa 3D, tipografía blanca gruesa y redonda, píldora coral "Watch trailer" | El **cielo saturado con nubes suaves** como escenario del héroe, el **personaje 3D con ojos grandes** para momentos especiales, la tipografía display blanca y gorda, el botón píldora pequeño como acción secundaria, un objeto 3D "golosina" como acento (en nuestro caso un sobre de stickers, un lápiz o una moneda, no una fresa) | Copiar el zorro, su pelaje o sus proporciones (es propiedad de otro estudio). No pude encontrar en la web ninguna referencia pública a "Funtyx" ni a "Toco & Muku", así que no puedo confirmar el estudio ni su estilo exacto |
| 2. "Edulite": pasteles lavanda y durazno, blobs orgánicos, titulares serif redondos, tarjetas grandes de cursos, barra inferior en píldora con "Home" activo, filas de playlist con botón play y candado, CTA píldora oscura | **Tarjetas grandes y redondas** con una ilustración por tarjeta, **filas de lecciones** con play y candado, la **barra en píldora**, el CTA oscuro (Ink) como segunda opción, los blobs como fondos de sección | Los titulares serif (seguimos con Baloo 2, que ya es redonda y es nuestra marca). Una paleta pastel completa: se ve más preescolar y apaga la energía de Sun |
| 3. App 3D de aprendizaje: niños 3D, degradado lavanda a cielo, tarjeta "Level 1" con barra y trofeo 3D, fila de íconos 3D redondos (Lessons, Games, Stories...), tarjetas con anillos "0/5", píldoras durazno "Start" y "Unlock", barra inferior oscura flotante con círculo activo durazno | La **Level card** con barra de progreso y premio 3D, la **fila de íconos redondos brillantes**, los **anillos de progreso "x/5"**, la **barra flotante oscura con círculo activo** (en nuestro caso Ink con círculo Sun), el degradado de cielo (con un toque lavanda solo arriba) | **Los niños 3D.** Venturoo nunca muestra caras de niños, ni realistas ni de dibujos animados (libro de marca, 10.5). En su lugar aparecen Guroo, las mascotas de tienda y los objetos del negocio |
| 4. Parches de exploradores: PATHFINDERS, EXPLORERS, PIONEERS, TRAILBLAZERS, contorno navy grueso, forma de arco, marco de color, letras gruesas y redondas, fondo menta | **Todo el sistema de insignias** (sección 5): forma de parche arqueado, contorno Ink grueso, marco de un color por familia, cinta con el nombre en mayúsculas, tablero de colección con fondo menta | Los nombres en plural de "clubes" (nuestras insignias son logros personales, no grupos). Cualquier sugerencia de equipos o rankings entre niños |

### 1.2 El shot de Dribbble "Watch It, Kids Game Animation"

**Lo que pude verificar:** dribbble.com está bloqueado desde este entorno y la búsqueda no encontró el ID 23269206. Sí encontré un shot muy cercano, **"Watch It! Kids game"** (ID 23106328), de **Budiarti R.** para el estudio **Orely** ([Dribbble, shot 23106328](https://dribbble.com/shots/23106328-Watch-It-Kids-game)). Según los resultados de búsqueda:
- Es un juego móvil para niños que enseña a filtrar lo que ven en internet. Se inspira en *Dumb Ways to Die* y en una campaña pública de Indonesia sobre películas por edad, y cada nivel termina con un contenido educativo corto.
- En el perfil de Orely aparece con la etiqueta "Kids Game Animation". Budiarti R. figura como diseñadora UI/UX con 7 años de experiencia y Creative Director de Orely ([perfil de Budiarti R.](https://budiartidesign.dribbble.com/), [miembros de Orely](https://dribbble.com/Orely/members)).
- Un agregador de empresas sitúa a Orely en Sukabumi (Java Occidental, Indonesia), fundado en 2018, de 11 a 50 personas, con servicios de ilustración, animación, web y branding ([SGPGrid](https://sgpgrid.com/company/orely-ID0000)). Dato de agregador, no verificado con la fuente.

**Lo que NO pude verificar:**
- Que el ID 23269206 sea el mismo proyecto. Lo más probable (inferencia) es que sea un segundo shot del mismo juego centrado en la animación, porque el título coincide casi palabra por palabra y Orely lo etiqueta como "Kids Game Animation". No lo confirmé.
- Cómo se mueve. No vi ni un fotograma. No conozco duraciones, curvas, ni si es 2D, 3D o Lottie.

**Lo que infiero (marcado como inferencia):** si el juego se inspira en *Dumb Ways to Die*, es razonable esperar personajes simples con forma de frijol, colores planos y saturados, tiempos de dibujo animado muy rápidos (anticipación corta, acción exagerada, asentamiento con rebote), mucho squash and stretch y micro-juegos de pocos segundos. Por eso la sección 4 de este documento usa esos principios clásicos. **Pido al fundador que me pase el GIF o el video del shot** (o un enlace de YouTube o Instagram del estudio) para calibrar las curvas y duraciones con el original.

### 1.3 Lecciones de productos de referencia para niños y familias

| Producto | Lección de diseño para Venturoo | Fuente |
|---|---|---|
| **Duolingo** | Su estilo nació de probar ilustraciones "más brillantes, redondas y amigables" para niños (Duolingo KIDS, 2018) y luego pasó a la app principal: minimalismo y juego, formas simples que escalan a mucha producción. Personajes animados con máquinas de estados (Rive) para que reaccionen al usuario. Celebraciones donde animación, sonido y vibración trabajan juntos y llegan rápido al "remate" | [Duolingo: shape language](https://blog.duolingo.com/shape-language-duolingos-art-style/), [Duolingo: visemes con Rive](https://blog.duolingo.com/world-character-visemes), [Rive: caso Lily](https://rive.app/blog/duolingo-s-ai-powered-video-call-brings-lily-to-life), [60fps.design: Fun in Every Frame](https://60fpsdesign.substack.com/p/fun-in-every-frame) |
| **Duolingo (lo que evitamos)** | Las notificaciones de "Duo está triste" y la presión por no perder la racha reciben críticas de culpa y manipulación. Venturoo no copia esto | [Design Buddy: Is Duolingo unethical?](https://designbuddy.substack.com/p/is-duolingo-unethical), [Screenwise: rachas estresantes](https://screenwiseapp.com/guides/managing-duolingo-streaks-when-gamification-becomes-stressful) |
| **Duolingo ABC** | Gratis, sin anuncios ni compras dentro de la app; estilo gráfico consistente y animaciones que "no estorban" la lectura | [TechCrunch 2020](https://techcrunch.com/2020/03/26/duolingos-new-app-teaches-children-how-to-read-and-write/), [Educational App Store](https://www.educationalappstore.com/app/duolingo-abc) |
| **Khan Academy Kids** | 100 % gratis, sin anuncios ni suscripciones; un elenco pequeño de personajes con un narrador (Kodi Bear). El origen es Duck Duck Moose, con IP, dibujo y animación propios | [Khan Academy Kids](https://learn.khanacademy.org/khan-academy-kids/), [App Store](https://apps.apple.com/us/app/khan-academy-kids/id1378467217), [TechCrunch 2016](https://techcrunch.com/2016/08/26/kids-app-maker-duck-duck-moose-joins-khan-academy/) |
| **Toca Boca** | "Juguetes digitales": sin ganar ni perder, sin estrés, sin puntajes altos. El software no castiga una elección rara. Para Venturoo: el error es *"Almost!"*, nunca un sonido de "mal" | [The Toca Boca Story](https://collect.readwriterespond.com/toca-boca-story), [Screenwise sobre Toca Boca](https://screenwiseapp.com/guides/why-toca-boca-apps-are-the-gold-standard-for-preschool-screen-time) |
| **Sago Mini** | Autonomía y propiedad del juego, sin incentivos artificiales. En Jinja's Garden: sin texto, sin temporizadores, sin cultivos que mueren si los olvidas. Para Venturoo: la tienda del niño nunca "se muere" por no entrar | [Apple Developer: Jinja's Garden](https://developer.apple.com/news/?id=3t6o5jec), [Kidscreen 2015](https://kidscreen.com/2015/04/09/sago-sago-dishes-on-developing-for-the-preschool-market) |
| **Headspace (y Headspace for Kids)** | Lo "tranquilo" se construye con círculos y óvalos, caras muy simples, azules suaves, verde salvia y nubes que se mueven lento; fondo blanco cálido en lugar de blanco puro (análisis de un tercero, no guía oficial). Útil para las pantallas de padres y para el modo de movimiento reducido | [Blake Crosley: Headspace (análisis)](https://blakecrosley.com/pt-BR/guides/design/headspace), [Blush: Karen Hong](https://blush.design/blog/post/headspace-mindfulness-app), [Dribbble de Headspace](https://dribbble.com/headspace) |
| **Lingokids** | Rebrand hacia un sistema "dirigido por personajes" con su mascota en el centro del logo y paleta declarada AAA accesible | [Lingokids: nueva identidad](https://lingokids.com/blog/posts/lingokids-new-brand-identity-kids-entertainment), [Kidscreen](https://kidscreen.com/?p=221973) |
| **Prodigy** | Contraejemplo. Denuncia ante la FTC (2021, alegaciones) por mostrar a los niños premios que solo se desbloquean pagando, y por diferencias visibles entre miembros y no miembros ("los miembros en una nube, los demás en el barro"). Venturoo: nunca premios o insignias de pago, nunca diferencias visibles entre familias que pagan y no | [Axios](https://www.axios.com/2021/02/19/prodigy-math-game-ftc-complaint), [Wikipedia: Prodigy](https://en.wikipedia.org/wiki/Prodigy_Math_Game), [Common Sense Media, reseñas](https://www.commonsensemedia.org/app-reviews/prodigy-kids-math-game/user-reviews/adult) |
| **Epic!** | Insignias por leer y por retos, niveles "como un videojuego", un registro de lectura que ven los padres. Para Venturoo: las insignias también se muestran en el Parent zone | [Public Libraries Online](https://publiclibrariesonline.org/2017/06/epic-app-raises-8-million-to-keep-kids-reading/), [Common Sense Education](https://www.commonsense.org/education/reviews/epic-kids-books-and-videos/teacher-reviews/4105906) |
| **Greenlight** | Dos experiencias separadas (app del niño y app del padre) con controles claros para el adulto; rebrand con colores "mint" frescos y patrones. Para Venturoo: el mundo del niño y el del padre se ven distintos a propósito | [Greenlight: our fresh new look](https://greenlight.com/blog/our-fresh-new-look), [Greenlight: nueva app](https://greenlight.com/blog/the-new-greenlight-app-is-here) |

### 1.4 Guía de UX para niños de 8 a 14 (investigación)

- **Las edades no son un bloque.** Nielsen Norman Group (NN/g) estudia a los niños en tres grupos (3 a 5, 6 a 8, 9 a 12) y pide apuntar el contenido a franjas de edad estrechas ([NN/g: children's websites usability issues](https://www.nngroup.com/articles/childrens-websites-usability-issues/)). Su informe para adolescentes (13 a 17) tiene 124 guías y advierte contra el tono condescendiente o infantil ([NN/g: UX Design for Teenagers](https://www.nngroup.com/reports/teenagers-on-the-web/), [Young Users](https://www.nngroup.com/topic/young-users/)). **Consecuencia:** Venturoo necesita un modo "Founder" (11 a 14) más sobrio que el modo "Creator" (8 a 10) (sección 2.12).
- **Los adolescentes se sobreestiman** y rinden peor que los adultos por impaciencia y menor nivel de lectura; casi todos usan el móvil y les cuestan los targets pequeños y los efectos hover ([resumen de terceros del informe de NN/g](https://erikrunyon.com/page4/)). **Consecuencia:** pantallas rápidas, un objetivo por pantalla, nada que dependa del hover.
- **Los niños hacen clic en anuncios** con más facilidad que los adultos y creen que un anuncio con un personaje lleva a un juego ([NN/g](https://www.nngroup.com/articles/childrens-websites-usability-issues/)). **Consecuencia:** Venturoo no tiene anuncios, y ninguna promoción interna (por ejemplo del plan Family) aparece en el mundo del niño con forma de juego.
- **Tocar es fácil, arrastrar con precisión no** ([NN/g: physical development, Feifei Liu](https://www.nngroup.com/articles/author/feifei-liu/?page=5)). **Consecuencia:** ningún gesto de arrastre obligatorio; todo arrastre tiene alternativa de toque.
- **Tamaño de toque:** NN/g recomienda como mínimo 1 cm x 1 cm físico ([NN/g: touch target size](https://www.nngroup.com/articles/touch-target-size/)); Apple usa 44 pt y Google 48 dp ([UXPin](https://uxpin.com/studio/blog/responsive-design-touch-devices-key-considerations/)); WCAG 2.2 exige 24 x 24 px CSS como mínimo AA ([Stark: 2.5.8](https://www.getstark.co/wcag-explained/operable/input-modalities/target-size-minimum/)). **Regla Venturoo para niños: 48 x 48 px mínimo, 56 px para la acción principal, 8 px de separación.**
- **Lectura:** los textos de sitios infantiles suelen ser demasiado difíciles para su edad según índices de legibilidad ([estudio de sitios de noticias para niños, KU Leuven](https://lirias.kuleuven.be/retrieve/223694)). **Consecuencia:** frases de 8 a 15 palabras (ya es regla de marca), 18 a 20 px en lecciones, una idea por tarjeta, y en el futuro un botón de "leer en voz alta" para 8 a 10.
- **Movimiento y accesibilidad:** el parallax, los zooms y los giros pueden marear a personas con trastornos vestibulares; la solución estándar es `prefers-reduced-motion` con versiones estáticas ([WebKit: Responsive Design for Motion](https://webkit.org/blog/7551/responsive-design-for-motion/), [Universidad de Michigan](https://teamdynamix.umich.edu/TDClient/30/Portal/KB/Article/14019/Accommodating-Vertigo-and-Vestibular-Disorders)). Nada puede destellar más de 3 veces por segundo (WCAG 2.3.1, nivel A) ([W3C](https://www.w3.org/WAI/WCAG20/Understanding/three-flashes-or-below-threshold)).
- **Nudges:** el Children's Code del ICO (Reino Unido) prohíbe usar técnicas de "empujón" para que los niños den más datos, debiliten su privacidad o **alarguen su uso** del servicio ([ICO, respuesta de 5Rights](https://cy.ico.org.uk/media/2616600/5-rights-foundation.pdf)). No aplica legalmente en EE. UU., pero es el estándar de buenas prácticas que adoptamos.

---

## 2. La dirección visual

### 2.1 Declaración

> **Venturoo es un mundo suave y luminoso donde cada paso es una aventura y cada logro se cose en tu mochila.**
>
> El **Soft 3D World** es el escenario: un cielo azul saturado, nubes blandas, objetos redondos y brillantes que dan ganas de tocar, y Guroo en 3D cuando algo importante pasa. Las **Adventure Patches** son la memoria: insignias planas, gruesas y honestas, como las que se ganan en un campamento, que cuentan lo que el niño hizo de verdad.

Dos capas, dos lenguajes, una regla: **3D para emocionar, plano para usar.**

### 2.2 Qué se queda del libro de marca

- Los seis colores base (Sun, Ink, Leaf, Sky, Coral, Cream) y sus versiones oscuras, con las mismas reglas de contraste (Sun nunca es color de texto, texto Ink sobre Sun, Leaf y Coral).
- Baloo 2 para display y Nunito para texto. La escala de tipos del libro de marca sigue valiendo para padres y landing; para el niño se amplía (sección 3.2).
- El Guroo SVG plano de `Mascot.tsx` como versión de interfaz: íconos, chat, burbujas de lección, estados vacíos pequeños.
- El botón "de juego" con borde inferior (`.btn` con `--edge`), que ahora gana forma de píldora y squash and stretch.
- Emojis como íconos dentro de texto y tarjetas pequeñas (libro de marca 10.6). Los nuevos íconos glossy solo reemplazan a los emojis en la fila de categorías y en la barra inferior.
- El respeto total a `prefers-reduced-motion`, ya implementado en `globals.css`.

### 2.3 Qué cambia

| Antes | Ahora |
|---|---|
| Fondo Cream plano en todo el producto | **Mundo del niño:** cielo con degradado y nubes en Home, Path y celebraciones; Cream sigue en lecciones y formularios. **Padres:** Cream y blanco, sin cielo |
| Guroo solo en SVG plano | **Dos Guroos:** render 3D suave (hero, celebraciones, onboarding, landing) y SVG plano (todo lo pequeño o funcional) |
| Tarjetas blancas con borde Line | Tarjetas grandes, radio 28 px, sombra suave "3D", ilustración por tarjeta, anillo de progreso |
| Menú en la cabecera (Guroo, Shop, Words) | **Barra inferior flotante en píldora** (Home, Path, Guroo, Shop, Badges); la cabecera queda para el nombre de tienda, racha y la puerta *Grown-ups* |
| Sin sistema de insignias | **12 Adventure Patches** con tablero de colección |
| Animaciones sueltas (`pop`, `float`, `hop`) | Un **sistema de movimiento** con curvas nombradas, idle de Guroo y coreografía de celebración |

### 2.4 Nuevos colores de apoyo (con contraste calculado)

Se añaden cuatro familias de apoyo. Ninguna reemplaza a los colores base.

| Token | Hex | Uso | Contraste con Ink #1B2340 |
|---|---|---|---|
| `sky-700` | #1F7FC0 | Parte alta del cielo del héroe (detrás de titulares blancos) | Blanco sobre él: 4,33 (AA para texto grande) |
| `sky-500` | #2E9BD6 | Banda media del cielo | Blanco sobre él: 3,1 (solo display de 32 px o más) |
| `sky-300` | #7FD3F7 | Banda baja del cielo, píldoras de info | 9,2 |
| `sky-100` | #E8F7FD | Horizonte, superficies frías | 14,1 |
| `lilac-300` | #C9B8FF | Toque lavanda en la cima del cielo de Level 2, ícono *Stories* | alto, usar con Ink |
| `lilac-100` | #EEE8FF | Superficie de Level 2 | 12,4 aprox. |
| `peach-300` | #FFB37D | Píldora secundaria *Start*, círculos de progreso cálidos | 8,8 |
| `peach-100` | #FFD9B8 | Superficie cálida de tarjetas de unidad | 11,7 |
| `honey` | #FFC94D | Marco de insignia, estrella, monedas | 10,1 |
| `mint` | #7ED9C3 | Marco de insignia, anillos completos | 9,3 |
| `mint-100` | #DDF5EC | **Fondo del tablero de insignias** (como la referencia 4) | alto |
| `cloud` | #FFFFFF | Nubes | n/a |
| `cream-50` | #FFF8EE | Fondo de pantallas de padres (cálido, más calmado que Cream) | 14,6 |

Regla nueva de contraste: **texto blanco solo sobre `sky-700`, Ink o `leaf-dark`, y en tamaño display.** En todo lo demás, texto Ink.

---

## 3. Sistema de diseño (especificación para ingeniería)

### 3.1 Tokens (Tailwind 4, `@theme` en `globals.css`)

Bloque para añadir debajo de los tokens actuales. No borra ninguno existente.

```css
@theme {
  /* Cielo */
  --color-sky-700: #1f7fc0;
  --color-sky-500: #2e9bd6;
  --color-sky-300: #7fd3f7;
  --color-sky-100: #e8f7fd;
  /* Apoyo */
  --color-lilac-300: #c9b8ff;
  --color-lilac-100: #eee8ff;
  --color-peach-300: #ffb37d;
  --color-peach-100: #ffd9b8;
  --color-honey: #ffc94d;
  --color-mint: #7ed9c3;
  --color-mint-100: #ddf5ec;
  --color-cream-50: #fff8ee;
  --color-cloud: #ffffff;

  /* Superficies */
  --color-surface: #ffffff;          /* tarjeta estándar */
  --color-surface-warm: #fff8ee;     /* tarjeta sobre cielo, padres */
  --color-surface-sunk: #f6ead8;     /* pistas de barras y anillos */
  --color-nav: #1b2340;              /* barra flotante */

  /* Radios */
  --radius-xs: 8px;
  --radius-sm: 12px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-card: 28px;
  --radius-xl: 36px;
  --radius-pill: 999px;

  /* Sombras */
  --shadow-soft: 0 10px 24px -10px rgb(27 35 64 / 0.28);
  --shadow-card: 0 4px 0 rgb(27 35 64 / 0.08), 0 18px 32px -14px rgb(27 35 64 / 0.30);
  --shadow-float: 0 14px 34px -10px rgb(27 35 64 / 0.45);
  --shadow-glossy: inset 0 -6px 0 rgb(0 0 0 / 0.12), inset 0 6px 10px rgb(255 255 255 / 0.55), 0 8px 16px -6px rgb(27 35 64 / 0.35);
  --shadow-inner-track: inset 0 2px 4px rgb(27 35 64 / 0.15);

  /* Movimiento (ver sección 4) */
  --ease-press: cubic-bezier(0.3, 0, 0.5, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-spring: cubic-bezier(0.2, 0.9, 0.3, 1.2);
  --ease-soft: cubic-bezier(0.25, 0.8, 0.25, 1);
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);
}

/* Degradados (como variables normales, no tokens de color) */
:root {
  --grad-sky: linear-gradient(180deg, #1f7fc0 0%, #2e9bd6 38%, #7fd3f7 72%, #e8f7fd 100%);
  --grad-sky-level2: linear-gradient(180deg, #c9b8ff 0%, #7fd3f7 55%, #e8f7fd 100%);
  --grad-sunrise: linear-gradient(180deg, #ffd9b8 0%, #fff1de 100%);   /* celebraciones cálidas */
  --grad-gloss: radial-gradient(120% 90% at 30% 20%, rgb(255 255 255 / 0.65) 0%, rgb(255 255 255 / 0) 55%);
  --grad-progress: linear-gradient(90deg, #2fa58c 0%, #7ed9c3 100%);
}
```

**Sombra del botón presionado (pressed):** se mantiene el patrón actual. En reposo `box-shadow: 0 5px 0 var(--edge)`; presionado `translateY(4px)` y `box-shadow: 0 1px 0 var(--edge)`. El borde inferior es lo que hace que el botón parezca un objeto 3D sin necesidad de render.

### 3.2 Escala tipográfica (mundo del niño)

| Rol | Fuente | Móvil | Escritorio | Peso | Interlineado | Notas |
|---|---|---|---|---|---|---|
| `display-xl` (héroe) | Baloo 2 | 44 px | 72 px | 800 | 1,0 | Blanco sobre `sky-700` con `text-shadow: 0 3px 0 rgb(27 35 64 / .25)`. Máximo 6 palabras |
| `display` | Baloo 2 | 34 px | 48 px | 800 | 1,05 | Celebraciones, nombre de tienda |
| `h1` | Baloo 2 | 28 px | 36 px | 700 | 1,15 | Título de pantalla |
| `h2` | Baloo 2 | 22 px | 26 px | 700 | 1,2 | Título de tarjeta grande |
| `h3` | Baloo 2 | 18 px | 20 px | 700 | 1,25 | Título de fila |
| `lesson` | Nunito | 20 px | 22 px | 600 | 1,55 | Texto de lección, mínimo absoluto 18 px |
| `body` | Nunito | 18 px | 18 px | 600 | 1,5 | Texto general del niño |
| `label` | Nunito | 16 px | 16 px | 800 | 1,2 | Botones, píldoras, pestañas |
| `caption` | Nunito | 14 px | 14 px | 700 | 1,35 | Contadores "2/5", metadatos. Nunca información crítica |

Padres y landing de padres: se mantiene la escala del libro de marca (10.4), con `body` a 16 px y peso 400.

**Lettering de insignias:** Baloo 2 800 en mayúsculas, `letter-spacing: 0.02em`, comprimido horizontalmente al 92 % solo dentro del SVG (no en texto HTML). En los archivos finales, el texto va convertido a trazos.

### 3.3 Espaciado y layout

- Rejilla de 4 px. Escala: 4, 8, 12, 16, 20, 24, 32, 40, 56, 72.
- Margen lateral móvil: 20 px. Separación entre tarjetas: 16 px. Relleno interno de tarjeta grande: 20 px (24 px en escritorio).
- Ancho máximo del mundo del niño: 560 px centrado en escritorio (la app se siente como un teléfono, igual que Duolingo web), con el cielo ocupando todo el ancho de fondo.
- Reservar `padding-bottom: calc(96px + env(safe-area-inset-bottom))` en todas las pantallas con barra inferior.
- **Targets:** 48 x 48 px mínimo, 56 px de alto para CTA principal, 8 px mínimo entre targets.

### 3.4 Iconografía

Tres niveles, sin mezclar dentro del mismo componente:

1. **Íconos glossy de categoría** (nuevo, referencia 3). Círculo de 64 px (56 px en móvil pequeño), fondo de color sólido + `--grad-gloss` encima + `--shadow-glossy`, ícono interior plano en blanco o Ink de 28 px con contorno Ink de 2,5 px. Etiqueta debajo en `caption`, siempre visible.
   - *Lessons* (Sun, libro abierto), *Missions* (Coral, diana), *My Shop* (Leaf, toldo a rayas), *Business Words* (Sky, globo de diálogo con "Aa"), *Journal* (Lilac, cuaderno con candado).
   - Versión de producción ideal: render 3D pequeño (PNG/WebP de 128 px a 2x). Versión P1: SVG plano con el degradado de brillo, que se ve "casi 3D" y pesa casi nada.
2. **Íconos de interfaz:** línea redondeada 2 px, cuadrícula 24 px, color Ink (libro de marca 10.7). Para cerrar, atrás, candado, play, check, ajustes.
3. **Emojis:** solo dentro de texto corrido y estados pequeños, con el set de marca.

### 3.5 Ilustración: cuándo 3D y cuándo plano

| Situación | Estilo | Por qué |
|---|---|---|
| Héroe de la landing, héroe de Home del niño, onboarding, celebración de unidad, primera venta, desbloqueo de Level 2 | **Render 3D suave** de Guroo y objetos | Son momentos de emoción; el 3D "Pixar" transmite calidad y magia |
| Burbujas de Guroo en lecciones, chat *Ask Guroo*, toasts, estados vacíos pequeños, favicon, logo | **SVG plano** (`Mascot.tsx`) | Se lee a 24 a 96 px, se anima con CSS, pesa casi nada, encaja con el texto |
| Insignias | **Plano con contorno grueso** (estilo parche) | Contraste con el mundo 3D: lo ganado se siente "cosido", coleccionable y claro a tamaño pequeño |
| Pantallas de padres | **Plano y escaso** (Guroo pequeño, objetos de línea) | Calma y seriedad |
| Fotos | Nunca de niños. Solo productos de ejemplo hechos por el equipo (un sobre de stickers impreso, una pantalla) | Libro de marca 10.5 |

**Reglas del render 3D de Guroo:**
- Material: pelaje "aterciopelado" suave, no pelo realista. Superficies con subsurface leve, brillo especular suave. Gafas redondas con montura Ink y reflejo blanco. Toldo de la bolsa en Leaf con rayas blancas, de tela.
- Proporciones: cabeza grande (cerca del 40 % de la altura), ojos grandes con dos brillos, mejillas Coral. Debe leerse como la misma Guroo del SVG (misma silueta de orejas, mismos colores #E9894B y #FFE1C4).
- Luz: principal cálida desde arriba a la izquierda, relleno frío (cielo) desde la derecha, sombra de contacto suave en el suelo. Nunca sombras duras.
- Poses mínimas (P2): saludando, pensando (pata en la barbilla), saltando de alegría, señalando hacia arriba, sosteniendo un sobre de stickers, dormida en una nube (estado vacío o "vuelve mañana" sin culpa).
- Entrega: PNG con transparencia, exportado a AVIF y WebP en 1x, 2x y 3x; máximo 120 KB por imagen de héroe a 2x. Archivo fuente (.blend) propiedad de Venturoo.
- **IA generativa:** solo para explorar conceptos internos. Las imágenes finales las produce o repasa un ilustrador 3D para garantizar consistencia del personaje y derechos claros.

**Objetos 3D del mundo (equivalentes a la fresa de la referencia 1):** nube, moneda con una "V", sobre de stickers, lápiz, toldo de tienda, cohete de papel, bombilla, estrella. Mismo material suave. Uno o dos por pantalla, nunca más.

### 3.6 Componentes

#### A. Barra inferior flotante del niño (`KidTabBar`)

- **Forma:** píldora flotante, fondo `--color-nav` (Ink), alto 68 px, radio pill, separada 12 px de los bordes laterales y 12 px + `safe-area-inset-bottom` del borde inferior. Sombra `--shadow-float`. Ancho máximo 440 px centrado.
- **Pestañas (5):** *Home* (casa), *Path* (camino con banderita), *Guroo* (cara de Guroo, al centro), *Shop* (toldo), *Badges* (parche). Cada pestaña 56 x 56 px mínimo.
- **Estado activo:** círculo Sun de 48 px detrás del ícono, ícono en Ink, etiqueta visible debajo solo en la activa (o en todas, si las pruebas con niños de 8 a 9 lo piden). Estado inactivo: ícono en `cream` al 70 %.
- **Pestaña Guroo:** botón central de 60 px que sobresale 10 px por encima de la píldora, fondo Cream con el Guroo SVG. Si el chat de IA está apagado por el padre, la pestaña abre la página de Guroo con consejos y la explicación *"Ask your grown-up to turn on Ask Guroo."* (sin candado rojo ni tono de castigo).
- **Movimiento:** el círculo activo se desliza entre pestañas con `transform` 320 ms `--ease-bounce`; el ícono hace un squash pequeño al tocar (sección 4.2).
- **Accesibilidad:** `<nav aria-label="Kid menu">` con enlaces, `aria-current="page"` en la activa, etiquetas de texto reales (no solo íconos). La puerta *Grown-ups* sale de la barra y queda en la cabecera, pequeña y en `ink-soft`, para que no compita.
- **Ruta nueva:** `/kid/[kidId]/badges` (hoy no existe). *Words* pasa a ser una categoría glossy en Home.

#### B. Level card con barra de progreso y premio

- Tarjeta blanca radio 28 px, `--shadow-card`, sobre el cielo. Relleno 20 px.
- Contenido: etiqueta píldora `peach-100` *"Level 1"*; título `h2` *"Your Launch Path"*; subtítulo `body` *"Every step gets you closer to your first sale."*; barra de progreso; a la derecha, **premio 3D** (P1: el parche de la próxima insignia; P2: render 3D de un toldo dorado o una moneda) de 72 px que sobresale de la tarjeta 16 px por arriba.
- **Barra (slider de progreso, no interactivo):** alto 16 px, pista `--color-surface-sunk` con `--shadow-inner-track`, relleno `--grad-progress`, brillo superior existente (`.progress-shine`), y un "pulgar" circular de 28 px en el extremo del relleno con Guroo plano pequeño o una estrella. Texto debajo: *"7 of 20 lessons"*.
- Al terminar una lección, el relleno avanza con 600 ms `--ease-spring` y el pulgar hace un pequeño salto.
- Lectores de pantalla: `role="progressbar"`, `aria-valuenow`, `aria-valuemax`, `aria-label="Launch Path progress"`.

#### C. Tarjetas de unidad y de lección con anillo de progreso "x/5"

- **Tarjeta de unidad:** ancho completo, alto mínimo 132 px, radio 28 px, fondo de color suave por unidad (Unit 1 `peach-100`, Unit 2 `sky-100`, Unit 3 `lilac-100`, Unit 4 `mint-100`), ilustración 3D o plana de 96 px a la derecha, título `h2` (*"Idea Hunt"*), subtítulo `body` y abajo a la izquierda el **anillo de progreso**.
- **Anillo:** SVG de 52 px, trazo 6 px, pista `rgb(27 35 64 / .12)`, progreso Leaf (completo: Leaf con check). Texto central `caption` 800: *"2/5"*. Animación de trazo con `stroke-dashoffset` 700 ms `--ease-spring`.
- **Botón de la tarjeta:** píldora `peach-300` con texto Ink *"Start"* o *"Continue"*; si está bloqueada, píldora `surface-sunk` con candado y *"Unlocks after Unit 1"* (texto que explica, no solo un candado).
- Toda la tarjeta es tocable (un solo enlace), el botón es decorativo para evitar dos targets que hacen lo mismo.

#### D. Filas de lección tipo playlist

- Fila de 72 px de alto, radio 20 px, fondo blanco, separadas 10 px.
- Izquierda: círculo de 48 px. Estados:
  - **Siguiente:** Sun con ícono play Ink y `pulse-ring-sun` (ya existe).
  - **Hecha:** Leaf con check blanco (ícono grande, el contraste de un ícono de 24 px pasa como gráfico).
  - **Disponible:** blanco con borde Line y play Ink.
  - **Bloqueada:** `surface-sunk` con candado Ink al 60 %.
- Centro: título `h3` (*"Problems Are Treasure"*) y meta `caption` con ícono de reloj: *"5 min, Lesson 3"* (coma en lugar de punto medio, que los lectores de pantalla leen mal).
- Derecha: chip de misión si la lección tiene *Real-world mission* (🎯).
- Una fila bloqueada se puede tocar y muestra un toast amable: *"Finish 'Needs vs Wants' first. You're close!"*

#### E. Tablero de colección de insignias (`/badges`)

- Fondo `mint-100` con una textura muy suave de puntadas (patrón SVG de líneas discontinuas al 6 % de opacidad). Es el único lugar del mundo del niño sin cielo: es "la mochila".
- Cuadrícula de 3 columnas en móvil (2 en pantallas menores de 360 px), 4 en escritorio, separación 16 px. Cada insignia de 104 px.
- Insignias ganadas: a color, con fecha pequeña debajo (*"Earned Oct 23"*). Insignias por ganar: silueta del parche en `rgb(27 35 64 / .10)` con contorno discontinuo y el nombre visible, más el criterio al tocar (*"Finish Unit 2: Make It"*). Nunca ocultar qué hay que hacer.
- Agrupadas por secciones con título `h3`: *Launch Path*, *Level 2*, *Habits*.
- Al tocar una insignia ganada: hoja inferior con la insignia a 200 px, la historia (*"You found your first business idea."*) y un botón *"Show my grown-up"* (marca la insignia como "para mostrar" en el Parent zone; no comparte nada fuera).

#### F. CTA principal en píldora

- Variante `btn-pill`: radio pill, alto 56 px, relleno horizontal 28 px, `label` 18 px 800.
- Colores: **Sun con texto Ink** (principal) y **Ink con texto Cream** (alternativa oscura, referencia 2). Secundario: blanco con borde Line. Píldora pequeña (alto 40 px, `label` 15 px, visualmente pequeña pero con área de toque de 48 px vía padding o pseudo-elemento): Coral-dark con texto blanco solo si el texto es de 18 px en negrita o más; si no, `peach-300` con Ink.
- Borde inferior 5 px `--edge`; squash and stretch al presionar (sección 4.2).
- Un solo CTA Sun por pantalla.

#### G. Héroe de cielo con nubes (Home del niño y landing)

- Fondo `--grad-sky` en todo el ancho, alto 360 a 420 px en móvil (Home del niño: 280 px para que la Level card quede visible sin hacer scroll, porque los niños hacen poco scroll según NN/g).
- **Nubes:** 3 a 5 SVG de nubes (formas de 3 a 4 círculos fusionados, blanco con un degradado inferior a `sky-100` y sombra interna suave) en dos planos: lejos (opacidad 0,7, más pequeñas) y cerca (opacidad 1, se solapan con el borde inferior del héroe y "abrazan" la primera tarjeta).
- Movimiento: las nubes lejanas derivan horizontalmente 24 px en 18 s, ida y vuelta, `ease-in-out`. Las cercanas, quietas. **Sin parallax con el scroll.** Con movimiento reducido, todo quieto.
- Contenido niño: saludo `display` (*"G'day, Cosmic Doodle Co.!"*, usando el nombre secreto de tienda, nunca el nombre real), Guroo 3D a la derecha (o SVG en P1), racha amable arriba a la derecha.
- Contenido landing (padres): titular `display-xl` blanco *"Your kid's first online sale, in about 30 days."*, CTA Sun *"Join the pilot"*, píldora pequeña Coral-dark *"Watch how it works"* (eco de la referencia 1), Guroo 3D con su tienda. Debajo del héroe, la landing vuelve a Cream y al tono tranquilo de padres.
- El horizonte del cielo termina en `sky-100` y se funde con Cream mediante una curva de colina suave (SVG de 40 px de alto en Leaf al 25 %).

#### H. Estados vacíos

Fórmula: **Guroo (plano, 96 a 120 px) + una frase + una acción.** Nunca culpa.
- Sin insignias: Guroo con una mochila vacía. *"Your backpack is ready for its first patch."* CTA *"Start Lesson 1"*.
- Tienda sin productos: Guroo abriendo el toldo. *"Your shop is waiting for its first product."* CTA *"Make something"*.
- Volver después de días: Guroo 3D dormida en una nube (P2), *"Welcome back! Your shop kept your spot."* Nada de "you missed X days".
- Error de red: nube con un enchufe. *"The clouds got in the way. Try again?"*
- Guroo apagado por el padre: Guroo con un cartel de *"Back soon"*. *"Ask Guroo is off for now. Your grown-up can turn it on."*

### 3.7 Modo Creator (8 a 10) y modo Founder (11 a 14)

Mismo sistema, dos intensidades, elegido automáticamente por la banda de edad que el padre indica (sin pedir la edad exacta al niño).

| Aspecto | Creator (8 a 10) | Founder (11 a 14) |
|---|---|---|
| Cielo | Degradado completo con nubes | Degradado más corto, 2 nubes, más espacio en blanco |
| Guroo | Grande y frecuente | Más pequeño, aparece menos, más "mentora" |
| Rebote | Amplitud completa (sobrepaso del 8 %) | Amplitud reducida (sobrepaso del 4 %), duraciones un 15 % más cortas |
| Texto | 20 px en lecciones | 18 px en lecciones, más densidad |
| Palabras de interfaz | *Path*, *Badges* | Igual (las palabras ya son neutras); evitar *"adventure!"* en exceso |
| Confeti | Lección: sí, discreto | Lección: no, solo hitos de unidad y venta |

NN/g insiste en no ser condescendiente con adolescentes; el modo Founder es nuestra respuesta para que un niño de 13 no se avergüence de usar la app.

---

## 4. Principios de movimiento

### 4.1 Cinco principios

1. **Cada toque tiene respuesta física.** Todo lo que se toca se aplasta un poco y rebota (squash and stretch).
2. **Anticipación, acción, asentamiento.** Como en los dibujos animados: un pequeño gesto previo, el movimiento principal y un rebote que se calma.
3. **Una cosa se mueve a la vez.** En cada momento hay un protagonista del movimiento. Los idle de Guroo se pausan mientras el niño responde una pregunta.
4. **Rápido al premio.** Las celebraciones llegan a su "remate" antes de 1 segundo y siempre se pueden saltar.
5. **El movimiento es opcional.** Con `prefers-reduced-motion`, toda la información sigue llegando, con fundidos y cambios de estado inmediatos.

### 4.2 Curvas y duraciones

| Nombre | Curva | Duración | Uso |
|---|---|---|---|
| `press` | `cubic-bezier(0.3, 0, 0.5, 1)` | 90 ms | Bajada del botón al tocar |
| `bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | 260 a 320 ms | Soltar botón, círculo activo de la barra, aparición de chips |
| `spring` | `cubic-bezier(0.2, 0.9, 0.3, 1.2)` | 280 a 600 ms | Entrada de tarjetas y hojas, barras y anillos de progreso (ya usada en `slide-up`) |
| `soft` | `cubic-bezier(0.25, 0.8, 0.25, 1)` | 200 a 300 ms | Fundidos, cambios de color, pantallas de padres |
| `exit` | `cubic-bezier(0.4, 0, 1, 1)` | 160 a 200 ms | Salidas (siempre más rápidas que las entradas) |
| `idle` | `ease-in-out` | 3 a 18 s | Nubes, respiración de Guroo |

Para navegadores modernos se puede usar un muelle más realista con `linear()` (soportado en Chrome 113+, Safari 17.2+, Firefox 112+), con `bounce` como alternativa:

```css
--ease-spring-real: linear(0, 0.18 6%, 0.62 15%, 1.04 27%, 1.1 33%, 1.03 44%, 0.99 56%, 1.005 72%, 1);
```

(Valores aproximados para un muelle con un rebote visible; ajustar a ojo con el GIF de referencia cuando lo tengamos.)

**Squash and stretch del botón (CSS de referencia):**

```css
.btn-pill { transition: transform 260ms var(--ease-bounce), box-shadow 260ms var(--ease-bounce); }
.btn-pill:active:not(:disabled) {
  transform: translateY(4px) scale(1.04, 0.92);   /* aplasta: más ancho, menos alto */
  box-shadow: 0 1px 0 var(--edge);
  transition-duration: 90ms;
  transition-timing-function: var(--ease-press);
}
@keyframes pop-release {            /* se dispara al soltar con una clase .is-released */
  0%   { transform: translateY(4px) scale(1.04, 0.92); }
  45%  { transform: translateY(-2px) scale(0.97, 1.05); } /* estira */
  75%  { transform: translateY(0) scale(1.01, 0.99); }
  100% { transform: none; }
}
.btn-pill.is-released { animation: pop-release 320ms var(--ease-soft); }
```

Regla: la deformación máxima es 8 % (4 % en Founder). Nunca deformar el texto de forma visible en botones pequeños; en ese caso, solo `translateY` y sombra.

### 4.3 Idle de Guroo (SVG plano y, en P3, Rive)

Para animar el SVG actual hay que agrupar partes en `Mascot.tsx` (`<g id="ear-left">`, `<g id="ear-right">`, `<g id="eyes">`, `<g id="body">`) con `transform-origin` en la base de cada oreja y en el centro de los ojos.

| Animación | Detalle | Frecuencia |
|---|---|---|
| **Parpadeo** | `#eyes` `scaleY(1 → 0.1 → 1)` en 140 ms; a veces doble parpadeo | Intervalo aleatorio de 3 a 6 s (JS con `setTimeout`, no un loop fijo, para que no se sienta mecánico) |
| **Movimiento de orejas** | Una oreja rota `0 → -10° → 6° → 0` en 520 ms `bounce`; la otra con 80 ms de retraso | Cada 8 a 12 s, y siempre que el niño acierta |
| **Respiración** | `#body` `scale(1 → 1.015)` en 3,2 s `ease-in-out` | Continuo, muy sutil |
| **Salto (hop)** | Anticipación: `scale(1.06, 0.92)` 120 ms; salto `translateY(-16px) scale(0.96, 1.06)` 220 ms `ease-out`; caída 180 ms `ease-in`; aterrizaje `scale(1.08, 0.9)` 100 ms; asentamiento 160 ms `bounce`. Total unos 780 ms. Sombra del suelo se encoge al 70 % en el aire | Al tocar a Guroo, al terminar una lección. Nunca en loop infinito en pantallas de lectura |
| **Inclinación curiosa** | Cabeza rota 6° hacia el texto que el niño escribe | Al abrir el chat |

Reglas: los idle se detienen cuando la pestaña no está visible (`document.visibilityState`), durante una pregunta de quiz y con movimiento reducido. El `animate-hop` infinito actual se reserva para el estado "toca aquí" y se apaga tras 3 ciclos.

### 4.4 Coreografía de celebración

**Lección completada (unos 1,6 s, se puede saltar tocando):**

| t (ms) | Qué pasa |
|---|---|
| 0 | La lección sale hacia abajo (`exit`, 180 ms); el fondo cambia a `--grad-sunrise` |
| 120 | Guroo entra desde abajo con `spring` y hace un hop |
| 380 | Titular `display` *"Lesson done!"* aparece con `pop` (escala 0,6 → 1,08 → 1) |
| 600 | Contadores de XP y racha suben número a número (400 ms) |
| 900 | Anillo de la unidad avanza 1 paso con `spring` |
| 1100 | Confeti discreto: 30 piezas, 1,2 s, solo en Creator |
| 1300 | CTA *"Keep going"* entra con `bounce`; foco del teclado va al CTA |

**Insignia ganada (se inserta tras el paso de 900 ms):** el parche cae desde arriba con rotación de -8° a 0°, aterriza con squash (`scale(1.1, 0.88)`), se "cose" con una línea discontinua que se dibuja alrededor del borde en 500 ms (`stroke-dashoffset`) y brilla una vez (barrido de brillo diagonal de 400 ms). Texto: *"New patch: Pathfinder!"*.

**Unidad terminada:** igual, más Guroo 3D en pose de alegría, frase de firma *"Small hops, big leaps."* y confeti de 60 piezas durante 1,8 s.

**Primera venta (el momento más grande del producto):** pantalla completa con cielo, Guroo 3D saltando con la tienda abierta, monto en `display-xl`, confeti de 120 piezas durante 2,6 s (el actual), insignia *Trailblazer* y un mensaje para mostrar al adulto. Sonido opcional.

**Límites de seguridad:** ningún destello de más de 3 veces por segundo; el confeti no cambia de brillo rápido (piezas de color sólido, rotación lenta); como máximo una celebración grande por sesión; sin vibración en web salvo `navigator.vibrate(20)` corto en Android si el padre activa los sonidos; sonido apagado por defecto y activable en ajustes.

### 4.5 Transiciones de página

- **Entre pestañas de la barra:** fundido cruzado de 200 ms `soft` con un desplazamiento vertical de 8 px. Sin deslizamientos laterales largos.
- **Entrar a una lección:** la tarjeta o fila tocada crece hasta llenar la pantalla (transición de elemento compartido) en 320 ms `spring`. Implementación: View Transitions API (`document.startViewTransition`, o el soporte experimental de Next.js), con fundido simple como alternativa donde no exista.
- **Salir de una lección:** la pantalla baja y se desvanece en 200 ms `exit`.
- **Hojas inferiores:** suben con `slide-up` (ya existe, 280 ms `spring`) y bajan en 180 ms `exit`.
- **Listas:** las tarjetas entran escalonadas cada 40 ms, máximo 6 elementos escalonados (el resto aparece de inmediato).

### 4.6 Movimiento reducido

La regla global actual de `globals.css` (duraciones casi cero) se mantiene como red de seguridad. Encima, cada componente define su alternativa:

| Animación | Con `prefers-reduced-motion: reduce` |
|---|---|
| Squash del botón | Solo cambio de sombra y `translateY(2px)`, sin escala |
| Barras y anillos | Saltan al valor final con un fundido de color de 150 ms |
| Idle de Guroo | Pose estática; sin parpadeo ni orejas |
| Hop de Guroo | Cambio a la pose "feliz" (`mood="wow"`) sin desplazamiento |
| Nubes | Quietas |
| Confeti | Oculto (ya implementado); se muestra una ilustración estática de estrellas alrededor del titular |
| Insignia ganada | Aparece con fundido de 200 ms, sin caída ni brillo |
| Transiciones de página | Fundido de 150 ms |

Además, un interruptor *"Calm mode"* en los ajustes del niño (y del padre) activa lo mismo aunque el sistema operativo no lo pida, y apaga el sonido.

---

## 5. Sistema de insignias: Adventure Patches

### 5.1 Anatomía del parche

- **Forma:** parche arqueado (arriba en arco, lados rectos, abajo con esquinas redondeadas de 18 % del ancho), proporción 1 : 1,12. Lienzo SVG de 120 x 134.
- **Contorno exterior:** Ink, 5 px a tamaño 120 (escala con el parche; nunca menos de 2,5 px en pantalla).
- **Marco:** banda de color de 10 px por dentro del contorno, en el color de la familia.
- **Escena interior:** fondo claro (cielo `sky-100`, `cream` o `mint-100`) con una ilustración plana de 2 a 4 formas, contorno Ink 3 px, sombras planas (un tono más oscuro, sin degradados).
- **Cinta:** banda curva en la parte baja con el nombre en mayúsculas (Baloo 2 800, comprimido al 92 %, trazos), texto Ink sobre Cream o Cream sobre Ink según el contraste.
- **Puntadas:** línea discontinua blanca al 70 % a 4 px dentro del marco (da el efecto "bordado").
- **Estados:** ganada (color), por ganar (silueta con contorno discontinuo, nombre visible), nueva (brillo una vez y punto Coral de "new" hasta verla).
- **Tamaños:** 104 px en el tablero, 200 px en el detalle, 48 px en el Parent zone y en la cabecera, 24 px nunca (a ese tamaño no se lee).

### 5.2 Las 12 insignias

Nombres en inglés (son producto). Criterios ligados a lo que el niño **hace**, nunca a gastar dinero, nunca a vender una cantidad, nunca a competir con otros niños.

| # | Nombre | Criterio | Concepto del ícono | Marco |
|---|---|---|---|---|
| 1 | **Explorer** | Terminar la primera lección (*"What Is a Business?"*) | Globo aerostático con una mini tienda con toldo como canasta, en un cielo con nubes | Honey #FFC94D |
| 2 | **Pathfinder** | Terminar Unit 1, *Idea Hunt* | Brújula sobre un mapa con un sendero punteado que termina en una bombilla | Coral #FF5D73 |
| 3 | **Lookout** | Completar la misión *"Make a Safe Circle List"* (conocer a sus clientes) | Binoculares con dos corazoncitos reflejados en las lentes | Sky #5BC0EB |
| 4 | **Secret Agent** | Elegir su *secret shop name* y pasar el filtro de privacidad sin datos personales | Sombrero de detective sobre un antifaz, con una llave pequeña | Ink #1B2340 (cinta Cream) |
| 5 | **Maker** | Terminar Unit 2, *Make It* | Lápiz y llave inglesa cruzados sobre una hoja con una estrella | Sun #FF8A3D |
| 6 | **Brand Builder** | Terminar Unit 3, *Brand & Shop* (nombre, logo y tienda armada) | Bandera con un logo inventado (estrella) clavada en una colina, con un toldo detrás | Lilac #C9B8FF |
| 7 | **Grand Opening** | El adulto aprueba y publica la tienda | Toldo a rayas con un cartel *OPEN* colgando y una cinta cortada | Leaf #2FA58C |
| 8 | **Trailblazer** | La **primera venta** registrada | Mochila con flores saliendo del bolsillo y una etiqueta *SOLD* atada | Mint #7ED9C3 con cinta Leaf-dark |
| 9 | **Merch Maker** | Terminar el track de Level 2 *Merch Makers* | Camiseta con un sticker de estrella, al lado de una taza | Peach #FFB37D |
| 10 | **Studio Star** | Terminar el track de Level 2 *Faceless YouTube Studio* | Claqueta con una estrella y un micrófono, **sin ninguna cara** | Sky-700 #1F7FC0 (cinta Cream) |
| 11 | **Campfire** | 7 días de práctica en total (no tienen que ser seguidos) | Fogata pequeña con dos malvaviscos y una tienda de campaña | Coral-dark #C7344C |
| 12 | **Summit** | 30 días de práctica en total (no tienen que ser seguidos) | Montaña con banderita Sun en la cima y un sendero en zigzag | Honey #FFC94D con cinta Ink |

**Familias:** Launch Path (1 a 8), Level 2 (9 y 10), Habits (11 y 12). Más adelante se pueden añadir insignias por cada producto nuevo, pero el total visible en el tablero debe mantenerse por debajo de 20 para que cada una siga sintiéndose especial.

### 5.3 Reglas de rachas e insignias sin culpa

- Las insignias de hábito cuentan **días de práctica acumulados**, nunca días seguidos. Una vez ganadas, **no se pierden jamás**.
- La racha visible sigue existiendo (ya está en el modelo como `streak.count`), pero:
  - Al romperse, el contador vuelve a empezar en silencio. La pantalla dice *"Welcome back! Let's pick up where you left off."*, nunca *"You lost your streak"*.
  - Se muestra también el total: *"12 practice days"*. El total nunca baja.
  - El fin de semana no rompe la racha si el padre lo configura así (*"Weekends off"*).
- Nada de notificaciones al niño. Los recordatorios, si existen, van al adulto y son neutros (*"Cosmic Doodle Co. has a 5-minute lesson ready."*).
- Ninguna insignia se compra, se desbloquea con el plan Family o se muestra "bloqueada por pago". Si un track es de pago, su insignia se presenta igual que las demás y el criterio dice lo que hay que hacer, no lo que hay que pagar (lección de Prodigy).
- Sin rankings, sin comparar insignias entre niños, sin compartir fuera de la familia.

---

## 6. Lo que evitamos

### 6.1 Patrones oscuros

- **Culpa:** Guroo triste, *"you made Guroo sad"*, cuentas atrás para "salvar" la racha, rachas que se pierden, notificaciones al niño.
- **Pago como presión:** premios visibles solo para miembros, diferencias de estatus entre quien paga y quien no, ofertas dentro del mundo del niño.
- **Alargar el uso:** feeds infinitos, autoplay de la siguiente lección, "una más" sin fin. Después de la lección diaria la app dice *"That's today's hop. See you tomorrow!"* y propone una misión fuera de la pantalla.
- **Recompensas aleatorias:** cofres, ruletas, cajas sorpresa. Cada premio es predecible y está ligado a una acción real.
- **Urgencia falsa:** temporizadores, "solo hoy", contadores de escasez.
- **Comparación social:** rankings, likes, seguidores.

### 6.2 Sobreestimulación

- Más de un objeto animándose a la vez sin que el niño lo pida.
- Confeti en cada toque; sonidos por defecto; colores saturados de borde a borde sin zonas de descanso (regla: el cielo solo arriba, el resto Cream o blanco).
- Destellos, parpadeos rápidos, giros completos, zooms de pantalla completa, parallax con scroll.
- Más de 2 objetos 3D por pantalla.

### 6.3 Aspecto infantil para un niño de 13

- Letras tipo preescolar, abecedarios, arcoíris en todo, diminutivos (*"teeny shoppy"*), bebés o chupetes en ilustraciones, voz aguda de dibujo animado.
- Guroo gigante en cada pantalla (en Founder aparece menos y más pequeña).
- Pasteles en toda la paleta: apaga la energía y se ve de 5 años. Los pasteles son superficies; los colores base siguen siendo protagonistas.
- Bordes y radios exagerados en textos largos: los párrafos van en tarjetas con radio 20 a 24 px, no en globos.

### 6.4 Caras de niños reales (y de dibujos)

- Ninguna foto, video, avatar ni render 3D de niños, ni en marketing ni en la app. La referencia 3 usa niños 3D: **eso no se adopta**.
- Para "mostrar a un niño": manos, un escritorio, una pantalla con su tienda, su mascota de tienda o Guroo.
- Los productos de ejemplo (stickers, hojas para colorear) los hace el equipo, nunca niños del piloto, salvo permiso escrito del padre y sin datos que identifiquen al niño.
- No copiar personajes de las referencias (zorro de Toco & Muku, personajes de Edulite) ni de marcas famosas.

### 6.5 Cómo se ven las pantallas de padres (más tranquilas)

| Elemento | Mundo del niño | Parent zone y emails a padres |
|---|---|---|
| Fondo | Cielo arriba, Cream abajo | `cream-50` y blanco, sin cielo ni nubes |
| Ilustración | Guroo 3D y objetos 3D | Guroo plano pequeño (48 a 72 px) solo en estados vacíos y en el encabezado del resumen semanal |
| Tipografía | Baloo 2 grande, Nunito 18 a 20 px | Baloo 2 solo en titulares (24 a 30 px), Nunito 16 px peso 400, más espacio entre líneas |
| Color | Sun, Sky, Leaf, Coral activos | Ink y blanco dominan; Leaf para "aprobado", Sky para "información", Coral-dark solo para alertas; Sun solo en el CTA principal |
| Componentes | Píldoras, anillos, insignias grandes | Listas, tablas simples, tarjetas con borde Line, checklists de revisión, insignias a 48 px como "lo que hizo esta semana" |
| Movimiento | Rebote, squash, celebraciones | Solo `soft` 150 a 200 ms, sin rebote, sin confeti (excepto un pequeño momento compartido en la primera venta, que el padre puede ver) |
| Tono | Juego | Socio confiable: datos claros, controles visibles, *"You own every account."* |

---

## 7. Plan de implementación priorizado

Estimaciones en días de trabajo de una persona (ingeniero front-end con Next.js y Tailwind 4, o ilustrador cuando se indica). Son estimaciones de orden de magnitud, no compromisos.

### P1: base del sistema (unas 3 semanas de ingeniería + 1 a 2 semanas de ilustración, en paralelo)

| # | Tarea | Archivos o rutas | Esfuerzo |
|---|---|---|---|
| 1 | Añadir tokens de color, radios, sombras, curvas y degradados (sección 3.1) | `web/src/app/globals.css` | 0,5 días |
| 2 | Variante `btn-pill` con squash and stretch y versión de movimiento reducido | `globals.css`, `components/forms.tsx` o nuevo `components/ui/Button.tsx` | 1 día |
| 3 | `KidTabBar` flotante con 5 pestañas, ruta nueva `/kid/[kidId]/badges`, mover *Grown-ups* a la cabecera | `components/kid/KidHeader.tsx`, nuevo `components/kid/KidTabBar.tsx`, `app/kid/[kidId]/badges/page.tsx` | 2 días |
| 4 | `SkyHero` con degradado y nubes SVG (sin 3D todavía, Guroo SVG) para Home del niño | nuevo `components/kid/SkyHero.tsx`, `app/kid/[kidId]/page.tsx` | 1,5 días |
| 5 | `LevelCard` con barra y premio, `UnitCard` con `ProgressRing`, `LessonRow` con estados play, check y candado | nuevos componentes en `components/kid/`, ajustar `PathMap.tsx` | 3 días |
| 6 | Modelo de insignias (12 definiciones, criterios calculados desde el progreso existente, fecha de obtención) y tablero | `web/src/lib/model.ts`, nuevo `web/src/content/badges.ts` | 2,5 días |
| 7 | Ilustrar las 12 insignias en SVG (texto a trazos) y la silueta "por ganar" | `web/public/badges/*.svg` | Ilustrador: 6 a 8 días |
| 8 | Fila de 5 íconos glossy de categoría en versión SVG | `web/public/icons/` | Ilustrador: 1,5 días; ingeniería 0,5 días |
| 9 | Racha sin culpa: total de días de práctica, copy de regreso, opción *Weekends off* | `lib/model.ts`, `TodayStats.tsx`, Parent zone | 1,5 días |
| 10 | Agrupar el SVG de Guroo y añadir parpadeo y orejas con CSS y un pequeño hook de JS | `components/Mascot.tsx` | 1 día |
| 11 | Auditoría de targets (48 px), contraste de los nuevos tokens y movimiento reducido en todas las pantallas del niño | todo `components/kid/` | 1,5 días |

### P2: magia (unas 3 a 4 semanas de ingeniería + producción 3D externa)

| # | Tarea | Esfuerzo |
|---|---|---|
| 1 | Modelo 3D de Guroo y 6 poses renderizadas (sección 3.5), más 6 objetos 3D del mundo | Ilustrador o estudio 3D: 3 a 5 semanas de calendario; contratar con entrega del archivo fuente |
| 2 | Coreografía de celebración de lección, unidad, insignia y primera venta (sección 4.4), con botón para saltar | 4 días |
| 3 | Transiciones de página con View Transitions y alternativa de fundido | 2 días |
| 4 | Hero de la landing con cielo, Guroo 3D y píldora *"Watch how it works"* | 2 días |
| 5 | Íconos glossy de categoría en render 3D (reemplazo del SVG) | Ilustrador 3D: 3 días |
| 6 | Detalle de insignia en hoja inferior y *"Show my grown-up"* en el Parent zone | 2 días |
| 7 | Interruptor *Calm mode* y sonido opcional (apagado por defecto) | 1,5 días |
| 8 | Prueba con 5 a 8 niños del piloto (con padres presentes y permiso), separando 8 a 10 y 11 a 14 | 3 días de investigación |

### P3: pulido y profundidad (cuando el piloto valide)

| # | Tarea | Esfuerzo |
|---|---|---|
| 1 | Guroo interactiva en Rive (máquina de estados: idle, escuchar, pensar, celebrar), solo si las pruebas muestran que el SVG se queda corto. Medir peso del runtime (unos 146 KB minificado según una reseña, sin verificar) frente al beneficio | Animador Rive: 2 a 3 semanas; ingeniería 3 días |
| 2 | Modo Founder completo (sección 3.7) | 3 días |
| 3 | Cielos por momento del día (amanecer, tarde) y cielo lavanda para Level 2 | 2 días + ilustración 2 días |
| 4 | Leer en voz alta para Creator (8 a 10) | 4 días |
| 5 | Certificado imprimible de insignias para la familia (PDF desde el Parent zone) | 2 días |
| 6 | Más insignias por producto y estacionales, manteniendo el total por debajo de 20 | Ilustración 1 día por insignia |

### Decisiones pendientes del fundador

1. Enviar el GIF o video del shot "Watch It, Kids Game Animation" para calibrar las curvas.
2. Aprobar la sustitución del menú de cabecera por la barra inferior (cambia la navegación actual).
3. Presupuesto para el modelo 3D de Guroo (es el gasto más grande del plan).
4. Confirmar que la racha cuenta "días de práctica" y que las insignias nunca se pierden.

---

## Fuentes

**Referencia de animación**
- [Dribbble: "Watch It! Kids game" de Budiarti R. para Orely (shot 23106328)](https://dribbble.com/shots/23106328-Watch-It-Kids-game)
- [Dribbble: perfil de Budiarti R.](https://budiartidesign.dribbble.com/)
- [Dribbble: miembros de Orely](https://dribbble.com/Orely/members)
- [SGPGrid: ficha de Orely (agregador)](https://sgpgrid.com/company/orely-ID0000)

**Productos de referencia**
- [Duolingo: Shape language, Duolingo's art style](https://blog.duolingo.com/shape-language-duolingos-art-style/)
- [Duolingo: World character visemes (Rive)](https://blog.duolingo.com/world-character-visemes)
- [Rive: Duolingo's AI-powered Video Call brings Lily to life](https://rive.app/blog/duolingo-s-ai-powered-video-call-brings-lily-to-life)
- [60fps.design: Fun in Every Frame](https://60fpsdesign.substack.com/p/fun-in-every-frame)
- [LottieFiles: caso Duolingo](https://lottiefiles.com/case-studies/duolingo)
- [Design Buddy: Is Duolingo unethical?](https://designbuddy.substack.com/p/is-duolingo-unethical)
- [Screenwise: cuando las rachas de Duolingo estresan](https://screenwiseapp.com/guides/managing-duolingo-streaks-when-gamification-becomes-stressful)
- [TechCrunch: Duolingo ABC (2020)](https://techcrunch.com/2020/03/26/duolingos-new-app-teaches-children-how-to-read-and-write/)
- [Educational App Store: Duolingo ABC](https://www.educationalappstore.com/app/duolingo-abc)
- [Khan Academy Kids](https://learn.khanacademy.org/khan-academy-kids/) y [en App Store](https://apps.apple.com/us/app/khan-academy-kids/id1378467217)
- [TechCrunch: Duck Duck Moose se une a Khan Academy (2016)](https://techcrunch.com/2016/08/26/kids-app-maker-duck-duck-moose-joins-khan-academy/)
- [The Toca Boca Story](https://collect.readwriterespond.com/toca-boca-story)
- [Screenwise: Toca Boca](https://screenwiseapp.com/guides/why-toca-boca-apps-are-the-gold-standard-for-preschool-screen-time)
- [Apple Developer: Sago Mini Jinja's Garden](https://developer.apple.com/news/?id=3t6o5jec)
- [Kidscreen: Sago Sago y el mercado preescolar](https://kidscreen.com/2015/04/09/sago-sago-dishes-on-developing-for-the-preschool-market)
- [Blake Crosley: Headspace, diseño para la calma (análisis de un tercero)](https://blakecrosley.com/pt-BR/guides/design/headspace)
- [Blush: Karen Hong sobre la ilustración de Headspace](https://blush.design/blog/post/headspace-mindfulness-app)
- [Dribbble de Headspace](https://dribbble.com/headspace)
- [Lingokids: nueva identidad de marca](https://lingokids.com/blog/posts/lingokids-new-brand-identity-kids-entertainment)
- [Kidscreen: Lingokids y su lenguaje de marca](https://kidscreen.com/?p=221973)
- [Axios: denuncia contra Prodigy ante la FTC (2021)](https://www.axios.com/2021/02/19/prodigy-math-game-ftc-complaint)
- [Wikipedia: Prodigy Math Game](https://en.wikipedia.org/wiki/Prodigy_Math_Game)
- [Common Sense Media: reseñas de padres de Prodigy](https://www.commonsensemedia.org/app-reviews/prodigy-kids-math-game/user-reviews/adult)
- [Public Libraries Online: Epic!](https://publiclibrariesonline.org/2017/06/epic-app-raises-8-million-to-keep-kids-reading/)
- [Common Sense Education: Epic!](https://www.commonsense.org/education/reviews/epic-kids-books-and-videos/teacher-reviews/4105906)
- [Greenlight: our fresh new look (2020)](https://greenlight.com/blog/our-fresh-new-look)
- [Greenlight: the new Greenlight app is here](https://greenlight.com/blog/the-new-greenlight-app-is-here)

**UX para niños, accesibilidad y movimiento**
- [NN/g: Children's websites, usability issues](https://www.nngroup.com/articles/childrens-websites-usability-issues/)
- [NN/g: UX Design for Teenagers (13 a 17)](https://www.nngroup.com/reports/teenagers-on-the-web/)
- [NN/g: Young Users](https://www.nngroup.com/topic/young-users/)
- [NN/g: artículos de Feifei Liu (desarrollo físico de los niños)](https://www.nngroup.com/articles/author/feifei-liu/?page=5)
- [NN/g: Touch target size](https://www.nngroup.com/articles/touch-target-size/)
- [Resumen de terceros del informe de adolescentes de NN/g](https://erikrunyon.com/page4/)
- [UXPin: tamaños de toque de Apple, Google y NN/g](https://uxpin.com/studio/blog/responsive-design-touch-devices-key-considerations/)
- [Stark: WCAG 2.5.8 Target Size (Minimum)](https://www.getstark.co/wcag-explained/operable/input-modalities/target-size-minimum/)
- [W3C: WCAG 2.3.1 Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG20/Understanding/three-flashes-or-below-threshold)
- [WebKit: Responsive Design for Motion](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [Universidad de Michigan: vértigo y trastornos vestibulares](https://teamdynamix.umich.edu/TDClient/30/Portal/KB/Article/14019/Accommodating-Vertigo-and-Vestibular-Disorders)
- [KU Leuven: usabilidad y legibilidad en sitios para niños](https://lirias.kuleuven.be/retrieve/223694)
- [ICO: respuesta de 5Rights Foundation al Children's Code (nudge techniques)](https://cy.ico.org.uk/media/2616600/5-rights-foundation.pdf)
- [Callstack: Lottie vs Rive](https://callstack.com/blog/lottie-vs-rive-optimizing-mobile-app-animation)

**Notas de verificación:** las páginas de nngroup.com y blog.duolingo.com no se pudieron abrir directamente desde este entorno (fallo de DNS); sus datos vienen de los resúmenes del buscador y de fuentes secundarias citadas. No encontré ninguna fuente pública sobre "Funtyx" ni "Toco & Muku". El análisis de Headspace es de un tercero, no una guía oficial. Las alegaciones contra Prodigy son de una denuncia, sin resolución de la FTC encontrada.
