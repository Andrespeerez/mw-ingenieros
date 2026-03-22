import React, { useState } from 'react';

const Tooltip = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span className="relative inline-block"
         onMouseEnter={() => setIsVisible(true)}
         onMouseLeave={() => setIsVisible(false)}>
      {children}
      {isVisible && (
        <div className="absolute z-50 p-3 text-xs text-green-400 bg-black border border-yellow-500 rounded shadow-lg w-96 overflow-y-auto">
          {content}
        </div>
      )}
    </span>
  );
};

export default Tooltip;
