"use client";

import React, { useState, useEffect } from 'react';

export default function AdminDashboard() {
  return (
    <div style={{ padding: '40px', color: 'var(--capi-navy)' }}>
      <h1 style={{ color: 'var(--capi-navy)', marginBottom: '10px' }}>Portal de Comandante (Administración Capi Red)</h1>
      <p style={{ marginBottom: '30px', color: '#64748b' }}>Vista global de toda la plataforma, usuarios y comisiones.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#64748b', fontSize: '0.9rem' }}>Usuarios Activos</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--capi-navy)' }}>1,245</p>
        </div>
        <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#64748b', fontSize: '0.9rem' }}>Comisiones Generadas (10%)</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--capi-gold)' }}>$4.5M</p>
        </div>
        <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#64748b', fontSize: '0.9rem' }}>Obras Mayores Activas</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--capi-navy)' }}>12</p>
        </div>
      </div>

      <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <h2>Gestión de Validaciones (KYC)</h2>
        <p style={{ color: '#64748b', marginBottom: '20px' }}>Maestros y profesionales esperando aprobación de antecedentes.</p>
        
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
              <th style={{ padding: '10px' }}>Usuario</th>
              <th style={{ padding: '10px' }}>Rol</th>
              <th style={{ padding: '10px' }}>Estado</th>
              <th style={{ padding: '10px' }}>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: '10px' }}>maestro@capired.cl</td>
              <td style={{ padding: '10px' }}>Maestro</td>
              <td style={{ padding: '10px' }}><span style={{ background: '#fef08a', color: '#854d0e', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>PENDIENTE</span></td>
              <td style={{ padding: '10px' }}>
                <button className="btn-primary" style={{ padding: '5px 10px', fontSize: '0.8rem', marginRight: '5px' }}>Revisar Docs</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
