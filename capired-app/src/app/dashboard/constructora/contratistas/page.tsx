"use client";

import React from 'react';
import { Users, Search, Filter, Star, Phone, Mail, MoreHorizontal } from 'lucide-react';

export default function ConstructoraContratistas() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '10px', borderBottom: '1px solid #E7E5E4' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#292524', margin: '0 0 4px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>Red de Contratistas</h2>
          <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem' }}>Directorio de maestros y especialistas que trabajan en tus obras.</p>
        </div>
      </div>

      {/* FILTROS Y BÚSQUEDA */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <div style={{ 
          flex: 1, 
          background: '#FFFFFF', 
          border: '1px solid #E7E5E4', 
          borderRadius: '6px', 
          padding: '8px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Search size={16} color="#A8A29E" />
          <input 
            type="text" 
            placeholder="Buscar contratista por nombre o especialidad..." 
            style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.85rem', color: '#292524' }} 
          />
        </div>
        <button style={{
          background: '#FFFFFF',
          border: '1px solid #E7E5E4',
          padding: '8px 16px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: '#292524',
          fontSize: '0.85rem',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
          <Filter size={16} /> Especialidad
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px' }}>
        
        <div style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '8px', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#F5F5F4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: '800', color: '#292524', border: '1px solid #E7E5E4' }}>
                JP
              </div>
              <div>
                <h3 style={{ margin: '0 0 2px 0', fontSize: '1.1rem', color: '#292524', fontWeight: '700' }}>Juan Pérez</h3>
                <p style={{ margin: 0, color: '#78716C', fontSize: '0.8rem', fontWeight: '500' }}>Gasfitería SEC</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#FEF3C7', color: '#D97706', padding: '2px 6px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700' }}>
              <Star size={12} fill="currentColor" /> 4.9
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
            <p style={{ margin: 0, color: '#57534E', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}><Phone size={14} color="#A8A29E" /> +56 9 1234 5678</p>
            <p style={{ margin: 0, color: '#57534E', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={14} color="#A8A29E" /> jperez@gasfiter.cl</p>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ flex: 1, background: '#F5F5F4', color: '#292524', border: '1px solid #E7E5E4', padding: '6px', borderRadius: '4px', fontWeight: '600', fontSize: '0.8rem', cursor: 'pointer' }}>
              Ver Perfil
            </button>
            <button style={{ flex: 1, background: '#292524', color: '#FAFAF9', border: 'none', padding: '6px', borderRadius: '4px', fontWeight: '600', fontSize: '0.8rem', cursor: 'pointer' }}>
              Asignar Obra
            </button>
          </div>
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '8px', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#F5F5F4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: '800', color: '#292524', border: '1px solid #E7E5E4' }}>
                RG
              </div>
              <div>
                <h3 style={{ margin: '0 0 2px 0', fontSize: '1.1rem', color: '#292524', fontWeight: '700' }}>Raúl Gómez</h3>
                <p style={{ margin: 0, color: '#78716C', fontSize: '0.8rem', fontWeight: '500' }}>Obra Gruesa y Radieres</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#FEF3C7', color: '#D97706', padding: '2px 6px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700' }}>
              <Star size={12} fill="currentColor" /> 4.7
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
            <p style={{ margin: 0, color: '#57534E', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}><Phone size={14} color="#A8A29E" /> +56 9 8765 4321</p>
            <p style={{ margin: 0, color: '#57534E', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={14} color="#A8A29E" /> raul@constructoragomez.cl</p>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ flex: 1, background: '#F5F5F4', color: '#292524', border: '1px solid #E7E5E4', padding: '6px', borderRadius: '4px', fontWeight: '600', fontSize: '0.8rem', cursor: 'pointer' }}>
              Ver Perfil
            </button>
            <button style={{ flex: 1, background: '#292524', color: '#FAFAF9', border: 'none', padding: '6px', borderRadius: '4px', fontWeight: '600', fontSize: '0.8rem', cursor: 'pointer' }}>
              Asignar Obra
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
