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

  return (
    <div style={{ padding: '40px', color: 'var(--capi-navy)' }}>
      <h1 style={{ color: 'var(--capi-navy)', marginBottom: '10px' }}>Portal de Ventas B2B (Ferretería)</h1>
      <p style={{ marginBottom: '30px', color: '#64748b' }}>Gestiona tu inventario y recibe órdenes de la red Capi.</p>
      
      <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <h2 style={{ marginBottom: '20px' }}>Mi Catálogo</h2>
        {loading ? <p>Cargando inventario...</p> : (
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                <th style={{ padding: '10px' }}>Producto</th>
                <th style={{ padding: '10px' }}>Categoría</th>
                <th style={{ padding: '10px' }}>Precio Público</th>
                <th style={{ padding: '10px', color: '#ef4444' }}>Comisión Capi (10%)</th>
                <th style={{ padding: '10px', color: '#22c55e' }}>Tu Ganancia Neta</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr><td colSpan={5} style={{ padding: '15px 10px', textAlign: 'center', color: '#94a3b8' }}>No tienes productos en tu catálogo.</td></tr>
              ) : products.map(p => (
                <tr key={p.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '15px 10px', fontWeight: 'bold' }}>{p.name}</td>
                  <td style={{ padding: '15px 10px' }}>{p.category}</td>
                  <td style={{ padding: '15px 10px', fontWeight: 'bold' }}>${p.price}</td>
                  <td style={{ padding: '15px 10px', color: '#ef4444' }}>-${p.comision || Math.round(p.price * 0.1)}</td>
                  <td style={{ padding: '15px 10px', fontWeight: 'bold', color: '#22c55e' }}>${p.gananciaNeta || Math.round(p.price * 0.9)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        
        <button className="btn-primary" style={{ marginTop: '20px' }} onClick={() => setShowAddModal(true)}>+ Agregar Nuevo Producto</button>
      </div>

      {showAddModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ background: 'white', padding: '30px', borderRadius: '10px', width: '90%', maxWidth: '400px' }}>
            <h3 style={{ marginBottom: '20px' }}>Agregar Producto</h3>
            <form onSubmit={handleAddProduct} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Nombre del Producto" required value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
              <select value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                <option value="Obra Gruesa">Obra Gruesa</option>
                <option value="Terminaciones">Terminaciones</option>
                <option value="Herramientas">Herramientas</option>
                <option value="Fijaciones">Fijaciones</option>
              </select>
              <input type="number" placeholder="Precio de Venta al Público" required value={newProduct.price || ''} onChange={e => setNewProduct({...newProduct, price: parseInt(e.target.value)})} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
              <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Capi Red cobrará un 10% de comisión por venta.</p>
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button type="button" className="btn-outline" onClick={() => setShowAddModal(false)} style={{ flex: 1 }}>Cancelar</button>
                <button type="submit" className="btn-primary" style={{ flex: 1 }}>Publicar Producto</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
