"use client";

import React, { useState } from 'react';
import ProfileToggle from '../../components/ProfileToggle';

export default function ConstructoraDashboard() {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [mode, setMode] = useState<'proveedor' | 'cliente'>('proveedor');

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
      
      <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--capi-navy)', marginBottom: '10px' }}>
            Centro de Operaciones
          </h1>
          <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Gestiona tus licitaciones y subcontratos desde un solo lugar.</p>
        </div>
        
        {/* Toggle de Modo Operativo */}
        <ProfileToggle mode={mode} setMode={setMode} labelProveedor="🏗️ Modo Contratista" labelCliente="👤 Modo Mandante (Cliente)" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        
        {/* VISTA CONTRATISTA (PROVEEDOR) */}
        {mode === 'proveedor' && (
          <>
            <div style={cardStyle(1)} onMouseEnter={() => setIsHovered(1)} onMouseLeave={() => setIsHovered(null)}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #f59e0b, #ef4444)' }}></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <span style={{ background: '#fef3c7', color: '#b45309', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>2 NUEVAS LICITACIONES</span>
              </div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--capi-navy)' }}>Licitaciones de Clientes</h2>
              <p style={{ color: '#64748b', marginBottom: '20px', lineHeight: '1.6' }}>Participa en proyectos de arquitectura listos para construir solicitados por clientes de la red.</p>
              <button style={{ background: 'var(--capi-gold)', color: 'var(--capi-navy)', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.2s', width: '100%', transform: isHovered === 1 ? 'scale(1.02)' : 'scale(1)' }}>
                Ver Licitaciones Activas
              </button>
            </div>

            <div style={cardStyle(2)} onMouseEnter={() => setIsHovered(2)} onMouseLeave={() => setIsHovered(null)}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #3b82f6, #0ea5e9)' }}></div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--capi-navy)' }}>Mis Obras Adjudicadas</h2>
              <p style={{ color: '#64748b', marginBottom: '20px', lineHeight: '1.6' }}>Sube estados de avance y cobra los hitos garantizados de las obras que estás construyendo.</p>
              <button style={{ background: 'transparent', border: '2px solid #3b82f6', color: '#3b82f6', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s', width: '100%' }}>
                Ver Mis Obras
              </button>
            </div>
          </>
        )}

        {/* VISTA MANDANTE (CLIENTE) */}
        {mode === 'cliente' && (
          <>
            <div style={cardStyle(3)} onMouseEnter={() => setIsHovered(3)} onMouseLeave={() => setIsHovered(null)}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #10b981, #059669)' }}></div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--capi-navy)' }}>Reclutamiento y Subcontratos</h2>
              <p style={{ color: '#64748b', marginBottom: '25px', lineHeight: '1.6' }}>Publica requerimientos específicos para que Maestros y Especialistas de la red tomen tus subcontratos.</p>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <span style={{ background: '#f0fdf4', color: '#166534', padding: '5px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>Carpinteros</span>
                <span style={{ background: '#f0fdf4', color: '#166534', padding: '5px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>Gasfiters SEC</span>
              </div>
              <button style={{ background: '#10b981', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.2s', width: '100%', transform: isHovered === 3 ? 'scale(1.02)' : 'scale(1)' }}>
                Buscar Especialistas
              </button>
            </div>

            <div style={cardStyle(4)} onMouseEnter={() => setIsHovered(4)} onMouseLeave={() => setIsHovered(null)}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #8b5cf6, #6d28d9)' }}></div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--capi-navy)' }}>Adquisiciones B2B</h2>
              <p style={{ color: '#64748b', marginBottom: '20px', lineHeight: '1.6' }}>Como cliente de la red, cotiza tu lista de materiales directo con las ferreterías asociadas para obtener precio mayorista.</p>
              <button style={{ background: 'var(--capi-navy)', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.2s', width: '100%', transform: isHovered === 4 ? 'scale(1.02)' : 'scale(1)' }}>
                Cotizar Lista de Materiales
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
