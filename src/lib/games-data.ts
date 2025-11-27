import { Game } from "@/types/game"

export const GAMES_DATA: Game[] = [
  {
  id: 0,
  title: "El Autógrafo",
  type: "cooldown",
  description:
    "Dinámica social basada en el azar y el juego de cachipún para fomentar la interacción entre participantes.",
  image: "/images/games/el-autografo.jpg",
  materials: ["Hojas de cuaderno", "Lápices"],
  intensity: "Baja",
  participants: "10-40",
  recommendedAge: 12,
  objectives: [
    "Facilitar la interacción entre compañeros",
    "Promover el conocimiento interpersonal",
    "Romper el hielo en nuevos grupos"
  ],
  howToPlay:
    "Cada participante dibuja una cuadrícula de 9 espacios en su hoja y anota un número asignado en la esquina superior derecha. Luego debe buscar distintos compañeros y jugar cachipún sin repetir pareja. El perdedor escribe su nombre, carrera, pasatiempo y comida favorita en uno de los cuadrantes del ganador. La primera persona en completar los 9 cuadrantes gana.",
  rules: [
    "No se puede repetir rival en las partidas de cachipún",
    "El perdedor debe completar la información solicitada en el cuadrante",
    "Gana quien llene primero sus 9 espacios"
  ],
},
{
  id: 1,
  title: "Lotería de Nombres",
  type: "cooldown",
  description:
    "Continuación directa del juego 'El Autógrafo'. Utiliza la misma cuadrilla de 9 espacios para reforzar el conocimiento entre compañeros mediante presentaciones breves basadas en el azar.",
  image: "/images/games/loteria-de-nombres.jpg",
  materials: ["Hoja con la cuadrilla completada parcialmente del juego 'El Autógrafo'", "Lápices"],
  intensity: "Baja",
  participants: "10-40",
  recommendedAge: 12,
  objectives: [
    "Reforzar lo aprendido en 'El Autógrafo'",
    "Consolidar el conocimiento interpersonal",
    "Mejorar la atención y memoria auditiva"
  ],
  howToPlay:
    "Cada participante conserva la hoja con la cuadrilla de 9 espacios utilizada en el juego 'El Autógrafo'. El facilitador menciona números al azar. Cuando un número es llamado, la persona correspondiente debe presentarse diciendo su nombre, carrera, pasatiempo y comida favorita. Los demás jugadores completan en su cuadrilla la información del número anunciado. Gana quien logre llenar los nueve espacios antes que los demás.",
  rules: [
    "Los jugadores deben usar la misma cuadrilla del juego anterior",
    "Cada persona debe presentarse cuando su número es mencionado",
    "La información debe ser clara para que todos puedan registrarla",
    "Gana quien complete correctamente los nueve espacios"
  ],
},
{
  id: 2,
  title: "¿Cuántas Bajan?",
  type: "cooldown",
  description:
    "Juego de lógica auditiva en el que los participantes deben descubrir la regla oculta para responder correctamente según la formulación de la pregunta.",
  image: "/images/games/cuantas-bajan.jpg",
  materials: ["Ninguno"],
  intensity: "Baja",
  participants: "5-30",
  recommendedAge: 10,
  objectives: [
    "Descubrir la regla oculta del juego",
    "Mejorar la atención auditiva",
    "Fomentar el pensamiento lógico"
  ],
  howToPlay:
    "Una persona inicia el juego aplaudiendo o imitando el sonido de un rebaño caminando. Luego formula una pregunta sobre la cantidad de ovejas que bajan. La respuesta correcta depende del número de palabras utilizadas en la pregunta. Por ejemplo, ante “¿Cuántas bajan?” la respuesta correcta es 2; ante “¿Cuántas ovejas bajan?” la respuesta es 3. El objetivo de los jugadores es descubrir esta regla sin que se les explique explícitamente.",
  rules: [
    "La regla del juego no debe revelarse directamente",
    "Las preguntas deben hacerse claramente para contar sus palabras",
    "Los participantes deben intentar deducir la lógica antes de responder"
  ],
},
{
  id: 3,
  title: "Cachipún Gigante",
  type: "cooldown",
  description:
    "Versión masiva y estratégica del clásico cachipún, donde equipos completos deben coordinarse rápidamente para elegir la misma opción antes de cada ronda.",
  image: "/images/games/cachipun-gigante.jpg",
  materials: ["Ninguno"],
  intensity: "Media",
  participants: "20-60",
  recommendedAge: 8,
  objectives: [
    "Mejorar la coordinación en grupos grandes",
    "Desarrollar liderazgo dentro del equipo",
    "Fomentar la comunicación rápida y efectiva"
  ],
  howToPlay:
    "Se forman dos grandes equipos. Cada ronda, los miembros de cada equipo tienen entre 5 y 10 segundos para ponerse de acuerdo y escoger la misma opción: tijera (movimiento con las manos), papel (brazos arriba) o piedra (agacharse). Ambos equipos revelan su elección simultáneamente. Si un solo miembro de un equipo elige algo distinto, ese equipo pierde automáticamente la ronda. Gana el primer equipo en obtener cinco victorias.",
  rules: [
    "Todos los miembros del equipo deben elegir la misma opción",
    "Si alguien se equivoca, el equipo pierde automáticamente la ronda",
    "Las decisiones deben tomarse dentro del tiempo asignado",
    "Gana el primer equipo que alcance cinco rondas ganadas"
  ],
},
{
  id: 4,
  title: "Cachipún Cazador",
  type: "cooldown",
  description:
    "Versión temática y estratégica del cachipún gigante, en la que los equipos deben coordinarse para elegir entre cazador, león o escopeta, manteniendo la unanimidad dentro del grupo.",
  image: "/images/games/cachipun-cazador.jpg",
  materials: ["Ninguno"],
  intensity: "Media",
  participants: "20-60",
  recommendedAge: 8,
  objectives: [
    "Mejorar la coordinación en grupos grandes",
    "Fomentar el liderazgo y la interacción",
    "Promover la toma de decisiones colectivas bajo presión"
  ],
  howToPlay:
    "Se forman dos equipos grandes. En cada ronda, los jugadores tienen entre 5 y 10 segundos para ponerse de acuerdo y elegir todos la misma opción entre cazador, león o escopeta. Las relaciones entre opciones son: el león vence al cazador, el cazador vence a la escopeta y la escopeta vence al león. Si un solo integrante del equipo escoge algo diferente, ese equipo pierde la ronda automáticamente. El primer equipo en obtener cinco victorias se convierte en el ganador.",
  rules: [
    "Todos los miembros del equipo deben elegir la misma opción",
    "Si alguien se equivoca en la elección, la ronda se pierde automáticamente",
    "Las decisiones deben tomarse dentro del tiempo asignado",
    "Gana el primer equipo en alcanzar cinco victorias"
  ],
},
{
  id: 5,
  title: "Cachipún Suma",
  type: "cooldown",
  description:
    "Variante rápida y social del cachipún en la que los jugadores deben combinar azar, estrategia y velocidad mental para adivinar la suma total de dedos mostrados.",
  image: "/images/games/cachipun-suma.jpg",
  materials: ["Ninguno"],
  intensity: "Baja",
  participants: "2-30",
  recommendedAge: 8,
  objectives: [
    "Mejorar la velocidad de pensamiento",
    "Practicar la toma de decisiones rápidas",
    "Facilitar la interacción entre compañeros"
  ],
  howToPlay:
    "Dos jugadores se enfrentan mostrando entre 0 y 5 dedos de la mano. Al mismo tiempo dicen “cachi-” seguido de un número entre 0 y 10. Si el número dicho por un jugador coincide exactamente con la suma de los dedos que ambos muestran, ese jugador gana la ronda. Se pueden hacer múltiples rondas o rotar jugadores para conocerse más.",
  rules: [
    "Cada jugador puede mostrar entre 0 y 5 dedos",
    "El número elegido debe decirse al mismo tiempo",
    "Gana la ronda quien acierte la suma exacta",
    "Si ambos aciertan, la ronda queda empatada"
  ],
},
{
  id: 6,
  title: "Piti Piti",
  type: "cooldown",
  description:
    "Juego de atención y deducción en el que los participantes deben descubrir una regla oculta imitando correctamente una secuencia de sonidos y gestos.",
  image: "/images/games/piti-piti.jpg",
  materials: ["Ninguno"],
  intensity: "Baja",
  participants: "5-20",
  recommendedAge: 10,
  objectives: [
    "Descubrir la regla oculta del juego",
    "Mejorar la atención a detalles gestuales y auditivos",
    "Fomentar la observación y el razonamiento"
  ],
  howToPlay:
    "La persona que inicia el juego realiza la secuencia diciendo “piti piti piti piti piii, piti piii, piti piti piti pi” mientras se toca los dedos de la mano siguiendo un ritmo específico. Luego elige a otro jugador para que imite la secuencia. La clave del juego es que, además de repetir los sonidos y el patrón de dedos, el jugador debe imitar también el gesto final que hace la persona líder justo después de terminar la canción. Solo quienes descubren esta regla podrán ser validados como correctos.",
  rules: [
    "El jugador debe imitar la secuencia completa de sonidos y gestos",
    "Debe prestarse atención al gesto final, ya que es parte de la regla oculta",
    "No se debe revelar la regla a otros participantes",
    "La persona líder valida si la imitación es correcta"
  ],
},
{
  id: 7,
  title: "La Ameba (Evolución)",
  type: "cooldown",
  description:
    "Dinámica divertida y social donde los jugadores evolucionan ganando rondas de cachipún, actuando físicamente según su nivel evolutivo.",
  image: "/images/games/la-ameba-evolucion.jpg",
  materials: ["Ninguno"],
  intensity: "Media",
  participants: "10-60",
  recommendedAge: 8,
  objectives: [
    "Facilitar la interacción entre participantes",
    "Promover el uso de la mímica y expresión corporal",
    "Incorporar el azar y la toma rápida de decisiones"
  ],
  howToPlay:
    "Todos los jugadores comienzan como amebas y deben moverse o actuar como tal. Para evolucionar, deben ganar una ronda de cachipún contra otro jugador que esté en el mismo nivel evolutivo. El orden de evolución es: ameba, cangrejo, conejo, gorila, humano y finalmente avenger. Si un jugador pierde una ronda en cualquier nivel, vuelve inmediatamente a ser ameba. Al finalizar el tiempo establecido, ganan quienes hayan alcanzado la etapa de avenger.",
  rules: [
    "Solo se puede desafiar a jugadores del mismo nivel evolutivo",
    "Quien pierde una ronda vuelve automáticamente a ameba",
    "Los movimientos deben representar el nivel evolutivo correspondiente",
    "Ganan los jugadores que lleguen a avenger al finalizar el tiempo"
  ],
},
{
  id: 8,
  title: "Ata2",
  type: "main",
  description:
    "Desafío colaborativo donde dos jugadores deben resolver cómo separarse sin desatar los nudos que los mantienen conectados mediante cuerdas cruzadas.",
  image: "/images/games/ata2.jpg",
  materials: ["Dos cuerdas resistentes"],
  intensity: "Baja",
  participants: "2-20",
  recommendedAge: 12,
  objectives: [
    "Fomentar el ingenio y el pensamiento creativo",
    "Promover el trabajo en equipo",
    "Mejorar la comunicación efectiva bajo presión"
  ],
  howToPlay:
    "Dos jugadores se atan una cuerda en cada muñeca, cruzando las cuerdas entre sí para quedar conectados. El desafío consiste en lograr separarse sin deshacer los nudos ni romper las cuerdas. Para lograrlo, los jugadores deben observar, comunicarse y probar distintas formas de pasar las cuerdas por sus brazos o cuerpo hasta encontrar la solución correcta.",
  rules: [
    "No se pueden desatar los nudos de las cuerdas",
    "No se puede romper, cortar ni slackear las cuerdas",
    "Ambos jugadores deben participar activamente en la resolución",
    "El objetivo se cumple solo cuando logran separarse completamente"
  ],
},
{
  id: 9,
  title: "Juan José Bonilla",
  type: "cooldown",
  description:
    "Juego rítmico y de coordinación basado en una canción repetitiva que exige atención, memoria y reacción rápida ante palabras clave.",
  image: "/images/games/juan-jose-bonilla.jpg",
  materials: ["Ninguno"],
  intensity: "Baja",
  participants: "5-30",
  recommendedAge: 8,
  objectives: [
    "Mejorar la coordinación grupal",
    "Fortalecer la memoria auditiva",
    "Aumentar la atención y la rapidez de reacción"
  ],
  howToPlay:
    "Los participantes aprenden la canción: “Juan José Bonilla se sentó en la hornilla y empezó a gritar 'mamá mamá, qué caliente está'”. Una vez todos la recuerdan, deben cantar juntos. Cada vez que la canción diga la palabra “mamá”, todos deben levantarse o sentarse según corresponda. El ritmo y la repetición hacen que la dificultad aumente a medida que la canción avanza.",
  rules: [
    "Se debe cambiar de posición únicamente cuando la canción diga 'mamá'",
    "Quien se equivoque puede salir de la ronda o seguir fuera de puntuación según la modalidad",
    "El ritmo debe mantenerse durante la canción"
  ],
},
{
  id: 10,
  title: "Pan para Pan",
  type: "cooldown",
  description:
    "Juego rápido de atención y coordinación en el que los participantes deben reaccionar correctamente a señales visuales del director.",
  image: "/images/games/pan-para-pan.jpg",
  materials: ["Ninguno"],
  intensity: "Baja",
  participants: "5-40",
  recommendedAge: 7,
  objectives: [
    "Mejorar la atención visual",
    "Fortalecer la coordinación entre estímulo y respuesta",
    "Aumentar la concentración bajo presión"
  ],
  howToPlay:
    "El director del juego se coloca frente al grupo y realiza dos gestos posibles: levantar el puño cerrado o levantar la mano con la palma abierta. Si levanta el puño, los jugadores deben decir “pan”. Si levanta la mano abierta, deben decir “para pan”. El ritmo puede acelerarse gradualmente para aumentar la dificultad.",
  rules: [
    "Los jugadores deben responder únicamente cuando el director haga el gesto",
    "Decir 'pan' solo ante el puño cerrado",
    "Decir 'para pan' únicamente con la palma abierta",
    "Queda eliminado quien responda tarde o incorrectamente (opcional según modalidad)"
  ],
},
{
  id: 11,
  title: "1, 2, 3",
  type: "cooldown",
  description:
    "Dinámica por parejas que mezcla memoria, coordinación y creatividad reemplazando números por acciones a medida que avanza la secuencia.",
  image: "/images/games/1-2-3.jpg",
  materials: ["Ninguno"],
  intensity: "Baja",
  participants: "2-30",
  recommendedAge: 8,
  objectives: [
    "Favorecer la interacción y la comunicación",
    "Mejorar la coordinación entre dos personas",
    "Estimular la memoria y la creatividad"
  ],
  howToPlay:
    "Las parejas se miran a los ojos y cuentan alternadamente del 1 al 3, repitiendo la secuencia indefinidamente. En la segunda ronda, el número 1 se sustituye por un aplauso. En la tercera ronda, el número 3 también se sustituye por un aplauso. En la cuarta ronda, el número 2 se reemplaza por una acción libre elegida por la pareja. Gana quien logre mantener la secuencia sin equivocarse mientras los números van siendo reemplazados por gestos.",
  rules: [
    "La secuencia debe mantenerse en orden: 1, 2, 3",
    "Cada reemplazo es permanente durante la ronda",
    "Los jugadores deben mantener contacto visual durante el ejercicio",
    "Si alguien se equivoca, la pareja reinicia la secuencia"
  ],
},
{
  id: 12,
  title: "El Saludo",
  type: "cooldown",
  description:
    "Juego social y creativo en el que los participantes deben formar grupos según un número indicado y diseñar saludos originales, fortaleciendo memoria y cohesión.",
  image: "/images/games/el-saludo.jpg",
  materials: ["Ninguno"],
  intensity: "Baja",
  participants: "10-50",
  recommendedAge: 8,
  objectives: [
    "Fomentar la socialización entre participantes",
    "Estimular la creatividad grupal",
    "Mejorar la memoria a través de secuencias de movimientos"
  ],
  howToPlay:
    "Los jugadores se mueven libremente por el espacio. Cuando el director menciona un número, deben formar grupos de ese tamaño. Una vez reunidos, cada grupo se presenta entre sí e inventa un saludo compuesto por tres movimientos. Si el director repite un número ya mencionado, los participantes deben reencontrarse con su grupo original y repetir el saludo previamente creado.",
  rules: [
    "Los grupos deben formarse rápidamente según el número indicado",
    "Cada saludo debe tener exactamente tres movimientos",
    "Si se repite un número, los jugadores deben volver al mismo grupo inicial",
    "El saludo debe repetirse de manera coordinada por todos los miembros"
  ],
},
{
  id: 13,
  title: "Bitcoin",
  type: "warmup",
  description:
    "Juego dinámico de agilidad y estrategia donde los jugadores deben proteger su pañolín mientras intentan robar el de los demás para ganar bitcoins.",
  image: "/images/games/bitcoin.jpg",
  materials: ["Pañolines o cintas para cada jugador"],
  intensity: "Media",
  participants: "8-40",
  recommendedAge: 10,
  objectives: [
    "Aumentar la atención y rapidez de reacción",
    "Fomentar la agilidad física",
    "Desarrollar estrategias individuales o grupales"
  ],
  howToPlay:
    "Cada jugador se coloca un pañolín a la altura de la rodilla. El objetivo es robar pañolines de otros jugadores sin perder el propio. Cuando un jugador logra arrebatar un pañolín, obtiene un 'bitcoin' y devuelve el pañolín a su dueño para que pueda reintegrarse al juego. Se puede jugar en equipos o todos contra todos. Al finalizar el tiempo o las rondas definidas, gana quien haya acumulado más bitcoins.",
  rules: [
    "El pañolín debe colocarse siempre a la altura de la rodilla",
    "Un pañolín robado otorga un punto, pero debe devolverse al jugador original",
    "Si un jugador pierde su pañolín, debe quedarse quieto hasta recuperarlo",
    "Gana quien reúna la mayor cantidad de bitcoins"
  ],
},
{
  id: 14,
  title: "Aplauso del Torero",
  type: "cooldown",
  description:
    "Dinámica de animación y mímica donde los jugadores reaccionan con distintos gritos y celebraciones según el movimiento que el director haga con un pañolín.",
  image: "/images/games/aplauso-del-torero.jpg",
  materials: ["Pañolín"],
  intensity: "Baja",
  participants: "5-40",
  recommendedAge: 7,
  objectives: [
    "Fomentar la expresión corporal y vocal",
    "Promover la energía grupal y la animación",
    "Mejorar la atención visual a estímulos rápidos"
  ],
  howToPlay:
    "El director sostiene un pañolín y lo mueve de distintas formas. Si lo mueve hacia arriba, los jugadores deben realizar un grito específico previamente acordado. Si lo mueve hacia abajo, deben hacer un grito distinto. En el caso de que el director suelte el pañolín, todos los jugadores deben gritar y aplaudir sin parar hasta que el pañolín toque el suelo. La idea es generar energía y reacción inmediata en el grupo.",
  rules: [
    "Cada movimiento debe tener un grito asignado y distinto",
    "Los jugadores deben reaccionar inmediatamente al gesto del director",
    "Si el pañolín cae, todos deben gritar y aplaudir hasta que toque el piso",
    "El director puede variar la velocidad para aumentar la dificultad"
  ],
},
{
  id: 15,
  title: "Cuerpo a Tierra",
  type: "main",
  description:
    "Competencia por equipos que combina coordinación, comunicación y rapidez para trasladar una pelota y reorganizar la formación repetidamente.",
  image: "/images/games/cuerpo-a-tierra.jpg",
  materials: ["Pelota ligera"],
  intensity: "Alta",
  participants: "12-40",
  recommendedAge: 10,
  objectives: [
    "Fomentar la colaboración entre compañeros",
    "Mejorar la coordinación en equipo",
    "Desarrollar la comunicación en situaciones dinámicas"
  ],
  howToPlay:
    "Se forman cuatro equipos alineados en hileras. Cada equipo debe pasar una pelota por detrás, de persona en persona, hasta llegar al último integrante. Cuando este recibe la pelota, debe gritar “cuerpo a tierra”. En ese instante, todos los miembros del equipo deben lanzarse al piso en posición horizontal para que el jugador del final pueda correr hacia el frente y ocupar la primera posición. Luego repiten la secuencia pasando nuevamente la pelota hacia atrás. El proceso continúa hasta que el equipo vuelve a su formación inicial. Gana el primer equipo que complete el ciclo.",
  rules: [
    "La pelota debe pasar siempre por detrás de cada jugador",
    "Al escuchar 'cuerpo a tierra', todos deben acostarse inmediatamente",
    "El último jugador debe correr al frente solo cuando el equipo esté en el suelo",
    "Gana el equipo que complete primero la secuencia completa"
  ],
},
{
  id: 16,
  title: "Lazarillo",
  type: "main",
  description:
    "Actividad por parejas centrada en la confianza y la comunicación, donde un jugador guía al otro utilizando únicamente indicaciones verbales.",
  image: "/images/games/lazarillo.jpg",
  materials: ["Venda o pañuelo para cubrir los ojos"],
  intensity: "Baja",
  participants: "2-30",
  recommendedAge: 10,
  objectives: [
    "Desarrollar la confianza entre compañeros",
    "Mejorar la comunicación clara y efectiva",
    "Fortalecer la coordinación y orientación espacial"
  ],
  howToPlay:
    "Los participantes se agrupan en parejas. Uno de ellos se venda los ojos y queda en completa dependencia de las instrucciones verbales de su compañero. El guía debe dirigir al jugador con los ojos vendados a través de un recorrido o por el espacio, utilizando únicamente la voz y sin tocarlo en ningún momento. Después de un tiempo o al completar el recorrido, se intercambian los roles.",
  rules: [
    "El guía no puede tocar al compañero en ningún momento",
    "Las instrucciones deben ser claras, precisas y seguras",
    "El jugador con los ojos vendados debe avanzar solo cuando se sienta seguro",
    "Se recomienda un espacio libre de obstáculos peligrosos"
  ],
},
{
  id: 17,
  title: "Ordena2",
  type: "warmup",
  description:
    "Dinámica grupal donde los participantes deben agruparse u ordenarse siguiendo una consigna sin usar la voz, fomentando la comunicación no verbal y la colaboración.",
  image: "/images/games/ordena2.jpg",
  materials: ["Ninguno"],
  intensity: "Baja",
  participants: "10-50",
  recommendedAge: 10,
  objectives: [
    "Encontrar elementos en común entre los participantes",
    "Fomentar la colaboración sin comunicación verbal",
    "Promover el uso de señales y comunicación no verbal"
  ],
  howToPlay:
    "El director del juego asigna una consigna, como comuna de residencia, fecha de nacimiento o número de calzado. Los jugadores deben moverse por el espacio y agruparse u ordenarse siguiendo la consigna indicada, pero sin hablar entre ellos. Solo pueden utilizar gestos, señales u otras estrategias no verbales. Deben completar la formación antes de que se acabe el tiempo.",
  rules: [
    "Está prohibido hablar durante toda la dinámica",
    "Los jugadores deben respetar la consigna dada por el director",
    "Se debe formar el orden o grupo antes de que el tiempo termine",
    "La comunicación debe ser exclusivamente no verbal"
  ],
},
{
  id: 18,
  title: "Rescatando la Corona del Rey",
  type: "warmup",
  description:
    "Juego colaborativo y dinámico donde un grupo debe proteger al rey y su pañolín mientras un ladrón intenta robarlo, fomentando estrategia y coordinación.",
  image: "/images/games/rescatando-la-corona-del-rey.jpg",
  materials: ["Pañolín"],
  intensity: "Media",
  participants: "5-12",
  recommendedAge: 10,
  objectives: [
    "Fomentar el trabajo en equipo",
    "Mejorar la coordinación grupal",
    "Promover la participación y la rotación de roles"
  ],
  howToPlay:
    "El grupo forma un círculo de 5 o 6 jugadores. Deben escoger a un rey, quien lleva un pañolín a la altura de la rodilla, y a un ladrón, que se posiciona fuera del círculo. Todos los demás jugadores se toman de los brazos y rotan alrededor del rey para protegerlo sin soltarse. El ladrón debe intentar robar el pañolín del rey, buscando espacios entre los defensores. Tras un tiempo determinado o luego de un intento exitoso, se cambian los roles para que todos puedan ser rey y ladrón al menos una vez.",
  rules: [
    "Los jugadores del círculo no pueden soltarse de los brazos",
    "El pañolín debe permanecer visible y a la altura de la rodilla del rey",
    "El ladrón no debe empujar ni usar fuerza excesiva",
    "Los roles deben rotarse para asegurar que todos participen como rey y ladrón"
  ],
},
{
  id: 19,
  title: "10 Pases",
  type: "main",
  description:
    "Juego colaborativo de oposición en el que dos equipos compiten por encadenar diez pases seguidos sin errores para anotar puntos.",
  image: "/images/games/10-pases.jpg",
  materials: ["Balón"],
  intensity: "Media",
  participants: "10-30",
  recommendedAge: 10,
  objectives: [
    "Fomentar el trabajo en equipo",
    "Mejorar la comunicación y la coordinación grupal",
    "Desarrollar la estrategia ofensiva y defensiva"
  ],
  howToPlay:
    "Se forman dos equipos. El objetivo es realizar diez pases consecutivos entre los miembros del equipo sin que la pelota caiga al suelo ni se repita un pase hacia la misma persona que la sostuvo previamente. Si el balón cae o se devuelve al último jugador que lo recibió, el conteo se reinicia y la posesión del balón pasa automáticamente al equipo contrario. Cada vez que un equipo completa diez pases, obtiene un punto. Gana el equipo que logre más puntos al finalizar el tiempo o rondas establecidas.",
  rules: [
    "No se puede devolver el balón al último jugador que lo sostuvo",
    "Si el balón cae al piso, la posesión cambia de equipo",
    "Diez pases consecutivos equivalen a un punto",
    "Debe jugarse sin contacto físico excesivo entre equipos"
  ],
},
{
  id: 20,
  title: "Zorro, Gallina y Pollitos",
  type: "warmup",
  description:
    "Juego de persecución colaborativo en el que un zorro intenta robar el pañolín del último pollito mientras la gallina lidera y protege la fila.",
  image: "/images/games/zorro-gallina-y-pollitos.jpg",
  materials: ["Pañolín"],
  intensity: "Media",
  participants: "5-10",
  recommendedAge: 8,
  objectives: [
    "Fomentar la colaboración entre jugadores",
    "Mejorar la comunicación dentro del grupo",
    "Practicar estrategias de protección y movimiento coordinado"
  ],
  howToPlay:
    "Entre 5 o 6 jugadores se elige a un zorro y una gallina; el resto serán pollitos. Los pollitos se alinean en hilera sosteniéndose de los hombros, con la gallina al frente guiando la fila. El último pollito lleva un pañolín a la altura de la rodilla. El zorro debe intentar robar el pañolín mientras la gallina y los pollitos deben moverse coordinadamente para protegerlo. Cada ronda termina cuando el pañolín es robado o tras un tiempo definido. Luego, el último pollito pasa a ser el nuevo zorro, y el zorro pasa a ser la gallina, rotando los roles hasta que todos los jugadores hayan participado en cada uno.",
  rules: [
    "Los pollitos deben mantenerse tomados de los hombros en todo momento",
    "El pañolín debe estar visible y al nivel de la rodilla del último pollito",
    "El zorro no puede empujar ni usar fuerza excesiva",
    "Los roles deben rotarse al finalizar cada ronda"
  ],
},
{
  id: 21,
  title: "Pinta Espejo",
  type: "warmup",
  description:
    "Variante dinámica de la pinta en la que los jugadores deben congelarse en una pose al ser pintados y solo pueden liberarse cuando otro jugador imita su postura como si fuera un espejo.",
  image: "/images/games/pinta-espejo.jpg",
  materials: ["Ninguno"],
  intensity: "Alta",
  participants: "10-40",
  recommendedAge: 8,
  objectives: [
    "Fomentar la agilidad y velocidad de reacción",
    "Ejercitar la mímica y la expresión corporal",
    "Promover la colaboración y el movimiento constante"
  ],
  howToPlay:
    "El juego inicia con uno o más jugadores pintadores elegidos al azar según una característica común (por ejemplo, color de ropa, inicial del nombre o accesorios). Los pintadores persiguen al resto. Si logran tocar a alguien, ese jugador debe detenerse inmediatamente y mantener una pose fija, la que sea. Para liberarlo, otro jugador debe colocarse frente a él e imitar exactamente su pose, como un espejo. Una vez imitada la postura, ambos vuelven al juego. El rol de pintadores puede rotar después de un tiempo determinado.",
  rules: [
    "Los jugadores pintados deben mantener completamente fija su pose",
    "Para liberar a un jugador, la imitación debe ser precisa",
    "Los pintadores deben ser asignados aleatoriamente según una característica común",
    "No se permite el contacto brusco o empujones"
  ],
},
{
  id: 22,
  title: "Nudo Humano",
  type: "main",
  description:
    "Desafío grupal de ingenio y comunicación en el que los equipos deben desenredarse sin soltarse de las manos, trabajando juntos para resolver el nudo creado.",
  image: "/images/games/nudo-humano.jpg",
  materials: ["Ninguno"],
  intensity: "Media",
  participants: "16-40",
  recommendedAge: 10,
  objectives: [
    "Fomentar la colaboración dentro del equipo",
    "Desarrollar la comunicación clara y efectiva",
    "Resolver problemas grupales mediante estrategias colectivas"
  ],
  howToPlay:
    "Se conforman al menos dos equipos de 8 jugadores cada uno. Cada equipo se reúne formando un círculo y todos deben extender sus manos para tomar las de dos compañeros distintos que no estén a su lado. Esto crea un nudo humano. El objetivo del equipo es desenredar el nudo sin soltarse nunca de las manos, avanzando, retrocediendo o rotando hasta rearmar un círculo donde cada jugador quede tomado de las manos solo con las dos personas que le queden adyacentes al final. Gana el primer equipo que logre desenredarse completamente.",
  rules: [
    "Nadie puede soltarse de las manos durante el proceso",
    "No se permite pasar por encima de extremidades de forma peligrosa",
    "La comunicación debe ser verbal, clara y respetuosa",
    "El ganador es el primer equipo en formar un círculo ordenado"
  ],
},
{
  id: 23,
  title: "Pinta Mitosis",
  type: "warmup",
  description:
    "Variante colaborativa de la pinta en la que los jugadores que son pintados se unen al grupo de pintadores, dividiéndose en parejas a medida que el grupo crece, simulando un proceso de mitosis.",
  image: "/images/games/pinta-mitosis.jpg",
  materials: ["Ninguno"],
  intensity: "Alta",
  participants: "10-40",
  recommendedAge: 8,
  objectives: [
    "Fomentar la colaboración en movimiento",
    "Aumentar la agilidad y velocidad de reacción",
    "Promover la estrategia grupal en persecuciones"
  ],
  howToPlay:
    "Una persona inicia como pintador. Cuando toca a otro jugador, ambos deben tomarse de la mano y continuar pintando juntos. Si pintan a una tercera persona, se sumará al grupo, y al llegar a cuatro integrantes, el grupo debe dividirse en dos parejas que continuarán persiguiendo y pintando paralelamente. El proceso se repite cada vez que las parejas generen nuevos grupos de cuatro.",
  rules: [
    "Los pintadores deben moverse tomados de la mano hasta llegar a cuatro integrantes",
    "Al alcanzar cuatro jugadores, deben dividirse obligatoriamente en parejas",
    "No se permiten empujones ni contacto brusco",
    "Los jugadores pintados se integran inmediatamente al equipo perseguidor"
  ],
},
{
  id: 24,
  title: "Piratas del Caribe",
  type: "main",
  description:
    "Juego estratégico y cooperativo en el que equipos de cinco jugadores protegen sus pañuelos mientras su 'pirata' central intenta robar los pañuelos de otros grupos.",
  image: "/images/games/piratas-del-caribe.jpg",
  materials: ["Pañuelos para cada jugador"],
  intensity: "Alta",
  participants: "15-50",
  recommendedAge: 10,
  objectives: [
    "Mejorar la coordinación grupal",
    "Fomentar el trabajo en equipo bajo presión",
    "Desarrollar la comunicación y la estrategia colectiva"
  ],
  howToPlay:
    "El grupo total se divide en equipos de cinco personas. Cuatro jugadores forman un círculo colocando sus manos sobre los hombros o espalda de la persona que queda al centro, quien será el pirata. Todos los integrantes llevan un pañuelo visible. El equipo debe moverse coordinadamente para proteger sus pañuelos del ataque de otros equipos. Solo el pirata (la persona al centro) puede robar pañuelos de los equipos contrarios. Cuando un equipo pierde todos sus pañuelos, sus miembros deben unirse al equipo que los dejó sin ellos, fortaleciendo así al equipo rival.",
  rules: [
    "Solo el pirata puede robar pañuelos",
    "Los jugadores del círculo deben mantenerse unidos y moverse coordinadamente",
    "Los pañuelos deben permanecer visibles en todo momento",
    "Los equipos sin pañuelos deben unirse al equipo que los derrotó"
  ],
},
{
  id: 25,
  title: "Cable Eléctrico",
  type: "main",
  description:
    "Desafío colaborativo en el que los participantes deben cruzar una cuerda elevada sin tocarla, usando planificación, comunicación y apoyo mutuo.",
  image: "/images/games/cable-electrico.jpg",
  materials: ["Cuerda resistente"],
  intensity: "Media",
  participants: "10-40",
  recommendedAge: 12,
  objectives: [
    "Fomentar la planificación grupal",
    "Promover el trabajo en equipo y el liderazgo",
    "Desarrollar la comunicación efectiva y el respeto entre compañeros"
  ],
  howToPlay:
    "Se ata una cuerda de forma horizontal a una altura aproximada de 1.20 metros, simulando un 'cable eléctrico'. Todo el grupo comienza en un mismo lado. El objetivo es que todos los participantes logren pasar al otro lado sin tocar la cuerda. Para lograrlo, deben planificar una estrategia colectiva, apoyarse física y verbalmente y organizar roles según las habilidades del grupo. Se puede ayudar levantando, guiando o sosteniendo a los compañeros, siempre asegurando un entorno seguro.",
  rules: [
    "Nadie debe tocar la cuerda; si alguien la toca, todo el grupo debe reiniciar",
    "Está permitido ayudarse físicamente, siempre con cuidado y respeto",
    "El cruce debe realizarse por encima de la cuerda, nunca por debajo",
    "El objetivo se cumple cuando todos hayan cruzado exitosamente"
  ],
},
{
  id: 26,
  title: "Casa e Inquilino",
  type: "warmup",
  description:
    "Juego de atención y reacción en el que los participantes deben reorganizarse rápidamente según palabras clave dentro de una historia narrada en tiempo real.",
  image: "/images/games/casa-inquilino.jpg",
  materials: ["Ninguno"],
  intensity: "Media",
  participants: "9-50",
  recommendedAge: 8,
  objectives: [
    "Mejorar la atención auditiva",
    "Aumentar la velocidad de reacción",
    "Fomentar la creatividad a través de la narración colectiva"
  ],
  howToPlay:
    "Los jugadores se agrupan en equipos de tres. Dos personas se toman de ambas manos formando una 'casa', mientras la tercera se ubica al centro como el 'inquilino'. Una persona sin casa inicia narrando una historia. Cuando el narrador dice 'casa', todas las casas deben cambiar de inquilino. Si dice 'inquilino', todos los inquilinos deben buscar una nueva casa. Cuando se dice 'terremoto', todos los participantes —casas e inquilinos— deben reorganizarse formando nuevas combinaciones. La persona que se quede sin casa continúa la historia como nuevo narrador.",
  rules: [
    "Las casas deben mantenerse unidas de las manos en todo momento",
    "Los inquilinos deben reaccionar rápidamente al escuchar las palabras clave",
    "Ante 'terremoto', todos deben moverse y reorganizarse",
    "Quien quede sin casa se convierte en el siguiente narrador"
  ],
},
{
  id: 27,
  title: "Arram Sam Sam",
  type: "cooldown",
  description:
    "Actividad musical y coordinativa en círculo que utiliza una canción repetitiva para trabajar ritmo, atención y conexión grupal mediante gestos sincronizados.",
  image: "/images/games/arram-sam-sam.jpg",
  materials: ["Ninguno"],
  intensity: "Muy Baja",
  participants: "10-50",
  recommendedAge: 6,
  objectives: [
    "Favorecer la coordinación motriz fina",
    "Promover la relajación y volver a la calma",
    "Estimular la atención y el ritmo grupal"
  ],
  howToPlay:
    "Los jugadores forman un círculo y cantan juntos: “arram sam sam, arram sam sam, guli guli guli guli guli arram sam sam” dos veces, seguido de “arabi arabi, guli guli guli guli guli arram sam sam” también dos veces.\n\nEn la primera vuelta, cada vez que se dice “arram sam sam” cada persona toca sus pies; cuando se dice “guli guli”, se toca la cabeza; y cuando se dice “arabi”, cruza los brazos sobre el pecho.\n\nEn la segunda vuelta, cuando se dice “arram sam sam” cada persona toca los tobillos del compañero a su derecha; cuando se dice “guli guli”, toca la cabeza del compañero a su izquierda; y cuando se dice “arabi”, toca los hombros del compañero a la derecha la primera vez y los del compañero a la izquierda la segunda vez.",
  rules: [
    "Los gestos deben realizarse al ritmo de la canción",
    "Cada jugador debe coordinar sus movimientos con los compañeros cercanos",
    "El círculo debe mantenerse formado durante toda la actividad",
    "Se debe respetar el contacto suave y considerado con los compañeros"
  ],
},
{
  id: 28,
  title: "Volteando la Tortuga",
  type: "warmup",
  description:
    "Juego de activación y trabajo en equipo donde dos grupos compiten por dejar la mayor cantidad de fichas volteadas hacia su lado correspondiente en un área determinada.",
  image: "/images/games/volteando-la-tortuga.jpg",
  materials: ["Fichas, tapas plásticas o lentejas grandes"],
  intensity: "Media",
  participants: "10-40",
  recommendedAge: 7,
  objectives: [
    "Promover el trabajo en equipo",
    "Desarrollar la estrategia colectiva",
    "Mejorar la atención y rapidez de reacción"
  ],
  howToPlay:
    "Se delimita un campo de juego y se reparten por el espacio múltiples fichas o lentejas grandes, algunas con el lado 'arriba' y otras con el lado 'abajo'. Se forman dos equipos: uno debe dejar todas las fichas mirando hacia arriba y el otro debe dejarlas mirando hacia abajo. A la señal inicial, ambos equipos comienzan a moverse por el campo volteando tantas fichas como puedan según su objetivo. La dinámica continúa por un tiempo determinado.",
  rules: [
    "Los jugadores solo pueden voltear una ficha a la vez",
    "No se permite bloquear físicamente a los oponentes",
    "Gana el equipo que finaliza con más fichas alineadas a su lado correspondiente",
    "Debe respetarse el límite del campo de juego"
  ],
},
{
  id: 29,
  title: "Cachipún Alemán y Variantes",
  type: "main",
  description:
    "Competencia por equipos en la que representantes deben avanzar por un recorrido y enfrentarse en cachipún cuando se encuentran, combinando azar, atención y comunicación estratégica.",
  image: "/images/games/cachipun-aleman.jpg",
  materials: ["Ninguno", "Vasos con agua (para variante opcional)"],
  intensity: "Alta",
  participants: "10-40",
  recommendedAge: 9,
  objectives: [
    "Fortalecer la comunicación dentro del equipo",
    "Trabajar la toma rápida de decisiones",
    "Estimular la atención y la estrategia en competencia"
  ],
  howToPlay:
    "Se forman dos equipos que se ubican en extremos opuestos del campo. Cada equipo envía a un representante para recorrer un perímetro predeterminado. Cuando dos jugadores se encuentran en el trayecto, deben jugar una partida de cachipún. Quien gane continúa avanzando hacia la base del equipo contrario; quien pierda debe regresar a su punto de inicio para que un nuevo representante lo reemplace. Cada vez que un jugador logra completar el recorrido y llegar a la base contraria, su equipo obtiene un punto.",
  rules: [
    "Solo un jugador por equipo puede estar recorriendo el perímetro a la vez",
    "Si un jugador pierde el cachipún, debe regresar inmediatamente al inicio",
    "Se obtiene un punto cada vez que un jugador completa el recorrido",
    "Gana el equipo con más puntos al finalizar el tiempo o rondas"
  ]
},
{
  id: 30,
  title: "Hay un Hoyo en el Fondo de la Mar",
  type: "cooldown",
  description:
    "Juego musical y de memoria acumulativa en el que los participantes deben cantar en círculo mientras incorporan nuevas palabras y mímicas en cada repetición.",
  image: "/images/games/hay-un-hoyo-en-el-fondo-de-la-mar.jpg",
  materials: ["Ninguno"],
  intensity: "Baja",
  participants: "10-50",
  recommendedAge: 8,
  objectives: [
    "Ejercitar la memoria secuencial",
    "Mejorar la coordinación a través de mímicas repetitivas",
    "Fomentar la atención y el ritmo grupal"
  ],
  howToPlay:
    "Los jugadores forman un círculo y cantan: “Hay un hoyo en el fondo de la mar *clap clap*” dos veces, seguido de “Hay un hoyo, hay un hoyo, hay un hoyo en el fondo de la mar *clap clap*”. En cada vuelta se agrega un nuevo elemento al verso principal, formando una cadena acumulativa, por ejemplo: “Hay una abeja en la flor en el pañuelo en el clavo en el palo en el hoyo en el fondo de la mar”. Con cada elemento nuevo se realiza una mímica asignada, que debe repetirse en orden cada vez que aparece en la canción.",
  rules: [
    "Cada nueva palabra agregada debe incluir una mímica correspondiente",
    "Todos los jugadores deben realizar las mímicas en el orden acumulado",
    "No se debe romper el ritmo de la canción",
    "Quien se equivoque en la secuencia puede reiniciar o quedar fuera, según la modalidad"
  ],
},
{
  id: 31,
  title: "Aplauso del Tren",
  type: "cooldown",
  description:
    "Dinámica rítmica y celebratoria en la que los jugadores siguen las señales del profesor para coordinar aplausos y sonidos propios de una locomotora.",
  image: "/images/games/aplauso-del-tren.jpg",
  materials: ["Ninguno"],
  intensity: "Baja",
  participants: "10-50",
  recommendedAge: 7,
  objectives: [
    "Fomentar la coordinación grupal",
    "Desarrollar expresión corporal y vocal",
    "Promover la atención y la sincronización entre grupos"
  ],
  howToPlay:
    "El profesor guía la actividad mostrando distintos gestos que los jugadores deben imitar. Al bajar el brazo, todos deben realizar un aplauso. Al pisar el suelo con fuerza, deben hacer un sonido de vapor: “pshhh”. Y al hacer el gesto de tirar una palanca, deben imitar el sonido de una locomotora: “wu wuu”. El espacio se divide en dos mitades, y cada gesto se indicará hacia una dirección específica que solo una mitad de la sala debe seguir, obligando a todos a mantener la atención y coordinarse según su lado.",
  rules: [
    "Cada gesto debe acompañarse del sonido correspondiente",
    "Solo la mitad indicada de la sala debe realizar el gesto",
    "Los jugadores deben mantenerse atentos a las direcciones del profesor",
    "No se debe adelantar ni retrasar los movimientos respecto al grupo"
  ],
},
{
  id: 32,
  title: "Toque y Fama",
  type: "main",
  description:
    "Juego de deducción y estrategia por parejas en el que los participantes deben descubrir una cifra secreta utilizando razonamiento lógico basado en toques y famas.",
  image: "/images/games/toque-y-fama.jpg",
  materials: ["Papel y lápiz"],
  intensity: "Baja",
  participants: "2-20",
  recommendedAge: 10,
  objectives: [
    "Estimular el razonamiento matemático",
    "Promover la estrategia y la deducción lógica",
    "Fomentar la socialización mediante el juego en parejas"
  ],
  howToPlay:
    "En parejas, un jugador piensa una cifra secreta compuesta por una cantidad fija de dígitos, todos distintos entre sí. El otro jugador debe intentar adivinarla proponiendo números. Cada intento recibe dos tipos de pistas: 'fama', cuando un dígito es correcto y está en la posición adecuada; y 'toque', cuando un dígito está presente en la cifra pero en otra posición. Con esta información, el jugador debe deducir la combinación correcta. Gana quien descubra la cifra en menos intentos.",
  rules: [
    "La cifra secreta no puede tener dígitos repetidos",
    "Cada respuesta debe indicar claramente los toques y famas obtenidos",
    "Solo se consideran válidos los dígitos en el rango asignado por la pareja",
    "Gana quien adivine la cifra primero o en menos intentos"
  ],
},
{
  id: 33,
  title: "La Cajita Musical",
  type: "cooldown",
  description:
    "Juego de deducción en el que los participantes deben descubrir una regla oculta relacionada con nombres de objetos que 'caben' o 'no caben' en una cajita musical.",
  image: "/images/games/la-cajita-musical.jpg",
  materials: ["Ninguno"],
  intensity: "Baja",
  participants: "5-30",
  recommendedAge: 10,
  objectives: [
    "Mejorar la atención auditiva",
    "Estimular la deducción lógica",
    "Fomentar la participación activa en grupo"
  ],
  howToPlay:
    "El director del juego dice distintos objetos o palabras indicando si 'caben' o 'no caben' en la cajita musical. Los jugadores deben hacer preguntas sugiriendo nuevas palabras para intentar descubrir la regla. La clave es que solo caben palabras que comienzan con alguna de las sílabas musicales: 'do', 're', 'mi', 'fa', 'sol', 'la' o 'si'. El jugador gana si logra deducir correctamente esta regla sin que se le revele explícitamente.",
  rules: [
    "El director debe ser consistente al aceptar o rechazar palabras según la regla",
    "Los jugadores pueden sugerir tantas palabras como deseen",
    "No se puede revelar la regla directamente",
    "Gana quien descubra que solo caben palabras que comienzan con sílabas musicales"
  ],
},
{
  id: 34,
  title: "Cine",
  type: "cooldown",
  description:
    "Juego de deducción en el que los participantes deben descubrir una regla oculta basada en qué palabras pueden o no 'entrar al cine', prestando atención a patrones lingüísticos.",
  image: "/images/games/cine.jpg",
  materials: ["Ninguno"],
  intensity: "Baja",
  participants: "5-30",
  recommendedAge: 10,
  objectives: [
    "Estimular la atención y el análisis lingüístico",
    "Desarrollar habilidades de deducción lógica",
    "Fomentar la participación activa del grupo"
  ],
  howToPlay:
    "El director del juego menciona palabras y dice si pueden o no entrar al cine. Los jugadores deben sugerir nuevas palabras para intentar identificar el patrón. La regla oculta es que solo pueden entrar al cine palabras que no contengan la letra 'e'. El objetivo de los jugadores es descubrir esta condición sin que se les revele directamente.",
  rules: [
    "El director debe ser coherente con la regla en todas las respuestas",
    "Los jugadores pueden proponer tantas palabras como deseen",
    "No se debe revelar la regla explícitamente",
    "Gana quien descubra que solo ingresan palabras sin la letra 'e'"
  ],
},
{
  id: 35,
  title: "Nadie Sabe para Quién Trabaja",
  type: "warmup",
  description:
    "Juego de activación donde los participantes deben reaccionar rápido para evitar ser quemados por una pelota, combinando atención, estrategia y agilidad.",
  image: "/images/games/nadie-sabe-para-quien-trabaja.jpg",
  materials: ["Pelota ligera"],
  intensity: "Media",
  participants: "8-40",
  recommendedAge: 8,
  objectives: [
    "Mejorar la atención y rapidez de reacción",
    "Fomentar la estrategia individual",
    "Aumentar la agilidad y el movimiento constante"
  ],
  howToPlay:
    "El juego inicia lanzando una pelota al aire. La primera persona que la toma se convierte en quien pinta y debe lanzar la pelota intentando que toque el suelo cerca de otro jugador para quemarlo. Si alguien es quemado, debe sentarse en el lugar donde fue alcanzado. Sin embargo, puede reincorporarse al juego si logra atrapar una pelota desde su posición sentada. La dinámica continúa hasta que quede una sola persona en pie.",
  rules: [
    "El pintador debe lanzar la pelota al suelo, no directamente al cuerpo del jugador",
    "Una persona quemada debe permanecer sentada hasta atrapar una pelota",
    "No se permite contacto brusco ni bloquear físicamente",
    "Gana el último jugador que quede en pie"
  ],
},
{
  id: 36,
  title: "Nunca de a Tres",
  type: "warmup",
  description:
    "Juego estratégico de atención y reacción donde las parejas deben mantenerse organizadas, evitando que se formen tríos y adaptándose al cambio constante de roles en la pinta.",
  image: "/images/games/nunca-de-a-tres.jpg",
  materials: ["Ninguno"],
  intensity: "Media",
  participants: "6-30",
  recommendedAge: 9,
  objectives: [
    "Mejorar la atención y lectura del entorno",
    "Desarrollar estrategia en movimiento",
    "Favorecer la rapidez de reacción y toma de decisiones"
  ],
  howToPlay:
    "Se forman parejas, una persona al lado de la otra. Una tercera persona comienza como pintador y debe intentar tocar a cualquiera para intercambiar roles: si pinta a alguien, ese jugador pasa a ser el nuevo pintador y el anterior debe escapar. Si un jugador que no está pintando se posiciona al lado de una pareja, formando un trío, el integrante que queda en el extremo opuesto pasa inmediatamente a ser el nuevo pintador y debe perseguir al pintador anterior, quien ahora debe huir. El objetivo es evitar quedar en una posición que forme grupos de tres.",
  rules: [
    "Las parejas deben mantenerse siempre de a dos; nunca puede haber tres juntos",
    "Si se forma un trío, el jugador del extremo contrario se convierte en pintador",
    "Quien es pintado intercambia roles con el pintador de inmediato",
    "No se permite contacto brusco ni bloqueos físicos"
  ],
},
{
  id: 37,
  title: "Colpbol",
  type: "main",
  description:
    "Juego colectivo y dinámico en el que dos equipos compiten por anotar goles usando únicamente golpes rápidos con la palma de la mano, favoreciendo la coordinación y la colaboración.",
  image: "/images/games/colpbol.jpg",
  materials: ["Balón ligero", "Arcos o conos para delimitar porterías"],
  intensity: "Alta",
  participants: "10-30",
  recommendedAge: 10,
  objectives: [
    "Fomentar la coordinación motriz",
    "Promover el trabajo colaborativo",
    "Mejorar la toma de decisiones rápidas en equipo"
  ],
  howToPlay:
    "El grupo se divide en dos equipos que deben intentar marcar goles en el arco contrario. La pelota solo puede ser golpeada con la palma de la mano y ningún jugador puede golpearla dos veces consecutivas. Esto obliga a mantener pases constantes y movimientos coordinados entre los miembros del mismo equipo. El juego continúa durante un tiempo determinado o hasta alcanzar una cantidad acordada de goles.",
  rules: [
    "La pelota solo puede tocarse con la palma de la mano",
    "Ningún jugador puede golpear la pelota dos veces seguidas",
    "No se permite contacto físico excesivo",
    "Gana el equipo que anote más goles en el tiempo establecido"
  ],
},
{
  id: 38,
  title: "Amitzy Chami Chami",
  type: "cooldown",
  description:
    "Juego musical y coordinativo en círculo donde los participantes cantan una melodía repetitiva mientras realizan movimientos progresivamente más complejos siguiendo indicaciones corporales específicas.",
  image: "/images/games/amitzy-chami-chami.jpg",
  materials: ["Ninguno"],
  intensity: "Media",
  participants: "10-50",
  recommendedAge: 8,
  objectives: [
    "Mejorar la coordinación motriz",
    "Fomentar la atención al ritmo y a instrucciones corporales",
    "Promover la cohesión grupal mediante dinámicas musicales"
  ],
  howToPlay:
    "Los participantes forman un círculo y aprenden la canción: “Amitzy Chami Chami, e le petit Tivo tivo /: – E le petit Tivooo – Tivo tivo tivo – – E le petit Tivooo – Tivo tivo tivo”. Primero la cantan sin movimientos.\n\nEn la segunda vuelta, cada vez que suena “tivo tivo”, todos deben caminar cruzando las piernas alternadamente en sentido antihorario y luego horario.\n\nPosteriormente, la canción se repite mientras todos mantienen los codos entrelazados con los compañeros.\n\nEn la siguiente repetición, los jugadores deben tomarse de las orejas de las personas a su lado, sin romper el círculo.\n\nLuego, la canción se canta tomando las rodillas del compañero a la derecha.\n\nFinalmente, se repite una última vez, pero esta vez los participantes deben tomarse los tobillos del compañero a la derecha, manteniendo el ritmo y la coordinación.",
  rules: [
    "El círculo debe mantenerse unido durante toda la actividad",
    "Los movimientos deben realizarse al ritmo del canto",
    "Cada cambio de contacto (codos, orejas, rodillas, tobillos) debe respetarse por completo",
    "Se debe evitar tirar o ejercer fuerza excesiva sobre los compañeros"
  ],
},
{
  id: 39,
  title: "Kahoot!",
  type: "main",
  description:
    "Juego de preguntas y respuestas proyectadas en pantalla donde los participantes compiten por responder correctamente y con la mayor rapidez posible para acumular puntos.",
  image: "/images/games/kahoot.jpg",
  materials: ["Proyector o pantalla", "Dispositivos móviles con acceso a internet"],
  intensity: "Baja",
  participants: "5-100",
  recommendedAge: 10,
  objectives: [
    "Reforzar contenidos previos del curso",
    "Fomentar la rapidez de pensamiento",
    "Motivar la participación activa mediante competencia sana"
  ],
  howToPlay:
    "Se proyectan en pantalla 25 preguntas, que pueden estar relacionadas o no con contenidos del curso. Cada participante responde desde su dispositivo móvil. Responder correctamente otorga puntos, y hacerlo más rápido incrementa la puntuación obtenida. Tras cada pregunta se muestra un ranking actualizado. Al finalizar, gana la persona que haya acumulado la mayor cantidad de puntos.",
  rules: [
    "Cada participante debe usar un solo dispositivo",
    "Responder correctamente y rápido otorga más puntos",
    "No se puede cambiar de respuesta una vez enviada",
    "Gana quien tenga el puntaje más alto al finalizar las 25 preguntas"
  ],
},
{
  id: 40,
  title: "Hospital",
  type: "warmup",
  description:
    "Variante colaborativa de la pinta donde los jugadores deben rescatar a sus compañeros pintados formando ambulancias de cuatro personas para trasladarlos a un extremo seguro del campo.",
  image: "/images/games/hospital.jpg",
  materials: ["Ninguno"],
  intensity: "Media",
  participants: "10-50",
  recommendedAge: 10,
  objectives: [
    "Fomentar el trabajo en equipo",
    "Mejorar la atención al entorno",
    "Promover la colaboración y la coordinación grupal"
  ],
  howToPlay:
    "El juego funciona como una variante de la pinta tradicional. Cuando un jugador es pintado, debe recostarse inmediatamente en el suelo y permanecer inmóvil. Para salvarlo, cuatro compañeros deben reunirse para formar una 'ambulancia', tomando posiciones alrededor del jugador caído y trasladándolo cuidadosamente hacia uno de los extremos del área de juego. Una vez allí, el jugador rescatado puede reintegrarse. El juego continúa mientras unos intentan sobrevivir y otros buscan pintar a todos.",
  rules: [
    "Quien es pintado debe recostarse en el suelo sin moverse",
    "Las ambulancias deben formarse con exactamente cuatro jugadores",
    "El traslado debe hacerse con cuidado y sin correr",
    "El objetivo es sobrevivir el mayor tiempo posible o pintar a todos los jugadores"
  ],
},
{
  id: 41,
  title: "Ferrocarril",
  type: "main",
  description:
    "Competencia rápida y dinámica donde jugadores numerados deben reaccionar con agilidad al escuchar su número, correr por un circuito específico y regresar antes que su oponente.",
  image: "/images/games/ferrocarril.jpg",
  materials: ["Ninguno"],
  intensity: "Alta",
  participants: "10-40",
  recommendedAge: 8,
  objectives: [
    "Mejorar la atención auditiva",
    "Fomentar la velocidad y agilidad",
    "Promover la competencia sana entre equipos"
  ],
  howToPlay:
    "Se forman dos equipos y a cada miembro se le asigna un número. Luego, ambos equipos se sientan en el suelo con las piernas extendidas hacia adelante, enfrentando directamente a su contrincante del número correspondiente, formando un 'ferrocarril'. Cuando el profesor grita un número, los dos jugadores asignados deben levantarse y realizar un recorrido: salir desde el centro, rodear por fuera a todos los participantes y regresar al lugar inicial entrando por dentro del ferrocarril. El primero en volver obtiene un punto para su equipo.",
  rules: [
    "Cada jugador debe permanecer sentado hasta que escuche su número",
    "El recorrido debe realizarse exactamente por el circuito indicado: salir por el centro, rodear por fuera y regresar por dentro",
    "No se puede obstaculizar ni empujar al contrincante",
    "Gana el equipo con más puntos al finalizar las rondas"
  ],
},
{
  id: 42,
  title: "Bomba",
  type: "main",
  description:
    "Variante del juego Ferrocarril donde los jugadores deben completar un relevo secuencial, activando al siguiente compañero al regresar y sentarse en su posición.",
  image: "/images/games/bomba.jpg",
  materials: ["Ninguno"],
  intensity: "Alta",
  participants: "10-40",
  recommendedAge: 8,
  objectives: [
    "Mejorar la atención y velocidad de reacción",
    "Fomentar la agilidad y el desplazamiento rápido",
    "Desarrollar el trabajo en equipo mediante relevos"
  ],
  howToPlay:
    "Se forman dos equipos y se organizan igual que en el Ferrocarril, sentados con las piernas extendidas frente a su contrincante. En esta variante, parte el jugador ubicado más adelante en la fila. Debe levantarse, realizar el recorrido alrededor de los jugadores y volver a su posición. Una vez regresa, debe sentarse mirando a su compañero directo y darle una señal clara para que éste salga a realizar su turno. El relevo continúa hasta que todos los integrantes completen el recorrido. Gana el equipo que termine primero.",
  rules: [
    "El siguiente jugador solo puede salir cuando su compañero haya regresado y dado la señal",
    "El recorrido debe completarse siguiendo la misma ruta que en Ferrocarril",
    "No se permite obstruir ni empujar al oponente",
    "Gana el equipo que finalice antes todos los relevos"
  ],
},
{
  id: 43,
  title: "Protegiendo el Castillo",
  type: "main",
  description:
    "Variante estratégica del juego 'Naciones' que incorpora la figura del escudero y una torre que debe ser protegida a toda costa, combinando defensa, ataque y trabajo en equipo.",
  image: "/images/games/protegiendo-el-castillo.jpg",
  materials: ["Conos, pelotas ligeras o elementos para representar la torre"],
  intensity: "Media",
  participants: "10-40",
  recommendedAge: 10,
  objectives: [
    "Fomentar la estrategia colectiva",
    "Mejorar la atención a múltiples estímulos",
    "Promover la colaboración y los roles complementarios dentro del equipo"
  ],
  howToPlay:
    "El juego se basa en la dinámica de 'Naciones', donde los equipos deben eliminar a los jugadores rivales. En esta variante, cada equipo cuenta con un escudero cuya función es proteger y revivir a sus compañeros tocándolos o realizando la acción acordada. Además, cada equipo posee una torre ubicada en su territorio. Si esta torre es derribada de cualquier forma —por un lanzamiento, un choque o un error propio— el equipo pierde automáticamente. Esto obliga a equilibrar ataque, defensa y la protección constante del castillo.",
  rules: [
    "La torre debe permanecer en pie durante todo el juego; si cae, el equipo pierde",
    "El escudero puede revivir o proteger a sus compañeros según las reglas acordadas",
    "No se permite contacto físico brusco ni movimientos peligrosos",
    "El juego puede terminar al derribar la torre o al eliminar a todo el equipo contrario"
  ],
},
{
  id: 44,
  title: "Aplauso del Gaucho",
  type: "cooldown",
  description:
    "Secuencia rítmica sencilla y coordinada que combina palmas, movimientos de piernas, talones y un cierre energético para disminuir agitaciones y finalizar la jornada.",
  image: "/images/games/aplauso-del-gaucho.jpg",
  materials: ["Ninguno"],
  intensity: "Muy Baja",
  participants: "5-50",
  recommendedAge: 6,
  objectives: [
    "Bajar la energía y regular la activación del grupo",
    "Mejorar la coordinación mediante una secuencia rítmica",
    "Cerrar la actividad con un gesto grupal entretenido"
  ],
  howToPlay:
    "Los participantes forman un semicírculo o círculo. El guía enseña una secuencia rítmica que mezcla diferentes gestos: palmas al frente, golpes suaves en las piernas, toques de talón y un paso hacia adelante. La secuencia termina con un '¡Hey!' fuerte y sincronizado. La idea es repetir el patrón varias veces, bajando progresivamente la velocidad e intensidad para volver a la calma.",
  rules: [
    "La secuencia debe realizarse en el orden enseñado",
    "Los movimientos deben ser suaves y controlados",
    "El grupo debe intentar sincronizar el '¡Hey!' final",
    "Se repite la secuencia hasta lograr un cierre tranquilo"
  ],
},
{
  id: 45,
  title: "Ratonera",
  type: "main",
  description:
    "Juego tradicional chileno de precisión en el que los participantes lanzan bolitas hacia una caja con orificios que otorgan distintos puntajes.",
  image: "/images/games/ratonera.jpg",
  materials: ["Bolitas", "Caja con hoyos numerados"],
  intensity: "Baja",
  participants: "1-20",
  recommendedAge: 7,
  objectives: [
    "Conocer y valorar juegos tradicionales chilenos",
    "Desarrollar la precisión y el control motor fino",
    "Fomentar la concentración y la planificación del lanzamiento"
  ],
  howToPlay:
    "Se coloca en el suelo una caja con varios orificios, cada uno con un puntaje asignado. Cada jugador recibe cuatro bolitas y debe lanzarlas intentando que entren en los hoyos de mayor valor. Se puede jugar por turnos o por rondas. Al finalizar los lanzamientos, se suman los puntajes obtenidos y gana quien logre la mayor cantidad de puntos.",
  rules: [
    "Cada jugador dispone de cuatro bolitas por ronda",
    "Los lanzamientos deben hacerse desde una línea establecida",
    "No se puede mover la caja ni interferir con los lanzamientos de otros",
    "Gana quien obtenga el puntaje más alto al finalizar las rondas"
  ],
},
{
  id: 46,
  title: "Carrera a Tres Piernas",
  type: "main",
  description:
    "Clásico juego tradicional chileno en el que parejas deben coordinarse para correr unidas por una de sus piernas, combinando equilibrio, comunicación y trabajo en equipo.",
  image: "/images/games/carrera-a-tres-piernas.jpg",
  materials: ["Cinturón, cuerda o pañolín para amarrar piernas"],
  intensity: "Media",
  participants: "4-20",
  recommendedAge: 8,
  objectives: [
    "Promover la coordinación motora en pareja",
    "Fomentar la colaboración y la comunicación",
    "Difundir y valorar juegos tradicionales chilenos"
  ],
  howToPlay:
    "Se forman parejas y se les amarra con un cinturón, cuerda o pañolín las dos piernas internas, de modo que deban moverse como si fueran un solo cuerpo. A la señal de inicio, las parejas deben correr por un circuito o distancia definida, manteniendo el equilibrio y coordinando sus pasos. Gana la pareja que complete el recorrido en el menor tiempo posible.",
  rules: [
    "Las parejas deben mantener sus piernas unidas durante toda la carrera",
    "No se permite soltarse o desamarrar el lazo en ningún momento",
    "Debe respetarse el circuito establecido sin tomar atajos",
    "Gana la pareja que llegue primero sin infringir las reglas"
  ],
},
{
  id: 47,
  title: "Carrera de Zancos",
  type: "main",
  description:
    "Competencia tradicional chilena en la que los jugadores deben recorrer una distancia utilizando zancos, poniendo a prueba su equilibrio, coordinación y velocidad.",
  image: "/images/games/carrera-de-zancos.jpg",
  materials: ["Zancos tradicionales"],
  intensity: "Media",
  participants: "2-20",
  recommendedAge: 10,
  objectives: [
    "Desarrollar la coordinación motora y el equilibrio",
    "Promover la valoración de juegos tradicionales chilenos",
    "Fomentar la concentración y la precisión en el desplazamiento"
  ],
  howToPlay:
    "Dos jugadores se colocan sobre zancos tradicionales y se posicionan en la línea de partida. A la señal, deben avanzar por el circuito designado sin caerse, manteniendo el equilibrio mientras coordinan sus pasos sobre los zancos. La carrera puede hacerse en recto o incluir curvas según el espacio disponible. Gana el jugador que complete el recorrido en el menor tiempo posible.",
  rules: [
    "El jugador debe permanecer sobre los zancos durante todo el recorrido",
    "Si alguien cae, debe volver al punto donde perdió el equilibrio",
    "No se permite empujar ni interferir con el oponente",
    "Gana quien complete el recorrido más rápido respetando las reglas"
  ],
},
{
  id: 48,
  title: "Pesca Milagrosa",
  type: "main",
  description:
    "Juego tradicional chileno de motricidad fina en el que los participantes deben pescar objetos con una caña desde una piscina pequeña, desarrollando precisión y control.",
  image: "/images/games/pesca-milagrosa.jpg",
  materials: ["Caña de pescar infantil", "Latas, peces de madera o figuras imantadas", "Piscina pequeña o contenedor"],
  intensity: "Baja",
  participants: "1-15",
  recommendedAge: 6,
  objectives: [
    "Desarrollar la motricidad fina",
    "Fomentar la concentración y la precisión",
    "Conocer y valorar juegos tradicionales chilenos"
  ],
  howToPlay:
    "Cada jugador recibe una caña de pescar infantil, usualmente con un gancho o imán en la punta. En una piscina pequeña o contenedor se disponen latas decoradas, peces de madera u otros objetos que puedan engancharse. El objetivo es sacar la mayor cantidad de elementos posible o completar todos los que se indiquen. Se puede jugar por turnos, por tiempo o hasta que un jugador logre pescar todos los objetos asignados.",
  rules: [
    "El jugador solo puede usar la caña para extraer los objetos",
    "No se permite inclinar la piscina o usar las manos para ayudar",
    "Se puede establecer un límite de tiempo por turno",
    "Gana quien pesque más objetos o quien complete la consigna primero"
  ],
},
{
  id: 49,
  title: "Juego de las Argollas",
  type: "main",
  description:
    "Juego tradicional de precisión en el que los participantes deben lanzar argollas intentando hacerlas caer sobre botellas, desarrollando puntería y control.",
  image: "/images/games/juego-de-las-argollas.jpg",
  materials: ["Argollas", "Botellas de vidrio o plástico"],
  intensity: "Baja",
  participants: "1-20",
  recommendedAge: 6,
  objectives: [
    "Desarrollar la precisión y la motricidad fina",
    "Promover la concentración y puntería",
    "Conocer y valorar juegos tradicionales chilenos"
  ],
  howToPlay:
    "Cada jugador recibe un número determinado de argollas. Frente a ellos se colocan varias botellas alineadas o distribuidas en un área delimitada. Desde una distancia establecida, el jugador debe lanzar las argollas intentando hacerlas caer alrededor del cuello de las botellas. Se puede jugar por rondas, turnos o con límite de tiempo. Gana quien logre acertar más argollas o cumpla la consigna definida.",
  rules: [
    "Los lanzamientos deben realizarse desde detrás de la línea marcada",
    "No se permite acercarse a las botellas durante la ronda",
    "Las argollas solo cuentan si quedan rodeando el cuello de la botella",
    "Gana quien obtenga más aciertos o complete el objetivo antes"
  ],
},
{
  id: 50,
  title: "Rayuela",
  type: "main",
  description:
    "Tradicional juego chileno de precisión en el que los jugadores lanzan tejos hacia un cajón con barro intentando acertar a la lienza o quedar lo más cerca posible de ella.",
  image: "/images/games/rayuela.jpg",
  materials: ["Tejos de metal", "Cajón con barro", "Lienza al centro del cajón"],
  intensity: "Baja",
  participants: "2-10",
  recommendedAge: 12,
  objectives: [
    "Desarrollar la precisión y control en el lanzamiento",
    "Promover la concentración y el cálculo de distancia",
    "Valorar juegos tradicionales chilenos"
  ],
  howToPlay:
    "Dos jugadores se colocan frente al cajón con barro donde una lienza divide el centro. Cada jugador recibe un tejo de metal y lo lanza intentando que caiga exactamente sobre la lienza, lo que se conoce como 'punto quemado'. Si ninguno acierta, la ronda la gana el jugador cuyo tejo quede más cerca de la lienza. Se puede jugar por rondas o hasta alcanzar un puntaje determinado.",
  rules: [
    "Los lanzamientos deben hacerse desde una distancia establecida",
    "El tejo que caiga sobre la lienza obtiene un 'punto quemado' y gana la ronda automáticamente",
    "Si nadie acierta, gana el tejo que quede más cerca de la lienza",
    "No se puede mover ni alterar el cajón de barro durante la partida"
  ],
},
{
  id: 51,
  title: "La Bala",
  type: "main",
  description:
    "Juego tradicional chileno de puntería en el que los jugadores deben derribar una pirámide de latas utilizando una pelota en un máximo de dos lanzamientos.",
  image: "/images/games/la-bala.jpg",
  materials: ["Pelota", "Latas apiladas en forma de pirámide"],
  intensity: "Baja",
  participants: "1-20",
  recommendedAge: 6,
  objectives: [
    "Desarrollar la precisión y fuerza controlada en el lanzamiento",
    "Promover la concentración",
    "Conocer y practicar juegos tradicionales chilenos"
  ],
  howToPlay:
    "Se arma una pirámide con seis o más latas. Cada jugador recibe una pelota y tiene dos oportunidades para lanzarla desde una distancia establecida. El objetivo es derribar todas las latas en cualquiera de los dos lanzamientos. Si lo logra, gana un premio o punto, según la modalidad del juego.",
  rules: [
    "Los lanzamientos deben hacerse desde detrás de la línea marcada",
    "Cada jugador solo dispone de dos intentos por ronda",
    "Las latas deben colocarse de la misma forma al reiniciar cada turno",
    "El jugador gana solo si derriba la totalidad de las latas"
  ],
},
{
  id: 52,
  title: "Emboque",
  type: "main",
  description:
    "Juego tradicional chileno de precisión en el que los participantes deben lanzar un cono unido a un palo e intentar que este caiga exactamente encajado en el extremo.",
  image: "/images/games/emboque.jpg",
  materials: ["Emboque tradicional o cono hecho con la punta de una botella plástica y un palo"],
  intensity: "Baja",
  participants: "1-20",
  recommendedAge: 7,
  objectives: [
    "Desarrollar la precisión y el control motor fino",
    "Fomentar la perseverancia y concentración",
    "Valorar prácticas y juegos tradicionales chilenos"
  ],
  howToPlay:
    "El jugador sostiene el palo del emboque con una mano, mientras el cono cóncavo —atado por una cuerda— cuelga hacia abajo. El objetivo es lanzar el cono hacia arriba con un movimiento controlado y lograr que el palo se inserte en el agujero del cono al caer. Se puede jugar por turnos, por cantidad de intentos o por lograr la mayor cantidad de embokes consecutivos.",
  rules: [
    "El cono debe ser lanzado únicamente mediante el movimiento del palo",
    "No se permite usar la otra mano para acomodar el cono",
    "Cada jugador dispone del número de intentos acordados",
    "Gana quien logre más embokes o cumpla la consigna establecida"
  ],
},
{
  id: 53,
  title: "Los Cañoneros",
  type: "warmup",
  description:
    "Juego de persecución con pelota en el que un grupo de jugadores debe ‘pintar’ al resto mediante lanzamientos precisos, formando un equipo cada vez mayor a medida que avanzan las rondas.",
  image: "/images/games/los-canoneros.jpg",
  materials: ["Pelotas ligeras"],
  intensity: "Media",
  participants: "8-40",
  recommendedAge: 10,
  objectives: [
    "Mejorar la coordinación física y la puntería",
    "Fomentar la comunicación entre compañeros",
    "Desarrollar estrategias de equipo para rodear y pintar a los demás"
  ],
  howToPlay:
    "El juego comienza con un par de jugadores que son los pintadores. Cada uno tiene una pelota y debe lanzarla intentando tocar a cualquiera del grupo que aún no ha sido pintado. Cualquier persona tocada por la pelota, sin importar el rebote o la forma en que fue alcanzada, pasa inmediatamente a ser parte del equipo de pintadores. Los pintadores solo pueden lanzar la pelota estando completamente quietos, lo que los obliga a coordinarse y posicionarse estratégicamente. El juego continúa hasta que todas las personas hayan sido pintadas.",
  rules: [
    "Los pintadores solo pueden lanzar la pelota estando detenidos",
    "Cualquier toque con la pelota convierte al jugador alcanzado en pintador",
    "No se permite el contacto físico ni bloquear con el cuerpo",
    "El juego termina cuando ya no quedan jugadores sin pintar"
  ],
},
{
  id: 54,
  title: "El Zorro Astuto",
  type: "warmup",
  description:
    "Juego de reacción y estrategia en el que los participantes deben avanzar sin ser vistos por el zorro, quien puede voltearse en cualquier momento para detectar movimientos.",
  image: "/images/games/el-zorro-astuto.jpg",
  materials: ["Ninguno"],
  intensity: "Media",
  participants: "8-40",
  recommendedAge: 7,
  objectives: [
    "Mejorar la atención y el tiempo de reacción",
    "Fomentar la estrategia individual",
    "Desarrollar la velocidad controlada y la cautela"
  ],
  howToPlay:
    "En un espacio amplio, se elige a una persona que será el zorro. Este se posiciona en un extremo del recinto, de espaldas al resto de los jugadores, quienes se ubican en el extremo opuesto. Al iniciar el juego, los participantes deben avanzar hacia el zorro intentando llegar a tocarlo. Sin embargo, el zorro puede voltearse en cualquier momento y, si ve a alguien moverse, esa persona debe regresar al punto de inicio. El juego continúa hasta que alguien logra tocar al zorro y se convierte en el nuevo zorro.",
  rules: [
    "Los jugadores solo pueden avanzar cuando el zorro está de espaldas",
    "Si el zorro ve a alguien moverse, esa persona debe volver al inicio",
    "El zorro puede voltearse cuantas veces quiera",
    "Quien toque al zorro primero se convierte en el nuevo zorro"
  ],
},
{
  id: 55,
  title: "¿Qué Hora es, Señor Lobo?",
  type: "warmup",
  description:
    "Juego clásico de atención y reacción donde un grupo avanza según la hora que indique el lobo, hasta que este declara que es hora de comer y corre para atrapar al mayor número de jugadores.",
  image: "/images/games/que-hora-es-senor-lobo.jpg",
  materials: ["Ninguno"],
  intensity: "Media",
  participants: "8-40",
  recommendedAge: 6,
  objectives: [
    "Mejorar la atención auditiva",
    "Desarrollar estrategias de movimiento y reacción",
    "Fomentar la velocidad y toma de decisiones bajo presión"
  ],
  howToPlay:
    "El lobo (una persona escogida al azar) se posiciona en un extremo de un espacio amplio, mientras que el resto del grupo se ubica en el extremo opuesto. Los jugadores preguntan: “¿Qué hora es, señor lobo?”. El lobo responde con una hora, por ejemplo: 'Son las 4', lo que indica la cantidad de pasos que todos pueden avanzar. Esta dinámica continúa hasta que, eventualmente, ante la misma pregunta, el lobo responda: “¡Es hora de comer!”. En ese momento, el lobo corre para atrapar a tantos jugadores como pueda antes de que estos lleguen a la línea segura. Las personas atrapadas pasan a formar parte del equipo del lobo en la siguiente ronda.",
  rules: [
    "Los jugadores solo pueden avanzar la cantidad de pasos indicada por el lobo",
    "Cuando el lobo dice 'Es hora de comer', todos deben correr hacia su línea de seguridad",
    "Cualquier jugador tocado por el lobo se une a su equipo en la siguiente ronda",
    "Gana quien logre no ser atrapado durante toda la partida"
  ],
},
{
  id: 56,
  title: "Embarque",
  type: "main",
  description:
    "Juego colaborativo donde los equipos deben avanzar por el campo usando únicamente el interior de aros (hula hulas), creando estrategias y comunicándose para llegar al extremo opuesto sin tocar el suelo fuera de ellos.",
  image: "/images/games/embarque.jpg",
  materials: ["Hula hulas (aros)"],
  intensity: "Media",
  participants: "8-40",
  recommendedAge: 10,
  objectives: [
    "Fomentar la colaboración grupal",
    "Desarrollar estrategias compartidas",
    "Mejorar la comunicación bajo presión",
    "Promover la coordinación y el movimiento en equipo"
  ],
  howToPlay:
    "El grupo se divide en dos equipos, ubicados en extremos opuestos de una cancha o espacio amplio. Cada equipo dispone de varios hula hulas colocados en el suelo. Para avanzar, los jugadores solo pueden pisar dentro de los aros; cualquier paso fuera de ellos obliga a todo el equipo a volver al punto de inicio. Los equipos deben decidir cómo distribuir los hula hulas, cómo avanzar coordinadamente y cómo evitar errores que los retrasen. Gana el primer equipo en llegar al extremo contrario sin cometer faltas.",
  rules: [
    "Nadie puede pisar fuera del interior de los hula hulas",
    "Si cualquier jugador toca el suelo fuera de un aro, todo el equipo regresa al inicio",
    "Los hula hulas pueden moverse solo cuando todos los jugadores estén dentro de un aro válido",
    "Gana el primer equipo que logre llegar al extremo opuesto respetando todas las reglas"
  ],
},
{
  id: 57,
  title: "El Teatro",
  type: "main",
  description:
    "Juego creativo y comunicativo donde el grupo selecciona un objeto y una acción, mientras una persona debe adivinar cuál es mediante interpretación y prueba de hipótesis.",
  image: "/images/games/el-teatro.jpg",
  materials: ["Objetos variados aportados por el grupo"],
  intensity: "Baja",
  participants: "6-30",
  recommendedAge: 8,
  objectives: [
    "Estimular la creatividad individual y grupal",
    "Mejorar la comunicación no verbal y la interpretación",
    "Fomentar la cooperación y la participación activa del grupo"
  ],
  howToPlay:
    "Cada persona del grupo coloca un objeto en un espacio común. Una persona es seleccionada al azar y llevada fuera del área mientras el grupo escoge un objeto y una acción que debe realizarse con él. Una vez definida la combinación, la persona retorna y debe intentar adivinar cuál objeto fue elegido y qué acción lo acompaña. Cada vez que el jugador pruebe un objeto o realice una acción incorrecta, el grupo grita “¡Buu!”. Si acierta el objeto o realiza correctamente cualquier acción relacionada, el grupo grita “¡Sii!”, dándole pistas para llegar a la respuesta final.",
  rules: [
    "El objeto y la acción deben quedar claros para todo el grupo antes de llamar al jugador",
    "No se debe entregar pistas verbales más allá de '¡Buu!' o '¡Sii!'",
    "La persona debe interactuar físicamente con los objetos para intentar adivinar",
    "El juego continúa hasta que el jugador acierte el objeto y la acción correctos"
  ],
},
{
  id: 58,
  title: "Fútbol de Esquinas",
  type: "main",
  description:
    "Variante dinámica del fútbol en la que cuatro equipos ubicados en esquinas distintas compiten simultáneamente por anotar en las porterías rivales mientras defienden la propia.",
  image: "/images/games/futbol-de-esquinas.jpg",
  materials: ["Balón de fútbol", "Conos o marcadores para delimitar las esquinas"],
  intensity: "Alta",
  participants: "8-32",
  recommendedAge: 10,
  objectives: [
    "Fomentar el trabajo en equipo en situaciones con múltiples objetivos",
    "Mejorar la agilidad y la toma de decisiones rápidas",
    "Desarrollar la estrategia ofensiva y defensiva simultánea"
  ],
  howToPlay:
    "Se forman cuatro equipos que se ubican en cuatro esquinas distintas de la cancha, cada una actuando como portería propia. Con un solo balón en juego, los equipos deben intentar anotar en cualquiera de las esquinas contrarias mientras impiden que otros equipos anoten en la suya. El juego sigue reglas básicas del fútbol adaptadas: se permite pases, tiros y desplazamientos libres. La dinámica requiere que los equipos coordinen ataque y defensa al mismo tiempo, ya que pueden recibir ataques desde múltiples direcciones.",
  rules: [
    "Cada equipo debe proteger su esquina delimitada como portería",
    "Los goles pueden hacerse en cualquiera de las otras tres esquinas",
    "No se permite contacto físico excesivo",
    "Gana el equipo que acumule más goles al final del tiempo establecido"
  ],
},
{
  id: 59,
  title: "Bosque Encantado",
  type: "warmup",
  description:
    "Juego de velocidad y estrategia en el que un brujo intenta pillar a los jugadores que cruzan el campo; quienes son atrapados se convierten en árboles que ayudan a detener al resto.",
  image: "/images/games/bosque-encantado.jpg",
  materials: ["Ninguno"],
  intensity: "Media",
  participants: "10-40",
  recommendedAge: 7,
  objectives: [
    "Mejorar la velocidad y capacidad de reacción",
    "Fomentar la estrategia individual y colectiva",
    "Promover la atención al entorno cambiante"
  ],
  howToPlay:
    "Se elige a un brujo que se ubica en el centro del campo. El resto de los jugadores parte desde un extremo. A la señal, deben correr hacia el lado contrario sin ser atrapados por el brujo. Quienes sean pillados se convierten en árboles, quedándose inmóviles en el lugar donde fueron atrapados; desde allí pueden extender brazos o usar su posición para ayudar al brujo a tocar a otros jugadores. Entre rondas, el brujo puede mover a los árboles a nuevas ubicaciones estratégicas o incluso intercambiar roles con alguno de ellos.",
  rules: [
    "Los árboles deben permanecer inmóviles, pero pueden usar sus brazos para pillar",
    "Los jugadores deben correr únicamente cuando se indique el inicio de la ronda",
    "El brujo puede reorganizar los árboles entre rondas",
    "El juego continúa hasta que queden pocos jugadores sin pillar o se cambie de brujo"
  ],
},
{
  id: 60,
  title: "Alí Babá y los 40 Ladrones",
  type: "warmup",
  description:
    "Juego rítmico y creativo donde los jugadores cantan en círculo mientras construyen una secuencia creciente de movimientos que deben recordar y reproducir sin errores.",
  image: "/images/games/ali-baba-y-los-40-ladrones.jpg",
  materials: ["Ninguno"],
  intensity: "Media",
  participants: "8-40",
  recommendedAge: 8,
  objectives: [
    "Mejorar la coordinación y memoria secuencial",
    "Fomentar la creatividad al inventar nuevos movimientos",
    "Promover la comunicación no verbal y la atención grupal"
  ],
  howToPlay:
    "Los jugadores forman un círculo. El primer jugador canta: “Alí Babá y los 40 ladrones” mientras realiza un movimiento que inventa en el momento. El jugador a su derecha debe repetir el canto y copiar el movimiento del primero, mientras el jugador inicial crea un nuevo movimiento. La secuencia comienza a crecer: cada jugador debe reproducir todos los movimientos previos, en orden, y añadir uno nuevo cuando llegue su turno. El juego continúa hasta completar la vuelta entera sin equivocaciones.",
  rules: [
    "Cada jugador debe repetir correctamente todos los movimientos anteriores",
    "El nuevo movimiento debe ser claro y distinto",
    "Si alguien se equivoca en la secuencia, el equipo puede reiniciar o perder según la modalidad",
    "La canción debe cantarse completa en cada turno"
  ],
},
{
  id: 61,
  title: "Vuelta al Universo",
  type: "main",
  description:
    "Juego de reacción y velocidad en el que jugadores numerados deben completar un recorrido circular y luego un trayecto en zigzag para tocar un cono central antes que sus rivales.",
  image: "/images/games/vuelta-al-universo.jpg",
  materials: ["Cono central", "Conos o marcadores para formar las hileras"],
  intensity: "Alta",
  participants: "12-40",
  recommendedAge: 9,
  objectives: [
    "Mejorar la velocidad de reacción",
    "Fomentar la agilidad y los cambios de dirección",
    "Promover la atención y la competencia sana en equipo"
  ],
  howToPlay:
    "Se forman cuatro equipos alineados frente a un cono ubicado en el centro del espacio. A cada integrante del equipo se le asigna un número. Cuando el profesor grita un número, los jugadores de los cuatro equipos que tengan ese número deben correr hacia la derecha dando una vuelta completa alrededor del conjunto de equipos hasta volver a su posición inicial. Luego deben avanzar en zigzag entre sus propios compañeros para finalmente correr hacia el cono central y tocarlo. El primero en hacerlo obtiene un punto para su equipo.",
  rules: [
    "Cada jugador solo puede correr cuando su número es llamado",
    "El recorrido debe hacerse completo: vuelta circular y zigzag",
    "No se permite empujar ni bloquear a otros jugadores",
    "Gana el equipo con más puntos al finalizar todas las rondas"
  ],
},
{
  id: 62,
  title: "Águilas y Aguiluchos",
  type: "warmup",
  description:
    "Juego de reacción y velocidad en el que dos filas enfrentadas deben perseguirse según la palabra que grite el director, integrando también elementos de trivia y clasificación.",
  image: "/images/games/aguilas-y-aguiluchos.jpg",
  materials: ["Ninguno"],
  intensity: "Media",
  participants: "10-40",
  recommendedAge: 9,
  objectives: [
    "Mejorar la atención y el tiempo de reacción",
    "Fomentar la velocidad y la agilidad",
    "Incorporar contenidos de trivia y clasificación en el movimiento"
  ],
  howToPlay:
    "Se forman dos filas enfrentadas, cada jugador delante de su pareja. Una fila será de 'águilas' y la otra de 'aguiluchos'. A la señal, el director del juego grita '¡Águilas!' o '¡Aguiluchos!'. Si grita 'Águilas', los jugadores de la fila de águilas deben perseguir a sus parejas de la fila de aguiluchos hasta una línea o extremo de la cancha; si grita 'Aguiluchos', ocurre lo contrario. Se puede jugar por rondas, otorgando un punto a quien logre llegar a la línea sin ser atrapado.\n\nVariantes de trivia: en lugar de nombres de aves, se pueden usar categorías como 'fauna nativa' vs 'fauna introducida', 'números pares' vs 'números impares' o 'ciudades al norte de Santiago' vs 'ciudades al sur de Santiago'. El director dice en voz alta elementos de una categoría y, al nombrar la categoría asignada a una fila, esa fila pasa a perseguir a la otra.",
  rules: [
    "Los jugadores deben reaccionar solo cuando el director grite la palabra o categoría correspondiente",
    "Se debe respetar la línea o extremo de seguridad de la cancha",
    "No se permite empujar ni generar contacto brusco durante la persecución",
    "En variantes de trivia, las categorías deben explicarse claramente antes de iniciar el juego"
  ],
},
{
  id: 63,
  title: "Tripela",
  type: "main",
  description:
    "Juego competitivo que combina elementos del fútbol con reglas de manejo manual restringido, promoviendo la coordinación, la estrategia colectiva y la toma rápida de decisiones.",
  image: "/images/games/tripela.jpg",
  materials: ["Pelota de fútbol o similar", "Espacio amplio delimitado"],
  intensity: "Media",
  participants: "8-30",
  recommendedAge: 10,
  objectives: [
    "Desarrollar la competencia y el trabajo en equipo",
    "Fortalecer la coordinación motora y la toma de decisiones",
    "Promover la comunicación efectiva entre los jugadores"
  ],
  howToPlay:
    "El juego se realiza en una cancha delimitada. Los jugadores pueden sostener la pelota con las manos únicamente de forma estática, sin avanzar. Para efectuar un pase, deben soltar la pelota al suelo y patearla hacia un compañero. El equipo avanza colectivamente mediante pases sucesivos hasta acercarse a la meta contraria y anotar un gol. El juego continúa de manera fluida, alternando posesiones según recuperaciones de balón o errores de pase.",
  rules: [
    "No se puede dar pasos mientras se sostiene la pelota con las manos",
    "Los pases y tiros deben realizarse únicamente pateando la pelota",
    "Se permite interceptar pases siempre que no haya contacto brusco con el oponente",
    "Gana el equipo que anote más goles dentro del tiempo establecido"
  ],
},
{
  id: 64,
  title: "Gladiadores",
  type: "main",
  description:
    "Dinámica competitiva de alta energía en la que tres equipos se organizan estratégicamente para proteger o conquistar zonas puntuadas, combinando rapidez, agilidad y trabajo táctico.",
  image: "/images/games/gladiadores.jpg",
  materials: ["Pañolines de tres colores distintos", "Conos o marcas para delimitar las zonas de puntaje"],
  intensity: "Alta",
  participants: "12-60",
  recommendedAge: 11,
  objectives: [
    "Mejorar la agilidad y la velocidad de reacción",
    "Desarrollar estrategias colectivas bajo presión",
    "Fomentar la cooperación y comunicación dentro del equipo"
  ],
  howToPlay:
    "Se forman tres equipos, cada uno identificado con pañolines de un color. Dos equipos se colocan en una sola hilera de forma intercalada, y el tercer equipo escoge a tres jugadores para defender tres puntos ubicados frente a la hilera. Los jugadores de los equipos en hilera salen cada tres segundos intentando alcanzar alguno de los puntos: los dos extremos valen 1 punto y el del centro vale 2. Si un jugador pierde su pañolín durante el trayecto, debe regresar a la hilera y esperar su turno nuevamente. Los tres defensores pueden rotar libremente con otros integrantes de su equipo para mantener la resistencia y la estrategia. El objetivo es cruzar la zona protegida sin perder el pañolín y sumar tantos puntos como sea posible.",
  rules: [
    "Cada jugador de la hilera debe salir únicamente cada tres segundos",
    "Los defensores pueden intercambiarse con otros miembros de su equipo cuando lo necesiten",
    "Si un jugador pierde su pañolín, debe volver al inicio sin puntuar",
    "Cada zona vale un puntaje distinto: extremos 1 punto, centro 2 puntos",
    "Gana el equipo que acumule la mayor cantidad de puntos al finalizar el tiempo"
  ],
},
{
  id: 65,
  title: "Cosechando a ciegas",
  type: "cooldown",
  description:
    "Actividad colaborativa en parejas donde la comunicación y la confianza son esenciales para recolectar la mayor cantidad de objetos mientras uno de los integrantes actúa con visión limitada.",
  image: "/images/games/cosechando-a-ciegas.jpg",
  materials: ["Lentejas u otros objetos pequeños", "Vendas para los ojos", "Recipientes para recolectar"],
  intensity: "Baja",
  participants: "6-40",
  recommendedAge: 10,
  objectives: [
    "Fomentar la colaboración entre los integrantes de la pareja",
    "Desarrollar habilidades de comunicación clara y efectiva",
    "Promover la planificación estratégica bajo condiciones limitadas"
  ],
  howToPlay:
    "Los participantes forman parejas. Una persona de cada pareja se ubica en una fila a cierta distancia del campo de juego, mientras que la otra es vendada y debe ingresar al área donde se encuentran dispersas las lentejas. El jugador sin visión debe avanzar guiado únicamente por la voz de su compañero, quien indica direcciones, distancias y señales para recoger las lentejas y depositarlas en su recipiente. El juego continúa por un tiempo determinado, siempre reforzando la comunicación precisa entre ambos miembros.",
  rules: [
    "El jugador vendado no puede quitarse la venda ni abrir los ojos durante la actividad",
    "El compañero guía solo puede ayudar mediante instrucciones verbales, sin contacto físico",
    "Las lentejas deben ser depositadas en el recipiente asignado para que cuenten",
    "Gana la pareja que recolecte la mayor cantidad de lentejas al finalizar el tiempo"
  ],
},
{
  id: 66,
  title: "Torombolo el Célebre Payaso",
  type: "warmup",
  description:
    "Juego rítmico y corporal que utiliza una canción repetitiva para coordinar movimientos, cambiar de direcciones y sincronizar acciones grupales de manera lúdica.",
  image: "/images/games/torombolo-el-celebre-payaso.jpg",
  materials: ["Ninguno"],
  intensity: "Baja",
  participants: "5-40",
  recommendedAge: 6,
  objectives: [
    "Activar al grupo mediante un calentamiento dinámico",
    "Mejorar la coordinación motora a través del ritmo",
    "Fomentar la sincronización y atención colectiva"
  ],
  howToPlay:
    "Los jugadores cantan juntos: “Torombolo el célebre payaso que camina por la calle marcando el paso” mientras marcan el ritmo con un pie, avanzando hacia adelante, luego hacia el centro y finalmente hacia afuera. Al terminar la canción, deben repetir la secuencia completa utilizando la otra pierna. Una vez dominado individualmente, los participantes se alinean uno al lado del otro y realizan la canción saltando con ambas piernas al mismo tiempo, manteniendo el ritmo y la coordinación de grupo.",
  rules: [
    "Los movimientos deben acompañar el ritmo de la canción en cada dirección indicada",
    "Cada repetición debe hacerse alternando la pierna correspondiente",
    "En la fase grupal, todos deben intentar sincronizar los saltos",
    "Se debe mantener la canción y el ritmo de manera constante durante la actividad"
  ],
},
{
  id: 67,
  title: "Hermano De",
  type: "warmup",
  description:
    "Dinámica rápida y social en la que los participantes deben reaccionar velozmente para unirse en parejas tocando partes específicas del cuerpo, combinando comunicación, estrategia y agilidad.",
  image: "/images/games/hermano-de.jpg",
  materials: ["Ninguno"],
  intensity: "Media",
  participants: "6-40",
  recommendedAge: 8,
  objectives: [
    "Mejorar la velocidad de reacción ante instrucciones verbales",
    "Fomentar la comunicación y coordinación entre los jugadores",
    "Promover la estrategia al elegir rápidamente a un compañero"
  ],
  howToPlay:
    "Dos personas con características similares se ubican en los extremos de la cancha y se gritan mutuamente: “Hermano de”. La persona que dirige la actividad dice dos partes del cuerpo, por ejemplo: “codo con rodilla”. Al escucharlo, todos los jugadores deben buscar a otra persona y unirse tocándose exactamente en las partes indicadas. Se repite la dinámica cambiando las combinaciones de partes corporales. La última pareja en lograr unirse queda eliminada o acumula una falta, según la modalidad del facilitador. El juego continúa formando nuevas parejas en cada ronda.",
  rules: [
    "Las parejas deben unirse únicamente usando las partes del cuerpo mencionadas por el facilitador",
    "La unión debe mantenerse hasta que el facilitador valide la ronda",
    "La última pareja en lograr unirse queda eliminada o pierde la ronda",
    "No se permite empujar o bloquear a otros jugadores para formar pareja"
  ],
},
{
  id: 68,
  title: "Artzikirol",
  type: "main",
  description:
    "Juego dinámico y estratégico inspirado en el fútbol, donde los equipos deben avanzar colectivamente con el balón, alternando entre conducción con los pies y acciones tácticas con las manos bajo reglas especiales.",
  image: "/images/games/artzikirol.jpg",
  materials: ["Balón de fútbol", "Cancha delimitada", "Arcos"],
  intensity: "Media",
  participants: "10-30",
  recommendedAge: 10,
  objectives: [
    "Mejorar la precisión en el control del balón",
    "Fomentar la colaboración y el trabajo en equipo",
    "Desarrollar estrategias de juego y comunicación efectiva"
  ],
  howToPlay:
    "Los jugadores se organizan en dos equipos y compiten intentando llevar el balón hasta el arco contrario para anotar. Por norma general, el avance se realiza con los pies, similar al fútbol. Sin embargo, cualquier jugador puede optar por tomar el balón con las manos y desplazarse libremente para buscar un pase o intentar un tiro. Esta ventaja viene con un riesgo: si un jugador que lleva la pelota en las manos es tocado por un oponente, debe entregar inmediatamente el balón al equipo rival. Además, si toca el balón con los pies mientras lo sostiene con las manos, también pierde la posesión. El juego avanza en rondas fluidas, combinando estrategias de pase, marcaje y lectura del juego.",
  rules: [
    "El balón se avanza principalmente con los pies, como en el fútbol",
    "Un jugador puede tomar la pelota con las manos y moverse libremente",
    "Si un jugador con el balón en las manos es tocado por un rival, la posesión cambia",
    "Si el jugador toca el balón con los pies mientras lo sostiene con las manos, pierde automáticamente la pelota",
    "Gana el equipo que anote más goles dentro del tiempo establecido"
  ],
},
{
  id: 69,
  title: "Bota Cono",
  type: "warmup",
  description:
    "Juego de calentamiento que combina precisión y estrategia, donde los equipos deben coordinar sus lanzamientos para derribar los conos rivales mientras protegen los propios.",
  image: "/images/games/bota-cono.jpg",
  materials: ["Pelota liviana", "6 conos (3 por equipo)", "Espacio delimitado"],
  intensity: "Baja",
  participants: "8-30",
  recommendedAge: 7,
  objectives: [
    "Trabajar la precisión y el control en los lanzamientos",
    "Fomentar la comunicación y organización entre los jugadores",
    "Desarrollar estrategias para atacar y defender simultáneamente"
  ],
  howToPlay:
    "Se forman dos equipos, cada uno con un área que funciona como arco, donde se colocan tres conos en línea o formando un pequeño triángulo. El objetivo es derribar los conos del equipo contrario utilizando una pelota. Los jugadores pueden pasar la pelota entre sus compañeros, pero quien la recibe debe lanzar desde el lugar en el que la atrapó, sin avanzar ni cambiar de posición. El equipo defensor puede interceptar lanzamientos y recuperar la pelota para iniciar su propio ataque. El juego continúa hasta que un equipo derriba los tres conos rivales.",
  rules: [
    "El jugador que tiene la pelota debe lanzar desde el lugar donde la recibió, sin moverse",
    "Se puede interceptar la pelota siempre que no haya contacto brusco",
    "Cada cono derribado cuenta como un avance hacia la victoria",
    "Gana el equipo que logre botar los tres conos del rival"
  ],
},
{
  id: 70,
  title: "Impulso Eléctrico",
  type: "cooldown",
  description:
    "Dinámica rápida en la que dos equipos compiten por reaccionar antes que el rival transmitiendo un ‘impulso’ a través de una cadena humana, poniendo a prueba la velocidad, la percepción y la comunicación no verbal.",
  image: "/images/games/impulso-electrico.jpg",
  materials: ["Pañuelo o paño", "Espacio amplio"],
  intensity: "Baja",
  participants: "10-50",
  recommendedAge: 8,
  objectives: [
    "Mejorar la velocidad de reacción ante estímulos táctiles",
    "Desarrollar la percepción y sincronización grupal",
    "Fomentar la comunicación efectiva dentro del equipo"
  ],
  howToPlay:
    "El grupo se divide en dos equipos, cada uno formando una hilera tomada de las manos. Las personas ubicadas en los extremos frontales de ambas hileras toman la mano del director del juego, quien se ubica en el centro. El director aprieta simultáneamente la mano de ambos jugadores, generando un ‘impulso’ que debe transmitirse rápidamente a través del apretón de manos en toda la cadena del equipo. Cuando el último jugador de la hilera recibe el impulso, debe correr lo más rápido posible para tomar un pañuelo ubicado detrás del director. Se repite la dinámica varias rondas para determinar el equipo con mejores tiempos de reacción.",
  rules: [
    "Los jugadores deben mantener las manos tomadas durante toda la actividad",
    "El impulso solo puede transmitirse presionando la mano del compañero inmediato",
    "La última persona solo puede correr cuando reciba claramente el impulso",
    "Gana el equipo que tome el pañuelo más veces o que registre más victorias por ronda"
  ],
},
{
  id: 71,
  title: "Las Esferas del Dragón",
  type: "main",
  description:
    "Juego de captura y rescate por equipos inspirado en dinámicas de persecución, donde la velocidad, la agilidad y las decisiones tácticas son esenciales para recuperar las pelotas ubicadas en campo rival sin ser capturados.",
  image: "/images/games/las-esferas-del-dragon.jpg",
  materials: ["Pañolines de dos colores", "3 pelotas de tenis por equipo", "Cancha de fútbol delimitada"],
  intensity: "Media",
  participants: "10-40",
  recommendedAge: 10,
  objectives: [
    "Mejorar la velocidad y la agilidad en desplazamientos",
    "Fomentar la comunicación dentro del equipo para planificar rutas y rescates",
    "Desarrollar estrategias colectivas bajo presión"
  ],
  howToPlay:
    "Se forman dos equipos, cada uno identificado con pañolines de un color. En cada mitad de la cancha se colocan tres pelotas de tenis, llamadas ‘esferas’. Ambos equipos comienzan en su zona segura, ubicada en su propia mitad del campo. Para obtener puntos, los jugadores deben cruzar a la mitad rival, tomar una esfera y llevarla de vuelta a su zona segura sin ser tocados. Si un jugador es tocado en territorio enemigo, debe dejar su pañolín en el lugar exacto donde fue capturado y dirigirse a la ‘cárcel’, un área designada dentro del territorio contrario. Para liberarlo, un compañero debe recuperar su pañolín, regresarlo a la cárcel y permitir así que pueda reintegrarse al juego. El equipo debe coordinar ataques, vigilancia y rescates para mantener a sus miembros activos. Gana el primer equipo que logre traer a su zona segura las tres esferas del contrario.",
  rules: [
    "Cada jugador debe portar su pañolín de forma visible en todo momento",
    "El área inicial de cada equipo es segura; nadie puede ser capturado allí",
    "Si un jugador es tocado en territorio rival, debe dejar su pañolín en ese punto y dirigirse a la cárcel enemiga",
    "Solo se libera a un compañero si su pañolín es recuperado y llevado directamente a la cárcel",
    "Las esferas deben ser trasladadas completamente a la zona segura para contar",
    "Gana el equipo que recupere primero las tres esferas rivales"
  ],
},
{
  id: 72,
  title: "Kamalundi",
  type: "cooldown",
  description:
    "Actividad musical y rítmica ideal para la vuelta a la calma, donde los participantes coordinan movimientos con distintos compañeros mientras acompañan la secuencia con canciones repetitivas y melodiosas.",
  image: "/images/games/kamalundi.jpg",
  materials: ["Ninguno"],
  intensity: "Baja",
  participants: "5-40",
  recommendedAge: 7,
  objectives: [
    "Facilitar la relajación progresiva al finalizar una actividad física",
    "Mejorar la coordinación a través de patrones rítmicos repetitivos",
    "Fomentar la conexión grupal mediante interacción musical suave"
  ],
  howToPlay:
    "Los participantes se colocan en círculo. La actividad comienza chocando las manos con las piernas, luego chocando las palmas entre sí y finalmente chasqueando los dedos, siguiendo el canto: “Kamalundi, lundi lundi lundi, kamalundi wan dan si, kaa maa lundii, kamalundiwandansi”. Tras esta primera ronda, se repite la secuencia, pero en lugar de chocar las manos con las propias piernas, se hace con las piernas de la persona a la derecha, acompañando el nuevo canto: “La tu le ya, leye leya leya, la tu leya wan si”. Posteriormente, se realiza una tercera ronda chocando las manos con las piernas de la persona a la izquierda, cantando: “Be belinda, linda linda linda, be be linda wan dan si”. El ritmo es suave y fluido, favoreciendo la coordinación en pareja y la conexión con el grupo.",
  rules: [
    "Los movimientos deben seguir el ritmo marcado por la canción",
    "Se debe mantener la fluidez del canto mientras se realizan los cambios de dirección",
    "Las transiciones entre piernas propias, derecha e izquierda deben hacerse en sincronía con el grupo",
    "El objetivo principal es coordinarse, no competir"
  ],
},
{
  id: 73,
  title: "Bádminton",
  type: "warmup",
  description:
    "Actividad de coordinación óculo-manual en la que los jugadores deben mantener la plumilla en el aire golpeándola con la paleta, desarrollando precisión y control corporal.",
  image: "/images/games/badminton.jpg",
  materials: ["Paletas de bádminton", "Plumilla"],
  intensity: "Baja",
  participants: "2-20",
  recommendedAge: 8,
  objectives: [
    "Mejorar la coordinación óculo-manual",
    "Desarrollar precisión en golpes controlados",
    "Fomentar la concentración y el ritmo compartido entre jugadores"
  ],
  howToPlay:
    "Cada jugador toma una paleta de bádminton. La dinámica consiste en golpear la plumilla suavemente de manera que permanezca en el aire la mayor cantidad de tiempo posible. Puede jugarse en parejas o en grupos mayores, alternando golpes entre participantes o formando pequeños retos de duración o estabilidad. El objetivo principal es evitar que la plumilla toque el suelo mientras se mantiene un ritmo cómodo y controlado.",
  rules: [
    "La plumilla debe ser golpeada solo una vez por turno",
    "Si la plumilla toca el suelo, la ronda termina o se reinicia según la modalidad",
    "Los golpes deben ser suaves y controlados para favorecer la coordinación",
    "En juegos grupales, cada jugador debe esperar su turno para golpear"
  ],
},
{
  id: 74,
  title: "Spikeball",
  type: "main",
  description:
    "Juego dinámico de coordinación óculo-manual en el que los participantes golpean una pelota hacia un trampolín circular para mantener el rally, combinando precisión, reflejos y trabajo cooperativo.",
  image: "/images/games/spikeball.jpg",
  materials: ["Trampolín de Spikeball", "Pelota de Spikeball"],
  intensity: "Media",
  participants: "2-6",
  recommendedAge: 10,
  objectives: [
    "Mejorar la coordinación óculo-manual mediante golpes controlados",
    "Desarrollar agilidad y velocidad de reacción alrededor del trampolín",
    "Fomentar la comunicación y la sincronización en equipo o entre jugadores"
  ],
  howToPlay:
    "Los jugadores se posicionan alrededor del trampolín circular. El objetivo es golpear la pelota con la palma de la mano hacia la superficie del trampolín para que rebote y continúe el juego. Cada jugador puede efectuar un solo golpe por turno antes de que la pelota toque el trampolín nuevamente. El rally continúa mientras la pelota rebote correctamente y sea devuelta por los jugadores sin caer al suelo. Se puede jugar en parejas o en grupos rotativos, manteniendo siempre el control y la fluidez del movimiento.",
  rules: [
    "Solo se puede golpear la pelota con la palma de la mano",
    "La pelota debe rebotar exactamente una vez en el trampolín para que el golpe sea válido",
    "Cada jugador puede realizar solo un contacto antes de que otro jugador intervenga",
    "Si la pelota toca el suelo, la ronda finaliza y se otorga punto al equipo contrario",
    "Los jugadores no pueden obstruir físicamente el acceso al trampolín"
  ],
},
{
  id: 75,
  title: "El Tarro",
  type: "warmup",
  description:
    "Actividad lúdica de coordinación óculo-manual en la que los participantes deben atrapar pelotas de tenis usando únicamente un tarro vacío, aumentando progresivamente la distancia del lanzamiento.",
  image: "/images/games/el-tarro.jpg",
  materials: ["Tarros vacíos de pelotas de tenis", "Pelotas de tenis"],
  intensity: "Baja",
  participants: "2-20",
  recommendedAge: 7,
  objectives: [
    "Mejorar la coordinación óculo-manual mediante recepciones precisas",
    "Desarrollar control corporal y anticipación del movimiento",
    "Fomentar la comunicación y el ajuste progresivo de la dificultad entre compañeros"
  ],
  howToPlay:
    "Cada jugador sostiene un tarro vacío de pelotas de tenis. Por turnos, los compañeros lanzan una pelota buscando que el jugador con el tarro la atrape únicamente utilizando el recipiente, sin usar las manos para ayudar. A medida que los participantes logran recepciones exitosas, pueden aumentar la distancia del lanzamiento o variar la altura y trayectoria. El juego continúa incrementando el desafío para mejorar la precisión y el control.",
  rules: [
    "La pelota debe atraparse exclusivamente con el tarro, sin apoyo de las manos",
    "Si la pelota cae o se sostiene con otra parte del cuerpo, la recepción no cuenta",
    "La distancia solo puede aumentarse cuando el participante logra una captura válida",
    "Se recomienda lanzar de manera progresiva para evitar impactos bruscos"
  ],
},
{
  id: 76,
  title: "Zorba",
  type: "main",
  description:
    "Juego de reacción rápida en parejas donde la velocidad, la atención y la estrategia son claves para alcanzar una lenteja ubicada en el centro del campo sin ser capturados por el rival.",
  image: "/images/games/zorba.jpg",
  materials: ["Lenteja u objeto pequeño", "Cancha delimitada"],
  intensity: "Media",
  participants: "8-40",
  recommendedAge: 9,
  objectives: [
    "Mejorar la velocidad de reacción ante estímulos verbales",
    "Fortalecer la atención y el cálculo estratégico de movimientos",
    "Fomentar la anticipación y la toma rápida de decisiones"
  ],
  howToPlay:
    "El grupo se divide en parejas, y a cada una se le asigna un número. Los integrantes de cada pareja se posicionan en extremos opuestos de la cancha. En el centro se coloca una lenteja que representará el objetivo. Cuando el director del juego dice el número de una pareja, ambos deben correr hacia el centro para intentar tomar la lenteja. La persona que logre agarrarla debe intentar regresar a su punto de inicio sin ser tocada por su oponente. Importante: una vez que alguien toca la lenteja, incluso si solo la roza, entra en territorio vulnerable y puede ser capturado inmediatamente. Mientras nadie haya tocado la lenteja, ningún jugador puede cruzar a la mitad contraria; si lo hace, pierde automáticamente la ronda.",
  rules: [
    "Cada pareja solo actúa cuando su número es llamado por el director",
    "Nadie puede pisar la mitad contraria antes de que la lenteja sea tocada",
    "La primera persona que toca la lenteja queda en riesgo de ser capturada",
    "Si la persona que tomó la lenteja es tocada por el rival, pierde la ronda",
    "Gana la ronda quien lleve la lenteja a su punto inicial sin ser tocado"
  ],
},
{
  id: 77,
  title: "Paracaídas a Colores",
  type: "warmup",
  description:
    "Juego reactivo y dinámico en el que los participantes deben coordinarse para mover un paracaídas de colores y reaccionar rápidamente ante las indicaciones del facilitador, cambiando de posición antes de que la lona vuelva a caer.",
  image: "/images/games/paracaidas-a-colores.jpg",
  materials: ["Paracaídas o lona circular dividida en colores"],
  intensity: "Baja",
  participants: "6-30",
  recommendedAge: 6,
  objectives: [
    "Mejorar la velocidad de reacción ante estímulos auditivos",
    "Fomentar la coordinación grupal en movimientos sincronizados",
    "Promover la atención y adaptación rápida a cambios"
  ],
  howToPlay:
    "El grupo sostiene un paracaídas circular dividido en varios colores. Todos lo elevan simultáneamente y luego lo bajan de forma rítmica. Cuando el paracaídas está completamente arriba, el director del juego dice en voz alta uno de los colores. Las personas que estén sujetando alguna sección correspondiente a ese color deben soltarse y cambiar de lugar entre ellas antes de que la lona vuelva a caer sobre el suelo o sobre sus cabezas. El resto del grupo continúa sosteniendo el paracaídas para que la dinámica fluya. Se repite con distintos colores y variando el ritmo para aumentar la dificultad.",
  rules: [
    "Los jugadores deben sostener firmemente el paracaídas al elevarlo y bajarlo",
    "Solo pueden cambiar de lugar quienes estén tocando el color mencionado",
    "El cambio debe completarse antes de que la lona caiga",
    "Se debe mantener el movimiento grupal del paracaídas en todo momento"
  ],
},
{
  id: 78,
  title: "Alimenta la Oruga",
  type: "warmup",
  description:
    "Dinámica colectiva y activa en la que los grupos deben coordinarse para desplazar un aro a través de toda la ‘oruga’ y enviar a su último integrante a recolectar una lenteja, fomentando la agilidad, la estrategia y el trabajo cooperativo.",
  image: "/images/games/alimenta-la-oruga.jpg",
  materials: ["Aros (uno por equipo)", "Lentejas", "Conos"],
  intensity: "Media",
  participants: "12-45",
  recommendedAge: 8,
  objectives: [
    "Fomentar el trabajo en equipo mediante acciones coordinadas",
    "Desarrollar la agilidad individual y grupal",
    "Promover la estrategia para optimizar el desplazamiento del aro y la recolección"
  ],
  howToPlay:
    "Se divide al grupo en tres equipos equilibrados. Cada equipo se toma de las manos formando una ‘oruga’ en fila, sosteniendo un aro que deberá desplazarse de jugador en jugador desde el primero hasta el último. Cuando el aro llega al integrante final, este debe correr hacia la zona opuesta de la cancha para tomar una lenteja, siempre sosteniendo el aro y sin soltarlo en ningún momento. Luego regresa a su equipo, deposita la lenteja sobre un cono y vuelve a incorporarse al final de la fila. El proceso se repite, enviando nuevamente el aro hacia atrás para que el último jugador vuelva a correr por una nueva lenteja. La actividad continúa durante siete minutos o hasta que se hayan recolectado todas las lentejas disponibles.",
  rules: [
    "El integrante que corre por la lenteja debe hacerlo siempre sosteniendo el aro: no puede soltarlo durante el trayecto",
    "Las lentejas deben colocarse encima del cono; si quedan debajo o caen, no suman al puntaje",
    "Los jugadores deben mantenerse tomados de las manos para conservar la forma de ‘oruga’",
    "Gana el equipo que recolecte la mayor cantidad de lentejas al finalizar el tiempo"
  ],
},
{
  id: 79,
  title: "El Gol",
  type: "main",
  description:
    "Juego colaborativo de lanzamiento y puntería en el que dos equipos compiten por empujar un balón de yoga hacia el lado contrario únicamente mediante el uso de balones más pequeños, requiriendo coordinación, estrategia y precisión.",
  image: "/images/games/el-gol.jpg",
  materials: ["1 balón de yoga", "8 balones por equipo", "Cancha delimitada"],
  intensity: "Media",
  participants: "12-50",
  recommendedAge: 9,
  objectives: [
    "Fomentar el trabajo colaborativo entre los integrantes del equipo",
    "Desarrollar precisión y fuerza controlada en los lanzamientos",
    "Promover la estrategia colectiva para coordinar ataques y defensas"
  ],
  howToPlay:
    "Se divide al grupo en dos equipos ubicados a cada lado de la cancha. En el centro se coloca un balón de yoga, y cada equipo recibe ocho balones con los que deberá empujarlo mediante lanzamientos. El objetivo es lograr que el balón de yoga cruce la línea del equipo contrario, lo que otorga un punto al equipo que realizó el empuje. Los jugadores pueden lanzar sus balones simultáneamente o de manera estratégica, coordinando ataques y defensas. El juego continúa en rondas, acumulando puntos según los desplazamientos logrados.",
  rules: [
    "El balón de yoga solo puede ser movido mediante los lanzamientos de los balones pequeños",
    "Está prohibido detener o empujar el balón de yoga con cualquier parte del cuerpo",
    "Si un equipo evita que el balón cruce su línea usando el cuerpo, el punto se otorga automáticamente al equipo rival",
    "Gana el equipo que acumule más puntos al finalizar el tiempo o las rondas establecidas"
  ],
},
{
  id: 80,
  title: "La Olla",
  type: "cooldown",
  description:
    "Juego de vuelta a la calma que combina creatividad, mímica y pensamiento rápido. Los equipos deben adivinar palabras escritas en papeles extraídos de una olla, utilizando distintas modalidades que desafían la comunicación y la imaginación.",
  image: "/images/games/la-olla.jpg",
  materials: ["Papeles", "Lápices", "Una olla o contenedor"],
  intensity: "Baja",
  participants: "6-40",
  recommendedAge: 12,
  objectives: [
    "Estimular la creatividad y la expresión mediante mímica o pistas verbales",
    "Desarrollar velocidad de pensamiento y adaptación a reglas cambiantes",
    "Fomentar la cooperación, escucha activa y comunicación dentro del equipo"
  ],
  howToPlay:
    "Cada participante recibe uno o dos papeles y un lápiz. Deben escribir una palabra o frase simple relacionada con una acción, profesión, objeto, lugar o enfermedad. Todos los papeles se doblan y se colocan dentro de una olla. Luego, los jugadores se dividen en 2 o 3 equipos según la cantidad de personas. En cada ronda, un integrante de cada equipo es elegido para sacar un papel de la olla y lograr que su equipo adivine lo que dice, sin revelar la palabra directamente.\n\nExisten diferentes variantes para adivinar:\n\n1) **Tabú**: El jugador puede hablar libremente, pero no puede decir la palabra escrita ni palabras derivadas. Por ejemplo, si el papel dice “jardín”, no puede decir “jardinero”.\n\nSi un equipo se equivoca tres veces intentando adivinar una misma palabra, el equipo contrario tendrá la oportunidad de robar el punto adivinándola. Si fallan, deberán esperar a que el otro equipo vuelva a equivocarse tres veces para obtener otra oportunidad de robo. Si un equipo decide que no podrá adivinar, puede decir *“pase”*, recibiendo una penalización de –1 punto. Cada variante dispone de un minuto y medio para resolver la mayor cantidad de papeles posible. Gana el equipo que acumule más aciertos al final.",
  rules: [
    "Las palabras deben ser simples y comprensibles para todos los participantes",
    "En modalidad Tabú, no se pueden decir palabras prohibidas ni derivadas de la palabra del papel",
    "Si un equipo se equivoca tres veces, el equipo contrario obtiene una oportunidad de robar el punto",
    "Decir 'pase' permite cambiar de papel, pero penaliza con –1 punto",
    "Las rondas tienen un tiempo máximo de un minuto y medio",
    "Gana el equipo que logre adivinar más papeles con éxito"
  ],
},
{
  id: 81,
  title: "Aro Humano",
  type: "warmup",
  description:
    "Actividad colaborativa en la que los participantes, tomados de las manos, deben coordinarse para trasladar un aro alrededor del círculo sin soltarse, pasando sus cuerpos por dentro de él y promoviendo la estrategia y la comunicación.",
  image: "/images/games/aro-humano.jpg",
  materials: ["Aros"],
  intensity: "Baja",
  participants: "10-40",
  recommendedAge: 8,
  objectives: [
    "Fomentar la colaboración entre los integrantes del grupo",
    "Desarrollar estrategias colectivas para superar el desafío sin soltarse",
    "Mejorar la coordinación motora al pasar el aro alrededor del círculo"
  ],
  howToPlay:
    "Se forman dos círculos con igual cantidad de participantes. Todos deben tomarse de las manos, formando una cadena cerrada. En un punto del círculo se coloca un aro que deberá ser desplazado a través de cada integrante: cada persona debe pasar su cuerpo por dentro del aro sin soltarse de las manos, y luego entregarlo al siguiente compañero. La actividad continua hasta que el aro complete una vuelta completa al círculo, regresando al punto de inicio. Se pueden jugar varias rondas aumentando la velocidad o desafiando la eficiencia del grupo.",
  rules: [
    "Los jugadores no pueden soltarse de las manos en ningún momento",
    "Cada participante debe pasar completamente su cuerpo por dentro del aro",
    "El aro debe avanzar en el orden del círculo sin saltar participantes",
    "Gana el grupo cuyo aro complete primero la vuelta completa"
  ],
},
{
  id: 82,
  title: "Tombo",
  type: "main",
  description:
    "Juego competitivo por estaciones en el que un jugador debe golpear una pelota y recorrer un circuito sin ser quemado, mientras el equipo contrario intenta detener su avance. Combina estrategia, velocidad, precisión y toma de decisiones bajo presión.",
  image: "/images/games/tombo.jpg",
  materials: ["Pelota liviana para golpear", "Conos para marcar las 4 estaciones"],
  intensity: "Media",
  participants: "12-40",
  recommendedAge: 10,
  objectives: [
    "Desarrollar estrategias ofensivas y defensivas en equipo",
    "Mejorar la velocidad y la capacidad de reacción durante el recorrido",
    "Fomentar la precisión al golpear la pelota y al intentar quemar al corredor"
  ],
  howToPlay:
    "El juego se desarrolla en media cancha (o dos tercios si se dispone de más espacio) con cuatro estaciones ubicadas en las esquinas. Dos equipos se enfrentan: uno forma una hilera en la estación de inicio, mientras que el otro se reparte dentro del campo y las estaciones. Una persona del equipo defensor lanza la pelota de forma arqueada hacia un jugador del equipo contrario ubicado en la estación de inicio. Este debe golpearla únicamente con el brazo o el puño.\n\nSi la pelota cae dentro del área de juego, el jugador que la golpeó debe comenzar a correr por las estaciones en orden, intentando completar la vuelta completa. Solo se puede quemar al corredor cuando este se encuentra fuera de una estación; si está dentro de una, está a salvo. El jugador no puede retroceder hacia estaciones anteriores, pero puede detenerse el tiempo que necesite antes de avanzar.\n\nSi el equipo defensor tiene la pelota en la mano, el corredor no puede salir de la estación en la que está. Cada estación admite únicamente a una persona. Si el jugador es quemado al estar fuera de una estación, debe pasar al último lugar de la hilera de su equipo. Lo mismo ocurre si golpea la pelota fuera de la cancha tres veces. Cuando un jugador completa el circuito completo de estaciones, anota un punto para su equipo.",
  rules: [
    "La pelota debe golpearse solo con el brazo o el puño desde la estación de inicio",
    "Si la pelota cae fuera del campo tres veces, el jugador pasa al final de la hilera",
    "El corredor no puede retroceder a estaciones anteriores, pero sí detenerse",
    "Solo se puede quemar a quien se encuentre fuera de una estación",
    "No puede avanzar si un jugador del otro equipo tiene la pelota en la mano",
    "Solo una persona puede estar en cada estación",
    "Completar la vuelta completa por las cuatro estaciones otorga un punto al equipo"
  ],
},
{
  id: 83,
  title: "El Ciempiés",
  type: "cooldown",
  description:
    "Actividad de vuelta a la calma que mezcla coordinación, colaboración y juego creativo. Los participantes deben formar ‘ciempiés’ con la cantidad exacta de pies indicada por el facilitador, ajustando rápidamente la conformación del grupo.",
  image: "/images/games/el-ciempies.jpg",
  materials: ["Ninguno"],
  intensity: "Baja",
  participants: "6-40",
  recommendedAge: 8,
  objectives: [
    "Favorecer la coordinación grupal a través de formaciones dinámicas",
    "Estimular la colaboración y el trabajo conjunto bajo instrucciones cambiantes",
    "Promover la atención auditiva y la capacidad de respuesta rápida"
  ],
  howToPlay:
    "Los participantes comienzan caminando libremente por la mitad de la cancha o en un espacio delimitado. El facilitador inicia el canto:\n\n— “¿El ciempiés no tiene pies?” (el grupo repite)\n— “¡Claro que los tiene, pero no los ves!” (el grupo repite)\n— “¿Cuántos pies tiene el ciempiés?” (el grupo repite)\n— “¡Tiene X pies!”\n\nAl escuchar el número X, los jugadores deben agruparse rápidamente para formar un ‘ciempiés’ con esa cantidad exacta de pies. Por ejemplo, si se anuncia “siete pies”, cuatro participantes se unen en fila tomándose de los hombros: tres de ellos apoyan ambos pies en el suelo (6 pies) y uno se ubica al final parado en una sola pierna (1 pie), completando los siete. El último grupo en lograr la formación pierde la ronda. Tras cada intento, los jugadores se separan y vuelven a caminar, repitiendo la dinámica con un nuevo número.",
  rules: [
    "Los jugadores deben repetir en voz alta cada línea del canto",
    "Las formaciones deben tener exactamente la cantidad de pies mencionada",
    "El grupo que complete último la estructura del ciempiés pierde la ronda",
    "Todos deben separarse y reanudar el desplazamiento antes de una nueva indicación"
  ],
},
{
  id: 84,
  title: "Paletas",
  type: "warmup",
  description:
    "Juego de coordinación óculo-manual en el que dos jugadores deben mantener la pelota en el aire realizando pases precisos con paletas de madera, desarrollando control, ritmo y concentración compartida.",
  image: "/images/games/paletas.jpg",
  materials: ["Paletas de madera", "Pelota liviana (de goma o espuma)"],
  intensity: "Baja",
  participants: "2-10",
  recommendedAge: 8,
  objectives: [
    "Mejorar la coordinación óculo-manual a través de golpes controlados",
    "Desarrollar precisión y suavidad en los pases",
    "Fomentar la concentración y sincronización entre compañeros"
  ],
  howToPlay:
    "Dos jugadores se posicionan frente a frente, cada uno con una paleta. Con una pelota liviana, deben comenzar a hacerse pases procurando que la pelota se mantenga en el aire durante toda la actividad. Los golpes deben ser suaves y dirigidos, ajustando la fuerza y la altura según la distancia entre jugadores. Se puede aumentar la dificultad incrementando la separación, variando ritmos o introduciendo metas de cantidad de pases consecutivos.",
  rules: [
    "La pelota no debe tocar el piso en ningún momento",
    "Solo se puede golpear la pelota con la paleta",
    "Los jugadores deben turnarse de manera fluida para mantener el control del pase",
    "Si la pelota cae, la cuenta de pases se reinicia"
  ],
},
{
  id: 85,
  title: "Pichón",
  type: "main",
  description:
    "Juego de persecución y puntería en el que un equipo intenta cruzar el campo para sumar puntos mientras el equipo contrario lanza balones para impedirlo, poniendo a prueba la velocidad, la agilidad y la precisión.",
  image: "/images/games/pichon.jpg",
  materials: ["Balones livianos", "Cancha delimitada"],
  intensity: "Media",
  participants: "10-40",
  recommendedAge: 10,
  objectives: [
    "Desarrollar velocidad y agilidad para esquivar balones",
    "Mejorar la precisión en lanzamientos hacia un objetivo en movimiento",
    "Fomentar la estrategia colectiva al organizar turnos, posiciones y trayectorias"
  ],
  howToPlay:
    "El grupo se divide en dos equipos. El primer equipo forma una hilera y, uno por uno, sus integrantes deben correr desde su punto de inicio hasta cruzar una línea ubicada en el extremo opuesto del campo de juego. El segundo equipo se distribuye en dos filas paralelas a los extremos laterales del campo y debe lanzar balones intentando golpear al corredor antes de que cruce la línea.\n\nSi un jugador del equipo corredor logra llegar al otro extremo sin ser golpeado, anota un punto para su equipo. Si es alcanzado por un balón, debe regresar a la hilera y salir el siguiente compañero. Cuando todos los integrantes han corrido una vez o finaliza el tiempo acordado, los equipos intercambian roles. Gana el equipo que sume más puntos al final de ambas rondas.",
  rules: [
    "El corredor solo anota punto si cruza la línea sin recibir impacto de un balón",
    "Si el jugador es golpeado, debe volver al final de su hilera",
    "Los lanzadores deben permanecer dentro de sus filas laterales sin invadir el campo",
    "Los balones deben lanzarse con fuerza moderada para evitar golpes peligrosos",
    "Gana el equipo que obtenga más puntos después del intercambio de roles"
  ],
},
{
  id: 86,
  title: "Las Patentes",
  type: "main",
  description:
    "Juego de memoria y estrategia en el que los equipos deben observar y registrar correctamente las patentes que llevan en la espalda los jugadores contrarios, coordinándose para obtener la mayor cantidad de aciertos.",
  image: "/images/games/las-patentes.jpg",
  materials: ["Papel", "Lápices", "Hojas o tarjetas para las patentes"],
  intensity: "Baja",
  participants: "8-40",
  recommendedAge: 10,
  objectives: [
    "Fortalecer la memoria visual a través de la observación rápida",
    "Promover el trabajo en equipo para coordinar la información recopilada",
    "Desarrollar estrategias de reconocimiento, comunicación y registro"
  ],
  howToPlay:
    "Se forman dos equipos, y a cada integrante se le coloca una patente (una combinación de números y/o letras) en la espalda, de modo que ellos mismos no puedan verla. Cada equipo elige a un representante que tendrá papel y lápiz para registrar la información.\n\nDurante el juego, los participantes deben desplazarse por el espacio observando las patentes del equipo contrario sin mostrar las propias deliberadamente. Al identificar una, deben comunicarla rápidamente al encargado del registro, quien debe escribirla sin errores. El objetivo es recopilar la mayor cantidad de patentes correctas dentro del tiempo establecido. Los jugadores pueden diseñar estrategias para distraer, moverse rápido o coordinar la búsqueda de información.",
  rules: [
    "Ningún jugador puede mirar su propia patente ni retirarla",
    "Las patentes deben registrarse de forma exacta para ser válidas",
    "No se permite bloquear físicamente a los oponentes o cubrirse la patente con las manos",
    "Gana el equipo que registre correctamente la mayor cantidad de patentes del rival"
  ],
},
{
  id: 87,
  title: "Buscaminas",
  type: "main",
  description:
    "Juego de memoria y azar en el que los equipos deben descubrir, mediante prueba y error, cuáles casillas de un camino predefinido están libres y cuáles contienen bombas, avanzando estratégicamente hasta alcanzar la meta.",
  image: "/images/games/buscaminas.jpg",
  materials: ["Tablero marcado con casillas", "Conos o cintas para delimitar bombas y espacios"],
  intensity: "Baja",
  participants: "6-30",
  recommendedAge: 10,
  objectives: [
    "Fortalecer la memoria a través del reconocimiento de casillas seguras",
    "Fomentar el trabajo en equipo para recordar el camino correcto",
    "Desarrollar estrategias de avance y gestión del riesgo"
  ],
  howToPlay:
    "Se delimita un camino compuesto por casillas, donde algunas están libres y otras contienen bombas (solo conocidas por el facilitador). Cada equipo selecciona a un representante que deberá avanzar una casilla por turno. Si pisa una casilla libre, puede avanzar nuevamente una casilla hacia adelante, atrás o a los lados, pero nunca en diagonal. Conforme el equipo observa las casillas seguras, deben memorizar el camino correcto.\n\nSi el representante pisa una casilla con bomba, queda eliminado en esa ronda, debe regresar al punto de inicio y ceder el turno al equipo contrario. El equipo debe escoger a un nuevo representante para continuar desde el principio, usando lo aprendido previamente. El primer equipo que logre recorrer todas las casillas libres en orden hasta alcanzar la meta gana la partida.",
  rules: [
    "El jugador solo puede moverse de a una casilla por turno, sin movimientos en diagonal",
    "Pisar una casilla con bomba obliga a volver al inicio y ceder el turno al otro equipo",
    "Los equipos pueden cambiar de representante cada vez que inician desde el punto de partida",
    "Gana el equipo que logre completar el recorrido pasando únicamente por casillas seguras"
  ],
},
{
  id: 88,
  title: "Bij Bol",
  type: "main",
  description:
    "Juego competitivo y dinámico en el que dos equipos deben desplazar una pelota inflable gigante hacia el arco rival, utilizando cualquier parte del cuerpo para impulsarla mientras respetan zonas restringidas cercanas al arco.",
  image: "/images/games/bij-bol.jpg",
  materials: ["Pelota inflable grande", "Conos para delimitar zonas y arcos"],
  intensity: "Media",
  participants: "10-40",
  recommendedAge: 10,
  objectives: [
    "Fomentar el trabajo en equipo mediante coordinación ofensiva y defensiva",
    "Promover la comunicación y organización durante el desplazamiento de la pelota",
    "Desarrollar habilidades motrices globales a través de golpes y desplazamientos amplios"
  ],
  howToPlay:
    "Se forman dos equipos que se distribuyen en la cancha. En el centro se ubica una pelota inflable grande, la cual debe ser impulsada hacia el arco rival. Los jugadores pueden golpear la pelota con cualquier parte del cuerpo: brazos, piernas, cabeza o torso, siempre de manera segura. El objetivo es empujar la pelota hasta cruzar la línea del arco del equipo contrario.\n\nExiste una zona restringida cercana a cada arco, la cual está delimitada con conos. Ningún jugador puede pisar esta área: deben anotar desde fuera de la zona utilizando empujes, golpes controlados o coordinaciones colectivas. El juego continúa en rondas o a tiempo fijo.",
  rules: [
    "Se puede golpear la pelota con cualquier parte del cuerpo",
    "Está prohibido pisar la zona restringida cercana al arco",
    "Un gol es válido solo si la pelota cruza completamente la línea sin invasión de la zona",
    "No se permiten empujones peligrosos entre jugadores",
    "Gana el equipo que anote más goles dentro del tiempo establecido"
  ],
},
{
  id: 89,
  title: "Ultimate Frisbee",
  type: "main",
  description:
    "Deporte colaborativo de alta intensidad en el que dos equipos compiten por avanzar mediante pases con un frisbee, buscando llegar a la zona de anotación rival sin perder la posesión y cumpliendo reglas estrictas de movimiento.",
  image: "/images/games/ultimate-frisbee.jpg",
  materials: ["Frisbee", "Conos para delimitar zonas de anotación y laterales"],
  intensity: "Media",
  participants: "10-30",
  recommendedAge: 12,
  objectives: [
    "Fomentar el trabajo en equipo a través de pases estratégicos",
    "Desarrollar precisión y control en lanzamientos y recepciones",
    "Mejorar la velocidad, desplazamiento y lectura del juego"
  ],
  howToPlay:
    "El campo se divide en dos zonas de anotación, una para cada equipo. El frisbee se pone en juego mediante un lanzamiento inicial al equipo contrario. Los jugadores deben avanzar únicamente pasándose el frisbee entre ellos, ya que quien lo recibe debe permanecer estático hasta realizar el siguiente pase. Si el frisbee toca el suelo, sale fuera de la cancha o el jugador que lo posee se mueve con él, la posesión cambia automáticamente al equipo contrario.\n\nEl objetivo es completar una secuencia de pases hasta que un jugador reciba el frisbee dentro de la zona de anotación rival, lo que otorga un punto. Tras cada anotación, el juego se reinicia con un nuevo lanzamiento de salida. La dinámica continúa a velocidad alta, exigiendo comunicación, precisión y tácticas colectivas.",
  rules: [
    "El jugador que recibe el frisbee no puede correr ni avanzar: debe lanzar desde donde atrapó",
    "Si el frisbee cae al suelo, la posesión cambia al equipo contrario",
    "No se permite el contacto físico intencional",
    "El punto se marca cuando el frisbee es recibido dentro de la zona de anotación rival",
    "Gana el equipo que logre más puntos dentro del tiempo establecido o hasta el marcador acordado"
  ],
},
{
  id: 90,
  title: "Pac-Man",
  type: "warmup",
  description:
    "Versión adaptada del clásico juego de persecución, donde pac-man y fantasmas se desplazan únicamente siguiendo un circuito de cuerdas, poniendo a prueba la atención, la velocidad y la estrategia para evitar ser atrapados.",
  image: "/images/games/pac-man.jpg",
  materials: ["Cuerdas para formar el circuito"],
  intensity: "Baja",
  participants: "6-30",
  recommendedAge: 8,
  objectives: [
    "Mejorar la atención y la toma rápida de decisiones",
    "Fomentar el uso de la estrategia al desplazarse por rutas limitadas",
    "Desarrollar velocidad y anticipación en situaciones de persecución"
  ],
  howToPlay:
    "Se distribuyen cuerdas por el suelo formando un circuito con caminos y bifurcaciones. Los jugadores se dividen en dos roles: pac-man y fantasmas. Todos deben desplazarse únicamente siguiendo las cuerdas, sin saltar, cortar camino ni moverse fuera del trazado. Los fantasmas intentan alcanzar a los pac-man siguiendo las mismas rutas. Cuando un fantasma logra pintar a un pac-man, ambos intercambian roles inmediatamente. El juego continúa con cambios constantes de posición y rutas, estimulando la lectura rápida del terreno y la anticipación de movimientos rivales.",
  rules: [
    "Todos los jugadores deben desplazarse únicamente sobre las cuerdas",
    "No se puede saltar, empujar ni salirse del camino delimitado",
    "Cuando un pac-man es pintado, debe cambiar de rol con el fantasma que lo tocó",
    "La ronda puede finalizar por tiempo o al alcanzar un número de cambios acordado"
  ],
},
{
  id: 91,
  title: "Netball",
  type: "main",
  description:
    "Juego competitivo por equipos en el que los participantes deben avanzar el balón mediante pases estratégicos a través de los tres tercios del campo, sin desplazarse con él, para encestar en el aro rival utilizando precisión y comunicación.",
  image: "/images/games/netball.jpg",
  materials: ["Balón de netball o similar", "Aros elevados", "Conos para marcar los tercios del campo"],
  intensity: "Media",
  participants: "10-28",
  recommendedAge: 12,
  objectives: [
    "Fomentar el trabajo en equipo mediante secuencias de pases coordinadas",
    "Desarrollar precisión en lanzamientos y recepciones",
    "Promover la planificación táctica para avanzar por los tercios del campo"
  ],
  howToPlay:
    "El campo de juego se divide en tres tercios. Dos equipos se enfrentan intentando encestar el balón en el aro contrario. Para avanzar, los jugadores deben pasarse el balón sin moverse del lugar donde lo atraparon, obligando a generar espacios y comunicación constante. Antes de concretar un tiro al aro, el equipo debe haber completado al menos un pase válido dentro de cada uno de los tres tercios del campo. Los jugadores deben ubicarse estratégicamente para recibir pases en movimiento, abrir líneas de juego y acercar el balón al área de lanzamiento. La ronda continúa con cambios rápidos de posesión si hay un error de pase o una interceptación.",
  rules: [
    "El jugador que recibe el balón no puede moverse de su posición",
    "Debe realizarse al menos un pase en cada uno de los tres tercios antes de intentar encestar",
    "Los pases deben ser limpios: si el balón cae al suelo, es posesión del equipo contrario",
    "Se prohíbe el contacto físico intencional",
    "Gana el equipo que enceste más puntos dentro del tiempo establecido"
  ],
},
{
  id: 92,
  title: "El Gato y el Ratón",
  type: "cooldown",
  description:
    "Dinámica suave y entretenida en la que un jugador actúa como ratón desplazándose bajo una lona mientras otro, el gato, intenta atraparlo desde arriba, promoviendo coordinación y juego cooperativo.",
  image: "/images/games/el-gato-y-el-raton.jpg",
  materials: ["Lona circular grande"],
  intensity: "Baja",
  participants: "6-30",
  recommendedAge: 6,
  objectives: [
    "Favorecer la coordinación y el control corporal en desplazamientos suaves",
    "Promover la relajación activa durante la vuelta a la calma",
    "Estimular la participación grupal mediante roles cambiantes y dinámicos"
  ],
  howToPlay:
    "Los participantes se ubican alrededor de una lona circular y la sostienen con ambas manos. Deben agitarla suavemente, creando un efecto ondulante. Se elige a un jugador para ser el ratón, quien debe arrastrarse debajo de la lona, y otro para ser el gato, que se desplaza por fuera, sobre el borde o alrededor de la lona, intentando adivinar por dónde se mueve el ratón y atraparlo tocándolo desde arriba. El grupo continúa moviendo la lona para dificultar la persecución. Cuando el gato logra atrapar al ratón, ambos salen y se eligen nuevos jugadores para asumir los roles.",
  rules: [
    "El ratón debe permanecer siempre debajo de la lona sin ponerse de pie",
    "El gato solo puede atrapar al ratón desde arriba de la lona, sin saltar sobre ella",
    "El grupo debe mantener la lona en movimiento suave durante toda la ronda",
    "Al atraparse al ratón, se cambian inmediatamente los roles"
  ],
},
{
  id: 93,
  title: "Pinta Pelota",
  type: "warmup",
  description:
    "Variante dinámica de la pinta en la que los jugadores deben evitar ser tocados o alcanzados por una pelota lanzada por los perseguidores, combinando resistencia, precisión y cooperación entre quienes aún están en juego.",
  image: "/images/games/pinta-pelota.jpg",
  materials: ["Pelotas livianas"],
  intensity: "Media",
  participants: "6-30",
  recommendedAge: 8,
  objectives: [
    "Mejorar la resistencia y la velocidad de reacción",
    "Desarrollar precisión en lanzamientos hacia objetivos en movimiento",
    "Fomentar el trabajo en equipo entre quienes buscan evitar ser pintados"
  ],
  howToPlay:
    "Al inicio, uno o dos jugadores comienzan como los que pintan y reciben una pelota. Su objetivo es tocar a un jugador directamente con la pelota o acertar un lanzamiento para pintarlo. Quienes son pintados pasan automáticamente a formar parte del grupo que persigue y también pueden pintar, pero con una condición importante: si están sosteniendo la pelota, no pueden moverse y deben lanzar desde el lugar donde la atraparon. Los jugadores libres deben coordinarse para esquivar, cambiar de ritmo y apoyarse estratégicamente para mantenerse fuera del alcance del grupo que crece con cada pinta. La dinámica continúa hasta que quede solo un jugador sin haber sido pintado.",
  rules: [
    "Un jugador queda pintado si lo tocan con la pelota o si recibe un lanzamiento directo",
    "Los jugadores pintados no pueden moverse mientras tengan la pelota en la mano",
    "No se permiten lanzamientos peligrosos o con fuerza excesiva",
    "Gana el último jugador que permanezca sin ser pintado"
  ],
},
{
  id: 94,
  title: "Saltar la Cuerda",
  type: "warmup",
  description:
    "Actividad grupal de calentamiento en la que equipos completos deben coordinarse para saltar una cuerda de manera continua, trabajando ritmo, cooperación y sincronización colectiva.",
  image: "/images/games/saltar-la-cuerda.jpg",
  materials: ["Cuerda larga para salto"],
  intensity: "Baja",
  participants: "10-40",
  recommendedAge: 8,
  objectives: [
    "Fomentar el trabajo en equipo mediante saltos sincronizados",
    "Mejorar la coordinación motriz y el ritmo compartido",
    "Promover la comunicación para mantener el flujo de saltos"
  ],
  howToPlay:
    "Se forman dos equipos grandes. Cada equipo recibe una cuerda larga que será manipulada por dos de sus integrantes mientras el resto del grupo se posiciona en fila para saltar. El objetivo es lograr una cantidad específica de saltos consecutivos sin que la cuerda se detenga o alguien falle. Los jugadores pueden ir ingresando uno a uno o saltar en conjunto según se establezca la modalidad. Si alguien tropieza o la cuerda se traba, la cuenta vuelve a cero. La presión recae en la coordinación entre quienes mueven la cuerda y quienes realizan los saltos, generando una dinámica cooperativa y divertida.",
  rules: [
    "El conteo solo es válido si los saltos se realizan de forma consecutiva sin interrupciones",
    "Si la cuerda se detiene o alguien falla, la cuenta vuelve a cero",
    "Los encargados de mover la cuerda deben mantener un ritmo constante",
    "Gana el equipo que alcance primero la cantidad de saltos establecida"
  ],
},
{
  id: 95,
  title: "Zapatería",
  type: "warmup",
  description:
    "Dinámica rítmica y activa en la que cuatro equipos deben mantener un canto coordinado mientras saltan continuamente, respondiendo correctamente a preguntas sobre colores y evitando errores para no cambiar de equipo.",
  image: "/images/games/zapateria.jpg",
  materials: ["Ninguno"],
  intensity: "Media",
  participants: "12-40",
  recommendedAge: 8,
  objectives: [
    "Mejorar la atención auditiva y la rapidez de respuesta",
    "Desarrollar resistencia mediante saltos continuos",
    "Fomentar la coordinación grupal a través del ritmo y el canto"
  ],
  howToPlay:
    "Se forman cuatro equipos, cada uno identificado con un color. Cada equipo debe saltar en su lugar durante toda la actividad. El juego comienza cuando un equipo canta hacia otro: “Color, color, color”. El equipo al que se dirige responde: “¿Qué hay, qué hay, qué hay?”. El primer equipo continúa con: “¿Tiene zapatos en venta?” y el otro responde: “Sí hay, sí hay, sí hay”. Finalmente, se pregunta: “¿De qué color los tiene?” y el equipo debe responder mencionando el color de uno de los otros equipos.\n\nEl nuevo equipo mencionado se convierte en el siguiente en participar en el canto. La secuencia continúa de forma fluida, exigiendo rapidez mental para recordar colores, mantener ritmo y coordinar las respuestas mientras se sigue saltando. Los errores generan cambios inmediatos en la composición de equipos.",
  rules: [
    "Todos los jugadores deben continuar saltando durante toda la actividad",
    "Si un jugador se equivoca al decir un color, dice un color inexistente o deja de saltar, debe integrarse al equipo que le estaba cantando",
    "El color mencionado debe corresponder a uno de los equipos existentes",
    "La cadena de canto debe mantenerse en el ritmo establecido",
    "Gana el equipo que logre mantener más integrantes al final del juego"
  ],
},
{
  id: 96,
  title: "Cuncuna Zigzag",
  type: "warmup",
  description:
    "Dinámica activa en la que equipos formados en fila deben desplazarse en zigzag sin soltarse, avanzando como una ‘cuncuna’ mientras cada integrante pasa entre los demás, fortaleciendo la velocidad, la agilidad y la coordinación grupal.",
  image: "/images/games/cuncuna-zigzag.jpg",
  materials: ["Ninguno"],
  intensity: "Media",
  participants: "12-40",
  recommendedAge: 8,
  objectives: [
    "Mejorar la coordinación grupal en desplazamientos enlazados",
    "Desarrollar velocidad y agilidad en movimientos de zigzag",
    "Fomentar la cooperación al mantener la fila conectada sin soltarse"
  ],
  howToPlay:
    "Se forman cuatro equipos en fila, tomados de las manos o afirmados suavemente de los brazos. El último integrante de cada fila debe comenzar el recorrido avanzando en zigzag entre sus compañeros, pasando por debajo de los brazos de la fila sin soltarse. A medida que avanza, los demás deben levantar los brazos y abrir espacio para permitir el recorrido, manteniendo la conexión del equipo.\n\nUna vez que el último jugador llega a la primera posición, se convierte en el líder, y el nuevo último integrante repite el proceso. Este patrón continúa hasta que todo el equipo haya invertido completamente el orden original de la fila. La secuencia se repite sucesivas veces mientras el equipo avanza hacia el otro extremo de la cancha.\n\nLa comunicación es clave para mantener el ritmo, evitar tropiezos y sostener la unión del equipo.",
  rules: [
    "Los jugadores no pueden soltarse de las manos o brazos durante el desplazamiento",
    "El zigzag debe realizarse entre todos los integrantes de la fila, sin saltarse a nadie",
    "Se debe avanzar de forma coordinada para evitar caídas o bloqueos",
    "Gana el equipo que logre llegar primero al otro lado de la cancha completando todas las inversiones de fila"
  ],
},
{
  id: 97,
  title: "Posta Simple",
  type: "warmup",
  description:
    "Carrera de relevos en la que los equipos deben coordinarse para completar un recorrido de ida y vuelta lo más rápido posible, relevando al siguiente compañero mediante un choque de manos.",
  image: "/images/games/posta-simple.jpg",
  materials: ["Ninguno"],
  intensity: "Media",
  participants: "8-40",
  recommendedAge: 8,
  objectives: [
    "Mejorar la velocidad en desplazamientos cortos",
    "Fomentar la coordinación en relevos",
    "Promover el trabajo en equipo para mantener el ritmo competitivo"
  ],
  howToPlay:
    "Se forman cuatro equipos en hilera sobre la línea de área de la cancha. A la señal del facilitador, el primer integrante de cada hilera corre hasta la mitad de la cancha, gira y regresa al punto de partida. Al volver, debe chocar la mano del siguiente compañero, quien inmediatamente inicia su recorrido. La posta continúa con cada integrante repitiendo el trayecto de ida y vuelta hasta que todos hayan participado.",
  rules: [
    "El relevo solo puede comenzar cuando se choca la mano del compañero que regresa",
    "Cada participante debe llegar hasta la mitad de la cancha antes de volver",
    "No se permite cortar camino ni interferir con otras hileras",
    "Gana el equipo que complete primero el recorrido con todos sus integrantes"
  ],
},
{
  id: 98,
  title: "Posta Transporte",
  type: "warmup",
  description:
    "Variante cooperativa de la posta tradicional en la que los equipos deben transportar a sus compañeros sin que toquen el suelo, combinando velocidad, colaboración y estrategia para avanzar de manera eficiente.",
  image: "/images/games/posta-transporte.jpg",
  materials: ["Ninguno"],
  intensity: "Media",
  participants: "8-40",
  recommendedAge: 10,
  objectives: [
    "Promover la colaboración física y la coordinación entre compañeros",
    "Desarrollar velocidad en acciones combinadas de transporte",
    "Fomentar la estrategia para decidir cómo cargar de forma segura y eficiente"
  ],
  howToPlay:
    "Los equipos se forman en hilera como en la posta simple. El primer integrante corre hasta la mitad de la cancha y vuelve. Al regresar, debe transportar al segundo jugador hasta la mitad de la cancha sin permitir que este toque el suelo; pueden decidir libremente cómo cargarlo (a cuestas, en brazos, o sujetándolo entre ambos), siempre de forma segura. Tras llegar a la mitad de la cancha, ambos vuelven corriendo normalmente. Luego, juntos deben transportar al tercer integrante, y el proceso continúa aumentando el número de jugadores transportados en cada recorrido.\n\nLa dinámica exige organización para distribuir el esfuerzo, comunicación para coordinar los levantamientos y estrategia para determinar cómo avanzar sin perder velocidad ni estabilidad.",
  rules: [
    "El jugador transportado no puede tocar el suelo durante el recorrido hacia la mitad de cancha",
    "La forma de cargar debe ser segura y consensuada entre los participantes",
    "Todos los jugadores deben participar en el transporte del siguiente compañero",
    "Gana el equipo que complete el proceso de transporte de todos sus integrantes primero"
  ],
},
{
  id: 99,
  title: "Abecedario Humano",
  type: "cooldown",
  description:
    "Actividad creativa y colaborativa en la que los equipos deben formar letras, palabras u objetos utilizando únicamente la disposición de sus cuerpos en el suelo, fomentando la comunicación y la imaginación colectiva.",
  image: "/images/games/abecedario-humano.jpg",
  materials: ["Ninguno"],
  intensity: "Baja",
  participants: "9-40",
  recommendedAge: 8,
  objectives: [
    "Estimular la creatividad mediante la representación corporal de formas",
    "Fomentar la comunicación y coordinación dentro del equipo",
    "Favorecer la vuelta a la calma mediante una actividad tranquila y colaborativa"
  ],
  howToPlay:
    "Se forman tres equipos, cada uno ubicado en un área distinta de la cancha. El facilitador menciona una letra, una palabra o un objeto sencillo. Inmediatamente, los integrantes de cada equipo deben acostarse en el suelo y coordinarse para formar la figura indicada usando únicamente sus cuerpos. Es fundamental que el equipo se comunique para decidir la orientación, el tamaño y la distribución de los participantes a fin de que la figura sea reconocible a simple vista. Una vez sientan que la forma está correctamente lograda, deben avisar al facilitador para su validación.",
  rules: [
    "Los equipos deben acostarse en el suelo para formar la figura solicitada",
    "La figura debe ser reconocible y mantenerse por unos segundos para su validación",
    "No se permite copiar visualmente a otros equipos",
    "Gana el equipo que logre formar primero la figura de manera correcta"
  ],
},
{
  id: 100,
  title: "Fútbol Scout",
  type: "main",
  description:
    "Juego colaborativo y estratégico basado en las mecánicas del handball, pero reemplazando la pelota por un lazo que debe ser atrapado por el portero utilizando un bastón desde dentro de un hula hula. Requiere precisión, coordinación y planificación ofensiva y defensiva.",
  image: "/images/games/futbol-scout.jpg",
  materials: ["Lazo de cuerda", "Hula hula", "Bastón", "Conos para delimitar áreas"],
  intensity: "Media",
  participants: "10-30",
  recommendedAge: 10,
  objectives: [
    "Mejorar la precisión en lanzamientos y atrapadas",
    "Fomentar el trabajo en equipo mediante pases coordinados",
    "Desarrollar estrategias ofensivas y defensivas adaptadas a un formato no tradicional"
  ],
  howToPlay:
    "Dos equipos se enfrentan siguiendo reglas similares al handball. En lugar de una pelota, el juego utiliza un lazo de cuerda que debe lanzarse de manera controlada entre los integrantes del equipo atacante. El objetivo es lanzar el lazo desde fuera del área hacia el arco rival. El portero se coloca dentro de un hula hula ubicado en su portería y sostiene un bastón, que es la única herramienta permitida para atrapar el lazo. Para que un gol sea válido, el lazo debe ser atrapado por el portero sin salir del hula hula.\n\nEl equipo atacante debe coordinar pases y buscar ángulos de lanzamiento adecuados, mientras que el equipo defensor intenta bloquear trayectorias y forzar errores. La ronda termina con cada anotación o cambio de posesión por fallos en recepción o pases desviados.",
  rules: [
    "El portero debe permanecer con ambos pies dentro del hula hula en todo momento",
    "El gol solo es válido si el portero atrapa el lazo con el bastón sin salir de su zona",
    "Los lanzamientos deben realizarse desde fuera del área delimitada",
    "No se permite contacto físico intencional entre jugadores",
    "Si el lazo cae al suelo o se pierde la posesión, el equipo contrario recupera el juego"
  ],
},
{
  id: 101,
  title: "Gallina Ponedora",
  type: "warmup",
  description:
    "Actividad dinámica y entretenida en la que los participantes deben transportar pelotitas sujetándolas entre las rodillas, estimulando la precisión, la coordinación motora y la velocidad mientras avanzan en equipo.",
  image: "/images/games/gallina-ponedora.jpg",
  materials: ["Pelotitas pequeñas", "Hula hulas"],
  intensity: "Media",
  participants: "12-40",
  recommendedAge: 8,
  objectives: [
    "Mejorar la coordinación motora fina y gruesa al sujetar y transportar la pelotita",
    "Desarrollar precisión al depositar la pelota dentro del hula hula",
    "Fomentar la velocidad y el trabajo en equipo para completar la posta"
  ],
  howToPlay:
    "Se forman cuatro equipos en hilera. Frente a cada equipo, a cierta distancia, se coloca un hula hula en el suelo. Cada jugador, por turno, debe tomar una pelotita y sujetarla firmemente entre las rodillas. Sin usar las manos para sostenerla, debe correr o desplazarse rápidamente hacia el hula hula y soltar la pelota dentro de él, abriendo las piernas o realizando un pequeño salto controlado. Una vez que suelta la pelotita dentro del aro, vuelve corriendo a su equipo para dar paso al siguiente compañero. La dinámica continúa hasta que todos los integrantes hayan completado el recorrido.",
  rules: [
    "La pelotita debe mantenerse entre las rodillas durante todo el trayecto sin ser tocada con las manos",
    "La pelota debe caer dentro del hula hula para que la ronda cuente",
    "Si la pelota cae en el camino, el jugador debe regresar al inicio y comenzar nuevamente",
    "Gana el primer equipo que logre transportar todas sus pelotitas correctamente"
  ],
},
{
  id: 102,
  title: "Naciones Gol",
  type: "main",
  description:
    "Variante dinámica del juego Naciones, jugada entre dos equipos y con dos arcos, donde se combinan tiros al arco, precisión y movimiento estratégico. Los jugadores pueden ser quemados y limitados en su movilidad, mientras los arqueros deben defender su arco ante cada ataque.",
  image: "/images/games/naciones-gol.jpg",
  materials: ["Balón liviano", "Dos arcos", "Conos para delimitar áreas"],
  intensity: "Media",
  participants: "10-30",
  recommendedAge: 10,
  objectives: [
    "Mejorar la precisión en tiros y pases ofensivos",
    "Desarrollar estrategias de ataque y defensa en equipo",
    "Fomentar la agilidad para evadir lanzamientos y mantener la movilidad"
  ],
  howToPlay:
    "El grupo se divide en dos equipos, cada uno con su arco y un arquero asignado. El objetivo principal es anotar goles en el arco rival lanzando la pelota con precisión. Los jugadores pueden moverse libremente por el campo a menos que sean quemados.\n\nCuando un jugador es quemado (golpeado por la pelota), pierde la movilidad libre y solo puede desplazarse por el perímetro externo de su propia área, sin ingresar nuevamente al campo de juego. Esto obliga al equipo a reorganizar su estrategia ofensiva y defensiva.\n\nSi un equipo logra anotar un gol, el arquero rival es considerado quemado y debe moverse al perímetro de su área, quedando fuera de su función. El equipo afectado debe seleccionar rápidamente a un nuevo arquero entre los jugadores aún activos. El juego continúa hasta que un equipo queda sin jugadores activos (todos quemados).",
  rules: [
    "Un jugador quemado solo puede moverse por el perímetro de su área y no puede volver al campo",
    "Los goles deben realizarse lanzando el balón dentro del arco rival de forma limpia",
    "Cada vez que un equipo recibe un gol, su arquero queda quemado y debe ser reemplazado",
    "No se permite contacto físico para impedir tiros o movimientos",
    "Gana el equipo que logre quemar a todos los jugadores del equipo contrario"
  ],
},
{
  id: 103,
  title: "Vuelta al Mundo",
  type: "main",
  description:
    "Juego competitivo por turnos donde los jugadores deben patear un balón lo más lejos posible y correr alrededor de su equipo para sumar puntos, mientras el equipo contrario intenta recuperar y devolver el balón rápidamente a la zona de tiro.",
  image: "/images/games/vuelta-al-mundo.jpg",
  materials: ["Balón de fútbol o similar", "Conos para marcar la zona de tiro"],
  intensity: "Media",
  participants: "10-40",
  recommendedAge: 8,
  objectives: [
    "Desarrollar velocidad y agilidad durante recorridos continuos",
    "Fomentar el trabajo en equipo para recuperar y devolver rápidamente el balón",
    "Promover la precisión en el golpeo inicial del balón"
  ],
  howToPlay:
    "Los jugadores se dividen en dos equipos, cada uno formando una hilera. En cada turno, un jugador del equipo atacante se posiciona en la zona de tiro y patea el balón lo más lejos que pueda. Inmediatamente después del tiro, debe comenzar a correr dando vueltas alrededor de su hilera en un recorrido circular previamente definido.\n\nMientras tanto, el equipo contrario debe correr a buscar el balón, traerlo de vuelta y colocarlo nuevamente en la zona de tiro. En el momento en que el balón vuelve a esta zona, el jugador que está corriendo debe detenerse de inmediato. Cada vuelta completada correctamente antes de que el balón sea devuelto suma un punto para su equipo.\n\nUna vez termina el turno, los equipos intercambian roles: ahora el otro equipo patea y corre, mientras el primero busca el balón. La dinámica continúa hasta que todos los integrantes de ambos equipos hayan pateado una vez.",
  rules: [
    "El jugador solo puede correr mientras el balón no haya sido devuelto a la zona de tiro",
    "Cada vuelta completa alrededor de la hilera vale un punto",
    "El equipo defensor debe devolver el balón a la zona de tiro lo más rápido posible",
    "El golpeo inicial debe hacerse desde la zona marcada",
    "Gana el equipo que acumule más puntos tras todos los turnos"
  ],
},
{
  id: 104,
  title: "Rayuela Zapato / Búsqueda del Zapato",
  type: "cooldown",
  description:
    "Juego lúdico y relajado en el que los jugadores deben lanzar sus zapatillas hacia un objetivo para sumar puntos y luego recuperar las suyas desde una pila mezclada, combinando precisión, velocidad y atención.",
  image: "/images/games/rayuela-zapato.jpg",
  materials: ["Hula hulas", "Zapatillas de los participantes"],
  intensity: "Baja",
  participants: "10-40",
  recommendedAge: 6,
  objectives: [
    "Mejorar la precisión en lanzamientos controlados",
    "Fomentar la atención y velocidad durante la búsqueda final",
    "Promover la cooperación y la coordinación en actividad de baja intensidad"
  ],
  howToPlay:
    "Se forman dos equipos. En la primera ronda, cada integrante se quita la zapatilla derecha y, por turnos, debe lanzarla desde una distancia determinada hacia un hula hula ubicado en el suelo. Si la zapatilla cae dentro del aro o lo toca, se suma un punto para el equipo. Una vez todos han lanzado, las zapatillas se recogen y se apilan en una sola pila desordenada.\n\nEl proceso se repite en la segunda ronda con la zapatilla izquierda, manteniendo la misma dinámica de lanzamientos y puntaje. Tras sumar los puntos totales de ambas rondas, se pasa a la etapa final.\n\nEn la última fase, todos los jugadores deben correr hacia la pila de zapatillas, encontrar ambas suyas, ponérselas correctamente y amarrarlas. Cuando todos los integrantes de un equipo estén formados en hilera con ambas zapatillas puestas y atadas, ese equipo gana.",
  rules: [
    "Los lanzamientos deben hacerse desde la distancia marcada sin sobrepasar la línea",
    "La zapatilla debe caer o tocar el hula hula para sumar punto",
    "Todas las zapatillas deben mezclarse en una sola pila antes de la búsqueda",
    "Cada jugador debe ponerse y amarrarse sus propias zapatillas antes de volver a la hilera",
    "Gana el equipo con más puntos en los lanzamientos y que complete primero la búsqueda final"
  ],
},
{
  id: 105,
  title: "Aplauso Pulguita",
  type: "cooldown",
  description:
    "Pequeña dinámica de animación y cierre en la que los participantes simulan tener una diminuta pulga en las manos mediante gestos suaves y finalizan con un único aplauso coordinado, creando un momento divertido y relajado.",
  image: "/images/games/aplauso-pulguita.jpg",
  materials: ["Ninguno"],
  intensity: "Baja",
  participants: "5-40",
  recommendedAge: 5,
  objectives: [
    "Generar un cierre lúdico y animado para la actividad",
    "Fomentar la coordinación grupal a través de movimientos sincronizados",
    "Promover un ambiente distendido y de relajación final"
  ],
  howToPlay:
    "Los jugadores forman un círculo y el facilitador indica que imaginarán sostener una pequeña pulga entre sus manos. Todos comienzan frotándose las yemas de los dedos suavemente como si la pulga se moviera, luego la 'pasan' de una mano a la otra con pequeños gestos teatrales. A medida que el juego avanza, el facilitador guía una secuencia breve de acciones suaves que simulan observarla, soplarla o sostenerla con cuidado. Finalmente, a la señal del facilitador, todos deben 'atraparla' con un único aplauso fuerte y coordinado en el mismo instante.",
  rules: [
    "Los jugadores deben mantenerse dentro del círculo durante toda la dinámica",
    "Las acciones deben realizarse de forma suave y coordinada para mantener el efecto lúdico",
    "El aplauso final se hace solo cuando el facilitador da la señal",
    "Se recomienda repetir la secuencia varias veces para lograr sincronización grupal"
  ],
},
{
  id: 106,
  title: "La Jaula",
  type: "cooldown",
  description:
    "Actividad tranquila y cooperativa en la que los equipos deben extraer pelotitas desde una jaula cilíndrica empujándolas cuidadosamente hacia arriba, usando únicamente un palito por persona. Requiere precisión, coordinación y comunicación constante.",
  image: "/images/games/la-jaula.jpg",
  materials: ["Jaulas cilíndricas plásticas", "Pelotitas plásticas", "Palitos de brocheta (uno por jugador)"],
  intensity: "Baja",
  participants: "6-20",
  recommendedAge: 8,
  objectives: [
    "Fomentar el trabajo en equipo mediante movimientos coordinados",
    "Desarrollar precisión y control fino al manipular objetos pequeños",
    "Promover una vuelta a la calma activa, suave y enfocada"
  ],
  howToPlay:
    "Los participantes se dividen en dos equipos, cada uno con una jaula cilíndrica llena de pelotitas plásticas. Cada jugador recibe un palito de brocheta, que será la única herramienta permitida para mover las pelotitas. La tarea consiste en empujar suavemente las pelotitas hacia arriba por el interior de la jaula hasta que salgan por la parte superior. Solo una pelotita puede ser trabajada por vez y los jugadores deben turnarse para colaborar, manteniendo precisión y evitando que caigan nuevamente dentro. Se requiere comunicación para decidir quién estabiliza, quién empuja y quién recibe la pelotita al salir. La dinámica continúa hasta que la jaula quede completamente vacía.",
  rules: [
    "Cada jugador debe usar únicamente su propio palito de brocheta",
    "Las pelotitas solo pueden tocarse con el palito, no con las manos",
    "Si una pelotita cae fuera accidentalmente, debe volver a la jaula",
    "Gana el equipo que logre vaciar completamente su jaula primero"
  ],
},
{
  id: 107,
  title: "El Ski",
  type: "main",
  description:
    "Juego colaborativo en el que equipos deben coordinarse para avanzar montados sobre skis gigantes compartidos. Requiere comunicación constante, sincronización de pasos y trabajo estratégico para que cada grupo de cuatro jugadores complete el recorrido sin perder el equilibrio.",
  image: "/images/games/el-ski.jpg",
  materials: ["Skis grandes de madera o material resistente (1 par por equipo)", "Línea de meta marcada"],
  intensity: "Media",
  participants: "8-40",
  recommendedAge: 10,
  objectives: [
    "Desarrollar coordinación grupal mediante pasos sincronizados",
    "Fomentar la comunicación constante entre los integrantes",
    "Promover la cooperación y el ritmo compartido para avanzar sobre una base común"
  ],
  howToPlay:
    "Cada equipo recibe un par de skis largos diseñados para cuatro personas. Los jugadores deben subirse colocando todos los pies izquierdos sobre un ski y los derechos sobre el otro. Una vez arriba, el grupo de cuatro debe coordinarse para avanzar simultáneamente, moviendo los skis al mismo ritmo y manteniendo el equilibrio.\n\nEl objetivo es llegar a la línea de meta sin caídas ni descoordinaciones. Cuando el grupo de cuatro llega, debe bajarse rápidamente, correr de vuelta hacia su equipo y entregar los skis al siguiente cuarteto. La dinámica continúa hasta que todos los integrantes del equipo hayan completado el recorrido utilizando los skis.",
  rules: [
    "Los jugadores deben avanzar únicamente moviendo los skis en sincronía",
    "Nadie puede bajarse de los skis antes de cruzar la línea de meta",
    "Si el grupo pierde el equilibrio, debe detenerse y reorganizarse sin avanzar",
    "Gana el equipo que logre que todos sus integrantes usen los skis y crucen la meta primero"
  ],
},
{
  id: 108,
  title: "Musaraña",
  type: "cooldown",
  description:
    "Actividad de mímica grupal en la que los equipos deben representar palabras únicamente con gestos y movimientos, fomentando la creatividad, la expresión corporal y el trabajo colaborativo en un ambiente relajado.",
  image: "/images/games/musarana.jpg",
  materials: ["Lista de palabras a adivinar"],
  intensity: "Baja",
  participants: "9-40",
  recommendedAge: 8,
  objectives: [
    "Estimular la creatividad y la expresión mediante mímica",
    "Fomentar la comunicación no verbal dentro del equipo",
    "Promover la cooperación y la participación activa durante la vuelta a la calma"
  ],
  howToPlay:
    "Los participantes se dividen en tres equipos. Cada equipo debe enviar a un representante hacia el director del juego para recibir una palabra secreta. Quien recibe la palabra vuelve con su equipo y la representa únicamente mediante gestos, expresiones y movimientos corporales, sin emitir sonidos ni palabras.\n\nEl resto del equipo observa y trata de adivinar la palabra. Cuando uno de los integrantes cree saber la respuesta, debe acercarse al representante y susurrarla al oído. Si es correcta, ese jugador debe correr hacia el director a buscar la siguiente palabra. El proceso se repite hasta completar toda la lista de palabras asignadas.",
  rules: [
    "El representante no puede hablar ni emitir sonidos durante la mímica",
    "Los integrantes del equipo deben comunicar sus respuestas al oído, no en voz alta",
    "Cada nueva palabra solo puede ser entregada cuando la anterior ha sido adivinada correctamente",
    "Gana el equipo que complete primero la lista de palabras asignadas"
  ],
},
{
  id: 109,
  title: "Memorice",
  type: "cooldown",
  description:
    "Versión cooperativa del clásico juego de memoria, en la que parejas de cada equipo deben descubrir pares iguales levantando tarjetas boca abajo, fomentando la concentración, la coordinación y una vuelta a la calma activa.",
  image: "/images/games/memorice.jpg",
  materials: ["Tarjetas con dibujos en pares (una pila por equipo)"],
  intensity: "Baja",
  participants: "6-30",
  recommendedAge: 6,
  objectives: [
    "Estimular la memoria visual y la concentración",
    "Fomentar la coordinación entre compañeros de equipo",
    "Promover una dinámica suave y colaborativa durante la vuelta a la calma"
  ],
  howToPlay:
    "Se forman dos equipos, cada uno con una pila de tarjetas colocadas boca abajo, de forma desordenada. Por turnos, una pareja de cada equipo avanza hacia su pila. Cada integrante de la pareja levanta una tarjeta. Si ambas tarjetas muestran el mismo dibujo, la pareja se las queda y vuelve a su equipo, dejando el espacio libre para que salga la siguiente pareja. Si las tarjetas no coinciden, deben volver a dejarlas boca abajo en la misma posición y regresar con su equipo sin llevarse nada.\n\nLa memoria colectiva del equipo es clave para recordar las posiciones de tarjetas vistas anteriormente, de modo que las siguientes parejas puedan encontrar coincidencias más rápidamente.",
  rules: [
    "Cada integrante de la pareja levanta solo una tarjeta por turno",
    "Las tarjetas deben volver a colocarse boca abajo si no coinciden",
    "No se permite mover ni cambiar el orden de la pila de tarjetas",
    "Gana el equipo que logre quedarse con todas sus tarjetas primero"
  ],
},
{
  id: 110,
  title: "Que No Caiga, Que No Toque el Suelo",
  type: "cooldown",
  description:
    "Actividad colaborativa y tranquila en la que todos los jugadores deben mantener una pelota de yoga en el aire, pasándola de persona a persona sin permitir que toque el suelo y asegurando que cada integrante participe.",
  image: "/images/games/que-no-caiga.jpg",
  materials: ["Pelota de yoga"],
  intensity: "Baja",
  participants: "5-30",
  recommendedAge: 6,
  objectives: [
    "Fomentar la colaboración y el trabajo conjunto",
    "Promover la concentración y la coordinación suave durante la vuelta a la calma",
    "Asegurar la participación equitativa de todas las personas del grupo"
  ],
  howToPlay:
    "Los jugadores forman un círculo amplio o se distribuyen libremente en el espacio. El facilitador entrega una pelota de yoga al primer jugador, quien debe golpearla suavemente hacia otro compañero. Cada jugador solo puede tocar la pelota una vez antes de que pase a otra persona. El objetivo es mantener la pelota en el aire el mayor tiempo posible sin que toque el suelo y asegurarse de que todos los integrantes del grupo la toquen al menos una vez.\n\nLas personas que ya tocaron la pelota deben moverse o ubicar posiciones estratégicas para permitir que quienes faltan puedan participar sin riesgo de choques o caídas. El desafío se completa cuando la pelota ha pasado por todos los jugadores sin caer.",
  rules: [
    "La pelota no puede tocar el suelo en ningún momento",
    "Cada jugador solo puede tocar la pelota una vez por ronda",
    "No se permite retener la pelota: solo se puede golpear suavemente para pasarla",
    "El grupo completa el desafío cuando todos han tocado la pelota sin interrupciones"
  ],
},
{
  id: 111,
  title: "Aro Móvil",
  type: "warmup",
  description:
    "Juego activo y dinámico inspirado en el handball, pero con la particularidad de que la portería es un aro móvil transportado por un jugador. Esto exige precisión en los lanzamientos, coordinación grupal y constante adaptación al movimiento del objetivo.",
  image: "/images/games/aro-movil.jpg",
  materials: ["Pelota liviana", "Hula hulas (uno por equipo)"],
  intensity: "Media",
  participants: "10-30",
  recommendedAge: 10,
  objectives: [
    "Fomentar el trabajo en equipo mediante desplazamientos coordinados",
    "Desarrollar precisión en lanzamientos a un objetivo móvil",
    "Mejorar la agilidad y resistencia al seguir el ritmo del juego"
  ],
  howToPlay:
    "Dos equipos se enfrentan siguiendo reglas similares al handball. Cada equipo elige a un jugador encargado de sostener un hula hula, el cual funciona como portería móvil. Este jugador debe desplazarse dentro de la zona permitida para ofrecer opciones a sus compañeros, mientras intenta evitar que el aro sea alcanzado por los lanzamientos del equipo contrario.\n\nLos demás jugadores avanzan mediante pases y movimientos tácticos hasta generar posiciones favorables de tiro. Un gol se marca cuando la pelota pasa limpiamente a través del hula hula sostenido por el portero móvil. Tras un gol, la posesión cambia de equipo y el juego continúa de forma fluida.",
  rules: [
    "El portero móvil debe sostener el hula hula visible y a la altura reglamentaria, sin cubrirlo con el cuerpo",
    "El jugador que porta el aro puede moverse, pero no puede correr con velocidad excesiva para impedir el juego",
    "El gol es válido solo si la pelota atraviesa claramente el aro sin rebotes externos",
    "Se aplican las reglas básicas del handball: no caminar con la pelota, no contacto físico excesivo y pases limpios",
    "Gana el equipo que anote más goles al finalizar el tiempo establecido"
  ],
},
{
  id: 112,
  title: "Derribando el Platillo Volador",
  type: "main",
  description:
    "Juego competitivo y dinámico en el que un equipo debe lanzar y recibir frisbees a través de un área mientras el equipo contrario intenta derribarlos en el aire usando balones, combinando precisión, coordinación y estrategia.",
  image: "/images/games/derribando-el-platillo-volador.jpg",
  materials: ["Frisbees", "Balones livianos", "Conos para delimitar el área de juego"],
  intensity: "Media",
  participants: "10-40",
  recommendedAge: 10,
  objectives: [
    "Mejorar la precisión en lanzamientos y recepciones de frisbee",
    "Desarrollar coordinación visual-motora para interceptar objetos en movimiento",
    "Fomentar estrategias ofensivas y defensivas colectivas"
  ],
  howToPlay:
    "El juego comienza con dos equipos. El primer equipo se divide en dos grupos que se ubican en lados opuestos del área delimitada. Su objetivo es lanzar frisbees de un lado al otro para que sean recibidos exitosamente por sus compañeros. Cada recepción limpia suma un punto.\n\nEl segundo equipo se distribuye a lo largo de los costados laterales del área y su misión es lanzar balones para intentar derribar los frisbees en el aire antes de que lleguen a su destino. Los frisbees pueden volar de diversas alturas y trayectorias, por lo que la comunicación y la lectura del juego son fundamentales.\n\nEl equipo lanzador tiene un tiempo limitado para acumular la mayor cantidad de puntos posible. Al finalizar el tiempo, los equipos intercambian roles y repiten la dinámica. Gana el equipo que haya logrado sumar más recepciones válidas.",
  rules: [
    "Solo se obtiene punto si el frisbee es recibido limpiamente por un compañero sin caer al suelo",
    "El equipo defensor solo puede lanzar balones desde los laterales del área",
    "No se permite bloquear físicamente a los jugadores ni invadir el espacio del otro equipo",
    "Los frisbees deben lanzarse desde detrás de la línea establecida en cada extremo",
    "Gana el equipo con más puntos al término de ambas rondas"
  ],
},
{
  id: 113,
  title: "El Tiburón",
  type: "cooldown",
  description:
    "Dinámica tranquila pero llena de suspenso en la que un tiburón se desplaza bajo una lona mientras los demás jugadores, sentados alrededor, generan ‘olas’ con sus movimientos. La atención, la comunicación y la cooperación son clave para evitar ser arrastrados bajo la lona.",
  image: "/images/games/el-tiburon.jpg",
  materials: ["Lona circular grande"],
  intensity: "Baja",
  participants: "8-40",
  recommendedAge: 6,
  objectives: [
    "Mejorar la atención colectiva durante una dinámica de baja intensidad",
    "Fomentar la comunicación entre jugadores para alertar y coordinar rescates",
    "Promover la cooperación y la participación activa en un ambiente lúdico"
  ],
  howToPlay:
    "Los jugadores se sientan formando un círculo y sujetan una lona circular con ambas manos, manteniendo sus pies ocultos debajo de ella. Deben agitar la lona suavemente para simular el movimiento del mar. Se elige a un jugador para ser el tiburón, quien se mueve arrastrándose bajo la lona, intentando tomar de los pies o piernas a los jugadores para arrastrarlos hacia adentro. Cuando un jugador es arrastrado completamente bajo la lona, se considera ‘ahogado’ y pasa a ser también tiburón.\n\nAdemás, se designan dos salvavidas que se desplazan por fuera del círculo. Su función es rescatar a cualquier jugador que esté siendo arrastrado, siempre que aún no haya desaparecido completamente bajo la lona. Pueden tomar a la persona de los brazos y ayudarla a regresar a su lugar.\n\nEl juego avanza lentamente, convirtiéndose en una dinámica divertida y coordinada donde cada rol es importante para mantener el suspenso y la cooperación.",
  rules: [
    "Los jugadores deben mantener sus pies ocultos bajo la lona en todo momento",
    "El tiburón solo puede moverse debajo de la lona, sin levantarse",
    "Un jugador se considera ‘ahogado’ solo cuando está completamente bajo la lona",
    "Los salvavidas solo pueden intervenir si la persona aún no ha sido arrastrada por completo",
    "El juego termina cuando la mayoría o la totalidad del grupo se ha convertido en tiburones"
  ],
},
{
  id: 114,
  title: "Bapne",
  type: "cooldown",
  description:
    "Dinámica rítmica inspirada en ejercicios de estimulación motora y cognitiva, donde los participantes coordinan pasos y movimientos corporales al ritmo de un canto que se acelera progresivamente, favoreciendo la memoria, la atención y la coordinación.",
  image: "/images/games/bapne.jpg",
  materials: ["Ninguno"],
  intensity: "Baja",
  participants: "5-30",
  recommendedAge: 8,
  objectives: [
    "Mejorar la coordinación motora mediante pasos y gestos sincronizados",
    "Estimular la memoria a través de la repetición estructurada del canto",
    "Favorecer una vuelta a la calma activa mediante ritmo y secuencias suaves"
  ],
  howToPlay:
    "Los jugadores se colocan de pie en un espacio amplio. El facilitador indica un ritmo base y todos comienzan marcando el tiempo con pasos hacia adelante y hacia atrás en un patrón constante. Sobre este ritmo, se añaden movimientos corporales simples, como palmas, toques en los hombros, o gestos coordinados que acompañan la canción.\n\nLa secuencia vocal es: “wariacha wariacha, wario wario” (dos veces), seguida de “simples cosas que tú puedes hacer, solo necesitas un simple poder”. Los participantes deben reproducir la secuencia completa de pasos y gestos manteniendo el ritmo.\n\nA medida que la canción avanza, el facilitador incrementa la velocidad progresivamente, lo que obliga a los jugadores a concentrarse, recordar la secuencia y mantener la coordinación.",
  rules: [
    "Los pasos hacia adelante y hacia atrás deben mantenerse al ritmo del canto",
    "Los participantes deben realizar los movimientos corporales indicados sin omitir pasos",
    "La secuencia debe completarse incluso si aumenta la velocidad",
    "Quien pierda el ritmo debe reincorporarse suavemente sin interrumpir al grupo"
  ],
},
{
  id: 115,
  title: "La Corbata",
  type: "main",
  description:
    "Juego competitivo y veloz en el que los participantes deben realizar nudos simples con diferentes corbatas según su color, manteniendo coordinación y rapidez bajo presión mientras circulan dos corbatas simultáneamente por el círculo.",
  image: "/images/games/la-corbata.jpg",
  materials: ["Dos corbatas (una clara y una oscura)"],
  intensity: "Media",
  participants: "6-30",
  recommendedAge: 12,
  objectives: [
    "Mejorar la coordinación motora fina al realizar nudos rápidamente",
    "Fomentar la concentración bajo presión ante estímulos simultáneos",
    "Promover la agilidad mental para responder según el color de la corbata"
  ],
  howToPlay:
    "Los jugadores se sientan o paran formando un círculo amplio. El facilitador entrega dos corbatas: una de color claro y otra de color oscuro, que comenzarán en puntos distintos del círculo. Las corbatas deben circular siempre hacia la izquierda.\n\nCuando un jugador recibe la corbata de color claro, debe realizar un nudo simple alrededor de su cuello —rápido pero seguro—, deshacerlo inmediatamente y luego pasar la corbata al siguiente jugador. Si recibe la corbata oscura, debe realizar dos nudos simples antes de pasarla. La dinámica continúa de forma acelerada conforme las corbatas avanzan simultáneamente por el círculo.\n\nEl juego genera tensión y rapidez a medida que las corbatas se acercan entre sí. La ronda concluye cuando un jugador recibe ambas corbatas al mismo tiempo, lo cual indica el final del juego.",
  rules: [
    "Las corbatas deben circular siempre hacia la izquierda sin saltear jugadores",
    "El jugador debe completar los nudos según el color recibido antes de pasar la corbata",
    "Los nudos deben ser simples y ejecutados alrededor del cuello para que cuenten",
    "El juego termina cuando un jugador recibe las dos corbatas simultáneamente"
  ],
},
{
  id: 116,
  title: "Calle Avenida",
  type: "main",
  description:
    "Juego dinámico y de alta coordinación en el que el grupo forma diferentes estructuras con sus cuerpos en respuesta a comandos verbales, mientras un gato intenta atrapar a un ratón sin poder atravesar las ‘calles’ formadas por los brazos de sus compañeros.",
  image: "/images/games/calle-avenida.jpg",
  materials: ["Ninguno"],
  intensity: "Media",
  participants: "10-40",
  recommendedAge: 10,
  objectives: [
    "Mejorar la velocidad de reacción ante comandos verbales",
    "Desarrollar coordinación grupal para formar estructuras rápidamente",
    "Fomentar la agilidad y estrategia del gato y el ratón"
  ],
  howToPlay:
    "Se elige a un jugador para ser el gato y a otro para ser el ratón. El resto de los participantes se distribuye formando un cuadrado compuesto por filas y columnas, manteniendo los brazos estirados para crear ‘calles’ por donde el gato puede desplazarse.\n\nDurante el juego, cualquier jugador externo o el facilitador puede gritar diferentes comandos:\n\n- **“Calle”**: los jugadores se reacomodan formando hileras (filas horizontales).\n- **“Avenida”**: las filas cambian a columnas verticales.\n- **“Pasaje”**: los jugadores rotan para formar diagonales.\n- **“Rotonda”**: los jugadores doblan los brazos en ángulos de 90 grados para cerrar el cuadrado.\n\nMientras las formaciones cambian, el gato intenta perseguir al ratón moviéndose únicamente por las calles formadas. No puede atravesar brazos ni pasar por debajo de ellos. El ratón debe usar las transformaciones del grupo para escapar estratégicamente. La ronda termina cuando el gato atrapa al ratón, momento en el que se asignan nuevos roles.",
  rules: [
    "El gato no puede atravesar ni pasar por debajo de los brazos de los jugadores",
    "El ratón tampoco puede romper la estructura del cuadrado",
    "Las formaciones deben ejecutarse rápidamente al escuchar el comando",
    "El juego finaliza cuando el gato atrapa al ratón y se asignan nuevos turnos"
  ],
},
{
  id: 117,
  title: "Misión Imposible 2.0",
  type: "cooldown",
  description:
    "Actividad cooperativa en la que dos equipos deben diseñar y ejecutar una estrategia para extraer lentejas ubicadas en el centro de un círculo utilizando solo una cuerda, sin que nadie pueda pisar el interior de la zona.",
  image: "/images/games/mision-imposible-2-0.jpg",
  materials: ["Cuerda larga (una por equipo)", "Lentejas", "Conos o cinta para marcar el círculo"],
  intensity: "Baja",
  participants: "6-30",
  recommendedAge: 10,
  objectives: [
    "Fomentar el trabajo en equipo a través de la resolución conjunta de un desafío",
    "Desarrollar la estrategia y la planificación antes de actuar",
    "Promover la comunicación clara y la coordinación en una actividad tranquila"
  ],
  howToPlay:
    "Se marca un círculo en el suelo y en el centro se colocan tres lentejas (u objetos pequeños similares). Cada equipo recibe una cuerda larga y se ubica alrededor del círculo, sin poder poner un pie dentro de la zona marcada. El desafío consiste en coordinarse para manipular la cuerda de tal forma que logren arrastrar o enganchar las lentejas y sacarlas fuera del círculo, sin que nadie cruce la línea.\n\nLos jugadores pueden doblar la cuerda, hacer lazos, tensarla entre varios integrantes o combinar distintas posiciones para acercarla a las lentejas. Deben dialogar, probar distintas ideas y ajustar su estrategia según lo que funcione o no. La misión se completa cuando el equipo logra extraer las tres lentejas del interior del círculo usando únicamente la cuerda.",
  rules: [
    "Ningún jugador puede poner un pie dentro del círculo en ningún momento",
    "Las lentejas solo pueden moverse utilizando la cuerda, no se pueden tocar con las manos",
    "Si alguien pisa dentro del círculo, el equipo debe devolver la lenteja más cercana a su posición original",
    "Gana el equipo que logre extraer primero sus tres lentejas sin infringir las reglas"
  ],
},
{
  id: 118,
  title: "Naciones",
  type: "main",
  description:
    "Dinámica competitiva donde dos equipos deben coordinarse para eliminar a los jugadores contrarios utilizando un balón, aprovechando estrategias de posición, precisión y apoyo del embajador.",
  image: "/images/games/naciones.jpg",
  materials: ["Balón de goma o esponja"],
  intensity: "Media",
  participants: "10-50",
  recommendedAge: 10,
  objectives: [
    "Fomentar el trabajo en equipo",
    "Desarrollar la precisión al lanzar",
    "Estimular la agilidad y la reacción rápida"
  ],
  howToPlay:
    "Se forman dos equipos y cada uno escoge a un jugador para cumplir el rol de embajador. El juego consiste en intentar quemar a los integrantes del equipo contrario utilizando un balón, sin que los jugadores salgan de su propia área. El embajador puede moverse libremente alrededor del perímetro del equipo rival y lanzar desde allí, además de tener la opción de ceder una vida a un compañero. Cada vez que un jugador es quemado, pasa a ser embajador, pero sin el beneficio de las tres vidas iniciales del embajador principal.",
  rules: [
    "Los jugadores no pueden salir de su área asignada",
    "El embajador puede recorrer el perímetro del equipo contrario",
    "El embajador puede ceder una vida a un compañero",
    "Un jugador quemado pasa automáticamente a ser embajador",
    "El balón debe lanzarse sin conducta peligrosa"
  ],
},
{
  id: 119,
  title: "Invasión",
  type: "main",
  description:
    "Variante estratégica y dinámica del juego Naciones, en la que cuatro equipos compiten simultáneamente y deben expandir su territorio quemando jugadores rivales, quienes pasan a reforzar al equipo que los eliminó.",
  image: "/images/games/invasion.jpg",
  materials: ["Balón de goma o esponja"],
  intensity: "Media",
  participants: "20-80",
  recommendedAge: 10,
  objectives: [
    "Fomentar el trabajo en equipo",
    "Mejorar la precisión y coordinación en el lanzamiento",
    "Estimular la agilidad y la toma rápida de decisiones",
    "Promover estrategias colectivas para controlar el territorio"
  ],
  howToPlay:
    "Se forman cuatro equipos, cada uno con su propio territorio. Los jugadores deben intentar quemar a miembros de otros equipos utilizando un balón. Cada vez que un jugador es quemado, debe integrarse inmediatamente al equipo que lo eliminó. Si se quema al último integrante de un equipo, todo su territorio pasa a manos del equipo que efectuó el último lanzamiento. El juego avanza con territorios cambiando de dueño a medida que los equipos se expanden. La dinámica continúa hasta que todos los jugadores terminen formando parte de un único equipo con un territorio unificado.",
  rules: [
    "Cada jugador quemado debe integrarse al equipo que lo eliminó",
    "Si el último jugador de un equipo es quemado, su territorio se transfiere por completo",
    "Los jugadores deben permanecer dentro de su territorio mientras atacan o se defienden",
    "El balón debe utilizarse de manera segura, sin lanzamientos peligrosos",
    "El juego termina cuando todos los equipos se han unificado bajo un solo territorio"
  ],
},
{
  id: 120,
  title: "El Auto de Mi Jefe",
  type: "cooldown",
  description:
    "Actividad musical y de coordinación donde los participantes cantan una canción repetitiva eliminando palabras progresivamente, lo que exige memoria, atención y sincronización grupal.",
  image: "/images/games/el-auto-de-mi-jefe.jpg",
  materials: ["Ninguno"],
  intensity: "Baja",
  participants: "5-40",
  recommendedAge: 6,
  objectives: [
    "Estimular la memoria secuencial",
    "Mejorar la coordinación grupal",
    "Favorecer una transición tranquila hacia la calma después de actividades intensas"
  ],
  howToPlay:
    "Los participantes cantan la canción: “El auto de mi jefe tiene un hoyo en la rueda” (tres veces) seguida de “y con un chicle lo taparé”, realizando la mímica correspondiente. Cada vez que la canción se repite, se elimina una palabra clave y se reemplaza por un silencio, manteniendo el ritmo y la mímica. Las palabras que se eliminan, en este orden, son: “auto”, “jefe”, “hoyo” y “rueda”. A medida que avanzan las rondas, el desafío aumenta al tener que recordar qué palabra ya no se canta.",
  rules: [
    "Se debe mantener el ritmo de la canción en todas las rondas",
    "Cada palabra eliminada debe reemplazarse con un silencio, sin alterar la mímica",
    "El grupo debe cantar de manera coordinada",
    "No está permitido agregar palabras o reemplazos sonoros distintos al silencio"
  ],
},
{
  id: 121,
  title: "Misión Imposible",
  type: "main",
  description:
    "Actividad recreativa por equipos en la que los participantes deben completar una serie de desafíos creativos, sociales y expressivos dentro de un módulo. Cada misión requiere ingenio, cooperación y disposición para interactuar con otras personas dentro del establecimiento. Gana el equipo que registre y complete la mayor cantidad de pruebas.",
  image: "/images/games/mision-imposible.jpg",
  materials: ["Celular para grabar", "Anillo simbólico (puede ser improvisado)", "Balón", "Elementos básicos para acrosport"],
  intensity: "Media",
  participants: "10-60",
  recommendedAge: 14,
  objectives: [
    "Promover el trabajo en equipo",
    "Fomentar la creatividad y la expresión corporal",
    "Impulsar la interacción social con personas externas al curso",
    "Celebrar el cumpleaños del profesor mediante una dinámica lúdica y memorable"
  ],
  howToPlay:
    "Los estudiantes se organizan en equipos y reciben una lista de desafíos que deben completar dentro del módulo, registrando cada uno mediante una grabación. Entre las misiones se incluyen: enseñar el juego 'La Ameba' a otro curso deportivo; dibujar la palabra 'LIDERAZGO' con los cuerpos; realizar un pie de cueca con tres personas externas al curso; representar un cuento infantil incorporando a tres participantes externos; pedir matrimonio simbólicamente a cuatro personas ajenas al curso usando un anillo improvisado; componer e interpretar un rap grupal titulado 'Liderazgo, Juegos y Recreación'; pedir permiso a un profesor para hablarle sobre la importancia del suspensor en el adulto mayor; realizar una formación de acrosport; solicitar a un profesor que cuente un chiste y que todos reaccionen riendo en el suelo; y lograr que todo el equipo toque un balón sin que caiga al piso. El equipo que complete y registre más misiones dentro del tiempo establecido será el ganador.",
  rules: [
    "Cada desafío debe ser registrado en video para validarlo",
    "Las interacciones con personas externas deben ser respetuosas y voluntarias",
    "Todas las misiones deben completarse dentro del tiempo asignado",
    "El trabajo debe hacerse en equipo; ninguna misión puede ejecutarse de forma individual",
    "Se deben cumplir las normas de seguridad en acrosport y actividades físicas",
    "Gana el equipo que complete correctamente la mayor cantidad de misiones"
  ],
},
{
  id: 122,
  title: "A Paso Parejo",
  type: "warmup",
  description:
    "Dinámica de coordinación por parejas donde los equipos compiten por trasladar lentejas desde el centro de la cancha hasta su zona, avanzando con los pies atados entre sí. Combina estrategia, velocidad y sincronización.",
  image: "/images/games/a-paso-parejo.jpg",
  materials: ["Cuerdas o pañolines", "8 lentejas por equipo"],
  intensity: "Media",
  participants: "24-32",
  recommendedAge: 8,
  objectives: [
    "Estimular la coordinación motora en parejas",
    "Fomentar la rapidez y la planificación estratégica",
    "Promover el trabajo cooperativo dentro del equipo"
  ],
  howToPlay:
    "El grupo se divide en cuatro equipos de seis a ocho integrantes. Cada equipo se ubica en un extremo de la cancha y recibe cuerdas o pañolines para atar los pies entre cada pareja. En la línea central se colocan ocho lentejas para cada equipo. Las parejas se forman y se ordenan en una hilera. Cuando inicia el juego, la primera pareja debe avanzar con los pies atados hacia la línea central, recoger una lenteja y regresar al punto de partida. Al llegar, chocan las manos con la siguiente pareja para que continúe la misión. El proceso se repite hasta que el equipo consiga trasladar sus ocho lentejas a su zona.",
  rules: [
    "Los pies de cada pareja deben permanecer atados durante todo su turno",
    "Solo se puede trasladar una lenteja por viaje",
    "La siguiente pareja solo puede partir después de chocar manos con la anterior",
    "Las lentejas deben colocarse dentro de la zona asignada al equipo",
    "Gana el equipo que logre trasladar primero sus ocho lentejas"
  ],
},
{
  id: 123,
  title: "Captura la Bandera",
  type: "main",
  description:
    "Juego competitivo y estratégico entre cuatro equipos que deben proteger su bandera mientras intentan capturar las de los demás. Combina agilidad, coordinación, planificación colectiva y dinámicas de alianzas temporales.",
  image: "/images/games/captura-la-bandera.jpg",
  materials: ["Pañolines de distintos colores", "4 banderas (una por equipo)", "Delimitación de la cancha"],
  intensity: "Media",
  participants: "20-60",
  recommendedAge: 10,
  objectives: [
    "Fomentar la colaboración y la comunicación estratégica",
    "Desarrollar agilidad y capacidad de evasión",
    "Promover la coordinación en roles defensivos y ofensivos",
    "Estimular la planificación táctica en un entorno dinámico"
  ],
  howToPlay:
    "La cancha se divide en cuatro zonas, cada una con una base que contiene la bandera de un equipo. Se forman cuatro equipos, cada uno con pañolines del color correspondiente a su bandera. Cada jugador debe llevar su pañolín enganchado en la cadera, colgando hasta la altura de la rodilla. El objetivo es cruzar la cancha, ingresar a las bases rivales y capturar sus banderas. Para empezar, cada equipo se posiciona cerca de su base y, si lo desea, puede definir roles como atacantes o defensas.\n\nPara avanzar hacia otra base, los jugadores deben evitar que les quiten el pañolín. Si un pañolín es robado, el jugador queda eliminado temporalmente: debe sentarse en el lugar donde fue capturado, pudiendo desempeñar un rol de vigía para alertar a sus compañeros.\n\nPara ingresar a una base rival, un jugador debe portar un pañolín del color de la bandera que quiere capturar. Al tomar la bandera enemiga y emprender el regreso, el jugador se vuelve inmune a la eliminación. Una vez la bandera es llevada a la base propia, ese equipo conquista al equipo derrotado, fusionándose ambos. Desde ese momento trabajan juntos y su base contiene todas las banderas capturadas. Para que otro equipo capture esta base fusionada necesitará llevar pañolines de cada uno de los colores presentes, y al ingresar deberá capturar todas las banderas.",
  rules: [
    "Cada jugador debe llevar su pañolín visible y correctamente colocado en la cadera",
    "Si un jugador pierde su pañolín, debe sentarse y permanecer en el lugar como vigía",
    "Para ingresar a una base enemiga se debe portar un pañolín del color de dicha base",
    "Quien transporta una bandera es inmune hasta llegar a su base",
    "Las banderas capturadas deben colocarse en la base del equipo que las obtuvo",
    "Una base fusionada requiere pañolines de todos los colores presentes para ser atacada",
    "Gana el equipo que logre reunir las cuatro banderas"
  ],
},
{
  id: 124,
  title: "Carrera de Pulpos",
  type: "warmup",
  description:
    "Actividad grupal donde cada equipo simula ser un pulpo: un jugador ocupa el centro y los demás forman los tentáculos. El objetivo es coordinar movimientos para acercar lentejas al interior del círculo y permitir que el jugador central las recoja.",
  image: "/images/games/carrera-de-pulpos.jpg",
  materials: ["Lentejas o pequeños objetos recogibles"],
  intensity: "Baja",
  participants: "32 (4 equipos de 8)",
  recommendedAge: 8,
  objectives: [
    "Fomentar el trabajo en equipo",
    "Desarrollar la coordinación grupal",
    "Promover la comunicación efectiva entre los miembros del equipo",
    "Estimular la colaboración para resolver un objetivo común"
  ],
  howToPlay:
    "Se forman cuatro equipos de ocho personas. Siete integrantes de cada equipo se toman de los brazos formando un círculo y mirando hacia afuera, representando los tentáculos del pulpo. En el centro se ubica el octavo jugador, quien será el encargado de recoger las lentejas. Las lentejas se dispersan en la periferia del equipo. Los jugadores del círculo deben coordinar sus movimientos para guiar la lenteja hacia el interior del mismo mediante desplazamientos grupales. Una vez que la lenteja queda dentro del círculo, el jugador central puede agacharse y recogerla. El proceso se repite durante el tiempo asignado. Gana el equipo que consiga reunir más lentejas.",
  rules: [
    "Los jugadores del círculo deben mantenerse tomados de los brazos en todo momento",
    "Solo la persona ubicada en el centro puede recoger las lentejas",
    "Las lentejas deben entrar al círculo sin que los jugadores suelten los brazos",
    "No se permite empujar a otro equipo ni interferir con el juego ajeno",
    "Gana el equipo que junte más lentejas dentro del tiempo establecido"
  ],
},
{
  id: 125,
  title: "Conecta Pañuelos",
  type: "main",
  description:
    "Competencia por equipos basada en un tablero de aros donde los jugadores deben lanzar pañuelos para ocupar espacios y lograr formar cuatro en línea. Combina coordinación, estrategia y rapidez en la rotación de turnos.",
  image: "/images/games/conecta-panuelos.jpg",
  materials: [
    "25 aros dispuestos en un tablero 5x5",
    "Pañuelos de distintos colores (uno por equipo)",
    "Conos o marcas para hileras y zonas de pañuelos"
  ],
  intensity: "Media",
  participants: "12-40",
  recommendedAge: 8,
  objectives: [
    "Promover la coordinación y precisión al lanzar",
    "Fomentar el trabajo en equipo a través de la estrategia colectiva",
    "Estimular la planificación para lograr formaciones ganadoras",
    "Desarrollar rapidez en la toma de turnos y ejecución"
  ],
  howToPlay:
    "Se disponen 25 aros en el suelo formando un tablero de 5 x 5. Cada equipo se coloca detrás de un cono formando una hilera, con una zona de pañuelos del color correspondiente entre la hilera y el tablero. A la señal de inicio, el primer jugador corre, toma un pañuelo de su zona y avanza hacia el tablero para intentar dejarlo caer dentro del aro que elija, sin pisarlo y procurando que el pañuelo quede completamente dentro sin tocar bordes.\n\nSi el pañuelo entra limpio en el aro, ese espacio queda ocupado por su equipo. Si toca el borde o cae fuera, la jugada no es válida: el jugador debe recoger su pañuelo y volver con él. Luego regresa al final de la hilera. El siguiente jugador repite el proceso.\n\nEl objetivo es ocupar posiciones que permitan formar cuatro pañuelos alineados (horizontal, vertical o diagonal). En variantes del juego, también pueden considerarse figuras como L o cuadrado. Solo puede haber un jugador por equipo dentro de la zona de aros a la vez. El primer equipo en completar la figura ganadora obtiene la victoria.",
  rules: [
    "El pañuelo debe quedar totalmente dentro del aro sin tocar los bordes para que la jugada sea válida",
    "Si la jugada es inválida, el jugador debe recoger el pañuelo y volver con él",
    "Solo un jugador por equipo puede ingresar a la zona de aros simultáneamente",
    "Los jugadores deben lanzar o dejar caer el pañuelo sin pisar los aros",
    "El equipo ganador es el primero en completar cuatro en línea o la figura estipulada en la variante",
    "La rotación debe respetarse: cada jugador vuelve al final de la hilera tras su turno"
  ],
},
{
  id: 126,
  title: "Contacto",
  type: "cooldown",
  description:
    "Juego verbal y estratégico donde los equipos deben adivinar una palabra secreta dada por su líder. A través de pistas indirectas, los jugadores buscan generar un 'contacto' que permita revelar letras de la palabra principal. Combina creatividad, comunicación precisa y coordinación grupal.",
  image: "/images/games/contacto.jpg",
  materials: ["Ninguno"],
  intensity: "Baja",
  participants: "12-40 (4 grupos)",
  recommendedAge: 10,
  objectives: [
    "Fomentar la creatividad en la elaboración de pistas",
    "Desarrollar la comunicación verbal y la escucha activa",
    "Promover el trabajo colaborativo para deducir la palabra secreta",
    "Estimular el pensamiento lógico y asociativo"
  ],
  howToPlay:
    "Se forman cuatro grupos con igual número de participantes y cada equipo se sienta en círculo. El líder de cada grupo piensa una palabra secreta y revela únicamente su primera letra. A partir de esa letra, los jugadores intentan idear palabras que comiencen igual, pero en lugar de decirlas directamente, entregan pistas breves e indirectas para que un compañero pueda inferir la palabra.\n\nCuando un jugador cree haber entendido la pista de otro, dice “¡Contacto!”. Ambos cuentan hasta tres y dicen simultáneamente la palabra que creen que corresponde a la pista. Si coinciden, el contacto es válido y el líder debe revelar la siguiente letra de la palabra secreta. El proceso continúa hasta que alguien adivina la palabra completa o se revele por entero gracias a los contactos.\n\nSin embargo, si el líder interpreta correctamente la pista y anticipa qué palabra intentarán decir los jugadores, puede “cortar el contacto” anunciando: “La palabra no es X”, donde X es la palabra que el grupo planeaba revelar. Esto impide sumar una nueva letra y mantiene la dificultad del juego.",
  rules: [
    "La pista debe ser breve, indirecta y relacionada únicamente con la palabra pensada",
    "Para un contacto válido, ambos jugadores deben decir la misma palabra al unísono",
    "El líder solo puede cortar el contacto si entiende la pista y anticipa la palabra",
    "Cada contacto exitoso obliga al líder a revelar una letra adicional de la palabra secreta",
    "El juego termina cuando un jugador adivina la palabra o todas las letras han sido reveladas"
  ],
},
{
  id: 127,
  title: "Cortocircuito",
  type: "main",
  description:
    "Circuito competitivo compuesto por tres estaciones que ponen a prueba la coordinación corporal, la comunicación efectiva y el pensamiento lógico. Los equipos avanzan por las estaciones en paralelo, buscando completar el recorrido en el menor tiempo posible.",
  image: "/images/games/cortocircuito.jpg",
  materials: [
    "Pelotas de esponja",
    "Lentejas u objetos pequeños para marcar",
    "Aros de hula-hula",
    "Adivinanzas preparadas"
  ],
  intensity: "Media",
  participants: "28-32 (4 subgrupos de 7-8 personas)",
  recommendedAge: 10,
  objectives: [
    "Desarrollar la coordinación y motricidad fina y gruesa",
    "Fortalecer la comunicación y el trabajo colaborativo",
    "Estimular el pensamiento lógico mediante la resolución de adivinanzas",
    "Impulsar la sincronización y la organización grupal bajo presión"
  ],
  howToPlay:
    "El curso se divide en cuatro subgrupos de siete a ocho personas cada uno. Todos se ubican en paralelo para que los equipos avancen simultáneamente por el circuito.\n\n**Estación 1: Pase de pelota con tobillos**\nLos integrantes del equipo se sientan en hilera con las piernas extendidas. La primera persona sujeta una pelota de esponja entre sus tobillos y debe pasarla al compañero o compañera de al lado usando únicamente los tobillos, hasta que llegue al último integrante, quien deberá colocarla sobre una lenteja para finalizar la estación.\n- Si la pelota cae en la primera mitad de la hilera (entre las primeras 3–4 personas), el equipo debe reiniciar desde el comienzo.\n- Si cae en la segunda mitad, el grupo continúa desde donde cayó la pelota.\n\n**Estación 2: Paso del aro de hula-hula**\nEl equipo se coloca de pie en hilera, tomados de las manos. La primera persona recoge un aro de hula-hula y debe pasarlo por encima y a través de los cuerpos de todos los integrantes, sin soltarse de las manos, hasta llegar a la última persona, quien deja el aro en el suelo para completar la estación.\n- Nadie puede soltarse de las manos.\n- Las manos libres no pueden sostener el aro para facilitar el paso.\n\n**Estación 3: Adivinanza grupal**\nEl equipo elige a una persona para acercarse al dirigente, quien entregará una adivinanza. Esta persona debe memorizarla y comunicarla al equipo, que debe resolverla en conjunto. Cuando crean tener la respuesta, la misma persona se dirige nuevamente al dirigente para decirla.\n- Cada equipo cuenta con dos oportunidades para responder.\n- Si fallan ambas, pueden solicitar una nueva adivinanza, pero solo mientras los demás equipos no hayan completado la estación.\n\nEl equipo que finalice antes las tres estaciones será el ganador.",
  rules: [
    "En la primera estación, si la pelota cae en la primera mitad de la hilera, se reinicia; si cae en la segunda, se continúa desde el punto de caída",
    "En la segunda estación, los jugadores no pueden soltarse de las manos ni sostener el aro con manos libres",
    "Solo la persona designada puede recibir y responder la adivinanza",
    "Cada adivinanza tiene dos oportunidades de respuesta",
    "Gana el equipo que complete las tres estaciones en el menor tiempo"
  ],
},
{
  id: 128,
  title: "El Coleccionista",
  type: "warmup",
  description:
    "Dinámica de desplazamiento y estrategia donde los equipos deben recolectar la mayor cantidad de lentejas posibles en la cancha. Combina colaboración sin comunicación verbal, duelos de cachipún y decisiones tácticas sobre protección y recolección.",
  image: "/images/games/el-coleccionista.jpg",
  materials: ["Pañolines de colores para diferenciar equipos", "Aros para zonas de recolección", "Aproximadamente 50 lentejas"],
  intensity: "Media",
  participants: "20-40 (4 equipos)",
  recommendedAge: 8,
  objectives: [
    "Estimular el desplazamiento y la movilidad en el espacio",
    "Fomentar la colaboración sin comunicación verbal directa",
    "Desarrollar estrategias grupales para proteger y recolectar",
    "Promover la interacción mediante duelos de cachipún"
  ],
  howToPlay:
    "El curso se divide en cuatro equipos distinguidos por el color de su pañolín. Se distribuyen alrededor de 50 lentejas por toda la cancha. Cada equipo cuenta con un aro que funciona como zona de recolección. Solo una persona del equipo puede permanecer dentro del aro actuando como protector, y pueden cambiar de rol en cualquier momento.\n\nLos demás integrantes deben desplazarse por la cancha para recolectar lentejas. Sin embargo, si un jugador es tocado por un contrincante, ambos deben detenerse y realizar un duelo de cachipún. El ganador del duelo obtiene la lenteja en disputa y puede continuar su camino hacia su aro; el perdedor debe dejarla. En cualquier momento del trayecto, un jugador puede ser desafiado nuevamente por otro adversario.\n\nLa dinámica continúa hasta que se acabe el tiempo establecido. El equipo que reúna más lentejas en su aro al finalizar será el ganador.",
  rules: [
    "Solo una persona por equipo puede permanecer dentro del aro protector",
    "No se puede comunicar verbalmente estrategias durante la recolección",
    "Si un jugador es tocado, debe aceptar un duelo inmediato de cachipún",
    "El ganador del duelo se queda con la lenteja en disputa",
    "Las lentejas solo cuentan si están dentro del aro al finalizar el juego",
    "Gana el equipo con mayor cantidad total de lentejas"
  ],
},
{
  id: 129,
  title: "El Contrabando",
  type: "warmup",
  description:
    "Actividad de desplazamiento y equilibrio en la que los equipos deben transportar sus lentejas hasta la zona de contrabando avanzando en posición de cuatro apoyos. Exige coordinación corporal, cooperación y ritmo grupal para completar la misión antes que los demás.",
  image: "/images/games/el-contrabando.jpg",
  materials: ["Lentejas (una por participante, más extras para equilibrar equipos)", "Líneas o conos para partida y meta"],
  intensity: "Media",
  participants: "32-40 (4 grupos de 8-10 personas)",
  recommendedAge: 8,
  objectives: [
    "Mejorar la coordinación y el control corporal",
    "Fomentar la cooperación y el apoyo entre compañeros",
    "Elevar la temperatura corporal de manera progresiva",
    "Desarrollar concentración y precisión al transportar objetos"
  ],
  howToPlay:
    "Se forman cuatro grupos de ocho a diez personas. A cada participante se le asigna una lenteja, y en caso de que un equipo tenga menos jugadores, se les otorga una lenteja extra para igualar la cantidad total.\n\nCada equipo se ubica en hilera detrás de una línea de partida. A unos diez metros al frente de cada grupo se delimita la zona de contrabando, donde deben depositarse las lentejas.\n\nEl primer jugador adopta la posición de cuatro apoyos (manos y pies) con la lenteja sobre la espalda. A la señal, avanza hacia la meta procurando que la lenteja no caiga. Si esta cae, el jugador debe detenerse, retroceder caminando en cuatro apoyos hasta el punto exacto donde cayó y colocarla nuevamente sobre su espalda antes de continuar.\n\nUna vez que llega a la meta, deja la lenteja y regresa trotando a la partida para tocar al siguiente compañero, quien repite el proceso. El juego continúa hasta que todas las lentejas del equipo hayan sido transportadas.",
  rules: [
    "Cada jugador debe avanzar en posición de cuatro apoyos durante todo su turno",
    "Si la lenteja cae, se debe regresar al punto de caída en la misma posición",
    "La lenteja solo es válida si se deposita dentro de la zona de contrabando",
    "El relevo inicia solo cuando el jugador anterior toca al siguiente",
    "Gana el equipo que transporte todas sus lentejas primero"
  ],
},
{
  id: 130,
  title: "El Diluvio Express",
  type: "main",
  description:
    "Competencia por equipos en la que los participantes deben transportar agua con una esponja desde su base hasta un balde central del mismo color. El objetivo es llenar el balde lo más rápido posible siguiendo un recorrido preestablecido. Combina trabajo en equipo, agilidad, precisión y participación activa.",
  image: "/images/games/el-diluvio-express.jpg",
  materials: [
    "4 baldes grandes (uno por equipo)",
    "4 esponjas",
    "Lentejas de colores para delimitar zonas",
    "Marcas o conos para líneas de partida"
  ],
  intensity: "Media",
  participants: "20-32 (4 equipos de 5 a 8 jugadores)",
  recommendedAge: 8,
  objectives: [
    "Fomentar el trabajo en equipo y la coordinación",
    "Desarrollar agilidad y rapidez en desplazamientos",
    "Promover la participación activa de todos los integrantes",
    "Fortalecer la precisión al manipular agua y objetos"
  ],
  howToPlay:
    "Se forman cuatro equipos de cinco a ocho participantes, cada uno identificado con un color: morado, rosado, rojo y azul. Los equipos se ubican en las esquinas de la cancha detrás de una línea de partida. En el centro se colocan cuatro baldes, cada uno dentro de su zona delimitada con lentejas del color del equipo correspondiente.\n\nA la señal del instructor, el primer jugador de cada equipo toma la esponja, la sumerge completamente en el balde con agua de su base y corre en diagonal hacia el centro siguiendo el recorrido indicado. Al llegar al balde central de su color, exprime toda el agua dentro del recipiente. Luego regresa por el mismo camino y entrega la esponja al siguiente compañero, quien repite la secuencia.\n\nEl relevo continúa de forma ininterrumpida hasta que el balde central de uno de los equipos alcance la marca de llenado preestablecida o hasta que se cumpla el tiempo. El equipo cuyo balde alcance primero el nivel indicado, o que acumule más agua al finalizar el tiempo, será el ganador.",
  rules: [
    "La esponja debe transportarse únicamente con las manos",
    "No se permite lanzar, arrastrar o golpear la esponja",
    "Cada jugador debe regresar al punto de partida antes de entregar la esponja",
    "Si se derrama agua fuera del balde central, el jugador debe repetir su turno",
    "Si un jugador se adelanta antes de recibir la esponja, debe repetir su recorrido",
    "Está prohibido obstaculizar o interferir con los recorridos de otros equipos",
    "Entregar la esponja sin que el jugador anterior haya completado su turno resta puntos",
    "Derramar el balde central o interferir con otro equipo obliga a reiniciar ese turno"
  ]
},
{
  id: 131,
  title: "El Director de Orquesta",
  type: "cooldown",
  description:
    "Juego de imitación y atención selectiva donde un grupo sigue los movimientos de un director secreto mientras un detective intenta descubrir quién lidera. Favorece la concentración, la observación y la regulación del nivel de activación.",
  image: "/images/games/el-director-de-orquesta.jpg",
  materials: ["Pañolines de dos colores para diferenciar grupos"],
  intensity: "Baja",
  participants: "10-30",
  recommendedAge: 6,
  objectives: [
    "Desarrollar la capacidad de imitación motriz",
    "Estimular la atención selectiva y la observación fina",
    "Favorecer la disminución gradual del nivel de activación",
    "Promover la participación grupal mediante el juego de roles"
  ],
  howToPlay:
    "Los participantes se sientan formando un círculo, separados en dos colores de pañolines por cada grupo si se juega con varios círculos. Se elige a un jugador para que sea el detective, quien debe alejarse o cerrar los ojos para no ver el proceso. Mientras tanto, el resto del grupo selecciona en secreto a un Director de Orquesta.\n\nSe llama al detective para que vuelva y se ubique en el centro del círculo. El director inicia un movimiento rítmico (como palmear, tocarse las rodillas o mover los hombros) y todos los demás jugadores lo imitan de inmediato, procurando no evidenciar quién es el líder. El director debe cambiar el movimiento de manera sutil cada cierto tiempo, y el grupo lo sigue.\n\nEl detective observa atentamente e intenta descubrir quién es el Director de Orquesta. Dispone de dos o tres oportunidades para acusar. Si acierta, gana la ronda y cambia roles con el director descubierto. Si falla todas sus oportunidades, pierde y se escoge un nuevo detective para continuar la dinámica.",
  rules: [
    "El detective no puede mirar durante la elección del director",
    "El Director de Orquesta debe cambiar de movimiento de forma sutil",
    "El grupo debe imitar al director sin delatarlo intencionalmente",
    "El detective tiene dos o tres oportunidades para adivinar",
    "Si el detective acierta, intercambia su rol con el director",
    "Si falla todas sus oportunidades, se elige un nuevo detective"
  ],
},
{
  id: 132,
  title: "El Robo del Tesoro",
  type: "warmup",
  description:
    "Juego estratégico por equipos donde cada grupo debe infiltrarse en el territorio rival para robar lentejas que representan el tesoro enemigo. Incluye persecuciones, zonas seguras, liberación de compañeros y gestión del tiempo.",
  image: "/images/games/el-robo-del-tesoro.jpg",
  materials: ["Pañolines de dos colores", "Lentejas para delimitar zonas", "Lentejas de colores como tesoro"],
  intensity: "Media",
  participants: "15-40",
  recommendedAge: 8,
  objectives: [
    "Fomentar el trabajo en equipo y la organización táctica",
    "Desarrollar estrategias ofensivas y defensivas",
    "Promover la colaboración en situaciones de presión",
    "Estimular la toma de decisiones rápidas en movimiento"
  ],
  howToPlay:
    "El curso se divide en dos equipos, cada uno identificado con un color de pañolín. La cancha se divide por la mitad, asignando a cada equipo su propio territorio. Dentro de la zona del arco, delimitada por lentejas, se encuentra el tesoro del equipo (lentejas del color correspondiente). Esta zona funciona como espacio seguro: los rivales pueden entrar, pero no pueden ser pillados dentro de ella.\n\nEl objetivo es infiltrarse en la zona del arco rival, tomar una sola lenteja del color propio y regresar a su territorio sin ser atrapado. Cada viaje exitoso cuenta como un robo completado. Los jugadores que sean pillados en territorio enemigo son enviados al “calabozo”, ubicado en una esquina del territorio contrario. Solo pueden liberarse si un compañero entra en la zona del calabozo y les toca la mano.\n\nEl juego dura 10 minutos, y gana el equipo que logre robar todas las lentejas del rival o que haya acumulado más robos al finalizar el tiempo.",
  rules: [
    "Un jugador solo puede llevar una lenteja por viaje",
    "Los rivales pueden ser pillados únicamente fuera de la zona del arco",
    "La zona del arco es segura: no se puede pillar dentro de ella",
    "Los jugadores atrapados deben ir al calabozo hasta ser liberados",
    "Para liberar, un compañero debe tocar la mano del jugador detenido",
    "Gana el equipo que robe todas las lentejas del rival o acumule más robos en 10 minutos"
  ],
},
{
  id: 133,
  title: "El Tren Ciego",
  type: "cooldown",
  description:
    "Dinámica de vuelta a la calma donde los equipos deben avanzar en hilera con los ojos vendados, guiados únicamente por la voz del maquinista. El objetivo es trasladar lentejas de un extremo de la cancha al otro pasando por puntos de control, lo que requiere comunicación clara, coordinación y trabajo en equipo.",
  image: "/images/games/el-tren-ciego.jpg",
  materials: [
    "Pañolines para vendar ojos",
    "Lentejas blancas y negras",
    "Lentejas de colores para marcar puntos de control"
  ],
  intensity: "Baja",
  participants: "20-40 (4 equipos)",
  recommendedAge: 10,
  objectives: [
    "Mejorar la comunicación verbal en situaciones de baja visibilidad",
    "Fomentar la coordinación grupal y el desplazamiento seguro",
    "Fortalecer la confianza entre los integrantes del equipo",
    "Promover la colaboración en un contexto de calma y atención guiada"
  ],
  howToPlay:
    "Se forman cuatro equipos. Cada uno se ubica en la línea de partida formando una hilera donde todos los jugadores, excepto el último, llevan los ojos vendados. El último de la fila es el maquinista: guía verbalmente al tren y transporta una lenteja desde un extremo de la cancha.\n\nEn un extremo se colocan lentejas blancas y, en el extremo opuesto, lentejas negras. Cada equipo debe trasladar las lentejas desde su correspondiente extremo hacia el contrario. Para avanzar, el equipo debe moverse unido y pasar por una serie de puntos de control marcados en la cancha con lentejas del color que coincide con su pañolín. Si el equipo no pasa completo por un punto de control, debe reiniciar desde la línea donde comenzó el maquinista.\n\nEl árbitro puede mover los puntos de control durante el juego, manteniendo un patrón equivalente para todos los equipos. El maquinista puede detener al tren para inspeccionar el camino antes de continuar. Cuando el tren completo cruza la línea final, el equipo se da vuelta manteniendo el orden y el primer participante pasa a ser el nuevo maquinista. Este proceso se repite durante el tiempo asignado.",
  rules: [
    "Solo el maquinista puede ver; el resto del equipo debe mantener los ojos vendados",
    "El equipo debe permanecer unido y pasar completo por todos los puntos de control",
    "Si un punto de control no se cumple, el equipo reinicia desde la línea de partida",
    "El maquinista puede detenerse para orientarse, pero no puede correr",
    "Las lentejas solo cuentan si son trasladadas completamente al extremo contrario",
    "Gana el equipo que transporte la mayor cantidad de lentejas en el tiempo establecido"
  ],
},
{
  id: 134,
  title: "Espejito Rojo",
  type: "cooldown",
  description:
    "Juego de mímica por secuencias acumulativas donde dos equipos compiten por memorizar, reproducir y ampliar una cadena de movimientos. Favorece la colaboración, la atención y la creatividad al improvisar gestos que deben mantenerse en orden preciso.",
  image: "/images/games/espejito-rojo.jpg",
  materials: ["Ninguno"],
  intensity: "Baja",
  participants: "10-40 (2 equipos)",
  recommendedAge: 8,
  objectives: [
    "Fomentar la colaboración y el apoyo entre compañeros",
    "Desarrollar la memoria motriz y la atención a detalles",
    "Estimular la creatividad al crear movimientos originales",
    "Mejorar la concentración bajo presión de secuencias largas"
  ],
  howToPlay:
    "Se forman dos equipos del tamaño necesario según el número total de participantes. Cada equipo se coloca en hilera. La primera persona inicia realizando un movimiento. El segundo integrante debe repetirlo y añadir uno nuevo; el tercero repite ambos movimientos y agrega un tercero, y así sucesivamente hasta llegar a la última persona del equipo.\n\nLa última persona debe ejecutar toda la secuencia completa sin errores para ganar un punto para su equipo. Si lo logra, pasa a ser la primera persona de la hilera y el ciclo continúa con nuevas secuencias. El juego avanza rondas hasta que el tiempo termine o se cumpla la cantidad de puntos acordada previamente.",
  rules: [
    "Los movimientos pueden repetirse un máximo de dos veces únicamente frente a la última persona de la hilera",
    "Si algún integrante se equivoca al repetir la secuencia o se olvida de un movimiento, el equipo debe reiniciar desde cero con una nueva cadena",
    "Si un equipo intenta ayudar o hacer trampa y es descubierto, debe comenzar una secuencia completamente nueva",
    "La secuencia debe mantenerse en el orden exacto en que fue creada",
    "Gana el equipo que acumule más puntos dentro del tiempo establecido"
  ],
},
{
  id: 135,
  title: "Espera Tu Turno",
  type: "cooldown",
  description:
    "Actividad tranquila y de concentración en la que el grupo debe contar secuencialmente hasta un número objetivo sin repetir turnos ni interrumpir el orden. Favorece la paciencia, la atención y el respeto por los demás participantes.",
  image: "/images/games/espera-tu-turno.jpg",
  materials: ["Ninguno"],
  intensity: "Baja",
  participants: "10-40",
  recommendedAge: 8,
  objectives: [
    "Mejorar la atención y escucha activa",
    "Fomentar la paciencia y el respeto de turnos",
    "Promover la autorregulación en un contexto de calma",
    "Estimular la coordinación grupal sin necesidad de comunicación explícita"
  ],
  howToPlay:
    "Los participantes se sientan formando una circunferencia, a una distancia que permita escucharse entre sí. El objetivo es llegar a un número final (por ejemplo, el número total de participantes) dentro del tiempo establecido, que puede variar entre 2 y 10 minutos.\n\nLos jugadores deben decir números en voz alta siguiendo una secuencia ordenada (1, 2, 3, 4...). Los turnos no están asignados: cada persona decide cuándo decir un número, pero debe hacerlo con atención para evitar repeticiones. Si un número se repite, el grupo debe reiniciar desde el 1.\n\nAdemás, una regla importante establece que si uno de los compañeros inmediatos (a la derecha o izquierda) ha dicho un número, el jugador no puede decir el siguiente hasta que alguien que no sea su vecino diga otro número. Esto obliga al grupo a coordinarse de manera silenciosa, respetando turnos y manteniendo el flujo del conteo.",
  rules: [
    "Los números deben decirse en orden secuencial sin saltos",
    "Si un número se repite, el conteo reinicia desde 1",
    "Cada participante decide cuándo intervenir, sin turnos asignados",
    "Si un vecino cercano ya dijo un número, no se puede decir el siguiente hasta que alguien más participe",
    "Se debe mantener silencio y atención para escuchar a todos",
    "Gana el grupo si llega al número objetivo dentro del tiempo establecido"
  ],
},
{
  id: 136,
  title: "Francotiradores y Escolta",
  type: "main",
  description:
    "Juego competitivo por roles donde un equipo debe proteger y guiar a un presidente con los ojos vendados mientras el equipo contrario intenta golpearlo con balones desde los extremos del campo. Requiere estrategias claras, confianza y coordinación entre sus miembros.",
  image: "/images/games/francotiradores-y-escolta.jpg",
  materials: ["Pañolines para vendar ojos", "Balones de goma o esponja"],
  intensity: "Media",
  participants: "14-16 (2 equipos)",
  
  recommendedAge: 12,
  objectives: [
    "Fomentar la asignación de roles y la organización estratégica",
    "Desarrollar la comunicación y la confianza entre los integrantes del equipo",
    "Promover la toma de decisiones bajo presión",
    "Estimular la coordinación grupal en contextos dinámicos"
  ],
  howToPlay:
    "Se forman dos equipos de siete u ocho personas. Un equipo estará compuesto por francotiradores y el otro por escoltas y un presidente. Los escoltas eligen a uno de sus integrantes para que sea el presidente, quien deberá cruzar el campo de juego de un extremo al otro con los ojos tapados mediante un pañolín. Los escoltas deben guiarlo con instrucciones verbales, protegerlo físicamente y bloquear los lanzamientos del equipo rival.\n\nLos francotiradores se ubican en los extremos del campo y su objetivo es golpear con el balón al presidente antes de que cruce. Si un escolta es golpeado, solo puede desplazarse por los bordes del campo, pero aún puede bloquear lanzamientos desde allí. Si el presidente toca un balón o choca con un escolta, debe regresar al punto de partida, los escoltas golpeados recuperan movilidad normal y el equipo tiene la opción de cambiar al presidente.\n\nSi el presidente logra cruzar sin tocar balones ni a sus escoltas, el equipo consigue un punto. Pasados cinco minutos, ambos equipos intercambian roles para iniciar una nueva ronda.",
  rules: [
    "El presidente debe cruzar el campo con los ojos vendados en menos de 5 minutos",
    "Los escoltas pueden guiar verbalmente y bloquear lanzamientos, pero si son golpeados solo pueden caminar por los bordes",
    "Si el presidente toca un balón o a un escolta, debe regresar al inicio",
    "Los escoltas golpeados recuperan movilidad normal al reiniciar el recorrido",
    "Los francotiradores solo pueden lanzar desde los extremos del campo",
    "Se obtiene un punto si el presidente cruza el campo sin contacto con balones o escoltas",
    "Después de 5 minutos se intercambian roles entre los equipos"
  ],
},
{
  id: 137,
  title: "Hand Bolos",
  type: "main",
  description:
    "Juego competitivo que combina pases con las manos, desplazamientos rápidos y derribo de bolos dentro del arco rival. Los jugadores deben coordinarse para conservar la pelota, evitar perder su pañolín y planificar lanzamientos estratégicos desde fuera del área.",
  image: "/images/games/hand-bolos.jpg",
  materials: [
    "Pañolines de dos colores",
    "Pelota ligera (futsal, goma o espuma)",
    "3 bolos por equipo",
    "Delimitación de áreas y cancha"
  ],
  intensity: "Media",
  participants: "12-30 (2 equipos)",
  
  recommendedAge: 10,
  objectives: [
    "Desarrollar la coordinación óculo-manual",
    "Fomentar la colaboración mediante el juego colectivo",
    "Estimular la creación de estrategias ofensivas y defensivas",
    "Promover el respeto de reglas y el juego limpio"
  ],
  howToPlay:
    "El juego se desarrolla idealmente en una cancha de futbolito, aunque puede adaptarse a cualquier espacio delimitando áreas. Se forman dos equipos con igual cantidad de jugadores, cada uno con un pañolín visible en la cintura. Tres bolos se ubican dentro del arco de cada equipo.\n\nAl inicio, ambos equipos parten en sus mitades. La pelota se coloca al centro y, a la señal del instructor, los jugadores corren a tomarla para comenzar. El juego consiste en avanzar mediante pases con las manos; también se puede correr sosteniendo la pelota, pero si un jugador pierde su pañolín mientras la porta, debe dejarla caer.\n\nPara anotar puntos, los jugadores deben lanzar la pelota desde fuera del área rival para derribar los bolos del contrincante. Cada bolo derribado equivale a un punto. Si el jugador pisa el área mientras lanza, el punto se anula y la posesión pasa al rival. Gana el equipo que derribe los tres bolos o que tenga más puntos al término del tiempo (alrededor de 10 minutos).\n\nPara defender, los jugadores pueden interceptar pases o lanzar para quitar el pañolín al rival que tenga la pelota. Si un jugador pierde su pañolín, debe permanecer inmóvil por tres segundos antes de volver a colocárselo. Tras marcar, el equipo que recibió el punto saca desde su área sin interferencia.",
  rules: [
    "Solo se puede quitar el pañolín a un jugador que tenga la pelota",
    "No se puede arrancar la pelota de las manos del rival",
    "Si un jugador pierde su pañolín con la pelota en mano, debe soltarla y quedar inmóvil 3 segundos",
    "Los lanzamientos deben hacerse desde fuera del área rival; pisar la zona invalida el punto",
    "Cada bolo derribado suma un punto",
    "Si la pelota sale de la cancha, el equipo contrario hace el saque desde fuera",
    "Después de cada punto, el equipo contrario saca desde su área",
    "Gana el equipo que derribe los tres bolos o acumule más puntos al finalizar el tiempo"
  ],
},
{
  id: 138,
  title: "La Granja",
  type: "cooldown",
  description:
    "Juego tranquilo y humorístico en el que las parejas representan animales mediante sonidos sin mostrar los dientes. La actividad exige concentración, coordinación con la pareja y comunicación no verbal, manteniendo un ambiente relajado y de baja activación.",
  image: "/images/games/la-granja.jpg",
  materials: ["Ninguno"],
  intensity: "Baja",
  participants: "10-40 (en parejas)",
  
  recommendedAge: 6,
  objectives: [
    "Fomentar la concentración y el control expresivo",
    "Promover el trabajo en equipo dentro de la pareja",
    "Estimular la comunicación no verbal para coordinar sonidos",
    "Disminuir el nivel de activación mediante una dinámica lúdica y calmada"
  ],
  howToPlay:
    "Los participantes se organizan en parejas. Cada pareja elige un animal que no pueda repetirse y define su sonido característico, procurando que sea claro y que pueda hacerse sin mostrar los dientes. Se les da un breve tiempo para practicar.\n\nLuego, todos se sientan en círculo. El facilitador escoge una pareja para comenzar la ronda. Esta realiza el sonido de su animal sin mostrar los dientes y continúa la secuencia llamando a otra pareja con la fórmula: “(sonido de su animal) llamando a (sonido del animal elegido)”. La pareja llamada debe responder con su sonido y luego llamar a otra pareja, manteniendo la dinámica.\n\nCada vez que un participante muestra los dientes, queda eliminado y debe salir de la ronda. El juego continúa de forma fluida, cuidando el control facial y la rapidez para reaccionar al ser llamados.",
  rules: [
    "Cada pareja debe elegir un animal distinto y definir un sonido propio",
    "Los sonidos deben realizarse sin mostrar los dientes en ningún momento",
    "Si un participante muestra los dientes, queda descalificado",
    "La pareja llamada debe responder de inmediato con su sonido",
    "Gana la última pareja que permanezca en juego o la que siga activa al finalizar el tiempo"
  ],
},
{
  id: 139,
  title: "La Pintura Secreta",
  type: "cooldown",
  description:
    "Juego de comunicación no verbal en el que los equipos deben transmitir un dibujo simple usando únicamente trazos con el dedo en la espalda del compañero de adelante. La actividad promueve creatividad, precisión y coordinación silenciosa.",
  image: "/images/games/la-pintura-secreta.jpg",
  materials: ["Figuras o dibujos simples en tarjetas"],
  intensity: "Baja",
  participants: "12-40 (4 equipos)",
  
  recommendedAge: 8,
  objectives: [
    "Fomentar la colaboración sin comunicación verbal",
    "Desarrollar la comunicación táctil y la interpretación de señales",
    "Estimular la creatividad y la concentración",
    "Promover la rotación de roles dentro del equipo"
  ],
  howToPlay:
    "Se conforman cuatro equipos con la misma cantidad de participantes. Cada equipo se organiza en una hilera, todos mirando hacia adelante. El último integrante de cada hilera recibe del instructor una tarjeta con un dibujo simple (por ejemplo: un sol, una casa, una estrella). Ese jugador debe reproducir la figura trazándola con su dedo en la espalda del compañero inmediatamente adelante.\n\nCada jugador debe dibujar en la espalda del siguiente exactamente lo que interpretó, sin hablar, sin hacer gestos y sin mirar hacia atrás en ningún momento. El trazo continúa avanzando hasta llegar a la primera persona de la hilera.\n\nLa primera persona, una vez recibe el último dibujo, debe susurrar al instructor qué figura cree que era. Si acierta, el equipo obtiene un punto. Tras cada ronda, la persona que estaba al final pasa a ser la primera, rotando de manera que todos experimenten cada rol del juego.",
  rules: [
    "Está prohibido hablar, señalar o mirar hacia atrás durante toda la ronda",
    "Cada jugador debe reproducir únicamente lo que sintió, no lo que cree que era",
    "Solo la primera persona de la hilera puede hablar para dar la respuesta",
    "Si el dibujo se adivina correctamente, el equipo obtiene un punto",
    "Tras cada ronda, el último participante pasa al inicio para rotar los roles"
  ],
},
{
  id: 140,
  title: "Las Águilas y los Conejos",
  type: "warmup",
  description:
    "Dinámica de desplazamiento rápido donde un grupo reducido de águilas intenta atrapar a los conejos mientras estos se mueven entre aros seguros. Favorece la percepción espacial, la agilidad y la toma rápida de decisiones.",
  image: "/images/games/aguilas-y-conejos.jpg",
  materials: ["Aros hula-hula para delimitar zonas seguras"],
  intensity: "Media",
  participants: "30-40",
  
  recommendedAge: 8,
  objectives: [
    "Mejorar la percepción del espacio y la distancia",
    "Desarrollar agilidad y rapidez de reacción",
    "Fomentar la movilidad continua y la toma de decisiones bajo presión",
    "Promover la dinámica grupal mediante el cambio de roles"
  ],
  howToPlay:
    "De un grupo de aproximadamente 34 participantes, se eligen 4 para ser las águilas; el resto serán conejos. En la cancha se distribuyen aros hula-hula formando un patrón circular o radial según el espacio. Cada aro del perímetro permite un máximo de dos conejos, mientras que el aro central acepta hasta cuatro.\n\nPara comenzar, todos los conejos se ubican en los aros exteriores y las águilas en el aro central. A la señal, todos los conejos deben salir de su aro e ingresar a uno diferente, que debe estar al menos a tres aros de distancia del que ocupaban inicialmente. Mientras los conejos están desplazándose fuera de los aros, las águilas pueden pintarlos.\n\nCuando un águila pinta a un conejo, ambos intercambian roles inmediatamente: el conejo pasa a ser águila y el águila pasa a ser conejo, incorporándose al juego sin detener la dinámica. El movimiento continúa de manera fluida, con constantes cambios de roles y decisiones rápidas para encontrar un aro libre dentro de las reglas.",
  rules: [
    "Cada aro exterior puede albergar un máximo de dos conejos; el aro central, hasta cuatro",
    "Los conejos deben moverse a un aro que esté al menos a tres aros de distancia del de origen",
    "Las águilas solo pueden pintar a los conejos mientras estos están fuera de los aros",
    "Al ser pintado, el conejo cambia a rol de águila y viceversa",
    "No se puede permanecer corriendo fuera de los aros por más tiempo del necesario para encontrar uno válido",
    "El juego continúa hasta que el facilitador lo detenga o se cumpla el tiempo establecido"
  ],
},
{
  id: 141,
  title: "Navidad al Rescate",
  type: "main",
  description:
    "Juego competitivo donde dos equipos, duendes y grinch, se enfrentan para entregar o impedir la entrega de regalos. Los duendes deben transportar lentejas–regalos desde la fábrica central hasta las casas ubicadas en los bordes, mientras los grinch buscan congelarlos quitándoles el pañolín. La dinámica exige estrategia, velocidad, coordinación y toma de decisiones rápida.",
  image: "/images/games/navidad-al-rescate.jpg",
  materials: [
    "Pañolines de colores (rojo y rosado para duendes; azul y celeste para grinch)",
    "Lentejas (regalos)",
    "Aros para representar las casas",
    "Lentejas o conos para delimitar la fábrica"
  ],
  intensity: "Media",
  participants: "20-40 (2 equipos)",
  
  recommendedAge: 8,
  objectives: [
    "Fomentar el trabajo en equipo bajo presión",
    "Desarrollar estrategias ofensivas y defensivas",
    "Mejorar la velocidad de reacción y desplazamiento",
    "Promover el juego limpio y la toma consciente de decisiones"
  ],
  howToPlay:
    "Se divide al grupo en dos equipos: duendes (rojos y rosados) y grinch (azules y celestes). En el centro del área de juego se delimita un círculo que representa la fábrica de regalos, donde se encuentran las lentejas. En los bordes de la cancha se distribuyen aros que simbolizan las casas de los niños.\n\nLos duendes deben entrar a la fábrica, tomar un regalo (una lenteja) y llevarlo a una casa, depositándolo en un aro. Mientras están fuera de la fábrica, los grinch pueden congelarlos quitándoles el pañolín. Un duende congelado debe quedarse inmóvil junto a su pañolín hasta ser descongelado por un compañero que lo toque.\n\nSi un duende es congelado mientras lleva un regalo, debe entregarlo al grinch que lo atrapó, quien inmediatamente lo devuelve a la fábrica. Los regalos entregados en las casas no pueden ser removidos por los grinch. Solo se puede llevar un regalo a la vez y cada casa puede recibir un solo regalo.\n\nSi un grinch quita un regalo de las manos de un duende (acción prohibida), debe devolverlo y el duende obtiene inmunidad temporal para depositarlo sin riesgo de ser congelado.\n\nEl juego termina cuando se entregan todos los regalos, cuando se congela a todos los duendes o cuando se agota el tiempo.",
  rules: [
    "Dentro de la fábrica no se puede congelar a los duendes",
    "Para congelar, se debe quitar el pañolín del jugador rival",
    "Si un duende congelado llevaba un regalo, debe entregárselo al grinch",
    "Los jugadores congelados deben permanecer quietos hasta ser descongelados",
    "Un compañero debe tocar a un duende congelado para liberarlo",
    "No se puede quitar un regalo de las manos; si ocurre, el duende gana inmunidad para entregar",
    "Los regalos ya puestos en las casas no pueden ser removidos",
    "Solo se puede llevar un regalo por viaje",
    "Cada casa solo puede recibir un regalo",
    "Ganan los duendes si entregan todos los regalos; ganan los grinch si congelan a todos los duendes o acaba el tiempo sin completarse la entrega"
  ],
},
{
  id: 142,
  title: "Pinta Colores",
  type: "warmup",
  description:
    "Juego dinámico de reacción y persecución donde cuatro equipos compiten por pintar a los demás cuando su color es llamado. Requiere atención constante, velocidad y estrategias colectivas para evitar ser atrapados.",
  image: "/images/games/pinta-colores.jpg",
  materials: ["Petos o pañolines de cuatro colores distintos"],
  intensity: "Media",
  participants: "20-40 (4 equipos)",
  
  recommendedAge: 8,
  objectives: [
    "Mejorar la atención y la velocidad de reacción",
    "Desarrollar estrategias grupales de persecución y evasión",
    "Fomentar el trabajo en equipo ante cambios repentinos en el juego",
    "Estimular el desplazamiento rápido en un espacio amplio"
  ],
  howToPlay:
    "Se forman cuatro equipos y a cada uno se le asigna un color mediante petos o pañolines. El juego se realiza en una cancha amplia, idealmente de fútbol. Los equipos se distribuyen por el espacio esperando la señal del director del juego.\n\nCada 45 segundos, el director grita un color. Ese equipo se convierte en el equipo pintor y debe perseguir y tocar a los jugadores de los demás equipos. Cada jugador tocado queda “pintado” y debe permanecer inmóvil en el lugar donde fue atrapado, sin poder seguir participando en esa ronda.\n\nLos equipos cuya vez no ha sido llamada deben coordinarse para dispersarse, protegerse entre sí y evitar quedar acorralados. El equipo pintor debe organizarse para cubrir la mayor cantidad de terreno posible en poco tiempo, usando estrategias para encerrar o dividir a los rivales.\n\nLa ronda continúa hasta que finaliza el tiempo o hasta que un equipo logre pintar a todos los jugadores rivales durante su turno.",
  rules: [
    "Solo el equipo cuyo color es llamado puede pintar a los demás",
    "Un jugador queda inmóvil inmediatamente al ser pintado",
    "Los jugadores pintados no pueden bloquear ni interferir",
    "El director del juego debe anunciar un nuevo color cada 45 segundos",
    "Gana el primer equipo que logre pintar a todos los jugadores rivales en su turno",
    "Si no se logra pintar a todos, se continúa la rotación hasta que se cumpla el tiempo establecido"
  ],
},
{
  id: 143,
  title: "Policías y Ladrones",
  type: "main",
  description:
    "Juego clásico de persecución donde un equipo de policías debe capturar a los ladrones y llevarlos a la cárcel, mientras que los ladrones buscan mantenerse libres y rescatar a sus compañeros. Favorece la agilidad, la coordinación motora y la cooperación estratégica.",
  image: "/images/games/policias-y-ladrones.jpg",
  materials: ["Pañolines de dos colores para diferenciar equipos"],
  intensity: "Media",
  participants: "20-40",
  
  recommendedAge: 8,
  objectives: [
    "Fomentar el trabajo en equipo en dinámicas de persecución",
    "Desarrollar coordinación motora y agilidad",
    "Promover la cooperación entre compañeros para rescates",
    "Estimular la planificación de estrategias ofensivas y defensivas"
  ],
  howToPlay:
    "Todos los participantes comienzan reunidos en el centro de la cancha. El monitor divide al grupo en dos equipos equilibrados: policías y ladrones, identificados por pañolines de distinto color. Se delimita una zona llamada 'cárcel', que corresponde al área de la cancha de futbolito.\n\nLos ladrones se distribuyen por distintos puntos del terreno mientras los policías esperan en su base la señal de inicio. Al comenzar el juego, los policías deben perseguir y atrapar ladrones tocándolos con la mano. Cuando un ladrón es atrapado, el policía debe llevarlo a la cárcel, donde el ladrón debe permanecer esperando ser rescatado.\n\nLos ladrones libres pueden liberar a sus compañeros tocando la cárcel, siempre y cuando no sean atrapados durante la acción. Los policías no pueden permanecer dentro de la cárcel; deben mantenerse fuera de ella en todo momento.\n\nEl juego continúa hasta que todos los ladrones hayan sido capturados o hasta que transcurran los 15 minutos de juego. El equipo ganador será aquel que capture a todos los contrincantes, o el que tenga más jugadores libres al finalizar el tiempo.",
  rules: [
    "Los policías deben tocar al ladrón para capturarlo",
    "Un ladrón capturado debe ser llevado inmediatamente a la cárcel",
    "Los ladrones solo pueden ser liberados si un compañero toca la cárcel sin ser atrapado",
    "Los policías no pueden permanecer dentro de la cárcel",
    "Gana el equipo que capture a todos los rivales o que tenga más jugadores libres al terminar el tiempo"
  ],
},
{
  id: 144,
  title: "Quien Fue a Melipilla Perdió Su Silla",
  type: "warmup",
  description:
    "Juego de persecución rápida donde un gato intenta atrapar a un ratón que puede escapar pasando por debajo de las piernas de los compañeros formando el círculo. La dinámica cambia constantemente, promoviendo velocidad, agilidad y reacciones rápidas.",
  image: "/images/games/quien-fue-a-melipilla-perdio-su-silla.jpg",
  materials: ["Ninguno"],
  intensity: "Media",
  participants: "15-40",
  
  recommendedAge: 8,
  objectives: [
    "Mejorar la velocidad de reacción",
    "Fomentar la agilidad y los cambios rápidos de dirección",
    "Promover la atención y anticipación ante cambios de roles",
    "Estimular una dinámica activa y entretenida en grupo"
  ],
  howToPlay:
    "Los participantes forman un círculo mirando hacia adentro, con las piernas separadas y lo suficientemente espaciados para permitir que alguien pase por debajo. Se eligen dos personas: un gato y un ratón, quienes se ubican en el centro.\n\nEl juego comienza con el gato persiguiendo al ratón. Para escapar, el ratón puede moverse libremente dentro o alrededor del círculo, pero su recurso principal es deslizarse por debajo de las piernas de uno de los jugadores del círculo. Cuando esto ocurre, se produce un cambio inmediato de roles:\n- El gato se convierte en el nuevo ratón.\n- La persona por cuyas piernas pasó el ratón se convierte en el nuevo gato.\n- El ratón anterior ocupa el lugar vacío en el círculo.\n\nSi el gato logra pillar al ratón antes de que pase por debajo de unas piernas, también se intercambian los roles: el ratón pasa a ser gato y el gato se convierte en ratón, sin involucrar a las personas del círculo.",
  rules: [
    "El ratón puede escapar pasando por debajo de las piernas de cualquier jugador del círculo",
    "Al pasar por debajo, los roles cambian inmediatamente entre gato, ratón y la persona involucrada",
    "Si el gato atrapa al ratón antes de que pase por debajo de unas piernas, se intercambian roles solo entre ellos",
    "Los jugadores del círculo deben mantener las piernas abiertas y no moverse de su posición",
    "El juego continúa con cambios constantes de roles hasta que el facilitador lo detenga"
  ],
},
{
  id: 145,
  title: "Reacción Relámpago",
  type: "main",
  description:
    "Competencia por parejas que pone a prueba la velocidad de reacción, la atención y la cooperación. Los jugadores intercambian lentejas de distintos colores mientras esperan una señal, respondiendo de forma explosiva cuando se nombra el color correspondiente.",
  image: "/images/games/reaccion-relampago.jpg",
  materials: ["Lentejas de dos colores por pareja", "Línea de escape marcada en el suelo"],
  intensity: "Media",
  participants: "Todos los alumnos en parejas",
  
  recommendedAge: 8,
  objectives: [
    "Mejorar la velocidad de reacción ante estímulos auditivos",
    "Desarrollar la atención sostenida",
    "Fomentar la cooperación y sincronización dentro de la pareja",
    "Promover el desplazamiento rápido en un entorno seguro"
  ],
  howToPlay:
    "Los estudiantes se organizan en parejas y se colocan frente a frente formando dos filas paralelas. Cada pareja recibe dos lentejas de distintos colores (por ejemplo, rojo y verde). Durante la preparación, ambas personas deben intercambiarse constantemente las lentejas con las manos, manteniéndose atentos a la señal.\n\nCuando el profesor nombra uno de los colores, la persona que sostiene la lenteja de ese color debe reaccionar de inmediato y correr hacia la línea de escape, ubicada aproximadamente a seis metros detrás de su posición. Al mismo tiempo, su compañero debe reaccionar con rapidez intentando alcanzarlo antes de que cruce la línea.\n\nLa ronda es breve y explosiva. Se otorga un punto al jugador que logra llegar primero a la línea o que consigue atrapar a su compañero antes de que esta sea cruzada. La dinámica continúa con repetición de señales y alternancia natural de roles dependiendo del color nombrado.",
  rules: [
    "Los jugadores deben intercambiar las lentejas sin detenerse mientras esperan la señal",
    "Solo el jugador con la lenteja del color nombrado puede correr hacia la línea de escape",
    "El compañero debe intentar atraparlo antes de que cruce la línea",
    "Si un jugador se adelanta antes de la señal, pierde automáticamente la ronda",
    "También pierde la ronda si confunde su rol (corre cuando debe atrapar o viceversa)",
    "Se recomienda mantener la distancia y el orden para evitar colisiones con otras parejas"
  ],
},
{
  id: 146,
  title: "Robots Limpiadores",
  type: "warmup",
  description:
    "Juego por equipos en el que los participantes actúan como robots de limpieza que deben recoger basura (lentejas) desde la zona central y depositarla en su basurero correspondiente. Exige estrategia, comunicación y rapidez para coordinar turnos y maximizar la recolección.",
  image: "/images/games/robots-limpiadores.jpg",
  materials: [
    "2 cuerdas paralelas",
    "Lentejas (basura)",
    "2 aros hula-hula (basureros)",
    "Conos o marcas para organizar hileras"
  ],
  intensity: "Media",
  participants: "15-40 (2 equipos)",
  
  recommendedAge: 8,
  objectives: [
    "Desarrollar estrategias colectivas para organizar turnos",
    "Fomentar la comunicación rápida y efectiva dentro del equipo",
    "Mejorar la velocidad y eficiencia en desplazamientos",
    "Promover el cumplimiento de reglas bajo presión"
  ],
  howToPlay:
    "Previo al inicio, se ubican dos cuerdas paralelas en el suelo, separadas por dos metros, formando tres zonas: la zona central de basura y las zonas laterales de equipos. Entre las cuerdas se esparcen todas las lentejas y en uno de los extremos de cada cuerda se coloca un hula-hula que funciona como basurero.\n\nEl grupo se divide en dos equipos. Cada equipo se forma en hilera en el extremo libre de una cuerda. Al iniciar, el primer jugador de cada hilera avanza hacia la zona de basura, recoge una lenteja y la transporta hasta el basurero ubicado en el extremo opuesto. Para poder levantar una lenteja, el jugador debe estar tocando la cuerda (cable eléctrico) con al menos una parte del cuerpo.\n\nUna vez depositada la lenteja en el basurero, el jugador regresa a su hilera, se ubica al final y sale el siguiente. El proceso continúa hasta que no quede basura en la zona central. Gana el equipo que recoja más lentejas.",
  rules: [
    "Solo puede salir un jugador por equipo a la vez",
    "Cada jugador solo puede recoger una lenteja por turno",
    "Para levantar una lenteja, el jugador debe estar tocando la cuerda",
    "No se puede mover o arrastrar otras lentejas ni cruzar a la zona rival",
    "Si un jugador rompe una regla, debe soltar la lenteja y volver al inicio de su hilera"
  ],
},
{
  id: 147,
  title: "Zona Fútbol",
  type: "main",
  description:
    "Dinámica competitiva basada en el fútbol, pero con el campo dividido en nueve zonas donde cada jugador cumple un rol fijo. Los equipos deben coordinar pases precisos entre defensores, mediocampistas y atacantes para construir jugadas y anotar goles cumpliendo reglas específicas de rotación y progresión.",
  image: "/images/games/zona-futbol.jpg",
  materials: ["Balón de fútbol", "Conos o marcas para dividir la cancha en 9 zonas"],
  intensity: "Media",
  participants: "18 jugadores (2 equipos de 9)",
  recommendedAge: 10,
  objectives: [
    "Comprender y desempeñar distintos roles tácticos dentro del campo",
    "Fomentar la cooperación entre zonas del equipo",
    "Mejorar la precisión en pases bajo restricciones espaciales",
    "Promover la comunicación y toma de decisiones rápidas"
  ],
  howToPlay:
    "La cancha se divide en nueve zonas iguales: tres de defensa, tres de mediocampo y tres de ataque. Dos equipos de nueve jugadores se distribuyen asignando tres defensores, tres mediocampistas y tres atacantes por equipo. En cada zona coinciden dos jugadores: uno de cada equipo.\n\nLos participantes deben permanecer dentro de su zona asignada durante el juego, participando solo desde ese espacio. El objetivo es anotar la mayor cantidad de goles posibles, pero solo los atacantes pueden concretar los goles, y no existe arquero.\n\nPara que un gol sea válido, el balón debe haber sido tocado al menos una vez en cada zona del campo: defensa, mediocampo y ataque. Cada cinco minutos, o cada vez que un equipo marque un gol, todos los jugadores rotan sus roles: los defensores pasan a mediocampistas, los mediocampistas a atacantes y los atacantes a defensores. El partido continúa bajo estas reglas hasta que finaliza el tiempo acordado.",
  rules: [
    "Los jugadores deben permanecer siempre dentro de su zona asignada",
    "Solo los atacantes pueden marcar goles",
    "Se juega sin usar los brazos; cualquier mano otorga saque al rival desde su zona defensiva",
    "Para que el gol sea válido, el balón debe tocar al menos una vez cada tercio del campo",
    "Si el balón sale de la cancha, repone el equipo contrario desde su zona defensiva",
    "La rotación de roles ocurre después de cada gol o cada cinco minutos",
    "Gana el equipo con más goles al finalizar el tiempo"
  ],
}
]
