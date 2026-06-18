"use client";

import React, { useState } from 'react';
import { Star, MessageSquare, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';

export default function FerreteriaReputacion() {
  const [activeTab, setActiveTab] = useState('notas');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '10px', borderBottom: '1px solid #E7E5E4' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#292524', margin: '0 0 4px 0', fontWeight: '800' }}>Reputación y Notas</h2>
          <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem' }}>Monitorea tus evaluaciones de despachos B2B.</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
        <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '12px', border: '1px solid #E7E5E4' }}>
          <p style={{ margin: '0 0 5px 0', color: '#78716C', fontSize: '0.85rem', fontWeight: '600' }}>Nota Promedio</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h3 style={{ margin: 0, fontSize: '2rem', color: '#292524' }}>4.8</h3>
            <Star color="#F59E0B" fill="#F59E0B" size={24} />
          </div>
          <p style={{ margin: '5px 0 0 0', color: '#10B981', fontSize: '0.75rem', fontWeight: '600' }}>+0.2 este mes</p>
        </div>
        
        <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '12px', border: '1px solid #E7E5E4' }}>
          <p style={{ margin: '0 0 5px 0', color: '#78716C', fontSize: '0.85rem', fontWeight: '600' }}>Despachos A Tiempo</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h3 style={{ margin: 0, fontSize: '2rem', color: '#292524' }}>92%</h3>
            <CheckCircle color="#10B981" size={24} />
          </div>
        </div>

        <div style={{ background: '#FEF2F2', padding: '20px', borderRadius: '12px', border: '1px solid #FECACA' }}>
          <p style={{ margin: '0 0 5px 0', color: '#991B1B', fontSize: '0.85rem', fontWeight: '600' }}>Reclamos Activos</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h3 style={{ margin: 0, fontSize: '2rem', color: '#991B1B' }}>1</h3>
            <AlertTriangle color="#DC2626" size={24} />
          </div>
          <p style={{ margin: '5px 0 0 0', color: '#DC2626', fontSize: '0.75rem', fontWeight: '600' }}>Requiere tu atención</p>
        </div>
      </div>

      <div style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #E7E5E4', display: 'flex', gap: '20px' }}>
          <button onClick={() => setActiveTab('notas')} style={{ background: 'none', border: 'none', padding: '5px 0', fontSize: '0.9rem', fontWeight: '600', color: activeTab === 'notas' ? '#292524' : '#A8A29E', borderBottom: activeTab === 'notas' ? '2px solid #292524' : '2px solid transparent', cursor: 'pointer' }}>Calificaciones</button>
          <button onClick={() => setActiveTab('reclamos')} style={{ background: 'none', border: 'none', padding: '5px 0', fontSize: '0.9rem', fontWeight: '600', color: activeTab === 'reclamos' ? '#991B1B' : '#A8A29E', borderBottom: activeTab === 'reclamos' ? '2px solid #991B1B' : '2px solid transparent', cursor: 'pointer' }}>Reclamos</button>
        </div>

        <div style={{ padding: '20px' }}>
          {activeTab === 'notas' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ padding: '15px', background: '#F5F5F4', borderRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} color="#F59E0B" fill="#F59E0B" />)}
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#78716C' }}>Hace 2 días</span>
                </div>
                <p style={{ margin: '0 0 8px 0', fontSize: '0.9rem', color: '#292524', fontWeight: '600' }}>"Material excelente y llegó directo a la Obra Mayor a la hora acordada."</p>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#78716C' }}>- Constructora Los Alerces</p>
              </div>

              <div style={{ padding: '15px', background: '#F5F5F4', borderRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {[1,2,3,4].map(i => <Star key={i} size={16} color="#F59E0B" fill="#F59E0B" />)}
                    <Star size={16} color="#D6D3D1" fill="#D6D3D1" />
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#78716C' }}>Hace 1 semana</span>
                </div>
                <p style={{ margin: '0 0 8px 0', fontSize: '0.9rem', color: '#292524', fontWeight: '600' }}>"Todo bien, pero el chofer no encontraba la entrada de la obra."</p>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#78716C' }}>- Maestro Juan Pérez</p>
              </div>
            </div>
          )}

          {activeTab === 'reclamos' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ padding: '15px', background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ background: '#DC2626', color: '#FFF', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: '700' }}>DESPACHO LENTO</span>
                  <span style={{ fontSize: '0.8rem', color: '#991B1B' }}>Hoy</span>
                </div>
                <p style={{ margin: '0 0 8px 0', fontSize: '0.9rem', color: '#991B1B', fontWeight: '600' }}>"El pedido de cemento tenía que llegar a las 08:00 AM y llegó a las 14:00 PM. Tuvimos a la cuadrilla parada medio día."</p>
                <p style={{ margin: '0 0 10px 0', fontSize: '0.8rem', color: '#991B1B' }}>- Constructora B2B Zapallar (Obra ID: #A192B)</p>
                <button style={{ background: '#991B1B', color: '#FFF', border: 'none', padding: '6px 12px', borderRadius: '4px', fontSize: '0.8rem', cursor: 'pointer' }}>Responder y Gestionar</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
