# Terminal Engineer App

Aplicación web estilo terminal retro para servidor de rol. Interfaz inspirada en sistemas operativos de los años 80 con estética CRT y efectos visuales clásicos.

## Características

- **Interfaz estilo terminal retro** con efectos CRT y animaciones
- **Sistema de login simulado**
- **Navegación por teclado** (ArrowUp/ArrowDown, Enter, Escape)
- **Diseño responsive** (desktop sidebar + móvil hamburger menu)
- **Catálogo de vehículos** con fichas técnicas detalladas
- **Sistema de droides** con gestión técnica
- **Herramientas de cifrado** y comunicaciones
- **Reglamento y manuales** de referencia

## Tech Stack

- **React 18** + Vite
- **TailwindCSS** (con plugin @tailwindcss/vite)
- **React Router 6**
- **JavaScript** (ES6+)

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev      # Inicia el servidor en http://localhost:5173
npm start        # Alias para dev
```

## Build

```bash
npm run build           # Build de producción
npm run preview         # Previsualizar build (puerto 5173)
```

## Estructura del Proyecto

```
src/
├── auth/               # Login y autenticación simulada
│   ├── AuthContext.jsx
│   ├── LoginScreen.jsx
│   └── ProtectedRoute.jsx
├── components/         # Componentes reutilizables
│   ├── CrtOverlay.jsx  # Efecto CRT
│   ├── DroidCard.jsx
│   ├── DroidModal.jsx
│   ├── Sidebar.jsx
│   ├── TerminalButton.jsx
│   ├── TerminalLayout.jsx
│   ├── TerminalTabGroup.jsx
│   ├── VehicleCard.jsx
│   └── VehicleModal.jsx
├── data/               # Datos estáticos
│   ├── droids.js
│   ├── menuConfig.js
│   └── vehicles.js
├── pages/              # Páginas organizadas por categoría
│   ├── Ciberseguridad/
│   ├── General/
│   ├── Ingenieria/
│   ├── MecanicaDeCampo/
│   └── Robotica/
├── styles/
│   └── colors.css      # Colores personalizados
├── utils/              # Utilidades
│   ├── cipherUtils.js
│   └── cryptoUtils.js
└── main.jsx            # Entry point + rutas
```

## Secciones

| Sección | Descripción |
|---------|-------------|
| General | Reglamento base y manual de pilotos |
| Mecánica de Campo | Reparaciones, fichas de vehículos, manuales |
| Ciberseguridad | Cifrado, comunicaciones, hackeo |
| Robótica | Unidades droides y gestión técnica |
| OOC | Reglas de rol pasivo |


## Keyboard Shortcuts

| Tecla | Acción |
|-------|--------|
| ArrowUp/Down | Navegar menú |
| Enter | Ir a sección seleccionada |
| Escape | Cerrar sidebar (móvil) |
