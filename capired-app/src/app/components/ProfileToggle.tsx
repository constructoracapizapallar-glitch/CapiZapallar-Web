"use client";

import React from 'react';

type ProfileToggleProps = {
  mode: 'proveedor' | 'cliente';
  setMode: (mode: 'proveedor' | 'cliente') => void;
  labelProveedor?: string;
  labelCliente?: string;
};

export default function ProfileToggle({ 
  mode, 
  setMode, 
  labelProveedor = "Modo Contratista", 
  labelCliente = "Modo Mandante" 
}: ProfileToggleProps) {
  
  return (
    <div style={{ 
      display: 'inline-flex', 
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      border: '1px solid var(--capi-border)',
      borderRadius: '30px',
      padding: '5px',
      gap: '5px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
    }}>
      <button 
        onClick={() => setMode('proveedor')}
        style={{
          background: mode === 'proveedor' ? 'var(--capi-navy)' : 'transparent',
          color: mode === 'proveedor' ? 'white' : 'var(--capi-navy)',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '25px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          fontSize: '0.9rem'
        }}
      >
        {labelProveedor}
      </button>
      <button 
        onClick={() => setMode('cliente')}
        style={{
          background: mode === 'cliente' ? 'var(--capi-navy)' : 'transparent',
          color: mode === 'cliente' ? 'white' : 'var(--capi-navy)',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '25px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          fontSize: '0.9rem'
        }}
      >
        {labelCliente}
      </button>
    </div>
  );
}
