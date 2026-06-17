"use client";

import React, { useState } from 'react';

export default function ClienteDashboard() {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const cardStyle = (index: number) => ({
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '30px',
    color: 'white',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    transform: isHovered === index ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
    cursor: 'pointer',
    position: 'relative' as const,
    overflow: 'hidden' as const,
  });

  return (
    <div style={{ padding: '20px', backgroundColor: 'transparent', borderRadius: '20px', minHeight: '80vh' }}>
      
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          background: 'linear-gradient(90deg, var(--capi-gold) 0%, #fff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '10px'
        }}>
          Centro de Proyectos
        </h1>
        <p style={{ color: '#8892b0', fontSize: '1.1rem' }}>Gestiona tus cotizaciones, obras menores y obras mayores.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        
        {/* Card Nueva Cotización */}
        <div 
          style={cardStyle(1)}
          onMouseEnter={() => setIsHovered(1)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, var(--capi-gold), #f59e0b)' }}></div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#e2e8f0' }}>Nueva Cotización (Obra Menor)</h2>
          <p style={{ color: '#8892b0', marginBottom: '25px', lineHeight: '1.6' }}>Crea una carpeta y sube imágenes del problema. Capi IA cotizará el trabajo al instante analizando las fotos.</p>
          
          <button style={{
            background: 'var(--capi-gold)', color: 'var(--capi-navy)', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.2s', width: '100%',
            transform: isHovered === 1 ? 'scale(1.02)' : 'scale(1)',
            boxShadow: isHovered === 1 ? '0 0 15px rgba(212, 175, 55, 0.5)' : 'none'
          }}>
            + Crear Carpeta de Imágenes
          </button>
        </div>

        {/* Card Obras Mayores */}
        <div 
          style={cardStyle(2)}
          onMouseEnter={() => setIsHovered(2)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }}></div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#e2e8f0' }}>Obras Mayores</h2>
          <p style={{ color: '#8892b0', marginBottom: '25px', lineHeight: '1.6' }}>Sube tus planos o asigna el diseño a nuestra red premium de Arquitectos y Constructoras verificadas.</p>
          
          <button style={{
            background: 'transparent', border: '2px solid #3b82f6', color: '#3b82f6', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s', width: '100%',
            boxShadow: isHovered === 2 ? 'inset 0 0 15px rgba(59, 130, 246, 0.3)' : 'none'
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = '#3b82f6'; e.currentTarget.style.color = '#fff'; }}
          onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#3b82f6'; }}
          >
            Iniciar Obra Mayor
          </button>
        </div>

      </div>
    </div>
  );
}
