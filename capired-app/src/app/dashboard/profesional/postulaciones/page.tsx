"use client";

import React, { useState, useEffect } from 'react';
import { Briefcase, Building, Search, Filter, Calendar, MapPin, ChevronRight, FileText, X, Clock, CheckCircle, XCircle } from 'lucide-react';
import { db, auth } from '../../../../lib/firebase';
import { collection, addDoc, getDocs, query, orderBy, where } from 'firebase/firestore';

export default function ProfesionalDashboard() {
  const [activeTab, setActiveTab] = useState('explorar'); // 'explorar' | 'mis_postulaciones'
  const [obras, setObras] = useState<any[]>([]);
  const [misPostulaciones, setMisPostulaciones] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedObra, setSelectedObra] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form Postulación
  const [presupuestoPropuesto, setPresupuestoPropuesto] = useState('');
  const [tiempoEstimado, setTiempoEstimado] = useState('');
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    // Escuchar el estado de autenticación para estar seguros de tener el UID
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      fetchObras();
      if (user) {
        fetchMisPostulaciones(user.uid);
      }
    });
    return () => unsubscribe();
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

  const fetchMisPostulaciones = async (uid: string) => {
    try {
      const q = query(collection(db, 'postulaciones'), where('profesionalId', '==', uid));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMisPostulaciones(data);
    } catch (error) {
      console.error("Error fetching mis postulaciones", error);
    }
  };

  const handlePostular = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const currentUser = auth.currentUser;
      if(!currentUser) {
        alert("Debes iniciar sesión para postular");
        setIsSubmitting(false);
        return;
      }
      await addDoc(collection(db, 'postulaciones'), {
        obraId: selectedObra.id,
        obraTitulo: selectedObra.titulo, // Para verlo fácil en la otra pestaña
        profesionalId: currentUser.uid,
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
      fetchMisPostulaciones(currentUser.uid); // Refrescar lista
      setActiveTab('mis_postulaciones'); // Moverlo a la pestaña de postulaciones
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

  const getStatusStyle = (estado: string) => {
    switch(estado) {
      case 'PENDIENTE': return { color: '#D97706', bg: '#FEF3C7', icon: <Clock size={16} /> };
      case 'APROBADA': return { color: '#059669', bg: '#D1FAE5', icon: <CheckCircle size={16} /> };
      case 'RECHAZADA': return { color: '#DC2626', bg: '#FEE2E2', icon: <XCircle size={16} /> };
      default: return { color: '#78716C', bg: '#F5F5F4', icon: <Clock size={16} /> };
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '10px', borderBottom: '1px solid #E7E5E4' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#292524', margin: '0 0 4px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>Obras y Proyectos</h2>
          <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem' }}>Encuentra proyectos o revisa tus presupuestos enviados.</p>
        </div>
      </div>

      {/* TABS PRINCIPALES */}
      <div style={{ display: 'flex', gap: '20px', borderBottom: '1px solid #E7E5E4', paddingBottom: '10px' }}>
        <button 
          onClick={() => setActiveTab('explorar')}
          style={{ 
            background: 'none', border: 'none', padding: '0 0 8px 0', fontSize: '1rem', fontWeight: '600', cursor: 'pointer',
            color: activeTab === 'explorar' ? '#292524' : '#A8A29E',
            borderBottom: activeTab === 'explorar' ? '2px solid #292524' : '2px solid transparent'
          }}>
          Explorar Obras Mayores
        </button>
        <button 
          onClick={() => setActiveTab('mis_postulaciones')}
          style={{ 
            background: 'none', border: 'none', padding: '0 0 8px 0', fontSize: '1rem', fontWeight: '600', cursor: 'pointer',
            color: activeTab === 'mis_postulaciones' ? '#292524' : '#A8A29E',
            borderBottom: activeTab === 'mis_postulaciones' ? '2px solid #292524' : '2px solid transparent'
          }}>
          Mis Postulaciones Enviadas
        </button>
      </div>

      {activeTab === 'explorar' && (
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
                      <span style={{ color: '#10B981', background: '#ECFDF5', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700' }}>{obra.estado}</span>
                    </div>
                    <h3 style={{ margin: '0 0 4px 0', fontSize: '1.25rem', color: '#292524', fontWeight: '700' }}>{obra.titulo}</h3>
                    <p style={{ margin: 0, color: '#78716C', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Building size={14} color="#A8A29E" /> Constructora ID: {obra.constructoraId?.substring(0,8) || 'anon'}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ margin: '0 0 4px 0', fontSize: '1.25rem', color: '#292524', fontWeight: '800' }}>{obra.presupuesto}</p>
                    <p style={{ margin: 0, color: '#78716C', fontSize: '0.75rem', fontWeight: '500' }}>Presupuesto Estimado</p>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px dashed #E7E5E4' }}>
                  <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem' }}>{obra.propuestas || 0} propuestas enviadas en total</p>
                  <button 
                    onClick={() => openPostulacion(obra)}
                    style={{ background: 'transparent', color: '#292524', border: '1px solid #292524', padding: '8px 16px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Preparar Propuesta <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {activeTab === 'mis_postulaciones' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {misPostulaciones.length === 0 ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#A8A29E', background: '#FFF', borderRadius: '8px', border: '1px solid #E7E5E4' }}>
              Aún no has enviado ninguna propuesta.
            </div>
          ) : (
            misPostulaciones.map((postulacion) => {
              const status = getStatusStyle(postulacion.estado);
              return (
                <div key={postulacion.id} style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '8px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <p style={{ margin: '0 0 4px 0', fontSize: '0.75rem', color: '#78716C' }}>Postulación a Obra</p>
                      <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: '#292524', fontWeight: '700' }}>{postulacion.obraTitulo || 'Obra Desconocida'}</h3>
                      <div style={{ display: 'flex', gap: '15px' }}>
                        <p style={{ margin: 0, color: '#57534E', fontSize: '0.85rem', fontWeight: '600' }}>Propuesta: {postulacion.presupuestoPropuesto}</p>
                        <p style={{ margin: 0, color: '#57534E', fontSize: '0.85rem', fontWeight: '600' }}>Tiempo: {postulacion.tiempoEstimado}</p>
                      </div>
                    </div>
                    <div>
                      <span style={{ 
                        background: status.bg, color: status.color, 
                        padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '700',
                        display: 'flex', alignItems: 'center', gap: '6px'
                      }}>
                        {status.icon} {postulacion.estado}
                      </span>
                    </div>
                  </div>
                  <div style={{ background: '#F5F5F4', padding: '12px', borderRadius: '6px' }}>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#78716C', fontStyle: 'italic' }}>"{postulacion.mensaje}"</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

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
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#292524', fontWeight: '800' }}>Enviar Propuesta Económica</h3>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#A8A29E' }}>
                <X size={20} />
              </button>
            </div>
            
            <p style={{ color: '#78716C', fontSize: '0.85rem', marginBottom: '20px' }}>
              Obra: <strong>{selectedObra.titulo}</strong>
            </p>

            <form onSubmit={handlePostular} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', fontWeight: '600' }}>Tu Presupuesto</label>
                  <input required value={presupuestoPropuesto} onChange={e => setPresupuestoPropuesto(e.target.value)} type="text" placeholder="Ej: $2.800.000" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #E7E5E4' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', fontWeight: '600' }}>Tiempo Estimado</label>
                  <input required value={tiempoEstimado} onChange={e => setTiempoEstimado(e.target.value)} type="text" placeholder="Ej: 30 días hábiles" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #E7E5E4' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', fontWeight: '600' }}>Mensaje para la Constructora</label>
                <textarea required value={mensaje} onChange={e => setMensaje(e.target.value)} rows={4} placeholder="Describe brevemente por qué tu equipo es el ideal para ejecutar esta partida..." style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #E7E5E4', fontFamily: 'inherit' }} />
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
                {isSubmitting ? 'Enviando...' : 'Enviar Postulación Oficial'}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
