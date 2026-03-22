export const vehicles = {
  naves: [
    {
      id: 'LAAT/i',
      nombre: 'LAAT/i',
      tipoRol: 'Transporte de Infantería',
      img: 'https://res.cloudinary.com/dhaeqd0f2/image/upload/v1774040766/laat-i_fqydho.png',
      fabricante: 'Ingeniería Pesada Rothana',
      dimensiones: '17.69m x 28.8m x 6.94m',
      caracteristicas: [
        { titulo: "Velocidad", content: ["Velocidad Atmosférica: 620 km/hora", "Aceleración: 2.83 G"] },
        { titulo: "Sistemas de Propulsión", content: ["Motores Subluz: 2x Motores de Iones traseros", "Repulsores VTOL: Matriz de Repulsorer de Antigravedad ventrales"] },
        { titulo: "Armamento", content: ["3x Torretas Antiinfantería", "2x Torretas láser de Precisión de haz compuesto", "Lanzamisiles armados con 8x cohetes aire-aire"] },
        { titulo: "Sistemas", content: ["Escudos físicos Blast"] },
      ],
      tripulacion: "2-4 tripulantes, 22-30 pasajeros",
      notas: 'Posee blindaje muy grueso y resistente. Es un tanque aéreo capaz de transportar tropas de forma segura. En algunas variantes dispone de 2 artilleros laterales, a parte de piloto y copiloto. No dispone de propulsores FTL.',
      desguace: [
        { nombre: "Chasis LAAT", tipo: "esencial" },
        { nombre: "Malla de Repulsores Antigravitatorios", tipo: "necesaria" },
        { nombre: "Motores de iones LAAT", tipo: "necesaria" },
        { nombre: "Gimballs de Cañón Láser", tipo: "necesaria" },
        { nombre: "Torretas de Rayo Láser Focalizado", tipo: "necesaria" },
        { nombre: "EP-750X Lanzador de Misiles", tipo: "necesaria" },
        { nombre: "Electrónica", tipo: "comun" },
        { nombre: "Engranajes", tipo: "comun" },
        { nombre: "Blindaje", tipo: "comun" }
      ]
    },
    {
      id: 'LAAT/c',
      nombre: 'LAAT/c',
      tipoRol: 'Transporte de Vehículos',
      img: 'https://res.cloudinary.com/dhaeqd0f2/image/upload/v1774090746/laat-c_keg8tb.png',
      fabricante: 'Ingeniería Pesada Rothana',
      dimensiones: '17.69m x 28.8m x 6.94m',
      caracteristicas: [
        { titulo: "Velocidad", content: ["Velocidad Atmosférica: 620 km/hora", "Aceleración: 2.83 G"] },
        { titulo: "Sistemas de Propulsión", content: ["Motores Subluz: 2x Motores de Iones traseros", "Repulsores VTOL: Matriz de Repulsorer de Antigravedad ventrales"] },
        { titulo: "Armamento", content: ["3x Torretas Antiinfantería", "Lanzamisiles armados con 8x cohetes aire-aire"] },
        { titulo: "Sistemas", content: ["Abrazadera magnética"] },
      ],
      tripulacion: "2 tripulantes",
      notas: 'Dispone de un par de brazos magnéticos que permite transportar infinidad de vehículos. No dispone de propulsores FTL.',
      desguace: [
        { nombre: "Chasis LAAT", tipo: "esencial" },
        { nombre: "Malla de Repulsores Antigravitatorios", tipo: "necesaria" },
        { nombre: "Motores de iones LAAT", tipo: "necesaria" },
        { nombre: "Gimballs de Cañón Láser", tipo: "necesaria" },
        { nombre: "Abrazaderas magnéticas", tipo: "necesaria" },
        { nombre: "Electrónica", tipo: "comun" },
        { nombre: "Engranajes", tipo: "comun" },
        { nombre: "Blindaje", tipo: "comun" }
      ]
    },
    {
      id: 'ARC-170',
      nombre: 'ARC-170',
      tipoRol: 'Caza Estelar Pesado',
      img: 'https://res.cloudinary.com/dhaeqd0f2/image/upload/v1774040455/arc-170_h6plis.png',
      fabricante: 'Industrias Incom',
      dimensiones: '14.5m x 22.6m x 4.78m',
      caracteristicas: [
        { titulo: "Velocidad", content: ["Velocidad Atmosférica: 1000 km/h", "Velocidad Máxima: 100 MegaLuz por hora", "Aceleración: 2600 G"] },
        { titulo: "Sistemas de Propulsión", content: ["Motores Subluz: 2x Motores de Iones", "Repulsores VTOL: 1x Repulsor Estabilizador", "Hipermotor: Clase 1.5 (autonomía 5000 años luz)"] },
        { titulo: "Armamento", content: ["Frente: 2x Cañones Láser Medios", "Trasero: 2x Cañones Láser Ligeros", "6x Misiles de protones"] },
        { titulo: "Sistemas", content: ["Escudos Deflectores: 50 petaWatts", "Contramedidas: Bloqueador de Sensores", "Alerones-S"] },
      ],
      tripulacion: "3",
      notas: 'Esta nave puede ser operada por 3 personas, pero las funciones del copiloto pueden ser suplidas por un astrodroide. El puesto de artillero es imprescindible ya que esta nave es poco maniobrable y suele verse sobrepasada por naves más rápidas y maniobrables.',
      desguace: [
        { nombre: "Chasis ARC-170", tipo: "esencial" },
        { nombre: "Motor de Iones", tipo: "necesaria" },
        { nombre: "Hipermotor Clase 1.5", tipo: "necesaria" },
        { nombre: "Generador de Escudos", tipo: "necesaria" },
        { nombre: "Cañones Láser medianos", tipo: "necesaria" },
        { nombre: "Alerones-S", tipo: "necesaria" },
        { nombre: "Servomotores", tipo: "comun" }
      ]
    },
    {
      id: 'V-19',
      nombre: 'V-19 Torrent',
      tipoRol: 'Caza Estelar',
      img: 'https://res.cloudinary.com/dhaeqd0f2/image/upload/v1774041508/v-19-torrent_ipnoor.png',
      fabricante: 'Industrias Incom',
      dimensiones: '20m x 15m',
      caracteristicas: [
        { titulo: "Velocidad", content: ["Velocidad Atmosférica: 1200 km/hora", "Velocidad Máxima: 108 MegaLuz por hora", "Aceleración: 2800 G"] },
        { titulo: "Sistemas de Propulsión", content: ["Motores Subluz: 2x Motores de Iones", "Repulsores de Antigravedad: 1x Repulsor Estabilizador", "Hipermotor: (Externo) Anillo de Hiperespacio Clase 1"] },
        { titulo: "Armamento", content: ["2x Cañones Láser Ligeros", "6x Misiles de impacto"] },
        { titulo: "Sistemas", content: ["Alerones-S"] },
      ],
      tripulacion: "1",
      notas: 'Caza rápido y ágil, ideal para escoltas y apoyo cercano.',
      desguace: [
        { nombre: "Chasis V-19", tipo: "esencial" },
        { nombre: "Motor de Iones", tipo: "necesaria" },
        { nombre: "Cañones Láser Ligeros", tipo: "necesaria" },
        { nombre: "Alerones-S", tipo: "necesaria" },
        { nombre: "Servomotores", tipo: "comun" },
        { nombre: "Electrónica", tipo: "comun" },
        { nombre: "Blindaje", tipo: "comun" }
      ]
    },
    {
      id: 'BTL-ALA-Y',
      nombre: 'BTL Ala Y',
      tipoRol: 'Bombardero',
      img: 'https://res.cloudinary.com/dhaeqd0f2/image/upload/v1774045090/ala-y_y64pcf.png',
      fabricante: 'Fabricaciones Koensayr',
      dimensiones: '23.4m',
      caracteristicas: [
        { titulo: "Velocidad", content: ["Velocidad Atmosférica: 1000 km/hora", "Velocidad Máxima: 100 MegaLuz por hora", "Aceleración: 2100 G"] },
        { titulo: "Sistemas de Propulsión", content: ["Motores Subluz: 2x Motores de Iones", "Repulsores de Antigravedad: 1x Repulsor Estabilizador", "Hipermotor: Clase 2"] },
        { titulo: "Armamento", content: ["2x Cañones Láser Pesados", "1x Torreta SW-4 con doble Cañón Iónico", "6x torpedos de Protones", "Bombas de Protones"] },
        { titulo: "Sistemas", content: ["Escudos Deflectores: 800 petaWats", "Sensores: ANs 5d Largo Alcance (escaneo), PG-7u corto rango (búsqueda)"] },
      ],
      tripulacion: "2",
      notas: 'Muy poco maniobrable. Requiere de un astromecánico para operar sensores y calcular rutas de hiperespacio.',
      desguace: [
        { nombre: "Chasis Ala-Y", tipo: "esencial" },
        { nombre: "Hipermotor Clase 2", tipo: "necesaria" },
        { nombre: "Motor de Iones", tipo: "necesaria" },
        { nombre: "Cañones láser medianos", tipo: "necesaria" },
        { nombre: "Cañones de iones dobles ligeros", tipo: "necesaria" },
        { nombre: "Lanzador de Torpedos de Protones MG7", tipo: "necesaria" },
        { nombre: "Circuitería", tipo: "comun" },
        { nombre: "Componentes de navegación", tipo: "comun" }
      ]
    }
  ],
  terrestres: [
    {
      id: 'barc-speeder',
      nombre: 'Barc Speeder',
      tipoRol: 'Vehículo de Reconocimiento',
      img: 'https://placehold.co/200x150/000000/00FF00?text=BARC',
      fabricante: 'Ingeniería Rotativa',
      dimensiones: '3.2m',
      caracteristicas: [
        { titulo: "Propulsión", content: ["Repulsores Antigravedad"] },
        { titulo: "Armamento", content: ["Cañones bláster ligeros"] },
        { titulo: "Velocidad", content: ["500 km/h en superficies"] }
      ],
      tripulacion: "1 piloto",
      notas: 'Vehículo rápido de reconocimiento y escolta.',
      desguace: [
        { nombre: "Chasis Barc Speeder", tipo: "esencial" },
        { nombre: "Cañones bláster ligeros Barc", tipo: "necesaria" },
        { nombre: "Repulsores Antigravedad de Speeders Civiles", tipo: "comun" }
      ]
    },
    {
      id: 'tx-130',
      nombre: 'TX-130',
      tipoRol: 'Tanque de Combate',
      img: 'https://placehold.co/200x150/000000/00FF00?text=TX-130',
      fabricante: 'Haor Chall Engineering',
      dimensiones: '6.5m',
      caracteristicas: [
        { titulo: "Propulsión", content: ["Repulsores Antigravedad"] },
        { titulo: "Armamento", content: ["2x Cañones láser duales pesados", "Proyector de escudos Exo-Shell 3"] },
        { titulo: "Blindaje", content: ["Blindaje ablativo ligero"] }
      ],
      tripulacion: "2 (piloto + artillero)",
      notas: 'Tanque rápido y ágil para flanqueos.',
      desguace: [
        { nombre: "Chasis TX-130", tipo: "esencial" },
        { nombre: "Repulsores Antigravedad", tipo: "necesaria" },
        { nombre: "Proyector de escudos Exo-Shell 3", tipo: "necesaria" },
        { nombre: "Cañones láser duales pesados", tipo: "necesaria" },
        { nombre: "Blindaje ablativo ligero", tipo: "comun" },
        { nombre: "Electrónica", tipo: "comun" }
      ]
    },
    {
      id: 'at-rt',
      nombre: 'AT-RT',
      tipoRol: 'Caminante de Reconocimiento',
      img: 'https://placehold.co/200x150/000000/00FF00?text=AT-RT',
      fabricante: 'Industrias Rothana',
      dimensiones: '3.2m',
      caracteristicas: [
        { titulo: "Locomoción", content: ["2 patas mecánicas con actuadores"] },
        { titulo: "Armamento", content: ["1x Cañón Láser mounted", "1x Generador de Rayo Tractor focalizado"] },
        { titulo: "Tripulación", content: ["1 conductor"] }
      ],
      tripulacion: "1",
      notas: 'Caminante ligero de reconocimiento. Muy rápido pero frágil.',
      desguace: [
        { nombre: "Chasis AT-RT", tipo: "esencial" },
        { nombre: "Cañón Láser", tipo: "necesaria" },
        { nombre: "Generadores de Rayo Tractor focalizados", tipo: "necesaria" },
        { nombre: "Actuadores", tipo: "comun" },
        { nombre: "Engranajes", tipo: "comun" },
        { nombre: "Sistemas hidráulicos", tipo: "comun" }
      ]
    },
    {
      id: 'at-te',
      nombre: 'AT-TE',
      tipoRol: 'Caminante de Asalto',
      img: 'https://placehold.co/200x150/000000/00FF00?text=AT-TE',
      fabricante: 'Industrias Rothana',
      dimensiones: '13.2m',
      caracteristicas: [
        { titulo: "Locomoción", content: ["6 patas con actuadores e hidráulicos"] },
        { titulo: "Armamento", content: ["1x Torreta de Láseres Pesados Maad-21", "1x Cañón propulsor de masa Firefont 04", "5x Cañones bláster", "Generadores de Rayo Tractor focalizados"] },
        { titulo: "Blindaje", content: ["Blindaje compuesto de matriz de duracero"] }
      ],
      tripulacion: "6 (piloto + copiloto + artilleros)",
      notas: 'Tanque de caminante pesado. Excelente fuego de cobertura.',
      desguace: [
        { nombre: "Chasis AT-TE", tipo: "esencial" },
        { nombre: "Torreta de Láseres Pesados Maad-21", tipo: "necesaria" },
        { nombre: "Cañón propulsor de masa Firefont 04", tipo: "necesaria" },
        { nombre: "Generadores de Rayo Tractor focalizados", tipo: "necesaria" },
        { nombre: "Actuadores", tipo: "comun" },
        { nombre: "Engranajes", tipo: "comun" },
        { nombre: "Sistemas hidráulicos", tipo: "comun" }
      ]
    },
  ],
  navesCapitales: [
    {
      id: 'cap-01',
      nombre: 'Crucero Estelar clase Venator',
      tipoRol: 'Nave Capital de Combate',
      img: 'https://placehold.co/200x150/000000/00FF00?text=Venator',
      fabricante: 'Astilleros de Kuat',
      dimensiones: '1137m',
      caracteristicas: [
        { titulo: "Sistemas", content: "Hangares masivos, Bombardeo orbital" }
      ],
      tripulacion: "7400",
      notas: 'La columna vertebral de la Flota de la República.',
      desguace: [
        { nombre: "Chasis Venator", tipo: "esencial" },
        { nombre: "Motores de iones", tipo: "necesaria" },
        { nombre: "Hangar deci-mol", tipo: "necesaria" },
        { nombre: "Escudos deflectores", tipo: "necesaria" },
        { nombre: "Torretas láser", tipo: "necesaria" },
        { nombre: "Sistemas de soporte vital", tipo: "necesaria" },
        { nombre: "Electrónica", tipo: "comun" },
        { nombre: "Engranajes", tipo: "comun" }
      ]
    }
  ]
};