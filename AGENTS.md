# AGENTS.md - Terminal Engineer App

## Contexto del Proyecto

 Este proyecto es una web frontal en React + TailwindCSS que asemeja una terminal retro. La interfaz utiliza un menú izquierdo tipo panel para navegar entre elementos de contenido, que se cargan en el panel derecho. Las bases deben ser sólidas para permitir reutilizabilidad y expansión (modales u otros elementos UI). La web incluye un sistema de login simulado (contraseña republica) para dar la sensación de área VIP sin seguridad real. El objetivo es proporcionar una base modular y escalable para construir la UI de forma incremental.

## Skills Catalog

| slug | name | short_description | category | commands | skill_path | version | status | owner |
|---|---|---|---|---|---|---|---|---|
| skill-studio | Skill Studio | CLI para gestionar y enlazar skills atómicas | Tooling / Skills Ecosystem | init, new, scaffold, list, validate, docs, test, publish, templates | .agents/skills/skill-studio/SKILL.md | v0.1.0 | planned | equipo-ecosystem |
| skill-clean-code | Skill Clean Code | Prácticas de Clean Code y guías | Calidad de código | init, validate, review-sample | .agents/skills/skill-clean-code/SKILL.md | v0.1.0 | planned | equipo-qa |
| skill-react-testing | React Testing | Patrones de tests para React | Testing | init, generate-test-template, run-tests, validate | .agents/skills/skill-react-testing/SKILL.md | v0.1.0 | planned | frontend |
| skill-tailwind-patterns | Tailwind Patterns | Patrones de diseño Tailwind | Estilo/UI | init, list-patterns, apply-pattern | .agents/skills/skill-tailwind-patterns/SKILL.md | v0.1.0 | planned | UI |
| skill-accessibility | Accessibility | Pautas y checks de accesibilidad | Accesibilidad | init, audit, add-checklist | .agents/skills/skill-accessibility/SKILL.md | v0.1.0 | planned | accessibility-team |
| skill-project-context | Project Context | Contexto del proyecto para ingenieros del Gran Ejército de la Republica | Contexto y directrices para el stack de ingenieros | init-context, describe, summarize, docs | .agents/skills/skill-project-context/SKILL.md | v0.1.0 | planned | equipo-ecosystem |
| skill-frontend-terminal | Frontend Terminal Web | Interfaz front-end estilo terminal en React + Tailwind | Aplicación frontal con menú izquierdo y panel derecho, estilo terminal retro | init, start, scaffold-page, load-content | .agents/skills/skill-frontend-terminal/SKILL.md | v0.1.0 | planned | frontend |

Notas: Este índice enlaza a SKILL.md individuales para cada skill atómica. Para ampliar, añade nuevas filas siguiendo la misma convención.
| skill-comms | Comms | Login y encriptación para comunicaciones | Communications / Security | init, setup-login, manage-keys, rotate-keys, docs, test, publish | .agents/skills/skill-comms/SKILL.md | v0.1.0 | planned | equipo-comms |

## Sistema de Fichas Técnicas de Vehículos

Para gestionar de forma modular las fichas técnicas de naves y vehículos terrestres:

- **Data (`src/data/vehicles.js`):** Fuente única de verdad. Estructura de objetos categorizados.
- **Componentes:**
  - `VehicleCard.jsx`: Visualización preliminar (Grid).
  - `VehicleModal.jsx`: Visualización detallada mediante modal.
- **Página (`src/pages/Vehiculos/Vehiculos.jsx`):** Lógica de renderizado dinámico basado en las categorías de `vehicles.js`.

Para añadir un vehículo, solo editar el objeto en `src/data/vehicles.js`.

