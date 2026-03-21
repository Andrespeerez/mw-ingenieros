import React, { useState } from 'react';

const Tooltip = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block"
         onMouseEnter={() => setIsVisible(true)}
         onMouseLeave={() => setIsVisible(false)}>
      {children}
      {isVisible && (
        <div className="absolute z-50 p-3 mt-2 text-xs text-green-400 bg-black border border-yellow-500 rounded shadow-lg w-72 max-h-64 overflow-y-auto">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
