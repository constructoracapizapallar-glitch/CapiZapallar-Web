"use client";

import React, { useState } from 'react';
import { Plus, Search, Building2, HardHat, FileText, CheckCircle2, CircleDashed, Filter } from 'lucide-react';

export default function ConstructoraDashboard() {
  const [activeTab, setActiveTab] = useState('kanban');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '10px' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', color: '#0F172A', margin: '0 0 8px 0', fontWeight: '800', letterSpacing: '-1px' }}>Obras Activas</h2>
          <p style={{ margin: 0, color: '#64748B', fontSize: '1rem' }}>Visión centralizada de todos tus proyectos en ejecución.</p>
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
          <Plus size={18} /> Nueva Obra
        </button>
      </div>

      {/* KPI CARDS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {[
          { label: 'Obras en Curso', value: '4', icon: <Building2 size={24} color="#0F172A" /> },
          { label: 'Contratistas', value: '12', icon: <HardHat size={24} color="#0F172A" /> },
          { label: 'Documentos', value: '38', icon: <FileText size={24} color="#0F172A" /> },
          { label: 'Avance Promedio', value: '65%', icon: <CircleDashed size={24} color="#0F172A" /> },
        ].map((kpi, idx) => (
          <div key={idx} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 4px -1px rgba(0, 0, 0, 0.02)' }}>
            <div>
              <p style={{ margin: '0 0 8px 0', fontSize: '0.85rem', color: '#64748B', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{kpi.label}</p>
              <h3 style={{ margin: 0, fontSize: '2rem', color: '#0F172A', fontWeight: '800' }}>{kpi.value}</h3>
            </div>
            <div style={{ background: '#F1F5F9', padding: '12px', borderRadius: '12px' }}>
              {kpi.icon}
            </div>
          </div>
        ))}
      </div>

      {/* TABS & FILTERS */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E2E8F0', paddingBottom: '15px' }}>
        <div style={{ display: 'flex', gap: '30px' }}>
          <button 
            onClick={() => setActiveTab('kanban')}
            style={{ background: 'none', border: 'none', padding: 0, fontSize: '1rem', fontWeight: activeTab === 'kanban' ? '700' : '500', color: activeTab === 'kanban' ? '#0F172A' : '#64748B', cursor: 'pointer', position: 'relative' }}
          >
            Vista Kanban
            {activeTab === 'kanban' && <div style={{ position: 'absolute', bottom: '-16px', left: 0, width: '100%', height: '3px', background: '#0F172A', borderRadius: '3px 3px 0 0' }}></div>}
          </button>
          <button 
            onClick={() => setActiveTab('lista')}
            style={{ background: 'none', border: 'none', padding: 0, fontSize: '1rem', fontWeight: activeTab === 'lista' ? '700' : '500', color: activeTab === 'lista' ? '#0F172A' : '#64748B', cursor: 'pointer', position: 'relative' }}
          >
            Vista Lista
            {activeTab === 'lista' && <div style={{ position: 'absolute', bottom: '-16px', left: 0, width: '100%', height: '3px', background: '#0F172A', borderRadius: '3px 3px 0 0' }}></div>}
          </button>
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Search size={16} color="#94A3B8" />
            <input type="text" placeholder="Buscar..." style={{ border: 'none', outline: 'none', fontSize: '0.9rem', width: '150px' }} />
          </div>
          <button style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '8px 16px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', color: '#0F172A', fontWeight: '500', cursor: 'pointer' }}>
            <Filter size={16} /> Filtros
          </button>
        </div>
      </div>

      {/* KANBAN BOARD */}
      <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '20px' }}>
        
        {/* COLUMNA: POR INICIAR */}
        <div style={{ flex: '0 0 350px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0' }}>
            <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: '700', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#CBD5E1' }}></div>
              Por Iniciar <span style={{ background: '#F1F5F9', color: '#64748B', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem' }}>1</span>
            </h4>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px', cursor: 'pointer', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ background: '#F1F5F9', color: '#475569', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '600' }}>Cachagua</span>
            </div>
            <h5 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: '#0F172A', fontWeight: '700' }}>Remodelación Cocina</h5>
            <p style={{ margin: '0 0 15px 0', fontSize: '0.85rem', color: '#64748B' }}>Cliente: Familia Herrera</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderTop: '1px solid #F1F5F9', paddingTop: '15px' }}>
              <HardHat size={16} color="#94A3B8" />
              <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: '500' }}>Sin maestro asignado</span>
            </div>
          </div>
        </div>

        {/* COLUMNA: EN EJECUCIÓN */}
        <div style={{ flex: '0 0 350px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0' }}>
            <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: '700', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3B82F6' }}></div>
              En Ejecución <span style={{ background: '#F1F5F9', color: '#64748B', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem' }}>2</span>
            </h4>
          </div>
          
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px', cursor: 'pointer', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ background: '#EFF6FF', color: '#2563EB', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '600' }}>Zapallar</span>
            </div>
            <h5 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: '#0F172A', fontWeight: '700' }}>Casa El Pangue - Obra Gruesa</h5>
            <p style={{ margin: '0 0 15px 0', fontSize: '0.85rem', color: '#64748B' }}>Avance esperado: 45%</p>
            
            {/* Progress Bar */}
            <div style={{ marginBottom: '15px' }}>
              <div style={{ width: '100%', background: '#F1F5F9', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '45%', background: '#3B82F6', height: '100%' }}></div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderTop: '1px solid #F1F5F9', paddingTop: '15px' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 'bold', color: '#475569' }}>JG</div>
              <span style={{ fontSize: '0.8rem', color: '#0F172A', fontWeight: '600' }}>Juan Gasfiter</span>
            </div>
          </div>
        </div>

        {/* COLUMNA: FINALIZADAS */}
        <div style={{ flex: '0 0 350px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0' }}>
            <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: '700', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }}></div>
              Finalizadas <span style={{ background: '#F1F5F9', color: '#64748B', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem' }}>1</span>
            </h4>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px', opacity: 0.7, cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ background: '#F0FDF4', color: '#16A34A', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '600' }}>Papudo</span>
              <CheckCircle2 size={16} color="#16A34A" />
            </div>
            <h5 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: '#0F172A', fontWeight: '700', textDecoration: 'line-through' }}>Reparación Techo</h5>
            <p style={{ margin: '0', fontSize: '0.85rem', color: '#64748B' }}>Entregado el 12/Junio</p>
          </div>
        </div>

      </div>

    </div>
  );
}
