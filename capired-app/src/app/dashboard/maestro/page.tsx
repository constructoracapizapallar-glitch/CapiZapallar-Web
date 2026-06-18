"use client";

import React, { useState, useEffect } from 'react';
import RadarObras from '../../components/RadarObras';

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

  const getPastelBackground = (index: number) => {
    switch(index) {
      case 1: return 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)'; // Pastel Blue
      case 2: return 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)'; // Pastel Yellow
      case 3: return 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)'; // Pastel Green
      default: return '#f8fafc';
    }
  };

  const getBorderColor = (index: number) => {
    switch(index) {
      case 1: return 'rgba(56, 189, 248, 0.3)';
      case 2: return 'rgba(245, 158, 11, 0.3)';
      case 3: return 'rgba(16, 185, 129, 0.3)';
      default: return 'rgba(0,0,0,0.05)';
    }
  };

  const cardStyle = (index: number) => ({
    background: getPastelBackground(index),
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: `1px solid ${getBorderColor(index)}`,
    borderRadius: '24px',
    padding: '35px',
    color: 'var(--capi-navy)',
    boxShadow: isHovered === index ? '0 15px 35px rgba(0, 0, 0, 0.1)' : '0 5px 15px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    transform: isHovered === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
    cursor: 'pointer',
    position: 'relative' as const,
    overflow: 'hidden' as const,
  });

  return (
    <div style={{ padding: '20px', backgroundColor: 'transparent', borderRadius: '20px', minHeight: '80vh' }}>
      
      {/* Header del Panel */}
      <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
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
        
        {/* Radar Widget Info */}
        <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', padding: '10px 20px', borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '12px', height: '12px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981', animation: 'pulse 2s infinite' }}></div>
          <span style={{ color: '#10b981', fontWeight: 'bold' }}>{location}</span>
        </div>
      </div>

      {/* COMPONENTE RADAR UBER-LIKE */}
      <div style={{ marginBottom: '50px' }}>
        <RadarObras />
      </div>

      {/* Grid de Funciones Premium */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        
        {/* Card Buscador Obras Menores */}
        <div 
          style={cardStyle(1)}
          onMouseEnter={() => setIsHovered(1)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: 'linear-gradient(90deg, #3b82f6, #0284c7)' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <span style={{ background: 'rgba(255,255,255,0.6)', color: '#0369a1', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1px' }}>VISTA DE LISTA</span>
          </div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '10px', color: '#0c4a6e', fontWeight: '800' }}>Oportunidades Locales</h2>
          <p style={{ color: '#075985', marginBottom: '25px', lineHeight: '1.6', fontSize: '1.05rem' }}>Ver el listado completo de reparaciones solicitadas hoy en Zapallar y Cachagua.</p>
          
          <button style={{
            background: '#0ea5e9', color: 'white', border: 'none', padding: '14px 25px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s', width: '100%', fontSize: '1.1rem',
            boxShadow: isHovered === 1 ? '0 10px 20px rgba(14, 165, 233, 0.4)' : 'none',
          }}>
            Abrir Listado
          </button>
        </div>

        {/* Card Calculadora de Materiales */}
        <div 
          style={cardStyle(2)}
          onMouseEnter={() => setIsHovered(2)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: 'linear-gradient(90deg, #d97706, #b45309)' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <span style={{ background: 'rgba(255,255,255,0.6)', color: '#b45309', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1px' }}>HERRAMIENTA IA</span>
          </div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '10px', color: '#78350f', fontWeight: '800' }}>Cubicador Inteligente</h2>
          <p style={{ color: '#92400e', marginBottom: '25px', lineHeight: '1.6', fontSize: '1.05rem' }}>Calcula cemento, madera o cerámica exacta y envía el requerimiento directo a tu cliente o ferretería.</p>
          
          <button style={{
            background: '#f59e0b', color: 'white', border: 'none', padding: '14px 25px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s', width: '100%', fontSize: '1.1rem',
            boxShadow: isHovered === 2 ? '0 10px 20px rgba(245, 158, 11, 0.4)' : 'none',
          }}>
            Iniciar Cubicador
          </button>
        </div>

        {/* Card Reputación */}
        <div 
          style={cardStyle(3)}
          onMouseEnter={() => setIsHovered(3)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: 'linear-gradient(90deg, #10b981, #047857)' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
            <span style={{ background: 'rgba(255,255,255,0.6)', color: '#047857', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1px' }}>PERFIL PÚBLICO</span>
          </div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#064e3b', fontWeight: '800' }}>Mi Reputación</h2>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', background: 'rgba(255,255,255,0.5)', padding: '10px 15px', borderRadius: '15px' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#064e3b' }}>4.9</div>
            <div>
              <div style={{ color: '#d97706', fontSize: '1.2rem' }}>⭐⭐⭐⭐⭐</div>
              <div style={{ color: '#065f46', fontSize: '0.9rem', fontWeight: '600' }}>Basado en 24 trabajos</div>
            </div>
          </div>
          
          <p style={{ color: '#065f46', marginBottom: '25px', lineHeight: '1.6', fontSize: '1.05rem' }}>Mantén tu puntaje sobre 4.5 para ser recomendado en obras mayores por constructoras de la Red Capi.</p>

          <button style={{
            background: '#10b981', color: 'white', border: 'none', padding: '14px 25px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s', width: '100%', fontSize: '1.1rem',
            boxShadow: isHovered === 3 ? '0 10px 20px rgba(16, 185, 129, 0.4)' : 'none',
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
