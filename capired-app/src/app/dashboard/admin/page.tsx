"use client";

import React from 'react';

export default function AdminDashboard() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px', minHeight: '80vh', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* SIDEBAR IZQUIERDO */}
      <div style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Header Admin */}
        <div style={{ background: 'var(--capi-navy)', borderRadius: '20px', padding: '25px', color: 'white', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.2)' }}>
          <h1 style={{ fontSize: '1.8rem', margin: '0 0 10px 0' }}>Comando Capi</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>Centro de Administración Global de la Red.</p>
        </div>

        {/* Acciones Rápidas */}
        <div style={{ background: 'white', border: '1px solid var(--capi-border)', borderRadius: '20px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          <div style={{ border: '1px solid #fef08a', background: '#fefce8', borderRadius: '12px', padding: '15px', cursor: 'pointer', transition: 'all 0.2s', position: 'relative' }}>
             <span style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#ef4444', color: 'white', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>5</span>
             <h3 style={{ margin: '0 0 5px 0', fontSize: '1rem', color: '#854d0e' }}>Validaciones KYC</h3>
             <p style={{ fontSize: '0.8rem', color: '#a16207', margin: 0 }}>Nuevos perfiles esperando revisión de antecedentes.</p>
          </div>

          <div style={{ border: '1px solid #bfdbfe', background: '#eff6ff', borderRadius: '12px', padding: '15px', cursor: 'pointer', transition: 'all 0.2s' }}>
             <h3 style={{ margin: '0 0 5px 0', fontSize: '1rem', color: '#1e40af' }}>Retiros de Dinero</h3>
             <p style={{ fontSize: '0.8rem', color: '#1d4ed8', margin: 0 }}>Autorizar pagos a Maestros (Garantía Capi).</p>
          </div>

        </div>
      </div>

      {/* ÁREA PRINCIPAL: COMISIONES Y KYC */}
      <div style={{ flex: '1', background: 'white', border: '1px solid var(--capi-border)', borderRadius: '20px', padding: '30px', display: 'flex', flexDirection: 'column' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--capi-navy)', margin: 0 }}>Métricas de la Red</h2>
        </div>

        {/* KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '15px', padding: '20px', background: '#f8fafc' }}>
            <p style={{ margin: '0 0 5px 0', color: '#64748b', fontSize: '0.9rem' }}>Usuarios Activos</p>
            <p style={{ margin: 0, fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--capi-navy)' }}>1,245</p>
          </div>
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '15px', padding: '20px', background: '#f8fafc' }}>
            <p style={{ margin: '0 0 5px 0', color: '#64748b', fontSize: '0.9rem' }}>Obras en Ejecución</p>
            <p style={{ margin: 0, fontSize: '2.5rem', fontWeight: 'bold', color: '#3b82f6' }}>12</p>
          </div>
          <div style={{ border: '1px solid #fef08a', borderRadius: '15px', padding: '20px', background: '#fefce8' }}>
            <p style={{ margin: '0 0 5px 0', color: '#a16207', fontSize: '0.9rem' }}>Comisiones Generadas</p>
            <p style={{ margin: 0, fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--capi-gold)' }}>$4.5M</p>
          </div>
        </div>

        {/* TABLA DE VALIDACIONES KYC */}
        <h3 style={{ margin: '0 0 15px 0', color: 'var(--capi-navy)', fontSize: '1.2rem' }}>Mesa de Control KYC (Know Your Customer)</h3>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                <th style={{ padding: '15px 10px', color: '#64748b', fontSize: '0.9rem' }}>Usuario</th>
                <th style={{ padding: '15px 10px', color: '#64748b', fontSize: '0.9rem' }}>Rol</th>
                <th style={{ padding: '15px 10px', color: '#64748b', fontSize: '0.9rem' }}>Documentos</th>
                <th style={{ padding: '15px 10px', color: '#64748b', fontSize: '0.9rem' }}>Estado</th>
                <th style={{ padding: '15px 10px', color: '#64748b', fontSize: '0.9rem' }}>Acción</th>
              </tr>
            </thead>
            <tbody>
              
              <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '15px 10px' }}>
                  <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--capi-navy)' }}>Pedro Martínez</p>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>pedro@gasfiter.cl</p>
                </td>
                <td style={{ padding: '15px 10px', color: '#64748b' }}>Maestro Especialista</td>
                <td style={{ padding: '15px 10px' }}>
                  <span style={{ fontSize: '0.8rem', background: '#e2e8f0', padding: '3px 8px', borderRadius: '10px', marginRight: '5px' }}>CI</span>
                  <span style={{ fontSize: '0.8rem', background: '#e2e8f0', padding: '3px 8px', borderRadius: '10px' }}>Certificado Antecedentes</span>
                </td>
                <td style={{ padding: '15px 10px' }}>
                  <span style={{ background: '#fef08a', color: '#854d0e', padding: '4px 8px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>PENDIENTE</span>
                </td>
                <td style={{ padding: '15px 10px' }}>
                  <button style={{ background: 'var(--capi-navy)', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 'bold' }}>Revisar</button>
                </td>
              </tr>

              <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '15px 10px' }}>
                  <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--capi-navy)' }}>Arquitectura S.A.</p>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>contacto@arqs.cl</p>
                </td>
                <td style={{ padding: '15px 10px', color: '#64748b' }}>Profesional</td>
                <td style={{ padding: '15px 10px' }}>
                  <span style={{ fontSize: '0.8rem', background: '#e2e8f0', padding: '3px 8px', borderRadius: '10px', marginRight: '5px' }}>Título Universitario</span>
                </td>
                <td style={{ padding: '15px 10px' }}>
                  <span style={{ background: '#fef08a', color: '#854d0e', padding: '4px 8px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>PENDIENTE</span>
                </td>
                <td style={{ padding: '15px 10px' }}>
                  <button style={{ background: 'var(--capi-navy)', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 'bold' }}>Revisar</button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}
