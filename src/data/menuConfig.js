// Configuración de menú estructurada (ASCII)
const menu = [
  {
    section: 'General',
    items: [
      { path: '/general/reglamento-base', label: 'Reglamento base' },
      { path: '/general/manual-pilotos', label: 'Manual Pilotos' },
    ],
  },
  {
    section: 'Mecanica de Campo',
    items: [
      { path: '/mecanica-de-campo/reparacion-y-piezas', label: 'Reparación y Piezas' },
      { path: '/mecanica-de-campo/fichas-tecnicas-vehiculo', label: 'Fichas tecnicas de vehiculo' },
      { path: '/mecanica-de-campo/manual-componentes', label: 'Manual Componentes' },
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
      { path: '/robotica/gestion-tecnica-droide', label: 'Gestión Tecnica Droide' },
    ],
  },
  {
    section: 'OOC',
    items: [
      { path: '/ooc/rol-pasivo', label: 'Rol Pasivo' },
    ],
  },
]

export default menu
