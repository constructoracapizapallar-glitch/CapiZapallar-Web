"use client";

import React from 'react';
import { Users, HardHat, DollarSign, ExternalLink, Download } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#0F172A', margin: '0 0 4px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>Métricas Globales</h2>
          <p style={{ margin: 0, color: '#64748B', fontSize: '0.85rem' }}>Salud financiera y crecimiento de la plataforma Capi Red.</p>
        </div>
        <button style={{ 
          background: '#FFFFFF', 
          color: '#0F172A', 
          border: '1px solid #E2E8F0', 
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
        <div style={{ background: '#FFFFFF', borderRadius: '8px', border: '1px solid #E2E8F0', padding: '16px', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ background: '#F8FAFC', padding: '10px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
            <Users size={20} color="#0F172A" />
          </div>
          <div>
            <p style={{ margin: '0 0 2px 0', color: '#64748B', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>Usuarios Activos</p>
            <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: '800', color: '#0F172A' }}>1,245</p>
          </div>
        </div>
        <div style={{ background: '#FFFFFF', borderRadius: '8px', border: '1px solid #E2E8F0', padding: '16px', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ background: '#F8FAFC', padding: '10px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
            <HardHat size={20} color="#0F172A" />
          </div>
          <div>
            <p style={{ margin: '0 0 2px 0', color: '#64748B', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>Obras en Ejecución</p>
            <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: '800', color: '#0F172A' }}>12</p>
          </div>
        </div>
        <div style={{ background: '#0F172A', borderRadius: '8px', border: '1px solid #0F172A', padding: '16px', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '6px' }}>
            <DollarSign size={20} color="#D4AF37" />
          </div>
          <div>
            <p style={{ margin: '0 0 2px 0', color: '#94A3B8', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>Comisiones Brutas</p>
            <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: '800', color: '#D4AF37' }}>$4.5<span style={{ fontSize: '0.9rem', color: '#94A3B8', marginLeft: '2px' }}>M</span></p>
          </div>
        </div>
      </div>

      {/* TABLA DE VALIDACIONES KYC */}
      <div style={{ background: '#FFFFFF', borderRadius: '8px', border: '1px solid #E2E8F0', marginTop: '10px' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid #E2E8F0' }}>
          <h3 style={{ margin: 0, color: '#0F172A', fontSize: '0.95rem', fontWeight: '700' }}>Control KYC Pendiente</h3>
        </div>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                <th style={{ padding: '10px 16px', color: '#64748B', fontWeight: '600' }}>Usuario</th>
                <th style={{ padding: '10px 16px', color: '#64748B', fontWeight: '600' }}>Rol</th>
                <th style={{ padding: '10px 16px', color: '#64748B', fontWeight: '600' }}>Documentos</th>
                <th style={{ padding: '10px 16px', color: '#64748B', fontWeight: '600', width: '100px' }}>Estado</th>
                <th style={{ padding: '10px 16px', color: '#64748B', fontWeight: '600', textAlign: 'right', width: '100px' }}>Acción</th>
              </tr>
            </thead>
            <tbody>
              
              <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                <td style={{ padding: '12px 16px' }}>
                  <p style={{ margin: 0, fontWeight: '600', color: '#0F172A' }}>Pedro Martínez</p>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748B' }}>pedro@gasfiter.cl</p>
                </td>
                <td style={{ padding: '12px 16px', color: '#0F172A' }}>Maestro</td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{ fontSize: '0.7rem', border: '1px solid #E2E8F0', padding: '2px 6px', borderRadius: '4px', marginRight: '4px' }}>C. Identidad</span>
                  <span style={{ fontSize: '0.7rem', border: '1px solid #E2E8F0', padding: '2px 6px', borderRadius: '4px' }}>Certificado</span>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{ background: '#FFFBEB', color: '#B45309', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: '600', border: '1px solid #FEF3C7' }}>Pendiente</span>
                </td>
                <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                  <button style={{ background: '#0F172A', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Revisar <ExternalLink size={12} />
                  </button>
                </td>
              </tr>

              <tr>
                <td style={{ padding: '12px 16px' }}>
                  <p style={{ margin: 0, fontWeight: '600', color: '#0F172A' }}>Arquitectura S.A.</p>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748B' }}>contacto@arqs.cl</p>
                </td>
                <td style={{ padding: '12px 16px', color: '#0F172A' }}>Profesional</td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{ fontSize: '0.7rem', border: '1px solid #E2E8F0', padding: '2px 6px', borderRadius: '4px' }}>Título Univ.</span>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{ background: '#FFFBEB', color: '#B45309', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: '600', border: '1px solid #FEF3C7' }}>Pendiente</span>
                </td>
                <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                  <button style={{ background: '#0F172A', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
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
