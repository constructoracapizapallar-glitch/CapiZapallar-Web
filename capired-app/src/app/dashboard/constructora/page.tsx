"use client";

import React, { useState } from 'react';
import ProfileToggle from '../../components/ProfileToggle';

export default function ConstructoraDashboard() {
  const [mode, setMode] = useState<'proveedor' | 'cliente'>('proveedor');

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px', minHeight: '80vh', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* SIDEBAR IZQUIERDO */}
      <div style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Header Constructora */}
        <div style={{ background: 'var(--capi-navy)', borderRadius: '20px', padding: '25px', color: 'white', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.2)' }}>
          <h1 style={{ fontSize: '1.8rem', margin: '0 0 10px 0' }}>Operaciones</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: '0 0 20px 0' }}>Control central de tus proyectos de construcción.</p>
          
          <ProfileToggle mode={mode} setMode={setMode} labelProveedor="Contratista" labelCliente="Mandante" />
        </div>

        {/* Acciones Rápidas (Varía según el modo) */}
        <div style={{ background: 'white', border: '1px solid var(--capi-border)', borderRadius: '20px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          {mode === 'proveedor' ? (
            <>
              <div style={{ border: '1px solid #fef08a', background: '#fefce8', borderRadius: '12px', padding: '15px', cursor: 'pointer', transition: 'all 0.2s', position: 'relative' }}>
                 <span style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#f59e0b', color: 'white', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>2</span>
                 <h3 style={{ margin: '0 0 5px 0', fontSize: '1rem', color: '#854d0e' }}>Nuevas Licitaciones</h3>
                 <p style={{ fontSize: '0.8rem', color: '#a16207', margin: 0 }}>Proyectos listos para postular.</p>
              </div>
              <div style={{ border: '1px solid #e2e8f0', background: '#f8fafc', borderRadius: '12px', padding: '15px', cursor: 'pointer', transition: 'all 0.2s' }}>
                 <h3 style={{ margin: '0 0 5px 0', fontSize: '1rem', color: 'var(--capi-navy)' }}>Mis Obras</h3>
                 <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>Sube estados de pago y avances.</p>
              </div>
            </>
          ) : (
            <>
              <div style={{ border: '1px solid #bfdbfe', background: '#eff6ff', borderRadius: '12px', padding: '15px', cursor: 'pointer', transition: 'all 0.2s' }}>
                 <h3 style={{ margin: '0 0 5px 0', fontSize: '1rem', color: '#1e40af' }}>Subcontratar</h3>
                 <p style={{ fontSize: '0.8rem', color: '#1d4ed8', margin: 0 }}>Busca especialistas en la red.</p>
              </div>
              <div style={{ border: '1px solid #e2e8f0', background: '#f8fafc', borderRadius: '12px', padding: '15px', cursor: 'pointer', transition: 'all 0.2s' }}>
                 <h3 style={{ margin: '0 0 5px 0', fontSize: '1rem', color: 'var(--capi-navy)' }}>Adquisiciones B2B</h3>
                 <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>Cotiza materiales a precio mayorista.</p>
              </div>
            </>
          )}

        </div>
      </div>

      {/* ÁREA PRINCIPAL: KANBAN / KPI DASHBOARD */}
      <div style={{ flex: '1', background: 'white', border: '1px solid var(--capi-border)', borderRadius: '20px', padding: '30px', display: 'flex', flexDirection: 'column' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--capi-navy)', margin: 0 }}>Vista General de Proyectos</h2>
          <button style={{ background: '#f1f5f9', color: 'var(--capi-navy)', border: 'none', padding: '10px 20px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
            Descargar Reporte PDF
          </button>
        </div>

        {/* KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '15px', padding: '20px' }}>
            <p style={{ margin: '0 0 5px 0', color: '#64748b', fontSize: '0.9rem' }}>Obras Activas</p>
            <p style={{ margin: 0, fontSize: '2rem', fontWeight: 'bold', color: 'var(--capi-navy)' }}>3</p>
          </div>
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '15px', padding: '20px' }}>
            <p style={{ margin: '0 0 5px 0', color: '#64748b', fontSize: '0.9rem' }}>Presupuesto en Ejecución</p>
            <p style={{ margin: 0, fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>$145M</p>
          </div>
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '15px', padding: '20px' }}>
            <p style={{ margin: '0 0 5px 0', color: '#64748b', fontSize: '0.9rem' }}>Próximo Hito (Días)</p>
            <p style={{ margin: 0, fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b' }}>12</p>
          </div>
        </div>

        {/* KANBAN / LISTA DE PROYECTOS */}
        <h3 style={{ margin: '0 0 15px 0', color: 'var(--capi-navy)' }}>Línea de Producción</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {/* Proyecto 1 */}
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <h4 style={{ margin: 0, color: 'var(--capi-navy)', fontSize: '1.2rem' }}>Condominio Las Brisas</h4>
                <span style={{ background: '#dbeafe', color: '#1e40af', padding: '3px 8px', borderRadius: '10px', fontSize: '0.7rem', fontWeight: 'bold' }}>EN PROCESO</span>
              </div>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>Mandante: Inmobiliaria Pacífico SpA</p>
            </div>
            
            <div style={{ flex: '1', padding: '0 20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: '0.8rem', color: '#64748b' }}>
                <span>Avance Físico</span>
                <span style={{ fontWeight: 'bold' }}>45%</span>
              </div>
              <div style={{ width: '100%', background: '#e2e8f0', borderRadius: '5px', height: '8px', overflow: 'hidden' }}>
                <div style={{ width: '45%', background: '#3b82f6', height: '100%' }}></div>
              </div>
            </div>

            <div style={{ flex: '0 0 150px', textAlign: 'right' }}>
              <button style={{ background: 'white', border: '1px solid #cbd5e1', color: 'var(--capi-navy)', padding: '8px 15px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Ver Detalles</button>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <h4 style={{ margin: 0, color: 'var(--capi-navy)', fontSize: '1.2rem' }}>Remodelación Casa 12</h4>
                <span style={{ background: '#fef08a', color: '#854d0e', padding: '3px 8px', borderRadius: '10px', fontSize: '0.7rem', fontWeight: 'bold' }}>POR INICIAR</span>
              </div>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>Mandante: Familia Pérez</p>
            </div>
            
            <div style={{ flex: '1', padding: '0 20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: '0.8rem', color: '#64748b' }}>
                <span>Avance Físico</span>
                <span style={{ fontWeight: 'bold' }}>0%</span>
              </div>
              <div style={{ width: '100%', background: '#e2e8f0', borderRadius: '5px', height: '8px', overflow: 'hidden' }}>
                <div style={{ width: '0%', background: '#3b82f6', height: '100%' }}></div>
              </div>
            </div>

            <div style={{ flex: '0 0 150px', textAlign: 'right' }}>
              <button style={{ background: 'white', border: '1px solid #cbd5e1', color: 'var(--capi-navy)', padding: '8px 15px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Ver Detalles</button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
