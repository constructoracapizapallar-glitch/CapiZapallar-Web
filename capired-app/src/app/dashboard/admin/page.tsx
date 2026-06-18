"use client";

import React from 'react';
import { Users, HardHat, DollarSign, ExternalLink, Download } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '10px' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', color: '#0F172A', margin: '0 0 8px 0', fontWeight: '800', letterSpacing: '-1px' }}>Métricas Globales</h2>
          <p style={{ margin: 0, color: '#64748B', fontSize: '1rem' }}>Salud financiera y crecimiento de la plataforma Capi Red.</p>
        </div>
        <button style={{ 
          background: '#FFFFFF', 
          color: '#0F172A', 
          border: '1px solid #E2E8F0', 
          padding: '12px 24px', 
          borderRadius: '10px', 
          fontWeight: '600', 
          cursor: 'pointer', 
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.2s',
          boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
        }}>
          <Download size={18} /> Exportar Reporte
        </button>
      </div>

      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
        <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '30px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ margin: '0 0 10px 0', color: '#64748B', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>Usuarios Activos</p>
            <p style={{ margin: 0, fontSize: '2.5rem', fontWeight: '800', color: '#0F172A' }}>1,245</p>
          </div>
          <div style={{ background: '#F1F5F9', padding: '15px', borderRadius: '12px' }}>
            <Users size={28} color="#0F172A" />
          </div>
        </div>
        <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '30px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ margin: '0 0 10px 0', color: '#64748B', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>Obras en Ejecución</p>
            <p style={{ margin: 0, fontSize: '2.5rem', fontWeight: '800', color: '#0F172A' }}>12</p>
          </div>
          <div style={{ background: '#F1F5F9', padding: '15px', borderRadius: '12px' }}>
            <HardHat size={28} color="#0F172A" />
          </div>
        </div>
        <div style={{ background: '#0F172A', borderRadius: '16px', border: '1px solid #0F172A', padding: '30px', boxShadow: '0 10px 25px -5px rgba(15,23,42,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ margin: '0 0 10px 0', color: '#94A3B8', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>Comisiones Brutas</p>
            <p style={{ margin: 0, fontSize: '2.5rem', fontWeight: '800', color: '#D4AF37' }}>$4.5<span style={{ fontSize: '1.2rem', color: '#94A3B8', marginLeft: '5px' }}>M</span></p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '12px' }}>
            <DollarSign size={28} color="#D4AF37" />
          </div>
        </div>
      </div>

      {/* TABLA DE VALIDACIONES KYC */}
      <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '40px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
        <h3 style={{ margin: '0 0 25px 0', color: '#0F172A', fontSize: '1.25rem', fontWeight: '800' }}>Mesa de Control KYC (Know Your Customer)</h3>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #E2E8F0' }}>
                <th style={{ padding: '0 15px 15px 0', color: '#64748B', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>Usuario</th>
                <th style={{ padding: '0 15px 15px 15px', color: '#64748B', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>Rol</th>
                <th style={{ padding: '0 15px 15px 15px', color: '#64748B', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>Documentos</th>
                <th style={{ padding: '0 15px 15px 15px', color: '#64748B', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>Estado</th>
                <th style={{ padding: '0 0 15px 15px', color: '#64748B', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700', textAlign: 'right' }}>Acción</th>
              </tr>
            </thead>
            <tbody>
              
              <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                <td style={{ padding: '20px 15px 20px 0' }}>
                  <p style={{ margin: 0, fontWeight: '700', color: '#0F172A', fontSize: '0.95rem' }}>Pedro Martínez</p>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748B' }}>pedro@gasfiter.cl</p>
                </td>
                <td style={{ padding: '20px 15px', color: '#475569', fontSize: '0.9rem', fontWeight: '500' }}>Maestro Especialista</td>
                <td style={{ padding: '20px 15px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ fontSize: '0.75rem', background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#475569', padding: '4px 10px', borderRadius: '6px', fontWeight: '600' }}>C. Identidad</span>
                    <span style={{ fontSize: '0.75rem', background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#475569', padding: '4px 10px', borderRadius: '6px', fontWeight: '600' }}>Certificado</span>
                  </div>
                </td>
                <td style={{ padding: '20px 15px' }}>
                  <span style={{ background: '#FFFBEB', color: '#B45309', padding: '6px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', border: '1px solid #FEF3C7' }}>Pendiente</span>
                </td>
                <td style={{ padding: '20px 0 20px 15px', textAlign: 'right' }}>
                  <button style={{ background: '#0F172A', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    Revisar <ExternalLink size={14} />
                  </button>
                </td>
              </tr>

              <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                <td style={{ padding: '20px 15px 20px 0' }}>
                  <p style={{ margin: 0, fontWeight: '700', color: '#0F172A', fontSize: '0.95rem' }}>Arquitectura S.A.</p>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748B' }}>contacto@arqs.cl</p>
                </td>
                <td style={{ padding: '20px 15px', color: '#475569', fontSize: '0.9rem', fontWeight: '500' }}>Profesional</td>
                <td style={{ padding: '20px 15px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ fontSize: '0.75rem', background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#475569', padding: '4px 10px', borderRadius: '6px', fontWeight: '600' }}>Título Univ.</span>
                  </div>
                </td>
                <td style={{ padding: '20px 15px' }}>
                  <span style={{ background: '#FFFBEB', color: '#B45309', padding: '6px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', border: '1px solid #FEF3C7' }}>Pendiente</span>
                </td>
                <td style={{ padding: '20px 0 20px 15px', textAlign: 'right' }}>
                  <button style={{ background: '#0F172A', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    Revisar <ExternalLink size={14} />
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
