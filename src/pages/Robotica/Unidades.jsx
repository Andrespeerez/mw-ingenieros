import React, { useState } from 'react';
import Page from '../../components/Page';
import DroidCard from '../../components/DroidCard';
import DroidModal from '../../components/DroidModal';
import TerminalTabGroup from '../../components/TerminalTabGroup';
import { droids } from '../../data/droids';

export default function Unidades() {
  const [activeTab, setActiveTab] = useState('robotsCiviles');
  const [selectedDroid, setSelectedDroid] = useState(null);

  const tabs = [
    { id: 'robotsCiviles', label: 'ROBOTS CIVILES' },
    { id: 'robotsSeparatistas', label: 'ROBOTS SEPARATISTAS' }
  ];

  return (
    <Page title="UNIDADES ROBOTICAS">
      <div className="p-5 bg-panel border border-border mb-6">
        <TerminalTabGroup 
          tabs={tabs} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
          className="mb-6"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(droids[activeTab] || []).length > 0 ? (
            (droids[activeTab] || []).map(droid => (
              <DroidCard
                key={droid.id}
                droid={droid}
                onClick={setSelectedDroid}
              />
            ))
          ) : (
            <div className="col-span-full py-20 border border-dashed border-green-900 flex flex-col items-center justify-center opacity-50">
              <span className="text-green-500 text-lg mb-2">[!] SIN REGISTROS</span>
            </div>
          )}
        </div>
      </div>

      <DroidModal
        droid={selectedDroid}
        categoria={activeTab}
        onClose={() => setSelectedDroid(null)}
      />
    </Page>
  );
}


