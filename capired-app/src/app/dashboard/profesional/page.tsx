"use client";

import React, { useState } from 'react';

export default function ProfesionalDashboard() {
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
    <div style={{ padding: '20px', backgroundColor: '#0a192f', borderRadius: '20px', minHeight: '80vh' }}>
      
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          background: 'linear-gradient(90deg, var(--capi-gold) 0%, #fff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '10px'
        }}>
          Estudio Profesional
        </h1>
        <p style={{ color: '#8892b0', fontSize: '1.1rem' }}>Postula a Obras Mayores para diseño arquitectónico y cálculo estructural.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        
        {/* Card Obra Mayor */}
        <div 
          style={cardStyle(1)}
          onMouseEnter={() => setIsHovered(1)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #ec4899, #8b5cf6)' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <span style={{ background: 'rgba(236, 72, 153, 0.2)', color: '#ec4899', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>LICITACIÓN ABIERTA</span>
          </div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#e2e8f0' }}>Diseño y Cálculo para Ampliación de 40m2</h2>
          <p style={{ color: '#8892b0', marginBottom: '20px', lineHeight: '1.6' }}>Ubicación: Zapallar • Cliente: Familia Gómez</p>
          
          <div style={{ display: 'flex', gap: '10px', marginBottom: '25px' }}>
            <span style={{ padding: '5px 10px', background: 'rgba(212, 175, 55, 0.1)', color: 'var(--capi-gold)', borderRadius: '6px', fontSize: '0.8rem' }}>Arquitectura</span>
            <span style={{ padding: '5px 10px', background: 'rgba(212, 175, 55, 0.1)', color: 'var(--capi-gold)', borderRadius: '6px', fontSize: '0.8rem' }}>Cálculo Estructural</span>
          </div>

          <button style={{
            background: 'var(--capi-gold)', color: 'var(--capi-navy)', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.2s', width: '100%',
            transform: isHovered === 1 ? 'scale(1.02)' : 'scale(1)',
            boxShadow: isHovered === 1 ? '0 0 15px rgba(212, 175, 55, 0.5)' : 'none'
          }}>
            Presentar Propuesta Técnica
          </button>
        </div>

        {/* Card Premium IA */}
        <div 
          style={{...cardStyle(2), border: '1px solid rgba(212, 175, 55, 0.3)'}}
          onMouseEnter={() => setIsHovered(2)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at top right, rgba(212, 175, 55, 0.1), transparent 50%)', pointerEvents: 'none' }}></div>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: 'var(--capi-gold)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            ✨ Capi IA (Premium)
          </h2>
          <p style={{ color: '#a8b2d1', marginBottom: '25px', lineHeight: '1.6' }}>Sube archivos PDF de arquitectura y chatea directamente con los planos. Acelera tus cubicaciones y análisis normativos.</p>
          
          <button style={{
            width: '100%', marginTop: 'auto', background: 'transparent', border: '2px solid var(--capi-gold)', color: 'var(--capi-gold)', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s',
            boxShadow: isHovered === 2 ? 'inset 0 0 15px rgba(212, 175, 55, 0.3)' : 'none'
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = 'var(--capi-gold)'; e.currentTarget.style.color = 'var(--capi-navy)'; }}
          onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--capi-gold)'; }}
          >
            Probar Capi IA con PDFs
          </button>
        </div>

      </div>
    </div>
  );
}
