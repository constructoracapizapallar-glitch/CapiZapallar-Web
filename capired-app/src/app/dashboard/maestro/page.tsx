"use client";

import React, { useState, useEffect } from 'react';

export default function MaestroDashboard() {
  const [location, setLocation] = useState<string>("Rastreando tu señal...");
  const [isHovered, setIsHovered] = useState<number | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => setLocation(`${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`),
        () => setLocation("Geolocalización denegada")
      );
    } else {
      setLocation("No soportada");
    }
  }, []);

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
      
      {/* Header del Panel */}
      <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ 
            fontSize: '2.5rem', 
            background: 'linear-gradient(90deg, var(--capi-gold) 0%, #fff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '10px'
          }}>
            Radar Operativo
          </h1>
          <p style={{ color: '#8892b0', fontSize: '1.1rem' }}>Sincronizando Obras Menores y proyectos cercanos a ti en tiempo real.</p>
        </div>
        
        {/* Radar Widget */}
        <div style={{ 
          background: 'rgba(212, 175, 55, 0.1)', 
          border: '1px solid var(--capi-gold)', 
          padding: '15px 25px', 
          borderRadius: '30px',
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981', animation: 'pulse 2s infinite' }}></div>
          <span style={{ color: 'var(--capi-gold)', fontWeight: '600', fontFamily: 'monospace' }}>GPS: {location}</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        
        {/* Card Trabajo 1 */}
        <div 
          style={cardStyle(1)}
          onMouseEnter={() => setIsHovered(1)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #10b981, #3b82f6)' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <span style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10b981', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>NUEVO</span>
            <span style={{ color: '#8892b0', fontSize: '0.9rem' }}>Hace 5 min</span>
          </div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#e2e8f0' }}>Reparación de Techumbre</h2>
          <p style={{ color: '#8892b0', marginBottom: '25px', lineHeight: '1.6' }}>Filtración en techo de zinc. Cliente verificado con pago en garantía retenido por Capi Red.</p>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '0.8rem', color: '#8892b0', marginBottom: '5px' }}>PRESUPUESTO IA SUGERIDO</p>
              <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--capi-gold)', margin: 0 }}>$85.000</p>
            </div>
            <button style={{
              background: 'var(--capi-gold)', color: 'var(--capi-navy)', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.2s',
              transform: isHovered === 1 ? 'scale(1.05)' : 'scale(1)',
              boxShadow: isHovered === 1 ? '0 0 15px rgba(212, 175, 55, 0.5)' : 'none'
            }}>
              Tomar Trabajo
            </button>
          </div>
          <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.9rem', color: '#a8b2d1', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>📍 A 2.5 km de distancia</span>
          </div>
        </div>

        {/* Card Premium IA */}
        <div 
          style={{...cardStyle(2), border: '1px solid rgba(212, 175, 55, 0.3)'}}
          onMouseEnter={() => setIsHovered(2)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at top right, rgba(212, 175, 55, 0.1), transparent 50%)', pointerEvents: 'none' }}></div>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: 'var(--capi-gold)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            ✨ Capi IA Premium
          </h2>
          <p style={{ color: '#a8b2d1', marginBottom: '25px', lineHeight: '1.6' }}>Potencia tu oficio con nuestro asistente IA. Lee planos al instante y cubica materiales automáticamente.</p>
          
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#e2e8f0' }}>
            {['Chat Inteligente para PDFs de Planos', 'Prioridad de Alertas (Radar +10km)', 'Cubicación Automática de Materiales'].map((item, i) => (
              <li key={i} style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--capi-gold)' }}>✓</div>
                {item}
              </li>
            ))}
          </ul>
          
          <button style={{
            width: '100%', marginTop: '30px', background: 'transparent', border: '2px solid var(--capi-gold)', color: 'var(--capi-gold)', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s',
            boxShadow: isHovered === 2 ? 'inset 0 0 15px rgba(212, 175, 55, 0.3)' : 'none'
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = 'var(--capi-gold)'; e.currentTarget.style.color = 'var(--capi-navy)'; }}
          onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--capi-gold)'; }}
          >
            Desbloquear Arsenal IA
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
