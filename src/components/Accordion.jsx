import React, { useState } from 'react';

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-border mb-2">
      <button
        className="w-full text-left p-2 bg-panel text-green-500 font-bold flex justify-between hover:bg-black/20"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="text-yellow-400">{isOpen ? '[-]' : '[+]'}</span>
      </button>
      {isOpen && <div className="p-3 border-t border-border bg-black/50">{children}</div>}
    </div>
  );
}
