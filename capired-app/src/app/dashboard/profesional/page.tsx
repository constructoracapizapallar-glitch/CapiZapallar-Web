"use client";

import React, { useState, useEffect } from 'react';
import { MapPin, Search, Filter, Briefcase, Zap, Clock, DollarSign, Wallet, ArrowUpRight, FileText } from 'lucide-react';
import { db } from '../../../lib/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('../../../components/MapComponent'), { ssr: false });

export default function ProfesionalRadar() {
  const [activeTab, setActiveTab] = useState('todas');
  const [obras, setObras] = useState<any[]>([]);
  const [selectedObra, setSelectedObra] = useState<any>(null);

  useEffect(() => {
    fetchObras();
  }, []);

  const fetchObras = async () => {
    try {
      const q = query(collection(db, 'obrasMayores'), where('estado', '==', 'ABIERTA'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setObras(data);
    } catch (error) {
      console.error("Error fetching obras", error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 80px)', gap: '20px' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '10px' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#292524', margin: '0 0 4px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>Radar de Proyectos</h2>
          <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem' }}>Proyectos de arquitectura y cálculo estructural.</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', flex: 1, minHeight: 0 }}>
        
        {/* LEFT PANEL */}
        <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '15px', overflowY: 'auto', paddingRight: '5px' }}>
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ flex: 1, background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '6px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Search size={16} color="#A8A29E" />
              <input type="text" placeholder="Buscar por especialidad..." style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.85rem', color: '#292524' }} />
            </div>
            <button style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', padding: '8px 12px', borderRadius: '6px', color: '#292524', cursor: 'pointer' }}>
              <Filter size={16} />
            </button>
          </div>

          <div style={{ display: 'flex', gap: '8px', paddingBottom: '5px' }}>
            <button onClick={() => setActiveTab('todas')} style={{ flex: 1, background: activeTab === 'todas' ? '#292524' : '#E7E5E4', color: activeTab === 'todas' ? '#FFFFFF' : '#78716C', border: 'none', padding: '8px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s' }}>
              Todas
            </button>
            <button onClick={() => setActiveTab('arquitectura')} style={{ flex: 1, background: activeTab === 'arquitectura' ? '#292524' : '#E7E5E4', color: activeTab === 'arquitectura' ? '#FFFFFF' : '#78716C', border: 'none', padding: '8px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s' }}>
              Arquitectura
            </button>
            <button onClick={() => setActiveTab('calculo')} style={{ flex: 1, background: activeTab === 'calculo' ? '#292524' : '#E7E5E4', color: activeTab === 'calculo' ? '#FFFFFF' : '#78716C', border: 'none', padding: '8px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s' }}>
              Cálculo
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {obras.length === 0 ? (
              <div style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#78716C' }}>No hay proyectos de especialidad disponibles.</p>
              </div>
            ) : (
              obras.map((obra) => (
                <div 
                  key={obra.id} 
                  onClick={() => setSelectedObra(obra)}
                  style={{ 
                    background: selectedObra?.id === obra.id ? '#FAFAF9' : '#FFFFFF', 
                    border: `1px solid ${selectedObra?.id === obra.id ? '#292524' : '#E7E5E4'}`, 
                    borderRadius: '12px', 
                    padding: '16px', 
                    cursor: 'pointer', 
                    transition: 'all 0.2s' 
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '1rem', color: '#292524', fontWeight: '700' }}>{obra.titulo}</h3>
                    <span style={{ background: '#292524', color: '#FAFAF9', padding: '2px 6px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: '700' }}>NUEVO</span>
                  </div>
                  <p style={{ margin: '0 0 10px 0', fontSize: '0.8rem', color: '#78716C', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Briefcase size={12}/> {obra.especialidad}
                  </p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#10B981' }}>
                      <DollarSign size={14} />
                      <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>{obra.presupuesto}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* RIGHT PANEL - MAP */}
        <div style={{ flex: 1, background: '#E7E5E4', borderRadius: '12px', overflow: 'hidden', position: 'relative', border: '1px solid #D6D3D1' }}>
          <MapWithNoSSR obras={obras} onSelectObra={setSelectedObra} />
          
          {selectedObra && (
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', background: '#FFFFFF', borderRadius: '12px', padding: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '1px solid #E7E5E4', zIndex: 1000 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                <div>
                  <h3 style={{ margin: '0 0 5px 0', fontSize: '1.25rem', color: '#292524', fontWeight: '800' }}>{selectedObra.titulo}</h3>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#78716C', display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} color="#A8A29E" /> Constructora ID: {selectedObra.constructoraId.substring(0,8)}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ display: 'block', fontSize: '1.1rem', fontWeight: '800', color: '#10B981' }}>{selectedObra.presupuesto}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  onClick={() => window.location.href = '/dashboard/profesional/postulaciones'}
                  style={{ flex: 1, background: '#292524', color: '#FFFFFF', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
                  <FileText size={16} /> Preparar Postulación
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
