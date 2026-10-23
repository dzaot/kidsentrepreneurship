# Partners, pagos y marco legal para el MVP

Fecha: octubre 2026. Documento de trabajo, versión 1. Mercados: EE.UU., Canadá y Australia.

> **Aviso:** esto es investigación de negocio, no asesoría legal ni fiscal. Antes de lanzar públicamente, un abogado de privacidad infantil (EE.UU.) debe revisar el flujo de consentimiento y la política de privacidad. Marcamos con **(no verificado)** lo que no pudimos confirmar en una fuente oficial.

## 1. Resumen ejecutivo

- **Casi todas las plataformas exigen 18 años al titular de la cuenta.** Stripe es la excepción parcial: acepta de 13 años en adelante con un padre como representante legal, y prohíbe a menores de 13 ([Stripe SSA, sección de edad](https://stripe.com/en-gb-us/ssa)). Para un modelo de 8 a 14 años, la conclusión es una sola: **el padre es el dueño de todas las cuentas.** Ya lo teníamos como principio; ahora es también un requisito de cada partner.
- **Camino de pago recomendado para el MVP: Stripe Payment Link a nombre del padre**, con redirección automática a una página de descarga en nuestra plataforma. Es el más barato (2,9 % + USD 0,30 en EE.UU., 2,9 % + CAD 0,30 en Canadá, 1,7 % + AUD 0,30 en Australia para tarjetas nacionales), está disponible en los tres países, no cobra mensualidad y permite "paga lo que quieras". **Alternativa: PayPal** (muchos padres ya tienen cuenta), con entrega del archivo por un flujo de "confirmar venta". **Plan C: Gumroad** si el padre quiere que otro se encargue de impuestos y entrega, a cambio de comisiones mucho más altas.
- **Top 5 partners a contactar primero:** Greenlight, Stripe, Canva, Acton Children's Business Fair y Lemonade Day. Los dos últimos no son "proveedores", son el mejor canal de adquisición.
- **Legal:** el MVP está claramente "dirigido a niños", así que **COPPA aplica de lleno** (enmiendas obligatorias desde el 22 de abril de 2026). Las cinco obligaciones críticas: consentimiento parental verificable antes de recoger datos del niño, política escrita de retención, programa escrito de seguridad, cero publicidad dirigida y cero divulgación de datos a terceros que no sean esenciales. Canadá (Quebec exige consentimiento parental bajo 14 años) y Australia (código de privacidad infantil que debe registrarse antes del 10 de diciembre de 2026) empujan en la misma dirección.
- **La ley australiana de redes sociales para menores de 16 no debería aplicarnos** si no tenemos funciones de interacción social entre usuarios (chat, comentarios, seguidores). Es una razón más para no construirlas.
- **Riesgo de transmisión de dinero: hoy es bajo** porque no tocamos fondos. Si en el futuro cobramos en nombre de las familias, debemos hacerlo con Stripe Connect y nunca con una cuenta propia que reciba y reparta dinero.

## 2. Panorama de partners

### 2.1 Tabla principal

Leyenda de prioridad: **Ahora** (MVP, piloto de noviembre a diciembre 2026), **Pronto** (primeros 6 meses), **Después** (fase 2), **Evitar**.

| Partner | Edad mínima del titular | ¿El padre puede ser dueño por el hijo? | Programa de afiliados/partners | Comisiones para el vendedor | Encaje con nuestro producto | Prioridad |
|---|---|---|---|---|---|---|
| **Stripe** (Payment Links) | 13 con padre como "Representative"; menores de 13 no pueden usar el servicio ([SSA](https://stripe.com/en-gb-us/ssa)). Para cuentas Connect Express/Custom: 18 ([Stripe Support](https://support.stripe.com/questions/can-i-use-stripe-if-i-am-under-18)) | Sí. El padre abre la cuenta como persona individual. Es la opción más limpia | Programa de partners para plataformas y consultores, no un afiliado clásico | EE.UU. 2,9 % + 0,30; Canadá 2,9 % + C$0,30; Australia 1,7 % + A$0,30 (tarjetas nacionales); tarjetas internacionales más caras ([Xero/Stripe](https://www.xero.com/pricing-plans/pricing-and-fees-for-stripe/), [Checkoutpage](https://checkoutpage.com/blog/stripe-international-fees)) | Camino por defecto. Permite redirigir tras el pago a nuestra página de descarga ([guía](https://ohmyhi.com/doc/how-to-create-a-stripe-payment-link-for-your-digital-product/)). Futuro: Stripe Connect para cobrar desde nuestra plataforma | **Ahora** |
| **PayPal** | 18 o mayoría de edad del estado ([User Agreement EE.UU.](https://www.paypal.com/us/webapps/mpp/ua/useragreement-full)); 18 en otros países ([UA mundial](https://securepayments.paypal.com/legalhub/useragreement-full)) | Sí, solo como cuenta del padre | Programas para plataformas; no relevante para el MVP | Aprox. 3,49 % + 0,49 en EE.UU. para checkout/facturas; las fuentes difieren (2,99 % o 3,49 %) ([Checkoutpage](https://checkoutpage.com/blog/paypal-fees)) | Alternativa. Muchos padres ya tienen cuenta. La entrega del archivo requiere nuestro flujo de "confirmar venta" | **Ahora** (plan B) |
| **Gumroad** | Los términos piden "edad legal para contratar"; un tracker dice 13 + edad legal; versiones antiguas decían 18 ([Gumroad Terms](https://gumroad.com/terms), [ConductAtlas](https://conductatlas.com/platform/gumroad/gumroad-terms-of-service/user-must-be-at-least-13-years-old/)). **No verificado** | Sí, cuenta del padre | Afiliados por producto: 10 % según su ayuda oficial ([Gumroad](https://gumroad.com/help/article/333-affiliates-on-gumroad)) | 10 % + 0,50 por venta directa, 30 % si la venta viene de su marketplace Discover, y según varias fuentes más procesamiento de tarjeta ([Schoolmaker](https://schoolmaker.com/blog/gumroad-pricing), [Checkoutpage](https://checkoutpage.com/blog/gumroad-fees)) | Entrega el archivo y, desde el 1 de enero de 2025, actúa como merchant of record y cobra impuestos de venta por el vendedor ([Gumroad Help](https://gumroad.com/help/article/121-sales-tax-on-gumroad)). Muy caro para tickets de USD 3 a 5 | **Ahora** (plan C) |
| **Lemon Squeezy** | No encontramos cláusula de edad; hace verificación KYC/KYB de cada tienda ([docs](https://docs.lemonsqueezy.com/help/getting-started/activate-your-store)). **No verificado** | Probablemente sí, cuenta del padre | Infraestructura de afiliados por comerciante ([docs](https://docs.lemonsqueezy.com/help/affiliates-for-merchants/getting-set-up)) | 5 % + 0,50, más recargos internacionales y PayPal ([Swell](https://www.swell.is/content/lemon-squeezy-pricing)) | Merchant of record y entrega de archivos, pero está siendo absorbido por Stripe Managed Payments y la aprobación de tiendas es lenta ([Dodo](https://dodopayments.com/blogs/lemonsqueezy-alternatives), [Chargepanda](https://www.chargepanda.com/blog/post/lemonsqueezy-alternative)) | **Evitar** en el MVP |
| **Ko-fi** | No encontramos la cláusula en sus términos ([Ko-fi Terms](https://more.ko-fi.com/terms)). **No verificado** | Sí, cuenta del padre con PayPal o Stripe conectado ([Ko-fi Help](https://help.ko-fi.com/hc/en-us/articles/115003980093-How-do-I-get-paid)) | No encontramos programa de afiliados | 0 % en propinas, 5 % en ventas de tienda en plan gratis; 0 % con Gold (USD 12/mes según fuentes) más procesador ([Schoolmaker](https://schoolmaker.com/blog/ko-fi-pricing)) | Opción decente si el padre ya lo usa. Crea otra página pública que hay que cuidar (perfil del padre) | **Pronto** (opción compatible) |
| **Payhip** (extra) | **No verificado** | Sí, cuenta del padre | Sí, para vendedores | Plan gratis 5 % por venta más procesador (fuentes contradictorias) ([Dodo](https://dodopayments.com/blogs/payhip-review)) | Entrega archivos automáticamente. Alternativa a Gumroad más barata | **Pronto** (opción compatible) |
| **Etsy** | Titular 18+. De 13 a 17 pueden vender con permiso y supervisión, en cuenta a nombre del padre; menores de 13 no ([Etsy Help](https://help.etsy.com/hc/en-gb/articles/360040983333-Can-Minors-Sell-on-Etsy)) | Sí, desde 13 años. Para 8 a 12: no | Afiliados vía red externa (comisión **no verificada**) | Tarifa por anuncio, comisión por transacción y procesamiento; puede haber tarifa de alta de tienda (**verificar**) | Fase 2 para 13 a 14 años: "gradúate a Etsy". Exige declarar uso de IA ([Creativity Standards](https://www.etsy.com/legal/creativity)) | **Después** |
| **Shopify** | El mayor entre 18 y la mayoría de edad local; los menores pueden ser "staff" ([Shopify Terms](https://shopify.com/terms), [Comunidad Shopify](https://community.shopify.com/t/can-i-start-a-merchandise-shop-under-18-with-parental-consent/248928)) | Sí, padre dueño y niño como staff (no recomendado bajo 13) | Programa de afiliados (montos **no verificados**) | Plan mensual + procesamiento | Demasiado complejo y con costo mensual. Contradice "costo cero" | **Después** (graduación 14+) |
| **Printful** | Su política de privacidad pide no usar el servicio a menores de 18 ([Printful Privacy](https://www.printful.com/policies/download/privacy)) | Sí, cuenta del padre | Afiliados: 10 % de cada pedido durante 12 meses ([Printful](https://www.printful.com/partner-programs)) | Sin mensualidad; el vendedor paga costo de producción al vender | Fase 2: "tu dibujo en una camiseta". Requiere tienda (Etsy/Shopify) o venta manual | **Después** |
| **Printify** | No encontramos cláusula clara en sus términos ([Printify ToS](https://printify.com/terms-of-service)). **No verificado** (asumir 18) | Sí, cuenta del padre | Existe programa de afiliados (condiciones **no verificadas**) | Similar a Printful | Igual que Printful | **Después** |
| **Redbubble** | 18. El padre puede subir el arte del hijo a su propia cuenta y acreditarlo en la descripción ([Redbubble](https://help.redbubble.com/hc/en-us/articles/201761545)) | Sí, explícitamente | **No verificado** | El vendedor fija un margen sobre el precio base | Fase 2 más simple para productos físicos: no hay que montar tienda | **Pronto** (piloto de fase 2) |
| **Spring (ex Teespring)** | **No verificado** | **No verificado** | Existía | Variable | Reportes de cierre escalonado desde el 15 de septiembre de 2026 (solo en Wikipedia, sin confirmación oficial) y problemas financieros ([Wikipedia](https://en.wikipedia.org/wiki/Teespring), [RetailWire](https://retailwire.com/creator-merchandise-company-spring-has-been-hit-with-7-lawsuits-this-year/)) | **Evitar** |
| **Canva** | Menores de 13 solo vía Canva Education; Education excluye a padres y exige invitación de un docente ([Canva Terms](https://canva.com/policies/terms-of-use/), [Canva Education](https://www.canva.com/help/about-canva-for-education/)). De 13 a 18 con permiso del padre según un resumen de terceros ([ConductAtlas](https://conductatlas.com/platform/canva/canva-terms-of-use/age-restriction-and-parental-consent/)) | Solo usando la cuenta del padre, con el padre presente. Para 8 a 12 es una zona gris, mejor evitar | El programa de afiliados habría cerrado en 2024; hoy existe "Canvassador" (**no verificado**) ([Dodo](https://dodopayments.com/blogs/saas-affiliate-program), [AdSpyder](https://adspyder.io/blog/canva-affiliate-program/)) | Gratis / Pro | Herramienta para 13 a 14 años y para padres. Partner de marca deseable, pero no dependemos de él | **Pronto** (alianza) |
| **Google Family Link** | Supervisión obligatoria bajo la edad mínima del país (13 en la mayoría) ([Google](https://support.google.com/families/answer/9114774)) | Sí, el padre crea y supervisa la cuenta | No | Gratis | Permite que el niño use Google Docs/Slides de forma legal. Útil, no crítico | **Ahora** (recomendación a padres) |
| **Apple Family Sharing** | Bajo 13 el padre crea la cuenta ([Apple](https://support.apple.com/119854)) | Sí, con "Ask to Buy" | No | Gratis | iPad, GarageBand, Notas para escanear. Útil, no crítico | **Ahora** (recomendación a padres) |
| **Greenlight** (EE.UU.) | Cuenta del padre; tarjetas para hasta 5 hijos | Sí, es su modelo | Tiene alianzas con bancos y credit unions; programa de afiliados **no verificado** | Planes por familia de USD 5,99 a 19,98/mes ([Greenlight Help](https://help.greenlight.com/hc/en-us/articles/235739508-How-much-does-Greenlight-cost)) | "A dónde va el dinero que ganaste": el padre transfiere las ganancias a la tarjeta del niño. Partner de distribución ideal | **Pronto** (alianza) |
| **Acorns Early** (EE.UU.) | Cuenta del padre | Sí | **No verificado** | Planes de USD 8 y 12/mes según promociones 2026 ([Acorns](https://www.acorns.com/early/april-2026-promotion-terms/)) | Igual que Greenlight; competidor directo de Greenlight | **Después** |
| **Step** (EE.UU.) | Adolescentes con adulto patrocinador; edad mínima contradictoria entre fuentes (6 o 13) ([MyBankTracker](https://www.mybanktracker.com/checking/reviews/step-card-teen-banking-account-review-432126)) | Sí, como patrocinador | **No verificado** | Gratis para el usuario | Más adolescente; encaja con 13 a 14 | **Después** |
| **Mydoh** (Canadá, RBC) | Para niños de 6 a 17, cuenta gestionada por el padre ([Mydoh](https://www.mydoh.ca/)) | Sí | **No verificado** | Sin mensualidad según su sitio actual | Partner natural en Canadá; RBC da credibilidad | **Pronto** (Canadá) |
| **Spriggy** (Australia) | Para niños de 6 a 17 ([Spriggy FAQ](https://www.spriggy.com.au/faq)) | Sí | **No verificado** | A$5 a 9/mes según plan y número de hijos | Partner natural en Australia | **Pronto** (Australia) |

### 2.2 Costo real por venta de un producto de USD 4 (EE.UU., tarjeta nacional)

| Opción | Comisión aproximada | El padre recibe | % que se pierde |
|---|---|---|---|
| Stripe Payment Link | 0,12 + 0,30 = 0,42 | 3,58 | 10 % |
| Ko-fi (gratis) + Stripe | 0,20 + 0,42 = 0,62 | 3,38 | 16 % |
| Payhip (gratis) + Stripe | 0,20 + 0,42 = 0,62 | 3,38 | 16 % |
| PayPal | 0,14 + 0,49 = 0,63 | 3,37 | 16 % |
| Lemon Squeezy | 0,20 + 0,50 = 0,70 | 3,30 | 18 % |
| Gumroad (10 % + 0,50 + procesamiento) | 0,40 + 0,50 + 0,42 = 1,32 | 2,68 | 33 % |

Cálculos propios a partir de las tarifas citadas en la tabla 2.1. **Lección para el producto:** con tickets tan bajos, la parte fija (USD 0,30 a 0,50) pesa mucho. Por eso recomendamos precios de USD 3 a 5 y bundles, nunca productos de USD 1.

### 2.3 La pregunta clave: ¿quién entrega el archivo?

El MVP solo guarda el link de pago del padre. Un link de pago por sí solo **cobra pero no entrega**: Stripe no envía archivos después del pago ([LinkVault](https://www.hunted.space/product/linkvault-5)). Proponemos dos flujos de entrega:

1. **Flujo automático (Stripe):** en el Payment Link, el padre elige "redirigir a tu sitio" y pega la URL de descarga que le damos (por ejemplo `https://[nuestro-dominio]/d/[token-secreto]?session_id={CHECKOUT_SESSION_ID}`). Stripe reemplaza ese marcador por el ID de la sesión ([Datafast docs](https://datafa.st/docs/stripe-payment-links)). En el MVP aceptamos el riesgo de que alguien comparta el link (producto de USD 4); mitigamos con tokens que expiran, límite de descargas y marca de agua con el nombre de la tienda. En fase 2, con Stripe Connect, verificamos el pago real por API.
2. **Flujo universal (PayPal, Ko-fi, cualquier link):** el comprador deja su email en nuestra tienda antes de ir a pagar. El padre recibe el aviso de pago de su proveedor, toca "Confirmar venta" en nuestro panel y nosotros enviamos el link de descarga al comprador. Es manual, pero en el piloto es aceptable (y le enseña al niño a "atender un pedido").

Gumroad, Payhip y Ko-fi entregan el archivo ellos mismos. Si el padre elige uno de esos, nuestra tienda simplemente enlaza a su página de producto.

## 3. Recomendación de pago para el MVP

### 3.1 Decisión

| Criterio | Stripe Payment Link | PayPal | Gumroad |
|---|---|---|---|
| Disponible en EE.UU., Canadá y Australia | Sí | Sí | Sí |
| Costo por venta de USD 4 | El más bajo (aprox. 10 %) | Medio (aprox. 16 %) | El más alto (aprox. 33 %) |
| Sin mensualidad | Sí | Sí | Sí |
| Entrega automática del archivo | Sí, con redirección a nuestra página | No (flujo manual) | Sí, nativa |
| Impuestos de venta | Los maneja el padre (Stripe Tax es opcional y de pago) | Los maneja el padre | Gumroad como merchant of record |
| "Paga lo que quieras" | Sí | Limitado | Sí |
| Camino a futuro con nosotros | Stripe Connect | Limitado | No |
| Facilidad para padre no técnico | Alta (formulario de 10 a 15 min la primera vez) | Muy alta si ya tiene cuenta | Alta |

**Por defecto: Stripe Payment Link.** **Alternativa: PayPal** para quien ya tenga cuenta y no quiera abrir otra. Gumroad queda como "plan C" para padres que valoran que otro maneje impuestos y entrega más que la comisión.

### 3.2 Guía "listo en 5 minutos": Stripe Payment Link (para el padre)

Antes de empezar: ten a mano tu email, teléfono, fecha de nacimiento, dirección, los últimos 4 dígitos de tu SSN (EE.UU.) o los datos que Stripe pida en tu país, y tu cuenta bancaria.

1. **Crea tu cuenta.** Entra a stripe.com, toca "Start now", usa tu email (te sugerimos un email de la marca, creado por ti, por ejemplo `dinodoodlestudio.parent@gmail.com`).
2. **Activa los pagos.** Tipo de negocio: "Individual / Sole proprietor". Tú eres el titular, no tu hijo. Actividad: "Digital products". Sitio web: pega el link de la tienda de tu hijo en nuestra plataforma. Agrega tu cuenta bancaria.
3. **Protege la privacidad de tu hijo.** En la configuración de detalles públicos, pon como nombre público el **nombre de la marca**, nunca el nombre real del niño. Usa el email de la marca como email de soporte. Revisa qué datos de contacto quedan visibles en los recibos.
4. **Crea el Payment Link.** Ve a "Payment Links" y toca "New". Crea un producto con el nombre del pack (por ejemplo "Dino Coloring Pack, 8 pages") y el precio (USD 4). Opcional: activa "Let customers choose what to pay" con mínimo USD 3.
5. **Configura la entrega.** En "After payment", elige "Don't show confirmation page" y pega la **URL de descarga** que te da nuestra app (incluye `{CHECKOUT_SESSION_ID}` tal cual). Guarda.
6. **Pega el link en nuestra app.** Copia el link (empieza con `https://buy.stripe.com/`) y pégalo en "Payment link" en el panel de padres. Toca "Probar compra" y haz tú la primera compra real de USD 3 a 4 para ver que todo funciona (es la "venta 0" de la familia).

Nota: la primera vez que Stripe paga a tu banco puede tardar más de lo habitual. Ko-fi, por ejemplo, avisa que los primeros pagos de Stripe pueden tardar de 7 a 14 días ([Ko-fi Help](https://help.ko-fi.com/hc/en-us/articles/115003980093-How-do-I-get-paid)).

### 3.3 Guía "listo en 5 minutos": PayPal (para el padre)

1. **Entra a tu cuenta PayPal** (o crea una en paypal.com; el titular debe tener 18 años o la mayoría de edad de tu estado o provincia).
2. **Pasa a cuenta Business** si aún es personal (es gratis y conservas tu historial). Nombre del negocio: el **nombre de la marca**.
3. **Crea un link de pago.** En el panel Business busca "Pay links and buttons" (o "Payment links"), elige "Link", escribe el nombre del producto y el precio. Indica que es un producto digital, sin envío.
4. **Copia el link** y pégalo en nuestra app, en "Payment link".
5. **Activa el flujo "Confirmar venta".** Cada vez que PayPal te avise de un pago, abre nuestra app y toca "Confirmar" en el pedido. Nosotros enviamos el archivo al comprador.
6. **Haz la compra de prueba** con alguien de la familia.

**(No verificado):** si los links de pago de PayPal permiten una URL de retorno personalizada para automatizar la entrega. Si se confirma, el flujo de PayPal puede volverse automático como el de Stripe.

## 4. Marco legal y de privacidad

### 4.1 EE.UU.: COPPA (regla enmendada)

**¿Nos aplica?** Sí. COPPA aplica a servicios en línea dirigidos a menores de 13 años que recogen información personal. Nuestro público es de 8 a 14 años y el producto está diseñado para niños, así que somos un servicio "dirigido a niños" sin ambigüedad.

**Fechas:** las enmiendas se publicaron el 22 de abril de 2025, entraron en vigor el 23 de junio de 2025 y el cumplimiento es obligatorio desde el **22 de abril de 2026** ([Toy Association](https://toyassociation.org/PressRoom2/News/2026-News/updated-coppa-rule-requirements-take-effect-april-22.aspx), [White & Case](https://www.whitecase.com/insight-alert/unpacking-ftcs-coppa-amendments-what-you-need-know)). La FTC señaló que hará cumplir activamente las nuevas obligaciones ([Davis Polk](https://www.davispolk.com/insights/client-update/ftc-prioritizes-coppa-enforcement-new-compliance-obligations-take-effect)).

**Qué cambió y qué nos importa:**

| Requisito | Qué hacemos |
|---|---|
| **Información personal** incluye nombre, contacto, fotos, videos y audios con la imagen o voz del niño, geolocalización, identificadores persistentes y, con las enmiendas, identificadores biométricos ([White & Case](https://www.whitecase.com/insight-alert/unpacking-ftcs-coppa-amendments-what-you-need-know)) | No pedimos al niño nombre real, email, foto ni voz. El perfil del niño es un apodo + avatar. Borramos metadatos EXIF de todo archivo subido |
| **Consentimiento parental verificable (VPC)** antes de recoger datos del niño | El padre crea la cuenta y verifica antes de que el niño haga nada (ver 5.3) |
| **Consentimiento separado** para divulgar datos a terceros con fines no esenciales (por ejemplo, publicidad dirigida) | No divulgamos. Nada de pixels de publicidad ni SDKs de ads en la experiencia del niño |
| **Política escrita de retención de datos**, con plazos, publicada en el aviso de privacidad ([Toy Association](https://www.toyassociation.org/PressRoom2/News/2025_News/ftc-finalizes-updates-to-coppa.aspx)) | Ver plazos en el checklist (sección 5) |
| **Programa escrito de seguridad de la información** | Documento interno de 2 a 4 páginas: responsable, evaluación anual de riesgos, controles, respuesta a incidentes |
| **Identificadores persistentes para operaciones internas:** el aviso debe decir para qué se usan y cómo evitamos que sirvan para contactar a una persona ([Hunton](https://hunton.com/privacy-and-information-security-law/ftc-publishes-final-coppa-rule-amendments)) | Analítica propia o sin cookies, sin perfiles publicitarios |
| Derecho del padre a revisar y borrar los datos del hijo | Botón "Descargar datos" y "Borrar cuenta del hijo" en el panel del padre |

**Contenido público del niño (la tienda):** la tienda muestra trabajo creado por el niño. Si ese contenido incluyera información personal (cara, nombre, voz, ubicación), publicarlo sería "divulgar" información personal, lo que exige métodos de consentimiento más fuertes que "email plus". La FTC ha aceptado que fotos con rasgos faciales difuminados y sin otros datos personales no se consideran información personal ([Loeb & Loeb](https://www.loeb.com/en/insights/publications/2013/05/selected-highlights-from-the-ftcs-coppa-faqs)). **Diseño:** prerrevisión automática y aprobación del padre antes de publicar, prohibición de caras y voces, seudónimo obligatorio. Aun así, **recomendamos usar un método de VPC fuerte** (ver 5.3), porque es barato y nos protege si algo se filtra.

**Mentor IA:** enviar mensajes del niño a un proveedor de IA es compartir datos con un tercero. Debe ser un proveedor de servicio "esencial" bajo contrato, sin entrenar modelos con esos datos, con retención mínima, y declararlo en el aviso de privacidad. Recomendamos que el MVP no permita texto libre con datos personales (filtros que detectan y bloquean nombres, direcciones, teléfonos y escuelas).

**Safe Harbor:** existen programas aprobados por la FTC (kidSAFE, PRIVO, iKeepSafe, CARU, ESRB, entre otros) ([FTC, discurso 2019](https://www.ftc.gov/system/files/documents/public_statements/1512078/chopra_-_truth_about_tech_4-4-19.pdf)). No pudimos verificar precios. **Recomendación:** pedir cotización a kidSAFE y PRIVO antes del lanzamiento público (no antes del piloto). El sello también es marketing para padres.

**Leyes federales pendientes (KOSA, COPPA 2.0):** no las tratamos como vigentes. Verificar estado antes del lanzamiento público.

### 4.2 EE.UU.: leyes estatales

| Ley | Estado a octubre 2026 | Impacto para nosotros |
|---|---|---|
| **California Age-Appropriate Design Code (CAADCA)** | El 12 de marzo de 2026 el Noveno Circuito levantó gran parte del bloqueo, pero mantuvo bloqueadas las restricciones de uso de datos y la prohibición de "dark patterns" por vaguedad. El caso volvió al tribunal de distrito ([Cooley](https://www.cooley.com/news/insight/2026/2026-03-30-netchoice-v-bonta-ninth-circuit-narrows-injunction-against-californias-ageappropriate-design-code-act), [Holland & Knight](https://www.hklaw.com/en/insights/publications/2026/03/ninth-circuit-issues-mixed-ruling-on-california-age-appropriate-design-code-act)) | Aplica a menores de 18 años. Cumplir el espíritu: privacidad alta por defecto, sin geolocalización, sin dark patterns, evaluación de impacto documentada |
| **Maryland Kids Code** | Vigente desde el 1 de octubre de 2024, impugnado pero sin bloqueo ([Mayer Brown tracker](https://www.mayerbrown.com/de/insights/resource-centers/cybersecurity-and-data-privacy-resource-center/us-childrens-privacy-legislation-tracker)) | Similar al de California |
| **Nebraska Age-Appropriate Online Design Code** | Vigente desde el 1 de enero de 2026; multas desde el 1 de julio de 2026 (hasta USD 50.000 por infracción) ([IAPP](https://iapp.org/news/a/nebraska-vermont-s-age-appropriate-design-codes-look-to-bolster-children-s-online-safety)) | Similar |
| **Vermont Age-Appropriate Design Code** | Entra en vigor el 1 de enero de 2027 ([Mayer Brown tracker](https://www.mayerbrown.com/de/insights/resource-centers/cybersecurity-and-data-privacy-resource-center/us-childrens-privacy-legislation-tracker)) | Similar |
| **South Carolina** | Código vigente desde el 5 de febrero de 2026, impugnado por NetChoice ([Mayer Brown tracker](https://www.mayerbrown.com/de/insights/resource-centers/cybersecurity-and-data-privacy-resource-center/us-childrens-privacy-legislation-tracker)) | Similar |
| **Leyes de "app store accountability"** (Utah, Texas y otras) y leyes de redes sociales para menores | Varias en vigor o en litigio en 2026 ([Loeb & Loeb, junio 2026](https://www.loeb.com/en/insights/publications/2026/06/childrens-online-privacy-2026-state-app-store-design-code-and-social-media-laws)) | Relevantes si publicamos apps nativas en App Store o Google Play. La PWA web del MVP evita la mayor parte |
| **Leyes de "niños influencers"** (Illinois, California, Minnesota y otros) | Vigentes ([Davis+Gilbert](https://www.dglaw.com/new-laws-protecting-child-influencers-what-marketers-and-influencers-need-to-know/)) | Nuestro marketing sin cara evita el supuesto (ver doc 02, sección 6.1) |

**Nota práctica:** varias de estas leyes solo aplican por encima de ciertos umbrales (ingresos o volumen de datos). Es probable que una startup en piloto no los alcance, pero **diseñamos como si aplicaran**, porque cambiar la arquitectura después cuesta mucho más.

### 4.3 Canadá

- **PIPEDA (federal):** exige consentimiento significativo. La Oficina del Comisionado de Privacidad (OPC) ha sostenido que, en general, los menores de 13 no pueden dar consentimiento significativo y se requiere al padre o tutor.
- **Código de privacidad infantil (OPC):** consulta exploratoria de mayo a agosto de 2025; en 2026 publicó el informe "What We Heard" y su intención de redactar un código ([OPC](https://www.priv.gc.ca/en/about-the-opc/what-we-do/consultations/completed-consultations/consultation-children-code/report_children-code_2026/), [Osler](https://www.osler.com/en/insights/updates/insights-into-canadas-development-of-childrens-privacy-framework/?pdf=1)). En mayo de 2026 publicó guía sobre verificación de edad ([OPC, mayo 2026](https://www.priv.gc.ca/en/opc-news/news-and-announcements/2026/nr-c_260504/)). Su informe anual 2025-2026 se tituló "Championing children's privacy". No hay borrador público del código a la fecha. Ejes esperados: consentimiento, minimización, privacidad por defecto.
- **Quebec, Ley 25:** para recoger información personal de un menor de 14 años se necesita el consentimiento del titular de la autoridad parental, salvo que la recolección sea claramente en beneficio del menor ([Dialog Insight](https://www.dialoginsight.com/en/blog/law-25-en/impact-of-law-25-on-consents), [Watchdog](https://watchdogsecurity.io/law25/collection-from-minors)). Nuestro rango de 8 a 14 queda cubierto por el consentimiento parental universal. Ley 25 también exige un responsable de privacidad designado y evaluaciones de impacto en ciertos casos.
- La reforma federal (Bill C-27) murió con la prorrogación del Parlamento en enero de 2025 (**verificar** si hay un nuevo proyecto en 2026).

### 4.4 Australia

- **Privacy Act 1988 y reformas:** la ley de reforma de diciembre de 2024 ordenó crear un **Children's Online Privacy Code**. El borrador se publicó el 31 de marzo de 2026, la consulta cerró el 5 de junio de 2026 y la OAIC debe registrarlo antes del **10 de diciembre de 2026**; la fecha de entrada en vigor aún no está confirmada ([Gilbert + Tobin](https://www.gtlaw.com.au/insights/exposure-draft-of-childrens-online-privacy-code-released), [Baker McKenzie](https://www.bakermckenzie.com/en/insight/publications/2026/05/australia-childrens-online-privacy-code-exposure-draft), [Corrs](https://corrs.com.au/insights/oaics-childrens-online-privacy-exposure-draft-from-consultation-to-code)).
- **Lo que trae el borrador:** aplica a servicios "probablemente accedidos por niños"; para menores de 15, el consentimiento lo da el padre o tutor y hay que tomar medidas razonables para verificar esa responsabilidad parental; evaluaciones de impacto obligatorias para tratamientos de alto riesgo con registro; multas de hasta A$3,3 millones ([Allens](https://www.allens.com.au/insights-news/insights/2026/04/draft-childrens-online-privacy-code-proposed-protections-to-have-material-impact-on-online-services/), [DLA Piper](https://privacymatters.dlapiper.com/2026/04/australia-exposure-draft-of-childrens-online-privacy-code-signals-tougher-standards/)).
- **Excepción de pequeña empresa:** la Privacy Act en general no aplica a empresas con facturación anual menor a A$3 millones, salvo excepciones. **No nos apoyemos en eso:** el código infantil es el estándar al que se nos comparará, y los padres australianos lo esperan.
- **Ley de edad mínima para redes sociales (menores de 16):** desde el 10 de diciembre de 2025, plataformas como Facebook, Instagram, Snapchat, TikTok, YouTube, X, Reddit, Twitch y Kick deben impedir cuentas de menores de 16 ([eSafety](https://www.esafety.gov.au/about-us/industry-regulation/social-media-age-restrictions)). Quedan fuera los servicios de mensajería, juegos online y los servicios cuyo propósito principal es educativo, entre otros (WhatsApp, Roblox, Google Classroom, LEGO Play, YouTube Kids) ([Departamento de Infraestructura](https://www.infrastructure.gov.au/department/media/news/minimum-age-social-media-access), [FAQ eSafety](https://www.esafety.gov.au/about-us/industry-regulation/social-media-age-restrictions/faqs)).
  - **¿Nos afecta?** No debería, si mantenemos el producto sin interacción social entre usuarios: sin chat, sin comentarios, sin seguidores, sin feed social. La tienda es una página de producto vista por compradores adultos. Además somos un servicio educativo. **Regla de producto:** cualquier función social futura (ranking con nombres, comentarios entre niños) debe pasar por revisión legal para Australia.
  - **Efecto indirecto:** los niños australianos no pueden promocionarse en esas redes. Nuestro modelo (el padre comparte) ya lo resuelve.

### 4.5 Impuestos sobre los ingresos del niño (alto nivel)

El dinero llega a la cuenta del padre. Eso simplifica la operación, pero la pregunta "¿de quién es el ingreso?" depende de quién lleva realmente el negocio. Para el piloto, los montos serán pequeños (decenas de dólares). Recomendación: **el panel de padres incluye un registro anual de ventas descargable** y un aviso de "consulta con tu contador si superas X".

| País | Lo esencial |
|---|---|
| **EE.UU.** | Si el niño es quien tiene el negocio, debe declarar si su ingreso neto de autoempleo llega a USD 400 o más en el año, y paga impuesto de autoempleo (15,3 %) ([Credit Karma](https://www.creditkarma.com/tax/library/tax-filing-basics/filing-requirements-for-dependents/), [Beancount](https://beancount.io/blog/2026/09/15/lemonade-stand-young-entrepreneurs-taxes-400-rule-guide)). Deducción estándar 2026 para dependientes: el mayor entre USD 1.350 o ingreso ganado + USD 450 (según fuentes secundarias que citan la Rev. Proc. 2025-32). Si el ingreso se trata como del padre, entra en su declaración. El formulario 1099-K lo recibe el titular de la cuenta de pagos (el padre) solo por encima del umbral federal vigente (**verificar** umbral 2026). **Impuesto de ventas:** algunos estados gravan productos digitales; a volúmenes de piloto el riesgo práctico es bajo, pero existe ([Stripe](https://stripe.com/es/guides/sales-tax-definitions)). Gumroad lo resuelve como merchant of record. Idea para fase 2: los ingresos ganados permiten abrir una Roth IRA de custodia, gran lección financiera |
| **Canadá** | El monto personal básico federal 2026 es de aprox. CAD 16.452 ([Advisor.ca](https://www.advisor.ca/industry-news/industry/essential-tax-numbers-updated-for-2026/)), así que un niño con ventas pequeñas normalmente no paga impuesto federal. Registro de GST/HST obligatorio solo al superar CAD 30.000 en cuatro trimestres (pequeño proveedor). Las reglas de "tax on split income" pueden aplicar si el negocio se considera del padre. Consultar a un contador |
| **Australia** | Los menores pagan tasas castigadas sobre ingresos "no exceptuados" (desde A$417, y 45 % del total por encima de A$1.307) ([ATO](https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/income-you-must-declare/your-income-if-you-are-under-18-years-old)). Los ingresos de empleo y de un negocio que el menor realmente lleva son "excepted income" y tributan a tasas normales ([ITAA 1936, s 102AE](https://20.austlii.edu.au/au/legis/cth/consol_act/itaa1936240/s102ae.html)), con normas antiabuso si en realidad es del padre. GST solo desde A$75.000 de facturación |

### 4.6 Riesgo de transmisión de dinero si algún día manejamos fondos

- **Hoy (v1):** el comprador paga directamente al proveedor del padre (Stripe, PayPal). Nosotros nunca recibimos ni retenemos dinero. **Riesgo bajo.**
- **Si cobramos nosotros y luego pagamos a las familias:**
  - **EE.UU.:** a nivel federal (FinCEN) existe una exclusión para "procesadores de pago" que actúan como agentes del comerciante bajo contrato ([FinCEN, FIN-2008-R006](https://www.fincen.gov/sites/default/files/administrative_ruling/fin-2008-r006.pdf), [Modern Treasury](https://moderntreasury.com/learn/what-is-an-agent-of-the-payee-exemption)), pero cada estado tiene su propia ley de transmisores de dinero y su interpretación puede ser más estricta (California, por ejemplo, ha concluido que ciertos procesadores sí transmiten dinero aunque cumplan las condiciones federales) ([DFPI](https://dfpi.ca.gov/rules-enforcement/laws-and-regulations/opinion-letters-by-law-subject/opinion-letter-payment-processing-service-not-exempt-as-agent-of-payee-or-factoring)). Licencias en decenas de estados cuestan años y cientos de miles de dólares.
  - **Canadá:** registro como MSB ante FINTRAC si se transfieren fondos y, para proveedores de servicios de pago, registro ante el Banco de Canadá bajo la Retail Payment Activities Act (**verificar** alcance).
  - **Australia:** posible licencia de servicios financieros o régimen de proveedores de pago en reforma (**verificar**).
  - **Solución:** usar **Stripe Connect**, donde Stripe es la entidad regulada que mueve el dinero y cada familia es una cuenta conectada a nombre del padre (Express y Custom exigen titular de 18+, lo que ya cumplimos). Nunca una cuenta bancaria propia que junte el dinero de todos.

## 5. Checklist de cumplimiento del MVP

### 5.1 Qué recogemos

| Del padre | Del niño | Del comprador |
|---|---|---|
| Nombre, email, país, estado/provincia | Apodo (no el nombre real), año de nacimiento o rango de edad (para la ruta), avatar elegido de una galería | Email (solo para enviar el archivo), monto pagado (si lo informa el proveedor) |
| Método de verificación (resultado, no el documento) | Progreso de lecciones, XP, rachas | |
| Link de pago (pegado por el padre) | Archivos del producto (dibujos escaneados, sin caras) | |
| Datos de suscripción (los guarda Stripe, no nosotros) | Nombre de marca seudónimo | |

### 5.2 Qué nunca recogemos

- Nombre real, apellido, email o teléfono **del niño**.
- Fotos o videos con la cara del niño; audio con su voz (si en el futuro hay voz para dictar, se transcribe y se borra el audio de inmediato).
- Escuela, ciudad, barrio, dirección, geolocalización precisa. Metadatos EXIF se borran al subir.
- Datos biométricos de cualquier tipo.
- Contactos, agenda o redes sociales del niño.
- Identificadores publicitarios; ningún SDK de publicidad, ni retargeting, ni pixels de Meta/TikTok en páginas que ve el niño.

### 5.3 Consentimiento parental verificable

**Método recomendado (en orden):**
1. **Transacción con tarjeta del padre** al activar la suscripción familiar (o un cargo mínimo reembolsable en el plan gratis), con aviso al titular de la tarjeta. Es un método aceptado por la FTC cuando va unido a una transacción monetaria.
2. **Alternativa:** verificación por un tercero especializado (por ejemplo PRIVO, o servicios como Kids Web Services; **costos no verificados**), o los métodos nuevos reconocidos por la FTC: preguntas basadas en conocimiento o comparación de selfie con documento oficial, con borrado inmediato ([Jones Day](https://jonesday.com/en/insights/2025/05/ftc-finalizes-amendments-to-coppa--rule), [PRIVO](https://www.privo.com/blog/understanding-new-coppa-amendments)).
3. **No usar "email plus"** como método único, porque la tienda pública implica mostrar contenido del niño.

Flujo: el padre se registra primero → acepta aviso directo de privacidad → verifica → crea el perfil del niño. El niño nunca se registra solo. Si el padre no completa la verificación en 7 días, borramos su email.

### 5.4 Retención (política escrita y publicada)

| Dato | Plazo |
|---|---|
| Cuenta del niño inactiva | Borrado a los 12 meses de inactividad, con aviso al padre a los 11 |
| Cuenta cerrada por el padre | Borrado en 30 días (copias de respaldo en 90) |
| Archivos de producto de una tienda despublicada | 90 días |
| Mensajes con el mentor IA | 30 días, luego solo métricas agregadas |
| Email de comprador | Hasta 12 meses después de la compra (para reenviar el archivo) |
| Email de padre no verificado | 7 días |

### 5.5 Lista de verificación final

- [ ] Aviso de privacidad en lenguaje claro (versión padre y versión niño), con la lista de terceros, la retención y los usos de identificadores persistentes.
- [ ] Aviso directo al padre antes del consentimiento.
- [ ] VPC fuerte implementado y registrado (fecha, método, resultado).
- [ ] Panel del padre: ver, descargar y borrar datos del hijo; despublicar tienda con un toque.
- [ ] Programa escrito de seguridad (responsable, cifrado en tránsito y en reposo, accesos mínimos, revisión anual, plan de incidentes).
- [ ] Contratos con proveedores (hosting, base de datos, IA, email) que prohíban usos secundarios y entrenamiento con datos de niños.
- [ ] Cero publicidad a niños. Cero ofertas de partners mostradas al niño; todas van al padre.
- [ ] Sin chat ni mensajes entre usuarios. Sin comentarios públicos en tiendas.
- [ ] Moderación previa: el padre aprueba cada producto y cada cambio de tienda antes de publicarse; filtro automático de caras y de texto con datos personales.
- [ ] Seudónimo obligatorio; bloqueo de palabras que parezcan nombre y apellido en el nombre de marca.
- [ ] Ajustes de privacidad altos por defecto (requisito de los códigos de diseño estatales y del código australiano).
- [ ] Evaluación de impacto (DPIA/PIA) de una página por funcionalidad nueva que trate datos del niño.
- [ ] Responsable de privacidad designado (exigido por Ley 25 de Quebec).
- [ ] Términos para padres: el padre es el comerciante, responsable de impuestos y de la relación con su proveedor de pagos; nosotros no manejamos fondos.
- [ ] Antes del lanzamiento público: revisión por abogado y cotización de un Safe Harbor COPPA.

## 6. Plan de contacto con partners

### 6.1 Los 5 primeros

| # | Partner | Por qué ahora | Qué les ofrecemos | Qué pedimos |
|---|---|---|---|---|
| 1 | **Greenlight** | Mayor app de dinero para niños en EE.UU.; enseña a gastar y ahorrar, nosotros a ganar. Complemento perfecto | Un "destino" para el dinero que los niños ganan: botón "Transfiere tus ganancias a Greenlight" en el panel del padre; contenido de emprendimiento para sus usuarios | Afiliado o co-marketing hacia padres; acceso a su comunidad de familias para el piloto ampliado |
| 2 | **Stripe** | Es nuestro camino de pagos por defecto | Caso de estudio de "primer negocio familiar"; flujo de onboarding de padres que les trae cuentas nuevas | Revisión del flujo "padre como titular, producto hecho por el hijo"; orientación sobre Connect para fase 2; créditos o programa de startups |
| 3 | **Acton Children's Business Fair** | Cientos de ferias al año; niños de 6 a 17 ya vendiendo | Programa gratuito de 30 días "prepárate para la feria" y una tienda online para seguir vendiendo después | Distribución a organizadores locales; prueba con 2 o 3 ferias |
| 4 | **Lemonade Day** | Programa nacional con fecha fija y padres involucrados | Ruta digital previa y posterior al día del evento | Lo mismo: distribución y co-branding |
| 5 | **Canva** | Herramienta que los niños mayores y los padres ya usan; tiene la marca "educación" | Lecciones de diseño para emprendedores con Canva para 13 a 14 años y padres; usuarios futuros | Claridad sobre el uso familiar bajo 13 años; posible ruta "Canva for Families"; contenido co-creado |

Segunda ola (después del piloto, con datos): Mydoh (Canadá), Spriggy (Australia), Redbubble y Printful (productos físicos), Gumroad o Payhip (entrega de archivos integrada).

### 6.2 Plantilla de email (en inglés)

> **Subject:** Kids' first online sale in 30 days (pilot results + partnership idea)
>
> Hi [Name],
>
> I'm [Founder], founder of [Product], a "Duolingo for entrepreneurship" for kids aged 8 to 14. In 30 days, with 5 minutes a day and zero money invested, kids create a digital product (like a coloring pack) and make their first real online sale, with their parent owning every account. No faces, no real names, privacy first.
>
> In our pilot with [N] families, [X]% of kids made their first sale, with an average of [Y] sales each. Parents tell us the missing piece is [what this partner solves, e.g. "a safe place for kids to keep and grow what they earned"].
>
> I think there's a simple win for [Partner]: [one-sentence offer, e.g. "a 'move your earnings to Greenlight' step at the end of our 30-day path, so every family that finishes is a warm lead for you"].
>
> Could we do a 20-minute call in the next two weeks? Happy to share the pilot data and a 1-page proposal.
>
> Thanks,
> [Founder name]
> [Product] | [link] | [phone]

Recomendación de táctica: enviar a la persona de "Partnerships" o "Community" (no a ventas), por LinkedIn y email, después de tener los datos del piloto de 4 semanas. Las ferias (Acton, Lemonade Day) se pueden contactar antes, porque nuestra oferta para ellas es gratuita.

## 7. Lo que no pudimos verificar

- Edad mínima oficial de Ko-fi, Lemon Squeezy, Payhip y Printify.
- Comisiones de afiliados de Etsy, Shopify, Printify, Redbubble, Greenlight, Acorns Early, Step, Mydoh y Spriggy.
- Si PayPal permite URL de retorno personalizada en sus links de pago.
- Si Spring cerró efectivamente el 15 de septiembre de 2026.
- Precios de programas Safe Harbor y de proveedores de VPC.
- Umbral federal vigente del formulario 1099-K para 2026.
- Alcance exacto de la Retail Payment Activities Act (Canadá) y de la reforma de pagos en Australia para un posible modelo futuro con fondos.

## Fuentes

- [Stripe Services Agreement (EE.UU.)](https://stripe.com/en-gb-us/ssa)
- [Stripe Support: age requirement](https://support.stripe.com/questions/can-i-use-stripe-if-i-am-under-18)
- [Xero: Stripe pricing](https://www.xero.com/pricing-plans/pricing-and-fees-for-stripe/)
- [Checkoutpage: Stripe international fees](https://checkoutpage.com/blog/stripe-international-fees)
- [Oh My Hi: Stripe payment link for digital products](https://ohmyhi.com/doc/how-to-create-a-stripe-payment-link-for-your-digital-product/)
- [Datafast: Stripe Payment Links](https://datafa.st/docs/stripe-payment-links)
- [LinkVault](https://www.hunted.space/product/linkvault-5)
- [PayPal User Agreement (EE.UU.)](https://www.paypal.com/us/webapps/mpp/ua/useragreement-full)
- [PayPal User Agreement (mundial)](https://securepayments.paypal.com/legalhub/useragreement-full)
- [Checkoutpage: PayPal fees 2026](https://checkoutpage.com/blog/paypal-fees)
- [Gumroad Terms](https://gumroad.com/terms), [Gumroad sales tax](https://gumroad.com/help/article/121-sales-tax-on-gumroad), [Gumroad affiliates](https://gumroad.com/help/article/333-affiliates-on-gumroad)
- [ConductAtlas: Gumroad age](https://conductatlas.com/platform/gumroad/gumroad-terms-of-service/user-must-be-at-least-13-years-old/)
- [Schoolmaker: Gumroad pricing](https://schoolmaker.com/blog/gumroad-pricing), [Checkoutpage: Gumroad fees](https://checkoutpage.com/blog/gumroad-fees)
- [Lemon Squeezy: activate store](https://docs.lemonsqueezy.com/help/getting-started/activate-your-store), [affiliates](https://docs.lemonsqueezy.com/help/affiliates-for-merchants/getting-set-up)
- [Swell: Lemon Squeezy pricing](https://www.swell.is/content/lemon-squeezy-pricing), [Dodo: Lemon Squeezy alternatives](https://dodopayments.com/blogs/lemonsqueezy-alternatives), [Chargepanda](https://www.chargepanda.com/blog/post/lemonsqueezy-alternative)
- [Ko-fi Terms](https://more.ko-fi.com/terms), [Ko-fi: How do I get paid](https://help.ko-fi.com/hc/en-us/articles/115003980093-How-do-I-get-paid), [Schoolmaker: Ko-fi pricing](https://schoolmaker.com/blog/ko-fi-pricing)
- [Dodo: Payhip review](https://dodopayments.com/blogs/payhip-review)
- [Etsy: Can minors sell on Etsy](https://help.etsy.com/hc/en-gb/articles/360040983333-Can-Minors-Sell-on-Etsy), [Etsy Creativity Standards](https://www.etsy.com/legal/creativity)
- [Shopify Terms](https://shopify.com/terms), [Shopify Community](https://community.shopify.com/t/can-i-start-a-merchandise-shop-under-18-with-parental-consent/248928)
- [Printful Privacy](https://www.printful.com/policies/download/privacy), [Printful partner programs](https://www.printful.com/partner-programs)
- [Printify Terms](https://printify.com/terms-of-service)
- [Redbubble User Policies](https://help.redbubble.com/hc/en-us/articles/201761545)
- [Wikipedia: Teespring](https://en.wikipedia.org/wiki/Teespring), [RetailWire: Spring lawsuits](https://retailwire.com/creator-merchandise-company-spring-has-been-hit-with-7-lawsuits-this-year/)
- [Canva Terms](https://canva.com/policies/terms-of-use/), [Canva for Education](https://www.canva.com/help/about-canva-for-education/), [ConductAtlas: Canva](https://conductatlas.com/platform/canva/canva-terms-of-use/age-restriction-and-parental-consent/)
- [Dodo: SaaS affiliate programs](https://dodopayments.com/blogs/saas-affiliate-program), [AdSpyder: Canva affiliate](https://adspyder.io/blog/canva-affiliate-program/)
- [Google Families](https://support.google.com/families/answer/9114774), [Apple Family Sharing](https://support.apple.com/119854)
- [Greenlight pricing](https://help.greenlight.com/hc/en-us/articles/235739508-How-much-does-Greenlight-cost)
- [Acorns Early promo terms](https://www.acorns.com/early/april-2026-promotion-terms/)
- [MyBankTracker: Step](https://www.mybanktracker.com/checking/reviews/step-card-teen-banking-account-review-432126)
- [Mydoh](https://www.mydoh.ca/), [Spriggy FAQ](https://www.spriggy.com.au/faq)
- [Toy Association: COPPA April 22](https://toyassociation.org/PressRoom2/News/2026-News/updated-coppa-rule-requirements-take-effect-april-22.aspx), [Toy Association: FTC finalizes](https://www.toyassociation.org/PressRoom2/News/2025_News/ftc-finalizes-updates-to-coppa.aspx)
- [White & Case: COPPA amendments](https://www.whitecase.com/insight-alert/unpacking-ftcs-coppa-amendments-what-you-need-know)
- [Davis Polk: COPPA enforcement](https://www.davispolk.com/insights/client-update/ftc-prioritizes-coppa-enforcement-new-compliance-obligations-take-effect)
- [Hunton: final COPPA amendments](https://hunton.com/privacy-and-information-security-law/ftc-publishes-final-coppa-rule-amendments)
- [Jones Day: COPPA amendments](https://jonesday.com/en/insights/2025/05/ftc-finalizes-amendments-to-coppa--rule), [PRIVO: new COPPA amendments](https://www.privo.com/blog/understanding-new-coppa-amendments)
- [Loeb & Loeb: COPPA FAQs](https://www.loeb.com/en/insights/publications/2013/05/selected-highlights-from-the-ftcs-coppa-faqs)
- [FTC: Chopra statement 2019 (safe harbors)](https://www.ftc.gov/system/files/documents/public_statements/1512078/chopra_-_truth_about_tech_4-4-19.pdf)
- [Cooley: NetChoice v. Bonta](https://www.cooley.com/news/insight/2026/2026-03-30-netchoice-v-bonta-ninth-circuit-narrows-injunction-against-californias-ageappropriate-design-code-act), [Holland & Knight](https://www.hklaw.com/en/insights/publications/2026/03/ninth-circuit-issues-mixed-ruling-on-california-age-appropriate-design-code-act)
- [Mayer Brown: US children's privacy tracker](https://www.mayerbrown.com/de/insights/resource-centers/cybersecurity-and-data-privacy-resource-center/us-childrens-privacy-legislation-tracker)
- [IAPP: Nebraska and Vermont](https://iapp.org/news/a/nebraska-vermont-s-age-appropriate-design-codes-look-to-bolster-children-s-online-safety)
- [Loeb & Loeb: children's online privacy 2026](https://www.loeb.com/en/insights/publications/2026/06/childrens-online-privacy-2026-state-app-store-design-code-and-social-media-laws)
- [Davis+Gilbert: child influencer laws](https://www.dglaw.com/new-laws-protecting-child-influencers-what-marketers-and-influencers-need-to-know/)
- [OPC: What We Heard, children's code 2026](https://www.priv.gc.ca/en/about-the-opc/what-we-do/consultations/completed-consultations/consultation-children-code/report_children-code_2026/), [OPC news May 2026](https://www.priv.gc.ca/en/opc-news/news-and-announcements/2026/nr-c_260504/), [Osler](https://www.osler.com/en/insights/updates/insights-into-canadas-development-of-childrens-privacy-framework/?pdf=1)
- [Dialog Insight: Law 25 consents](https://www.dialoginsight.com/en/blog/law-25-en/impact-of-law-25-on-consents), [Watchdog: Law 25 minors](https://watchdogsecurity.io/law25/collection-from-minors)
- [Gilbert + Tobin: Children's Online Privacy Code](https://www.gtlaw.com.au/insights/exposure-draft-of-childrens-online-privacy-code-released), [Baker McKenzie](https://www.bakermckenzie.com/en/insight/publications/2026/05/australia-childrens-online-privacy-code-exposure-draft), [Corrs](https://corrs.com.au/insights/oaics-childrens-online-privacy-exposure-draft-from-consultation-to-code), [Allens](https://www.allens.com.au/insights-news/insights/2026/04/draft-childrens-online-privacy-code-proposed-protections-to-have-material-impact-on-online-services/), [DLA Piper](https://privacymatters.dlapiper.com/2026/04/australia-exposure-draft-of-childrens-online-privacy-code-signals-tougher-standards/)
- [eSafety: social media age restrictions](https://www.esafety.gov.au/about-us/industry-regulation/social-media-age-restrictions), [FAQ](https://www.esafety.gov.au/about-us/industry-regulation/social-media-age-restrictions/faqs), [Infrastructure.gov.au](https://www.infrastructure.gov.au/department/media/news/minimum-age-social-media-access)
- [Credit Karma: dependents filing](https://www.creditkarma.com/tax/library/tax-filing-basics/filing-requirements-for-dependents/), [Beancount: $400 rule](https://beancount.io/blog/2026/09/15/lemonade-stand-young-entrepreneurs-taxes-400-rule-guide)
- [Stripe: sales tax definitions](https://stripe.com/es/guides/sales-tax-definitions)
- [Advisor.ca: 2026 tax numbers](https://www.advisor.ca/industry-news/industry/essential-tax-numbers-updated-for-2026/)
- [ATO: minors' income](https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/income-you-must-declare/your-income-if-you-are-under-18-years-old), [ITAA 1936 s 102AE](https://20.austlii.edu.au/au/legis/cth/consol_act/itaa1936240/s102ae.html)
- [FinCEN FIN-2008-R006](https://www.fincen.gov/sites/default/files/administrative_ruling/fin-2008-r006.pdf), [Modern Treasury: agent of payee](https://moderntreasury.com/learn/what-is-an-agent-of-the-payee-exemption), [California DFPI opinion](https://dfpi.ca.gov/rules-enforcement/laws-and-regulations/opinion-letters-by-law-subject/opinion-letter-payment-processing-service-not-exempt-as-agent-of-payee-or-factoring)
