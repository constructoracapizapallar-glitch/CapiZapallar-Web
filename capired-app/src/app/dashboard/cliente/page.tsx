"use client";

import React from 'react';
import { Home, Clock, FileCheck2, Wrench, CheckCircle2 } from 'lucide-react';

export default function ClienteDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#0F172A', margin: '0 0 4px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>Mi Hogar</h2>
          <p style={{ margin: 0, color: '#64748B', fontSize: '0.85rem' }}>Supervisa el avance de tus obras de forma transparente.</p>
        </div>
        <button style={{ 
          background: '#0F172A', 
          color: '#D4AF37', 
          border: '1px solid #0F172A', 
          padding: '8px 16px', 
          borderRadius: '6px', 
          fontWeight: '600', 
          fontSize: '0.85rem',
          cursor: 'pointer', 
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          transition: 'all 0.2s',
        }}>
          <Wrench size={16} /> Solicitar Servicio
        </button>
      </div>

      {/* PROYECTO PRINCIPAL (TIMELINE COMPACTO) */}
      <div style={{ background: '#FFFFFF', borderRadius: '8px', border: '1px solid #E2E8F0', padding: '24px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', background: '#F8FAFC', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #E2E8F0' }}>
              <Home size={20} color="#0F172A" />
            </div>
            <div>
              <h3 style={{ margin: '0 0 2px 0', fontSize: '1.15rem', color: '#0F172A', fontWeight: '700' }}>Remodelación Baño Principal</h3>
              <p style={{ margin: 0, color: '#64748B', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={12} /> Contratista: Maestro Juan Pérez
              </p>
            </div>
          </div>
          <span style={{ border: '1px solid #E2E8F0', color: '#0F172A', padding: '4px 10px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>En Proceso</span>
        </div>

        {/* Barra de Progreso Global */}
        <div style={{ marginBottom: '30px', background: '#F8FAFC', padding: '16px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.85rem', color: '#0F172A', fontWeight: '700' }}>
            <span>Avance General del Proyecto</span>
            <span style={{ color: '#0F172A' }}>65%</span>
          </div>
          <div style={{ width: '100%', background: '#E2E8F0', borderRadius: '4px', height: '6px', overflow: 'hidden' }}>
            <div style={{ width: '65%', background: '#D4AF37', height: '100%', borderRadius: '4px' }}></div>
          </div>
        </div>

        {/* TIMELINE VERTICAL */}
        <div style={{ position: 'relative', paddingLeft: '24px', marginLeft: '8px' }}>
          {/* Línea vertical base */}
          <div style={{ position: 'absolute', left: '0px', top: '5px', bottom: '20px', width: '2px', background: '#E2E8F0' }}></div>
          
          {/* Hito 1 (Completado) */}
          <div style={{ position: 'relative', marginBottom: '24px' }}>
            <div style={{ position: 'absolute', left: '-29px', top: '2px', background: '#FFFFFF' }}>
              <CheckCircle2 size={16} color="#10B981" />
            </div>
            <h4 style={{ margin: '0 0 2px 0', color: '#0F172A', fontSize: '0.95rem', fontWeight: '600' }}>Desarme y Retiro de Escombros</h4>
            <p style={{ margin: 0, color: '#64748B', fontSize: '0.8rem' }}>Completado el 12 de Junio.</p>
          </div>

          {/* Hito 2 (Completado) */}
          <div style={{ position: 'relative', marginBottom: '24px' }}>
            <div style={{ position: 'absolute', left: '-29px', top: '2px', background: '#FFFFFF' }}>
              <CheckCircle2 size={16} color="#10B981" />
            </div>
            <h4 style={{ margin: '0 0 2px 0', color: '#0F172A', fontSize: '0.95rem', fontWeight: '600' }}>Instalación de Red de Agua</h4>
            <p style={{ margin: 0, color: '#64748B', fontSize: '0.8rem' }}>Completado el 15 de Junio. Prueba de presión superada.</p>
          </div>

          {/* Hito 3 (En Progreso) */}
          <div style={{ position: 'relative', marginBottom: '24px' }}>
            <div style={{ position: 'absolute', left: '-28px', top: '4px', width: '14px', height: '14px', background: '#FFFFFF', borderRadius: '50%', border: '3px solid #D4AF37' }}></div>
            <h4 style={{ margin: '0 0 2px 0', color: '#0F172A', fontSize: '0.95rem', fontWeight: '700' }}>Instalación de Cerámicas</h4>
            <p style={{ margin: 0, color: '#0F172A', fontSize: '0.8rem', fontWeight: '500' }}>En ejecución hoy. Faltan terminaciones y fragüe.</p>
            <div style={{ marginTop: '10px', display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '6px 10px', borderRadius: '6px', fontSize: '0.75rem', color: '#0F172A', fontWeight: '600', cursor: 'pointer' }}>
              <FileCheck2 size={14} /> Ver reporte fotográfico
            </div>
          </div>

          {/* Hito 4 (Pendiente) */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '-27px', top: '4px', width: '12px', height: '12px', background: '#E2E8F0', borderRadius: '50%', border: '2px solid #FFFFFF' }}></div>
            <h4 style={{ margin: '0 0 2px 0', color: '#94A3B8', fontSize: '0.95rem', fontWeight: '600' }}>Instalación de Artefactos</h4>
            <p style={{ margin: 0, color: '#94A3B8', fontSize: '0.8rem' }}>Por iniciar (WC, Vanitorio, Grifería).</p>
          </div>

        </div>

      </div>

    </div>
  );
}
