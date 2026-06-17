"use client";

import React, { useState } from 'react';

export default function ClienteDashboard() {
  const [isHovered, setIsHovered] = useState<number | null>(null);

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
      
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          color: 'var(--capi-navy)',
          marginBottom: '10px'
        }}>
          Centro de Proyectos
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Gestiona tus cotizaciones, seguimiento de obras y profesionales favoritos.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        
        {/* Card Cotización IA */}
        <div 
          style={cardStyle(1)}
          onMouseEnter={() => setIsHovered(1)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, var(--capi-gold), #f59e0b)' }}></div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--capi-navy)' }}>Capi IA Visión (Nueva Cotización)</h2>
          <p style={{ color: '#64748b', marginBottom: '25px', lineHeight: '1.6' }}>Sube imágenes de la reparación que necesitas. Nuestra IA analizará el problema y generará un pre-presupuesto al instante.</p>
          
          <button style={{
            background: 'var(--capi-gold)', color: 'var(--capi-navy)', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.2s', width: '100%',
            transform: isHovered === 1 ? 'scale(1.02)' : 'scale(1)',
            boxShadow: isHovered === 1 ? '0 0 15px rgba(212, 175, 55, 0.4)' : 'none'
          }}>
            📷 Subir Fotos y Cotizar
          </button>
        </div>

        {/* Card Seguimiento de Proyectos */}
        <div 
          style={cardStyle(2)}
          onMouseEnter={() => setIsHovered(2)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }}></div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--capi-navy)' }}>Seguimiento de Obras Activas</h2>
          <p style={{ color: '#64748b', marginBottom: '15px', lineHeight: '1.6' }}>Supervisa el avance de tus proyectos en tiempo real.</p>
          
          <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '10px', marginBottom: '20px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ margin: '0 0 10px 0', color: 'var(--capi-navy)' }}>Remodelación Baño Principal</h4>
            <div style={{ width: '100%', background: '#e2e8f0', borderRadius: '10px', height: '10px', overflow: 'hidden' }}>
              <div style={{ width: '65%', background: '#3b82f6', height: '100%' }}></div>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '5px 0 0 0', textAlign: 'right' }}>65% Completado</p>
          </div>

          <button style={{
            background: 'transparent', color: '#3b82f6', border: '2px solid #3b82f6', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s', width: '100%',
          }}>
            Ver Detalles del Proyecto
          </button>
        </div>

        {/* Card Directorio Favoritos */}
        <div 
          style={cardStyle(3)}
          onMouseEnter={() => setIsHovered(3)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #10b981, #059669)' }}></div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--capi-navy)' }}>Directorio de Confianza</h2>
          <p style={{ color: '#64748b', marginBottom: '25px', lineHeight: '1.6' }}>Guarda a tus Maestros, Arquitectos y Constructoras favoritos para contactarlos rápidamente en el futuro.</p>
          
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <div style={{ background: '#f0fdf4', color: '#166534', padding: '5px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>⭐ Juan Pérez (Gasfiter)</div>
            <div style={{ background: '#f0fdf4', color: '#166534', padding: '5px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>⭐ Arq. Silva</div>
          </div>

          <button style={{
            background: '#10b981', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.2s', width: '100%',
            transform: isHovered === 3 ? 'scale(1.02)' : 'scale(1)',
          }}>
            Ver Mi Directorio
          </button>
        </div>

      </div>
    </div>
  );
}
