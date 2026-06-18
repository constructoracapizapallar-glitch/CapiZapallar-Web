"use client";

import React from 'react';
import { Camera, Zap } from 'lucide-react';

export default function ClienteVision() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '10px', borderBottom: '1px solid #E7E5E4' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#292524', margin: '0 0 4px 0', fontWeight: '800' }}>Capi IA Visión</h2>
          <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem' }}>Diagnóstico de fallas con Inteligencia Artificial.</p>
        </div>
      </div>

      <div style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
        <Camera size={48} color="#A8A29E" style={{ marginBottom: '15px' }} />
        <h3 style={{ margin: '0 0 10px 0', color: '#292524' }}>Módulo IA en entrenamiento</h3>
        <p style={{ color: '#78716C', fontSize: '0.9rem' }}>Sube una foto de una falla (ej. gotera, muro roto) y la IA estimará el costo de reparación y llamará al maestro indicado.</p>
      </div>
    </div>
  );
}
