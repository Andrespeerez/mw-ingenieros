export const vehicles = {
  naves: [
    {
      id: 'LAAT/i',
      nombre: 'LAAT/i',
      tipoRol: 'Transporte de Infantería',
      img: 'https://res.cloudinary.com/dhaeqd0f2/image/upload/v1774040766/laat-i_fqydho.png',
      fabricante: 'Ingeniería Pesada Rothana',
      dimensiones: '17.69m x 28.8m x 6.94m',
      caracteristicas: {
        velocidad: [
          "Velocidad Atmosférica: 620 km/hora",
          "Aceleración: 2.83 G",
        ],
        sistemasPropulsion: [
          "Motores Subluz: 2x Motores de Iones traseros",
          "Repulsores VTOL: Matriz de Repulsorer de Antigravedad ventrales",
        ],
        armamento: [
          "3x Torretas Antiinfantería",
          "2x Torretas láser de Precisión de haz compuesto",
          "Lanzamisiles armados con 8x cohetes aire-aire",
        ],
        sistemas: [
          "Escudos físicos Blast",
        ],
      },
      tripulacion: "2-4 tripulantes, 22-30 pasajeros",
      notas: 'Posee blindaje muy grueso y resistente. Es un tanque aéreo capaz de transportar tropas de forma segura. En algunas variantes dispone de 2 artilleros laterales, a parte de piloto y copiloto. No dispone de propulsores FTL.'
    },
    {
      id: 'ARC-170',
      nombre: 'ARC-170',
      tipoRol: 'Caza Estelar Pesado',
      img: 'https://res.cloudinary.com/dhaeqd0f2/image/upload/v1774040455/arc-170_h6plis.png',
      fabricante: 'Industrias Incom',
      dimensiones: '14.5m x 22.6m x 4.78m',
      caracteristicas: {
        velocidad: [
          "Velocidad Atmosférica: 1000 km/h",
          "Velocidad Máxima: 100 MegaLuz por hora",
          "Aceleración: 2600 G",
        ],
        sistemasPropulsion: [
          "Motores Subluz: 2x Motores de Iones",
          "Repulsores VTOL: 1x Repulsor Estabilizador",
          "Hipermotor: Clase 1.5 (autonomía 5000 años luz)",
        ],
        armamento: [
          "Frente: 2x Cañones Láser Medios",
          "Trasero: 2x Cañones Láser Ligeros",
          "6x Misiles de protones",
        ],
        sistemas: [
          "Escudos Deflectores: 50 petaWatts",
          "Contramedidas: Bloqueador de Sensores",
          "Alerones-S",
        ],
      },
      tripulacion: "3",
      notas: 'Esta nave puede ser operada por 3 personas, pero las funciones del copiloto pueden ser suplidas por un astrodroide. El puesto de artillero es imprescindible ya que esta nave es poco maniobrable y suele verse sobrepasada por naves más rápidas y maniobrables.'
    },
    {
      id: 'V-19',
      nombre: 'V-19 Torrent',
      tipoRol: 'Caza Estelar Pesado',
      img: 'https://res.cloudinary.com/dhaeqd0f2/image/upload/v1774041508/v-19-torrent_ipnoor.png',
      fabricante: 'Industrias Incom',
      dimensiones: '20m x 15m',
      caracteristicas: {
        velocidad: [
          "Velocidad Atmosférica: 1200 km/hora",
          "Velocidad Máxima: 108 MegaLuz por hora",
          "Aceleración: 2800 G",
        ],
        sistemasPropulsion: [
          "Motores Subluz: 2x Motores de Iones",
          "Repulsores de Antigravedad: 1x Repulsor Estabilizador",
          "Hipermotor: (Externo) Anillo de Hiperespacio Clase 1",
        ],
        armamento: [
          "2x Cañones Láser Ligeros",
          "6x Misiles de impacto",
        ],
        sistemas: [
          "Alerones-S"
        ],
      },
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
      caracteristicas: {
        velocidad: [
          "Velocidad Atmosférica: 1000 km/hora",
          "Velocidad Máxima: 100 MegaLuz por hora",
          "Aceleración: 2100 G",
        ],
        sistemasPropulsion: [
          "Motores Subluz: 2x Motores de Iones",
          "Repulsores de Antigravedad: 1x Repulsor Estabilizador",
          "Hipermotor: Clase 2",
        ],
        armamento: [
          "2x Cañones Láser Pesados",
          "1x Torreta SW-4 con doble Cañón Iónico",
          "6x torpedos de Protones",
          "Bombas de Protones"
        ],
        sistemas: [
          "Escudos Deflectores: 800 petaWats",
          "Sensores: ANs 5d Largo Alcance (escaneo), PG-7u corto rango (búsqueda)",
        ],
      },
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
      caracteristicas: {
        motores: 'Diesel-eléctrico',
        armamento: 'Cañón automático 30mm',
        sistemas: 'Radar de corto alcance'
      },
      tripulacion: 2,
      notas: 'Excelente para terrenos difíciles.'
    }
  ]
};