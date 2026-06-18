"use client";

import React from 'react';
import RadarObras from '../../components/RadarObras';

export default function MaestroDashboard() {
  return (
    <div style={{ display: 'flex', gap: '30px', padding: '30px', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* SIDEBAR IZQUIERDO */}
      <div style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Header Maestro */}
        <div style={{ background: 'var(--capi-navy)', borderRadius: '24px', padding: '30px', color: 'white', boxShadow: 'var(--capi-shadow)' }}>
          <h1 style={{ fontSize: '2rem', margin: '0 0 5px 0', fontWeight: '300', letterSpacing: '-0.5px' }}>Comando</h1>
          <p style={{ color: '#A0AEC0', fontSize: '0.85rem', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>Maestro Especialista</p>
        </div>

        {/* Acciones Rápidas / Menú */}
        <div style={{ background: 'var(--capi-white)', borderRadius: '24px', padding: '25px', display: 'flex', flexDirection: 'column', gap: '10px', boxShadow: 'var(--capi-shadow)' }}>
          
          <h3 style={{ fontSize: '0.8rem', color: '#A0AEC0', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Herramientas Capi</h3>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', background: '#F7FAFC', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s', border: '1px solid var(--capi-border)' }}>
             <span style={{ fontSize: '1.2rem' }}>📡</span>
             <div>
               <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--capi-navy)' }}>Radar de Obras</h4>
               <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--capi-text)' }}>Trabajos cerca de ti</p>
             </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>
             <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>💳</span>
             <div>
               <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--capi-text)' }}>Billetera</h4>
               <p style={{ margin: 0, fontSize: '0.75rem', color: '#A0AEC0' }}>Retirar ganancias</p>
             </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>
             <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>🛒</span>
             <div>
               <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--capi-text)' }}>Ferretería</h4>
               <p style={{ margin: 0, fontSize: '0.75rem', color: '#A0AEC0' }}>Materiales con dto.</p>
             </div>
          </div>

        </div>
      </div>

      {/* ÁREA PRINCIPAL: RADAR */}
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--capi-navy)', margin: '0 0 5px 0', fontWeight: '300', letterSpacing: '-1px' }}>Encontrar Trabajo</h2>
            <p style={{ margin: 0, color: 'var(--capi-text)' }}>Postula a trabajos locales y expande tu red de clientes.</p>
          </div>
        </div>

        {/* RADAR DE OBRAS COMPONENTE */}
        <div style={{ background: 'var(--capi-white)', borderRadius: '24px', padding: '40px', boxShadow: 'var(--capi-shadow)', flex: 1 }}>
          <RadarObras />
        </div>

      </div>

    </div>
  );
}
