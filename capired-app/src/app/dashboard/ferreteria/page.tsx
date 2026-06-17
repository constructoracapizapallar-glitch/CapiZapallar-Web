"use client";

import React, { useState } from 'react';

export default function FerreteriaDashboard() {
  const [products, setProducts] = useState([
    { id: 1, name: "Cemento Melón Especial 25kg", price: 5000, capiPrice: 4200, category: "Obra Gruesa" }
  ]);

  return (
    <div style={{ padding: '40px', color: 'var(--capi-navy)' }}>
      <h1 style={{ color: 'var(--capi-navy)', marginBottom: '10px' }}>Portal de Ventas B2B (Ferretería)</h1>
      <p style={{ marginBottom: '30px', color: '#64748b' }}>Gestiona tu inventario y recibe órdenes de la red Capi.</p>
      
      <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <h2 style={{ marginBottom: '20px' }}>Mi Catálogo</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
              <th style={{ padding: '10px' }}>Producto</th>
              <th style={{ padding: '10px' }}>Categoría</th>
              <th style={{ padding: '10px' }}>Precio Normal</th>
              <th style={{ padding: '10px', color: 'var(--capi-gold)' }}>Precio Capi Red</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '15px 10px', fontWeight: 'bold' }}>{p.name}</td>
                <td style={{ padding: '15px 10px' }}>{p.category}</td>
                <td style={{ padding: '15px 10px', textDecoration: 'line-through', color: '#94a3b8' }}>${p.price}</td>
                <td style={{ padding: '15px 10px', fontWeight: 'bold', color: 'var(--capi-gold)' }}>${p.capiPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <button className="btn-primary" style={{ marginTop: '20px' }}>+ Agregar Nuevo Producto</button>
      </div>
    </div>
  );
}
