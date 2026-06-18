"use client";

import React, { useState } from 'react';
import ProfileToggle from '../../components/ProfileToggle';

export default function ConstructoraDashboard() {
  const [mode, setMode] = useState<'proveedor' | 'cliente'>('proveedor');

  return (
    <div style={{ display: 'flex', gap: '30px', padding: '30px', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* SIDEBAR IZQUIERDO */}
      <div style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Header Constructora */}
        <div style={{ background: 'var(--capi-navy)', borderRadius: '24px', padding: '30px', color: 'white', boxShadow: 'var(--capi-shadow)' }}>
          <h1 style={{ fontSize: '2rem', margin: '0 0 5px 0', fontWeight: '300', letterSpacing: '-0.5px' }}>Comando</h1>
          <p style={{ color: '#A0AEC0', fontSize: '0.85rem', margin: '0 0 25px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>Constructora</p>
          
          <ProfileToggle mode={mode} setMode={setMode} labelProveedor="Contratista" labelCliente="Mandante" />
        </div>

        {/* Acciones Rápidas / Menú */}
        <div style={{ background: 'var(--capi-white)', borderRadius: '24px', padding: '25px', display: 'flex', flexDirection: 'column', gap: '10px', boxShadow: 'var(--capi-shadow)' }}>
          
          <h3 style={{ fontSize: '0.8rem', color: '#A0AEC0', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Opciones Principales</h3>

          {mode === 'proveedor' ? (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', background: '#F7FAFC', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s', border: '1px solid var(--capi-border)' }}>
                 <span style={{ fontSize: '1.2rem' }}>📋</span>
                 <div>
                   <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--capi-navy)' }}>Licitaciones (2)</h4>
                   <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--capi-text)' }}>Ver proyectos disponibles</p>
                 </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>
                 <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>🏗️</span>
                 <div>
                   <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--capi-text)' }}>Mis Obras Activas</h4>
                   <p style={{ margin: 0, fontSize: '0.75rem', color: '#A0AEC0' }}>Estados de pago</p>
                 </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>
                 <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>📄</span>
                 <div>
                   <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--capi-text)' }}>Contratos</h4>
                   <p style={{ margin: 0, fontSize: '0.75rem', color: '#A0AEC0' }}>Firmas pendientes</p>
                 </div>
              </div>
            </>
          ) : (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', background: '#F7FAFC', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s', border: '1px solid var(--capi-border)' }}>
                 <span style={{ fontSize: '1.2rem' }}>👥</span>
                 <div>
                   <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--capi-navy)' }}>Subcontratar</h4>
                   <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--capi-text)' }}>Buscar especialistas</p>
                 </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>
                 <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>🛒</span>
                 <div>
                   <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--capi-text)' }}>Adquisiciones</h4>
                   <p style={{ margin: 0, fontSize: '0.75rem', color: '#A0AEC0' }}>Comprar materiales</p>
                 </div>
              </div>
            </>
          )}

        </div>
      </div>

      {/* ÁREA PRINCIPAL */}
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        {/* Superior: Header Principal */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--capi-navy)', margin: '0 0 5px 0', fontWeight: '300', letterSpacing: '-1px' }}>Panel General</h2>
            <p style={{ margin: 0, color: 'var(--capi-text)' }}>Resumen operativo de tus proyectos en tiempo real.</p>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button style={{ background: 'var(--capi-white)', color: 'var(--capi-navy)', border: '1px solid var(--capi-border)', padding: '12px 24px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', boxShadow: 'var(--capi-shadow)' }}>
              Exportar
            </button>
            <button style={{ background: 'var(--capi-navy)', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', boxShadow: 'var(--capi-shadow)' }}>
              + Nuevo Proyecto
            </button>
          </div>
        </div>

        {/* KPIs (Estilo Minimalista) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          <div style={{ background: 'var(--capi-white)', borderRadius: '24px', padding: '25px', boxShadow: 'var(--capi-shadow)' }}>
            <p style={{ margin: '0 0 10px 0', color: '#A0AEC0', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Obras Activas</p>
            <p style={{ margin: 0, fontSize: '2.5rem', fontWeight: '300', color: 'var(--capi-navy)' }}>3</p>
          </div>
          <div style={{ background: 'var(--capi-white)', borderRadius: '24px', padding: '25px', boxShadow: 'var(--capi-shadow)' }}>
            <p style={{ margin: '0 0 10px 0', color: '#A0AEC0', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Presupuesto Neto</p>
            <p style={{ margin: 0, fontSize: '2.5rem', fontWeight: '300', color: 'var(--capi-navy)' }}>$145<span style={{ fontSize: '1.2rem', color: '#A0AEC0' }}>M</span></p>
          </div>
          <div style={{ background: 'var(--capi-white)', borderRadius: '24px', padding: '25px', boxShadow: 'var(--capi-shadow)' }}>
            <p style={{ margin: '0 0 10px 0', color: '#A0AEC0', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Retrasos</p>
            <p style={{ margin: 0, fontSize: '2.5rem', fontWeight: '300', color: '#E53E3E' }}>0</p>
          </div>
          <div style={{ background: 'var(--capi-white)', borderRadius: '24px', padding: '25px', boxShadow: 'var(--capi-shadow)' }}>
            <p style={{ margin: '0 0 10px 0', color: '#A0AEC0', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Próximo Hito</p>
            <p style={{ margin: 0, fontSize: '2.5rem', fontWeight: '300', color: 'var(--capi-navy)' }}>12<span style={{ fontSize: '1.2rem', color: '#A0AEC0' }}>días</span></p>
          </div>
        </div>

        {/* KANBAN / LISTA DE PROYECTOS (Airy & Clean) */}
        <div style={{ background: 'var(--capi-white)', borderRadius: '24px', padding: '30px', boxShadow: 'var(--capi-shadow)', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
            <h3 style={{ margin: 0, color: 'var(--capi-navy)', fontSize: '1.2rem', fontWeight: '600' }}>Línea de Producción</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <span style={{ padding: '5px 15px', background: '#F7FAFC', borderRadius: '20px', fontSize: '0.8rem', color: 'var(--capi-navy)', cursor: 'pointer', border: '1px solid var(--capi-border)' }}>Todos</span>
              <span style={{ padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', color: '#A0AEC0', cursor: 'pointer' }}>En Proceso</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {/* Proyecto 1 */}
            <div style={{ border: '1px solid var(--capi-border)', borderRadius: '16px', padding: '25px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'all 0.3s', cursor: 'pointer', background: '#FAFCFF' }}>
              <div style={{ flex: '1' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '8px' }}>
                  <h4 style={{ margin: 0, color: 'var(--capi-navy)', fontSize: '1.1rem', fontWeight: '600' }}>Condominio Las Brisas</h4>
                  <span style={{ background: '#EBF8FF', color: '#2B6CB0', padding: '4px 10px', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>En Proceso</span>
                </div>
                <p style={{ margin: 0, color: 'var(--capi-text)', fontSize: '0.85rem' }}>Mandante: Inmobiliaria Pacífico SpA</p>
              </div>
              
              <div style={{ flex: '1', padding: '0 40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.8rem', color: 'var(--capi-text)' }}>
                  <span>Avance Físico</span>
                  <span style={{ fontWeight: '600', color: 'var(--capi-navy)' }}>45%</span>
                </div>
                <div style={{ width: '100%', background: '#EDF2F7', borderRadius: '8px', height: '6px', overflow: 'hidden' }}>
                  <div style={{ width: '45%', background: 'var(--capi-navy)', height: '100%', borderRadius: '8px' }}></div>
                </div>
              </div>

              <div style={{ flex: '0 0 100px', textAlign: 'right' }}>
                <span style={{ color: '#A0AEC0', fontSize: '1.2rem' }}>→</span>
              </div>
            </div>

            {/* Proyecto 2 */}
            <div style={{ border: '1px solid var(--capi-border)', borderRadius: '16px', padding: '25px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'all 0.3s', cursor: 'pointer' }}>
              <div style={{ flex: '1' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '8px' }}>
                  <h4 style={{ margin: 0, color: 'var(--capi-navy)', fontSize: '1.1rem', fontWeight: '600' }}>Remodelación Casa 12</h4>
                  <span style={{ background: '#FFFFF0', color: '#B7791F', padding: '4px 10px', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Por Iniciar</span>
                </div>
                <p style={{ margin: 0, color: 'var(--capi-text)', fontSize: '0.85rem' }}>Mandante: Familia Pérez</p>
              </div>
              
              <div style={{ flex: '1', padding: '0 40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.8rem', color: 'var(--capi-text)' }}>
                  <span>Avance Físico</span>
                  <span style={{ fontWeight: '600', color: 'var(--capi-navy)' }}>0%</span>
                </div>
                <div style={{ width: '100%', background: '#EDF2F7', borderRadius: '8px', height: '6px', overflow: 'hidden' }}>
                  <div style={{ width: '0%', background: 'var(--capi-navy)', height: '100%', borderRadius: '8px' }}></div>
                </div>
              </div>

              <div style={{ flex: '0 0 100px', textAlign: 'right' }}>
                <span style={{ color: '#A0AEC0', fontSize: '1.2rem' }}>→</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
