"use client";

import React from 'react';
import { PackagePlus, Search, Filter, MoreHorizontal, ArrowUpRight, Hammer, Wrench, Zap } from 'lucide-react';

export default function FerreteriaDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '10px', borderBottom: '1px solid #E7E5E4' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#292524', margin: '0 0 4px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>Catálogo B2B</h2>
          <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem' }}>Gestiona tus productos publicados para la red de constructoras.</p>
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
          <PackagePlus size={16} /> Agregar Producto
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
            placeholder="Buscar por SKU, nombre o categoría..." 
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

      {/* E-COMMERCE PRODUCT GRID (Compacto y Corporativo) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '15px' }}>
        
        {/* Producto 1 */}
        <div style={{ 
          background: '#FFFFFF', 
          border: '1px solid #E7E5E4', 
          borderRadius: '8px', 
          overflow: 'hidden', 
          transition: 'all 0.2s ease',
        }}>
          {/* Header Card Compacto */}
          <div style={{ background: '#F5F5F4', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E7E5E4' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Hammer size={14} color="#292524" />
              <span style={{ color: '#292524', fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.5px' }}>OBRA GRUESA</span>
            </div>
            <button style={{ background: 'transparent', border: 'none', color: '#A8A29E', cursor: 'pointer', padding: 0 }}><MoreHorizontal size={16} /></button>
          </div>
          
          {/* Details */}
          <div style={{ padding: '16px' }}>
            <h4 style={{ margin: '0 0 4px 0', color: '#292524', fontSize: '0.95rem', fontWeight: '700' }}>Cemento Melón Especial</h4>
            <p style={{ margin: '0 0 12px 0', color: '#78716C', fontSize: '0.75rem' }}>Saco 25kg • SKU: MEL-025</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
              <div>
                <span style={{ display: 'block', color: '#78716C', fontSize: '0.7rem', textTransform: 'uppercase' }}>Stock</span>
                <span style={{ fontWeight: '600', color: '#292524', fontSize: '0.85rem' }}>150 un.</span>
              </div>
              <div>
                <span style={{ display: 'block', color: '#78716C', fontSize: '0.7rem', textTransform: 'uppercase' }}>Precio B2B</span>
                <span style={{ fontWeight: '700', color: '#292524', fontSize: '0.95rem' }}>$4.500</span>
              </div>
            </div>

            <button style={{ width: '100%', background: '#F5F5F4', border: '1px solid #E7E5E4', padding: '6px', borderRadius: '4px', color: '#292524', fontWeight: '600', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', fontSize: '0.75rem', cursor: 'pointer' }}>
              Ver Analíticas <ArrowUpRight size={12} />
            </button>
          </div>
        </div>

        {/* Producto 2 */}
        <div style={{ 
          background: '#FFFFFF', 
          border: '1px solid #E7E5E4', 
          borderRadius: '8px', 
          overflow: 'hidden', 
          transition: 'all 0.2s ease',
        }}>
          {/* Header Card Compacto */}
          <div style={{ background: '#F5F5F4', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E7E5E4' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Wrench size={14} color="#292524" />
              <span style={{ color: '#292524', fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.5px' }}>HERRAMIENTAS</span>
            </div>
            <button style={{ background: 'transparent', border: 'none', color: '#A8A29E', cursor: 'pointer', padding: 0 }}><MoreHorizontal size={16} /></button>
          </div>
          
          {/* Details */}
          <div style={{ padding: '16px' }}>
            <h4 style={{ margin: '0 0 4px 0', color: '#292524', fontSize: '0.95rem', fontWeight: '700' }}>Llave Francesa 12"</h4>
            <p style={{ margin: '0 0 12px 0', color: '#78716C', fontSize: '0.75rem' }}>Truper Profesional • SKU: TRP-112</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
              <div>
                <span style={{ display: 'block', color: '#78716C', fontSize: '0.7rem', textTransform: 'uppercase' }}>Stock</span>
                <span style={{ fontWeight: '600', color: '#292524', fontSize: '0.85rem' }}>12 un.</span>
              </div>
              <div>
                <span style={{ display: 'block', color: '#78716C', fontSize: '0.7rem', textTransform: 'uppercase' }}>Precio B2B</span>
                <span style={{ fontWeight: '700', color: '#292524', fontSize: '0.95rem' }}>$12.990</span>
              </div>
            </div>

            <button style={{ width: '100%', background: '#F5F5F4', border: '1px solid #E7E5E4', padding: '6px', borderRadius: '4px', color: '#292524', fontWeight: '600', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', fontSize: '0.75rem', cursor: 'pointer' }}>
              Ver Analíticas <ArrowUpRight size={12} />
            </button>
          </div>
        </div>

        {/* Producto 3 */}
        <div style={{ 
          background: '#FFFFFF', 
          border: '1px solid #E7E5E4', 
          borderRadius: '8px', 
          overflow: 'hidden', 
          transition: 'all 0.2s ease',
        }}>
          {/* Header Card Compacto */}
          <div style={{ background: '#F5F5F4', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E7E5E4' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Zap size={14} color="#78716C" />
              <span style={{ color: '#292524', fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.5px' }}>ELÉCTRICO</span>
            </div>
            <button style={{ background: 'transparent', border: 'none', color: '#A8A29E', cursor: 'pointer', padding: 0 }}><MoreHorizontal size={16} /></button>
          </div>
          
          {/* Details */}
          <div style={{ padding: '16px' }}>
            <h4 style={{ margin: '0 0 4px 0', color: '#292524', fontSize: '0.95rem', fontWeight: '700' }}>Cable THHN 2.5mm</h4>
            <p style={{ margin: '0 0 12px 0', color: '#78716C', fontSize: '0.75rem' }}>Rollo 100m Rojo • SKU: CAB-25R</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
              <div>
                <span style={{ display: 'block', color: '#78716C', fontSize: '0.7rem', textTransform: 'uppercase' }}>Stock</span>
                <span style={{ fontWeight: '700', color: '#292524', fontSize: '0.85rem' }}>2 un. (Bajo)</span>
              </div>
              <div>
                <span style={{ display: 'block', color: '#78716C', fontSize: '0.7rem', textTransform: 'uppercase' }}>Precio B2B</span>
                <span style={{ fontWeight: '700', color: '#292524', fontSize: '0.95rem' }}>$45.000</span>
              </div>
            </div>

            <button style={{ width: '100%', background: '#F5F5F4', border: '1px solid #E7E5E4', padding: '6px', borderRadius: '4px', color: '#292524', fontWeight: '600', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', fontSize: '0.75rem', cursor: 'pointer' }}>
              Ver Analíticas <ArrowUpRight size={12} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
