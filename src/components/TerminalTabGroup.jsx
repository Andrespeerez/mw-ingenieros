import React, { useRef } from 'react';
import TerminalButton from './TerminalButton';

export default function TerminalTabGroup({ tabs, activeTab, onTabChange, className = "" }) {
  const containerRef = useRef(null);

  const handleKeyDown = (e) => {
    const currentIndex = tabs.findIndex(t => t.id === activeTab);
    if (e.key === 'ArrowRight') {
      const nextIndex = (currentIndex + 1) % tabs.length;
      onTabChange(tabs[nextIndex].id);
    } else if (e.key === 'ArrowLeft') {
      const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      onTabChange(tabs[prevIndex].id);
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`flex flex-wrap gap-2 ${className}`}
      onKeyDown={handleKeyDown}
      role="tablist"
    >
      {tabs.map(tab => (
        <TerminalButton
          key={tab.id}
          active={activeTab === tab.id}
          onClick={() => onTabChange(tab.id)}
          ariaLabel={`Pestaña ${tab.label}`}
        >
          {tab.label}
        </TerminalButton>
      ))}
    </div>
  );
}
