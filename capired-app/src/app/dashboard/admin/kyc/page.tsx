"use client";

import React from 'react';
import { ShieldCheck, UserCheck } from 'lucide-react';

export default function AdminKYC() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '10px', borderBottom: '1px solid #E7E5E4' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#292524', margin: '0 0 4px 0', fontWeight: '800' }}>KYC & Validaciones</h2>
          <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem' }}>Verificación de identidad de Profesionales y Maestros.</p>
        </div>
      </div>

      <div style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
        <ShieldCheck size={48} color="#A8A29E" style={{ marginBottom: '15px' }} />
        <h3 style={{ margin: '0 0 10px 0', color: '#292524' }}>KYC en construcción</h3>
        <p style={{ color: '#78716C', fontSize: '0.9rem' }}>Centro de aprobación manual de certificados de antecedentes y validación de identidad.</p>
      </div>
    </div>
  );
}
