"use client";

import React from 'react';
import { UploadCloud, Folder, File, Image as ImageIcon, Search, Filter } from 'lucide-react';

export default function ProfesionalDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '10px' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', color: '#0F172A', margin: '0 0 8px 0', fontWeight: '800', letterSpacing: '-1px' }}>Drive de Proyectos</h2>
          <p style={{ margin: 0, color: '#64748B', fontSize: '1rem' }}>Repositorio seguro de planimetrías y EETT.</p>
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
          <UploadCloud size={18} /> Subir Documento
        </button>
      </div>

      {/* FILTROS Y BÚSQUEDA */}
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <div style={{ 
          flex: 1, 
          background: '#FFFFFF', 
          border: '1px solid #E2E8F0', 
          borderRadius: '10px', 
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <Search size={20} color="#94A3B8" />
          <input 
            type="text" 
            placeholder="Buscar carpetas o archivos..." 
            style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.95rem', color: '#0F172A' }} 
          />
        </div>
        <button style={{
          background: '#FFFFFF',
          border: '1px solid #E2E8F0',
          padding: '12px 20px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#0F172A',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
          <Filter size={18} /> Filtros
        </button>
      </div>

      <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '40px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
        
        {/* CARPETAS */}
        <h3 style={{ margin: '0 0 20px 0', color: '#64748B', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>Carpetas Recientes</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginBottom: '50px' }}>
          
          <div style={{ border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px', display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer', transition: 'all 0.2s', background: '#F8FAFC' }}>
            <div style={{ background: '#E2E8F0', padding: '12px', borderRadius: '10px' }}>
              <Folder size={28} color="#0F172A" />
            </div>
            <div>
              <h4 style={{ margin: '0 0 4px 0', color: '#0F172A', fontSize: '1.05rem', fontWeight: '700' }}>Casa Zapallar Sur</h4>
              <p style={{ margin: 0, color: '#64748B', fontSize: '0.85rem' }}>4 Archivos • Modificado hoy</p>
            </div>
          </div>
          
          <div style={{ border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px', display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer', transition: 'all 0.2s', background: '#FFFFFF' }}>
            <div style={{ background: '#F1F5F9', padding: '12px', borderRadius: '10px' }}>
              <Folder size={28} color="#64748B" />
            </div>
            <div>
              <h4 style={{ margin: '0 0 4px 0', color: '#475569', fontSize: '1.05rem', fontWeight: '700' }}>Local Comercial</h4>
              <p style={{ margin: 0, color: '#94A3B8', fontSize: '0.85rem' }}>12 Archivos • Hace 2 días</p>
            </div>
          </div>

        </div>

        {/* ARCHIVOS RECIENTES */}
        <h3 style={{ margin: '0 0 20px 0', color: '#64748B', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>Archivos Subidos</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
          
          <div style={{ border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s', background: '#FFFFFF', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.02)' }}>
            <div style={{ height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
              <File size={48} color="#2563EB" strokeWidth={1.5} />
            </div>
            <h4 style={{ margin: '0 0 6px 0', color: '#0F172A', fontSize: '0.95rem', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>EETT_Arquitectura.pdf</h4>
            <p style={{ margin: 0, color: '#64748B', fontSize: '0.8rem' }}>Hace 2 horas • 2.4 MB</p>
          </div>

          <div style={{ border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s', background: '#FFFFFF', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.02)' }}>
            <div style={{ height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
              <File size={48} color="#D97706" strokeWidth={1.5} />
            </div>
            <h4 style={{ margin: '0 0 6px 0', color: '#0F172A', fontSize: '0.95rem', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Plano_Planta_v2.dwg</h4>
            <p style={{ margin: 0, color: '#64748B', fontSize: '0.8rem' }}>Ayer • 15 MB</p>
          </div>
          
          <div style={{ border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s', background: '#FFFFFF', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.02)' }}>
            <div style={{ height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
              <ImageIcon size={48} color="#10B981" strokeWidth={1.5} />
            </div>
            <h4 style={{ margin: '0 0 6px 0', color: '#0F172A', fontSize: '0.95rem', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Render_Fachada.png</h4>
            <p style={{ margin: 0, color: '#64748B', fontSize: '0.8rem' }}>Hace 1 semana • 4.1 MB</p>
          </div>

        </div>

      </div>

    </div>
  );
}
