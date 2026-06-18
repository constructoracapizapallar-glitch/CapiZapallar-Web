"use client";

import React, { useState, useEffect } from 'react';
import { db } from '../../../lib/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export default function FerreteriaDashboard() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', category: 'Obra Gruesa', price: 0 });

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const prods = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(prods);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    const comision = Math.round(newProduct.price * 0.10); // 10% Platform fee
    const gananciaNeta = newProduct.price - comision;
    try {
      await addDoc(collection(db, "products"), {
        ...newProduct,
        comision,
        gananciaNeta,
        createdAt: new Date()
      });
      setShowAddModal(false);
      setNewProduct({ name: '', category: 'Obra Gruesa', price: 0 });
      fetchProducts();
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error guardando el producto. Verifica la conexión.");
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Obra Gruesa': return '#ef4444';
      case 'Terminaciones': return '#3b82f6';
      case 'Herramientas': return '#f59e0b';
      case 'Fijaciones': return '#8b5cf6';
      default: return '#10b981';
    }
  };

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px', minHeight: '80vh', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* SIDEBAR IZQUIERDO */}
      <div style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Header Ferretería */}
        <div style={{ background: 'var(--capi-navy)', borderRadius: '20px', padding: '25px', color: 'white', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.2)' }}>
          <h1 style={{ fontSize: '1.8rem', margin: '0 0 10px 0' }}>Panel B2B</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>Sincroniza inventario y recibe órdenes de constructoras.</p>
        </div>

        {/* Acciones Rápidas */}
        <div style={{ background: 'white', border: '1px solid var(--capi-border)', borderRadius: '20px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          <div style={{ border: '1px solid #fef08a', background: '#fefce8', borderRadius: '12px', padding: '15px', cursor: 'pointer', transition: 'all 0.2s', position: 'relative' }}>
             <span style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#ef4444', color: 'white', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>1</span>
             <h3 style={{ margin: '0 0 5px 0', fontSize: '1rem', color: '#854d0e' }}>Inbox B2B</h3>
             <p style={{ fontSize: '0.8rem', color: '#a16207', margin: 0 }}>Cotización pendiente de Constructora Pacífico.</p>
          </div>

          <div style={{ border: '1px solid #bfdbfe', background: '#eff6ff', borderRadius: '12px', padding: '15px', cursor: 'pointer', transition: 'all 0.2s' }}>
             <h3 style={{ margin: '0 0 5px 0', fontSize: '1rem', color: '#1e40af' }}>Ofertas Flash ⚡</h3>
             <p style={{ fontSize: '0.8rem', color: '#1d4ed8', margin: 0 }}>Lanza liquidaciones a la red local.</p>
          </div>

        </div>
      </div>

      {/* ÁREA PRINCIPAL: E-COMMERCE GRID */}
      <div style={{ flex: '1', background: 'white', border: '1px solid var(--capi-border)', borderRadius: '20px', padding: '30px', display: 'flex', flexDirection: 'column' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--capi-navy)', margin: 0 }}>Mi Catálogo de Productos</h2>
          <button 
            style={{ background: 'var(--capi-gold)', color: 'var(--capi-navy)', border: 'none', padding: '10px 20px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' }}
            onClick={() => setShowAddModal(true)}
          >
            + Agregar Producto
          </button>
        </div>

        {loading ? (
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#64748b' }}>Cargando inventario...</div>
        ) : products.length === 0 ? (
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#64748b', border: '2px dashed #cbd5e1', borderRadius: '15px' }}>
            No tienes productos publicados. Agrega uno para empezar a vender.
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
            {products.map(p => (
              <div key={p.id} style={{ border: '1px solid #e2e8f0', borderRadius: '15px', overflow: 'hidden', transition: 'all 0.3s', cursor: 'pointer', position: 'relative' }}>
                
                {/* Image Placeholder */}
                <div style={{ height: '160px', background: '#f1f5f9', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3rem' }}>
                  {p.category === 'Obra Gruesa' ? '🧱' : p.category === 'Terminaciones' ? '🎨' : p.category === 'Herramientas' ? '🪚' : '🔩'}
                </div>

                {/* Badge Category */}
                <div style={{ position: 'absolute', top: '10px', right: '10px', background: getCategoryColor(p.category), color: 'white', fontSize: '0.7rem', fontWeight: 'bold', padding: '4px 8px', borderRadius: '10px' }}>
                  {p.category}
                </div>

                {/* Details */}
                <div style={{ padding: '15px' }}>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1rem', color: 'var(--capi-navy)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                      <p style={{ margin: '0', fontSize: '0.8rem', color: '#64748b' }}>Precio B2B</p>
                      <p style={{ margin: '0', fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--capi-navy)' }}>${p.price.toLocaleString('es-CL')}</p>
                    </div>
                  </div>
                  <div style={{ marginTop: '15px', paddingTop: '10px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                    <span style={{ color: '#ef4444' }}>Capi: -${(p.comision || Math.round(p.price * 0.1)).toLocaleString('es-CL')}</span>
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>Neto: ${(p.gananciaNeta || Math.round(p.price * 0.9)).toLocaleString('es-CL')}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* MODAL AGREGAR PRODUCTO */}
      {showAddModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(5px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ background: 'white', padding: '30px', borderRadius: '20px', width: '90%', maxWidth: '400px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
            <h3 style={{ margin: '0 0 20px 0', color: 'var(--capi-navy)', fontSize: '1.5rem' }}>Nuevo Producto</h3>
            <form onSubmit={handleAddProduct} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: '#64748b' }}>Nombre de Artículo</label>
                <input type="text" placeholder="Ej: Cemento Melón 25kg" required value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '1rem' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: '#64748b' }}>Categoría</label>
                <select value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})} style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '1rem', background: 'white' }}>
                  <option value="Obra Gruesa">Obra Gruesa</option>
                  <option value="Terminaciones">Terminaciones</option>
                  <option value="Herramientas">Herramientas</option>
                  <option value="Fijaciones">Fijaciones</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: '#64748b' }}>Precio de Venta</label>
                <input type="number" placeholder="$0" required value={newProduct.price || ''} onChange={e => setNewProduct({...newProduct, price: parseInt(e.target.value)})} style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '1rem' }} />
              </div>
              
              <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '10px', marginTop: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '5px' }}>
                  <span style={{ color: '#64748b' }}>Comisión Capi Red (10%)</span>
                  <span style={{ color: '#ef4444' }}>-${newProduct.price ? Math.round(newProduct.price * 0.1).toLocaleString('es-CL') : '0'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', fontWeight: 'bold' }}>
                  <span style={{ color: 'var(--capi-navy)' }}>Tu Ganancia Neta</span>
                  <span style={{ color: '#10b981' }}>${newProduct.price ? Math.round(newProduct.price * 0.9).toLocaleString('es-CL') : '0'}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                <button type="button" onClick={() => setShowAddModal(false)} style={{ flex: 1, padding: '12px', background: '#f1f5f9', border: 'none', color: '#64748b', fontWeight: 'bold', borderRadius: '10px', cursor: 'pointer' }}>Cancelar</button>
                <button type="submit" style={{ flex: 1, padding: '12px', background: 'var(--capi-gold)', border: 'none', color: 'var(--capi-navy)', fontWeight: 'bold', borderRadius: '10px', cursor: 'pointer' }}>Publicar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
