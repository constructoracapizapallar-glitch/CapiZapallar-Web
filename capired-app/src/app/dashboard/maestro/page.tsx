"use client";

import React from 'react';
import RadarObras from '../../components/RadarObras';
import { Target, MapPin, Search } from 'lucide-react';

export default function MaestroDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#0F172A', margin: '0 0 4px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>Encontrar Trabajo</h2>
          <p style={{ margin: 0, color: '#64748B', fontSize: '0.85rem' }}>Postula a trabajos locales y expande tu red de clientes.</p>
        </div>
        <button style={{ 
          background: '#0F172A', 
          color: '#D4AF37', 
          border: '1px solid #0F172A', 
          padding: '8px 16px', 
          borderRadius: '6px', 
          fontWeight: '600', 
          fontSize: '0.85rem',
          cursor: 'pointer', 
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          transition: 'all 0.2s',
        }}>
          <Target size={16} /> Activar Radar
        </button>
      </div>

      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <div style={{ 
          flex: 1, 
          background: '#FFFFFF', 
          border: '1px solid #E2E8F0', 
          borderRadius: '6px', 
          padding: '8px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Search size={16} color="#94A3B8" />
          <input 
            type="text" 
            placeholder="Buscar por especialidad o comuna..." 
            style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.85rem', color: '#0F172A' }} 
          />
        </div>
        <div style={{
          background: '#F8FAFC',
          border: '1px solid #E2E8F0',
          padding: '8px 16px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: '#0F172A',
          fontSize: '0.85rem',
          fontWeight: '600',
        }}>
          <MapPin size={16} color="#D4AF37" /> Zapallar +15km
        </div>
      </div>

      {/* RADAR DE OBRAS COMPONENTE */}
      <div style={{ background: '#FFFFFF', borderRadius: '8px', padding: '24px', border: '1px solid #E2E8F0' }}>
        <RadarObras />
      </div>

    </div>
  );
}
