"use client";

import React, { useState, useEffect } from 'react';
import { Briefcase, Building, Search, Filter, Calendar, MapPin, ChevronRight, FileText, X } from 'lucide-react';
import { db, auth } from '../../../lib/firebase';
import { collection, addDoc, getDocs, query, orderBy, where } from 'firebase/firestore';

export default function ProfesionalDashboard() {
  const [obras, setObras] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedObra, setSelectedObra] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form Postulación
  const [presupuestoPropuesto, setPresupuestoPropuesto] = useState('');
  const [tiempoEstimado, setTiempoEstimado] = useState('');
  const [mensaje, setMensaje] = useState('');

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

  const handlePostular = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const currentUser = auth.currentUser;
      await addDoc(collection(db, 'postulaciones'), {
        obraId: selectedObra.id,
        profesionalId: currentUser?.uid || 'anon',
        presupuestoPropuesto,
        tiempoEstimado,
        mensaje,
        estado: 'PENDIENTE',
        createdAt: new Date(),
      });
      setShowModal(false);
      setPresupuestoPropuesto('');
      setTiempoEstimado('');
      setMensaje('');
      alert("Postulación enviada con éxito");
    } catch (error) {
      console.error("Error saving postulación", error);
      alert("Error al enviar postulación");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openPostulacion = (obra: any) => {
    setSelectedObra(obra);
    setShowModal(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '10px', borderBottom: '1px solid #E7E5E4' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#292524', margin: '0 0 4px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>Tablón de Obras Mayores</h2>
          <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem' }}>Encuentra proyectos de arquitectura, cálculo y especialidades.</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ 
            background: '#FFFFFF', 
            border: '1px solid #E7E5E4', 
            borderRadius: '6px', 
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            width: '250px'
          }}>
            <Search size={16} color="#A8A29E" />
            <input 
              type="text" 
              placeholder="Buscar proyectos..." 
              style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.85rem', color: '#292524' }} 
            />
          </div>
        </div>
      </div>

      {/* TABS FILTROS */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <button style={{ background: '#292524', color: '#FFF', border: 'none', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer' }}>
          Todas las Obras
        </button>
        <button style={{ background: '#FFFFFF', color: '#78716C', border: '1px solid #E7E5E4', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '500', cursor: 'pointer' }}>
          Arquitectura
        </button>
        <button style={{ background: '#FFFFFF', color: '#78716C', border: '1px solid #E7E5E4', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '500', cursor: 'pointer' }}>
          Cálculo Estructural
        </button>
      </div>

      {/* LISTADO DE OBRAS MAYORES */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {obras.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#A8A29E', background: '#FFF', borderRadius: '8px', border: '1px solid #E7E5E4' }}>
            No hay obras mayores abiertas en este momento.
          </div>
        ) : (
          obras.map((obra) => (
            <div key={obra.id} style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', transition: 'box-shadow 0.2s', cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span style={{ background: '#F5F5F4', color: '#57534E', padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '600' }}>{obra.especialidad}</span>
                    <span style={{ color: '#A8A29E', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={12}/> Hace 2 hrs</span>
                  </div>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '1.25rem', color: '#292524', fontWeight: '700' }}>{obra.titulo}</h3>
                  <p style={{ margin: 0, color: '#78716C', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Building size={14} color="#A8A29E" /> Constructora ID: {obra.constructoraId.substring(0,8)}
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ margin: '0 0 4px 0', fontSize: '1.25rem', color: '#292524', fontWeight: '800' }}>{obra.presupuesto}</p>
                  <p style={{ margin: 0, color: '#10B981', fontSize: '0.75rem', fontWeight: '600' }}>{obra.estado}</p>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px dashed #E7E5E4' }}>
                <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem' }}>{obra.propuestas || 0} propuestas enviadas</p>
                <button 
                  onClick={() => openPostulacion(obra)}
                  style={{ background: 'transparent', color: '#292524', border: '1px solid #292524', padding: '8px 16px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Postular Ahora <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* MODAL POSTULACIÓN */}
      {showModal && selectedObra && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.5)', zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{
            background: '#FFFFFF', width: '100%', maxWidth: '500px',
            borderRadius: '12px', padding: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#292524', fontWeight: '800' }}>Enviar Propuesta</h3>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#A8A29E' }}>
                <X size={20} />
              </button>
            </div>
            
            <p style={{ color: '#78716C', fontSize: '0.85rem', marginBottom: '20px' }}>
              Estás postulando a: <strong>{selectedObra.titulo}</strong>
            </p>

            <form onSubmit={handlePostular} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', fontWeight: '600' }}>Tu Presupuesto</label>
                  <input required value={presupuestoPropuesto} onChange={e => setPresupuestoPropuesto(e.target.value)} type="text" placeholder="Ej: $2.8M" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #E7E5E4' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', fontWeight: '600' }}>Tiempo Estimado</label>
                  <input required value={tiempoEstimado} onChange={e => setTiempoEstimado(e.target.value)} type="text" placeholder="Ej: 30 días" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #E7E5E4' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', fontWeight: '600' }}>Mensaje para la Constructora</label>
                <textarea required value={mensaje} onChange={e => setMensaje(e.target.value)} rows={4} placeholder="Describe brevemente por qué eres el ideal para esta obra..." style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #E7E5E4', fontFamily: 'inherit' }} />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                style={{ 
                  marginTop: '10px', background: '#292524', color: '#FFF', 
                  padding: '12px', borderRadius: '6px', border: 'none', 
                  fontWeight: '600', cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1
                }}>
                {isSubmitting ? 'Enviando...' : 'Enviar Postulación'}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
