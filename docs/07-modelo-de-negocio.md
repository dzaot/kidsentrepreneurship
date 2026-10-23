# Modelo de negocio, precios, unit economics y salida al mercado

Fecha: 23 de octubre de 2026. Documento de trabajo, versión 1. Se apoya en [01-analisis-blue-ocean.md](01-analisis-blue-ocean.md), [03-partners-y-legal.md](03-partners-y-legal.md), [04-producto-y-arquitectura.md](04-producto-y-arquitectura.md), [05-plan-de-validacion.md](05-plan-de-validacion.md) y [06-youtube-y-dropshipping.md](06-youtube-y-dropshipping.md).

> **Aviso:** las cifras de mercado vienen de búsquedas web (muchas veces resúmenes de fuentes secundarias). Marcamos con **(no verificado)** lo que viene de una sola fuente secundaria, de agregadores o de nuestro propio conocimiento sin fuente a mano. Todo lo que dice **(supuesto)** es una hipótesis nuestra que el piloto y los primeros meses de cobro deben confirmar o tumbar. No es asesoría financiera, legal ni fiscal.

## 0. Resumen ejecutivo (la recomendación)

**Recomendación en una frase:** lanzar Venturoo como una suscripción familiar **"annual first"** (anual como opción por defecto), crecer con canales orgánicos y de alianzas (homeschool, ferias infantiles, el link de la tienda del niño y referidos), **no depender de anuncios pagados** hasta probar que el pago anual cubre el CAC desde el día 1, y financiarse con bootstrapping más subvenciones no dilutivas hasta llegar a unas 300 familias pagadoras con buena retención.

1. **El hueco sigue abierto.** En la revisión de octubre de 2026 no encontramos a ningún actor grande (Duolingo, Khan Academy, Greenlight, Acorns Early, Prodigy, Outschool) que lleve a niños de 8 a 14 a una **venta real**. Hay nuevos entrantes pequeños (Lemonade, YouthAI, YoungMinds.app), pero ninguno junta hábito diario, tienda segura y padre dueño de las cuentas.
2. **El tutor de IA ya no es un diferenciador que se pueda cobrar.** Gemini se abre a menores de 13 con Family Link y Khanmigo para familias cuesta unos USD 4 al mes. Guroo debe venderse como "el coach que te lleva a tu primera venta", no como "chat de IA".
3. **Los precios de referencia del mercado** van de USD 45 al año (ABCmouse anual) a USD 240 al año (Brilliant), con planes familiares típicos entre USD 45 y 120 al año. **USD 59,99 al año está bien ubicado; USD 7,99 al mes también.** Recomendamos probar USD 9,99 / 69,99 frente a 7,99 / 59,99.
4. **Planes:** Free (Unidad 1, un niño, Guroo limitado) y **Family Plus** (hasta 4 hijos, ruta completa, tienda, Guroo, Nivel 2). Prueba de 14 días con tarjeta al entrar a la Unidad 2. **Sin plan "lifetime"**: con costo de IA recurrente es mala idea. Sí a "Familia Fundadora" (USD 49 al año, precio congelado) y a tarjetas de regalo para Navidad.
5. **Mercado:** unos 34,5 millones de niños de 8 a 14 en EE.UU., Canadá y Australia, unos 24 millones de hogares (supuesto). TAM de unos USD 1.400 millones al año; SAM realista de unos USD 140 millones; el homeschool (más de 3,4 millones de alumnos en EE.UU.) es la cabeza de playa.
6. **Unit economics (escenario base):** ingreso neto de unos USD 5,80 por familia pagadora al mes, COGS de unos USD 1,30 (IA, hosting, email), margen bruto del 73 %, LTV de unos USD 67, CAC mezclado de USD 45, **LTV/CAC de 1,5** y recuperación del CAC en unos 10 meses. Es justo. **Con anuncios pagados (CAC de 100 o más) no cierra.** Con pago anual por adelantado, el CAC se recupera el mismo día.
7. **El riesgo económico número uno es la "churn por éxito":** la familia logra la primera venta y cancela. La respuesta es producto (Nivel 2, rutas de temporada, segundo y tercer proyecto) más anual por defecto.
8. **Costo de IA:** con Opus en todo, unos 1,2 centavos por mensaje; con enrutamiento (Claude Haiku 5.5 para lo simple, Opus para lo difícil) baja a unos 0,4 centavos. El tope de 40 mensajes al día es un riesgo de costo (un niño intensivo podría costar más de USD 10 al mes): mantener el tope, pero con presupuesto mensual por familia y Haiku para el plan gratis.
9. **Salida al mercado en 12 meses:** piloto (noviembre), lista de espera y regalo de Navidad (diciembre), lanzamiento pagado (enero de 2027), temporada homeschool y "30 días antes de Lemonade Day" (marzo a mayo), **"Summer CEO"** (junio a agosto, la ventana más grande), y segunda Navidad. En Australia la Navidad y las vacaciones de verano coinciden: doble gancho.
10. **Proyección a 3 años (escenario base):** unas 7.200 familias pagadoras y unos USD 0,6 millones de ARR al final del año 3, con burn acumulado de unos USD 0,4 millones. Optimista: unos USD 2 millones de ARR (suscripción más partners) y cerca del punto de equilibrio. Pesimista: menos de USD 50.000 de ARR, señal para girar hacia colegios y alianzas o parar.
11. **Hitos antes de levantar dinero:** 50 % de niños con primera venta en el piloto, 300 familias pagadoras con 40 % o más en plan anual, churn mensual menor al 8 %, un canal con CAC menor a USD 40 repetible y un partner firmado (feria o fintech).
12. **Las 5 métricas a vigilar:** tasa de primera venta a 30 días, conversión de familias activadas a pago (y % anual), retención de pago a 3 meses, CAC y payback por canal, y días activos por semana por niño.

## 1. Competencia: actualización 2026

### 1.1 ¿Alguien grande entró en emprendimiento infantil?

