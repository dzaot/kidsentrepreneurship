# Áreas por explorar: huecos de conocimiento, supuestos riesgosos e ideas nuevas

Fecha: 23 de octubre de 2026. Documento de trabajo, versión 1. Mercados: EE.UU., Canadá y Australia.
Se apoya en los documentos 01 a 06, en `web/src/content/path.ts` (20 lecciones, XP y rachas) y en `web/src/lib/coach.ts` (Guroo).

> **Aviso:** esto es investigación de negocio, no asesoría legal, fiscal ni clínica. La primera pasada se hizo con búsquedas web (resúmenes de resultados); casi no pudimos abrir páginas oficiales. Marcamos con **(no verificado)** lo que viene de una sola fuente, de fuentes secundarias o de resúmenes de prensa. El objetivo de este documento es decir **qué no sabemos todavía** y **cómo averiguarlo barato**, no cerrar las preguntas.

## 0. Resumen ejecutivo

- **El mayor punto ciego no es legal, es de demanda:** el plan asume que un niño de 8 a 14 vende a alguien de fuera de su casa en 30 días. El único dato público comparable (vendedores nuevos de Etsy) dice que solo ~30 % logra al menos una venta ([Marketplace Pulse 2021](https://www.marketplacepulse.com/articles/etsy-reaches-10-million-sellers), [Marketplace Pulse 2017](https://www.marketplacepulse.com/articles/etsy-has-already-added-500000-sellers-in-2017)). Nuestro "círculo seguro" lo mejora, pero depende del tamaño de la red de cada familia. Eso es un problema de **equidad** que todavía no medimos.
- **Guroo nos mete en la ola regulatoria de chatbots y menores de 2025 y 2026** (California SB 243 vigente desde el 1 de enero de 2026, Nueva York, Nebraska, Oregón, Idaho, estudio 6(b) de la FTC, artículo 50 del AI Act europeo desde el 2 de agosto de 2026, códigos de eSafety en Australia). No tenemos todavía una opinión legal sobre si Guroo es un "companion chatbot". Anthropic exige además tres cosas concretas a quien sirve a menores, y una de ellas (declarar públicamente el cumplimiento de COPPA) no está hecha.
- **Operaciones de confianza y seguridad (T&S) no existen como proceso.** Aceptamos archivos e imágenes subidos por niños y los publicamos. Eso trae obligaciones de reporte de CSAM a NCMEC si llegamos a tener "conocimiento real" (18 U.S.C. 2258A), y necesitamos botón de denuncia, cola de revisión, agente DMCA y un manual de incidentes.
- **La ética de la racha es un riesgo de producto y legal.** Nuestra racha se reinicia a 1 si el niño falla un día (sin "freeze"). La investigación de 2026 sobre Duolingo en familias habla de "exit dark patterns" y "obligación gamificada" ([Deceptive Design / IDC 2026](https://deceptive.design/articles/the-evil-bird-and-the-right-to-disconnect-children-s-vulnerability-to-exit-dark-patterns-in-gamified-educational-apps)). Los códigos de diseño estatales prohíben dark patterns para menores.
- **No sabemos qué "trabajo" contrata el padre.** ¿Enseñar dinero? ¿Pantalla sin culpa? ¿Un proyecto para el niño apasionado? ¿Créditos para homeschool? Cada respuesta cambia precio, mensaje y canal.
- **La marca "Guroo" puede tener un conflicto en EE.UU.:** existe una solicitud de marca GUROO (serie 90809193) en clases 35 y 36, presentada en 2021, con estado actual desconocido ([Justia](https://trademarks.justia.com/908/09/guroo-90809193.html)). "Venturoo" no mostró coincidencias exactas en búsquedas web, pero nadie ha hecho la búsqueda formal ni verificado el dominio.
- **Hay oportunidades que no habíamos considerado:** el mercado homeschool (3 a 3,7 millones de estudiantes en EE.UU.) y los fondos ESA (unos USD 7.000 a 8.000 por niño en Arizona, según fuentes secundarias) que pagan apps educativas aprobadas; la evidencia de que la educación emprendedora temprana mejora habilidades no cognitivas pero no el conocimiento ([Huber, Sloof y van Praag](https://papers.tinbergen.nl/12041.pdf)), lo que sugiere medir confianza y persistencia, no solo ventas.

## 1. Mapa priorizado de huecos (impacto x incertidumbre)

Escala de 1 a 5. **Impacto:** cuánto cambia el negocio si nos equivocamos. **Incertidumbre:** cuánto no sabemos hoy. **Prioridad:** P1 si el producto es 16 o más (resolver antes o durante el piloto de noviembre), P2 de 9 a 15 (antes del lanzamiento pagado, dic 2026 a feb 2027), P3 menos de 9 (antes de la fase 2).

| # | Área | Impacto | Incert. | Puntaje | Prioridad | Ya cubierto en |
|---|---|---|---|---|---|---|
| 1 | Equidad de la "primera venta" y demanda real fuera de casa | 5 | 5 | 25 | P1 | Doc 02 (círculo seguro), doc 05 (métrica) |
| 2 | Guroo y la regulación de IA con menores (EE.UU., UE, Reino Unido, Australia, política de Anthropic) | 5 | 4 | 20 | P1 | Doc 04 (capas de seguridad) |
| 3 | Motivación del padre y "jobs to be done" | 5 | 4 | 20 | P1 | Doc 05 (entrevistas, parcial) |
| 4 | Confianza y seguridad: moderación de archivos, CSAM, denuncias, DMCA | 5 | 4 | 20 | P1 | Doc 03 (checklist, sin proceso) |
| 5 | Rachas, recompensas y dark patterns para niños | 4 | 4 | 16 | P1 | No |
| 6 | Consentimiento parental verificable y age assurance (proveedores y costos) | 4 | 4 | 16 | P1 | Doc 03 (métodos, sin costos) |
| 7 | Marca y dominios: "Venturoo" y "Guroo" | 4 | 4 | 16 | P1 | Doc brand (para Honeystand, no para Venturoo/Guroo) |
| 8 | Disputas, contracargos y reembolsos de bienes digitales | 4 | 3 | 12 | P2 | No |
| 9 | Ciencia del aprendizaje: repaso espaciado, práctica de recuperación, maestría | 4 | 3 | 12 | P2 | No |
| 10 | Evidencia de resultados de la educación emprendedora infantil | 3 | 4 | 12 | P2 | No |
| 11 | Mercado homeschool y fondos ESA | 4 | 3 | 12 | P2 | No |
| 12 | Canal escolar y alineación con estándares | 3 | 3 | 9 | P2 | Doc 01 (mención) |
| 13 | Accesibilidad (WCAG), dislexia, TDAH y neurodiversidad | 3 | 3 | 9 | P2 | No |
| 14 | Localización: Quebec (francés) y Australia | 3 | 3 | 9 | P2 | Doc 03 (privacidad), parcial |
| 15 | Propiedad intelectual de la obra infantil y de activos hechos con IA | 3 | 3 | 9 | P2 | Doc 02 (reglas), parcial |
| 16 | Seguros, responsabilidad y estructura de la empresa | 3 | 3 | 9 | P2 | No |
| 17 | Transferencias de datos entre países y contratos con proveedores | 3 | 3 | 9 | P2 | Doc 03 (mención) |
| 18 | Impuestos y figura legal del ingreso del niño, por país | 3 | 2 | 6 | P3 | Doc 03 (alto nivel) |
| 19 | Reglas de App Store y Google Play para apps infantiles | 3 | 2 | 6 | P3 | Doc 03 (mención) |
| 20 | Analítica que respete la privacidad para medir el piloto | 3 | 2 | 6 | P1 operativo (barato, se necesita ya) | Doc 03 (principio) |
| 21 | Estacionalidad y calendario por país | 3 | 2 | 6 | P3 | Doc 05 (Thanksgiving) |

Nota: el área 20 tiene puntaje bajo porque la respuesta es conocida, pero hay que implementarla antes del 2 de noviembre para que el piloto produzca datos limpios.

---

### 1.1 Equidad de la "primera venta": ¿y si nadie compra? (P1)

**Por qué importa.** Es la promesa central ("primera venta en 30 días") y la métrica "go" del doc 05 (50 % de niños con venta a alguien fuera de casa). Si la venta depende del tamaño de la red social del padre, el producto premia a las familias con más contactos y castiga a familias recién llegadas, aisladas, con un solo padre o con poco tiempo. Un niño que "fracasa" públicamente frente a su familia puede salir peor que si nunca lo hubiera intentado.

**Primera pasada.**
- De casi 3 millones de vendedores nuevos en Etsy, ~30 % había vendido al menos un artículo ([Marketplace Pulse 2021](https://www.marketplacepulse.com/articles/etsy-reaches-10-million-sellers)); en 2017, 31 % de ~494.000 ([Marketplace Pulse 2017](https://www.marketplacepulse.com/articles/etsy-has-already-added-500000-sellers-in-2017)). Son adultos, con marketplace y sin círculo seguro; el dato sirve como piso, no como comparación directa.
- La competencia en imprimibles es enorme (más de 350.000 anuncios de "coloring printables" en Etsy, doc 02). Nuestro diferencial es la historia ("lo hizo mi sobrina"), que solo funciona en el círculo cercano.
- No encontramos datos públicos de ventas de productos digitales hechos por niños (ya señalado en doc 02, sección 8).

**Lo que no sabemos.** Cuántos contactos útiles tiene una familia típica del piloto; qué fracción de mensajes se convierte en compra; si el niño se desanima más por "0 ventas" o por "ventas solo de la abuela"; si las familias fuera del círculo del fundador (segundo piloto) tienen redes más chicas.

**Siguiente paso.**
- **Experimento de piloto:** en la encuesta de entrada, preguntar cuántas personas el padre estaría cómodo en contactar (ver sección 3). Correlacionar con ventas. Si la correlación es fuerte, el producto necesita un mecanismo de compradores alternativo (ideas en la sección 4).
- **Decisión de producto:** definir una meta de éxito que no dependa de la red: "primer cliente real" puede ser también una opinión de un cliente, o una venta en una feria. Decidir antes del piloto si celebramos igual a quien no vende.
- **Experto:** un investigador de equidad en educación (por ejemplo, del programa de Junior Achievement o de Lemonade Day que ya trabaja con escuelas Title I) para entender cómo resuelven el problema del niño sin compradores.

### 1.2 Guroo y la regulación de IA con menores (P1)

**Por qué importa.** Guroo es un chat de IA con personaje (una canguro "sabia y amigable") usado por niños de 8 a 14. Es exactamente el tipo de producto que los legisladores de 2025 y 2026 están regulando. Un error aquí puede costar una demanda privada (California), una investigación (FTC, eSafety, Ofcom) o el acceso a la API de Anthropic.

**Primera pasada.**
- **California SB 243** (firmada el 13 de octubre de 2025, vigente desde el 1 de enero de 2026; reportes anuales desde el 1 de julio de 2027): define "companion chatbot" como un sistema con respuestas adaptativas y humanas, capaz de satisfacer necesidades sociales, con rasgos antropomórficos y capaz de sostener una relación a lo largo de varias interacciones. Excluye bots usados **solo** para atención al cliente, propósitos operativos del negocio, productividad, investigación interna o asistencia técnica, además de ciertos bots de videojuegos. **No hay una exclusión educativa explícita** ([texto en LegiScan](https://legiscan.com/CA/text/SB243/2025), [FPF](https://fpf.org/blog/understanding-the-new-wave-of-chatbot-legislation-california-sb-243-and-beyond/)). Obligaciones según resúmenes: aviso de que es IA, protocolo de crisis por suicidio o autolesión con derivación a servicios, protecciones extra para menores (bloquear contenido sexual, recordatorios periódicos de pausa) y acción privada para los afectados ([Jones Walker](https://www.joneswalker.com/en/insights/blogs/ai-law-blog/ai-regulatory-update-californias-sb-243-mandates-companion-ai-safety-and-accoun.html), [MoFo](https://www.mofo.com/pdf/resources/insights/251120-new-york-and-california-enact-landmark-ai)). La frecuencia exacta del recordatorio no la verificamos en el texto **(no verificado)**.
- **Nueva York:** aviso al inicio de cada interacción y protocolos para detectar ideación suicida; solo el fiscal general puede demandar ([MoFo](https://www.mofo.com/pdf/resources/insights/251120-new-york-and-california-enact-landmark-ai)).
- **Otros estados 2026:** Nebraska (Conversational AI Safety Act, firmada el 14 de abril de 2026, vigente el 1 de julio de 2027), Idaho (SB 1297) y Oregón (SB 1546) ([Orrick, abril 2026](https://www.orrick.com/en/Insights/2026/04/2026-State-Chatbot-Laws-Key-Provisions-and-Regulatory-Trends)). Según un resumen, ninguna ley estatal exige todavía verificación de edad previa para IA en general; las protecciones se activan con "conocimiento real" de que el usuario es menor ([AVP Association](https://avpassociation.com/state-laws-for-ai-chatbots)). Nosotros **sabemos** que son menores, así que esas protecciones nos aplicarían si el producto entra en el ámbito.
- **FTC:** el 11 de septiembre de 2025 envió órdenes 6(b) a siete empresas (Alphabet, Character.AI, Instagram, Meta, OpenAI, Snap, xAI) sobre pruebas de seguridad infantil, límites por edad e información a padres. No es una acción de cumplimiento y no encontramos informe publicado en 2026 ([DLA Piper](https://www.dlapiper.com/en/insights/publications/2025/09/ftc-ai-chatbots)). Señal clara de qué preguntará la FTC a cualquier chatbot para niños.
- **Federal:** COPPA 2.0 pasó el Senado en marzo de 2026 y está parada en la Cámara; KOSA se incluyó en el paquete H.R. 7757 ("KIDS Act"), aprobado por la Cámara el 29 de junio de 2026, sin votación en el Senado a agosto ([Wikipedia: KOSA](https://en.wikipedia.org/wiki/Kids_Online_Safety_Act), [Loeb & Loeb, junio 2026](https://www.loeb.com/en/insights/publications/2026/06/childrens-online-privacy-in-2026-congress-stalls-again-ftc-signals-priorities)). **(Verificar estado tras agosto de 2026.)**
- **Unión Europea:** desde el 2 de agosto de 2026 se aplican las obligaciones de transparencia del artículo 50 del AI Act: avisar al inicio que se habla con una IA, de forma comprensible y accesible para niños; marcar de forma legible por máquina el contenido generado. Aplica a organizaciones fuera de la UE si sus sistemas se usan en la UE ([Malwarebytes](https://www.malwarebytes.com/blog/news/2026/08/the-ai-act-kicks-into-action-forces-companies-to-be-clear-about-ai-bots), [CEPIS](https://cepis.org/eu-ai-act-transparency-rules-enter-into-force/)). No es mercado objetivo, pero conviene bloquear o cumplir.
- **Reino Unido:** Ofcom considera que la Online Safety Act cubre chatbots generativos cuando el contenido se puede compartir con otros usuarios ([DLA Piper](https://www.dlapiper.com/en/insights/blogs/mse-today/2024/online-safety-act-chatbots-and-gen-ai)); abrió una investigación a un chatbot de compañía por age assurance en enero de 2026 **(no verificado, fuente secundaria)**. Existe un "Children & AI Design Code" voluntario creado por el equipo del Children's Code ([MLex](https://www.mlex.com/mlex/artificial-intelligence/articles/2312400/team-behind-globally-influential-uk-children-s-code-launches-ai-code)).
- **Australia:** los códigos de material restringido por edad incluyen a los chatbots de compañía desde el 9 de marzo de 2026: impedir contenido sexual para niños o aplicar age assurance, y dar información de crisis. El informe de transparencia de eSafety (marzo 2026) encontró que la mayoría de los servicios revisados no derivaba a ayuda ante temas de suicidio ([eSafety](https://esafety.gov.au/newsroom/media-releases/esafety-report-shows-ai-companions-are-putting-children-at-risk), [k-ID](https://k-id.com/news-posts/australias-new-online-safety-industry-codes)).
- **Anthropic** (guía para organizaciones que sirven a menores, [Claude Help Center](https://support.claude.com/en/articles/9307344-responsible-use-of-anthropic-s-models-guidelines-for-organizations-serving-minors)): (1) **requisito:** cumplir las leyes de seguridad y privacidad infantil (por ejemplo COPPA) y **declararlo claramente en el sitio web**; (2) **requisito:** decir a los usuarios que hablan con una IA; (3) **recomendado:** verificación de edad, moderación y filtrado, monitoreo y reporte, recursos educativos para menores, y usar el "child-safety system prompt" si Anthropic lo provee. Anthropic audita periódicamente y puede suspender cuentas con tasas altas de violaciones.
- **Estado del código:** `coach.ts` ya tiene reglas de seguridad, derivación al adulto y aviso "Guroo is an AI helper" en el chat (`GurooChat.tsx`). **No tiene** números de ayuda por país (988 en EE.UU., Kids Help Phone 1-800-668-6868 en Canadá, Kids Helpline 1800 55 1800 en Australia), ni recordatorios de pausa, ni aviso al padre ante señales de riesgo, ni declaración pública de cumplimiento COPPA en el sitio.
- **Evidencia pedagógica:** en un experimento con casi mil estudiantes de secundaria, un tutor GPT-4 sin salvaguardas subió la práctica 48 % pero bajó el examen 17 % frente al control; con salvaguardas (pistas en vez de respuestas) el daño desapareció ([Bastani et al., PNAS 2025](https://ideas.repec.org/a/nas/journl/v122y2025pe2422633122.html), [Wharton](https://knowledge.wharton.upenn.edu/article/without-guardrails-generative-ai-can-harm-education)). Guroo hoy "genera contenido útil cuando se le pide" (listas, descripciones). Riesgo de que haga el trabajo por el niño.

**Lo que no sabemos.** Si Guroo cae dentro de "companion chatbot" (tiene personaje antropomórfico y el historial se guarda; pero su propósito es una tarea); si la exclusión de "propósitos operativos" nos cubre; si Anthropic tiene hoy un child-safety system prompt disponible para nosotros y cómo lo pedimos; qué retención aplica Anthropic a los datos de la API en nuestro contrato **(no verificado)**; qué tasa de intentos de "jailbreak" hacen niños reales.

**Siguiente paso.**
- **Decisión antes del piloto:** cumplir el "mínimo común" de SB 243 y NY aunque no estemos obligados: aviso de IA al inicio de cada sesión (ya existe, verificar que sea visible antes del primer mensaje), números de ayuda por país en la regla de crisis, recordatorio de pausa, bloqueo de contenido sexual (ya en reglas) y un registro de incidentes.
- **Tarea de 1 hora:** publicar en la página de privacidad la declaración de cumplimiento COPPA y el uso de Claude como proveedor (requisito de Anthropic).
- **Experimento:** "red team" de 100 mensajes escritos como niños (incluye pedir datos, temas de tristeza, intentos de sacar del tema, pedir que haga todo el producto) antes del 2 de noviembre; repetir con transcripciones reales del piloto (con permiso).
- **Experto:** abogado de privacidad infantil con práctica en IA (1 a 2 horas, ya previsto en doc 05, ampliar el alcance a SB 243). Escribir a Anthropic (canal de ventas o soporte) para pedir el child-safety system prompt y confirmar retención y no entrenamiento.

### 1.3 Motivación del padre y "jobs to be done" (P1)

**Por qué importa.** El padre paga, abre las cuentas, comparte la tienda y dedica 30 a 45 minutos por semana. Si no entendemos qué progreso busca, no sabremos venderlo ni retenerlo después de la primera venta.

**Primera pasada.**
- Solo 28 % de los padres se siente "muy preparado" para hablar de principios financieros básicos; dos tercios cree que podría enseñar más sobre dinero ([T. Rowe Price](https://investors.troweprice.com/news-releases/news-release-details/t-rowe-price-survey-reveals-parents-overwhelmingly-feel-it-their)). Dato antiguo (2010 a 2013) **(verificar si hay encuesta reciente)**.
- Pew (mayo 2025, 3.054 padres de niños de 12 o menos): 42 % dice que podría manejar mejor la pantalla; solo 8 % reporta que sus hijos interactúan con chatbots ([Pew, vía resumen](https://www.pewresearch.org/?p=275990)) **(cifras de un resumen, verificar en Pew)**. Pew (febrero 2026, padres de adolescentes): 64 % de los adolescentes dice usar chatbots, frente a 51 % que creen los padres; 58 % de los padres no aprueba usarlos para apoyo emocional ([Pew](https://www.pewresearch.org/internet/2026/02/24/what-parents-say-about-their-teens-ai-use/markdown)).
- Common Sense Media (2025): 72 % de los adolescentes de 13 a 17 usó un "AI companion" y 24 % compartió información personal real con él ([Common Sense Media](https://commonsensemedia.org/press-releases/nearly-3-in-4-teens-have-used-ai-companions-new-national-survey-finds)). Esto alimenta el miedo del padre y a la vez valida un "AI coach supervisado con transcripciones".
- No encontramos encuestas recientes sobre qué quieren los padres que sus hijos aprendan de emprendimiento.

**Lo que no sabemos.** El "trabajo" principal (candidatos: "que aprenda el valor del dinero", "pantalla productiva sin culpa", "canalizar un hijo creativo", "algo para hacer juntos", "currículo de homeschool", "ventaja para el futuro"); qué producto despiden al contratarnos (Outschool, Greenlight, campamentos, nada); cuál es el momento de compra (vacaciones, inicio de año, después de una feria).

**Siguiente paso.** Añadir a las entrevistas del doc 05 preguntas de "switch" (qué estaban usando, qué pasó que los hizo buscar algo, qué casi los frena). Con 15 entrevistas, agrupar en 2 o 3 trabajos y escribir un mensaje de landing por trabajo. Probar los mensajes con anuncios baratos de USD 50 a 100 por variante en diciembre (solo dirigidos a adultos).

### 1.4 Confianza y seguridad: moderación de archivos, CSAM, denuncias y DMCA (P1)

**Por qué importa.** Niños suben archivos e imágenes que luego son públicos (con aprobación del padre). Un archivo con la cara del niño, datos personales escritos a mano, un símbolo de odio, contenido sexual (aunque sea de un tercero) o material con copyright puede llegar a la tienda. Además los compradores son desconocidos y pueden intentar contactar al niño por pedidos personalizados.

**Primera pasada.**
- **Obligación de reporte:** cualquier proveedor de servicio de comunicación electrónica o de almacenamiento remoto debe reportar a la CyberTipline de NCMEC "tan pronto como sea razonablemente posible" tras tener conocimiento real de aparente explotación sexual infantil; la REPORT Act (7 de mayo de 2024) amplió el deber a trata y a captación de menores, y alargó la conservación de evidencias ([18 U.S.C. 2258A](https://uscode.house.gov/us/usc/119-120/t18/s2258A/), [Wilson Sonsini](https://wsgr.com/en/insights/new-minor-safety-obligations-for-online-services-report-act-expands-child-sexual-exploitation-reporting-requirements.html), [Orrick](https://orrick.com/Insights/2024/01/REPORT-Act-Expands-Online-Service-Provider-Obligations-Related-to-Child-Sex-Abuse-Material)). No hay exención por tamaño. La ley no obliga a escanear, pero sí a reportar y conservar.
- **Herramientas:** PhotoDNA Cloud Service es gratis para clientes calificados; la Tech Coalition puede sublicenciarlo a empresas no miembro ([Microsoft](https://www.microsoft.com/en-us/photodna), [Tech Coalition](https://technologycoalition.org/news/the-tech-coalition-empowers-industry-to-combat-online-child-sexual-abuse-with-expanded-photodna-licensing/)). Safer (de Thorn) ofrece el flujo completo para empresas medianas y pequeñas; precio no publicado ([Stella Polaris](https://stellapolaris.childhood.se/digital-tools-combating-child-sexual-abuse/child-abuse-material-removal-and-blocking)). Cloudflare tendría una herramienta de escaneo para sitios en su red **(no verificado, solo foros)**.
- **Estado del código:** borramos EXIF y filtramos texto con datos personales; el padre aprueba. No hay botón de "denunciar esta tienda" en `/s/[slug]`, ni detección de caras ni de texto dentro de imágenes, ni manual de incidentes, ni agente DMCA registrado.
- **DMCA:** para acogerse al "safe harbor" de la sección 512 hay que designar un agente ante la Oficina de Copyright (trámite en línea con tarifa baja, renovable cada 3 años) **(conocimiento previo, verificar tarifa actual en copyright.gov)**.

**Lo que no sabemos.** Volumen y tipo de contenido problemático que suben niños reales; si el padre revisa de verdad o aprueba sin mirar; cómo responder si un comprador escribe algo inapropiado en el email que deja; costo y elegibilidad real de PhotoDNA o Safer para una startup de 20 a 2.000 familias.

**Siguiente paso.**
- **Antes del piloto (barato):** manual de incidentes de 2 páginas (quién revisa, en cuánto tiempo, cómo se conserva evidencia, cuándo se reporta a NCMEC y cuándo a la policía local en Canadá y Australia), botón de denuncia en cada tienda pública, y revisión manual del fundador de cada archivo antes de publicar (ya previsto en el doc 05).
- **Antes del lanzamiento:** solicitar PhotoDNA vía Tech Coalition; registrar agente DMCA; evaluar detección de caras y OCR en la subida.
- **Experto:** un responsable de T&S de una plataforma infantil (ex Roblox, ex PBS Kids, ex Khan Academy Kids) por 1 hora.

### 1.5 Rachas, recompensas y dark patterns para niños (P1)

**Por qué importa.** La racha y el XP son el corazón del "estilo Duolingo". Mal diseñados, generan culpa y ansiedad en niños, chocan con la prohibición de dark patterns de los códigos de diseño estatales (California, Maryland, Nebraska, Vermont, doc 03) y con el código australiano, y dan munición a la prensa.

**Primera pasada.**
- Un estudio de IDC 2026 (Kuo, Zhao y Scott) con pares padre e hijo que usan Duolingo describe "exit dark patterns": "deriva de objetivo" (mantener la métrica en vez de aprender) y "obligación gamificada" (culpa por dejarlo) ([Deceptive Design](https://deceptive.design/articles/the-evil-bird-and-the-right-to-disconnect-children-s-vulnerability-to-exit-dark-patterns-in-gamified-educational-apps)).
- Radesky y colegas encontraron diseños manipuladores para alargar el juego en apps de niños de 3 a 5 años, más frecuentes en familias de menor nivel socioeconómico ([PMC 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9206186/)).
- Duolingo reporta que permitir dos "streak freezes" subió 0,38 % los aprendices activos diarios y cita investigación de que algo de holgura motiva más que reglas rígidas ([Duolingo Blog](https://blog.duolingo.com/how-duolingo-streak-builds-habit)) (dato interno, no revisado por pares).
- Recompensas extrínsecas: el metaanálisis de Deci, Koestner y Ryan (1999) concluye que las recompensas tangibles y esperadas socavan la motivación intrínseca; Cameron y Pierce discuten el alcance ([Deci et al.](https://depts.washington.edu/techdocs/papers/deciExtrinsicRewardsAndIntrinsicMotivation99.pdf)). Relevante para el "premio de primera venta" de USD 10 a 20 del doc 05 y para cualquier recompensa con dinero.
- Gamificación en aprendizaje: efectos pequeños pero positivos en resultados cognitivos (g = 0,49), motivacionales (0,36) y conductuales (0,25) ([Sailer y Homner 2020](https://opus.bibliothek.uni-augsburg.de/opus4/files/109056/109056.pdf)).
- **Estado del código:** `actions.ts` reinicia la racha a 1 si pasa más de un día. No hay freeze ni días de descanso. No hay notificaciones al niño (bien).

**Lo que no sabemos.** Si a nuestros niños les importa la racha o el proyecto (el checklist del doc 05 lo observa, bien); si perder la racha provoca abandono; si un niño de 8 años entiende la racha como "obligación".

**Siguiente paso.**
- **Decisión antes del piloto:** cambiar a una racha amable (por ejemplo, "racha semanal" de 3 días por semana, o 2 días de descanso automáticos por semana) y nunca usar mensajes de pérdida ("¡vas a perder tu racha!"). Es un cambio pequeño en `actions.ts`.
- **Experimento:** en la entrevista de salida, preguntar al niño qué sintió el día que no abrió la app (sección 3).
- **Regla escrita:** "lista de diseños prohibidos" (temporizadores falsos, culpa, recompensas variables tipo lotería, cajas sorpresa, ranking entre niños) como parte de la evaluación de impacto.
- **No usar** el premio de dinero del doc 05 sin discutir el efecto de sobrejustificación; si se usa, que sea sorpresa y después de la venta, no anunciado.

### 1.6 Consentimiento parental verificable y age assurance (P1)

**Por qué importa.** Doc 03 recomienda un método fuerte (transacción con tarjeta) antes del lanzamiento público, pero no sabemos costos ni proveedores. Además el código australiano pide "medidas razonables para verificar la responsabilidad parental" y Quebec exige consentimiento del titular de la autoridad parental bajo 14 años.

**Primera pasada.**
- PRIVO ofrece varios métodos aprobados (email más texto, consentimiento con verificación de identidad) y un modelo por riesgo según la función; no publica precios ([PRIVO](https://www.privo.com/verifiable-parental-consent)).
- Un análisis económico estimó unos USD 0,25 por verificación con terceros y USD 0,01 a 0,02 por consentimiento por email, para un millón de verificaciones al año ([CUTS](https://cuts-ccier.org/pdf/snapshot-of-findings-economic-analysis-of-verifiable-parental-consent-mechanisms.pdf)) (estimación, no cotización).
- Anthropic usa Yoti para verificar edad en su producto de consumo cuando una cuenta es marcada ([MediaNama](https://www.medianama.com/2026/04/223-claude-users-accounts-suspended-flagged-minors/)). Yoti es un proveedor posible para la verificación del adulto.
- No encontramos precios de kidSAFE, k-ID ni Kids Web Services (Epic Games).

**Lo que no sabemos.** Costo real por familia; tasa de abandono en el paso de verificación (es un punto de fuga en el embudo); si un cargo reembolsable de USD 0,50 con Stripe cumple el estándar de la FTC para nuestro caso con tienda pública.

**Siguiente paso.** Pedir cotización a PRIVO, k-ID, Kids Web Services y Yoti en noviembre. Medir en el piloto cuánto tarda un padre en un flujo de "cargo de USD 1 reembolsado" (prueba de usabilidad con 5 padres). Decidir el método en diciembre junto con la integración de Stripe.

### 1.7 Marca y dominios: "Venturoo" y "Guroo" (P1)

**Por qué importa.** El doc de marca recomendaba **Honeystand** y dejaba **Venturoo** como plan B (con la mascota "Roo"). El producto ya usa Venturoo y Guroo. Ninguno de los dos pasó una búsqueda formal. Cambiar la marca después del lanzamiento cuesta mucho más.

**Primera pasada.**
- "Venturoo": sin coincidencias exactas en búsquedas web; parecidos en otros sectores: Venturoso (aceleradora), Venturu (marketplace), VEND-AROO (software) (doc de marca). La búsqueda de hoy tampoco encontró registros "Venturoo".
- **"Guroo": hay una solicitud de marca en EE.UU., GUROO, serie 90809193, presentada el 2 de julio de 2021 por una corporación, en clases 35 (publicidad, negocios) y 36 (pagos)** ([Justia](https://trademarks.justia.com/908/09/guroo-90809193.html)). El estado visible es de 2021 y probablemente está desactualizado. También existen "GUROOS" (87193480) y "GUR-ROO" (76342584) en Justia, sin revisar. En India hubo una solicitud "tatty Guroo" en clase 41, abandonada ([RegisterKaro](https://www.registerkaro.in/trademark-search/tatty-guroo-6178842)).
- No pudimos verificar dominios: las consultas RDAP y WHOIS están bloqueadas desde este entorno (igual que en el doc de marca).

**Lo que no sabemos.** Estado actual de GUROO 90809193 y de las marcas parecidas; disponibilidad de venturoo.com y variantes; situación en CIPO (Canadá) e IP Australia; si hay usos no registrados (apps, canales) con "Guroo".

**Siguiente paso.**
- **Esta semana:** consultar USPTO TSDR (serie 90809193 y búsqueda "GUROO", "VENTUROO" y fonéticos) y las bases de CIPO e IP Australia en clases 9 (software), 35, 41 (educación) y 42 (SaaS). Revisar en un registrador venturoo.com, .co, .app, getventuroo.com y reservar redes sociales.
- **Antes de gastar en marketing:** búsqueda de disponibilidad por un abogado de marcas (knockout search) y decisión: registrar "Venturoo" y tratar "Guroo" como nombre de personaje (riesgo menor, como se propuso para "Bizzy"), o renombrar la mascota.
- **Coherencia:** el doc de marca dice que la mascota se llama "Roo"; el producto usa "Guroo". Actualizar el doc de marca cuando se decida.

### 1.8 Disputas, contracargos y reembolsos de bienes digitales (P2)

**Por qué importa.** Con tickets de USD 3 a 5, un solo contracargo puede costar más que diez ventas. Y en Australia una política de "sin reembolsos" puede ser ilegal.

**Primera pasada.**
- Stripe cobra USD 15 por disputa en EE.UU. y, según una fuente, otros USD 15 si se contesta y se pierde (desde el 17 de junio de 2025) ([chargeback.io](https://www.chargeback.io/es/blog/stripe-chargeback-policy)) **(fuente secundaria, verificar en Stripe)**. Los umbrales de monitoreo de Visa bajaron a 1,5 % en abril de 2026 según la misma fuente.
- **Australia:** la Ley del Consumidor (ACL) aplica a vendedores extranjeros; los productos digitales tienen garantías; decir "no hay reembolsos una vez descargado" fue tratado como engañoso por la ACCC (casos Sony, EA, Booktopia) ([SmartCompany](https://www.smartcompany.com.au/business-advice/accc-pulls-up-ea-games-for-potentially-misleading-customers-on-refunds-for-digital-downloads/), [Pedestrian](https://www.pedestrian.tv/tech-gaming/accc-sony-playstation-refund-policy/)). Sí se puede no ofrecer reembolso por "cambio de opinión".
- No investigamos aún las leyes provinciales de consumo en Canadá ni las reglas estatales en EE.UU. para bienes digitales.

**Lo que no sabemos.** Tasa real de reembolsos y disputas en ventas a familiares (probablemente casi cero) y a desconocidos; cómo reacciona el niño ante un reembolso; quién paga la comisión.

**Siguiente paso.** Redactar una política modelo para el padre: "reembolso sin preguntas en 14 días, lo hace el padre desde Stripe", sin frases que niegue derechos legales. Añadir una lección corta "clientes felices y reembolsos". En el piloto, registrar cada reembolso o disputa.

### 1.9 Ciencia del aprendizaje: repaso espaciado, recuperación y maestría (P2)

**Por qué importa.** El producto promete "aprender" emprendimiento, no solo hacer una tienda. Hoy las 20 lecciones son lineales y no se repasan: el niño ve "precio, costo, ganancia" una vez.

**Primera pasada.**
- Niños de unos 10 años mostraron efectos robustos de práctica de recuperación, independientes de su comprensión lectora y velocidad de procesamiento ([Karpicke et al., PMC](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4786565/)).
- En secundaria, repasar unos días después de la lección (no inmediatamente) mejoró exámenes de fin de semestre; en historia, repasar semanas después mejoró un test sorpresa 9 meses más tarde ([resumen UT](https://hr.utexas.edu/sites/default/files/Spacing%20to%20Boost%20Learning.pdf)). Los propios investigadores piden más estudios aplicados ([Learning Scientists](https://www.learningscientists.org/blog/2017/7/20-1)).
- Bastani et al. (sección 1.2): la IA que da respuestas daña el aprendizaje; la que da pistas no.

**Lo que no sabemos.** Si los niños recuerdan los conceptos al día 30 o a los 3 meses; qué nivel de dificultad de lectura tienen nuestras lecciones para un niño de 8 años.

**Siguiente paso.** Añadir 3 preguntas de repaso de unidades anteriores al inicio de cada lección (barato, es contenido). Medir con un quiz de 6 conceptos al día 1 y al día 30 en el piloto (sección 3). Pasar el texto de las lecciones por un medidor de legibilidad (Flesch-Kincaid) y apuntar a grado 3 para la banda de 8 a 10.

### 1.10 Evidencia de resultados de la educación emprendedora infantil (P2)

**Por qué importa.** Padres, escuelas y partners preguntarán "¿funciona?". Además nos dice qué medir.

**Primera pasada.**
- El único experimento aleatorio que encontramos en primaria (Países Bajos, programa BizWorld, último año de primaria) encontró **cero efecto en conocimiento** y un **efecto positivo robusto en habilidades no cognitivas** (creatividad, autoeficacia, persistencia, proactividad, propensión al riesgo); estudios previos con adolescentes mostraban efectos nulos o negativos, lo que sugiere que estas habilidades se desarrollan mejor temprano ([Huber, Sloof y van Praag, EER 2014](https://papers.tinbergen.nl/12041.pdf), [IGL](https://innovationgrowthlab.org/node/565)).
- Lemonade Day (con Gallup, 2018 a 2019): 75 % de participantes planea iniciar un negocio frente a 40 % en la encuesta general, pero es autoinforme y sin grupo de control ([Lemonade Day](https://lemonadeday.org/node/155318)). JA BizTown: mejoras de conocimiento en pre y post test con 1.861 estudiantes, sin control ([resumen de evaluaciones JA](https://info.umkc.edu/uerc/project/junior-achievement-program-evaluation/)).

**Lo que no sabemos.** Si un formato digital de 5 minutos al día produce los mismos efectos que un programa de aula; qué instrumento corto y validado de autoeficacia emprendedora sirve para niños de 8 a 14.

**Siguiente paso.** Incluir en el piloto una escala de 5 preguntas con caritas sobre confianza ("puedo inventar una idea que a alguien le guste", "si algo sale mal lo intento de otra forma") antes y después. Contactar a Mirjam van Praag o a su grupo para preguntar por instrumentos para niños. Para fase 2, considerar un estudio con una universidad (crédito académico y prueba social).

### 1.11 Mercado homeschool y fondos ESA (P2)

**Por qué importa.** Familias homeschool buscan contenido basado en proyectos, compran directamente, tienen al padre presente (resuelve el problema del tiempo del padre) y algunas tienen fondos públicos para gastar en educación.

**Primera pasada.**
- EE.UU.: entre 3 y 3,7 millones de estudiantes homeschool en 2025-26 (unos 6 % de la población escolar, extrapolación); crecimiento medio de 4,9 % en 2024-25 según el Johns Hopkins Homeschool Hub; NCES midió 3,4 % en 2022-23 ([Kuraplan, resumen](https://www.kuraplan.com/blog/homeschool-statistics-2026), [NCHE](https://nche.com/stats/)) **(cifras de fuentes secundarias; verificar en Johns Hopkins y NCES)**.
- Gasto: HSLDA (2024, más de 4.000 familias) estima USD 1.295 al año por estudiante de primaria y 1.636 de secundaria, todo incluido ([HSLDA](https://hslda.org/post/the-costs-of-homeschooling-today)).
- ESA: Arizona (universal) da unos USD 7.000 a 8.000 por niño vía ClassWallet; Florida unos USD 8.000 **(fuentes secundarias)**. Outschool y Prodigies son vendedores aprobados en varios estados ([Outschool ESA](https://outschool.com/esa/approved-list), [Prodigies](https://prodigies.com/pages/homeschooling-with-prodigies)).
- Outschool dice que el emprendimiento encaja muy bien en homeschool, pero 87 % de sus compradores tiene hijos en escuela ([Outschool](https://outschool.com/how-to-teach/kids-entrepreneurship), [TechCrunch](https://techcrunch.com/?p=2048458)).

**Lo que no sabemos.** Qué piden los estados para aprobar un vendedor ESA (¿un currículo, un precio fijo, alineación a estándares?); si los padres homeschool aceptan un producto con "racha" o prefieren algo más libre; reglas de Canadá y Australia (homeschool registrado por estado).

**Siguiente paso.** Reclutar 3 familias homeschool en el piloto o en el segundo piloto. Leer los requisitos de vendedor de ClassWallet (Arizona) y Step Up For Students (Florida). Hablar con 2 coordinadores de co-ops homeschool.

### 1.12 Canal escolar y alineación con estándares (P2)

**Por qué importa.** Las escuelas no son el canal inicial (doc 04), pero los padres y maestros preguntan "¿esto cuenta para algo?". Además una tabla de alineación es barata y sirve para homeschool y ESA.

**Primera pasada.**
- Los National Standards for Personal Financial Education (CEE y Jump$tart, 2021) tienen seis áreas (ganar ingresos, gastar, ahorrar, invertir, crédito, riesgo) y bandas de 4.º, 8.º y 12.º grado; los benchmarks se numeran por banda (4-x, 8-x). Se pueden reproducir para fines educativos **no comerciales** ([KSDE, PDF de los estándares](https://www.ksde.gov/Portals/0/CSAS/CSAS%20Home/Financial%20Literacy/2021%20National%20Standards%20for%20Personal%20Financial%20Education.pdf), [CEE](https://www.councilforeconed.org/new-national-standards-for-personal-financial-education/)). No encontramos benchmarks de emprendimiento explícitos **(revisar el texto completo)**.
- Ontario: la alfabetización financiera es un eje de matemáticas de grado 1 a 9 y uno de seis "strands" en grado 9 ([CTV](https://ottawa.ctvnews.ca/here-s-what-s-being-taught-in-terms-of-financial-literacy-at-schools-in-ontario-1.6924337)).
- Australia: el currículo HASS de años 5 y 6 incluye economía y negocios (necesidades y deseos, recursos, decisiones de consumo), y la v8 hablaba de "enterprise" como recurso ([ejemplo QCAA](https://www.qcaa.qld.edu.au/downloads/aciqv9/humanities-and-social-sciences/curriculum/ac9_econ_bus_summary_changes.pdf)) **(códigos v9 no verificados en ACARA)**.
- Escuelas públicas de EE.UU. deben cumplir WCAG 2.1 AA bajo la regla del Título II de la ADA, con fechas desde abril de 2026 (posible extensión a 2027, no verificada) y empujan ese requisito a sus proveedores ([Siena](https://acadtech.siena.edu/new-regulations-on-ada-title-ii-web-accessibility/)).

**Lo que no sabemos.** Qué cuesta un "sello" de alineación creíble; si podemos citar los estándares en material comercial; cuánta demanda hay de maestros de grados 3 a 8.

**Siguiente paso.** Hacer una tabla que mapee las 20 lecciones a benchmarks 4-x y 8-x (ganar ingresos y gastar) y pedir permiso a CEE para usarla en marketing. Entrevistar a 3 maestros de 4.º a 7.º grado (uno en cada país).

### 1.13 Accesibilidad, dislexia, TDAH y neurodiversidad (P2)

**Por qué importa.** Entre los niños de 8 a 14 hay muchos lectores débiles, con dislexia o con TDAH (alrededor de 5 % según una fuente de diseño, no verificada). Un producto de lectura y quiz los excluye si no lo pensamos. Además las escuelas exigirán WCAG.

**Primera pasada.**
- OpenDyslexic no mejora la lectura: un estudio de 2018 encontró menor fluidez y precisión que con Arial o Times; el espaciado (letra, palabra, línea de 1,5) importa más que la fuente; las líneas cortas ayudan ([Dyslexia Scotland](https://dyslexiascotland.org.uk/dyslexia-friendly-typed-formats), [resumen](https://pimpmytype.com/?p=20161)).
- TDAH: guías de práctica (no ensayos controlados) recomiendan una acción clara por pantalla, pasos cortos y retomables, movimiento opcional y respetar "reducir movimiento" ([vp0](https://vp0.com/blogs/adhd-friendly-mobile-app-ui-guidelines)); prototipos académicos con muestras mínimas ([Reichman University](https://runi.ac.il/media/tdabpsrr/tangiplan-designing-an-assistive-technology-to-enhance-executive-functioning.pdf)).
- **Estado del código:** ya respetamos `prefers-reduced-motion` en el CSS. No hay lectura en voz alta ni ajuste de espaciado.

**Lo que no sabemos.** Si nuestras lecciones de 3 a 5 minutos son realistas para un niño de 8 años con lectura lenta; si el confeti y los sonidos molestan a niños con sensibilidad sensorial.

**Siguiente paso.** Auditoría rápida con axe o Lighthouse (1 hora). Añadir "leer en voz alta" con la API de voz del navegador (sin enviar audio a nadie, sin grabar la voz del niño). Reclutar 2 o 3 niños neurodivergentes en el piloto, con pregunta opcional y sin registrar diagnósticos (sección 3).

### 1.14 Localización: Quebec y Australia (P2)

**Por qué importa.** "En inglés para los tres países" puede ser ilegal o simplemente raro en Quebec, y poco natural en Australia.

**Primera pasada.**
- **Quebec:** la Carta de la Lengua Francesa reformada por la Ley 96 exige francés en comercio, publicidad, contratos y, según varias fuentes, en sitios de e-commerce que venden a residentes de Quebec, incluso si la empresa está fuera; las multas reportadas varían (USD 3.000 a 30.000 por día según una fuente) ([Osler](https://www.osler.com/?p=31884), [Localize](https://localizejs.com/articles/quebec-bill-96)) **(fuentes secundarias, verificar con la OQLF)**. La Ley 25 (privacidad) exige un responsable de privacidad y evaluaciones de impacto (doc 03), y según nuestra lectura también una evaluación antes de enviar datos fuera de Quebec **(verificar)**.
- **Australia:** ortografía (colour, organise), AUD, papel A4, GST, "mum", calendario invertido (verano de mediados de diciembre a fines de enero; el término 1 de 2027 empieza el 3 de febrero en NSW) ([NSW Education](https://education.nsw.gov.au/schooling/calendars/2027), [australia.com](https://www.australia.com/en/facts-and-planning/when-to-go/australian-school-holidays.html)). Thanksgiving no existe; la venta de temporada es Navidad en verano.
- **Canadá anglófono:** ortografía mixta, CAD, Thanksgiving en octubre (12 de octubre de 2026, ya pasó para el piloto).

**Lo que no sabemos.** Si la Ley 96 nos aplica desde la primera familia de Quebec o a partir de cierto volumen; costo de traducir 20 lecciones y el panel; si los padres australianos perciben a "Guroo la canguro" como un guiño simpático o como algo turístico.

**Siguiente paso.** **Decisión:** excluir Quebec del lanzamiento pagado hasta tener una versión en francés (decirlo en la landing). Crear variantes de contenido por país (moneda, ortografía, ejemplos de temporada) en `path.ts`. Preguntar a las familias australianas del piloto qué palabras suenan "americanas".

### 1.15 Propiedad intelectual de la obra infantil y de activos hechos con IA (P2)

**Por qué importa.** El niño es autor y dueño del copyright de sus dibujos. Nuestros términos necesitan una licencia para mostrar y entregar sus archivos. Y los contratos con menores son, en general, anulables.

**Primera pasada.**
- Los menores pueden tener copyright y la Oficina de Copyright emite registros a menores; un padre puede presentar la solicitud como agente; las leyes estatales pueden regular los negocios con copyright de menores ([Copyright.gov FAQ](https://copyright.gov/help/faq/faq-who.html), [Library of Congress, dic 2025](https://blogs.loc.gov/copyright/2025/12/copyright-is-for-kids-new-resource-for-parents-teachers-and-librarians/)). Los registros son públicos: no poner el nombre real si queremos privacidad (se puede registrar bajo seudónimo, **verificar requisitos**).
- Contratos con menores: generalmente anulables por el menor hasta la mayoría de edad y un tiempo razonable después; la firma del padre no necesariamente lo vuelve vinculante ([UpCounsel](https://upcounsel.com/contracts-made-by-minors-are-void)) **(fuentes débiles, consultar abogado)**.
- IA: la Corte Suprema negó el certiorari en Thaler v. Perlmutter el 2 de marzo de 2026; queda firme que la obra debe tener autor humano ([Baker Donelson](https://www.bakerdonelson.com/supreme-court-denies-certiorari-in-thaler-v-perlmutter-ai-cannot-be-an-author-under-the-copyright-act), [Jones Day](https://www.jonesday.com/de/insights/2026/03/jones-day-talks-women-in-ip--supreme-court-denies-review-of-thaler-v-perlmutter-ai-authorship-questions-remain)). Las imágenes hechas con IA en la cuenta del padre (doc 04) no son protegibles por sí solas.
- Hay una tensión interna: doc 02 dice "100 % hecho por el niño, sin imágenes IA en el MVP" y el sello "100% Kid-Made"; doc 04 y `coach.ts` permiten prompts para herramientas de imágenes con el padre y la etiqueta "Designed by me with AI help". Falta decidir cuál regla manda en el piloto.

**Lo que no sabemos.** Qué licencia recibe el comprador (uso personal, ¿puede imprimir 30 copias para su clase?); si el sello "100% Kid-Made" es una afirmación de marketing que debemos poder probar (el padre podría hacer el trabajo).

**Siguiente paso.** Cláusula de licencia en los términos: el padre, en nombre del niño, otorga una licencia limitada y revocable para mostrar y entregar el archivo; la propiedad sigue siendo del niño. Una "tarjeta de licencia" automática dentro de cada PDF para el comprador. **Decisión antes del piloto:** IA en el producto vendido sí o no, y cómo se etiqueta.

### 1.16 Seguros, responsabilidad y estructura de la empresa (P2)

**Por qué importa.** Ningún documento habla de la entidad legal, de seguros ni de límites de responsabilidad. Escuelas, ferias y partners pedirán certificados de seguro.

**Primera pasada.**
- Tech E&O suele incluir ciberriesgo y se puede añadir responsabilidad de medios; "abuse and molestation" es una línea separada, que algunas escuelas exigen a proveedores con contacto con menores; un rango para tutorías pequeñas es USD 400 a 3.000 al año de responsabilidad profesional ([Insureon](https://insureon.com/technology-business-insurance/education-technology), [QuoteSweep](https://www.quotesweep.com/insurance-for/tutoring), [Palomar College, requisitos](https://www.palomar.edu/ehs/wp-content/uploads/sites/298/2022/08/Certificate-Of-Insurance-Requirements.pdf)). No es un precio para una app infantil con IA.

**Lo que no sabemos.** Si las aseguradoras excluyen IA generativa o datos de menores; si conviene constituir en Delaware o en el país del fundador; qué cubre una póliza si un comprador acosa a un niño.

**Siguiente paso.** Antes del lanzamiento pagado: cotizar con un corredor especializado en servicios para niños (Tech E&O más ciber más abuse and molestation). Decidir la entidad con un abogado de startups (puede ser el mismo de privacidad).

### 1.17 Transferencias de datos entre países y contratos con proveedores (P2)

**Por qué importa.** Los datos de familias de Canadá y Australia se guardan en Netlify Blobs (EE.UU., suponemos) y los mensajes van a Anthropic. Ley 25 de Quebec y el APP 8 australiano piden evaluar transferencias fuera del país.

**Primera pasada.** Doc 03 pide contratos que prohíban usos secundarios y entrenamiento. No verificamos: región de almacenamiento de Netlify Blobs, acuerdo de procesamiento de datos (DPA) de Netlify y de Anthropic, retención de Anthropic para la API **(no verificado)**.

**Siguiente paso.** Lista de subprocesadores en la política de privacidad (Netlify, Anthropic, proveedor de email). Firmar los DPA estándar. Evaluación de transferencia de una página para Quebec y Australia.

### 1.18 Impuestos y figura legal del ingreso del niño (P3)

**Por qué importa.** Bajo para el piloto (montos mínimos), pero los padres preguntarán, y una idea fiscal mal explicada puede ser un riesgo de reputación.

**Primera pasada (nuevo respecto al doc 03).**
- **EE.UU., 1099-K:** la ley OBBBA (P.L. 119-21) devolvió el umbral a más de USD 20.000 **y** más de 200 transacciones, de forma retroactiva, confirmado por el IRS en la Fact Sheet 2025-08; esto resuelve la pregunta abierta del doc 03. Ojo: según una fuente, los pagos con tarjeta procesados por entidades de liquidación no tienen umbral ([Beancount](https://beancount.io/blog/2026/05/08/form-1099-k-2026-threshold-reverts-20000-200-transactions-obbba-payment-app-reporting-guide), [CPA Practice Advisor](https://www.cpapracticeadvisor.com/2026/02/18/2026-tax-filing-and-form-1099-k-know-the-new-rules-this-tax-season/178331/)) **(verificar cómo lo aplica Stripe)**. El ingreso es declarable con o sin formulario.
- **EE.UU., negocio del padre que paga al hijo:** si el padre es sole proprietor (o LLC de un miembro), los salarios a un hijo menor de 18 están exentos de FICA; dan "earned income" que permite una Roth IRA de custodia; el salario debe ser razonable y por trabajo real ([Gusto](https://gusto.com/resources/articles/taxes/tax-benefits-hiring-children), [Keeper](https://www.keepertax.com/posts/hiring-your-kids)). Es atractivo para padres, pero es asesoría fiscal: **no lo recomendamos en la app**, solo enlazamos a un contador.
- **Canadá:** TOSI (impuesto sobre ingreso dividido) apunta sobre todo a dividendos de corporaciones privadas; no aplica a salarios ([RBC](https://ca.rbcwealthmanagement.com/documents/132686/132706/Income+Splitting+Update+Dec+2017.pdf/b253ef43-9748-4187-92ef-e61fd4f67b43), [CRA](https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/federal-government-budgets/income-sprinkling/guidance-split-income-rules-adults.html)). Las reglas de atribución pueden atribuir al padre ingresos de bienes transferidos al menor **(fuentes de 2017, verificar)**.
- **Australia:** cubierto en doc 03 (excepción para negocio que el menor lleva realmente).

**Siguiente paso.** Una página "Dinero e impuestos" por país, revisada por un contador de cada país (1 hora cada uno), con un descargo claro. El registro anual descargable del doc 03 sigue siendo la pieza clave.

### 1.19 App Store y Google Play para una futura app nativa (P3)

**Primera pasada.**
- Apple, guía 1.3 (Kids Category): según la versión revisada, analítica de terceros solo si no envía datos personales ni huella del dispositivo; anuncios solo contextuales con revisión humana; "parental gate" antes de compras o enlaces externos ([TechCrunch](https://techcrunch.com/?p=1880829), [GoodBarber](https://www.goodbarber.com/help/apple-rejection-r100/apple-rejection-apps-for-kids-a365/)) **(no verificamos el texto 2026)**.
- Google Play: la política de Familias exige SDKs de anuncios certificados y prohíbe anuncios personalizados; desde el 26 de agosto de 2026 prohíbe apps de chat anónimo dirigidas a niños ([Google Play Families](https://support.google.com/googleplay/android-developer/answer/9893335)). No está claro si un chat con IA cuenta como "chat anónimo" **(verificar)**.
- Leyes estatales de "app store accountability" (Utah, Texas) (doc 03).

**Siguiente paso.** Antes de empaquetar con Capacitor (2027): decidir si vamos a Kids Category o a Educación con clasificación por edad, y cómo se cobra la suscripción (compra dentro de la app frente a web). Mantener la PWA como canal principal.

### 1.20 Analítica que respete la privacidad para medir el piloto (operativo, ya)

**Primera pasada.** COPPA permite identificadores persistentes sin consentimiento solo para "soporte de operaciones internas" (mantener y analizar el funcionamiento del servicio), sin perfiles ni contacto, y hay que declararlo ([Inside Privacy](https://www.insideprivacy.com/united-states/federal-trade-commission/ftc-adopts-final-coppa-rule/)). La posición más limpia es analítica agregada sin cookies o eventos propios guardados en nuestra base, sin terceros.

**Lo que no sabemos.** Si con Netlify Blobs podemos reconstruir el embudo del doc 05 (lección completada, proyecto elegido, archivo subido, tienda publicada, venta registrada, minutos por sesión) sin herramientas externas.

**Siguiente paso (antes del 2 de noviembre).** Definir un esquema de eventos mínimo (tipo de evento, id de niño interno, fecha, lección) guardado en nuestro almacenamiento, y un script que genere la hoja de seguimiento del doc 05. Nada de Google Analytics ni pixels en zonas de niños.

### 1.21 Estacionalidad y calendario por país (P3)

**Primera pasada.** EE.UU.: Thanksgiving el 26 de noviembre de 2026 y Black Friday el 27 (doc 05 ya lo usa). Canadá: Thanksgiving ya pasó (12 de octubre). Australia: fin de año escolar entre el 11 y el 19 de diciembre, vacaciones de verano hasta fines de enero o inicios de febrero ([australia.com](https://www.australia.com/en/facts-and-planning/when-to-go/australian-school-holidays.html)). Después de diciembre viene el bajón de enero; las siguientes ventanas son vuelta a clases (enero en Australia, agosto y septiembre en EE.UU. y Canadá), San Valentín, Día de la Madre (9 de mayo de 2027 en los tres países) y fin de curso.

**Siguiente paso.** Calendario de "ediciones de temporada" por país para 2027, y planear la campaña de adquisición para enero (propósitos de año nuevo de los padres) y para la vuelta a clases.

---

## 2. Los 5 supuestos más riesgosos y cómo probarlos barato en el piloto de noviembre

| # | Supuesto | Por qué es riesgoso | Prueba barata en noviembre | Señal de alerta |
|---|---|---|---|---|
| 1 | **Cualquier familia consigue al menos una venta fuera de casa en 30 días** con el círculo seguro | Depende del tamaño de la red del padre y de su disposición a "pedir"; los datos de Etsy sugieren que 70 % de los vendedores nuevos no vende nada | En la entrada, preguntar cuántas personas contactaría el padre y a quién no le pediría nunca. Contar mensajes enviados por familia (autorreporte semanal). Registrar la relación de cada comprador. Comparar ventas entre familias con red "chica" y "grande" | Más de 30 % de los niños sin venta, o ventas concentradas en las familias con redes más grandes |
| 2 | **El padre dedica 45 minutos o menos por semana y configura Stripe o PayPal sin ayuda** | El padre es el cuello de botella de todo: cuentas, escaneo, aprobación y difusión. Si necesita 2 horas, no escala sin el fundador | Medir el tiempo de configuración de pagos (ya en doc 05) y además contar cada intervención manual del fundador (mensajes de soporte, "rescates"). Pedir a 3 padres que graben su pantalla al configurar Stripe | Mediana de más de 60 minutos por semana, o más de 2 intervenciones del fundador por familia por semana |
| 3 | **El hábito diario (rachas, XP, 5 minutos al día) es lo que mantiene al niño** | Puede ser que lo que motiva sea el proyecto y la venta, y que la racha solo genere culpa o se ignore. Eso cambia el diseño entero ("Duolingo de" puede ser la metáfora equivocada) | Registrar sesiones iniciadas por el niño sin recordatorio del padre. Con la racha amable de la sección 1.5, observar si los niños vuelven después de un día perdido. Preguntar al niño qué parte le hace volver (sección 3) | La mayoría de las sesiones las inicia el padre, o los niños no saben qué es su racha |
| 4 | **Los padres pagarán una suscripción mensual de USD 7,99 después de la primera venta** | El valor puede estar en el proyecto de 30 días (pago único) y no en la continuidad; tras la primera venta la motivación puede caer | Mantener la prueba de 3 precios del doc 05, y añadir una opción de "ruta de 30 días por USD 19 a 29" como alternativa real. Preguntar contra qué gasto lo comparan (clases, Outschool, Greenlight) | Más familias eligen el pago único, o nadie deja tarjeta para el mensual |
| 5 | **Guroo aporta valor, es seguro y los padres lo activan** | Si los padres no lo encienden, el costo regulatorio y de API no se justifica. Si lo encienden, el riesgo es que haga el trabajo por el niño o que un niño revele algo serio | Contar cuántos padres lo activan y por qué no. Leer (con permiso) las transcripciones: clasificar mensajes en "ayuda a pensar" o "hace el trabajo", y registrar incidentes. Comparar tasa de producto terminado entre niños con y sin Guroo (experimento natural). Red team de 100 mensajes antes del piloto | Menos de 50 % de activación, o más de 1 incidente sin manejar bien, o transcripciones donde Guroo escribe el producto entero |

Nota: con 10 a 20 familias nada es estadísticamente significativo. Lo que buscamos son señales fuertes y razones (el "por qué" de cada caída), igual que en el doc 05.

## 3. Preguntas nuevas para padres y niños del piloto (para añadir al doc 05)

En inglés, como los guiones del doc 05. Entre paréntesis, a qué hueco responde.

### 3.1 Entrevista inicial del padre (semana 0)

1. Think about the last time you looked for something for [kid] to learn outside school. What were you looking for, and what did you end up choosing? (1.3, trabajo a contratar)
2. What would have to happen in the next month for you to say "this was worth it", even if [kid] makes no sale? (1.1, 1.3)
3. Roughly how many people would you feel comfortable sending [kid]'s shop link to, one by one? Is there anyone you would never ask? (1.1, supuesto 1)
4. Who decides what happens with money [kid] earns: [kid], you, or both? Where would it go? (1.18, ideas de producto)
5. Is [kid] homeschooled, in school, or a mix? Do you use an education savings account or similar funds? (1.11)
6. Is there anything that makes reading, focusing, or long screen tasks harder for [kid]? You can skip this one. (1.13; no registrar diagnósticos, solo necesidades)
7. How do you feel about [kid] using an AI helper for ideas? What would make you turn it off? (1.2, supuesto 5)
8. Which of these would bother you more: [kid] making no sale, or [kid] selling only to family? (1.1)

### 3.2 Pulso semanal del padre (agregar 2 preguntas)

9. How many people did you send the shop link to this week? (supuesto 1)
10. Did you do any step for [kid] that you think [kid] could have done? Which one? (autenticidad "100% Kid-Made", 1.15)

### 3.3 Entrevista de salida del padre (semana 4)

11. What did you have to do that you didn't expect? How long did the payment setup really take? (supuesto 2)
12. Was there any moment when the streak or the app made [kid] feel bad, guilty, or pressured? (1.5)
13. Did you read any of the Guroo chats? Did anything surprise or worry you? (1.2, supuesto 5)
14. If this were a one-time 30-day program instead of a subscription, would that change your decision? What would you compare the price to? (supuesto 4)
15. Did any buyer write something odd, ask for something unusual, or want to contact [kid]? (1.4)
16. Did anyone ask for a refund or say the file didn't work? (1.8)
17. Would you want a record of hours and skills for school, homeschool reporting, or grandparents? (1.11, 1.12)

### 3.4 Niño (con caritas o dibujos, leído por el padre o el observador)

18. What made you want to open the app on a day you didn't have to? (supuesto 3)
19. How did you feel the day you missed the app? (caritas) (1.5)
20. What is one thing you learned that you could teach a friend? (y luego, sin aviso, 3 preguntas de repaso de la unidad 1 al día 30: precio, costo, ganancia) (1.9, 1.10)
21. Antes y después, 5 frases con caritas: "I can come up with an idea people like", "If something goes wrong, I try another way", "I can explain my product to a grown-up", "I can set a fair price", "I feel proud of something I made". (1.10)
22. Was Guroo more like a helper or like it did things for you? (supuesto 5)
23. If nobody bought it, what would you do next? (1.1)
24. Was anything hard to read or too fast? (1.13)

### 3.5 Compradores (opcional, 2 preguntas por email, sin datos personales)

25. How do you know the shop owner's family? (family / friend / coworker / don't know them)
26. Why did you buy? (support the kid / I'll use it / gift / other)

### 3.6 Filas nuevas sugeridas para la tabla "Investigación que todavía falta" del doc 05

| # | Pregunta | Cómo | Cuándo |
|---|---|---|---|
| 13 | ¿La venta depende del tamaño de la red de la familia? | Preguntas 3, 9, 25 | Noviembre 2026 |
| 14 | ¿La racha motiva o presiona? | Preguntas 12, 18, 19 y observación | Noviembre 2026 |
| 15 | ¿Guroo ayuda a pensar o hace el trabajo? | Transcripciones clasificadas, pregunta 22 | Noviembre 2026 |
| 16 | ¿Cambian la confianza y el conocimiento del niño? | Escala de 5 frases y repaso al día 30 | Día 1 y día 30 |
| 17 | Opinión legal sobre SB 243 y requisitos de Anthropic | Abogado y contacto con Anthropic | Antes de diciembre 2026 |
| 18 | Búsqueda formal de marca Venturoo y Guroo, y dominios | USPTO, CIPO, IP Australia, registrador | Noviembre 2026 |

## 4. Ideas de producto que surgieron de la investigación

| # | Idea | Por qué (una línea) |
|---|---|---|
| 1 | **Racha amable**: racha semanal (3 de 7 días) o 2 días libres automáticos, sin mensajes de pérdida | Reduce la "obligación gamificada" que describe la investigación de 2026 y nos aleja de los dark patterns que prohíben los códigos de diseño. |
| 2 | **"Pouch Review" de Guroo**: 3 preguntas de repaso espaciado de unidades anteriores al inicio de cada lección | La práctica de recuperación espaciada funciona en niños de 7 a 11 y hoy cada concepto se ve una sola vez. |
| 3 | **Guroo en modo "pistas primero"**: antes de dar una lista, pregunta qué pensó el niño y da 1 pista | El estudio de Bastani muestra que la IA que da respuestas daña el aprendizaje y la que da pistas no. |
| 4 | **Protocolo de crisis por país y recordatorio de pausa en Guroo**, con aviso opcional al padre | Cumple el mínimo común de SB 243, Nueva York y eSafety aunque no estemos obligados, y es lo que preguntará la FTC. |
| 5 | **"Primer cliente patrocinado"**: un partner (credit union, feria) da un crédito de USD 3 a un adulto voluntario para comprar y dar opinión a niños sin compradores | Ataca el problema de equidad sin crear interacción entre niños; reutiliza la idea de microbecas del doc 01. |
| 6 | **Logro "primer cliente real"** que cuenta una opinión o una venta en feria, no solo una venta online | Define el éxito de forma que no dependa solo de la red social de la familia. |
| 7 | **Modo homeschool**: registro de horas, portafolio PDF del proyecto y tabla de estándares | Los padres homeschool necesitan evidencias para reportar y para gastar fondos ESA. |
| 8 | **Tabla de alineación con los National Standards (4-x y 8-x)**, Ontario y HASS de Australia | Barata de hacer y desbloquea homeschool, ESA y maestros. |
| 9 | **Leer en voz alta** (síntesis de voz del navegador) y ajuste de espaciado para lectores débiles | El espaciado y el audio ayudan más que las fuentes "para dislexia", y nuestro público incluye lectores de 8 años. |
| 10 | **Botón "Report this shop"** y cola de revisión en el panel del fundador | Es la base de cualquier operación de T&S y de las obligaciones de reporte. |
| 11 | **Tarjeta de licencia automática** en cada PDF ("Made by a young creator. For personal use. Thank you!") | Aclara qué compra el comprador y protege la obra del niño sin exponer su nombre. |
| 12 | **Botón de reembolso guiado para el padre** y lección "clientes felices" | Un reembolso de USD 4 es mucho más barato que una disputa de USD 15, y en Australia "sin reembolsos" puede ser ilegal. |
| 13 | **"Dónde va mi dinero"**: el niño reparte lo ganado en ahorrar, gastar y compartir; el padre registra el destino | Conecta ganar con ahorrar (el puente natural hacia Greenlight, Mydoh o Spriggy del doc 03). |
| 14 | **Informe para el padre al día 30**: confianza antes y después, conceptos recordados, frases del niño | Hace visible el valor no cognitivo que la investigación sí respalda y ayuda a justificar el pago. |
| 15 | **Calendario de ediciones de temporada por país** (Navidad de verano en Australia, vuelta a clases, Día de la Madre) | Thanksgiving no sirve fuera de EE.UU. y enero es un bajón en los tres países. |
| 16 | **Kit de feria imprimible** (QR de la tienda, cartel con la mascota, hoja de precios) | Da un camino de venta sin red online y conecta con Acton y Lemonade Day, el canal que el doc 03 prioriza. |

## 5. Lo que no pudimos verificar en esta pasada

- Texto exacto de SB 243 sobre la frecuencia del recordatorio de pausa para menores, y si Guroo cae en la definición.
- Disponibilidad del child-safety system prompt de Anthropic y retención de datos de la API en nuestro contrato.
- Estado actual de la marca GUROO 90809193 y de otras marcas parecidas; disponibilidad de dominios (bloqueado desde este entorno).
- Precios de PRIVO, k-ID, Kids Web Services, kidSAFE, Yoti, PhotoDNA y Safer.
- Tarifas de disputa de Stripe en Canadá y Australia, y si Stripe emite 1099-K sin umbral para pagos con tarjeta.
- Alcance exacto de la Ley 96 para un servicio en línea extranjero con pocas familias en Quebec.
- Si la prohibición de "chat anónimo" de Google Play alcanza a un chat con IA.
- Códigos v9 del currículo australiano y benchmarks de emprendimiento en los estándares de CEE y Jump$tart.
- Si la regla del Título II de la ADA fue extendida a 2027.
- Estado de KOSA y COPPA 2.0 después de agosto de 2026.

## Fuentes

- [LegiScan: texto de California SB 243](https://legiscan.com/CA/text/SB243/2025)
- [FPF: nueva ola de leyes de chatbots](https://fpf.org/blog/understanding-the-new-wave-of-chatbot-legislation-california-sb-243-and-beyond/)
- [Jones Walker: SB 243](https://www.joneswalker.com/en/insights/blogs/ai-law-blog/ai-regulatory-update-californias-sb-243-mandates-companion-ai-safety-and-accoun.html)
- [MoFo: leyes de companion AI de Nueva York y California](https://www.mofo.com/pdf/resources/insights/251120-new-york-and-california-enact-landmark-ai)
- [Orrick: leyes estatales de chatbots 2026](https://www.orrick.com/en/Insights/2026/04/2026-State-Chatbot-Laws-Key-Provisions-and-Regulatory-Trends)
- [AVP Association: leyes estatales de chatbots](https://avpassociation.com/state-laws-for-ai-chatbots)
- [DLA Piper: órdenes 6(b) de la FTC sobre chatbots](https://www.dlapiper.com/en/insights/publications/2025/09/ftc-ai-chatbots)
- [Wikipedia: Kids Online Safety Act](https://en.wikipedia.org/wiki/Kids_Online_Safety_Act)
- [Loeb & Loeb: privacidad infantil 2026, el Congreso se estanca](https://www.loeb.com/en/insights/publications/2026/06/childrens-online-privacy-in-2026-congress-stalls-again-ftc-signals-priorities)
- [Malwarebytes: AI Act, transparencia desde agosto 2026](https://www.malwarebytes.com/blog/news/2026/08/the-ai-act-kicks-into-action-forces-companies-to-be-clear-about-ai-bots)
- [CEPIS: reglas de transparencia del AI Act](https://cepis.org/eu-ai-act-transparency-rules-enter-into-force/)
- [DLA Piper: Online Safety Act y chatbots](https://www.dlapiper.com/en/insights/blogs/mse-today/2024/online-safety-act-chatbots-and-gen-ai)
- [MLex: Children & AI Design Code](https://www.mlex.com/mlex/artificial-intelligence/articles/2312400/team-behind-globally-influential-uk-children-s-code-launches-ai-code)
- [eSafety: informe sobre AI companions](https://esafety.gov.au/newsroom/media-releases/esafety-report-shows-ai-companions-are-putting-children-at-risk)
- [k-ID: códigos de seguridad en línea de Australia](https://k-id.com/news-posts/australias-new-online-safety-industry-codes)
- [Anthropic: guía para organizaciones que sirven a menores](https://support.claude.com/en/articles/9307344-responsible-use-of-anthropic-s-models-guidelines-for-organizations-serving-minors)
- [MediaNama: verificación de edad en Claude](https://www.medianama.com/2026/04/223-claude-users-accounts-suspended-flagged-minors/)
- [Bastani et al., PNAS 2025 (IDEAS)](https://ideas.repec.org/a/nas/journl/v122y2025pe2422633122.html), [Wharton Knowledge](https://knowledge.wharton.upenn.edu/article/without-guardrails-generative-ai-can-harm-education)
- [Marketplace Pulse: Etsy 10 millones de vendedores](https://www.marketplacepulse.com/articles/etsy-reaches-10-million-sellers), [Etsy 2017](https://www.marketplacepulse.com/articles/etsy-has-already-added-500000-sellers-in-2017)
- [T. Rowe Price: encuesta a padres](https://investors.troweprice.com/news-releases/news-release-details/t-rowe-price-survey-reveals-parents-overwhelmingly-feel-it-their)
- [Pew: padres de niños de 12 o menos (2025)](https://www.pewresearch.org/?p=275990), [Pew: padres y uso de IA de adolescentes (2026)](https://www.pewresearch.org/internet/2026/02/24/what-parents-say-about-their-teens-ai-use/markdown)
- [Common Sense Media: AI companions y adolescentes](https://commonsensemedia.org/press-releases/nearly-3-in-4-teens-have-used-ai-companions-new-national-survey-finds)
- [18 U.S.C. 2258A](https://uscode.house.gov/us/usc/119-120/t18/s2258A/), [Wilson Sonsini: REPORT Act](https://wsgr.com/en/insights/new-minor-safety-obligations-for-online-services-report-act-expands-child-sexual-exploitation-reporting-requirements.html), [Orrick: REPORT Act](https://orrick.com/Insights/2024/01/REPORT-Act-Expands-Online-Service-Provider-Obligations-Related-to-Child-Sex-Abuse-Material)
- [Microsoft PhotoDNA](https://www.microsoft.com/en-us/photodna), [Tech Coalition: licencias de PhotoDNA](https://technologycoalition.org/news/the-tech-coalition-empowers-industry-to-combat-online-child-sexual-abuse-with-expanded-photodna-licensing/), [Stella Polaris: herramientas](https://stellapolaris.childhood.se/digital-tools-combating-child-sexual-abuse/child-abuse-material-removal-and-blocking)
- [Deceptive Design: exit dark patterns en apps educativas](https://deceptive.design/articles/the-evil-bird-and-the-right-to-disconnect-children-s-vulnerability-to-exit-dark-patterns-in-gamified-educational-apps)
- [Radesky et al. 2022 (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9206186/)
- [Duolingo Blog: cómo la racha crea hábito](https://blog.duolingo.com/how-duolingo-streak-builds-habit)
- [Deci, Koestner y Ryan: recompensas extrínsecas](https://depts.washington.edu/techdocs/papers/deciExtrinsicRewardsAndIntrinsicMotivation99.pdf)
- [Sailer y Homner 2020: metaanálisis de gamificación](https://opus.bibliothek.uni-augsburg.de/opus4/files/109056/109056.pdf)
- [PRIVO: consentimiento parental verificable](https://www.privo.com/verifiable-parental-consent)
- [CUTS: análisis económico de VPC](https://cuts-ccier.org/pdf/snapshot-of-findings-economic-analysis-of-verifiable-parental-consent-mechanisms.pdf)
- [Justia: GUROO 90809193](https://trademarks.justia.com/908/09/guroo-90809193.html), [RegisterKaro: tatty Guroo](https://www.registerkaro.in/trademark-search/tatty-guroo-6178842)
- [chargeback.io: política de contracargos de Stripe 2026](https://www.chargeback.io/es/blog/stripe-chargeback-policy)
- [SmartCompany: ACCC y EA](https://www.smartcompany.com.au/business-advice/accc-pulls-up-ea-games-for-potentially-misleading-customers-on-refunds-for-digital-downloads/), [Pedestrian: ACCC y Sony](https://www.pedestrian.tv/tech-gaming/accc-sony-playstation-refund-policy/)
- [Karpicke et al.: práctica de recuperación en primaria (PMC)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4786565/), [UT: espaciado](https://hr.utexas.edu/sites/default/files/Spacing%20to%20Boost%20Learning.pdf), [Learning Scientists](https://www.learningscientists.org/blog/2017/7/20-1)
- [Huber, Sloof y van Praag (Tinbergen)](https://papers.tinbergen.nl/12041.pdf), [Innovation Growth Lab](https://innovationgrowthlab.org/node/565)
- [Lemonade Day: estudio de impacto 2020](https://lemonadeday.org/node/155318), [UMKC: evaluación de JA](https://info.umkc.edu/uerc/project/junior-achievement-program-evaluation/)
- [Kuraplan: estadísticas homeschool 2026](https://www.kuraplan.com/blog/homeschool-statistics-2026), [NCHE](https://nche.com/stats/), [HSLDA: costos](https://hslda.org/post/the-costs-of-homeschooling-today)
- [Outschool: gastos ESA aprobados](https://outschool.com/esa/approved-list), [Outschool: emprendimiento](https://outschool.com/how-to-teach/kids-entrepreneurship), [Prodigies](https://prodigies.com/pages/homeschooling-with-prodigies), [TechCrunch: Outschool](https://techcrunch.com/?p=2048458)
- [KSDE: National Standards for Personal Financial Education 2021](https://www.ksde.gov/Portals/0/CSAS/CSAS%20Home/Financial%20Literacy/2021%20National%20Standards%20for%20Personal%20Financial%20Education.pdf), [CEE](https://www.councilforeconed.org/new-national-standards-for-personal-financial-education/)
- [CTV: alfabetización financiera en Ontario](https://ottawa.ctvnews.ca/here-s-what-s-being-taught-in-terms-of-financial-literacy-at-schools-in-ontario-1.6924337)
- [QCAA: cambios v9 en economía y negocios](https://www.qcaa.qld.edu.au/downloads/aciqv9/humanities-and-social-sciences/curriculum/ac9_econ_bus_summary_changes.pdf)
- [Siena: ADA Título II](https://acadtech.siena.edu/new-regulations-on-ada-title-ii-web-accessibility/)
- [Dyslexia Scotland](https://dyslexiascotland.org.uk/dyslexia-friendly-typed-formats), [Pimp my Type](https://pimpmytype.com/?p=20161)
- [vp0: guías de UI para TDAH](https://vp0.com/blogs/adhd-friendly-mobile-app-ui-guidelines), [Reichman University: TangiPlan](https://runi.ac.il/media/tdabpsrr/tangiplan-designing-an-assistive-technology-to-enhance-executive-functioning.pdf)
- [Osler: Ley 96](https://www.osler.com/?p=31884), [Localize: Ley 96 y sitios web](https://localizejs.com/articles/quebec-bill-96)
- [NSW Education: calendario 2027](https://education.nsw.gov.au/schooling/calendars/2027), [australia.com: vacaciones escolares](https://www.australia.com/en/facts-and-planning/when-to-go/australian-school-holidays.html)
- [Copyright.gov: quién puede registrar](https://copyright.gov/help/faq/faq-who.html), [Library of Congress: copyright para niños](https://blogs.loc.gov/copyright/2025/12/copyright-is-for-kids-new-resource-for-parents-teachers-and-librarians/)
- [UpCounsel: contratos con menores](https://upcounsel.com/contracts-made-by-minors-are-void)
- [Baker Donelson: Thaler v. Perlmutter](https://www.bakerdonelson.com/supreme-court-denies-certiorari-in-thaler-v-perlmutter-ai-cannot-be-an-author-under-the-copyright-act), [Jones Day](https://www.jonesday.com/de/insights/2026/03/jones-day-talks-women-in-ip--supreme-court-denies-review-of-thaler-v-perlmutter-ai-authorship-questions-remain)
- [Insureon: seguros edtech](https://insureon.com/technology-business-insurance/education-technology), [QuoteSweep: tutorías](https://www.quotesweep.com/insurance-for/tutoring), [Palomar College: requisitos de seguro](https://www.palomar.edu/ehs/wp-content/uploads/sites/298/2022/08/Certificate-Of-Insurance-Requirements.pdf)
- [Beancount: 1099-K 2026](https://beancount.io/blog/2026/05/08/form-1099-k-2026-threshold-reverts-20000-200-transactions-obbba-payment-app-reporting-guide), [CPA Practice Advisor](https://www.cpapracticeadvisor.com/2026/02/18/2026-tax-filing-and-form-1099-k-know-the-new-rules-this-tax-season/178331/)
- [Gusto: contratar a tus hijos](https://gusto.com/resources/articles/taxes/tax-benefits-hiring-children), [Keeper](https://www.keepertax.com/posts/hiring-your-kids)
- [RBC: income splitting](https://ca.rbcwealthmanagement.com/documents/132686/132706/Income+Splitting+Update+Dec+2017.pdf/b253ef43-9748-4187-92ef-e61fd4f67b43), [CRA: split income](https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/federal-government-budgets/income-sprinkling/guidance-split-income-rules-adults.html)
- [TechCrunch: guía 1.3 de Apple](https://techcrunch.com/?p=1880829), [GoodBarber: Kids Category](https://www.goodbarber.com/help/apple-rejection-r100/apple-rejection-apps-for-kids-a365/)
- [Google Play: políticas de Familias](https://support.google.com/googleplay/android-developer/answer/9893335)
- [Inside Privacy: regla final COPPA](https://www.insideprivacy.com/united-states/federal-trade-commission/ftc-adopts-final-coppa-rule/)
