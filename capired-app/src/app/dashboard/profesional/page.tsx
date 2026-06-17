"use client";

import React from 'react';

export default function ProfesionalDashboard() {
  return (
    <div style={{ padding: '40px', color: 'var(--capi-navy)' }}>
      <h1 style={{ color: 'var(--capi-navy)', marginBottom: '10px' }}>Panel de Profesionales (Arquitectos e Ingenieros)</h1>
      <p style={{ marginBottom: '30px', color: '#64748b' }}>Postula a Obras Mayores para diseño y cálculo estructural.</p>
      
      <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
        <h2 style={{ marginBottom: '20px' }}>Obras Mayores Publicadas</h2>
        
        <div style={{ padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px', marginBottom: '10px' }}>
          <h3>Diseño y Cálculo para Ampliación de 40m2</h3>
          <p style={{ color: '#64748b' }}>Ubicación: Zapallar • Cliente: Familia Gómez</p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <span style={{ background: 'rgba(212, 175, 55, 0.1)', color: 'var(--capi-gold)', padding: '5px 10px', borderRadius: '5px', fontSize: '0.9rem', fontWeight: 'bold' }}>Se busca Arquitecto</span>
            <span style={{ background: 'rgba(212, 175, 55, 0.1)', color: 'var(--capi-gold)', padding: '5px 10px', borderRadius: '5px', fontSize: '0.9rem', fontWeight: 'bold' }}>Se busca Calculista</span>
          </div>
          <button className="btn-primary" style={{ marginTop: '15px' }}>Presentar Propuesta Técnica</button>
        </div>
      </div>

      <div style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', padding: '20px', borderRadius: '10px', border: '1px solid #cbd5e1' }}>
        <h2 style={{ marginBottom: '10px', color: 'var(--capi-navy)' }}>✨ Capi IA (Premium) para Profesionales</h2>
        <p style={{ color: '#475569', marginBottom: '15px' }}>Sube archivos PDF de arquitectura y chatea directamente con los planos. Acelera tus cubicaciones y análisis normativos.</p>
        <button className="btn-outline" style={{ background: 'white' }}>Probar Capi IA con PDFs</button>
      </div>
    </div>
  );
}
