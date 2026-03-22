export const rollTypes = [
  {
    id: 'estado',
    name: 'Estado',
    description: 'Determina el estado de un objeto, sistema o recurso. Más alto es mejor.',
    example: 'Evaluar si una pieza es recuperable, verificar integridad de un sistema.',
    successCondition: 'más alto = mejor',
  },
  {
    id: 'gravedad',
    name: 'Gravedad',
    description: 'Evalúa la severidad de un problema o daño. Más bajo es mejor.',
    example: 'Diagnosticar nivel de daño, determinar urgencia de una reparación.',
    successCondition: 'más bajo = mejor',
  },
  {
    id: 'medicion',
    name: 'Medición',
    description: 'Determina proximidad a un valor objetivo. El resultado ideal es 50.',
    example: 'Calibrar un sensor, ajustar frecuencias, configuraciones.',
    successCondition: 'cerca de 50 = mejor',
  },
]

export const competenceLevels = [
  { id: 'nivel-1', name: 'Nivel I', modifier: -10 },
  { id: 'nivel-2', name: 'Nivel II', modifier: 0 },
  { id: 'nivel-3', name: 'Nivel III', modifier: 10 },
]

export const actionRollRules = {
  vsDifficulty: {
    title: 'vs. Dificultad',
    description: 'Superar un valor fijo. Éxito si (Dado + Competencia) >= Dificultad.',
    success: 'Resultado final >= Dificultad.',
    failure: 'Resultado final < Dificultad.',
  },
  vsOpposed: {
    title: 'vs. Dado Enfrentado',
    description: 'Superar al oponente. Éxito si (Tu Resultado) > (Resultado Oponente).',
    success: 'Tu resultado > Oponente.',
    failure: 'Tu resultado <= Oponente.',
  },
  teamWork: {
    title: 'Trabajo en Equipo',
    description: 'Varios ingenieros.',
    bonus: 'Se lanzan ambos dados, se escoge el más alto. Se suma la competencia más alta entre ambos.',
  },
}

