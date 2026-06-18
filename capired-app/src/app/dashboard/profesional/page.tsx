"use client";

import React from 'react';
import { UploadCloud, Folder, File, Image as ImageIcon, Search, Filter } from 'lucide-react';

export default function ProfesionalDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '10px', borderBottom: '1px solid #E7E5E4' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#292524', margin: '0 0 4px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>Drive de Proyectos</h2>
          <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem' }}>Repositorio seguro de planimetrías y EETT.</p>
        </div>
        <button style={{ 
          background: '#292524', 
          color: '#FAFAF9', 
          border: 'none', 
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
          <UploadCloud size={16} /> Subir Documento
        </button>
      </div>

      {/* FILTROS Y BÚSQUEDA */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <div style={{ 
          flex: 1, 
          background: '#FFFFFF', 
          border: '1px solid #E7E5E4', 
          borderRadius: '6px', 
          padding: '8px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Search size={16} color="#A8A29E" />
          <input 
            type="text" 
            placeholder="Buscar carpetas o archivos..." 
            style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.85rem', color: '#292524' }} 
          />
        </div>
        <button style={{
          background: '#FFFFFF',
          border: '1px solid #E7E5E4',
          padding: '8px 16px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: '#292524',
          fontSize: '0.85rem',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
          <Filter size={16} /> Filtros
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* CARPETAS */}
        <div>
          <h3 style={{ margin: '0 0 10px 0', color: '#292524', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '700' }}>Carpetas Recientes</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '15px' }}>
            
            <div style={{ border: '1px solid #E7E5E4', borderRadius: '8px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', background: '#FFFFFF' }}>
              <div style={{ background: '#F5F5F4', padding: '8px', borderRadius: '6px', border: '1px solid #E7E5E4' }}>
                <Folder size={18} color="#78716C" />
              </div>
              <div>
                <h4 style={{ margin: '0 0 2px 0', color: '#292524', fontSize: '0.9rem', fontWeight: '600' }}>Casa Zapallar Sur</h4>
                <p style={{ margin: 0, color: '#78716C', fontSize: '0.75rem' }}>4 Archivos • Modificado hoy</p>
              </div>
            </div>
            
            <div style={{ border: '1px solid #E7E5E4', borderRadius: '8px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', background: '#FFFFFF' }}>
              <div style={{ background: '#F5F5F4', padding: '8px', borderRadius: '6px', border: '1px solid #E7E5E4' }}>
                <Folder size={18} color="#292524" />
              </div>
              <div>
                <h4 style={{ margin: '0 0 2px 0', color: '#292524', fontSize: '0.9rem', fontWeight: '600' }}>Local Comercial</h4>
                <p style={{ margin: 0, color: '#78716C', fontSize: '0.75rem' }}>12 Archivos • Hace 2 días</p>
              </div>
            </div>

          </div>
        </div>

        {/* ARCHIVOS RECIENTES */}
        <div>
          <h3 style={{ margin: '0 0 10px 0', color: '#292524', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '700' }}>Archivos Subidos</h3>
          <div style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '8px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ background: '#F5F5F4', borderBottom: '1px solid #E7E5E4' }}>
                  <th style={{ padding: '10px 16px', color: '#78716C', fontWeight: '600' }}>Nombre</th>
                  <th style={{ padding: '10px 16px', color: '#78716C', fontWeight: '600' }}>Tamaño</th>
                  <th style={{ padding: '10px 16px', color: '#78716C', fontWeight: '600' }}>Subido</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #F5F5F4' }}>
                  <td style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <File size={16} color="#292524" />
                    <span style={{ color: '#292524', fontWeight: '500' }}>EETT_Arquitectura.pdf</span>
                  </td>
                  <td style={{ padding: '10px 16px', color: '#78716C' }}>2.4 MB</td>
                  <td style={{ padding: '10px 16px', color: '#78716C' }}>Hace 2 horas</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #F5F5F4' }}>
                  <td style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <File size={16} color="#292524" />
                    <span style={{ color: '#292524', fontWeight: '500' }}>Plano_Planta_v2.dwg</span>
                  </td>
                  <td style={{ padding: '10px 16px', color: '#78716C' }}>15 MB</td>
                  <td style={{ padding: '10px 16px', color: '#78716C' }}>Ayer</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ImageIcon size={16} color="#78716C" />
                    <span style={{ color: '#292524', fontWeight: '500' }}>Render_Fachada.png</span>
                  </td>
                  <td style={{ padding: '10px 16px', color: '#78716C' }}>4.1 MB</td>
                  <td style={{ padding: '10px 16px', color: '#78716C' }}>Hace 1 semana</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
}
