import React, { useState } from 'react';

const Tooltip = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block"
         onMouseEnter={() => setIsVisible(true)}
         onMouseLeave={() => setIsVisible(false)}>
      {children}
      {isVisible && (
        <div className="absolute z-50 p-2 mt-2 text-sm text-green-500 bg-black border border-green-500 rounded shadow-lg w-64">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
