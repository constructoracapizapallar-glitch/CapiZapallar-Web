"use client";

import React from 'react';
import { Users, HardHat, DollarSign, ExternalLink, Download } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '10px', borderBottom: '1px solid #E7E5E4' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#292524', margin: '0 0 4px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>Métricas Globales</h2>
          <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem' }}>Salud financiera y crecimiento de la plataforma Capi Red.</p>
        </div>
        <button style={{ 
          background: '#FFFFFF', 
          color: '#292524', 
          border: '1px solid #E7E5E4', 
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
          <Download size={16} /> Exportar
        </button>
      </div>

      {/* KPIs (Compactos) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
        <div style={{ background: '#FFFFFF', borderRadius: '8px', border: '1px solid #E7E5E4', padding: '16px', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ background: '#F5F5F4', padding: '10px', borderRadius: '6px', border: '1px solid #E7E5E4' }}>
            <Users size={20} color="#292524" />
          </div>
          <div>
            <p style={{ margin: '0 0 2px 0', color: '#78716C', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>Usuarios Activos</p>
            <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: '800', color: '#292524' }}>1,245</p>
          </div>
        </div>
        <div style={{ background: '#FFFFFF', borderRadius: '8px', border: '1px solid #E7E5E4', padding: '16px', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ background: '#F5F5F4', padding: '10px', borderRadius: '6px', border: '1px solid #E7E5E4' }}>
            <HardHat size={20} color="#292524" />
          </div>
          <div>
            <p style={{ margin: '0 0 2px 0', color: '#78716C', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>Obras en Ejecución</p>
            <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: '800', color: '#292524' }}>12</p>
          </div>
        </div>
        <div style={{ background: '#292524', borderRadius: '8px', border: '1px solid #1C1917', padding: '16px', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '6px' }}>
            <DollarSign size={20} color="#FAFAF9" />
          </div>
          <div>
            <p style={{ margin: '0 0 2px 0', color: '#A8A29E', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>Comisiones Brutas</p>
            <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: '800', color: '#FAFAF9' }}>$4.5<span style={{ fontSize: '0.9rem', color: '#A8A29E', marginLeft: '2px' }}>M</span></p>
          </div>
        </div>
      </div>

      {/* TABLA DE VALIDACIONES KYC */}
      <div style={{ background: '#FFFFFF', borderRadius: '8px', border: '1px solid #E7E5E4', marginTop: '10px' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid #E7E5E4' }}>
          <h3 style={{ margin: 0, color: '#292524', fontSize: '0.95rem', fontWeight: '700' }}>Control KYC Pendiente</h3>
        </div>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ background: '#F5F5F4', borderBottom: '1px solid #E7E5E4' }}>
                <th style={{ padding: '10px 16px', color: '#78716C', fontWeight: '600' }}>Usuario</th>
                <th style={{ padding: '10px 16px', color: '#78716C', fontWeight: '600' }}>Rol</th>
                <th style={{ padding: '10px 16px', color: '#78716C', fontWeight: '600' }}>Documentos</th>
                <th style={{ padding: '10px 16px', color: '#78716C', fontWeight: '600', width: '100px' }}>Estado</th>
                <th style={{ padding: '10px 16px', color: '#78716C', fontWeight: '600', textAlign: 'right', width: '100px' }}>Acción</th>
              </tr>
            </thead>
            <tbody>
              
              <tr style={{ borderBottom: '1px solid #F5F5F4' }}>
                <td style={{ padding: '12px 16px' }}>
                  <p style={{ margin: 0, fontWeight: '600', color: '#292524' }}>Pedro Martínez</p>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#78716C' }}>pedro@gasfiter.cl</p>
                </td>
                <td style={{ padding: '12px 16px', color: '#292524' }}>Maestro</td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{ fontSize: '0.7rem', border: '1px solid #E7E5E4', padding: '2px 6px', borderRadius: '4px', marginRight: '4px' }}>C. Identidad</span>
                  <span style={{ fontSize: '0.7rem', border: '1px solid #E7E5E4', padding: '2px 6px', borderRadius: '4px' }}>Certificado</span>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{ border: '1px solid #E7E5E4', color: '#57534E', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: '600' }}>Pendiente</span>
                </td>
                <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                  <button style={{ background: '#292524', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Revisar <ExternalLink size={12} />
                  </button>
                </td>
              </tr>

              <tr>
                <td style={{ padding: '12px 16px' }}>
                  <p style={{ margin: 0, fontWeight: '600', color: '#292524' }}>Arquitectura S.A.</p>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#78716C' }}>contacto@arqs.cl</p>
                </td>
                <td style={{ padding: '12px 16px', color: '#292524' }}>Profesional</td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{ fontSize: '0.7rem', border: '1px solid #E7E5E4', padding: '2px 6px', borderRadius: '4px' }}>Título Univ.</span>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{ border: '1px solid #E7E5E4', color: '#57534E', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: '600' }}>Pendiente</span>
                </td>
                <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                  <button style={{ background: '#292524', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Revisar <ExternalLink size={12} />
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}
