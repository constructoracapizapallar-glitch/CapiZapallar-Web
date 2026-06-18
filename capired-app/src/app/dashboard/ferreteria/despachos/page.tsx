"use client";

import React, { useState } from 'react';
import { Truck, MapPin, CheckCircle, Clock, Search, Filter } from 'lucide-react';

export default function FerreteriaDespachos() {
  const [activeTab, setActiveTab] = useState('pendientes');

  // Datos de ejemplo para despachos
  const despachos = [
    { id: 'DSP-001', obra: 'Edificio Los Alerces', direccion: 'Av. Costanera 450, Zapallar', estado: 'Pendiente', materiales: 12, total: '$450.000' },
    { id: 'DSP-002', obra: 'Condominio La Bahía', direccion: 'Ruta F-30E Km 2, Cachagua', estado: 'En Ruta', materiales: 5, total: '$125.000' },
    { id: 'DSP-003', obra: 'Casa Particular Familia Silva', direccion: 'Sector El Blanquillo S/N', estado: 'Entregado', materiales: 24, total: '$1.200.000' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '10px' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#292524', margin: '0 0 4px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>Logística y Despachos</h2>
          <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem' }}>Administra los envíos de materiales a Obras Mayores.</p>
        </div>
      </div>

      {/* CONTROLS */}
      <div style={{ display: 'flex', gap: '15px' }}>
        <div style={{ flex: 1, background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '8px', padding: '10px 15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Search size={18} color="#A8A29E" />
          <input type="text" placeholder="Buscar por ID, obra o dirección..." style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.9rem', color: '#292524' }} />
        </div>
        <button style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', padding: '10px 15px', borderRadius: '8px', color: '#292524', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>
          <Filter size={16} /> Filtros
        </button>
      </div>

      {/* TABS */}
      <div style={{ display: 'flex', gap: '10px', borderBottom: '1px solid #E7E5E4', paddingBottom: '10px' }}>
        <button onClick={() => setActiveTab('pendientes')} style={{ background: activeTab === 'pendientes' ? '#292524' : 'transparent', color: activeTab === 'pendientes' ? '#FFFFFF' : '#78716C', border: 'none', padding: '8px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s' }}>
          Pendientes (1)
        </button>
        <button onClick={() => setActiveTab('en_ruta')} style={{ background: activeTab === 'en_ruta' ? '#292524' : 'transparent', color: activeTab === 'en_ruta' ? '#FFFFFF' : '#78716C', border: 'none', padding: '8px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s' }}>
          En Ruta (1)
        </button>
        <button onClick={() => setActiveTab('entregados')} style={{ background: activeTab === 'entregados' ? '#292524' : 'transparent', color: activeTab === 'entregados' ? '#FFFFFF' : '#78716C', border: 'none', padding: '8px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s' }}>
          Entregados
        </button>
      </div>

      {/* LISTA DE DESPACHOS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {despachos.map((despacho) => (
          <div key={despacho.id} style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ width: '48px', height: '48px', background: '#F5F5F4', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#292524' }}>
                <Truck size={24} />
              </div>
              <div>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '1.1rem', color: '#292524', fontWeight: '700' }}>{despacho.obra}</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#78716C', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={14} /> {despacho.direccion}
                </p>
                <div style={{ display: 'flex', gap: '15px', marginTop: '8px' }}>
                  <span style={{ fontSize: '0.8rem', color: '#A8A29E', fontWeight: '600' }}>ID: {despacho.id}</span>
                  <span style={{ fontSize: '0.8rem', color: '#A8A29E', fontWeight: '600' }}>{despacho.materiales} items</span>
                </div>
              </div>
            </div>
            
            <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
              <span style={{ fontSize: '1.1rem', fontWeight: '800', color: '#10B981' }}>{despacho.total}</span>
              <button style={{ background: '#292524', color: '#FFF', border: 'none', padding: '8px 16px', borderRadius: '6px', fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer' }}>
                Ver Detalle
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
