"use client";

import React, { useState, useEffect } from 'react';
import { Package, Plus, Search, Filter, Edit, Trash2, X } from 'lucide-react';
import { db, auth } from '../../../../lib/firebase';
import { collection, addDoc, getDocs, query, orderBy, where } from 'firebase/firestore';

export default function FerreteriaDashboard() {
  const [productos, setProductos] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form Producto
  const [nombre, setNombre] = useState('');
  const [sku, setSku] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    try {
      const q = query(collection(db, 'productosFerreteria'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProductos(data);
    } catch (error) {
      console.error("Error fetching productos", error);
    }
  };

  const handleCrearProducto = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const currentUser = auth.currentUser;
      await addDoc(collection(db, 'productosFerreteria'), {
        nombre,
        sku,
        precio: parseFloat(precio),
        stock: parseInt(stock, 10),
        ferreteriaId: currentUser?.uid || 'anon',
        createdAt: new Date(),
      });
      setShowModal(false);
      setNombre('');
      setSku('');
      setPrecio('');
      setStock('');
      fetchProductos();
    } catch (error) {
      console.error("Error saving producto", error);
      alert("Error al guardar el producto");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '10px', borderBottom: '1px solid #E7E5E4' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#292524', margin: '0 0 4px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>Catálogo B2B</h2>
          <p style={{ margin: 0, color: '#78716C', fontSize: '0.85rem' }}>Gestiona tu inventario para Constructoras y Maestros.</p>
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
          <Plus size={16} /> Agregar Producto
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
            placeholder="Buscar por SKU o Nombre..." 
            style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.85rem', color: '#292524' }} 
          />
        </div>
      </div>

      <div style={{ background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '8px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ background: '#F5F5F4', borderBottom: '1px solid #E7E5E4' }}>
              <th style={{ padding: '12px 16px', color: '#78716C', fontWeight: '600' }}>Producto</th>
              <th style={{ padding: '12px 16px', color: '#78716C', fontWeight: '600' }}>SKU</th>
              <th style={{ padding: '12px 16px', color: '#78716C', fontWeight: '600' }}>Precio B2B</th>
              <th style={{ padding: '12px 16px', color: '#78716C', fontWeight: '600', textAlign: 'center' }}>Stock</th>
              <th style={{ padding: '12px 16px', color: '#78716C', fontWeight: '600', textAlign: 'right' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ padding: '24px', textAlign: 'center', color: '#A8A29E' }}>
                  No hay productos en tu catálogo B2B. Agrega el primero.
                </td>
              </tr>
            ) : (
              productos.map((prod) => (
                <tr key={prod.id} style={{ borderBottom: '1px solid #F5F5F4', transition: 'background 0.2s', cursor: 'pointer' }}>
                  <td style={{ padding: '12px 16px' }}>
                    <p style={{ margin: 0, fontWeight: '700', color: '#292524' }}>{prod.nombre}</p>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#57534E', fontWeight: '500' }}>{prod.sku}</td>
                  <td style={{ padding: '12px 16px', color: '#292524', fontWeight: '600' }}>
                    ${prod.precio.toLocaleString('es-CL')}
                  </td>
                  <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                    <span style={{ background: prod.stock > 10 ? '#ECFDF5' : '#FEF2F2', color: prod.stock > 10 ? '#10B981' : '#EF4444', border: `1px solid ${prod.stock > 10 ? '#10B981' : '#EF4444'}`, padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700' }}>
                      {prod.stock} unid.
                    </span>
                  </td>
                  <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                    <button style={{ background: 'transparent', border: 'none', color: '#78716C', cursor: 'pointer', marginRight: '10px' }}><Edit size={16} /></button>
                    <button style={{ background: 'transparent', border: 'none', color: '#EF4444', cursor: 'pointer' }}><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL AGREGAR PRODUCTO */}
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
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#292524', fontWeight: '800' }}>Agregar Producto</h3>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#A8A29E' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCrearProducto} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', fontWeight: '600' }}>Nombre del Producto</label>
                <input required value={nombre} onChange={e => setNombre(e.target.value)} type="text" placeholder="Ej: Cemento Polpaico 25kg" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #E7E5E4' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', fontWeight: '600' }}>Código SKU</label>
                <input required value={sku} onChange={e => setSku(e.target.value)} type="text" placeholder="Ej: CEM-POL-25" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #E7E5E4' }} />
              </div>

              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', fontWeight: '600' }}>Precio B2B ($)</label>
                  <input required value={precio} onChange={e => setPrecio(e.target.value)} type="number" placeholder="Ej: 3500" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #E7E5E4' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', fontWeight: '600' }}>Stock Inicial</label>
                  <input required value={stock} onChange={e => setStock(e.target.value)} type="number" placeholder="Ej: 100" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #E7E5E4' }} />
                </div>
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
                {isSubmitting ? 'Guardando...' : 'Guardar Producto'}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
