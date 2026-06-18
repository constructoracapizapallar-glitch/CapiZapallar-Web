"use client";

import React from 'react';

export default function FerreteriaDashboard() {
  return (
    <div style={{ display: 'flex', gap: '30px', padding: '30px', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* SIDEBAR IZQUIERDO */}
      <div style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Header Ferretería */}
        <div style={{ background: 'var(--capi-navy)', borderRadius: '24px', padding: '30px', color: 'white', boxShadow: 'var(--capi-shadow)' }}>
          <h1 style={{ fontSize: '2rem', margin: '0 0 5px 0', fontWeight: '300', letterSpacing: '-0.5px' }}>Store Hub</h1>
          <p style={{ color: '#A0AEC0', fontSize: '0.85rem', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>B2B E-commerce</p>
        </div>

        {/* Acciones Rápidas / Menú */}
        <div style={{ background: 'var(--capi-white)', borderRadius: '24px', padding: '25px', display: 'flex', flexDirection: 'column', gap: '10px', boxShadow: 'var(--capi-shadow)' }}>
          
          <h3 style={{ fontSize: '0.8rem', color: '#A0AEC0', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Inventario</h3>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', background: '#F7FAFC', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s', border: '1px solid var(--capi-border)' }}>
             <span style={{ fontSize: '1.2rem' }}>📦</span>
             <div>
               <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--capi-navy)' }}>Mis Productos</h4>
               <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--capi-text)' }}>Gestión de catálogo</p>
             </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>
             <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>🚚</span>
             <div>
               <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--capi-text)' }}>Despachos</h4>
               <p style={{ margin: 0, fontSize: '0.75rem', color: '#A0AEC0' }}>Logística y envíos</p>
             </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>
             <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>📊</span>
             <div>
               <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--capi-text)' }}>Ventas</h4>
               <p style={{ margin: 0, fontSize: '0.75rem', color: '#A0AEC0' }}>Reportes B2B</p>
             </div>
          </div>

        </div>
      </div>

      {/* ÁREA PRINCIPAL: E-COMMERCE GRID (Estilo Escandinavo) */}
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--capi-navy)', margin: '0 0 5px 0', fontWeight: '300', letterSpacing: '-1px' }}>Catálogo B2B</h2>
            <p style={{ margin: 0, color: 'var(--capi-text)' }}>Tus productos publicados para la red de constructoras y maestros.</p>
          </div>
          <button style={{ background: 'var(--capi-navy)', color: 'var(--capi-white)', border: 'none', padding: '12px 24px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', boxShadow: 'var(--capi-shadow)' }}>
            + Agregar Producto
          </button>
        </div>

        {/* E-COMMERCE PRODUCT GRID */}
        <div style={{ background: 'var(--capi-white)', borderRadius: '24px', padding: '40px', boxShadow: 'var(--capi-shadow)', flex: 1 }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '25px' }}>
            
            {/* Producto 1 */}
            <div style={{ border: '1px solid var(--capi-border)', borderRadius: '16px', overflow: 'hidden', transition: 'all 0.3s', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: '#F7FAFC', height: '160px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <span style={{ fontSize: '4rem', opacity: 0.8 }}>🧱</span>
                <span style={{ position: 'absolute', top: '15px', right: '15px', background: '#EBF8FF', color: '#2B6CB0', padding: '4px 10px', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Obra Gruesa</span>
              </div>
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', color: 'var(--capi-navy)', fontSize: '1.1rem', fontWeight: '600' }}>Cemento Melón Especial 25kg</h4>
                  <p style={{ margin: 0, color: '#A0AEC0', fontSize: '0.85rem' }}>Stock: 150 un.</p>
                </div>
                
                <div style={{ background: '#FAFCFF', padding: '15px', borderRadius: '12px', border: '1px solid var(--capi-border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                    <span style={{ color: 'var(--capi-text)', fontSize: '0.85rem' }}>Precio Venta</span>
                    <span style={{ fontWeight: '600', color: 'var(--capi-navy)' }}>$4.500</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--capi-text)', fontSize: '0.85rem' }}>Ganancia Neta</span>
                    <span style={{ fontWeight: '600', color: '#38A169' }}>$1.200</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Producto 2 */}
            <div style={{ border: '1px solid var(--capi-border)', borderRadius: '16px', overflow: 'hidden', transition: 'all 0.3s', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: '#F7FAFC', height: '160px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <span style={{ fontSize: '4rem', opacity: 0.8 }}>🔧</span>
                <span style={{ position: 'absolute', top: '15px', right: '15px', background: '#FFFFF0', color: '#B7791F', padding: '4px 10px', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Herramientas</span>
              </div>
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', color: 'var(--capi-navy)', fontSize: '1.1rem', fontWeight: '600' }}>Llave Francesa 12" Truper</h4>
                  <p style={{ margin: 0, color: '#A0AEC0', fontSize: '0.85rem' }}>Stock: 12 un.</p>
                </div>
                
                <div style={{ background: '#FAFCFF', padding: '15px', borderRadius: '12px', border: '1px solid var(--capi-border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                    <span style={{ color: 'var(--capi-text)', fontSize: '0.85rem' }}>Precio Venta</span>
                    <span style={{ fontWeight: '600', color: 'var(--capi-navy)' }}>$12.990</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--capi-text)', fontSize: '0.85rem' }}>Ganancia Neta</span>
                    <span style={{ fontWeight: '600', color: '#38A169' }}>$4.500</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Producto 3 */}
            <div style={{ border: '1px solid var(--capi-border)', borderRadius: '16px', overflow: 'hidden', transition: 'all 0.3s', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: '#F7FAFC', height: '160px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <span style={{ fontSize: '4rem', opacity: 0.8 }}>⚡</span>
                <span style={{ position: 'absolute', top: '15px', right: '15px', background: '#F0FFF4', color: '#2F855A', padding: '4px 10px', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Eléctrico</span>
              </div>
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', color: 'var(--capi-navy)', fontSize: '1.1rem', fontWeight: '600' }}>Cable THHN 2.5mm Rollo 100m</h4>
                  <p style={{ margin: 0, color: '#E53E3E', fontSize: '0.85rem', fontWeight: '600' }}>Stock: 2 un. (Bajo)</p>
                </div>
                
                <div style={{ background: '#FAFCFF', padding: '15px', borderRadius: '12px', border: '1px solid var(--capi-border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                    <span style={{ color: 'var(--capi-text)', fontSize: '0.85rem' }}>Precio Venta</span>
                    <span style={{ fontWeight: '600', color: 'var(--capi-navy)' }}>$45.000</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--capi-text)', fontSize: '0.85rem' }}>Ganancia Neta</span>
                    <span style={{ fontWeight: '600', color: '#38A169' }}>$15.000</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
