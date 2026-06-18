"use client";

import React from 'react';
import { Package, ShoppingCart } from 'lucide-react';

export default function MaestroMateriales() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '10px', borderBottom: '1px solid #E7E5E4' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#292524', margin: '0 0 4px 0', fontWeight: '800' }}>Compra de Materiales</h2>
          <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem' }}>Pide materiales a ferreterías cercanas directo a tu obra.</p>
        </div>
      </div>

      <div style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
        <Package size={48} color="#A8A29E" style={{ marginBottom: '15px' }} />
        <h3 style={{ margin: '0 0 10px 0', color: '#292524' }}>Catálogo en construcción</h3>
        <p style={{ color: '#78716C', fontSize: '0.9rem' }}>Próximamente podrás comprar materiales con despacho inmediato.</p>
      </div>
    </div>
  );
}
