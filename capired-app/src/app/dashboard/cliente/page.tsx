"use client";

import React from 'react';
import { Home, Clock, FileCheck2, Wrench, CheckCircle2 } from 'lucide-react';

export default function ClienteDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '10px' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', color: '#0F172A', margin: '0 0 8px 0', fontWeight: '800', letterSpacing: '-1px' }}>Mi Hogar</h2>
          <p style={{ margin: 0, color: '#64748B', fontSize: '1rem' }}>Supervisa el avance de tus obras de forma transparente.</p>
        </div>
        <button style={{ 
          background: '#0F172A', 
          color: '#FFFFFF', 
          border: 'none', 
          padding: '12px 24px', 
          borderRadius: '10px', 
          fontWeight: '600', 
          cursor: 'pointer', 
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.2s',
          boxShadow: '0 4px 15px rgba(15, 23, 42, 0.2)'
        }}>
          <Wrench size={18} /> Solicitar Servicio
        </button>
      </div>

      {/* PROYECTO PRINCIPAL (TIMELINE SCANDI) */}
      <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '40px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ width: '60px', height: '60px', background: '#F8FAFC', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #E2E8F0' }}>
              <Home size={30} color="#0F172A" />
            </div>
            <div>
              <h3 style={{ margin: '0 0 5px 0', fontSize: '1.5rem', color: '#0F172A', fontWeight: '700' }}>Remodelación Baño Principal</h3>
              <p style={{ margin: 0, color: '#64748B', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={14} /> Contratista: Maestro Juan Pérez
              </p>
            </div>
          </div>
          <span style={{ background: '#EFF6FF', color: '#2563EB', padding: '8px 16px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>En Proceso</span>
        </div>

        {/* Barra de Progreso Global */}
        <div style={{ marginBottom: '60px', background: '#F8FAFC', padding: '24px', borderRadius: '12px', border: '1px solid #F1F5F9' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', fontSize: '0.95rem', color: '#0F172A', fontWeight: '700' }}>
            <span>Avance General del Proyecto</span>
            <span style={{ color: '#2563EB' }}>65%</span>
          </div>
          <div style={{ width: '100%', background: '#E2E8F0', borderRadius: '10px', height: '8px', overflow: 'hidden' }}>
            <div style={{ width: '65%', background: '#2563EB', height: '100%', borderRadius: '10px', transition: 'width 1s ease' }}></div>
          </div>
        </div>

        {/* TIMELINE VERTICAL MINIMALISTA */}
        <div style={{ position: 'relative', paddingLeft: '40px', marginLeft: '10px' }}>
          {/* Línea vertical base */}
          <div style={{ position: 'absolute', left: '11px', top: '5px', bottom: '20px', width: '2px', background: '#E2E8F0' }}></div>
          
          {/* Hito 1 (Completado) */}
          <div style={{ position: 'relative', marginBottom: '40px' }}>
            <div style={{ position: 'absolute', left: '-38px', top: '2px', background: '#FFFFFF' }}>
              <CheckCircle2 size={24} color="#10B981" fill="#D1FAE5" />
            </div>
            <h4 style={{ margin: '0 0 5px 0', color: '#0F172A', fontSize: '1.1rem', fontWeight: '700' }}>Desarme y Retiro de Escombros</h4>
            <p style={{ margin: 0, color: '#64748B', fontSize: '0.9rem' }}>Completado el 12 de Junio.</p>
          </div>

          {/* Hito 2 (Completado) */}
          <div style={{ position: 'relative', marginBottom: '40px' }}>
            <div style={{ position: 'absolute', left: '-38px', top: '2px', background: '#FFFFFF' }}>
              <CheckCircle2 size={24} color="#10B981" fill="#D1FAE5" />
            </div>
            <h4 style={{ margin: '0 0 5px 0', color: '#0F172A', fontSize: '1.1rem', fontWeight: '700' }}>Instalación de Red de Agua</h4>
            <p style={{ margin: 0, color: '#64748B', fontSize: '0.9rem' }}>Completado el 15 de Junio. Prueba de presión superada.</p>
          </div>

          {/* Hito 3 (En Progreso) */}
          <div style={{ position: 'relative', marginBottom: '40px' }}>
            <div style={{ position: 'absolute', left: '-37px', top: '4px', width: '20px', height: '20px', background: '#FFFFFF', borderRadius: '50%', border: '4px solid #2563EB', boxShadow: '0 0 0 4px rgba(37, 99, 235, 0.1)' }}></div>
            <h4 style={{ margin: '0 0 5px 0', color: '#2563EB', fontSize: '1.1rem', fontWeight: '700' }}>Instalación de Cerámicas</h4>
            <p style={{ margin: 0, color: '#0F172A', fontSize: '0.9rem', fontWeight: '500' }}>En ejecución hoy. Faltan terminaciones y fragüe.</p>
            <div style={{ marginTop: '15px', display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '8px 12px', borderRadius: '8px', fontSize: '0.8rem', color: '#475569', fontWeight: '600', cursor: 'pointer' }}>
              <FileCheck2 size={16} /> Ver reporte fotográfico
            </div>
          </div>

          {/* Hito 4 (Pendiente) */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '-35px', top: '4px', width: '16px', height: '16px', background: '#E2E8F0', borderRadius: '50%', border: '3px solid #FFFFFF' }}></div>
            <h4 style={{ margin: '0 0 5px 0', color: '#94A3B8', fontSize: '1.1rem', fontWeight: '600' }}>Instalación de Artefactos</h4>
            <p style={{ margin: 0, color: '#94A3B8', fontSize: '0.9rem' }}>Por iniciar (WC, Vanitorio, Grifería).</p>
          </div>

        </div>

      </div>

    </div>
  );
}
