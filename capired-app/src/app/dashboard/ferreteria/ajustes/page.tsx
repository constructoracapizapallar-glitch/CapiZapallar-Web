"use client";

import React from 'react';
import { Settings, Save, MapPin, Truck, Building } from 'lucide-react';

export default function FerreteriaAjustes() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '10px' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#292524', margin: '0 0 4px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>Ajustes de Negocio</h2>
          <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem' }}>Configura tu perfil B2B y logística.</p>
        </div>
        <button style={{ background: '#292524', color: '#FFFFFF', padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Save size={16} /> Guardar Cambios
        </button>
      </div>

      <div style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '12px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
        
        {/* SECCION 1 */}
        <div>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '1.1rem', color: '#292524', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Building size={18} color="#78716C" /> Información de la Empresa
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '0.85rem', color: '#78716C', fontWeight: '600' }}>Razón Social</label>
              <input type="text" defaultValue="Ferretería El Maestro SpA" style={{ padding: '10px', borderRadius: '6px', border: '1px solid #E7E5E4', outline: 'none', color: '#292524' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '0.85rem', color: '#78716C', fontWeight: '600' }}>RUT Comercial</label>
              <input type="text" defaultValue="76.123.456-7" style={{ padding: '10px', borderRadius: '6px', border: '1px solid #E7E5E4', outline: 'none', color: '#292524' }} />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #E7E5E4', margin: '5px 0' }} />

        {/* SECCION 2 */}
        <div>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '1.1rem', color: '#292524', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={18} color="#78716C" /> Ubicación y Radar
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '15px' }}>
            <label style={{ fontSize: '0.85rem', color: '#78716C', fontWeight: '600' }}>Dirección Matriz</label>
            <input type="text" defaultValue="Av. Januario Ovalle 120, Zapallar" style={{ padding: '10px', borderRadius: '6px', border: '1px solid #E7E5E4', outline: 'none', color: '#292524' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.85rem', color: '#78716C', fontWeight: '600' }}>Radio de Cobertura en Radar B2B (km)</label>
            <input type="number" defaultValue={25} style={{ padding: '10px', borderRadius: '6px', border: '1px solid #E7E5E4', outline: 'none', color: '#292524', width: '150px' }} />
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #E7E5E4', margin: '5px 0' }} />

        {/* SECCION 3 */}
        <div>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '1.1rem', color: '#292524', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Truck size={18} color="#78716C" /> Logística
          </h3>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px', accentColor: '#292524' }} />
            <span style={{ fontSize: '0.9rem', color: '#292524', fontWeight: '500' }}>Ofrecer despacho gratuito a Constructoras sobre $1.000.000</span>
          </label>
        </div>

      </div>
    </div>
  );
}
