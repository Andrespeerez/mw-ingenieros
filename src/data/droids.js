export const droids = {
  robotsCiviles: [
    {
      id: 'r2-series',
      nombre: 'Unidad Astromecánica R2',
      tipoRol: 'Reparación / Navegación',
      img: 'https://placehold.co/200x150/000000/00FF00?text=R2',
      fabricante: 'Autómatas Industriales',
      dimensiones: '1.09m',
      caracteristicas: [
        { titulo: "Sistemas", content: ["Ordenador de navegación", "Brazo de interfaz universal", "Propulsores de chorro (variante)"] },
        { titulo: "Capacidades", content: ["Cálculo de saltos hiperespaciales", "Extinción de incendios", "Reparaciones externas"] }
      ],
      notas: 'El estándar de la industria en astromecánica. Versátil, duradero y a menudo desarrolla personalidades excéntricas sin borrados de memoria regulares.',
      desguace: [
        { nombre: "Cúpula giratoria de sensores", tipo: "esencial" },
        { nombre: "Ordenador de navegación IA", tipo: "necesaria" },
        { nombre: "Brazo articulado universal", tipo: "necesaria" },
        { nombre: "Sistemas de rodamiento", tipo: "comun" },
        { nombre: "Chasis de duracero", tipo: "comun" }
      ]
    },
    {
      id: 'gnk-power',
      nombre: 'Droide de Energía GNK',
      tipoRol: 'Generador Móvil',
      img: 'https://placehold.co/200x150/000000/00FF00?text=GONK',
      fabricante: 'Autómatas Industriales',
      dimensiones: '1.1m',
      caracteristicas: [
        { titulo: "Sistemas", content: ["Núcleo de fusión blindado", "Puertos de recarga externa"] },
        { titulo: "Blindaje", content: ["Carcasa reforzada contra radiación"] }
      ],
      notas: 'Conocidos coloquialmente como "Gonk". Básicamente son baterías con piernas. Esenciales en cualquier campamento o taller.',
      desguace: [
        { nombre: "Núcleo de fusión GNK", tipo: "esencial" },
        { nombre: "Acopladores de energía", tipo: "necesaria" },
        { nombre: "Aislantes térmicos", tipo: "comun" },
        { nombre: "Servomotores de pierna", tipo: "comun" }
      ]
    },
    {
      id: '2-1b-med',
      nombre: 'Droide Médico 2-1B',
      tipoRol: 'Asistencia Médica',
      img: 'https://placehold.co/200x150/000000/00FF00?text=2-1B',
      fabricante: 'Geentech / Industrias Automaton',
      dimensiones: '1.6m',
      caracteristicas: [
        { titulo: "Sistemas", content: ["Bases de datos biológicas", "Extremidades de precisión quirúrgica"] },
        { titulo: "Herramientas", content: ["Inyectores hipodérmicos", "Bisturí láser"] }
      ],
      notas: 'Altamente sofisticados. Capaces de realizar cirugías complejas y gestionar tanques de bacta.',
      desguace: [
        { nombre: "Módulo de procesamiento médico", tipo: "esencial" },
        { nombre: "Sensores de constantes vitales", tipo: "necesaria" },
        { nombre: "Actuadores de precisión", tipo: "necesaria" },
        { nombre: "Circuitos de diagnóstico", tipo: "comun" }
      ]
    },
  ],
  robotsSeparatistas: [
    {
      id: 'sep-01',
      nombre: 'Droide de Combate B1',
      tipoRol: 'Infantería',
      img: 'https://placehold.co/200x150/000000/FF0000?text=B1',
      fabricante: 'Autómatas Baktoid',
      dimensiones: '1.93m',
      caracteristicas: [
        { titulo: "Armamento", content: ["Blaster E-5 montado", "Lanzacohetes opcional"] },
        { titulo: "Sistemas", content: ["Enlace de red de control grupal", "Procesador de combate básico"] },
        { titulo: "Blindaje", content: ["Chasis de aleación de duracero ligero"] }
      ],
      notas: 'Producidos en masa. Muy económicos pero fácilmente destruibles. Cientos de miles sirvieron en las Guerras Clon.'
    },
    {
      id: 'sep-02',
      nombre: 'Superdroide de Combate B2',
      tipoRol: 'Infantería Pesada',
      img: 'https://placehold.co/200x150/000000/FF0000?text=B2',
      fabricante: 'Autómatas Baktoid',
      dimensiones: '1.86m',
      caracteristicas: [
        { titulo: "Armamento", content: ["Láseres de muñeca duales", "Lanzador de misiles integrado"] },
        { titulo: "Blindaje", content: ["Blindaje de duracero reforzado"] }
      ],
      notas: 'Más robusto y letal que el B1. Su blindaje puede resistir disparos de blaster estándar.'
    },
    {
      id: 'sep-04',
      nombre: 'Droideka',
      tipoRol: 'Destructor / Escolta',
      img: 'https://placehold.co/200x150/000000/FF0000?text=DROIDEKA',
      fabricante: 'Kolpobátrax',
      dimensiones: '1.83m',
      caracteristicas: [
        { titulo: "Armamento", content: ["Cañones bláster gemelos de repetición"] },
        { titulo: "Sistemas", content: ["Generador de escudos deflectores", "Modo esferoidal de transporte"] }
      ],
      notas: 'Famosos por sus escudos deflectores y su capacidad de rodar. Letales en pasillos y zonas cerradas.'
    },
    {
        id: 'sep-05',
        nombre: 'MagnaGuardia IG-100',
        tipoRol: 'Guardaespaldas de Élite',
        img: 'https://placehold.co/200x150/000000/FF0000?text=MAGNA',
        fabricante: 'Autómatas Baktoid',
        dimensiones: '1.95m',
        caracteristicas: [
          { titulo: "Armamento", content: ["Electrovara de phrik", "Lanzamisiles de espalda (opcional)"] },
          { titulo: "Sistemas", content: ["Sensores de combate de alta velocidad", "Procesador de heurística avanzada"] }
        ],
        notas: 'Diseñados para combatir Jedis. Pueden seguir funcionando incluso después de perder la cabeza.'
    }
  ]
};
