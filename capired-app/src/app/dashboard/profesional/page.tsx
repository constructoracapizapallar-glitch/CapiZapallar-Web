"use client";

import React from 'react';

export default function ProfesionalDashboard() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px', minHeight: '80vh', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* SIDEBAR IZQUIERDO */}
      <div style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Header Profesional */}
        <div style={{ background: 'var(--capi-navy)', borderRadius: '20px', padding: '25px', color: 'white', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.2)' }}>
          <h1 style={{ fontSize: '1.8rem', margin: '0 0 10px 0' }}>Estudio</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>Gestión de diseños, planos y normativas.</p>
        </div>

        {/* Acciones Rápidas */}
        <div style={{ background: 'white', border: '1px solid var(--capi-border)', borderRadius: '20px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          <div style={{ border: '1px solid #bfdbfe', background: '#eff6ff', borderRadius: '12px', padding: '15px', cursor: 'pointer', transition: 'all 0.2s', position: 'relative' }}>
             <h3 style={{ margin: '0 0 5px 0', fontSize: '1rem', color: '#1e40af' }}>Capi IA Normativo 🧠</h3>
             <p style={{ fontSize: '0.8rem', color: '#1d4ed8', margin: 0 }}>Consulta Ordenanzas de Zapallar/Cachagua.</p>
          </div>

          <div style={{ border: '1px solid #bbf7d0', background: '#f0fdf4', borderRadius: '12px', padding: '15px', cursor: 'pointer', transition: 'all 0.2s' }}>
             <h3 style={{ margin: '0 0 5px 0', fontSize: '1rem', color: '#166534' }}>Directorio B2B</h3>
             <p style={{ fontSize: '0.8rem', color: '#15803d', margin: 0 }}>Busca Constructoras Aliadas.</p>
          </div>

        </div>
      </div>

      {/* ÁREA PRINCIPAL: GESTOR DE PLANOS (Estilo Drive) */}
      <div style={{ flex: '1', background: 'white', border: '1px solid var(--capi-border)', borderRadius: '20px', padding: '30px', display: 'flex', flexDirection: 'column' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--capi-navy)', margin: 0 }}>Repositorio de Proyectos</h2>
          <button style={{ background: 'var(--capi-gold)', color: 'var(--capi-navy)', border: 'none', padding: '10px 20px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
            + Subir Planos
          </button>
        </div>

        {/* CARPETAS / DIRECTORIOS */}
        <h3 style={{ margin: '0 0 15px 0', color: '#64748b', fontSize: '1rem' }}>Carpetas Recientes</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
          
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '15px', display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer', transition: 'all 0.2s', background: '#f8fafc' }}>
            <span style={{ fontSize: '2rem' }}>📁</span>
            <div>
              <h4 style={{ margin: 0, color: 'var(--capi-navy)', fontSize: '0.95rem' }}>Casa Zapallar Sur</h4>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.8rem' }}>4 Archivos</p>
            </div>
          </div>
          
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '15px', display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer', transition: 'all 0.2s', background: '#f8fafc' }}>
            <span style={{ fontSize: '2rem' }}>📁</span>
            <div>
              <h4 style={{ margin: 0, color: 'var(--capi-navy)', fontSize: '0.95rem' }}>Local Comercial</h4>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.8rem' }}>12 Archivos</p>
            </div>
          </div>

        </div>

        {/* ARCHIVOS (GRID) */}
        <h3 style={{ margin: '0 0 15px 0', color: '#64748b', fontSize: '1rem' }}>Archivos Subidos (Planos, EETT, Renders)</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px' }}>
          
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '15px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s' }}>
            <div style={{ height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3rem', color: '#3b82f6', marginBottom: '10px' }}>
              📄
            </div>
            <h4 style={{ margin: 0, color: 'var(--capi-navy)', fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>EETT_Arquitectura.pdf</h4>
            <p style={{ margin: '5px 0 0 0', color: '#64748b', fontSize: '0.75rem' }}>Actualizado ayer</p>
          </div>

          <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '15px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s' }}>
            <div style={{ height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3rem', color: '#10b981', marginBottom: '10px' }}>
              📐
            </div>
            <h4 style={{ margin: 0, color: 'var(--capi-navy)', fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Plano_Planta_v2.dwg</h4>
            <p style={{ margin: '5px 0 0 0', color: '#64748b', fontSize: '0.75rem' }}>Actualizado hace 2 días</p>
          </div>
          
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '15px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s' }}>
            <div style={{ height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3rem', color: '#f59e0b', marginBottom: '10px' }}>
              🖼️
            </div>
            <h4 style={{ margin: 0, color: 'var(--capi-navy)', fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Render_Fachada.png</h4>
            <p style={{ margin: '5px 0 0 0', color: '#64748b', fontSize: '0.75rem' }}>Actualizado hace 1 semana</p>
          </div>

        </div>

      </div>

    </div>
  );
}
