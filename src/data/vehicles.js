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
      reparacion: [
        {
          titulo: "Blindaje dañado",
          piezasNecesarias: ["Planchas de Duracero"],
          nivelDificultad: "Bajo",
          herramientas: ["Soldador de plasma"],
          notas: "Es una aleación muy común y fácil de sustituir."
        },
        {
          titulo: "Repulsores Antigravitatorios dañado",
          piezasNecesarias: ["Malla de Repulsores Antigravitatorios", "Electrónica"],
          nivelDificultad: "Medio",
          herramientas: ["Soldador de plasma", "Soldador para electrónica", "Testers", "PDA con módulo de recalibrado"],
          notas: "Componente crítico que requiere recalibrarlo después de instalarlo."
        },
        {
          titulo: "Propulsión Iones dañado",
          piezasNecesarias: ["Motor de Iones Modelo LAAT (sustitución)", "Electrónica"],
          nivelDificultad: "Medio",
          herramientas: ["Soldador de plasma", "Soldador para electrónica", "Multitool"],
          notas: "Comprobar inyectores de material combustible y temperaturas de operación antes."
        },
        {
          titulo: "Gimballs de Cañon Láser dañados",
          piezasNecesarias: ["Condensador de energía", "Servomotores"],
          nivelDificultad: "Medio",
          herramientas: ["Soldador para electrónica", "Multitool"],
          notas: "En caso de que estén inservibles, requerirá sustituir el cañon completo junto con sus capacitores."
        },
        {
          titulo: "Lanzador de Misiles dañado",
          piezasNecesarias: ["EP-750X Lanzador de Misiles", "Electrónica"],
          nivelDificultad: "Medio",
          herramientas: ["Soldador para electrónica", "Multitool"],
          notas: ""
        },
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
      reparacion: [
        {
          titulo: "Reparación de Repulsores",
          piezasNecesarias: ["Repulsores"],
          nivelDificultad: "Medio",
          herramientas: ["Llave Inglesa"],
          notas: "Se pueden extraer 2 Repulsores en buen estado."
        }
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
      reparacion: [
        {
          titulo: "Mantenimiento de Motores Subluz",
          piezasNecesarias: ["Motor Subluz"],
          nivelDificultad: "Alto",
          herramientas: ["Soldador", "Analizador"],
          notas: "Precisión crítica en la alineación de inyectores."
        },
        {
          titulo: "Desguace de Escudos",
          piezasNecesarias: ["Generador de Escudos"],
          nivelDificultad: "Medio",
          herramientas: ["Destornillador sónico"],
          notas: "Sistema de escudos propenso a fallar, extraer con cuidado."
        }
      ]
    },
    {
      id: 'V-19',
      nombre: 'V-19 Torrent',
      tipoRol: 'Caza Estelar Pesado',
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
      notas: 'Esta nave puede ser operada por 3 personas, pero las funciones del copiloto pueden ser suplidas por un astrodroide. El puesto de artillero es imprescindible ya que esta nave es poco maniobrable y suele verse sobrepasada por naves más rápidas y maniobrables.'
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
      notas: 'Muy poco maniobrable. Requiere de un astromecánico para operar sensores y calcular rutas de hiperespacio.'
    },
  ],
  terrestres: [
    {
      id: 'terr-01',
      nombre: 'Tanque Recon X1',
      tipoRol: 'Reconocimiento',
      img: 'https://placehold.co/200x150/000000/00FF00?text=Tanque',
      fabricante: 'Industrias Pesadas',
      dimensiones: '5m x 3m',
      caracteristicas: [
        { titulo: "Motores", content: "Diesel-eléctrico" },
        { titulo: "Armamento", content: "Cañón automático 30mm" },
        { titulo: "Sistemas", content: "Radar de corto alcance" }
      ],
      tripulacion: 2,
      notas: 'Excelente para terrenos difíciles.'
    }
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
      notas: 'La columna vertebral de la Flota de la República.'
    }
  ]
};
