"use client";

import React, { useState, useEffect } from 'react';

export default function MaestroDashboard() {
  const [location, setLocation] = useState<string>("Buscando...");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => setLocation(`Lat: ${position.coords.latitude.toFixed(4)}, Lng: ${position.coords.longitude.toFixed(4)}`),
        () => setLocation("Geolocalización denegada")
      );
    } else {
      setLocation("Geolocalización no soportada");
    }
  }, []);

  return (
    <div style={{ padding: '40px', color: 'var(--capi-navy)' }}>
      <h1 style={{ color: 'var(--capi-navy)', marginBottom: '10px' }}>Panel del Maestro</h1>
      <p style={{ marginBottom: '30px', color: '#64748b' }}>Encuentra pololitos y obras cercanas a ti.</p>
      
      <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
        <h2>📍 Tu Ubicación Actual</h2>
        <p style={{ color: 'var(--capi-gold)', fontWeight: 'bold', marginTop: '10px' }}>{location}</p>
        <button className="btn-outline" style={{ marginTop: '10px' }}>Actualizar Radar</button>
      </div>

      <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <h2 style={{ marginBottom: '20px' }}>Trabajos Cercanos (Pololitos)</h2>
        <div style={{ padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px', marginBottom: '10px' }}>
          <h3>Reparación de Techumbre</h3>
          <p style={{ color: '#64748b' }}>A 2.5 km de distancia • Cliente verificada</p>
          <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Presupuesto IA: $85.000</p>
          <button className="btn-primary" style={{ marginTop: '10px' }}>Aceptar Trabajo</button>
        </div>
      </div>

      <div style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', padding: '20px', borderRadius: '10px', border: '1px solid #cbd5e1' }}>
        <h2 style={{ marginBottom: '10px', color: 'var(--capi-navy)' }}>✨ Capi IA (Premium)</h2>
        <p style={{ color: '#475569', marginBottom: '15px' }}>Obtén ventajas exclusivas con nuestro asistente de Inteligencia Artificial para maestros.</p>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', color: '#334155' }}>
          <li>✅ Chat para interpretar planos básicos en PDF.</li>
          <li>✅ Prioridad de notificaciones para trabajos cerca de ti.</li>
          <li>✅ Generación automática de presupuesto de materiales.</li>
        </ul>
        <button className="btn-outline" style={{ background: 'white' }}>Desbloquear Capi IA</button>
      </div>
    </div>
  );
}
