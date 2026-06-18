"use client";

import React, { useState } from 'react';
import { BarChart3, TrendingUp, DollarSign, ArrowUpRight, Package, Calendar } from 'lucide-react';

export default function FerreteriaVentas() {
  const [periodo, setPeriodo] = useState('mes');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '10px' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#292524', margin: '0 0 4px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>Reporte de Ventas B2B</h2>
          <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem' }}>Métricas de facturación a Obras Mayores.</p>
        </div>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <select style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #E7E5E4', background: '#FFFFFF', color: '#292524', fontWeight: '600', outline: 'none' }} value={periodo} onChange={(e) => setPeriodo(e.target.value)}>
            <option value="semana">Esta Semana</option>
            <option value="mes">Este Mes</option>
            <option value="trimestre">Último Trimestre</option>
          </select>
        </div>
      </div>

      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        <div style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '12px', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
            <div style={{ width: '40px', height: '40px', background: '#F0FDF4', color: '#10B981', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <DollarSign size={20} />
            </div>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: '#10B981', fontWeight: '700' }}><ArrowUpRight size={14}/> +14%</span>
          </div>
          <p style={{ margin: '0 0 5px 0', fontSize: '0.85rem', color: '#78716C', fontWeight: '600' }}>Ingresos Brutos</p>
          <h3 style={{ margin: 0, fontSize: '1.8rem', color: '#292524', fontWeight: '800' }}>$14.250.000</h3>
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '12px', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
            <div style={{ width: '40px', height: '40px', background: '#F5F5F4', color: '#292524', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Package size={20} />
            </div>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: '#10B981', fontWeight: '700' }}><ArrowUpRight size={14}/> +5%</span>
          </div>
          <p style={{ margin: '0 0 5px 0', fontSize: '0.85rem', color: '#78716C', fontWeight: '600' }}>Pedidos B2B</p>
          <h3 style={{ margin: 0, fontSize: '1.8rem', color: '#292524', fontWeight: '800' }}>128</h3>
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '12px', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
            <div style={{ width: '40px', height: '40px', background: '#F5F5F4', color: '#292524', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp size={20} />
            </div>
          </div>
          <p style={{ margin: '0 0 5px 0', fontSize: '0.85rem', color: '#78716C', fontWeight: '600' }}>Ticket Promedio</p>
          <h3 style={{ margin: 0, fontSize: '1.8rem', color: '#292524', fontWeight: '800' }}>$111.328</h3>
        </div>
      </div>

      {/* CHART PLACEHOLDER */}
      <div style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '12px', padding: '20px', minHeight: '300px', display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem', color: '#292524', fontWeight: '700' }}>Evolución de Ventas</h3>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #E7E5E4', borderRadius: '8px', background: '#FAFAF9' }}>
          <p style={{ color: '#A8A29E', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}><BarChart3 size={20}/> Gráfico Dinámico Próximamente</p>
        </div>
      </div>

    </div>
  );
}