| Actor | ¿Ofrece emprendimiento o negocio para niños en 2026? | Qué cobra | Lectura para nosotros |
|---|---|---|---|
| **Duolingo** | No encontramos un curso de negocios. Sus materias nuevas son Matemáticas, Música y Ajedrez ([blog de Duolingo](https://blog.duolingo.com/new-subjects/)). Lo más cercano son ejercicios de "matemática del mundo real" como propinas y salario por hora ([TipRanks, DuoCon 2023](https://www.tipranks.com/news/press-releases/duolingo-previews-its-multi-subject-future-at-duocon-2023)) | Super unos USD 84 al año; Family unos USD 119,99 al año para 6 personas ([Mindomax](https://www.mindomax.com/duolingo-cost), **no verificado**) | Amenaza baja a corto plazo, alta a largo plazo si deciden entrar. Fija la expectativa de experiencia (rachas, mascota, 5 minutos). Q2 2026: 58,7 millones de usuarios activos diarios y unos 12,7 millones de suscriptores de pago ([10-Q de Duolingo](https://www.sec.gov/Archives/edgar/data/0001562088/000162828026053603/duol-20260630.htm), [Pulse 2.0](https://pulse2.com/duolingo-daily-active-users-reach-58-7-million-as-retention-hits-record-84-and-social-accounts-top-1-billion-organic-impressions/)) |
| **Khan Academy** (Khanmigo, Khan Kids) | No encontramos contenido de emprendimiento para niños. Khan Kids es gratis; Khanmigo es el tutor de IA | Khanmigo para familias: unos USD 4 al mes o 44 al año ([página de precios de Khanmigo](https://khanmigo.ai/pricing), [foro de soporte de Khan](https://support.khanacademy.org/hc/es/community/posts/38569868648205-Bring-Khanmigo-to-Indian-Students)) | **Ancla de precio bajísima para "tutor de IA".** No podemos cobrar por Guroo como tutor genérico |
| **Greenlight** | No. Tarjeta, mesada, tareas, inversión y el juego "Level Up" ([Greenlight](https://greenlight.com/greenlight-alternatives)) | Core USD 5,99, Max 10,98, Infinity 15,98, Family Shield 19,98 al mes por familia ([Greenlight Help](https://help.greenlight.com/hc/en-us/articles/235739508-How-much-does-Greenlight-cost)) | Sigue siendo partner, no rival. El riesgo es que añadan una función "Earn" para vender. Hay que acercarse antes (doc 03) |
| **Acorns Early** (ex GoHenry) | No. Tareas, mesada, "Money Missions" con quizzes y videos ([Greenlight, review de Acorns Early](https://greenlight.com/learning-center/reviews/acorns-early-review)) | Desde unos USD 5 a 8 al mes según la fuente (**no verificado**) | Igual que Greenlight |
| **Step** | No encontramos contenido de emprendimiento (**no verificado**) | Cuenta adolescente, modelo de banca | Fuera de nuestro rango de edad (adolescentes) |
| **Zogo** | Educación financiera gamificada para 13 años o más, distribuida por bancos y credit unions; premios canjeables por tarjetas de regalo ([STCU](https://stcu.org/learn/financial-education-resources/zogo)) | B2B, precio a medida por institución | Modelo B2B2C que podemos copiar más adelante (marca blanca para credit unions) |
| **Outschool** | Marketplace de clases en vivo. No confirmamos clases de emprendimiento en la búsqueda (**no verificado**; es probable que existan de profesores individuales) | Membresía por créditos desde unos USD 40 a 60 al mes ([Neurolaunch](https://neurolaunch.com/outschool-review/), [Outschool pricing](https://webflow.outschool.com/pricing)); clases sueltas de USD 10 a 50 ([SheKnows](https://www.sheknows.com/parenting/articles/3070379/what-is-outschool-tutoring/)) | Cursos, no hábito. Posible canal: dar una clase gratuita "Launch your first shop" como embudo |
| **Prodigy** | No, matemáticas e inglés | USD 9,95 a 29,95 al mes por niño; anual de unos USD 59 a 119 ([Prodigy](https://prodigygame.com/main-en/blog/ways-to-save-on-prodigy-memberships), [The Pricer](https://www.thepricer.org/how-much-does-prodigy-membership-cost/)) | Prueba de que los padres pagan unos USD 60 al año por niño en un juego educativo |

### 1.2 Tutores de IA para niños (lo nuevo)

| Producto | Qué es | Precio | Lectura |
|---|---|---|---|
| **Khanmigo** | Tutor de IA de Khan con panel para padres y alertas de moderación | ~USD 4 al mes | Ancla baja |
| **Synthesis Tutor** | Tutor de matemáticas con IA, 5 a 11 años | ~USD 29 al mes o ~USD 119 al año, cifras contradictorias ([Classace](https://www.classace.io/compare/synthesis-tutor), [Gravity](https://gravity.fast/blog/ai-tutor/), **no verificado**) | Prueba de que un producto de IA con resultado claro cobra USD 100 o más al año |
| **Gemini para menores de 13** | Google abre Gemini a niños con cuenta supervisada por Family Link ([Tom's Guide](https://www.tomsguide.com/ai/googles-gemini-ai-will-soon-be-accessible-to-kids-under-13-heres-how-that-could-look), [TechCentral](https://www.techcentral.ie/?p=153438)) | Gratis | El chat de IA genérico para niños ya es gratis |
| **ChatGPT** | No pensado para menores de 13; de 13 a 18 con consentimiento ([JetLearn](https://www.jetlearn.com/blog/gemini-vs-chatgpt-for-kids-which-is-safer-and-better-for-homework), **no verificado**) | Gratis o pago | No compite en 8 a 12 |

### 1.3 Nuevos entrantes de emprendimiento infantil (desde nuestro primer análisis)

| Producto | Qué es | Amenaza |
|---|---|---|
| **Lemonade** (Product Hunt, 11 de marzo de 2026) | Web app gratuita para que niños y adolescentes elijan una idea de negocio, sin cuenta ([Product Hunt](https://www.producthunt.com/products/lemonade-4/launches/lemonade-5)) | Baja. Solo la fase "idea"; puede ser buen contenido para SEO comparativo |
| **YouthAI** (App Store, 16 de abril de 2026) | App social y educativa para adolescentes sobre emprendimiento e IA ([MWM](https://mwm.ai/apps/youthai/6759766903)) | Baja en 8 a 12, media en 13 a 14. Su componente social es justo lo que nosotros evitamos (privacidad, ley australiana) |
| **YoungMinds.app** (India) | Plataforma "AI-native" de emprendimiento para 8 a 15 años, marco TIE (Tinkering, Innovation, Entrepreneurship), B2C ([Kerala Startup Mission](https://startups.startupmission.in/startups/p6rdj)) | Media en concepto, baja en nuestros mercados. Es la más parecida en edad; hay que vigilarla |
| **Kidpreneurs India, escuelas de verano, programas locales** | Cursos de IA y emprendimiento por temporada ([Sunday Guardian](https://sundayguardianlive.com/feature/preparing-children-for-an-ai-led-future-217690/)) | Baja |

### 1.4 Qué significa para nosotros

1. **La promesa "primera venta real en 30 días" sigue sin dueño.** Es lo que hay que defender y medir obsesivamente (métrica norte).
2. **La IA es commodity; el resultado no.** Guroo es parte del producto, pero el mensaje de venta es el resultado: "tu hijo vende su primer producto digital". Nunca "chat de IA para niños".
3. **El rango de precios aceptado es amplio** (USD 4 a 29 al mes; USD 45 a 240 al año). Los planes familiares por año se agrupan entre USD 45 y 120. Nuestro USD 59,99 al año es conservador; hay espacio para probar USD 69,99 o 79,99 si acompañamos con garantía de resultado.
4. **Defensa contra copias:** la "capa segura" (padre dueño, aprobación, tienda sin datos, cero social) y el currículo probado son difíciles de copiar rápido para un fintech. Un Duolingo sí podría; por eso conviene construir alianzas y comunidad (ferias, homeschool) que un gigante no replica en meses.

## 2. Tamaño de mercado (TAM, SAM, SOM)

### 2.1 Base de población

| País | Niños de 8 a 14 | Fuente y cálculo |
|---|---|---|
| EE.UU. | ~29,2 millones | Suma por edad simple de la estimación del Census (vintage 2024) reproducida en [GHLF](https://ghlf.org/wp-content/uploads/2025/10/2.-US-Census-Bureau_Population-Estimates-by-Age_2024.pdf) (extracción de PDF, **verificar en census.gov**) |
| Canadá | ~3,1 millones | StatCan, 1 de julio de 2025: 2,1 millones de 5 a 9 y 2,3 millones de 10 a 14 ([Statistics Canada](https://www.statcan.gc.ca/o1/en/plus/8953-back-everything-most-us)). Cálculo nuestro: 2/5 de 5 a 9 más todo 10 a 14 |
| Australia | ~2,2 millones | IBISWorld proyecta ~4,81 millones de 0 a 14 en 2025-26 ([IBISWorld](https://www.ibisworld.com/australia/bed/population-aged-14-and-younger/3/), **no verificado**, no es ABS). Cálculo nuestro: 7/15 |
| **Total** | **~34,5 millones** | |

**Hogares (supuesto):** 1,45 niños de 8 a 14 por hogar que tiene al menos uno. Resultado: **~23,8 millones de hogares**.

### 2.2 Homeschool, la cabeza de playa

| País | Alumnos homeschool | Fuente |
|---|---|---|
| EE.UU. | ~3,4 millones (6,3 % de la edad escolar), rango honesto de 3 a 3,7 millones; crecimiento de 4,9 % en 2024-25 | [NHERI vía NCHE](https://nche.com/stats/), [Kuraplan](https://www.kuraplan.com/blog/homeschool-statistics-2026), [The 74](https://www.the74million.org/article/market-share-declines-for-homeschools-increases-for-private-schools-holds-steady-for-public-schools-overall/) |
| Australia | ~45.000 registrados (más los no registrados) | [Universidad de Newcastle](https://www.newcastle.edu.au/hippocampus/story/2026/more-and-more-australian-families-are-homeschooling) |
| Canadá | "Muy por encima de 100.000" según un blog, sin cifra nacional oficial | [Kuraplan](https://www.kuraplan.com/blog/homeschool-statistics-2026) (**no verificado**) |

Si 8 a 14 son 7 de 13 grados escolares, hay **~1,9 millones de niños homeschool de 8 a 14**, en **~1,2 millones de hogares** (supuesto: 1,6 niños por hogar, las familias homeschool suelen ser más grandes). Por qué son la cabeza de playa: el padre ya es el "profesor", busca currículo práctico, compra apps educativas, se organiza en comunidades (co-ops, grupos de Facebook, convenciones) y nuestro producto puede contar como "proyecto de economía" del año escolar.

### 2.3 Disposición a pagar: referencias

| Producto | Precio | Conversión o dato útil |
|---|---|---|
| Duolingo | Super ~USD 84 al año; Family ~USD 119,99 | Suscriptores de pago / usuarios activos diarios: ~21,6 % (cálculo nuestro: 12,7 / 58,7 millones). Sobre usuarios activos mensuales (140,6 millones): ~9 % |
| ABCmouse | USD 14,99 al mes o USD 45 al año, prueba de 30 días ([ABCmouse Support](https://support.abcmouse.com/hc/articles/34385982120599)) | El descuento anual es del 74 %: la industria empuja fuerte el anual |
| Prodigy | USD 9,95 a 29,95 al mes por niño | Precio por niño, no por familia |
| Outschool | USD 40 a 60 al mes en créditos | Padres pagan mucho más por clases en vivo |
| Khanmigo | ~USD 4 al mes | Subsidiado (nonprofit) |
| Brilliant | USD 240 al año o 30 al mes ([Brilliant](https://brilliant.org/resources/choosing-brilliant/is-brilliant-worth-it/)) | Techo para "aprendizaje premium" |
| Greenlight | USD 5,99 a 19,98 al mes por familia | Los padres de 8 a 14 ya pagan esto por "dinero y niños" |
| Synthesis Tutor | ~USD 119 al año (**no verificado**) | IA con resultado claro |

**Benchmarks de conversión (apps de suscripción, todas las categorías):** según [RevenueCat, State of Subscription Apps 2026](https://www.revenuecat.com/state-of-subscription-apps) (resumido por [SaaStr](https://www.saastr.com/the-top-10-learnings-from-revenuecats-state-of-subscription-apps/) y [Subscription Insider](https://www.subscriptioninsider.com/article-type/news/revenuecat-data-shows-subscription-app-growth-concentrating-at-the-top)):
- Pruebas de 17 a 32 días convierten a una mediana del **42,5 %**, frente al 25,5 % de las de menos de 4 días.
- Paywall duro: **10,7 %** de conversión mediana al día 35; freemium: **2,1 %**. La retención anual a un año es parecida (27 % y 28 %).
- Retención promedio en el primer año: menos del 30 %.

**Apps de educación:** retención al día 30 de ~2 % de los usuarios y suscripción promedio de ~USD 8,13 al mes; algo más de la mitad de los suscriptores sobrevive a la primera renovación ([Business of Apps](https://www.businessofapps.com/?p=98187), **no verificado**, fuente de pago).

### 2.4 TAM, SAM y SOM

| Nivel | Definición | Hogares | Valor anual (a ~USD 60 por hogar al año) |
|---|---|---|---|
| **TAM** | Todos los hogares con niños de 8 a 14 en EE.UU., Canadá y Australia | ~23,8 millones | **~USD 1.430 millones** |
| **SAM** | Hogares que ya pagan alguna app educativa para niños (supuesto 25 %, **validar** con la pregunta 8 de la encuesta de entrada del doc 05) y con interés en dinero o emprendimiento (supuesto 40 %) | ~2,4 millones | **~USD 143 millones** |
| Cabeza de playa | Hogares homeschool con niños de 8 a 14 | ~1,2 millones | ~USD 72 millones |
| **SOM a 3 años** | Familias pagadoras al final del año 3 (sección 6) | Base ~7.200; optimista ~21.600; pesimista ~600 | Base ~USD 0,5 a 0,6 millones de ARR (0,3 % del SAM); optimista ~USD 1,8 millones (0,9 %) |

**Lectura honesta:** es un nicho real pero no gigante en B2C puro. Para un negocio de USD 10 millones o más de ARR hacen falta además colegios (B2B2C), alianzas pagadas (fintech, credit unions) y LatAm. Para un negocio rentable de USD 1 a 3 millones, el B2C alcanza.

## 3. Estrategia de precios

### 3.1 Planes recomendados

| Plan | Precio | Qué incluye | Para qué existe |
|---|---|---|---|
| **Free ("Explorer")** | USD 0 | 1 niño. Unidad 1 completa (Idea Hunt, 5 lecciones), repaso diario con racha, Parent Corner de la Unidad 1, Guroo solo dentro de las lecciones (10 mensajes al día, con Haiku), vista previa de la tienda sin publicar | Activación sin fricción y prueba de que el niño se engancha |
| **Family Plus** | Base: **USD 7,99 al mes o USD 59,99 al año** (a probar: 9,99 / 69,99) | Hasta 4 hijos. Ruta completa de 20 lecciones, tienda publicada, ventas registradas, Guroo hasta 40 mensajes al día por niño, Nivel 2 (Merch Makers y Faceless YouTube Studio), rutas de temporada, panel completo de padres, certificado de "primera venta" | El producto |
| **Familia Fundadora** | **USD 49 al año, precio congelado mientras siga suscrita** | Lo mismo que Family Plus | Solo para piloto y lista de espera, máximo 500 familias. Caja inicial y testimonios |
| **Regalo** (Navidad, cumpleaños) | 12 meses por USD 59,99; "Holiday Launch Pass" de 3 meses por USD 24,99, sin renovación automática | Family Plus por tiempo fijo | Lo compran abuelos y tíos: el gancho de diciembre |
| **Colegios y programas** (fase 3) | Referencia: USD 3 a 5 por alumno al año o USD 99 por aula (supuesto) | Panel docente | Más adelante |

**Lo que NO recomendamos:**
- **Plan "lifetime".** La IA tiene costo por mensaje para siempre, atrae a cazadores de ofertas que no usan el producto y destruye el MRR futuro. La "Familia Fundadora" da lo emocional del lifetime (precio congelado) sin regalar acceso eterno.
- **Precio por niño.** Prodigy cobra por niño; nosotros diferenciamos con "toda la familia" (hasta 4). Los hermanos aumentan la retención (si uno deja, el otro sigue) y el costo marginal es bajo. Desde el 5.º niño: USD 1,99 al mes por niño (caso raro).
- **Cobrarle algo al niño o mostrarle ofertas.** La oferta siempre va al padre (doc 01 y doc 05).

### 3.2 Qué es gratis y qué es pagado (y dónde va el paywall)

La regla: **gratis lo que demuestra que el niño se engancha; pagado lo que lleva al resultado (vender).**

| Función | Free | Family Plus |
|---|---|---|
| Unidad 1, Idea Hunt (5 lecciones) | Sí | Sí |
| Unidades 2 a 4 (hacer, marca y tienda, lanzar y vender) | No | Sí |
| Publicar tienda y registrar ventas | No (vista previa) | Sí |
| Guroo | 10 mensajes al día, en lecciones, modelo barato | 40 al día por niño |
| Hijos | 1 | Hasta 4 |
| Nivel 2 y rutas de temporada | No | Sí |
| Parent Corner | Unidad 1 | Completo |
| Privacidad, borrado de cuenta, consentimiento | Siempre igual en ambos | Siempre igual en ambos |

**Paywall por defecto:** al terminar la Unidad 1 (día 4 a 6), el padre ve "tu hijo ya eligió su idea, ahora la convierte en un producto real" y empieza una **prueba de 14 días con tarjeta**, con el plan **anual preseleccionado**. Al día 14 el niño ya tiene su producto hecho y está armando la tienda: el momento de más valor percibido para cobrar.

### 3.3 Duración de la prueba

- **14 días por defecto.** RevenueCat muestra que las pruebas largas convierten mejor (42,5 % para 17 a 32 días frente a 25,5 % para menos de 4). Una prueba de 30 días cubriría toda la ruta: el niño vende gratis y la familia se va. Con 14 días el producto ya existe pero la venta todavía no.
- **Recordatorio a los 2 días antes del cobro** (obligatorio por honestidad y por varias leyes estatales de renovación automática; **verificar** con abogado).

### 3.4 Garantía de resultado (opinión fuerte)

**"Garantía de primera venta":** si el niño completa las 20 lecciones y publica la tienda y no logra ninguna venta en 60 días, devolvemos el primer pago (o damos 6 meses gratis, a elección del padre). Pocas familias cumplirán las condiciones sin vender, y es el mejor argumento de marketing posible frente a "otra app más". El costo esperado es bajo (supuesto: menos del 3 % de los ingresos).

### 3.5 Diseño del experimento de precios

**Fase A, piloto (noviembre de 2026, 10 a 20 familias).** Ya diseñado en el doc 05, sección 8: tres ofertas reales de "familia fundadora" (USD 4,99 al mes, 7,99 al mes y 59,99 al año) más Van Westendorp. Añadimos dos cosas:
1. Una cuarta pregunta de la entrevista de salida: "¿Le regalarías esto a otra familia esta Navidad por USD 24,99 por 3 meses?" (mide el canal regalo).
2. Registrar **quién elige anual** cuando se le muestran ambas opciones. Es la variable más importante del modelo.

**Fase B, lista de espera y lanzamiento (diciembre de 2026 a marzo de 2027).** Aquí ya hay volumen.

| Celda | Mensual | Anual | Extra |
|---|---|---|---|
| A (control) | USD 7,99 | USD 59,99 | Ninguno |
| B | USD 9,99 | USD 69,99 | Ninguno |
| C | USD 9,99 | USD 79,99 | Garantía de primera venta destacada |

- **Asignación:** aleatoria por familia en la página de precios y en el paywall (cookie de primera parte del padre, nunca en las páginas del niño). Mostrar siempre el mismo precio a la misma familia.
- **Métrica principal:** **ingreso por familia activada a 60 días** (combina conversión, mezcla anual y precio). Secundarias: % que inicia prueba, % que paga, % anual, cancelación en el mes 1.
- **Tamaño:** con 150 a 200 familias activadas por celda se obtiene una lectura direccional (análisis bayesiano, "probabilidad de ser la mejor"). Para detectar con rigor una diferencia de 10 % frente a 15 % de conversión harían falta unas 700 por celda; no lo tendremos el primer trimestre, así que decidimos con dirección y volvemos a probar después.
- **Test paralelo de prueba:** 7 frente a 14 días, solo en la celda ganadora, a partir de abril de 2027.
- **Regla de decisión:** si B o C dan un ingreso por familia activada 15 % mayor que A con probabilidad de 80 % o más, se adopta. Si no, se queda A.
- **Ética:** las familias que pagaron más en una celda reciben el precio menor si al final se elige el menor (crédito automático).

## 4. Unit economics

### 4.1 Costo por mensaje de Guroo

Supuestos: precio de Claude Opus 5.5 que usamos en el doc 04 (USD 4 y 20 por millón de tokens de entrada y salida, **verificar** en la página de precios de Anthropic); Claude Haiku 5.5 a USD 0,10 y 0,50 por millón de tokens de entrada y salida (tabla de modelos vigente de la API de Anthropic, octubre de 2026, para prompts de hasta 100.000 tokens). Lectura de caché a 0,1 veces el precio de entrada y escritura a 1,25 veces. Mensaje típico (supuesto): 3.000 tokens de prompt de sistema en caché, 1.500 tokens de historial sin caché, 250 tokens de respuesta.

| Modelo | Sistema (caché) | Historial | Respuesta | **Total por mensaje** |
|---|---|---|---|---|
| Opus (USD 4 / 20) | 0,0012 | 0,0060 | 0,0050 | **~USD 0,012** |
| Haiku 5.5 (USD 0,10 / 0,50) | 0,00003 | 0,00015 | 0,00013 | **~USD 0,0003** |
| Mezcla 70 % Haiku, 30 % Opus | | | | **~USD 0,004** |

**Nota:** el doc 04 dice que Haiku es "unas 40 veces más barato" que Opus. Es correcto para Claude Haiku 5.5 (USD 0,10 / 0,50 frente a USD 4 / 20). Las fuentes secundarias que hablan de USD 1 / 5 se refieren a Haiku 4.5, una generación anterior. Antes de cambiar de modelo hay que probar la calidad de las respuestas de Guroo con Haiku 5.5.

**Uso (supuesto):** un niño activo en plan pago manda ~60 mensajes al mes (unos 5 por día en 12 días activos); 1,3 niños activos por familia, es decir ~80 mensajes por familia al mes. Un niño que usa el tope (40 al día, 30 días) gastaría 1.200 mensajes: unos USD 14 con Opus. **Por eso:** mantener el tope diario, añadir un presupuesto mensual por familia (por ejemplo 400 mensajes, luego Haiku) y alertar si una cuenta supera USD 3 al mes.

### 4.2 COGS por familia pagadora al mes

| Concepto | Supuesto | Base | Optimista | Pesimista |
|---|---|---|---|---|
| IA (Guroo) | 80 mensajes por familia; base solo Opus, optimista con mezcla, pesimista 150 mensajes con Opus | 0,95 | 0,45 | 1,80 |
| Hosting (Vercel Pro + funciones) | Vercel Pro USD 20 por asiento al mes con USD 20 de uso incluido; facturas reales de USD 70 a 300 al mes en SaaS en crecimiento ([Makerkit](https://makerkit.dev/blog/saas/vercel-cost)). Repartido entre 1.000 a 10.000 familias | 0,12 | 0,08 | 0,25 |
| Base de datos (Neon Postgres) | USD 0,106 por CU-hora y USD 0,35 por GB al mes, escala a cero ([Neon](https://neon.com/pricing), [Makerkit](https://makerkit.dev/pricing-calculator/neon)); ~USD 40 a 75 al mes al inicio | 0,05 | 0,03 | 0,10 |
| Almacenamiento de archivos | PDF y PNG de 5 a 20 MB por tienda, centavos por GB (supuesto) | 0,02 | 0,01 | 0,05 |
| Email transaccional y recordatorios | Proveedor tipo Resend o Postmark (supuesto) | 0,04 | 0,03 | 0,08 |
| Consentimiento verificable y moderación | Cobro de prueba con tarjeta o proveedor de VPC, más filtro de contenido (supuesto; precios **no verificados** en el doc 03) | 0,07 | 0,05 | 0,15 |
| Soporte (herramientas) | Help desk básico | 0,05 | 0,05 | 0,07 |
| **Total COGS** | | **~1,30** | **~0,70** | **~2,50** |

**Nota de stack:** el doc 04 describe hoy el MVP sobre Netlify con Netlify Blobs. Este modelo usa Vercel + Neon, como se pidió para la fase de producto pagado. El orden de magnitud es igual en ambos: el hosting es casi irrelevante frente a la IA hasta las decenas de miles de familias.

**Usuarios gratis:** con Guroo limitado a Haiku y 10 mensajes al día, un usuario gratis activo cuesta ~USD 0,05 a 0,10 al mes. Con 4 a 10 gratis activos por cada pagador, suma ~USD 0,30 a 0,60 por pagador al mes. Lo incluimos en la proyección como costo aparte.

### 4.3 Comisiones de pago y tiendas de apps

| Concepto | Dato | Efecto |
|---|---|---|
| Stripe (tarjeta nacional EE.UU.) | 2,9 % + USD 0,30 (doc 03) | Mensual de USD 7,99: ~USD 0,53 (6,7 %). Anual de USD 59,99: ~USD 2,04 al año (3,4 %). **El anual ahorra comisión** |
| Stripe Billing (suscripciones) | ~0,7 % del volumen (**no verificado**, confirmar en Stripe) | ~USD 0,05 por mes |
| Impuestos indirectos | Australia (GST del 10 % a servicios digitales importados) y Canadá (GST/HST a servicios digitales) aplican al superar umbrales de registro; varios estados de EE.UU. gravan SaaS (**no verificado**, usar Stripe Tax) | Fijar precios con impuesto incluido en Australia |
| App Store y Google Play (más adelante) | 15 % en suscripciones con el Small Business Program de Apple; Google cobra 15 % en suscripciones desde el día 1 ([RevenueCat](https://www.revenuecat.com/blog/engineering/small-business-program), [Appbot](https://appbot.co/blog/app-developers-apple-google-small-business-programs/)) | 15 % del ingreso de quien compre dentro de la app |
| Enlace a pago web desde la app en EE.UU. | Hoy la comisión de Apple por enlaces externos en EE.UU. es cero mientras el tribunal fija una tarifa; Apple propuso 5 % para pequeños desarrolladores y 15 % para el resto ([iPhone in Canada](https://www.iphoneincanada.ca/2026/08/14/apple-proposes-15-cut-purchases-outside-app-store/), [Neonpay](https://www.neonpay.com/blog/apple-app-store-alternative-payment-fees-what-developers-pay-in-2026)) | **Recomendación: vender siempre en la web**; la app empaquetada es para usar, no para comprar |

Además, la categoría "Kids" de la App Store tiene reglas estrictas (puerta parental para compras y enlaces, nada de analítica ni publicidad de terceros) (**verificar** en las App Store Review Guidelines). Nuestro diseño ya va en esa línea, pero hay que revisarlo antes de empaquetar con Capacitor.

### 4.4 CAC por canal (estimaciones)

"Familia pagadora" = familia que paga al menos un mes o un año. Todas las cifras son **supuestos** con las referencias indicadas.

| Canal | Mecánica y referencias | CAC estimado (rango) | Base |
|---|---|---|---|
| **Meta Ads (Facebook e Instagram) a padres** | CPM de USD 10 a 18 en edtech y costo por registro de USD 15 a 45 ([Webtonic](https://www.webtonic.io/blog/education-coaching-facebook-ads-statistics), **no verificado**); CPL de educación en EE.UU. ~USD 23 ([Superads](https://www.superads.ai/facebook-ads-costs/cost-per-lead/education/united-states)). Con 20 a 30 % de registro a pago | USD 60 a 200 | **USD 110** |
| **Grupos de padres en Facebook** (orgánico, sin spam: el fundador aporta valor, publica resultados del piloto con permiso) | Tiempo del fundador; costo de oportunidad | USD 10 a 25 | USD 15 |
| **Comunidades homeschool** (co-ops, grupos, blogs, convenciones, catálogos de currículo) | Afiliados al 30 % del primer año (~USD 18 por familia anual) más stands en convenciones | USD 15 a 40 | USD 25 |
| **Influencers micro** (madres, homeschool, "kids activities") | USD 300 a 1.500 por reel; USD 200 a 2.500 por post ([Launchpoint](https://www.launchpointhq.com/guides/rates/how-much-do-parenting-micro-influencers-charge), [Elev8or](https://www.elev8or.io/find/instagram-parenting-influencer-rates)). Supuesto: 5 a 15 familias pagadoras por reel. Preferir acuerdos de afiliado | USD 40 a 120 | USD 70 |
| **Ferias infantiles y Lemonade Day** | Ruta gratuita "prepárate para la feria" y código para padres. Cada feria Acton reúne de 25 a 115 niños expositores ([LA 2026](https://www.sharedaudiences.com/events/acton-childrens-business-fair-los-angeles-2026)); Lemonade Day dice haber llegado a más de un millón de niños desde 2007 ([Lemonade Day](https://htest.lemonadeday.org/node/199578), **no verificado**) | USD 10 a 40 | USD 25 |
| **SEO y contenido** | "Business ideas for kids", "printables kids can sell", "summer activities for 10 year olds"; tarda 6 a 12 meses | USD 10 a 30 (desde el mes 9) | USD 20 |
| **Referidos** (padre invita a padre + link de la tienda del niño) | Premio: 1 mes gratis para ambos (~USD 6 de costo real) | USD 8 a 15 | USD 10 |
| **Mezcla del año 1** (sin anuncios pagados fuertes) | | **USD 30 a 80** | **USD 45** |

### 4.5 Retención: benchmarks y supuestos

- Apps de suscripción en general: retención en el primer año menor al 30 %; los anuales se renuevan en torno al 27 a 28 % (RevenueCat 2026).
- Educación: algo más de la mitad de los suscriptores sobrevive a la primera renovación (Business of Apps, **no verificado**).
- Duolingo, el mejor de la categoría, reporta un 84 % de retención récord (métrica propia, [Pulse 2.0](https://pulse2.com/duolingo-daily-active-users-reach-58-7-million-as-retention-hits-record-84-and-social-accounts-top-1-billion-organic-impressions/)); no es comparable con un producto de 30 días.
- **Nuestro supuesto de churn mensual mezclado** (mensual y anual): base 7 %, optimista 5 %, pesimista 12 %. El riesgo específico es la cancelación justo después de la primera venta.

### 4.6 Tabla de unit economics (por familia pagadora, al mes, USD)

| Línea | Base | Optimista | Pesimista |
|---|---|---|---|
| Precio mensual / anual | 7,99 / 59,99 | 9,99 / 69,99 | 6,99 / 49,99 |
| % en plan anual | 60 % | 70 % | 45 % |
| **ARPU bruto** | **6,20** | **7,08** | **5,72** |
| Comisiones de pago y reembolsos | -0,40 | -0,42 | -0,45 |
| App stores (pesimista: 30 % compra en la app al 15 %) | 0 | 0 | -0,26 |
| **Ingreso neto** | **5,80** | **6,66** | **5,01** |
| COGS (sección 4.2) | -1,30 | -0,70 | -2,50 |
| **Contribución por suscripción** | **4,50** | **5,96** | **2,51** |
| Margen bruto | 73 % | 84 % | 44 % |
| Ingreso de partners por familia (afiliados POD, kits patrocinados, fintech) | +0,20 | +0,50 | 0 |
| **Contribución total** | **4,70** | **6,46** | **2,51** |
| Churn mensual mezclado | 7 % | 5 % | 12 % |
| Vida media (1 / churn) | 14,3 meses | 20 meses | 8,3 meses |
| **LTV (contribución)** | **~USD 67** | **~USD 129** | **~USD 21** |
| CAC mezclado | USD 45 | USD 30 | USD 80 |
| **LTV / CAC** | **1,5** | **4,3** | **0,3** |
| **Payback del CAC** | ~10 meses | ~5 meses | ~32 meses |
| Payback si paga anual por adelantado | Día 1 (USD 56 netos frente a 45 de CAC) | Día 1 | No (USD 47 netos frente a 80) |

**Lectura:**
1. **El escenario base es viable solo sin anuncios pagados como canal principal.** LTV/CAC de 1,5 está por debajo del 3 que se considera sano. Las palancas, en orden de impacto: (a) más mezcla anual, (b) menos churn tras la primera venta (Nivel 2 y temporadas), (c) precio de USD 9,99 / 69,99 si el test lo permite, (d) enrutamiento de modelos de IA.
2. **El plan anual es la clave financiera:** cobra por adelantado, ahorra comisión, reduce el churn efectivo y recupera el CAC el primer día.
3. **El escenario pesimista no tiene arreglo con optimización.** Si después de 6 meses de cobro estamos ahí, hay que cambiar el modelo (pago por ruta, colegios, alianzas B2B2C), no los anuncios.

## 5. Salida al mercado: los primeros 12 meses

### 5.1 Secuencia de lanzamiento

| Mes | Fase | Qué hacemos | Meta |
|---|---|---|---|
| **Nov 2026** | Piloto | 10 a 20 familias, 4 semanas (doc 05). Abrir la lista de espera con la landing y el lema "Your kid's first online sale in 30 days". Grabar (sin caras) 5 historias de tiendas | 50 % con primera venta; 300 en la lista de espera |
| **Dic 2026** | Navidad y lista de espera | Ruta de temporada "Holiday Printables" (etiquetas de regalo, tarjetas). Venta de **tarjetas de regalo** (12 meses a USD 59,99 y Holiday Launch Pass a USD 24,99). Ofrecer "Familia Fundadora" a la lista de espera. En Australia, vacaciones de verano y Navidad coinciden: campaña específica | 100 a 200 familias fundadoras pagadas; 1.000 en la lista |
| **Ene 2027** | Lanzamiento pagado (fase 1 del doc 04) | Stripe Billing, consentimiento verificable, recordatorios. Gancho de Año Nuevo: "New Year, first business". Activar regalos de Navidad | 300 pagadoras |
| **Feb a mar 2027** | Homeschool | Programa de afiliados para bloggers e influencers homeschool (30 % el primer año). Stands o patrocinios en convenciones homeschool de primavera (**verificar** fechas). Guía gratis "Entrepreneurship unit study" que cumple como unidad de economía | CAC menor a USD 30 en homeschool |
| **Mar a may 2027** | Ferias | "30 days to Lemonade Day" (el día nacional cae el primer domingo de mayo) y "prepárate para tu Children's Business Fair": ruta gratuita para organizadores, código para padres. Día de la Madre (printables) | 3 a 5 alianzas locales con ferias; 1 acuerdo nacional en conversación |
| **Jun a ago 2027** | **Summer CEO** (la ventana más grande en EE.UU. y Canadá) | "Summer CEO Challenge": 30 días, cohorte nacional que arranca en fechas fijas (insignias, celebración final, sin ranking entre niños). Lanzar el Nivel 2 Merch Makers. Pinterest y SEO de "summer activities" | Pico de altas del año; 1.500 pagadoras |
| **Sep 2027** | Vuelta a clases | Contenido "after-school business club"; prueba con 5 a 10 profesores (gratis) para preparar el plan de colegios | 10 aulas piloto |
| **Oct 2027** | Halloween y preparación de Navidad | Ruta Halloween, preparar la segunda temporada de regalo, publicar el informe "Kid Entrepreneur Report 2027" con datos agregados y anónimos (PR) | 2.000 pagadoras (base: 500 a 1.200 es lo realista, ver sección 6) |

### 5.2 El bucle de referidos: "la tienda de mi hijo"

Quien compra en la tienda de un niño suele ser un adulto del círculo seguro: abuelos, tíos, padres de amigos del colegio. **Muchos son padres de niños de 8 a 14.** Es el canal más barato que tenemos.

1. **Página de gracias tras la compra** (la de descarga, `/s/tienda/thanks/<token>`): "You just bought from a young entrepreneur. Want your kid to launch their own shop in 30 days? First month free." Es el momento de más intención.
2. **Pie de la tienda pública:** "Made by a young entrepreneur on Venturoo, with their parent's approval. Parents: start yours." Texto dirigido al adulto, nunca al niño.
3. **Código de referido del padre** incluido en el link que comparte (parámetro en la URL), con 1 mes gratis para ambas familias.
4. **"Shop Day" familiar:** cuando el niño logra la primera venta, el padre recibe una tarjeta compartible (sin nombre ni cara, solo la marca y la mascota) para anunciarlo en su círculo.

**Reglas de privacidad del bucle:** sin píxeles de terceros (Meta, Google) en las páginas del niño ni en la de descarga, nada de cookies de seguimiento en esas páginas, atribución solo con el parámetro de primera parte. COPPA prohíbe identificadores persistentes con fines publicitarios en servicios dirigidos a niños (doc 03); aunque el comprador sea adulto, la página es del niño.

**Expectativa realista (supuesto):** cada tienda trae de 5 a 15 compradores; si el 20 % son padres con hijos en edad y el 3 % se registra y paga, son 0,03 a 0,09 familias nuevas por tienda. Sumado a las invitaciones directas entre padres, un **factor viral de 0,2 a 0,3**: ayuda mucho al CAC, pero no basta por sí solo.

### 5.3 Estrategia de contenido

| Pilar | Formato | Canal | Por qué |
|---|---|---|---|
| **Historias de tiendas** (con permiso, solo marca y mascota, nunca nombre ni cara) | "Shop of the week": portada del producto, precio, qué aprendió | Instagram, Pinterest, newsletter | Prueba social del resultado |
| **Guroo enseña a los padres** | Clips de 30 a 60 segundos: "un concepto de negocio para explicar en la cena" (sale del Parent Corner) | TikTok, Reels, YouTube Shorts (cuenta de Venturoo) | Los padres aprenden con sus hijos: diferencial |
| **SEO de intención** | Guías largas: "50 business ideas for kids", "how kids can make money online safely", "printables kids can sell", "summer activities for 10 year olds", comparativas ("Greenlight vs Venturoo: earn vs spend") | Blog | Tráfico que compone en el año 2 |
| **Imprimibles gratis** | Hojas de trabajo de emprendimiento (lead magnet) | Pinterest (fuerte en madres e imprimibles), Teachers Pay Teachers como vitrina | Captura de emails de padres y profesores |
| **Newsletter semanal para padres** | "5-minute business lesson" más una historia de tienda | Email | Canal propio, no depende de algoritmos |
| **Datos y PR** | Informe anual anónimo: "% de niños que venden en 30 días", productos más vendidos | Prensa de parenting y edtech | Autoridad y backlinks |

**Lo que no hacemos:** anuncios dirigidos a niños, contenido con caras de niños, ranking público de ventas entre niños, promesas de ingresos ("tu hijo ganará USD 500").

## 6. Proyección a 3 años

Año 1 = noviembre de 2026 a octubre de 2027. "Familias registradas" es acumulado de cuentas creadas. "Pagadoras" es al cierre del año, neto de churn. ARPU de la sección 4.6. "Costos" incluye equipo, marketing, COGS (pagadores y gratis), legal y herramientas. **Todo es ilustrativo (supuesto).**

### 6.1 Escenario base

| | Año 1 | Año 2 | Año 3 |
|---|---|---|---|
| Familias registradas (acumulado) | 5.000 | 25.000 | 80.000 |
| % pagando al cierre | 8 % | 8 % | 9 % |
| Familias pagadoras | 400 | 2.000 | 7.200 |
| MRR al cierre | USD 2.500 | USD 12.400 | USD 44.600 |
| ARR al cierre (suscripción) | USD 30.000 | USD 149.000 | USD 535.000 |
| Partners y colegios (anual) | USD 2.000 | USD 15.000 | USD 60.000 |
| **Ingresos del año** | USD 17.000 | USD 105.000 | USD 400.000 |
| **Costos del año** | USD 45.000 | USD 240.000 | USD 620.000 |
| **Burn del año** | **-USD 28.000** | **-USD 135.000** | **-USD 220.000** |
| Equipo | Fundador (sin sueldo) + freelance | Fundador + 1 desarrollador | 3 personas + contenido |

### 6.2 Escenario optimista

| | Año 1 | Año 2 | Año 3 |
|---|---|---|---|
| Familias registradas | 10.000 | 50.000 | 180.000 |
| % pagando | 12 % | 12 % | 12 % |
| Familias pagadoras | 1.200 | 6.000 | 21.600 |
| MRR al cierre | USD 8.500 | USD 42.500 | USD 153.000 |
| ARR al cierre (suscripción) | USD 102.000 | USD 510.000 | USD 1.835.000 |
| Partners y colegios | USD 10.000 | USD 60.000 | USD 220.000 |
| **Ingresos del año** | USD 55.000 | USD 360.000 | USD 1.350.000 |
| **Costos del año** | USD 80.000 | USD 480.000 | USD 1.300.000 |
| **Burn del año** | **-USD 25.000** | **-USD 120.000** | **+USD 50.000** |

### 6.3 Escenario pesimista

| | Año 1 | Año 2 | Año 3 |
|---|---|---|---|
| Familias registradas | 2.000 | 6.000 | 12.000 |
| % pagando | 5 % | 5 % | 5 % |
| Familias pagadoras | 100 | 300 | 600 |
| MRR al cierre | USD 570 | USD 1.700 | USD 3.400 |
| ARR al cierre | USD 6.900 | USD 20.600 | USD 41.000 |
| **Ingresos del año** | USD 4.000 | USD 14.000 | USD 32.000 |
| **Costos del año** | USD 25.000 | USD 60.000 | USD 85.000 |
| **Burn del año** | **-USD 21.000** | **-USD 46.000** | **-USD 53.000** |

**Cómo leerlo:** el base necesita unos USD 0,4 a 0,5 millones de financiación externa o subvenciones en 3 años; el optimista llega al equilibrio en el año 3 con algo menos; el pesimista nunca levanta dinero y es la señal para girar (pago por ruta, colegios, marca blanca para credit unions) o cerrar con costo bajo. **El punto de decisión es abril de 2027:** con 3 meses de cobro real sabremos en qué fila estamos.

## 7. Opciones de financiación

### 7.1 Recomendación de secuencia

1. **Bootstrapping hasta abril de 2027.** El costo es bajo (piloto casi gratis, infraestructura de decenas de dólares, IA de centavos). Levantar antes de tener datos de cobro solo regala participación barata.
2. **Subvenciones no dilutivas en paralelo** (largas de conseguir, empezar a preparar ya).
3. **Aceleradora o ronda de angels (USD 150.000 a 400.000, SAFE)** al cumplir los hitos de 7.4.
4. **Pre-seed o seed institucional** solo si estamos cerca del escenario optimista.

### 7.2 Subvenciones y fondos no dilutivos

| Programa | Qué es | Encaje y cuándo | Fuente |
|---|---|---|---|
| **ED/IES SBIR** (Departamento de Educación de EE.UU.) | Fase I de ~USD 250.000 (8 a 9 meses) y Fase II de ~USD 1 millón; para empresas con fines de lucro de menos de 500 empleados. El ciclo FY2026 cerró el 29 de junio de 2026 | **El mejor encaje.** Preparar para el ciclo FY2027 (abriría hacia la primavera de 2027, **verificar**). Requiere entidad en EE.UU. | [GrantedAI](https://grantedai.com/blog/ed-ies-sbir-fy2026-june-29-deadline-250k-phase-i-1-million-direct-phase-ii-education-technology-startup-strategy) (**verificar** en ies.ed.gov) |
| **NSF SBIR** (America's Seed Fund) | SBIR/STTR estuvo suspendido de octubre de 2025 a abril de 2026; se reautorizó hasta 2031 el 13 de abril de 2026, pero no todas las agencias han reabierto convocatorias | Encaje medio (NSF busca innovación técnica: el filtro de seguridad de IA para niños podría ser el ángulo) | [Crowell](https://www.crowell.com/en/insights/client-alerts/sbirsttr-programs-reauthorized-after-six-month-lapse), [SSTI](https://ssti.org/node/91454) |
| **Schwab Moneywise Momentum Grants** (Charles Schwab Foundation) | USD 50.000 a 250.000 para **nonprofits** de educación financiera, foco en jóvenes. Cierre 2026: 31 de julio | Solo vía un socio sin fines de lucro (Lemonade Day, Junior Achievement local, una credit union con fundación). Preparar para 2027 | [University at Albany](https://www.albany.edu/ocfr/news/2026-charles-schwab-moneywise-momentum-grants-financial-education) |
| **Kauffman Foundation** | Subvenciones de emprendimiento (nacionales) y educación (sobre todo Kansas City), en general a organizaciones y coaliciones | Bajo para nosotros directamente; posible como proveedor de una coalición | [Startland News](https://startlandnews.com/2025/05/kauffman-project-grants/), [SNPO](https://www.snpo.org/publications/fundingalert_details.php?id=1687) |
| **Subvenciones estatales de educación financiera** (Ohio, Kansas, Oklahoma, etc.) | Para escuelas y organizaciones locales; muy competidas (Ohio: 156 solicitudes en 2026) | Vía colegios o nonprofits, en la fase de colegios | [GrantedAI, Kansas](https://grantedai.com/grants/financial-literacy-education-grants-kansas-office-of-the-state-bank-commissi-0ff47c25) |
| **Créditos de proveedores** | Programas de startups de Anthropic, Vercel, Stripe (**no verificado**, revisar condiciones) | Bajan COGS el primer año | |

### 7.3 Aceleradoras y programas (reales, con estado a octubre de 2026)

| Programa | Qué ofrece | Encaje | Estado |
|---|---|---|---|
| **LearnLaunch Accelerator** (Boston) | Programa de 3 meses; "USD 200.000 de valor, hasta USD 120.000 de inversión"; 91 empresas edtech desde 2013 | Alto (edtech, K-12) | Tiene programa 2026 "Breakthrough to Scale" ([EIN Presswire](https://www.einpresswire.com/article/889648399/learnlaunch-fund-accelerator-opens-applications-for-2026-breakthrough-to-scale-program), [Angels Partners](https://angelspartners.com/firm/LearnLaunchFundAccelerator)) |
| **Conquer EdTech Accelerator** (Michigan Virtual y MSU Research Foundation) | 10 semanas, hasta USD 20.000 por hitos más USD 10.000 de concurso; exige MVP o beta | Alto, aceptan etapa temprana | Ciclo de otoño 2026 abierto según su página ([Michigan Virtual](https://michiganvirtual.org/edtech-catalyst/conquer)) |
| **Siakam EdTech Engine Accelerator** | K-12, aprendizaje juvenil e IA, Norteamérica; exige MVP validado y líder técnico | Alto | Ciclo 2026 cerrado (13 de marzo); vigilar 2027 ([Grants Database](https://grantsdatabase.org/?p=14002)) |
| **WISE EdTech Accelerator** (Qatar Foundation) | Global, seed a pre-Serie A, **exige ventas e impacto medible** | Medio; todavía no calificamos | Cierra el 31 de octubre de 2026, cohorte en enero de 2027; apuntar al ciclo 2027-28 ([Qatar Tribune](https://www.qatar-tribune.com/article/256471/nation/wise-edtech-accelerator-seeks-ventures-with-high-potential-to-impact-education-at-scale)) |
| **Y Combinator** y **Techstars** | Generalistas, inversión estándar | Medio; útil si el escenario es optimista | Convocatorias periódicas (**verificar**) |
| **NewSchools Venture Fund**, **4.0 Schools**, **EduGrowth** (Australia), **Brinc** | Fondos y programas edtech | Medio | **No verificado** para 2026 |

### 7.4 Hitos antes de pedir dinero

| # | Hito | Por qué importa a un inversor |
|---|---|---|
| 1 | Piloto con 50 % o más de niños con primera venta y 30 % o más de padres que pagan (doc 05) | Prueba de la promesa |
| 2 | **300 familias pagadoras**, con 40 % o más en plan anual | Prueba de disposición a pagar fuera del círculo del fundador |
| 3 | Churn mensual de pago menor al 8 % en los meses 2 y 3; retención tras la primera venta medida | Prueba de que no es "producto de 30 días" |
| 4 | Un canal repetible con CAC menor a USD 40 (homeschool, ferias o referidos) | Prueba de que el crecimiento no depende de anuncios |
| 5 | Un partner firmado (Lemonade Day, una red de ferias Acton, Greenlight o una credit union) | Distribución y validación externa |
| 6 | Cumplimiento COPPA revisado por abogado, consentimiento verificable y 0 incidentes de privacidad | Para un inversor de producto infantil, esto es condición, no extra |

## 8. Riesgos y métricas

### 8.1 Top 10 riesgos de negocio

| # | Riesgo | Probabilidad / impacto | Mitigación |
|---|---|---|---|
| 1 | **Incidente de privacidad o acción de la FTC** (COPPA enmendada desde el 22 de abril de 2026) | Baja / crítico | Diseño actual (padre dueño, seudónimo, filtro de datos, sin social), revisión legal antes de cobrar, programa de seguridad escrito, evaluar Safe Harbor, sin píxeles de terceros en páginas del niño |
| 2 | **Churn por éxito:** la familia cancela tras la primera venta | Alta / alto | Anual por defecto; Nivel 2 y rutas de temporada desbloqueadas justo después de la primera venta; "segundo producto en 14 días"; mensajes al padre sobre lo que viene |
| 3 | **Disposición a pagar menor a la esperada** (conversión menor al 5 %) | Media / alto | Test de precios (sección 3.5), garantía de resultado, alternativa de "pago por ruta" (USD 19 a 29 por 30 días, doc 05) |
| 4 | **CAC alto** y dependencia de Meta | Alta / alto | No escalar anuncios hasta tener payback menor a 6 meses; priorizar homeschool, ferias, referidos y SEO; afiliados con pago por resultado |
| 5 | **Fricción del padre** (abrir Stripe o PayPal, tiempo semanal) | Media / alto | Guías de 5 minutos (doc 03), medir minutos de padre, fase 2 con Stripe Connect para quitar el paso del link |
| 6 | **Incidente de seguridad con la IA** (respuesta inapropiada a un niño) o costo de IA descontrolado | Baja / alto | Capas de seguridad del doc 04, pruebas adversariales periódicas, registros visibles para el padre, presupuesto mensual por familia, alertas de costo, Haiku en el plan gratis |
| 7 | **Un grande copia** (Duolingo con una materia de negocios, Greenlight con "Earn") | Media / alto | Velocidad, comunidad (ferias, homeschool), datos de resultados, y buscar alianza temprana con un fintech (convertir al rival potencial en canal) |
| 8 | **Estacionalidad** (ventas concentradas en Navidad y verano) | Alta / medio | Plan anual, calendario de temporadas (sección 5.1), Australia con hemisferio opuesto, rutas para cada fecha |
| 9 | **Dependencia de plataformas** (términos de Stripe y PayPal sobre productos hechos por menores, reglas de la categoría Kids de las tiendas de apps, ley australiana de redes y código de privacidad infantil) | Media / medio | Padre siempre titular, vender en la web, sin funciones sociales, revisión de términos antes de cada integración, alternativas de pago listas (PayPal, Gumroad, Payhip) |
| 10 | **Capacidad del fundador** (el piloto concierge no escala; persona clave) | Alta / medio | Automatizar lo que se hizo a mano en el piloto (recordatorios, revisión), contenido como data (doc 04), primer contratado en el año 2 dedicado a crecimiento y comunidad |

Riesgos menores a vigilar: copyright en productos de niños (reglas del creador, doc 02), contracargos o fraude en links de pago del padre, impuestos indirectos en Canadá y Australia al crecer, y la reputación si alguna tienda se publica con un dato personal.

### 8.2 Las 5 métricas clave

| # | Métrica | Definición | Meta año 1 |
|---|---|---|---|
| 1 | **Tasa de primera venta** (métrica norte) | % de niños activados con al menos una venta real fuera de casa en 30 días | 50 % o más |
| 2 | **Conversión a pago y mezcla anual** | % de familias activadas que pagan en 30 días, y % de ellas en plan anual | 10 % o más; 50 % o más anual |
| 3 | **Retención de pago** | % de familias pagadoras activas a los 3 meses (y churn mensual) | 75 % o más (churn menor al 8 %) |
| 4 | **CAC y payback por canal** | Gasto (incluido tiempo valorado) / familias pagadoras, por canal | CAC mezclado menor a USD 45; payback menor a 10 meses |
| 5 | **Hábito** | Días activos por semana por niño (semanas 2 a 4) y % de niños que empieza un segundo proyecto | 3 o más días; 40 % o más con segundo proyecto |

## 9. Lo que no pudimos verificar

- Precio de Claude Opus 5.5 y Claude Haiku 5.5: tomados de la tabla de modelos de la API de Anthropic (octubre de 2026); confirmar en la página oficial de precios antes de proyecciones finales.
- Precios oficiales 2026 de Duolingo Family, Acorns Early, Synthesis Tutor y Step.
- Si Outschool tiene clases de emprendimiento para 8 a 14 y su precio típico.
- Cifras oficiales de ABS (Australia) para 8 a 14 y número de homeschoolers en Canadá.
- Porcentaje de hogares de EE.UU. que pagan apps educativas para niños (supuesto del 25 %).
- Benchmarks de churn específicos de apps infantiles (las fuentes son de pago o anecdóticas).
- Comisión de Stripe Billing, umbrales de GST/HST para servicios digitales y reglas exactas de la categoría Kids en la App Store.
- Fechas del ciclo FY2027 de IES SBIR, estado de NSF SBIR tras la reautorización y convocatorias 2026 de NewSchools, 4.0 Schools, EduGrowth y Brinc.

## Fuentes

- [Duolingo: new subjects](https://blog.duolingo.com/new-subjects/)
- [TipRanks: Duolingo DuoCon 2023](https://www.tipranks.com/news/press-releases/duolingo-previews-its-multi-subject-future-at-duocon-2023)
- [Duolingo 10-Q Q2 2026 (SEC)](https://www.sec.gov/Archives/edgar/data/0001562088/000162828026053603/duol-20260630.htm)
- [Pulse 2.0: Duolingo DAU Q2 2026](https://pulse2.com/duolingo-daily-active-users-reach-58-7-million-as-retention-hits-record-84-and-social-accounts-top-1-billion-organic-impressions/)
- [Mindomax: Duolingo cost](https://www.mindomax.com/duolingo-cost)
- [Khanmigo pricing](https://khanmigo.ai/pricing)
- [Khan Academy support forum](https://support.khanacademy.org/hc/es/community/posts/38569868648205-Bring-Khanmigo-to-Indian-Students)
- [Greenlight Help: How much does Greenlight cost?](https://help.greenlight.com/hc/en-us/articles/235739508-How-much-does-Greenlight-cost)
- [Greenlight: alternatives](https://greenlight.com/greenlight-alternatives)
- [Greenlight: Acorns Early review](https://greenlight.com/learning-center/reviews/acorns-early-review)
- [STCU: Zogo](https://stcu.org/learn/financial-education-resources/zogo)
- [Neurolaunch: Outschool review](https://neurolaunch.com/outschool-review/)
- [Outschool pricing](https://webflow.outschool.com/pricing)
- [SheKnows: Outschool](https://www.sheknows.com/parenting/articles/3070379/what-is-outschool-tutoring/)
- [Prodigy: ways to save on memberships](https://prodigygame.com/main-en/blog/ways-to-save-on-prodigy-memberships)
- [The Pricer: Prodigy membership](https://www.thepricer.org/how-much-does-prodigy-membership-cost/)
- [Classace: Synthesis Tutor](https://www.classace.io/compare/synthesis-tutor)
- [Gravity: AI tutor](https://gravity.fast/blog/ai-tutor/)
- [Tom's Guide: Gemini for under 13](https://www.tomsguide.com/ai/googles-gemini-ai-will-soon-be-accessible-to-kids-under-13-heres-how-that-could-look)
- [TechCentral: Gemini kids](https://www.techcentral.ie/?p=153438)
- [JetLearn: Gemini vs ChatGPT for kids](https://www.jetlearn.com/blog/gemini-vs-chatgpt-for-kids-which-is-safer-and-better-for-homework)
- [Product Hunt: Lemonade](https://www.producthunt.com/products/lemonade-4/launches/lemonade-5)
- [MWM: YouthAI](https://mwm.ai/apps/youthai/6759766903)
- [Kerala Startup Mission: YoungMinds](https://startups.startupmission.in/startups/p6rdj)
- [Sunday Guardian: Preparing children for an AI-led future](https://sundayguardianlive.com/feature/preparing-children-for-an-ai-led-future-217690/)
- [GHLF: US Census population by age 2024](https://ghlf.org/wp-content/uploads/2025/10/2.-US-Census-Bureau_Population-Estimates-by-Age_2024.pdf)
- [Statistics Canada: Back to everything](https://www.statcan.gc.ca/o1/en/plus/8953-back-everything-most-us)
- [IBISWorld: Australia population aged 14 and younger](https://www.ibisworld.com/australia/bed/population-aged-14-and-younger/3/)
- [NCHE: homeschool stats](https://nche.com/stats/)
- [Kuraplan: homeschool statistics 2026](https://www.kuraplan.com/blog/homeschool-statistics-2026)
- [The 74: homeschool market share](https://www.the74million.org/article/market-share-declines-for-homeschools-increases-for-private-schools-holds-steady-for-public-schools-overall/)
- [University of Newcastle: Australian homeschooling](https://www.newcastle.edu.au/hippocampus/story/2026/more-and-more-australian-families-are-homeschooling)
- [ABCmouse Support: pricing](https://support.abcmouse.com/hc/articles/34385982120599)
- [Brilliant: is Brilliant worth it](https://brilliant.org/resources/choosing-brilliant/is-brilliant-worth-it/)
- [RevenueCat: State of Subscription Apps 2026](https://www.revenuecat.com/state-of-subscription-apps)
- [SaaStr: learnings from RevenueCat](https://www.saastr.com/the-top-10-learnings-from-revenuecats-state-of-subscription-apps/)
- [Subscription Insider: RevenueCat data](https://www.subscriptioninsider.com/article-type/news/revenuecat-data-shows-subscription-app-growth-concentrating-at-the-top)
- [Business of Apps: education app benchmarks](https://www.businessofapps.com/?p=98187)
- [Future AGI: Claude Haiku 4.5 pricing](https://futureagi.com/llm-cost-calculator/anthropic/claude-haiku-4-5)
- [Puter: Claude API pricing](https://developer.puter.com/tutorials/claude-api-pricing)
- [Makerkit: Vercel cost 2026](https://makerkit.dev/blog/saas/vercel-cost)
- [Neon pricing](https://neon.com/pricing)
- [Makerkit: Neon pricing calculator](https://makerkit.dev/pricing-calculator/neon)
- [RevenueCat: Small Business Program](https://www.revenuecat.com/blog/engineering/small-business-program)
- [Appbot: Apple and Google small business programs](https://appbot.co/blog/app-developers-apple-google-small-business-programs/)
- [iPhone in Canada: Apple proposes 15% on external purchases](https://www.iphoneincanada.ca/2026/08/14/apple-proposes-15-cut-purchases-outside-app-store/)
- [Neonpay: Apple alternative payment fees 2026](https://www.neonpay.com/blog/apple-app-store-alternative-payment-fees-what-developers-pay-in-2026)
- [Webtonic: Education Facebook ads statistics 2026](https://www.webtonic.io/blog/education-coaching-facebook-ads-statistics)
- [Superads: education CPL United States](https://www.superads.ai/facebook-ads-costs/cost-per-lead/education/united-states)
- [Launchpoint: parenting micro-influencer rates](https://www.launchpointhq.com/guides/rates/how-much-do-parenting-micro-influencers-charge)
- [Elev8or: Instagram parenting influencer rates](https://www.elev8or.io/find/instagram-parenting-influencer-rates)
- [Acton Children's Business Fair Los Angeles 2026](https://www.sharedaudiences.com/events/acton-childrens-business-fair-los-angeles-2026)
- [Lemonade Day 2026 guide](https://htest.lemonadeday.org/node/199578)
- [GrantedAI: ED/IES SBIR FY2026](https://grantedai.com/blog/ed-ies-sbir-fy2026-june-29-deadline-250k-phase-i-1-million-direct-phase-ii-education-technology-startup-strategy)
- [Crowell: SBIR/STTR reauthorized](https://www.crowell.com/en/insights/client-alerts/sbirsttr-programs-reauthorized-after-six-month-lapse)
- [SSTI: SBIR restart](https://ssti.org/node/91454)
- [University at Albany: Schwab Moneywise Momentum Grants](https://www.albany.edu/ocfr/news/2026-charles-schwab-moneywise-momentum-grants-financial-education)
- [Startland News: Kauffman grants](https://startlandnews.com/2025/05/kauffman-project-grants/)
- [SNPO: Kauffman Foundation](https://www.snpo.org/publications/fundingalert_details.php?id=1687)
- [GrantedAI: Kansas financial literacy grants](https://grantedai.com/grants/financial-literacy-education-grants-kansas-office-of-the-state-bank-commissi-0ff47c25)
- [EIN Presswire: LearnLaunch 2026](https://www.einpresswire.com/article/889648399/learnlaunch-fund-accelerator-opens-applications-for-2026-breakthrough-to-scale-program)
- [Angels Partners: LearnLaunch](https://angelspartners.com/firm/LearnLaunchFundAccelerator)
- [Michigan Virtual: Conquer EdTech Accelerator](https://michiganvirtual.org/edtech-catalyst/conquer)
- [Grants Database: Siakam EdTech Engine](https://grantsdatabase.org/?p=14002)
- [Qatar Tribune: WISE EdTech Accelerator](https://www.qatar-tribune.com/article/256471/nation/wise-edtech-accelerator-seeks-ventures-with-high-potential-to-impact-education-at-scale)
