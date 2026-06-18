"use client";

import React, { useState, useEffect } from 'react';
import RadarObras from '../../components/RadarObras';

export default function MaestroDashboard() {
  const [location, setLocation] = useState<string>("Rastreando tu señal...");
  const [isHovered, setIsHovered] = useState<number | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      setTimeout(() => {
        setLocation("Zapallar, Región de Valparaíso");
      }, 2000);
    }
  }, []);

  const compactCardStyle = (index: number) => ({
    background: 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(0,0,0,0.05)',
    borderRadius: '16px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
    boxShadow: isHovered === index ? '0 10px 25px rgba(0, 0, 0, 0.05)' : '0 4px 10px rgba(0, 0, 0, 0.02)',
    transition: 'all 0.3s ease',
    transform: isHovered === index ? 'translateX(5px)' : 'translateX(0)',
    cursor: 'pointer',
    position: 'relative' as const,
    overflow: 'hidden' as const,
  });

  return (
    <div style={{ padding: '20px', backgroundColor: 'transparent', minHeight: '80vh', display: 'flex', gap: '30px' }}>
      
      {/* ========================================================
          SIDEBAR (BARRA LATERAL IZQUIERDA - FUNCIONES Y HEADER)
          ======================================================== */}
      <div style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        {/* Header Compacto */}
        <div>
          <h1 style={{ fontSize: '2.2rem', color: 'var(--capi-navy)', margin: '0 0 10px 0', lineHeight: '1.2' }}>
            Radar Operativo
          </h1>
          
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', padding: '8px 15px', borderRadius: '20px', display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
            <div style={{ width: '10px', height: '10px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 8px #10b981', animation: 'pulse 2s infinite' }}></div>
            <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '0.85rem' }}>{location}</span>
          </div>
        </div>

        {/* Menú de Funciones Compacto */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          {/* Item 1: Oportunidades */}
          <div 
            style={compactCardStyle(1)}
            onMouseEnter={() => setIsHovered(1)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: '#3b82f6' }}></div>
            <h3 style={{ margin: 0, color: '#0f172a', fontSize: '1.1rem' }}>Lista de Oportunidades</h3>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.85rem', lineHeight: '1.4' }}>Ver obras solicitadas en tu zona hoy.</p>
            <span style={{ color: '#3b82f6', fontSize: '0.85rem', fontWeight: 'bold', marginTop: '5px' }}>Abrir Listado →</span>
          </div>

          {/* Item 2: Calculadora */}
          <div 
            style={compactCardStyle(2)}
            onMouseEnter={() => setIsHovered(2)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: '#f59e0b' }}></div>
            <h3 style={{ margin: 0, color: '#0f172a', fontSize: '1.1rem' }}>Cubicador Inteligente</h3>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.85rem', lineHeight: '1.4' }}>Cálculo IA de cemento, madera y cerámica.</p>
            <span style={{ color: '#f59e0b', fontSize: '0.85rem', fontWeight: 'bold', marginTop: '5px' }}>Iniciar Herramienta →</span>
          </div>

          {/* Item 3: Reputación */}
          <div 
            style={compactCardStyle(3)}
            onMouseEnter={() => setIsHovered(3)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: '#10b981' }}></div>
            <h3 style={{ margin: 0, color: '#0f172a', fontSize: '1.1rem' }}>Mi Reputación Pública</h3>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: '900', color: '#064e3b' }}>4.9</span>
              <span style={{ color: '#d97706', fontSize: '0.9rem' }}>⭐⭐⭐⭐⭐</span>
            </div>
            
            <span style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: 'bold', marginTop: '5px' }}>Ver Mis Reseñas →</span>
          </div>

        </div>
      </div>

      {/* ========================================================
          MAIN CONTENT (DERECHA - COMPONENTE RADAR GIGANTE)
          ======================================================== */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ background: '#0f172a', borderRadius: '20px', padding: '2px', height: '100%' }}>
          {/* El RadarObras ya tiene su propio diseño, lo montamos directamente */}
          <RadarObras />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
      `}} />
    </div>
  );
}
