"use client";

import React, { useState } from 'react';
import { Plus, Search, Building2, HardHat, FileText, CheckCircle2, CircleDashed, Filter } from 'lucide-react';

export default function ConstructoraDashboard() {
  const [activeTab, setActiveTab] = useState('kanban');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#0F172A', margin: '0 0 4px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>Obras Activas</h2>
          <p style={{ margin: 0, color: '#64748B', fontSize: '0.85rem' }}>Visión centralizada de todos tus proyectos en ejecución.</p>
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
          <Plus size={16} /> Nueva Obra
        </button>
      </div>

      {/* KPI CARDS (Compact) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
        {[
          { label: 'Obras en Curso', value: '4', icon: <Building2 size={18} color="#0F172A" /> },
          { label: 'Contratistas', value: '12', icon: <HardHat size={18} color="#0F172A" /> },
          { label: 'Documentos', value: '38', icon: <FileText size={18} color="#0F172A" /> },
          { label: 'Avance Promedio', value: '65%', icon: <CircleDashed size={18} color="#D4AF37" /> },
        ].map((kpi, idx) => (
          <div key={idx} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <p style={{ margin: '0 0 2px 0', fontSize: '0.7rem', color: '#64748B', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{kpi.label}</p>
              <h3 style={{ margin: 0, fontSize: '1.5rem', color: '#0F172A', fontWeight: '800' }}>{kpi.value}</h3>
            </div>
            <div style={{ background: '#F8FAFC', padding: '8px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
              {kpi.icon}
            </div>
          </div>
        ))}
      </div>

      {/* TABS & FILTERS */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E2E8F0', paddingBottom: '10px' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <button 
            onClick={() => setActiveTab('kanban')}
            style={{ background: 'none', border: 'none', padding: 0, fontSize: '0.9rem', fontWeight: activeTab === 'kanban' ? '700' : '500', color: activeTab === 'kanban' ? '#0F172A' : '#64748B', cursor: 'pointer', position: 'relative' }}
          >
            Vista Kanban
            {activeTab === 'kanban' && <div style={{ position: 'absolute', bottom: '-11px', left: 0, width: '100%', height: '2px', background: '#0F172A' }}></div>}
          </button>
          <button 
            onClick={() => setActiveTab('lista')}
            style={{ background: 'none', border: 'none', padding: 0, fontSize: '0.9rem', fontWeight: activeTab === 'lista' ? '700' : '500', color: activeTab === 'lista' ? '#0F172A' : '#64748B', cursor: 'pointer', position: 'relative' }}
          >
            Vista Lista
            {activeTab === 'lista' && <div style={{ position: 'absolute', bottom: '-11px', left: 0, width: '100%', height: '2px', background: '#0F172A' }}></div>}
          </button>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Search size={14} color="#94A3B8" />
            <input type="text" placeholder="Buscar..." style={{ border: 'none', outline: 'none', fontSize: '0.85rem', width: '150px' }} />
          </div>
          <button style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '6px 12px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '6px', color: '#0F172A', fontWeight: '500', fontSize: '0.85rem', cursor: 'pointer' }}>
            <Filter size={14} /> Filtros
          </button>
        </div>
      </div>

      {/* KANBAN BOARD */}
      <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '10px' }}>
        
        {/* COLUMNA: POR INICIAR */}
        <div style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 0' }}>
            <h4 style={{ margin: 0, fontSize: '0.85rem', fontWeight: '700', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px', textTransform: 'uppercase' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#CBD5E1' }}></div>
              Por Iniciar <span style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#64748B', padding: '1px 6px', borderRadius: '10px', fontSize: '0.7rem' }}>1</span>
            </h4>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '16px', cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ border: '1px solid #E2E8F0', color: '#475569', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: '600' }}>Cachagua</span>
            </div>
            <h5 style={{ margin: '0 0 4px 0', fontSize: '0.95rem', color: '#0F172A', fontWeight: '700' }}>Remodelación Cocina</h5>
            <p style={{ margin: '0 0 12px 0', fontSize: '0.8rem', color: '#64748B' }}>Cliente: Familia Herrera</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', borderTop: '1px solid #F1F5F9', paddingTop: '10px' }}>
              <HardHat size={14} color="#94A3B8" />
              <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: '500' }}>Sin maestro asignado</span>
            </div>
          </div>
        </div>

        {/* COLUMNA: EN EJECUCIÓN */}
        <div style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 0' }}>
            <h4 style={{ margin: 0, fontSize: '0.85rem', fontWeight: '700', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px', textTransform: 'uppercase' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D4AF37' }}></div>
              En Ejecución <span style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#64748B', padding: '1px 6px', borderRadius: '10px', fontSize: '0.7rem' }}>1</span>
            </h4>
          </div>
          
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '16px', cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ border: '1px solid #E2E8F0', color: '#475569', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: '600' }}>Zapallar</span>
            </div>
            <h5 style={{ margin: '0 0 4px 0', fontSize: '0.95rem', color: '#0F172A', fontWeight: '700' }}>Casa El Pangue - Obra Gruesa</h5>
            <p style={{ margin: '0 0 12px 0', fontSize: '0.8rem', color: '#64748B' }}>Avance esperado: 45%</p>
            
            {/* Progress Bar */}
            <div style={{ marginBottom: '12px' }}>
              <div style={{ width: '100%', background: '#F1F5F9', height: '4px', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '45%', background: '#0F172A', height: '100%' }}></div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderTop: '1px solid #F1F5F9', paddingTop: '10px' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 'bold', color: '#475569' }}>JG</div>
              <span style={{ fontSize: '0.75rem', color: '#0F172A', fontWeight: '600' }}>Juan Gasfiter</span>
            </div>
          </div>
        </div>

        {/* COLUMNA: FINALIZADAS */}
        <div style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 0' }}>
            <h4 style={{ margin: 0, fontSize: '0.85rem', fontWeight: '700', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px', textTransform: 'uppercase' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }}></div>
              Finalizadas <span style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#64748B', padding: '1px 6px', borderRadius: '10px', fontSize: '0.7rem' }}>1</span>
            </h4>
          </div>
          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '16px', cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ border: '1px solid #E2E8F0', color: '#94A3B8', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: '600' }}>Papudo</span>
              <CheckCircle2 size={14} color="#10B981" />
            </div>
            <h5 style={{ margin: '0 0 4px 0', fontSize: '0.95rem', color: '#64748B', fontWeight: '700', textDecoration: 'line-through' }}>Reparación Techo</h5>
            <p style={{ margin: '0', fontSize: '0.8rem', color: '#94A3B8' }}>Entregado el 12/Junio</p>
          </div>
        </div>

      </div>

    </div>
  );
}
