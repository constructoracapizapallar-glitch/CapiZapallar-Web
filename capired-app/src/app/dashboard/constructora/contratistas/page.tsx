"use client";

import React from 'react';
import { Users, Search, Star } from 'lucide-react';

export default function Contratistas() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '10px', borderBottom: '1px solid #E7E5E4' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#292524', margin: '0 0 4px 0', fontWeight: '800' }}>Directorio de Contratistas</h2>
          <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem' }}>Encuentra profesionales y maestros calificados para tus Obras Mayores.</p>
        </div>
      </div>

      <div style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
        <Users size={48} color="#A8A29E" style={{ marginBottom: '15px' }} />
        <h3 style={{ margin: '0 0 10px 0', color: '#292524' }}>Directorio B2B en construcción</h3>
        <p style={{ color: '#78716C', fontSize: '0.9rem' }}>Próximamente podrás buscar contratistas por especialidad y reputación.</p>
      </div>
    </div>
  );
}
