import React from 'react';

export default function CrtOverlay() {
  return (
    <>
      <div className="crt-overlay" />
      <div className="fixed inset-0 pointer-events-none z-[10000] opacity-[0.03] bg-gradient-to-b from-transparent via-green-500/20 to-transparent mix-blend-screen" />
    </>
  );
}
