"use client";
import React, { useState } from 'react';
import { auth, db } from '../lib/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

export default function AuthModal({ onClose, initialIsLogin = false }: { onClose: () => void, initialIsLogin?: boolean }) {
  const [isLogin, setIsLogin] = useState(initialIsLogin);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('cliente');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!auth) {
      setError('Las llaves de Firebase no están configuradas. Habla con el administrador.');
      return;
    }

    setLoading(true);

    try {
      if (isLogin) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        
        let targetRole = 'cliente';
        if (docSnap.exists()) {
          targetRole = docSnap.data().role;
        }
        
        router.push(`/dashboard/${targetRole}`);
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Guardar el perfil en Firestore
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          role: role,
          isVerified: false,
          createdAt: new Date()
        });
        
        router.push(`/dashboard/${role}`);
      }
    } catch (err: any) {
      setError(err.message || 'Error en la autenticación');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
      backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex', 
      justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{
        background: 'var(--capi-navy)', border: '1px solid var(--capi-gold)', 
        borderRadius: '15px', padding: '40px', width: '90%', maxWidth: '500px',
        color: 'var(--capi-white)'
      }}>
        <h2 style={{ color: 'var(--capi-gold)', marginBottom: '20px', textAlign: 'center' }}>
          {isLogin ? 'Iniciar Sesión' : 'Registro Seguro'}
        </h2>
        
        {error && <div style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>{error}</div>}
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input 
            type="email" 
            placeholder="Correo Electrónico" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '15px', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.1)', color: 'var(--capi-white)' }}
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '15px', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.1)', color: 'var(--capi-white)' }}
          />
          
          {!isLogin && (
            <select 
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={{ padding: '15px', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.1)', color: 'var(--capi-white)' }}
            >
              <option value="cliente">Soy Cliente (Quiero construir/reparar)</option>
              <option value="maestro">Soy Maestro / Contratista</option>
              <option value="profesional">Soy Arquitecto / Ingeniero</option>
              <option value="constructora">Soy Constructora</option>
              <option value="ferreteria">Soy Ferretería (B2B)</option>
            </select>
          )}

          <button disabled={loading} type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>
            {loading ? 'Procesando...' : (isLogin ? 'Entrar' : 'Crear Cuenta')}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button 
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            style={{ background: 'none', border: 'none', color: '#a8b2d1', cursor: 'pointer', textDecoration: 'underline' }}
          >
            {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
          </button>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button 
            type="button"
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'var(--capi-gold)', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