export const examples = {
  mecanica: {
    title: 'Mecánica',
    // Entry point for the mechanical repair process
    entryPoint: 'evaluacionInicial',
    steps: {
      evaluacionInicial: {
        label: 'Evaluar estado general de los sistemas',
        rollType: 'estado', // Más alto = mejor
        outcomes: [
          {
            condition: result => result >= 75,
            nextStep: 'sistemaOptimo',
            note: 'Todos los sistemas funcionan dentro de parámetros normales.'
          },
          {
            condition: result => result >= 50,
            nextStep: 'revisionMotor',
            note: 'Se detectan anomalías menores que requieren atención.'
          },
          {
            condition: result => result < 50,
            nextStep: 'revisionMotor',
            note: 'Se observan fallas críticas en múltiples sistemas.'
          }
        ]
      },
      sistemaOptimo: {
        label: 'Confirmar funcionamiento óptimo',
        rollType: 'medicion', // Ideal cerca de 50
        outcomes: [
          {
            condition: result => Math.abs(result - 50) <= 10,
            nextStep: 'finExitoTotal',
            note: 'Verificación confirma rendimiento óptimo en todos los sistemas.'
          },
          {
            condition: result => true,
            nextStep: 'ajusteFino',
            note: 'Resultados inconsistentes detectados, requiere calibración.'
          }
        ]
      },
      revisionMotor: {
        label: 'Inspeccionar sistema de propulsión',
        rollType: 'estado',
        outcomes: [
          {
            condition: result => result >= 70,
            nextStep: 'verificarCombustible',
            note: 'Motor muestra desgaste normal, revisar niveles de combustible.'
          },
          {
            condition: result => result >= 40,
            nextStep: 'diagnosticarRuidos',
            note: 'Se detectan vibraciones anómalas en el bloque motor.'
          },
          {
            condition: result => result < 40,
            nextStep: 'revisarTuberias',
            note: 'Pérdida de presión significativa en el sistema de propulsión.'
          }
        ]
      },
      diagnosticarRuidos: {
        label: 'Analizar fuentes de ruido',
        rollType: 'medicion',
        outcomes: [
          {
            condition: result => result >= 60,
            nextStep: 'revisarTurbinas',
            note: 'Ruido de alta frecuencia sugiere problemas en turbinas de compresión.'
          },
          {
            condition: result => result >= 30,
            nextStep: 'revisarAceite',
            note: 'Ruido metálico constante indica posible falta de lubricación.'
          },
          {
            condition: result => result < 30,
            nextStep: 'revisarEscape',
            note: 'Ruidos de explosión irregular apuntan a problemas en sistema de escape.'
          }
        ]
      },
      revisarTurbinas: {
        label: 'Inspección de turbinas',
        rollType: 'gravedad', // Más bajo = mejor (menos daño)
        outcomes: [
          {
            condition: result => result <= 20,
            nextStep: 'limpiezaTurbinas',
            note: 'Desgaste mínimo detectado, requiere solo limpieza preventiva.'
          },
          {
            condition: result => result <= 50,
            nextStep: 'balanceTurbinas',
            note: 'Desequilibrio detectado, requiere ajuste de palas.'
          },
          {
            condition: result => result > 50,
            nextStep: 'revisionTurbinasMayor',
            note: 'Daño significativo en álabes, requiere inspección detallada.'
          }
        ]
      },
      limpiezaTurbinas: {
        label: 'Realizar limpieza de turbinas (+0) [ACCIÓN]',
        rollType: 'estado',
        outcomes: [
          {
            condition: result => result >= 55,
            nextStep: 'verificarPresion',
            note: 'Limpieza completada, flujo de aire restaurado a niveles normales.'
          },
          {
            condition: result => result >= 30,
            nextStep: 'limpiezaProfunda',
            note: 'Limpieza parcial, restos de carbonilla persisten en zonas de difícil acceso.'
          },
          {
            condition: result => result < 30,
            nextStep: 'reemplazoTurbinas',
            note: 'Obstrucción severa, componentes dañados requieren reemplazo.'
          }
        ]
      },
      verificarPresion: {
        label: 'Verificar presión de combustión',
        rollType: 'medicion',
        outcomes: [
          {
            condition: result => Math.abs(result - 50) <= 15,
            nextStep: 'finExitoParcial',
            note: 'Presión dentro de rango aceptable, sistema operativo tras mantenimiento.'
          },
          {
            condition: result => result < 35,
            nextStep: 'revisarInyectores',
            note: 'Presión insuficiente, posible obstrucción en inyectores de combustible.'
          },
          {
            condition: result => result > 65,
            nextStep: 'revisarRegulador',
            note: 'Presión excesiva, riesgo de sobrepresión en cámara de combustión.'
          }
        ]
      },
      finExitoTotal: {
        label: 'Operación completada - Sistema Óptimo',
        isTerminal: true,
        note: 'Todos los sistemas verificados y funcionando dentro de parámetros óptimos.'
      },
      finExitoParcial: {
        label: 'Operación completada - Sistema Funcional',
        isTerminal: true,
        note: 'Sistema restaurado a niveles operativos seguros, monitoreo recomendado.'
      },
      revisionTurbinasMayor: {
        label: 'Inspección detallada de turbinas',
        rollType: 'estado',
        outcomes: [
          {
            condition: result => result >= 60,
            nextStep: 'reparacionTurbinas',
            note: 'Daño superficial confirmado, reparable con técnicas estándar.'
          },
          {
            condition: result => result >= 30,
            nextStep: 'reparacionCompleja',
            note: 'Daño estructural moderado, requiere intervención especializada.'
          },
          {
            condition: result => result < 30,
            nextStep: 'reemplazoCompleto',
            note: 'Daño crítico detectado, módulo completo requiere reemplazo.'
          }
        ]
      },
      // Additional branches for other failure modes would continue here...
      // For brevity, showing the structure can be extended similarly
    }
  },
  hacker: {
    title: 'Hacker',
    entryPoint: 'conexionInicial',
    steps: {
      conexionInicial: {
        label: 'Insertar sonda de datos al dataport',
        rollType: 'estado',
        outcomes: [
          {
            condition: result => result >= 65,
            nextStep: 'evalFirewall',
            note: 'Conexión establecida sin detección inicial.'
          },
          {
            condition: result => result >= 35,
            nextStep: 'evalFirewall',
            note: 'Conexión establecida, actividad registrada en logs de acceso.'
          },
          {
            condition: result => result < 35,
            nextStep: 'alarmaIntrusion',
            note: 'Conexión bloqueada por sistema de detección de intrusiones (IDS).'
          }
        ]
      },
      evalFirewall: {
        label: 'Evaluar configuración de firewall',
        rollType: 'medicion', // Qué tan cerca está de configuración ideal (50)
        outcomes: [
          {
            condition: result => Math.abs(result - 50) <= 20,
            nextStep: 'firewallBasico',
            note: 'Firewall con configuración estándar detectada.'
          },
          {
            condition: result => result >= 70,
            nextStep: 'firewallAvanzado',
            note: 'Firewall con reglas estrictas y monitoreo activo detectado.'
          },
          {
            condition: result => result < 30,
            nextStep: 'firewallPermisivo',
            note: 'Firewall mal configurado o en modo de aprendizaje detectado.'
          }
        ]
      },
      firewallBasico: {
        label: 'Intentar bypass de firewall básico',
        rollType: 'estado', // Contra dificultad del sistema
        outcomes: [
          {
            condition: result => result >= 50,
            nextStep: 'accesoRedInterna',
            note: 'Bypass exitoso mediante técnica de fragmentación de paquetes.'
          },
          {
            condition: result => result >= 30,
            nextStep: 'tentativaEngano',
            note: 'Bypass parcial detectado, intentando técnica de suplantación de IP.'
          },
          {
            condition: result => result < 30,
            nextStep: 'registroIncidente',
            note: 'Intento detectado y bloqueado, incidente registrado en SIEM.'
          }
        ]
      },
      accesoRedInterna: {
        label: 'Navegar hacia servidores de confianza',
        rollType: 'medicion',
        outcomes: [
          {
            condition: result => result >= 55,
            nextStep: 'localizarBD',
            note: 'Tráfico mezclado con ruido ambiental, baja probabilidad de detección.'
          },
          {
            condition: result => result >= 35,
            nextStep: 'camuflajeTráfico',
            note: 'Tráfico sospechoso detectado, implementando técnicas de ofuscación.'
          },
          {
            condition: result => result < 35,
            nextStep: 'alarmaAccesoNoAutorizado',
            note: 'Patrón de acceso anómalo detectado, activando protocolos de respuesta.'
          }
        ]
      },
      localizarBD: {
        label: 'Localizar base de datos objetivo',
        rollType: 'estado',
        outcomes: [
          {
            condition: result => result >= 60,
            nextStep: 'accesoBD',
            note: 'Base de datos localizada sin encriptación adicional aplicada.'
          },
          {
            condition: result => result >= 40,
            nextStep: 'evadirDLP',
            note: 'Base de datos protegida por sistema de prevención de pérdida de datos (DLP).'
          },
          {
            condition: result => result < 40,
            nextStep: 'enganoHoneytoken',
            note: 'Acceso a falso objetivo detectado, posible trampa (honeypot) activada.'
          }
        ]
      },
      accesoBD: {
        label: 'Intentar acceso a base de datos',
        rollType: 'estado',
        outcomes: [
          {
            condition: result => result >= 55,
            nextStep: 'extraerDatos',
            note: 'Credenciales por defecto aceptadas, acceso total concedido.'
          },
          {
            condition: result => result >= 35,
            nextStep: 'fuerzaBrutaSuave',
            note: 'Autenticación requerida, intentando ataque de diccionario limitado.'
          },
          {
            condition: result => result < 35,
            nextStep: 'alertaAccesoBD',
            note: 'Múltiples fallos de autenticación detectados, activando bloqueo de cuenta.'
          }
        ]
      },
      extraerDatos: {
        label: 'Extraer información sensible',
        rollType: 'medicion',
        outcomes: [
          {
            condition: result => Math.abs(result - 50) <= 10,
            nextStep: 'finExitoSigiloso',
            note: 'Extracción completada sin activar alarmas de transferencia de datos.'
          },
          {
            condition: result => result >= 65,
            nextStep: 'finExitoRapido',
            note: 'Extracción rápida completada, posible activación de umbral de volumen.'
          },
          {
            condition: result => result < 35,
            nextStep: 'finExitoRiesgoso',
            note: 'Extracción completada pero activó alertas de exfiltración de datos.'
          }
        ]
      },
      // Terminal states for hacker scenarios
      finExitoSigiloso: {
        label: 'Operación completada - Acceso Sigiloso',
        isTerminal: true,
        note: 'Objetivo cumplido sin detección, persistencia establecida para acceso futuro.'
      },
      finExitoRapido: {
        label: 'Operación completada - Acceso Rápido',
        isTerminal: true,
        note: 'Objetivo cumplido con posible detección tardía, ventana de respuesta reducida.'
      },
      finExitoRiesgoso: {
        label: 'Operación completada - Acceso Riesgoso',
        isTerminal: true,
        note: 'Objetivo cumplido pero detección inmediata, contramedidas activas en progreso.'
      },
      alarmaIntrusion: {
        label: 'Detección inicial de intrusión',
        rollType: null, // Estado narrativo, no requiere tirada
        outcomes: [
          {
            condition: () => true,
            nextStep: 'finFalloDetectado',
            note: 'Intento de intrusión bloqueado en perímetro externo.'
          }
        ]
      },
      finFalloDetectado: {
        label: 'Operación fallida - Detectado temprano',
        isTerminal: true,
        note: 'Intento de intrusión bloqueado por medidas de seguridad perimetrales.'
      }
    }
  }
}
