"use client";

import React from 'react';

export default function ConstructoraDashboard() {
  return (
    <div style={{ padding: '40px', color: 'var(--capi-navy)' }}>
      <h1 style={{ color: 'var(--capi-navy)', marginBottom: '10px' }}>Panel de Constructora</h1>
      <p style={{ marginBottom: '30px', color: '#64748b' }}>Postula a licitaciones de obras mayores con planos aprobados.</p>
      
      <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <h2 style={{ marginBottom: '20px' }}>Licitaciones de Construcción</h2>
        
        <div style={{ padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px', marginBottom: '10px' }}>
          <h3>Construcción Llave en Mano - Casa 120m2</h3>
          <p style={{ color: '#64748b' }}>Ubicación: Cachagua • Planos y Cálculo: Aprobados</p>
          <div style={{ marginTop: '10px' }}>
            <span style={{ display: 'inline-block', background: '#f8fafc', border: '1px solid #e2e8f0', padding: '10px', borderRadius: '5px', fontSize: '0.9rem' }}>
              📁 Descargar Set de Planos y EETT (PDF/DWG)
            </span>
          </div>
          <button className="btn-primary" style={{ marginTop: '15px' }}>Enviar Propuesta Económica</button>
        </div>
      </div>
    </div>
  );
}
