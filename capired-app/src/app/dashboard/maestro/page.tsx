"use client";

import React, { useState, useEffect } from 'react';

export default function MaestroDashboard() {
  const [location, setLocation] = useState<string>("Rastreando tu señal...");
  const [isHovered, setIsHovered] = useState<number | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      setTimeout(() => {
        setLocation("Zapallar, Región de Valparaíso (Activo)");
      }, 2000);
    }
  }, []);

  const cardStyle = (index: number) => ({
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    borderRadius: '20px',
    padding: '30px',
    color: 'var(--capi-navy)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    transform: isHovered === index ? 'translateY(-5px) scale(1.02)' : 'translateY(0) scale(1)',
    cursor: 'pointer',
    position: 'relative' as const,
    overflow: 'hidden' as const,
  });

  return (
    <div style={{ padding: '20px', backgroundColor: 'transparent', borderRadius: '20px', minHeight: '80vh' }}>
      
      {/* Header del Panel */}
      <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ 
            fontSize: '2.5rem', 
            color: 'var(--capi-navy)',
            marginBottom: '10px'
          }}>
            Radar Operativo
          </h1>
          <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Sincronizando Obras Menores y proyectos cercanos a ti en tiempo real.</p>
        </div>
        
        {/* Radar Widget */}
        <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', padding: '10px 20px', borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '12px', height: '12px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981', animation: 'pulse 2s infinite' }}></div>
          <span style={{ color: '#10b981', fontWeight: 'bold' }}>{location}</span>
        </div>
      </div>

      {/* Grid de Funciones Premium */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        
        {/* Card Buscador Obras Menores */}
        <div 
          style={cardStyle(1)}
          onMouseEnter={() => setIsHovered(1)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #3b82f6, #06b6d4)' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <span style={{ background: '#eff6ff', color: '#3b82f6', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>3 CERCA DE TI</span>
          </div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--capi-navy)' }}>Radar de Obras Menores</h2>
          <p style={{ color: '#64748b', marginBottom: '20px', lineHeight: '1.6' }}>Encuentra reparaciones, filtraciones o instalaciones menores solicitadas hoy en Zapallar y Cachagua.</p>
          
          <button style={{
            background: '#3b82f6', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.2s', width: '100%',
            transform: isHovered === 1 ? 'scale(1.02)' : 'scale(1)',
          }}>
            Ver Mapa de Trabajos
          </button>
        </div>

        {/* Card Calculadora de Materiales */}
        <div 
          style={cardStyle(2)}
          onMouseEnter={() => setIsHovered(2)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, var(--capi-gold), #f59e0b)' }}></div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--capi-navy)' }}>Calculadora de Materiales</h2>
          <p style={{ color: '#64748b', marginBottom: '20px', lineHeight: '1.6' }}>Calcula cemento, madera o cerámica exacta y envía el requerimiento directo a tu cliente o ferretería.</p>
          
          <button style={{
            background: 'transparent', color: 'var(--capi-gold)', border: '2px solid var(--capi-gold)', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s', width: '100%',
          }}>
            Abrir Cubicador Rápido
          </button>
        </div>

        {/* Card Reputación */}
        <div 
          style={cardStyle(3)}
          onMouseEnter={() => setIsHovered(3)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #10b981, #059669)' }}></div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--capi-navy)' }}>Mi Reputación</h2>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--capi-navy)' }}>4.9</div>
            <div>
              <div style={{ color: 'var(--capi-gold)', fontSize: '1.2rem' }}>⭐⭐⭐⭐⭐</div>
              <div style={{ color: '#64748b', fontSize: '0.9rem' }}>Basado en 24 trabajos</div>
            </div>
          </div>
          
          <p style={{ color: '#64748b', marginBottom: '25px', lineHeight: '1.6' }}>Mantén tu puntaje sobre 4.5 para ser recomendado en obras mayores por constructoras de la Red Capi.</p>

          <button style={{
            background: '#10b981', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.2s', width: '100%',
            transform: isHovered === 3 ? 'scale(1.02)' : 'scale(1)',
          }}>
            Leer Mis Reseñas
          </button>
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
