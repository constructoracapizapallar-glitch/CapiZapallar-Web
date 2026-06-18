"use client";

import React, { useState, useEffect } from 'react';
import { FileText, Plus, Search, Filter, Eye, MoreHorizontal, MapPin, X } from 'lucide-react';
import { db, auth } from '../../../../lib/firebase';
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';

export default function ConstructoraObrasMayores() {
  const [obras, setObras] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form state
  const [titulo, setTitulo] = useState('');
  const [especialidad, setEspecialidad] = useState('Obra Gruesa');
  const [presupuesto, setPresupuesto] = useState('');
  const [latitud, setLatitud] = useState('-32.5539'); // Zapallar approx
  const [longitud, setLongitud] = useState('-71.4646');

  useEffect(() => {
    fetchObras();
  }, []);

  const fetchObras = async () => {
    try {
      const q = query(collection(db, 'obrasMayores'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setObras(data);
    } catch (error) {
      console.error("Error fetching obras", error);
    }
  };

  const handleCrearObra = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const currentUser = auth.currentUser;
      await addDoc(collection(db, 'obrasMayores'), {
        titulo,
        especialidad,
        presupuesto,
        latitud: parseFloat(latitud),
        longitud: parseFloat(longitud),
        estado: 'ABIERTA',
        constructoraId: currentUser?.uid || 'anon',
        createdAt: new Date(),
        propuestas: 0
      });
      setShowModal(false);
      setTitulo('');
      setPresupuesto('');
      fetchObras(); // Refresh
    } catch (error) {
      console.error("Error saving obra", error);
      alert("Error al guardar la Obra Mayor");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '10px', borderBottom: '1px solid #E7E5E4' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#292524', margin: '0 0 4px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>Obras Mayores Activas</h2>
          <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem' }}>Gestiona los proyectos y recibe propuestas de contratistas.</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          style={{ 
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
          <Plus size={16} /> Crear Obra Mayor
        </button>
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
            placeholder="Buscar obra por nombre o ID..." 
            style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.85rem', color: '#292524' }} 
          />
        </div>
      </div>

      <div style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '8px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ background: '#F5F5F4', borderBottom: '1px solid #E7E5E4' }}>
              <th style={{ padding: '12px 16px', color: '#78716C', fontWeight: '600' }}>Proyecto / Obra</th>
              <th style={{ padding: '12px 16px', color: '#78716C', fontWeight: '600' }}>Especialidad</th>
              <th style={{ padding: '12px 16px', color: '#78716C', fontWeight: '600' }}>Presupuesto Estimado</th>
              <th style={{ padding: '12px 16px', color: '#78716C', fontWeight: '600', textAlign: 'center' }}>Propuestas</th>
              <th style={{ padding: '12px 16px', color: '#78716C', fontWeight: '600' }}>Estado</th>
              <th style={{ padding: '12px 16px', color: '#78716C', fontWeight: '600', textAlign: 'right' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {obras.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ padding: '24px', textAlign: 'center', color: '#A8A29E' }}>
                  No hay obras publicadas todavía. Crea tu primera Obra Mayor.
                </td>
              </tr>
            ) : (
              obras.map((obra) => (
                <tr key={obra.id} style={{ borderBottom: '1px solid #F5F5F4', transition: 'background 0.2s', cursor: 'pointer' }}>
                  <td style={{ padding: '12px 16px' }}>
                    <p style={{ margin: 0, fontWeight: '700', color: '#292524' }}>{obra.titulo}</p>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: '#78716C' }}>ID: {obra.id.substring(0, 8)}</p>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#57534E', fontWeight: '500' }}>{obra.especialidad}</td>
                  <td style={{ padding: '12px 16px', color: '#292524', fontWeight: '600' }}>{obra.presupuesto}</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                    <span style={{ background: '#292524', color: '#FAFAF9', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700' }}>
                      {obra.propuestas || 0}
                    </span>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{ border: '1px solid #10B981', color: '#10B981', background: '#ECFDF5', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: '700' }}>{obra.estado}</span>
                  </td>
                  <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                    <button style={{ background: 'transparent', border: 'none', color: '#78716C', cursor: 'pointer' }}><Eye size={18} /></button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL CREAR OBRA */}
      {showModal && (
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
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#292524', fontWeight: '800' }}>Nueva Obra Mayor</h3>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#A8A29E' }}>
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleCrearObra} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', fontWeight: '600' }}>Título del Proyecto</label>
                <input required value={titulo} onChange={e => setTitulo(e.target.value)} type="text" placeholder="Ej: Techumbre Casa Zapallar" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #E7E5E4' }} />
              </div>
              
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', fontWeight: '600' }}>Especialidad</label>
                  <select value={especialidad} onChange={e => setEspecialidad(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #E7E5E4', background: '#FFFFFF' }}>
                    <option>Obra Gruesa</option>
                    <option>Carpintería</option>
                    <option>Gasfitería</option>
                    <option>Electricidad</option>
                    <option>Terminaciones</option>
                    <option>Arquitectura</option>
                  </select>
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', fontWeight: '600' }}>Presupuesto Rango</label>
                  <input required value={presupuesto} onChange={e => setPresupuesto(e.target.value)} type="text" placeholder="Ej: $2.5M - $3.2M" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #E7E5E4' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', fontWeight: '600' }}>Coordenadas GPS (Para el Mapa B2B)</label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <input required value={latitud} onChange={e => setLatitud(e.target.value)} type="text" placeholder="Latitud" style={{ width: '50%', padding: '10px', borderRadius: '6px', border: '1px solid #E7E5E4' }} />
                  <input required value={longitud} onChange={e => setLongitud(e.target.value)} type="text" placeholder="Longitud" style={{ width: '50%', padding: '10px', borderRadius: '6px', border: '1px solid #E7E5E4' }} />
                </div>
                <p style={{ margin: '5px 0 0', fontSize: '0.75rem', color: '#A8A29E' }}>Por defecto: Coordenadas de Zapallar.</p>
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
                {isSubmitting ? 'Publicando...' : 'Publicar Obra Mayor'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
