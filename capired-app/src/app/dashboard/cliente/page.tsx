"use client";

import React from 'react';

export default function ClienteDashboard() {
  return (
    <div style={{ padding: '40px', color: 'var(--capi-navy)' }}>
      <h1 style={{ color: 'var(--capi-navy)', marginBottom: '10px' }}>Panel del Cliente</h1>
      <p style={{ marginBottom: '30px', color: '#64748b' }}>Gestiona tus proyectos, cotizaciones y garantías.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
          <h2>Nueva Cotización (Pololito)</h2>
          <p style={{ marginTop: '10px', color: '#64748b' }}>Sube un video del problema y nuestra IA cotizará el trabajo al instante.</p>
          <button className="btn-primary" style={{ marginTop: '15px' }}>Subir Video IA</button>
        </div>

        <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
          <h2>Obras Mayores</h2>
          <p style={{ marginTop: '10px', color: '#64748b' }}>Sube tus planos o licita el diseño a nuestra red de Arquitectos y Constructoras.</p>
          <button className="btn-outline" style={{ marginTop: '15px' }}>Iniciar Proyecto Mayor</button>
        </div>
      </div>
    </div>
  );
}
