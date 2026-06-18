"use client";

import React from 'react';

export default function AdminDashboard() {
  return (
    <div style={{ display: 'flex', gap: '30px', padding: '30px', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* SIDEBAR IZQUIERDO */}
      <div style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Header Admin */}
        <div style={{ background: 'var(--capi-navy)', borderRadius: '24px', padding: '30px', color: 'white', boxShadow: 'var(--capi-shadow)' }}>
          <h1 style={{ fontSize: '2rem', margin: '0 0 5px 0', fontWeight: '300', letterSpacing: '-0.5px' }}>Comandante</h1>
          <p style={{ color: '#A0AEC0', fontSize: '0.85rem', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>Global Admin</p>
        </div>

        {/* Acciones Rápidas / Menú */}
        <div style={{ background: 'var(--capi-white)', borderRadius: '24px', padding: '25px', display: 'flex', flexDirection: 'column', gap: '10px', boxShadow: 'var(--capi-shadow)' }}>
          
          <h3 style={{ fontSize: '0.8rem', color: '#A0AEC0', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Control de Flujo</h3>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', background: '#F7FAFC', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s', border: '1px solid var(--capi-border)', position: 'relative' }}>
             <span style={{ position: 'absolute', top: '-5px', right: '-5px', background: '#E53E3E', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 'bold' }}>5</span>
             <span style={{ fontSize: '1.2rem' }}>🛡️</span>
             <div>
               <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--capi-navy)' }}>Validaciones KYC</h4>
               <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--capi-text)' }}>Revisar antecedentes</p>
             </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>
             <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>💸</span>
             <div>
               <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--capi-text)' }}>Retiros de Dinero</h4>
               <p style={{ margin: 0, fontSize: '0.75rem', color: '#A0AEC0' }}>Pagos a usuarios</p>
             </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>
             <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>📈</span>
             <div>
               <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--capi-text)' }}>Reportes</h4>
               <p style={{ margin: 0, fontSize: '0.75rem', color: '#A0AEC0' }}>Métricas financieras</p>
             </div>
          </div>

        </div>
      </div>

      {/* ÁREA PRINCIPAL: COMISIONES Y KYC (Estilo Escandinavo) */}
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--capi-navy)', margin: '0 0 5px 0', fontWeight: '300', letterSpacing: '-1px' }}>Métricas Globales</h2>
            <p style={{ margin: 0, color: 'var(--capi-text)' }}>Salud y crecimiento de la plataforma Capi Red.</p>
          </div>
        </div>

        {/* KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          <div style={{ background: 'var(--capi-white)', borderRadius: '24px', padding: '25px', boxShadow: 'var(--capi-shadow)' }}>
            <p style={{ margin: '0 0 10px 0', color: '#A0AEC0', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Usuarios Activos</p>
            <p style={{ margin: 0, fontSize: '2.5rem', fontWeight: '300', color: 'var(--capi-navy)' }}>1,245</p>
          </div>
          <div style={{ background: 'var(--capi-white)', borderRadius: '24px', padding: '25px', boxShadow: 'var(--capi-shadow)' }}>
            <p style={{ margin: '0 0 10px 0', color: '#A0AEC0', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Obras en Ejecución</p>
            <p style={{ margin: 0, fontSize: '2.5rem', fontWeight: '300', color: 'var(--capi-navy)' }}>12</p>
          </div>
          <div style={{ background: 'var(--capi-white)', borderRadius: '24px', padding: '25px', boxShadow: 'var(--capi-shadow)' }}>
            <p style={{ margin: '0 0 10px 0', color: '#A0AEC0', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Comisiones Generadas</p>
            <p style={{ margin: 0, fontSize: '2.5rem', fontWeight: '300', color: 'var(--capi-gold)' }}>$4.5<span style={{ fontSize: '1.2rem', color: '#A0AEC0' }}>M</span></p>
          </div>
        </div>

        {/* TABLA DE VALIDACIONES KYC (Elegante) */}
        <div style={{ background: 'var(--capi-white)', borderRadius: '24px', padding: '30px', boxShadow: 'var(--capi-shadow)', flex: 1 }}>
          <h3 style={{ margin: '0 0 25px 0', color: 'var(--capi-navy)', fontSize: '1.2rem', fontWeight: '600' }}>Mesa de Control KYC (Know Your Customer)</h3>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--capi-border)' }}>
                  <th style={{ padding: '0 15px 15px 15px', color: '#A0AEC0', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Usuario</th>
                  <th style={{ padding: '0 15px 15px 15px', color: '#A0AEC0', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Rol</th>
                  <th style={{ padding: '0 15px 15px 15px', color: '#A0AEC0', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Documentos Subidos</th>
                  <th style={{ padding: '0 15px 15px 15px', color: '#A0AEC0', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Estado</th>
                  <th style={{ padding: '0 15px 15px 15px', color: '#A0AEC0', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'right' }}>Acción</th>
                </tr>
              </thead>
              <tbody>
                
                <tr style={{ borderBottom: '1px solid #EDF2F7', transition: 'background 0.2s' }}>
                  <td style={{ padding: '20px 15px' }}>
                    <p style={{ margin: 0, fontWeight: '600', color: 'var(--capi-navy)' }}>Pedro Martínez</p>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: '#A0AEC0' }}>pedro@gasfiter.cl</p>
                  </td>
                  <td style={{ padding: '20px 15px', color: 'var(--capi-text)', fontSize: '0.9rem' }}>Maestro Especialista</td>
                  <td style={{ padding: '20px 15px' }}>
                    <span style={{ fontSize: '0.75rem', background: '#F7FAFC', border: '1px solid var(--capi-border)', color: 'var(--capi-text)', padding: '4px 10px', borderRadius: '8px', marginRight: '8px', display: 'inline-block', marginBottom: '5px' }}>Carnet Identidad</span>
                    <span style={{ fontSize: '0.75rem', background: '#F7FAFC', border: '1px solid var(--capi-border)', color: 'var(--capi-text)', padding: '4px 10px', borderRadius: '8px', display: 'inline-block' }}>Cert. Antecedentes</span>
                  </td>
                  <td style={{ padding: '20px 15px' }}>
                    <span style={{ background: '#FFFFF0', color: '#B7791F', padding: '4px 10px', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pendiente</span>
                  </td>
                  <td style={{ padding: '20px 15px', textAlign: 'right' }}>
                    <button style={{ background: 'var(--capi-navy)', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: '600' }}>Revisar</button>
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid #EDF2F7', transition: 'background 0.2s' }}>
                  <td style={{ padding: '20px 15px' }}>
                    <p style={{ margin: 0, fontWeight: '600', color: 'var(--capi-navy)' }}>Arquitectura S.A.</p>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: '#A0AEC0' }}>contacto@arqs.cl</p>
                  </td>
                  <td style={{ padding: '20px 15px', color: 'var(--capi-text)', fontSize: '0.9rem' }}>Profesional</td>
                  <td style={{ padding: '20px 15px' }}>
                    <span style={{ fontSize: '0.75rem', background: '#F7FAFC', border: '1px solid var(--capi-border)', color: 'var(--capi-text)', padding: '4px 10px', borderRadius: '8px', display: 'inline-block' }}>Título Universitario</span>
                  </td>
                  <td style={{ padding: '20px 15px' }}>
                    <span style={{ background: '#FFFFF0', color: '#B7791F', padding: '4px 10px', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pendiente</span>
                  </td>
                  <td style={{ padding: '20px 15px', textAlign: 'right' }}>
                    <button style={{ background: 'var(--capi-navy)', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: '600' }}>Revisar</button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>

      </div>

    </div>
  );
}
