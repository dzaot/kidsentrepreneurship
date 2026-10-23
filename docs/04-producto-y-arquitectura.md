# Producto, arquitectura y decisiones del MVP

Fecha: octubre 2026. Marca elegida: **Venturoo** (mascota: Guroo, la canguro sabia (suena a "gurú") con una tienda en la bolsa). El nombre final se cambia en una sola constante (`web/src/lib/brand.ts`).

## 1. Decisiones tomadas (y por qué)

| Decisión | Elección | Motivo |
|---|---|---|
| Mercado | EE.UU., Canadá y Australia, en inglés | Mayor disposición a pagar, Stripe disponible en los 3, la familia del fundador está aquí. LatAm queda como expansión (ver sección 7). |
| Edad | 8 a 14 años | Hueco claro en el mercado y los padres todavía deciden y pagan. |
| Cliente | Padres (B2C) | Validación más rápida que colegios. |
| Tipo de negocio | **100 % digital** | Costo cero, sin inventario ni envíos, sin contacto físico con compradores, se vende muchas veces. |
| Productos del MVP | Páginas para colorear, packs de stickers digitales, wallpapers, packs de actividades, mini cómic | Se hacen con papel + escaneo del celular del padre, sin que el niño cree cuentas. |
| Privacidad | Seudónimo, mascota, nunca cara ni nombre real | Requisito tuyo y de la ley (COPPA). El marketing es "sin rostro". |
| Dinero | Link de pago del **padre** (Stripe recomendado) | Nosotros nunca tocamos dinero: cero riesgo regulatorio de transmisión de dinero. |
| Publicación | El padre aprueba siempre | Nada del niño es público sin revisión adulta. |
| Plataforma | Web app (PWA) | Funciona en computador, iPad y Android desde el día 1. Se instala como app con "Añadir a pantalla de inicio". |

## 2. El producto en una frase

> El niño aprende 5 minutos al día con Guroo, y cada lección construye una pieza de su tienda. En 30 días tiene una tienda real, aprobada por su papá o mamá, y hace su primera venta online.

## 3. Flujo completo (ya funciona en el MVP)

1. **Padre** crea la cuenta (con código de invitación del piloto), da consentimiento y añade a su hijo con un apodo y un avatar.
2. **Modo niño:** el padre toca "Start as [apodo]" y entrega el dispositivo. Para volver al panel de padres hay una pregunta de multiplicación ("solo adultos").
3. **Ruta de lanzamiento:** 4 unidades, 20 lecciones (Idea Hunt, Make It, Brand & Shop, Launch & Sell). Cada lección tiene explicaciones cortas, quiz, misiones del mundo real, diario privado y pasos de construcción de la tienda.
4. **Constructor de tienda dentro de las lecciones:** elegir negocio, nombre secreto, mascota y color, eslogan, descripción, precio (con calculadora de ganancia después de comisión), subir archivo, portada, enviar a revisión y mensaje para compartir.
5. **Padre revisa:** vista previa, descarga del archivo para verificarlo, pega su link de pago y publica (o lo devuelve con una nota).
6. **Tienda pública** en `/s/nombre-de-la-tienda`: sin nombre del niño, sin datos personales, oculta a buscadores (noindex).
7. **Compra:** el comprador paga con el link del padre. Stripe lo redirige a la página secreta de descarga (`/s/tienda/thanks/<token>`). Con PayPal, el padre envía el link de descarga a mano.
8. **Venta registrada:** el padre la registra y el niño la ve en su pantalla (celebración, total ganado).
9. **Parent Corner:** por cada lección completada, el padre ve el concepto de negocio en versión adulta y una pregunta para conversar en familia. Así el padre aprende con el niño.

## 4. Arquitectura técnica

