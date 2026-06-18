"use client";

import React from 'react';

export default function ClienteDashboard() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px', minHeight: '80vh', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* SIDEBAR IZQUIERDO */}
      <div style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Header Cliente */}
        <div style={{ background: 'var(--capi-navy)', borderRadius: '20px', padding: '25px', color: 'white', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.2)' }}>
          <h1 style={{ fontSize: '1.8rem', margin: '0 0 10px 0' }}>Mi Hogar</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>Gestiona tus proyectos de construcción y reparaciones.</p>
        </div>

        {/* Acciones Rápidas */}
        <div style={{ background: 'white', border: '1px solid var(--capi-border)', borderRadius: '20px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          <div style={{ border: '1px solid #fef08a', background: '#fefce8', borderRadius: '12px', padding: '15px', cursor: 'pointer', transition: 'all 0.2s', position: 'relative' }}>
             <h3 style={{ margin: '0 0 5px 0', fontSize: '1rem', color: '#854d0e' }}>Capi IA Visión 📷</h3>
             <p style={{ fontSize: '0.8rem', color: '#a16207', margin: 0 }}>Sube una foto y cotiza tu problema gratis.</p>
          </div>

          <div style={{ border: '1px solid #bbf7d0', background: '#f0fdf4', borderRadius: '12px', padding: '15px', cursor: 'pointer', transition: 'all 0.2s' }}>
             <h3 style={{ margin: '0 0 5px 0', fontSize: '1rem', color: '#166534' }}>Directorio Local</h3>
             <p style={{ fontSize: '0.8rem', color: '#15803d', margin: 0 }}>Busca maestros verificados en Zapallar.</p>
          </div>

        </div>
      </div>

      {/* ÁREA PRINCIPAL: TIMELINE / SEGUIMIENTO */}
      <div style={{ flex: '1', background: 'white', border: '1px solid var(--capi-border)', borderRadius: '20px', padding: '40px', display: 'flex', flexDirection: 'column' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--capi-navy)', margin: 0 }}>Seguimiento de Obras Activas</h2>
        </div>

        {/* PROYECTO PRINCIPAL (TIMELINE) */}
        <div style={{ border: '1px solid #e2e8f0', borderRadius: '15px', padding: '30px', marginBottom: '30px' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <div>
              <h3 style={{ margin: '0 0 5px 0', fontSize: '1.5rem', color: 'var(--capi-navy)' }}>Remodelación Baño Principal</h3>
              <p style={{ margin: 0, color: '#64748b' }}>A cargo de: Maestro Juan Pérez (Gasfitería y Cerámicos)</p>
            </div>
            <span style={{ background: '#dbeafe', color: '#1e40af', padding: '5px 12px', borderRadius: '10px', fontSize: '0.9rem', fontWeight: 'bold' }}>EN PROCESO</span>
          </div>

          {/* Barra de Progreso Global */}
          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.9rem', color: '#64748b', fontWeight: 'bold' }}>
              <span>Avance General</span>
              <span style={{ color: '#3b82f6' }}>65%</span>
            </div>
            <div style={{ width: '100%', background: '#f1f5f9', borderRadius: '10px', height: '12px', overflow: 'hidden' }}>
              <div style={{ width: '65%', background: '#3b82f6', height: '100%', borderRadius: '10px' }}></div>
            </div>
          </div>

          {/* TIMELINE VERTICAL */}
          <div style={{ position: 'relative', paddingLeft: '20px', borderLeft: '2px solid #e2e8f0' }}>
            
            {/* Hito 1 (Completado) */}
            <div style={{ position: 'relative', marginBottom: '25px' }}>
              <div style={{ position: 'absolute', left: '-27px', top: '0', width: '12px', height: '12px', background: '#10b981', border: '2px solid white', borderRadius: '50%' }}></div>
              <h4 style={{ margin: '0 0 5px 0', color: '#10b981', fontSize: '1.1rem' }}>Desarme y Retiro de Escombros</h4>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>Completado el 12 de Junio.</p>
            </div>

            {/* Hito 2 (Completado) */}
            <div style={{ position: 'relative', marginBottom: '25px' }}>
              <div style={{ position: 'absolute', left: '-27px', top: '0', width: '12px', height: '12px', background: '#10b981', border: '2px solid white', borderRadius: '50%' }}></div>
              <h4 style={{ margin: '0 0 5px 0', color: '#10b981', fontSize: '1.1rem' }}>Instalación de Red de Agua</h4>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>Completado el 15 de Junio. Prueba de presión superada.</p>
            </div>

            {/* Hito 3 (En Progreso) */}
            <div style={{ position: 'relative', marginBottom: '25px' }}>
              <div style={{ position: 'absolute', left: '-27px', top: '0', width: '12px', height: '12px', background: '#3b82f6', border: '2px solid white', borderRadius: '50%', boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.2)' }}></div>
              <h4 style={{ margin: '0 0 5px 0', color: 'var(--capi-navy)', fontSize: '1.1rem' }}>Instalación de Cerámicas</h4>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>En ejecución hoy. Faltan terminaciones y fragüe.</p>
            </div>

            {/* Hito 4 (Pendiente) */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-27px', top: '0', width: '12px', height: '12px', background: '#e2e8f0', border: '2px solid white', borderRadius: '50%' }}></div>
              <h4 style={{ margin: '0 0 5px 0', color: '#94a3b8', fontSize: '1.1rem' }}>Instalación de Artefactos</h4>
              <p style={{ margin: 0, color: '#cbd5e1', fontSize: '0.9rem' }}>Por iniciar (WC, Vanitorio, Grifería).</p>
            </div>

          </div>

        </div>
        
        {/* Historial Corto */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ color: 'var(--capi-navy)', fontSize: '1.2rem', margin: 0 }}>Proyectos Anteriores</h3>
          <button style={{ background: 'transparent', border: 'none', color: '#3b82f6', fontWeight: 'bold', cursor: 'pointer' }}>Ver Historial Completo</button>
        </div>
        <p style={{ color: '#64748b' }}>No hay proyectos finalizados aún.</p>

      </div>

    </div>
  );
}
