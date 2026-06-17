"use client";

import React from 'react';

export default function ConstructoraDashboard() {
  return (
    <div style={{ padding: '40px', color: 'var(--capi-navy)' }}>
      <h1 style={{ color: 'var(--capi-navy)', marginBottom: '10px' }}>Panel de Constructora</h1>
      <p style={{ marginBottom: '30px', color: '#64748b' }}>Postula a Obras Mayores con planos aprobados.</p>
      
      <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
        <h2 style={{ marginBottom: '20px' }}>Obras Mayores Publicadas</h2>
        
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

      <div style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', padding: '20px', borderRadius: '10px', border: '1px solid #cbd5e1' }}>
        <h2 style={{ marginBottom: '10px', color: 'var(--capi-navy)' }}>✨ Capi IA (Premium) para Constructoras</h2>
        <p style={{ color: '#475569', marginBottom: '15px' }}>Analiza EETT y Planos PDF en segundos. Detecta interferencias y genera cubicaciones preliminares chateando con el proyecto.</p>
        <button className="btn-outline" style={{ background: 'white' }}>Analizar Proyecto con IA</button>
      </div>
    </div>
  );
}