```
Navegador (PWA: computador, iPad, Android)
        │
        ▼
Next.js 15 (App Router, Server Actions) en Netlify
  ├─ Páginas públicas: landing, privacidad, tienda /s/[slug], descarga
  ├─ Zona de padres: /family (sesión con cookie firmada HMAC)
  ├─ Zona de niños: /kid/[id] (dentro de la cuenta del padre)
  └─ Acciones de servidor: cuentas, lecciones, tienda, publicación, ventas
        │                                   └─ /api/coach: Guroo (streaming) ──► Claude API (Anthropic)
        ▼
Postgres (Neon)
  ├─ "data": un documento JSON por familia + índices (email → familia, slug → tienda) + chats con Guroo
  └─ "files": archivos del producto y portadas (sin metadatos EXIF/GPS)
```

**Por qué así:**
- **Una sola base de código** para web, tablet y celular.
- **Postgres (Neon)**, con plan gratuito suficiente para el piloto. Funciona igual en Netlify, Vercel o Cloudflare, así que no nos ata a un proveedor. Guarda un documento JSON por familia y los archivos subidos, y crea sus tablas solo la primera vez. Una base de datos real da respaldos, consultas para medir el piloto y espacio para crecer a un esquema más relacional cuando haga falta. Toda la capa de almacenamiento está aislada en un solo archivo (`web/src/lib/storage.ts`). Sin `DATABASE_URL`, en desarrollo local, usa la carpeta `web/.data`.
- **El contenido es data:** las lecciones viven en `web/src/content/path.ts`. Se pueden editar sin tocar el código de la app.
- **Seguridad:** contraseñas con scrypt, sesiones firmadas, archivos privados detrás de verificación, descarga con token secreto y comparación en tiempo constante, filtro de datos personales en todo texto que pueda ser público (emails, teléfonos, direcciones, links, redes sociales), eliminación de metadatos de imágenes y borrado total de la cuenta con un clic.

**Estructura del código:**

| Carpeta | Contenido |
|---|---|
| `web/src/content/` | Currículo (20 lecciones), 5 tipos de negocio, glosario de 28 términos |
| `web/src/lib/` | Marca, almacenamiento, autenticación, modelo de datos, filtro de privacidad |
| `web/src/app/actions.ts` | Toda la lógica del servidor |
| `web/src/components/kid/` | Reproductor de lecciones y constructores de la tienda |
| `web/src/app/` | Páginas (landing, padres, niños, tienda pública) |

## 5. IA: Guroo, el coach, y la IA como herramienta creativa

**Decisión:** la IA es parte central del producto, con una regla pedagógica clara: *"la IA es tu ayudante, tú eres el jefe"*. El niño tiene la idea, escribe el prompt, elige, edita y añade su toque. Si usa imágenes hechas con IA, lo dice en la descripción.

**Guroo (dentro de la app):** chat de IA con Claude (Anthropic). Hace lluvia de ideas, nombres, eslóganes, listas de palabras para sopas de letras, adivinanzas, estructura de cuentos, descripciones y prompts para herramientas de imágenes. También acompaña al niño dentro de las lecciones con pasos "Ask Guroo" que traen una pregunta inicial ya escrita.

**Capas de seguridad (en orden):**
1. Apagado por defecto. El padre lo enciende por cada hijo (consentimiento explícito, requerido por COPPA porque el texto va a un tercero).
2. Filtro de datos personales en el navegador y otra vez en el servidor, antes de enviar nada al modelo.
3. Prompt de sistema con reglas para niños: solo temas de negocio y creatividad, nunca pedir datos personales, nada de links ni personajes famosos, derivar al adulto ante cualquier riesgo, recordar declarar el uso de IA.
4. Límite de 40 mensajes por día por niño (controla el costo y el uso excesivo).
5. Transparencia total: el padre lee y borra todas las conversaciones desde su panel.
6. Respaldo automático del servidor si el modelo rechaza una respuesta (`fallbacks: "default"`), y mensaje amable si aun así no hay respuesta.

**Imágenes con IA:** las herramientas como ChatGPT, Gemini, Canva AI o Adobe Firefly tienen límites de edad, así que el currículo las usa solo en la cuenta del padre y con él al lado: Guroo ayuda al niño a escribir el prompt y el padre lo ejecuta. Generar imágenes dentro de Venturoo (con filtros para niños) queda para la fase 2.

