// Configuración de menú estructurada (ASCII)
const menu = [
  {
    section: 'Reglamento base',
    items: [
      { path: '/reglamento-base', label: 'Reglamento base' },
    ],
  },
  {
    section: 'Mecanica de Campo',
    items: [
      { path: '/mecanica-de-campo/reparacion-y-piezas', label: 'Reparación y Piezas' },
      { path: '/mecanica-de-campo/fichas-tecnicas-vehiculo', label: 'Fichas tecnicas de vehiculo' },
    ],
  },
  {
    section: 'Ciberseguridad',
    items: [
      { path: '/ciberseguridad/coms-y-cifrado', label: 'Coms y Cifrado' },
      { path: '/ciberseguridad/hackeo', label: 'Hackeo' },
    ],
  },
  {
    section: 'Robotica',
    items: [
      { path: '/robotica/unidades', label: 'Unidades' },
      { path: '/robotica/protocolos', label: 'Protocolos' },
    ],
  },
  {
    section: 'Ingenieria',
    items: [
      { path: '/ingenieria/rol-pasivo', label: 'Rol Pasivo' },
    ],
  },
]

export default menu
