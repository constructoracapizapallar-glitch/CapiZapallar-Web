"use client";

import React from 'react';

export default function ClienteDashboard() {
  return (
    <div style={{ display: 'flex', gap: '30px', padding: '30px', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* SIDEBAR IZQUIERDO */}
      <div style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Header Cliente */}
        <div style={{ background: 'var(--capi-navy)', borderRadius: '24px', padding: '30px', color: 'white', boxShadow: 'var(--capi-shadow)' }}>
          <h1 style={{ fontSize: '2rem', margin: '0 0 5px 0', fontWeight: '300', letterSpacing: '-0.5px' }}>Mi Hogar</h1>
          <p style={{ color: '#A0AEC0', fontSize: '0.85rem', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>Proyectos Activos</p>
        </div>

        {/* Acciones Rápidas / Menú */}
        <div style={{ background: 'var(--capi-white)', borderRadius: '24px', padding: '25px', display: 'flex', flexDirection: 'column', gap: '10px', boxShadow: 'var(--capi-shadow)' }}>
          
          <h3 style={{ fontSize: '0.8rem', color: '#A0AEC0', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Servicios Capi</h3>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', background: '#F7FAFC', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s', border: '1px solid var(--capi-border)' }}>
             <span style={{ fontSize: '1.2rem' }}>📷</span>
             <div>
               <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--capi-navy)' }}>Capi IA Visión</h4>
               <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--capi-text)' }}>Cotizar con foto</p>
             </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>
             <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>🔍</span>
             <div>
               <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--capi-text)' }}>Directorio Local</h4>
               <p style={{ margin: 0, fontSize: '0.75rem', color: '#A0AEC0' }}>Buscar maestros</p>
             </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>
             <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>📝</span>
             <div>
               <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--capi-text)' }}>Garantías</h4>
               <p style={{ margin: 0, fontSize: '0.75rem', color: '#A0AEC0' }}>Seguro Capi Zapallar</p>
             </div>
          </div>

        </div>
      </div>

      {/* ÁREA PRINCIPAL: TIMELINE (Estilo Escandinavo) */}
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--capi-navy)', margin: '0 0 5px 0', fontWeight: '300', letterSpacing: '-1px' }}>Seguimiento</h2>
            <p style={{ margin: 0, color: 'var(--capi-text)' }}>Supervisa el avance de tus obras de forma transparente.</p>
          </div>
        </div>

        {/* PROYECTO PRINCIPAL (TIMELINE) */}
        <div style={{ background: 'var(--capi-white)', borderRadius: '24px', padding: '40px', boxShadow: 'var(--capi-shadow)', flex: 1 }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px' }}>
            <div>
              <h3 style={{ margin: '0 0 5px 0', fontSize: '1.5rem', color: 'var(--capi-navy)', fontWeight: '600' }}>Remodelación Baño Principal</h3>
              <p style={{ margin: 0, color: '#A0AEC0', fontSize: '0.9rem' }}>Contratista: Maestro Juan Pérez</p>
            </div>
            <span style={{ background: '#EBF8FF', color: '#2B6CB0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>En Proceso</span>
          </div>

          {/* Barra de Progreso Global */}
          <div style={{ marginBottom: '50px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.9rem', color: 'var(--capi-text)', fontWeight: '600' }}>
              <span>Progreso Estimado</span>
              <span style={{ color: 'var(--capi-navy)' }}>65%</span>
            </div>
            <div style={{ width: '100%', background: '#EDF2F7', borderRadius: '10px', height: '8px', overflow: 'hidden' }}>
              <div style={{ width: '65%', background: 'var(--capi-navy)', height: '100%', borderRadius: '10px' }}></div>
            </div>
          </div>

          {/* TIMELINE VERTICAL MINIMALISTA */}
          <div style={{ position: 'relative', paddingLeft: '30px' }}>
            {/* Línea vertical base */}
            <div style={{ position: 'absolute', left: '6px', top: '5px', bottom: '20px', width: '2px', background: '#EDF2F7' }}></div>
            
            {/* Hito 1 (Completado) */}
            <div style={{ position: 'relative', marginBottom: '40px' }}>
              <div style={{ position: 'absolute', left: '-31px', top: '4px', width: '14px', height: '14px', background: 'var(--capi-navy)', borderRadius: '50%', border: '3px solid var(--capi-white)', boxShadow: '0 0 0 1px var(--capi-navy)' }}></div>
              <h4 style={{ margin: '0 0 5px 0', color: 'var(--capi-navy)', fontSize: '1.1rem', fontWeight: '600' }}>Desarme y Retiro de Escombros</h4>
              <p style={{ margin: 0, color: '#A0AEC0', fontSize: '0.9rem' }}>Completado el 12 de Junio.</p>
            </div>

            {/* Hito 2 (Completado) */}
            <div style={{ position: 'relative', marginBottom: '40px' }}>
              <div style={{ position: 'absolute', left: '-31px', top: '4px', width: '14px', height: '14px', background: 'var(--capi-navy)', borderRadius: '50%', border: '3px solid var(--capi-white)', boxShadow: '0 0 0 1px var(--capi-navy)' }}></div>
              <h4 style={{ margin: '0 0 5px 0', color: 'var(--capi-navy)', fontSize: '1.1rem', fontWeight: '600' }}>Instalación de Red de Agua</h4>
              <p style={{ margin: 0, color: '#A0AEC0', fontSize: '0.9rem' }}>Completado el 15 de Junio. Prueba de presión superada.</p>
            </div>

            {/* Hito 3 (En Progreso) */}
            <div style={{ position: 'relative', marginBottom: '40px' }}>
              <div style={{ position: 'absolute', left: '-31px', top: '4px', width: '14px', height: '14px', background: 'var(--capi-white)', borderRadius: '50%', border: '3px solid var(--capi-navy)', boxShadow: '0 0 0 4px rgba(45, 55, 72, 0.1)' }}></div>
              <h4 style={{ margin: '0 0 5px 0', color: 'var(--capi-navy)', fontSize: '1.1rem', fontWeight: '600' }}>Instalación de Cerámicas</h4>
              <p style={{ margin: 0, color: 'var(--capi-text)', fontSize: '0.9rem' }}>En ejecución hoy. Faltan terminaciones y fragüe.</p>
            </div>

            {/* Hito 4 (Pendiente) */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-31px', top: '4px', width: '14px', height: '14px', background: '#EDF2F7', borderRadius: '50%', border: '3px solid var(--capi-white)' }}></div>
              <h4 style={{ margin: '0 0 5px 0', color: '#A0AEC0', fontSize: '1.1rem', fontWeight: '600' }}>Instalación de Artefactos</h4>
              <p style={{ margin: 0, color: '#CBD5E0', fontSize: '0.9rem' }}>Por iniciar (WC, Vanitorio, Grifería).</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