**Costo estimado:** el modelo por defecto es Claude Opus 5.5 (USD 4 y 20 por millón de tokens de entrada y salida), con caché del prompt de sistema y esfuerzo bajo. Una conversación típica cuesta del orden de 1 a 2 centavos por mensaje. Para bajar el costo a gran escala se puede cambiar `ANTHROPIC_MODEL` a Claude Haiku 5.5 (unas 40 veces más barato), probando antes la calidad.

## 5b. Nivel 2: merch y YouTube

Al terminar la ruta de lanzamiento (primera venta), se desbloquean dos rutas de 8 lecciones cada una. Detalle e investigación en `docs/06-youtube-y-dropshipping.md`.

- **Merch Makers (print-on-demand y dropshipping):** primero se explica con honestidad cómo funciona el dropshipping y por qué casi todo el "hazte rico rápido" es humo (anuncios pagados, envíos lentos, devoluciones, márgenes bajos, y las plataformas exigen 18 años). Después, la versión para niños: print-on-demand con diseños propios (stickers, camisetas, tazas, cuadernos). La plataforma imprime y envía, no hay inventario ni costo inicial, y la cuenta es del padre.
- **Faceless YouTube Studio (ideal de 11 a 14):** canal del padre (YouTube exige 13 años para tener canal), sin rostro y sin la voz real del niño. La IA ayuda con ideas, guiones y miniaturas. Se enseña a declarar el contenido hecho con IA y a evitar videos masivos de baja calidad, que YouTube no monetiza. El canal funciona como marketing de la tienda, no como fuente de ingresos por anuncios, porque el Programa de Socios de YouTube exige umbrales altos.

## 6. Lo que NO está en el MVP (a propósito)

- Pagos integrados (Stripe Connect a nombre del padre): fase 2. Hoy el padre pega su propio link.
- Suscripción y cobro: el piloto es gratis. Validamos disposición a pagar con la prueba de precios del doc 05.
- Varios productos por tienda, ligas y ranking entre niños, chat: no. Nada social entre niños (protege privacidad y nos deja fuera de la ley australiana de redes sociales para menores de 16).
- Consentimiento parental verificable "fuerte" (cobro de prueba con tarjeta): obligatorio antes del lanzamiento público. En el piloto con familias conocidas usamos casilla de consentimiento más relación directa.

## 7. Roadmap

| Fase | Tiempo | Qué |
|---|---|---|
| **0. Piloto** | Noviembre 2026 (4 semanas) | 10 a 20 familias conocidas. Medir activación, retención D7, % de niños con primera venta, disposición a pagar (doc 05). |
| **1. Producto pagado** | Dic 2026 a feb 2027 | Stripe Connect, suscripción (USD 7,99/mes o 59,99/año), consentimiento verificable, recordatorios por email al padre, rutas por temporada, segundo producto. |
| **2. Crecimiento** | 2027 | Partners (Greenlight, Stripe, ferias infantiles, Lemonade Day), generación de imágenes con IA dentro de la app, app empaquetada para App Store y Play Store (Capacitor), ruta para 11 a 14 con print-on-demand. |
| **3. Expansión** | 2027+ | Español y LatAm, plan para colegios. |

## 8. Sobre LatAm

No descartado. El análisis (doc 01) muestra menos competencia directa en LatAm, pero también menor disposición a pagar suscripciones y pagos digitales más fragmentados (Mercado Pago, Nequi, PIX). Recomendación: validar en inglés primero, y con el producto probado añadir español (el contenido ya está separado del código, así que traducir es barato).

## 9. Cómo correr el piloto (operativo)

1. Comparte con cada familia el link del sitio y el código de invitación (`PILOT_CODE`).
2. Pídeles que el padre cree la cuenta en un computador o tablet y añada al niño.
3. El día 1, el niño hace la primera lección con el padre al lado (10 minutos).
4. Grupo de WhatsApp del piloto con los padres para dudas y recordatorios diarios.
5. Al día 7 y al día 30: encuesta y entrevista corta (guiones en el doc 05).
