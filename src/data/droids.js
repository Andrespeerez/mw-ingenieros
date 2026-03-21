export const droids = {
  robotsCiviles: [
    {
      id: 'civ-01',
      nombre: 'Droide de Protocolo C-3',
      tipoRol: 'Traducción / Protocolo',
      img: 'https://placehold.co/200x150/000000/00FF00?text=Droide',
      fabricante: 'Corporación Cybot Galactica',
      dimensiones: '1.67m',
      caracteristicas: [
        { titulo: "Sistemas", content: ["Banco de idiomas universal", "Procesador de etiqueta"] }
      ],
      tripulacion: "N/A",
      notas: 'Altamente capacitado para relaciones diplomáticas.',
      reparacion: [
        {
          titulo: "Circuito de Idiomas dañado",
          piezasNecesarias: ["Módulo de Idiomas Galácticos"],
          nivelDificultad: "Medio",
          herramientas: ["Destornillador sónico", "Multitool"],
          notas: "Recalibrar después de instalar."
        }
      ]
    }
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
        { titulo: "Armamento", content: ["Blaster E-5 montada en el brazo", "Lanzacohetes opcional (variante)"] },
        { titulo: "Sistemas", content: ["Enlace de red de control grupal", "Procesador de combate básico"] },
        { titulo: "Blindaje", content: ["Chasis de aleación de duracero ligero"] },
        { titulo: "Debilidades", content: ["Cerebro orgánico vulnerable", "Comportamiento predecible", "Dependencia de comunicaciones"] }
      ],
      tripulacion: "N/A",
      notas: 'Producidos en masa para saturación numérica. Muy económicos pero fácilmente destruibles. Cientos de miles sirvieron en las Guerras Clon.',
      reparacion: [
        {
          titulo: "Brazo Blaster dañado",
          piezasNecesarias: ["Brazo articulado con blaster E-5"],
          nivelDificultad: "Bajo",
          herramientas: ["Llave de tuercas", "Soldador de plasma"],
          notas: "Reemplazo plug-and-play."
        },
        {
          titulo: "Procesador de combate defectuoso",
          piezasNecesarias: ["Cerebro orgánico sintético"],
          nivelDificultad: "Alto",
          herramientas: ["Kit quirúrgico de cirugía droide"],
          notas: "Requiere recalibración de comandos básicos."
        },
        {
          titulo: "Chasis abollado",
          piezasNecesarias: ["Planchas de duracero"],
          nivelDificultad: "Bajo",
          herramientas: ["Martillo de impacto", "Soldador de plasma"],
          notas: "Cosmético pero afecta movilidad si es severo."
        }
      ]
    },
    {
      id: 'sep-02',
      nombre: 'Droide de Combate B2',
      tipoRol: 'Super Infantería',
      img: 'https://placehold.co/200x150/000000/FF0000?text=B2',
      fabricante: 'Autómatas Baktoid',
      dimensiones: '2.3m',
      caracteristicas: [
        { titulo: "Armamento", content: ["2x Blasters pesados Wrist", "Lanzador de proyectiles integrado (opcional)"] },
        { titulo: "Sistemas", content: ["Escudos de energía personales", "Enlace de red mejorado"] },
        { titulo: "Blindaje", content: ["Chasis de duracero reforzado", "Placas céramicas absorbentes"] },
        { titulo: "Debilidades", content: ["Sensores traseros limitados", "Costo de producción mayor que B1"] }
      ],
      tripulacion: "N/A",
      notas: 'Versión mejorada del B1 con mayor blindaje y poder de fuego. Servían como tropas de élite en el ejército separatista.',
      reparacion: [
        {
          titulo: "Escudos de energía dañados",
          piezasNecesarias: ["Generador de escudos personales", "Condensadores de energía"],
          nivelDificultad: "Medio",
          herramientas: ["Soldador de plasma", "Multitool"],
          notas: "Reemplazar condensadores si los escudos parpadean."
        },
        {
          titulo: "Blasters wrist defectuosos",
          piezasNecesarias: ["Brazos blaster pesados B2"],
          nivelDificultad: "Medio",
          herramientas: ["Soldador de plasma", "Analizador de circuitos"],
          notas: "Verificar conexiones antes de reemplazar."
        }
      ]
    },
    {
      id: 'sep-03',
      nombre: 'Droide BX',
      tipoRol: 'Apoyo / Asedio',
      img: 'https://placehold.co/200x150/000000/FF0000?text=BX',
      fabricante: 'Autómatas Baktoid',
      dimensiones: '1.8m',
      caracteristicas: [
        { titulo: "Armamento", content: ["Lancefuego", "Cuchillas de combate", "Blaster radial"] },
        { titulo: "Sistemas", content: ["Motores de salto", "Capacidad de pilotaje"] },
        { titulo: "Capacidades", content: ["Infiltración", "Combate cuerpo a cuerpo", "Conducción de vehículos"] },
        { titulo: "Debilidades", content: ["Fragilidad ante fuego pesado", "Número limitado en servicio"] }
      ],
      tripulacion: "N/A",
      notas: 'Droides de comando diseñados para operaciones especiales. Podían pilotar naves y vehículos, y eran más ágilies que los B1 estándar.',
      reparacion: [
        {
          titulo: "Motores de salto dañados",
          piezasNecesarias: ["Sistema de propulsión de salto"],
          nivelDificultad: "Medio",
          herramientas: ["Soldador de plasma", "Analizador de gases"],
          notas: "Calibrar presión de gas antes de usar."
        },
        {
          titulo: "Lancefuego inoperativo",
          piezasNecesarias: ["Boquilla de lancefuego", "Células de combustible"],
          nivelDificultad: "Alto",
          herramientas: ["Herramientas de precisión", "Soldador de alta temperatura"],
          notas: "Peligro: combustible inflamable."
        }
      ]
    },
    {
      id: 'sep-04',
      nombre: 'Droideka',
      tipoRol: 'Arma Mortal',
      img: 'https://placehold.co/200x150/000000/FF0000?text=DROIDEKA',
      fabricante: 'Kolpobátrax',
      dimensiones: '1.67m (modo desplegado)',
      caracteristicas: [
        { titulo: "Armamento", content: ["4x Blasters de alta potencia", "Disparador de disruptores"] },
        { titulo: "Sistemas", content: ["Escudos de deflectores", "Modo esferoidal de transporte"] },
        { titulo: "Velocidad", content: ["Despliegue rápido", "Rotación de 360°"] },
        { titulo: "Blindaje", content: ["Chasis de plasteel reforzado"] },
        { titulo: "Debilidades", content: ["Despliegue lento desde forma esférica", "Vulnerable al fuego de suppressión"] }
      ],
      tripulacion: "N/A",
      notas: 'Droide de combate de elite. En modo esférico es vulnerable, pero una vez desplegado es devastador. Muy efectivo en emboscadas.',
      reparacion: [
        {
          titulo: "Escudos deflectores dañados",
          piezasNecesarias: ["Generador de escudos", "Cristales de redirección"],
          nivelDificultad: "Alto",
          herramientas: ["Soldador de precisión", "Analizador de energía"],
          notas: "Requiere alineación de cristales."
        },
        {
          titulo: "Blasters dañados",
          piezasNecesarias: ["Cañones blaster (juego de 4)"],
          nivelDificultad: "Medio",
          herramientas: ["Soldador de plasma"],
          notas: "Reemplazar como unidad completa."
        },
        {
          titulo: "Sistema de rodamiento defectuoso",
          piezasNecesarias: ["Motores de rodamiento"],
          nivelDificultad: "Medio",
          herramientas: ["Multitool", "Grasa conductiva"],
          notas: "Verificar轴承antes de reemplazar."
        }
      ]
    },
    {
      id: 'sep-05',
      nombre: 'MagnaGuardia',
      tipoRol: 'Guardaespaldas / Combate',
      img: 'https://placehold.co/200x150/000000/FF0000?text=MAGNA',
      fabricante: 'Autómatas Baktoid',
      dimensiones: '2.1m',
      caracteristicas: [
        { titulo: "Armamento", content: ["Electrovara de combate", "Escudos protectores", "Lanza-eléctrico"] },
        { titulo: "Sistemas", content: ["Reflejos mejorados", "Cuerpo a cuerpo avanzado"] },
        { titulo: "Blindaje", content: ["Armadura de plasteel completo"] },
        { titulo: "Capacidades", content: ["Combate sin armas", "Protección VIP"] },
        { titulo: "Debilidades", content: ["Sin hiperdrive", "Electrovara puede dañarse"] }
      ],
      tripulacion: "N/A",
      notas: 'Guardaespaldas de alto valor para oficiales separatistas. Son letales en combate cuerpo a cuerpo y portan electrovaras que pueden neutralizar jedis.',
      reparacion: [
        {
          titulo: "Electrovara dañada",
          piezasNecesarias: ["Varas de electrov在上海", "Baterías de alto voltaje"],
          nivelDificultad: "Alto",
          herramientas: ["Soldador de alta potencia", "Aislantes"],
          notas: "Peligro: alto voltaje. Usar protección."
        },
        {
          titulo: "Escudos protectores defectuosos",
          piezasNecesarias: ["Escudos de energía personal"],
          nivelDificultad: "Medio",
          herramientas: ["Soldador de plasma", "Multitool"],
          notas: "Verificar generador primero."
        },
        {
          titulo: "Articulaciones dañadas",
          piezasNecesarias: ["Servomotores de articulaciones"],
          nivelDificultad: "Medio",
          herramientas: ["Kit de lubricación", "Reemplazos de servos"],
          notas: "Comunes tras combate intenso."
        }
      ]
    },
    {
      id: 'sep-06',
      nombre: 'Tridroide',
      tipoRol: 'Nave / Tripulación Automatizada',
      img: 'https://placehold.co/200x150/000000/FF0000?text=TRIDROIDE',
      fabricante: 'Haor Chall Engineering',
      dimensiones: 'Variable según configuración',
      caracteristicas: [
        { titulo: "Funciones", content: ["Pilotaje de naves", "Navegación", "Sistemas de armas"] },
        { titulo: "Configuraciones", content: ["Droide de pilotaje", "Tripulación de cubierta", "Artilleros"] },
        { titulo: "Armamento", content: ["Torretas integradas", "Carga útil de combate"] },
        { titulo: "Sistemas", content: ["Hiperdrive integrado", "Sensores de combate"] },
        { titulo: "Debilidades", content: ["Obsoletos", "Requieren mantenimiento especializado"] }
      ],
      tripulacion: "Autónomo",
      notas: 'Droides triples usados como tripulación completa de naves separatistas. Cada unidad puede operar como piloto, navegante y artillero simultáneamente.',
      reparacion: [
        {
          titulo: "Sistema de pilotaje defectuoso",
          piezasNecesarias: ["Unidad de procesamiento de vuelo"],
          nivelDificultad: "Alto",
          herramientas: ["Analizador de sistemas", "Multitool"],
          notas: "Recalibración de controles de vuelo."
        },
        {
          titulo: "Módulo de hiperdrive dañado",
          piezasNecesarias: ["Calculadora de hiperespacio"],
          nivelDificultad: "Muy alto",
          herramientas: ["Herramientas de precisión", "Soldador de criogenia"],
          notas: "Componente crítico. Reemplazar completo."
        },
        {
          titulo: "Sensores de combate averiados",
          piezasNecesarias: ["Matriz de sensores multitarea"],
          nivelDificultad: "Medio",
          herramientas: ["Soldador de electrónica", "Calibrador"],
          notas: "Verificar cables primero."
        }
      ]
    },
    {
      id: 'sep-07',
      nombre: 'Droide Araña',
      tipoRol: 'Artefacto / Minas',
      img: 'https://placehold.co/200x150/000000/FF0000?text=ARAÑA',
      fabricante: ' Haas Manufacturing',
      dimensiones: '0.8m',
      caracteristicas: [
        { titulo: "Armamento", content: ["Ametralladoras", "Lanzamisiles", "Carga de demolición"] },
        { titulo: "Sistemas", content: ["Sensores de movimiento", "Seguimiento de calor", "Explosivos"] },
        { titulo: "Movilidad", content: ["8 patas articuladas", "Terrenos difíciles"] },
        { titulo: "Blindaje", content: ["Placas de protección contra fuego amigo"] },
        { titulo: "Debilidades", content: ["Corto alcance de sensores", "Explosivos riesgosos"] }
      ],
      tripulacion: "N/A (Autónomo o detonación)",
      notas: 'Droide de combate terrestre con múltiples configuraciones. Puede operar como arma de sitio o kamikaze. Muy efectivo en emboscadas.',
      reparacion: [
        {
          titulo: "Sistema de patas dañado",
          piezasNecesarias: ["Servomotores de patas (juego)", "Articulaciones"],
          nivelDificultad: "Medio",
          herramientas: ["Multitool", "Grasa conductiva"],
          notas: "Verificar cables de control primero."
        },
        {
          titulo: "Ametralladora atascada",
          piezasNecesarias: ["Barril de ametralladora", "Muelles de alimentación"],
          nivelDificultad: "Bajo",
          herramientas: ["Varilla de limpieza", "Aceite de rifles"],
          notas: "Limpieza usualmente suficiente."
        },
        {
          titulo: "Sensores de movimiento defectuosos",
          piezasNecesarias: ["Array de sensores infrarrojos"],
          nivelDificultad: "Alto",
          herramientas: ["Soldador de precisión", "Calibrador"],
          notas: "Requiere línea de visión despejada."
        }
      ]
    }
  ]
};
