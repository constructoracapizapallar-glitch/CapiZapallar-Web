"use client";

import React from 'react';
import { PackagePlus, Search, Filter, MoreHorizontal, ArrowUpRight, Hammer, Lightbulb, Zap } from 'lucide-react';

export default function FerreteriaDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '10px' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', color: '#0F172A', margin: '0 0 8px 0', fontWeight: '800', letterSpacing: '-1px' }}>Catálogo B2B</h2>
          <p style={{ margin: 0, color: '#64748B', fontSize: '1rem' }}>Gestiona tus productos publicados para la red de constructoras.</p>
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
          <PackagePlus size={18} /> Agregar Producto
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
            placeholder="Buscar por SKU, nombre o categoría..." 
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

      {/* E-COMMERCE PRODUCT GRID (Premium Scandi) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' }}>
        
        {/* Producto 1 */}
        <div style={{ 
          background: '#FFFFFF', 
          border: '1px solid #E2E8F0', 
          borderRadius: '16px', 
          overflow: 'hidden', 
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)'
        }}>
          {/* Image Placeholder */}
          <div style={{ background: '#F8FAFC', height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', borderBottom: '1px solid #F1F5F9' }}>
            <div style={{ background: '#E2E8F0', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Hammer size={32} color="#64748B" />
            </div>
            <span style={{ position: 'absolute', top: '15px', right: '15px', background: '#F1F5F9', color: '#475569', padding: '6px 12px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.5px' }}>OBRA GRUESA</span>
          </div>
          {/* Details */}
          <div style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
              <div>
                <h4 style={{ margin: '0 0 5px 0', color: '#0F172A', fontSize: '1.15rem', fontWeight: '700' }}>Cemento Melón Especial</h4>
                <p style={{ margin: 0, color: '#64748B', fontSize: '0.85rem' }}>Saco 25kg • SKU: MEL-025</p>
              </div>
              <button style={{ background: 'transparent', border: 'none', color: '#94A3B8', cursor: 'pointer' }}><MoreHorizontal size={20} /></button>
            </div>
            
            <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '12px', marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ color: '#64748B', fontSize: '0.85rem' }}>Stock Disponible</span>
                <span style={{ fontWeight: '600', color: '#0F172A', fontSize: '0.9rem' }}>150 un.</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#64748B', fontSize: '0.85rem' }}>Precio B2B</span>
                <span style={{ fontWeight: '800', color: '#0F172A', fontSize: '1.1rem' }}>$4.500</span>
              </div>
            </div>

            <button style={{ width: '100%', background: 'transparent', border: '1px solid #E2E8F0', padding: '10px', borderRadius: '8px', color: '#0F172A', fontWeight: '600', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontSize: '0.9rem', cursor: 'pointer' }}>
              Ver Analíticas <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Producto 2 */}
        <div style={{ 
          background: '#FFFFFF', 
          border: '1px solid #E2E8F0', 
          borderRadius: '16px', 
          overflow: 'hidden', 
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)'
        }}>
          {/* Image Placeholder */}
          <div style={{ background: '#F8FAFC', height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', borderBottom: '1px solid #F1F5F9' }}>
            <div style={{ background: '#E2E8F0', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Hammer size={32} color="#64748B" />
            </div>
            <span style={{ position: 'absolute', top: '15px', right: '15px', background: '#F1F5F9', color: '#475569', padding: '6px 12px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.5px' }}>HERRAMIENTAS</span>
          </div>
          {/* Details */}
          <div style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
              <div>
                <h4 style={{ margin: '0 0 5px 0', color: '#0F172A', fontSize: '1.15rem', fontWeight: '700' }}>Llave Francesa 12"</h4>
                <p style={{ margin: 0, color: '#64748B', fontSize: '0.85rem' }}>Truper Profesional • SKU: TRP-112</p>
              </div>
              <button style={{ background: 'transparent', border: 'none', color: '#94A3B8', cursor: 'pointer' }}><MoreHorizontal size={20} /></button>
            </div>
            
            <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '12px', marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ color: '#64748B', fontSize: '0.85rem' }}>Stock Disponible</span>
                <span style={{ fontWeight: '600', color: '#0F172A', fontSize: '0.9rem' }}>12 un.</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#64748B', fontSize: '0.85rem' }}>Precio B2B</span>
                <span style={{ fontWeight: '800', color: '#0F172A', fontSize: '1.1rem' }}>$12.990</span>
              </div>
            </div>

            <button style={{ width: '100%', background: 'transparent', border: '1px solid #E2E8F0', padding: '10px', borderRadius: '8px', color: '#0F172A', fontWeight: '600', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontSize: '0.9rem', cursor: 'pointer' }}>
              Ver Analíticas <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Producto 3 */}
        <div style={{ 
          background: '#FFFFFF', 
          border: '1px solid #E2E8F0', 
          borderRadius: '16px', 
          overflow: 'hidden', 
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)'
        }}>
          {/* Image Placeholder */}
          <div style={{ background: '#FEF2F2', height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', borderBottom: '1px solid #FEE2E2' }}>
            <div style={{ background: '#FECACA', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={32} color="#DC2626" />
            </div>
            <span style={{ position: 'absolute', top: '15px', right: '15px', background: '#F1F5F9', color: '#475569', padding: '6px 12px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.5px' }}>ELÉCTRICO</span>
          </div>
          {/* Details */}
          <div style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
              <div>
                <h4 style={{ margin: '0 0 5px 0', color: '#0F172A', fontSize: '1.15rem', fontWeight: '700' }}>Cable THHN 2.5mm</h4>
                <p style={{ margin: 0, color: '#64748B', fontSize: '0.85rem' }}>Rollo 100m Rojo • SKU: CAB-25R</p>
              </div>
              <button style={{ background: 'transparent', border: 'none', color: '#94A3B8', cursor: 'pointer' }}><MoreHorizontal size={20} /></button>
            </div>
            
            <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '12px', marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ color: '#64748B', fontSize: '0.85rem' }}>Stock Disponible</span>
                <span style={{ fontWeight: '700', color: '#DC2626', fontSize: '0.9rem' }}>2 un. (Bajo)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#64748B', fontSize: '0.85rem' }}>Precio B2B</span>
                <span style={{ fontWeight: '800', color: '#0F172A', fontSize: '1.1rem' }}>$45.000</span>
              </div>
            </div>

            <button style={{ width: '100%', background: 'transparent', border: '1px solid #E2E8F0', padding: '10px', borderRadius: '8px', color: '#0F172A', fontWeight: '600', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontSize: '0.9rem', cursor: 'pointer' }}>
              Ver Analíticas <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
