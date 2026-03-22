import React from 'react';
import Page from '../../components/Page';

const ComponentCard = ({ title, children }) => (
  <div className="bg-green-900/10 p-3 border border-green-600/30 hover:bg-green-900/20 transition-colors">
    <h4 className="text-green-500 font-bold text-sm mb-1 uppercase tracking-wider">{title}</h4>
    <div className="text-xs text-green-700">{children}</div>
  </div>
);

export default function ManualComponentes() {
  return (
    <Page title="MANUAL: COMPONENTES CLAVES (TECNICO)">
      <div className="text-green-500 font-mono p-5 bg-panel border border-border space-y-8">
        
        {/* Intro */}
        <section>
          <h2 className="text-2xl font-bold border-b border-green-800 pb-2 mb-4 text-green-400">0. INTRODUCCIÓN</h2>
          <p className="text-sm leading-relaxed text-green-300">
            Este manual sirve como referencia técnica para los diferentes sistemas y componentes que se encuentran comúnmente en naves y vehículos operados por el ejército de la República. Su propósito principal es proporcionar una base de conocimiento a los operadores e ingenieros para que puedan comprender el funcionamiento de los sistemas principales de propulsión, armamento, defensa, soporte vital, y demás subsistemas fundamentales para un vehículo y una nave.
          </p>
        </section>

        {/* Propulsión */}
        <section>
          <h2 className="text-2xl font-bold border-b border-green-800 pb-2 mb-4 text-green-400">1. PROPULSIÓN</h2>
          <p className="text-sm text-green-300 mb-4">Las naves emplean diversas tecnologías para lograr movimiento a través del vacío del espacio y en las atmósferas planetarias. La combinación específica de sistemas de propulsión varía según el diseño y el rol del vehículo.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ComponentCard title="Repulsores Antigravedad">
              Anulan campo gravitatorio mediante generador de fusión. Permiten flotar, despegar o aterrizar.
            </ComponentCard>
            <ComponentCard title="Motores de Iones">
              Propulsión subluz estándar. Reactor de fusión expulsa partículas cargadas. Empuje constante y eficiente.
            </ComponentCard>
            <ComponentCard title="Hiperimpulsor">
              Permite viaje FTL. Requiere Ordenador de Navegación y Reactor de Salto alimentado por Coaxium.
            </ComponentCard>
          </div>
        </section>

        {/* Escudos */}
        <section>
          <h2 className="text-2xl font-bold border-b border-green-800 pb-2 mb-4 text-green-400">2. ESCUDOS DEFLECTORES</h2>
          <p className="text-sm text-green-300 mb-4">La capa principal de defensa. Campos de energía configurados para desviar o absorber impactos antes de alcanzar el casco.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ComponentCard title="Escudos de Rayos">Efectivos contra energía (bláster, láser, iones).</ComponentCard>
            <ComponentCard title="Escudos de Partículas">Efectivos contra objetos cinéticos (misiles, proyectiles).</ComponentCard>
            <ComponentCard title="Generador de Escudos">Corazón del sistema. Varía en tamaño según la nave.</ComponentCard>
            <ComponentCard title="Condensadores Energía">Almacenan energía para recarga rápida tras impactos.</ComponentCard>
          </div>
        </section>

        {/* Armamento */}
        <section>
          <h2 className="text-2xl font-bold border-b border-green-800 pb-2 mb-4 text-green-400">3. ARMAMENTO</h2>
          <p className="text-sm text-green-300 mb-4">Dividido en armas de energía proyectada (plasma) y armas de proyectiles físicos (balísticos/guiados).</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ComponentCard title="Armas de Energía">Blásters, Cañones Láser, Turboláseres, Cañones de Iones.</ComponentCard>
            <ComponentCard title="Armas Físicas">Protones Torpedo, Misiles, Bombas, Cañones de Masa.</ComponentCard>
            <ComponentCard title="Montajes">Fijos, Gimballs, Torretas.</ComponentCard>
          </div>
        </section>

        {/* Soporte Vital */}
        <section>
          <h2 className="text-2xl font-bold border-b border-green-800 pb-2 mb-4 text-green-400">4. SOPORTE VITAL</h2>
          <p className="text-sm text-green-300 mb-4">Fundamentales para la habitabilidad. Requieren suministro constante del reactor principal.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ComponentCard title="Proc. Atmosféricos">Reciclan aire respirable.</ComponentCard>
            <ComponentCard title="Control Ambiental">Regulan temp, presión y humedad.</ComponentCard>
            <ComponentCard title="Gravedad Artificial">Simulan gravedad planetaria.</ComponentCard>
          </div>
        </section>

        {/* Sensores/Coms */}
        <section>
          <h2 className="text-2xl font-bold border-b border-green-800 pb-2 mb-4 text-green-400">5. SENSORES Y COMUNICACIONES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ComponentCard title="Sensores Activos/Pasivos">
              Activos (radar) vs Pasivos (firma térmica/emisiones).
            </ComponentCard>
            <ComponentCard title="Comunicaciones">
              Comlinks, Subespaciales, Hipertransmisores.
            </ComponentCard>
          </div>
        </section>

        {/* Estructura */}
        <section>
          <h2 className="text-2xl font-bold border-b border-green-800 pb-2 mb-4 text-green-400">6. ESTRUCTURA Y CASCO</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ComponentCard title="Estructura">Esqueleto de la nave (vigas, tensores).</ComponentCard>
            <ComponentCard title="Casco">Capa estanca de aleaciones (duracero/titanio).</ComponentCard>
            <ComponentCard title="Blindaje">Capas reforzadas adicionales para puntos vitales.</ComponentCard>
          </div>
        </section>

      </div>
    </Page>
  );
}
