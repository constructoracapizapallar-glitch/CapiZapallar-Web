"use client";

import React, { useState } from 'react';

export default function ConstructoraDashboard() {
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
          Centro de Operaciones
        </h1>
        <p style={{ color: '#8892b0', fontSize: '1.1rem' }}>Licitaciones de Obras Mayores para constructoras certificadas.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        
        {/* Card Licitación */}
        <div 
          style={cardStyle(1)}
          onMouseEnter={() => setIsHovered(1)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #f59e0b, #ef4444)' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <span style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>ADJUDICACIÓN PENDIENTE</span>
          </div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#e2e8f0' }}>Construcción de Quincho Premium</h2>
          <p style={{ color: '#8892b0', marginBottom: '20px', lineHeight: '1.6' }}>Ubicación: Cachagua • Diseño Terminado</p>
          
          <div style={{ display: 'flex', gap: '10px', marginBottom: '25px' }}>
            <span style={{ padding: '5px 10px', background: 'rgba(212, 175, 55, 0.1)', color: 'var(--capi-gold)', borderRadius: '6px', fontSize: '0.8rem' }}>Presupuesto: $15M - $20M</span>
          </div>

          <button style={{
            background: 'var(--capi-gold)', color: 'var(--capi-navy)', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.2s', width: '100%',
            transform: isHovered === 1 ? 'scale(1.02)' : 'scale(1)',
            boxShadow: isHovered === 1 ? '0 0 15px rgba(212, 175, 55, 0.5)' : 'none'
          }}>
            Participar en Licitación
          </button>
        </div>
        <button className="btn-outline" style={{ background: 'white' }}>Analizar Proyecto con IA</button>
      </div>
    </div>
  );
}
