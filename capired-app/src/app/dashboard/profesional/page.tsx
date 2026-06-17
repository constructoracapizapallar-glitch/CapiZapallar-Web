"use client";

import React, { useState } from 'react';

export default function ProfesionalDashboard() {
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
          Estudio Profesional
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Gestiona tus diseños, normativas locales y conéctate con Constructoras.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        
        {/* Gestor de Planos */}
        <div 
          style={cardStyle(1)}
          onMouseEnter={() => setIsHovered(1)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #ec4899, #8b5cf6)' }}></div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--capi-navy)' }}>Gestor de Planos y Firmas</h2>
          <p style={{ color: '#64748b', marginBottom: '20px', lineHeight: '1.6' }}>Sube tus proyectos arquitectónicos (EETT, DWG, PDF) listos para licitar a constructoras de la Red Capi.</p>
          
          <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '10px', border: '1px dashed #cbd5e1', marginBottom: '20px', textAlign: 'center' }}>
            <span style={{ fontSize: '2rem' }}>📁</span>
            <p style={{ margin: '5px 0 0 0', color: '#64748b', fontSize: '0.9rem' }}>Arrastra tus archivos aquí</p>
          </div>

          <button style={{
            background: 'var(--capi-gold)', color: 'var(--capi-navy)', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.2s', width: '100%',
            transform: isHovered === 1 ? 'scale(1.02)' : 'scale(1)',
          }}>
            Subir Nuevo Proyecto
          </button>
        </div>

        {/* Asistente Normativo */}
        <div 
          style={cardStyle(2)}
          onMouseEnter={() => setIsHovered(2)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #3b82f6, #0ea5e9)' }}></div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--capi-navy)' }}>Capi IA Normativo</h2>
          <p style={{ color: '#64748b', marginBottom: '20px', lineHeight: '1.6' }}>Consulta al instante la Ordenanza Local de Zapallar o Cachagua sobre rasantes, alturas y coeficientes de constructibilidad.</p>
          
          <button style={{
            background: 'transparent', border: '2px solid #3b82f6', color: '#3b82f6', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s', width: '100%',
          }}>
            Abrir Chat Normativo
          </button>
        </div>

        {/* Directorio de Constructoras */}
        <div 
          style={cardStyle(3)}
          onMouseEnter={() => setIsHovered(3)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #10b981, #059669)' }}></div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--capi-navy)' }}>Directorio de Constructoras</h2>
          <p style={{ color: '#64748b', marginBottom: '25px', lineHeight: '1.6' }}>Encuentra constructoras certificadas en la zona para ejecutar tus diseños con altos estándares de calidad.</p>
          
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <span style={{ background: '#f0fdf4', color: '#166534', padding: '5px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>⭐ Constructora Pacífico</span>
            <span style={{ background: '#f0fdf4', color: '#166534', padding: '5px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>⭐ Z&C SpA</span>
          </div>

          <button style={{
            background: '#10b981', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.2s', width: '100%',
            transform: isHovered === 3 ? 'scale(1.02)' : 'scale(1)',
          }}>
            Ver Empresas Aliadas
          </button>
        </div>

      </div>
    </div>
  );
}
