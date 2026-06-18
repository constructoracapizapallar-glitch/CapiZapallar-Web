"use client";

import React, { useState } from 'react';
import { MapPin, Search, Filter, Briefcase, Zap, Clock, DollarSign, Wallet, ArrowUpRight } from 'lucide-react';

export default function MaestroDashboard() {
  const [activeTab, setActiveTab] = useState('mapa');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: 'calc(100vh - 80px)' }}>
      
      {/* HEADER & WALLET */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid #E7E5E4' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#292524', margin: '0 0 4px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>Encontrar Pegas</h2>
          <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem' }}>Oportunidades de trabajo verificadas en tu zona.</p>
        </div>
        
        {/* Wallet Mini-Card */}
        <div style={{ background: '#292524', padding: '10px 16px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div>
            <p style={{ margin: 0, color: '#A8A29E', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>Ganancias Mes</p>
            <p style={{ margin: 0, color: '#F5F5F4', fontSize: '1.2rem', fontWeight: '800' }}>$450.000</p>
          </div>
          <button style={{ background: '#F5F5F4', color: '#292524', border: 'none', padding: '6px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Wallet size={14} /> Retirar
          </button>
        </div>
      </div>

      {/* FILTROS Y TABS */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '10px', background: '#FFFFFF', padding: '4px', borderRadius: '8px', border: '1px solid #E7E5E4' }}>
          <button 
            onClick={() => setActiveTab('mapa')}
            style={{ 
              background: activeTab === 'mapa' ? '#F5F5F4' : 'transparent', 
              border: 'none', 
              padding: '6px 16px', 
              borderRadius: '6px', 
              fontWeight: activeTab === 'mapa' ? '600' : '500', 
              color: activeTab === 'mapa' ? '#292524' : '#78716C', 
              cursor: 'pointer',
              fontSize: '0.85rem'
            }}
          >
            Vista Mapa
          </button>
          <button 
            onClick={() => setActiveTab('lista')}
            style={{ 
              background: activeTab === 'lista' ? '#F5F5F4' : 'transparent', 
              border: 'none', 
              padding: '6px 16px', 
              borderRadius: '6px', 
              fontWeight: activeTab === 'lista' ? '600' : '500', 
              color: activeTab === 'lista' ? '#292524' : '#78716C', 
              cursor: 'pointer',
              fontSize: '0.85rem'
            }}
          >
            Vista Lista
          </button>
        </div>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '6px', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Search size={14} color="#A8A29E" />
            <input type="text" placeholder="Buscar gasfiter, electricista..." style={{ border: 'none', outline: 'none', fontSize: '0.85rem', width: '200px' }} />
          </div>
          <button style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', padding: '6px 12px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '6px', color: '#292524', fontWeight: '500', fontSize: '0.85rem', cursor: 'pointer' }}>
            <Filter size={14} /> Filtros
          </button>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL: MAPA + LISTA LATERAL */}
      <div style={{ display: 'flex', gap: '20px', flex: 1, minHeight: 0 }}>
        
        {/* LISTA LATERAL DE TRABAJOS (Estilo Uber) */}
        <div style={{ width: '380px', display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto', paddingRight: '10px' }}>
          
          <h3 style={{ margin: '0 0 5px 0', fontSize: '0.9rem', color: '#292524', fontWeight: '700' }}>Cerca de Zapallar</h3>

          {/* Tarjeta de Trabajo 1 (Urgente) */}
          <div style={{ background: '#FFFFFF', border: '2px solid #292524', borderRadius: '8px', padding: '16px', cursor: 'pointer', transition: 'transform 0.2s', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-10px', right: '15px', background: '#292524', color: '#FFF', padding: '4px 10px', borderRadius: '12px', fontSize: '0.7rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Zap size={12} color="#FDE047" /> ALTA DEMANDA
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div>
                <h4 style={{ margin: '0 0 2px 0', color: '#292524', fontSize: '1rem', fontWeight: '800' }}>Fuga de Agua - Baño</h4>
                <p style={{ margin: 0, color: '#78716C', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={12} /> Cachagua (A 4.2 km)
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ display: 'block', color: '#292524', fontSize: '1.2rem', fontWeight: '800' }}>$45.000</span>
                <span style={{ color: '#10B981', fontSize: '0.7rem', fontWeight: '600' }}>Pago Seguro</span>
              </div>
            </div>

            <p style={{ margin: '0 0 12px 0', color: '#57534E', fontSize: '0.85rem', lineHeight: '1.4' }}>
              Cliente reporta rotura de cañería bajo lavamanos. Necesita reparación hoy mismo antes de las 18:00hrs.
            </p>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ flex: 1, background: '#292524', color: '#FAFAF9', border: 'none', padding: '8px', borderRadius: '6px', fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer' }}>
                Aceptar Trabajo
              </button>
            </div>
          </div>

          {/* Tarjeta de Trabajo 2 */}
          <div style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '8px', padding: '16px', cursor: 'pointer', transition: 'transform 0.2s' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div>
                <h4 style={{ margin: '0 0 2px 0', color: '#292524', fontSize: '1rem', fontWeight: '800' }}>Instalación Enchufes</h4>
                <p style={{ margin: 0, color: '#78716C', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={12} /> Papudo (A 12 km)
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ display: 'block', color: '#292524', fontSize: '1.2rem', fontWeight: '800' }}>$30.000</span>
              </div>
            </div>

            <p style={{ margin: '0 0 12px 0', color: '#57534E', fontSize: '0.85rem', lineHeight: '1.4' }}>
              Instalar 4 enchufes dobles en habitación nueva. Todo el material ya fue comprado por el cliente.
            </p>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ flex: 1, background: '#F5F5F4', color: '#292524', border: '1px solid #E7E5E4', padding: '8px', borderRadius: '6px', fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer' }}>
                Ver Detalles
              </button>
            </div>
          </div>

          {/* Tarjeta de Proyecto Constructora */}
          <div style={{ background: '#FAFAF9', border: '1px solid #E7E5E4', borderLeft: '4px solid #D4AF37', borderRadius: '8px', padding: '16px', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
              <Briefcase size={14} color="#D4AF37" />
              <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#D4AF37', textTransform: 'uppercase' }}>Constructora (Largo Plazo)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div>
                <h4 style={{ margin: '0 0 2px 0', color: '#292524', fontSize: '1rem', fontWeight: '800' }}>Cuadrilla Obra Gruesa</h4>
                <p style={{ margin: 0, color: '#78716C', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={12} /> Maitencillo (A 18 km)
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ display: 'block', color: '#292524', fontSize: '1.1rem', fontWeight: '800' }}>$45k/día</span>
              </div>
            </div>
            <button style={{ width: '100%', background: 'transparent', color: '#292524', border: '1px solid #292524', padding: '8px', borderRadius: '6px', fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer' }}>
              Postular a Proyecto
            </button>
          </div>

        </div>

        {/* MAPA B2B (MOCKUP VISUAL) */}
        <div style={{ flex: 1, background: '#E7E5E4', borderRadius: '12px', overflow: 'hidden', border: '1px solid #E7E5E4', position: 'relative' }}>
          {/* Iframe de Google Maps como Placeholder Estético (Modo Claro/Minimalista) */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26857.94042861217!2d-71.46461429999999!3d-32.55392095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scl!4v1700000000000!5m2!1ses-419!2scl" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.6) contrast(1.1) opacity(0.8)' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* OVERLAY DE PINES (Simulando la App) */}
          <div style={{ position: 'absolute', top: '40%', left: '45%', transform: 'translate(-50%, -50%)', background: '#292524', padding: '6px 12px', borderRadius: '20px', color: '#FFF', fontWeight: '800', fontSize: '0.85rem', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
            <Zap size={14} color="#FDE047" /> $45.000
            <div style={{ position: 'absolute', bottom: '-6px', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '6px solid #292524' }}></div>
          </div>

          <div style={{ position: 'absolute', top: '60%', left: '30%', transform: 'translate(-50%, -50%)', background: '#FFFFFF', padding: '6px 12px', borderRadius: '20px', color: '#292524', fontWeight: '700', fontSize: '0.85rem', border: '1px solid #E7E5E4', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
            $30.000
            <div style={{ position: 'absolute', bottom: '-6px', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '6px solid #FFFFFF' }}></div>
          </div>

          <div style={{ position: 'absolute', top: '25%', left: '60%', transform: 'translate(-50%, -50%)', background: '#FFFFFF', padding: '6px 12px', borderRadius: '20px', color: '#292524', fontWeight: '700', fontSize: '0.85rem', border: '1px solid #E7E5E4', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
            Obra Mayor
            <div style={{ position: 'absolute', bottom: '-6px', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '6px solid #FFFFFF' }}></div>
          </div>

          {/* Botón Flotante "Mi Ubicación" */}
          <button style={{ position: 'absolute', bottom: '20px', right: '20px', background: '#FFFFFF', border: 'none', padding: '12px', borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', cursor: 'pointer' }}>
            <MapPin size={20} color="#292524" />
          </button>
        </div>

      </div>

    </div>
  );
}
