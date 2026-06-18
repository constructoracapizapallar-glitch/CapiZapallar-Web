"use client";

import React from 'react';

export default function ProfesionalDashboard() {
  return (
    <div style={{ display: 'flex', gap: '30px', padding: '30px', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* SIDEBAR IZQUIERDO */}
      <div style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Header Profesional */}
        <div style={{ background: 'var(--capi-navy)', borderRadius: '24px', padding: '30px', color: 'white', boxShadow: 'var(--capi-shadow)' }}>
          <h1 style={{ fontSize: '2rem', margin: '0 0 5px 0', fontWeight: '300', letterSpacing: '-0.5px' }}>Estudio</h1>
          <p style={{ color: '#A0AEC0', fontSize: '0.85rem', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>Gestor de Planos</p>
        </div>

        {/* Acciones Rápidas / Menú */}
        <div style={{ background: 'var(--capi-white)', borderRadius: '24px', padding: '25px', display: 'flex', flexDirection: 'column', gap: '10px', boxShadow: 'var(--capi-shadow)' }}>
          
          <h3 style={{ fontSize: '0.8rem', color: '#A0AEC0', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Herramientas B2B</h3>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', background: '#F7FAFC', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s', border: '1px solid var(--capi-border)' }}>
             <span style={{ fontSize: '1.2rem' }}>🧠</span>
             <div>
               <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--capi-navy)' }}>Capi IA Normativo</h4>
               <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--capi-text)' }}>Consultar Ordenanzas</p>
             </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>
             <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>🤝</span>
             <div>
               <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--capi-text)' }}>Red de Constructoras</h4>
               <p style={{ margin: 0, fontSize: '0.75rem', color: '#A0AEC0' }}>Asociatividad local</p>
             </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>
             <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>⚙️</span>
             <div>
               <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--capi-text)' }}>Configuración</h4>
               <p style={{ margin: 0, fontSize: '0.75rem', color: '#A0AEC0' }}>Perfil profesional</p>
             </div>
          </div>

        </div>
      </div>

      {/* ÁREA PRINCIPAL: GESTOR DOCUMENTAL (Estilo Escandinavo) */}
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--capi-navy)', margin: '0 0 5px 0', fontWeight: '300', letterSpacing: '-1px' }}>Drive de Proyectos</h2>
            <p style={{ margin: 0, color: 'var(--capi-text)' }}>Repositorio seguro de planimetrías y EETT.</p>
          </div>
          <button style={{ background: 'var(--capi-navy)', color: 'var(--capi-white)', border: 'none', padding: '12px 24px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', boxShadow: 'var(--capi-shadow)' }}>
            + Subir Documento
          </button>
        </div>

        <div style={{ background: 'var(--capi-white)', borderRadius: '24px', padding: '40px', boxShadow: 'var(--capi-shadow)', flex: 1 }}>
          
          {/* CARPETAS */}
          <h3 style={{ margin: '0 0 20px 0', color: '#A0AEC0', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Carpetas Recientes</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            
            <div style={{ border: '1px solid var(--capi-border)', borderRadius: '16px', padding: '20px', display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer', transition: 'all 0.3s', background: '#FAFCFF' }}>
              <span style={{ fontSize: '2rem', filter: 'grayscale(0.2)' }}>📁</span>
              <div>
                <h4 style={{ margin: 0, color: 'var(--capi-navy)', fontSize: '1rem', fontWeight: '600' }}>Casa Zapallar Sur</h4>
                <p style={{ margin: 0, color: '#A0AEC0', fontSize: '0.8rem' }}>4 Archivos</p>
              </div>
            </div>
            
            <div style={{ border: '1px solid var(--capi-border)', borderRadius: '16px', padding: '20px', display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer', transition: 'all 0.3s' }}>
              <span style={{ fontSize: '2rem', filter: 'grayscale(0.2)' }}>📁</span>
              <div>
                <h4 style={{ margin: 0, color: 'var(--capi-text)', fontSize: '1rem', fontWeight: '600' }}>Local Comercial</h4>
                <p style={{ margin: 0, color: '#A0AEC0', fontSize: '0.8rem' }}>12 Archivos</p>
              </div>
            </div>

          </div>

          {/* ARCHIVOS RECIENTES */}
          <h3 style={{ margin: '0 0 20px 0', color: '#A0AEC0', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Archivos Subidos</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
            
            <div style={{ border: '1px solid var(--capi-border)', borderRadius: '16px', padding: '20px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s', background: 'var(--capi-white)' }}>
              <div style={{ height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3rem', color: 'var(--capi-navy)', marginBottom: '15px', opacity: 0.8 }}>
                📄
              </div>
              <h4 style={{ margin: 0, color: 'var(--capi-navy)', fontSize: '0.95rem', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>EETT_Arquitectura.pdf</h4>
              <p style={{ margin: '5px 0 0 0', color: '#A0AEC0', fontSize: '0.75rem' }}>Hace 2 horas</p>
            </div>

            <div style={{ border: '1px solid var(--capi-border)', borderRadius: '16px', padding: '20px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s', background: 'var(--capi-white)' }}>
              <div style={{ height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3rem', color: '#4A5568', marginBottom: '15px', opacity: 0.8 }}>
                📐
              </div>
              <h4 style={{ margin: 0, color: 'var(--capi-navy)', fontSize: '0.95rem', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Plano_Planta_v2.dwg</h4>
              <p style={{ margin: '5px 0 0 0', color: '#A0AEC0', fontSize: '0.75rem' }}>Ayer</p>
            </div>
            
            <div style={{ border: '1px solid var(--capi-border)', borderRadius: '16px', padding: '20px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s', background: 'var(--capi-white)' }}>
              <div style={{ height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3rem', color: '#718096', marginBottom: '15px', opacity: 0.8 }}>
                🖼️
              </div>
              <h4 style={{ margin: 0, color: 'var(--capi-navy)', fontSize: '0.95rem', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Render_Fachada.png</h4>
              <p style={{ margin: '5px 0 0 0', color: '#A0AEC0', fontSize: '0.75rem' }}>La semana pasada</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
