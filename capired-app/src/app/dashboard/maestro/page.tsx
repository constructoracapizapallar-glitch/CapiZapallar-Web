"use client";

import React from 'react';
import RadarObras from '../../components/RadarObras';
import { Target, MapPin, Search } from 'lucide-react';

export default function MaestroDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '10px' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', color: '#0F172A', margin: '0 0 8px 0', fontWeight: '800', letterSpacing: '-1px' }}>Encontrar Trabajo</h2>
          <p style={{ margin: 0, color: '#64748B', fontSize: '1rem' }}>Postula a trabajos locales y expande tu red de clientes.</p>
        </div>
        <button style={{ 
          background: '#0F172A', 
          color: '#FFFFFF', 
          border: 'none', 
          padding: '12px 24px', 
          borderRadius: '10px', 
          fontWeight: '600', 
          cursor: 'pointer', 
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.2s',
          boxShadow: '0 4px 15px rgba(15, 23, 42, 0.2)'
        }}>
          <Target size={18} /> Activar Radar
        </button>
      </div>

      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <div style={{ 
          flex: 1, 
          background: '#FFFFFF', 
          border: '1px solid #E2E8F0', 
          borderRadius: '10px', 
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <Search size={20} color="#94A3B8" />
          <input 
            type="text" 
            placeholder="Buscar por especialidad o comuna..." 
            style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.95rem', color: '#0F172A' }} 
          />
        </div>
        <div style={{
          background: '#F1F5F9',
          border: '1px solid #E2E8F0',
          padding: '12px 20px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#475569',
          fontWeight: '600',
        }}>
          <MapPin size={18} /> Zapallar +15km
        </div>
      </div>

      {/* RADAR DE OBRAS COMPONENTE */}
      <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)', border: '1px solid #E2E8F0' }}>
        <RadarObras />
      </div>

    </div>
  );
}
