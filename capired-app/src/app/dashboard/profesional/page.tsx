"use client";

import React from 'react';
import { Briefcase, Building, Search, Filter, Calendar, MapPin, ChevronRight, FileText } from 'lucide-react';

export default function ProfesionalDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '10px', borderBottom: '1px solid #E7E5E4' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#292524', margin: '0 0 4px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>Tablón de Obras Mayores</h2>
          <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem' }}>Encuentra proyectos de arquitectura, cálculo y especialidades.</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
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
          }}>
            <FileText size={16} /> Mis Postulaciones
          </button>
          <button style={{ 
            background: '#292524', 
            color: '#FAFAF9', 
            border: 'none', 
            padding: '8px 16px', 
            borderRadius: '6px', 
            fontWeight: '600', 
            fontSize: '0.85rem',
            cursor: 'pointer', 
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <Briefcase size={16} /> Publicar Servicio
          </button>
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
            placeholder="Ej: 'Proyecto Arquitectura', 'Cálculo Estructural'..." 
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
          <Filter size={16} /> Todos los filtros
        </button>
      </div>

      {/* LISTADO DE OBRAS MAYORES */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        {/* Obra Mayor 1 */}
        <div style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', transition: 'box-shadow 0.2s', cursor: 'pointer' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ width: '50px', height: '50px', background: '#F5F5F4', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #E7E5E4' }}>
                <Building size={24} color="#292524" />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ background: '#F5F5F4', color: '#57534E', fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px', fontWeight: '700', letterSpacing: '0.5px' }}>ARQUITECTURA</span>
                  <span style={{ color: '#10B981', fontSize: '0.75rem', fontWeight: '600' }}>• Recibiendo propuestas</span>
                </div>
                <h3 style={{ margin: '0 0 4px 0', color: '#292524', fontSize: '1.2rem', fontWeight: '800' }}>Proyecto Casa Condominio 240m2</h3>
                <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> Zapallar</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> Cierre: 30 Junio</span>
                </p>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ margin: '0 0 4px 0', color: '#78716C', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: '600' }}>Presupuesto Estimado</p>
              <h4 style={{ margin: 0, color: '#292524', fontSize: '1.4rem', fontWeight: '800' }}>200 - 250 UF</h4>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #F5F5F4', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ margin: 0, color: '#57534E', fontSize: '0.85rem', maxWidth: '70%', lineHeight: '1.5' }}>
              Constructora Los Cedros busca estudio de arquitectura para diseño conceptual y desarrollo de especialidades de vivienda unifamiliar de alto estándar.
            </p>
            <button style={{ background: 'transparent', color: '#292524', border: '1px solid #292524', padding: '8px 16px', borderRadius: '6px', fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
              Ver Bases <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Obra Mayor 2 */}
        <div style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', transition: 'box-shadow 0.2s', cursor: 'pointer' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ width: '50px', height: '50px', background: '#F5F5F4', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #E7E5E4' }}>
                <Briefcase size={24} color="#78716C" />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ background: '#F5F5F4', color: '#57534E', fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px', fontWeight: '700', letterSpacing: '0.5px' }}>CÁLCULO ESTRUCTURAL</span>
                </div>
                <h3 style={{ margin: '0 0 4px 0', color: '#292524', fontSize: '1.2rem', fontWeight: '800' }}>Revisión Proyecto Muro Contención</h3>
                <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> Papudo</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> Cierre: 22 Junio</span>
                </p>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ margin: '0 0 4px 0', color: '#78716C', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: '600' }}>Presupuesto Estimado</p>
              <h4 style={{ margin: 0, color: '#292524', fontSize: '1.4rem', fontWeight: '800' }}>30 - 45 UF</h4>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #F5F5F4', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ margin: 0, color: '#57534E', fontSize: '0.85rem', maxWidth: '70%', lineHeight: '1.5' }}>
              Se requiere ingeniero calculista para firma y revisión estructural de muro de contención en terreno con pendiente fuerte. Urgente.
            </p>
            <button style={{ background: 'transparent', color: '#292524', border: '1px solid #292524', padding: '8px 16px', borderRadius: '6px', fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
              Ver Bases <ChevronRight size={14} />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
