"use client";

import React from 'react';
import { FileText, Plus, Search, Filter, Eye, MoreHorizontal } from 'lucide-react';

export default function ConstructoraLicitaciones() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '10px', borderBottom: '1px solid #E7E5E4' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#292524', margin: '0 0 4px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>Licitaciones Activas</h2>
          <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem' }}>Gestiona los concursos y recibe propuestas de contratistas.</p>
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
        }}>
          <Plus size={16} /> Crear Licitación
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
            placeholder="Buscar licitación por nombre o ID..." 
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

      <div style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '8px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ background: '#F5F5F4', borderBottom: '1px solid #E7E5E4' }}>
              <th style={{ padding: '12px 16px', color: '#78716C', fontWeight: '600' }}>Proyecto / Obra</th>
              <th style={{ padding: '12px 16px', color: '#78716C', fontWeight: '600' }}>Especialidad</th>
              <th style={{ padding: '12px 16px', color: '#78716C', fontWeight: '600' }}>Presupuesto Estimado</th>
              <th style={{ padding: '12px 16px', color: '#78716C', fontWeight: '600', textAlign: 'center' }}>Propuestas</th>
              <th style={{ padding: '12px 16px', color: '#78716C', fontWeight: '600' }}>Estado</th>
              <th style={{ padding: '12px 16px', color: '#78716C', fontWeight: '600', textAlign: 'right' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #F5F5F4', transition: 'background 0.2s', cursor: 'pointer' }}>
              <td style={{ padding: '12px 16px' }}>
                <p style={{ margin: 0, fontWeight: '700', color: '#292524' }}>Techumbre Casa Cachagua</p>
                <p style={{ margin: 0, fontSize: '0.75rem', color: '#78716C' }}>ID: LIC-2026-001</p>
              </td>
              <td style={{ padding: '12px 16px', color: '#57534E', fontWeight: '500' }}>Carpintería / Estructura</td>
              <td style={{ padding: '12px 16px', color: '#292524', fontWeight: '600' }}>$2.5M - $3.2M</td>
              <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                <span style={{ background: '#292524', color: '#FAFAF9', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700' }}>4</span>
              </td>
              <td style={{ padding: '12px 16px' }}>
                <span style={{ border: '1px solid #10B981', color: '#10B981', background: '#ECFDF5', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: '700' }}>ABIERTA</span>
              </td>
              <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                <button style={{ background: 'transparent', border: 'none', color: '#78716C', cursor: 'pointer' }}><Eye size={18} /></button>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #F5F5F4', transition: 'background 0.2s', cursor: 'pointer' }}>
              <td style={{ padding: '12px 16px' }}>
                <p style={{ margin: 0, fontWeight: '700', color: '#292524' }}>Excavación y Radier Zapallar</p>
                <p style={{ margin: 0, fontSize: '0.75rem', color: '#78716C' }}>ID: LIC-2026-002</p>
              </td>
              <td style={{ padding: '12px 16px', color: '#57534E', fontWeight: '500' }}>Obra Gruesa</td>
              <td style={{ padding: '12px 16px', color: '#292524', fontWeight: '600' }}>$5.0M - $6.5M</td>
              <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                <span style={{ background: '#E7E5E4', color: '#57534E', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700' }}>12</span>
              </td>
              <td style={{ padding: '12px 16px' }}>
                <span style={{ border: '1px solid #E7E5E4', color: '#78716C', background: '#F5F5F4', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: '700' }}>CERRADA</span>
              </td>
              <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                <button style={{ background: 'transparent', border: 'none', color: '#78716C', cursor: 'pointer' }}><Eye size={18} /></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
