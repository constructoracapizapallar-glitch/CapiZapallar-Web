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

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    borderRadius: '20px',
    padding: '30px',
    color: 'var(--capi-navy)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    position: 'relative' as const,
    overflow: 'hidden' as const,
  };

  return (
    <div style={{ padding: '20px', backgroundColor: 'transparent', borderRadius: '20px', minHeight: '80vh' }}>
      
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          color: 'var(--capi-navy)',
          marginBottom: '10px'
        }}>
          Portal B2B Ferretero
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Sincroniza tu inventario y recibe órdenes de compra de constructoras.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
        
        {/* Inbox de Cotizaciones B2B */}
        <div style={cardStyle}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #f59e0b, #ef4444)' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <span style={{ background: '#fef3c7', color: '#b45309', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>1 COTIZACIÓN PENDIENTE</span>
          </div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--capi-navy)' }}>Inbox de Órdenes B2B</h2>
          <p style={{ color: '#64748b', marginBottom: '20px', lineHeight: '1.6' }}>Constructora Pacífico ha solicitado cotizar una lista de 45 materiales de obra gruesa.</p>
          
          <button style={{
            background: 'var(--capi-gold)', color: 'var(--capi-navy)', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.2s', width: '100%'
          }}>
            Responder Cotización
          </button>
        </div>

        {/* Ofertas Flash */}
        <div style={cardStyle}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }}></div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--capi-navy)' }}>Ofertas Flash Capi Red</h2>
          <p style={{ color: '#64748b', marginBottom: '25px', lineHeight: '1.6' }}>Notifica a todos los Maestros y Constructoras de la zona sobre liquidaciones o stock crítico.</p>
          
          <button style={{
            background: 'transparent', color: '#3b82f6', border: '2px solid #3b82f6', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s', width: '100%',
          }}>
            Lanzar Oferta Local
          </button>
        </div>
      </div>

      <div style={cardStyle}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #10b981, #3b82f6)' }}></div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--capi-navy)' }}>Mi Catálogo de Productos</h2>
        
        {loading ? <p style={{ color: '#64748b' }}>Cargando inventario...</p> : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                  <th style={{ padding: '15px 10px', color: '#64748b' }}>Producto</th>
                  <th style={{ padding: '15px 10px', color: '#64748b' }}>Categoría</th>
                  <th style={{ padding: '15px 10px', color: '#64748b' }}>Precio Público</th>
                  <th style={{ padding: '15px 10px', color: '#ef4444' }}>Comisión Capi (10%)</th>
                  <th style={{ padding: '15px 10px', color: '#10b981' }}>Tu Ganancia Neta</th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <tr><td colSpan={5} style={{ padding: '30px 10px', textAlign: 'center', color: '#64748b' }}>No tienes productos en tu catálogo.</td></tr>
                ) : products.map(p => (
                  <tr key={p.id} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <td style={{ padding: '15px 10px', fontWeight: 'bold', color: 'var(--capi-navy)' }}>{p.name}</td>
                    <td style={{ padding: '15px 10px', color: '#64748b' }}>{p.category}</td>
                    <td style={{ padding: '15px 10px', fontWeight: 'bold', color: 'var(--capi-navy)' }}>${p.price}</td>
                    <td style={{ padding: '15px 10px', color: '#ef4444' }}>-${p.comision || Math.round(p.price * 0.1)}</td>
                    <td style={{ padding: '15px 10px', fontWeight: 'bold', color: '#10b981' }}>${p.gananciaNeta || Math.round(p.price * 0.9)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        <button 
          style={{
            marginTop: '30px', background: 'var(--capi-gold)', color: 'var(--capi-navy)', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s'
          }}
          onClick={() => setShowAddModal(true)}
        >
          + Agregar Nuevo Producto
        </button>
      </div>

      {showAddModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(253, 251, 247, 0.8)', backdropFilter: 'blur(5px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ background: 'white', border: '1px solid var(--capi-border)', padding: '30px', borderRadius: '15px', width: '90%', maxWidth: '400px', color: 'var(--capi-navy)', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
            <h3 style={{ marginBottom: '20px', color: 'var(--capi-navy)' }}>Agregar Producto</h3>
            <form onSubmit={handleAddProduct} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Nombre del Producto" required value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} style={{ padding: '12px', border: '1px solid var(--capi-border)', borderRadius: '8px', background: '#f8fafc', color: 'var(--capi-navy)' }} />
              <select value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})} style={{ padding: '12px', border: '1px solid var(--capi-border)', borderRadius: '8px', background: '#f8fafc', color: 'var(--capi-navy)' }}>
                <option value="Obra Gruesa">Obra Gruesa</option>
                <option value="Terminaciones">Terminaciones</option>
                <option value="Herramientas">Herramientas</option>
                <option value="Fijaciones">Fijaciones</option>
              </select>
              <input type="number" placeholder="Precio de Venta al Público" required value={newProduct.price || ''} onChange={e => setNewProduct({...newProduct, price: parseInt(e.target.value)})} style={{ padding: '12px', border: '1px solid var(--capi-border)', borderRadius: '8px', background: '#f8fafc', color: 'var(--capi-navy)' }} />
              <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Capi Red cobrará un 10% de comisión por venta.</p>
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button type="button" onClick={() => setShowAddModal(false)} style={{ flex: 1, padding: '10px', background: 'transparent', border: '1px solid #cbd5e1', color: '#64748b', borderRadius: '8px', cursor: 'pointer' }}>Cancelar</button>
                <button type="submit" style={{ flex: 1, padding: '10px', background: 'var(--capi-gold)', border: 'none', color: 'var(--capi-navy)', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer' }}>Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
