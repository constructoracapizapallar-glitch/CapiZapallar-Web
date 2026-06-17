"use client";

import React, { useEffect, useState } from 'react';
import { auth, db } from '../../lib/firebase';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [userName, setUserName] = useState('Usuario');
  const [role, setRole] = useState('');

  useEffect(() => {
    // Escuchar el estado de autenticación para obtener los datos
    const unsubscribe = auth.onAuthStateChanged(async (user: any) => {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.name) setUserName(data.name);
          else setUserName(user.email?.split('@')[0] || 'Usuario');
          setRole(data.role || '');
        }
      } else {
        // Si no hay usuario, devolver al inicio
        window.location.href = '/capired-app/out/index.html';
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = '/capired-app/out/index.html';
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  const roleDisplay = {
    'cliente': 'Panel Cliente',
    'maestro': 'Panel Maestro',
    'profesional': 'Panel Profesional',
    'constructora': 'Panel Constructora',
    'ferreteria': 'Panel Ferretería',
    'admin': 'Comandante Jefe'
  }[role] || 'Capi Red';

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--capi-navy)', display: 'flex', flexDirection: 'column' }}>
      {/* Header Premium */}
      <header style={{
        background: 'rgba(26, 26, 29, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '2px solid var(--capi-gold)',
        padding: '15px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
      }}>
        {/* Logo Capi Red */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <h1 style={{ 
            color: 'var(--capi-gold)', 
            margin: 0, 
            fontSize: '1.5rem', 
            fontWeight: '900',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            CAPI<br/><span style={{ color: 'var(--capi-white)' }}>RED</span>
          </h1>
          
          <div style={{
            height: '40px',
            width: '2px',
            background: 'rgba(255,255,255,0.2)'
          }}></div>

          <span style={{
            color: 'var(--capi-white)',
            fontSize: '1.1rem',
            fontWeight: '600',
            letterSpacing: '1px'
          }}>
            {roleDisplay}
          </span>
        </div>

        {/* Perfil y Cerrar Sesión */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: 0, color: 'var(--capi-white)', fontWeight: 'bold', fontSize: '0.9rem' }}>{userName}</p>
            <p style={{ margin: 0, color: '#a8b2d1', fontSize: '0.8rem', textTransform: 'capitalize' }}>Conectado</p>
          </div>
          
          <button 
            onClick={handleLogout}
            style={{
              background: 'transparent',
              border: '1px solid var(--capi-gold)',
              color: 'var(--capi-gold)',
              padding: '8px 20px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'var(--capi-gold)';
              e.currentTarget.style.color = 'var(--capi-navy)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--capi-gold)';
            }}
          >
            Cerrar Sesión
          </button>
        </div>
      </header>

      {/* Contenido Dinámico del Dashboard */}
      <main style={{ flex: 1, padding: '40px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {children}
      </main>
    </div>
  );
}
