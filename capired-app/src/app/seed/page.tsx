"use client";

import React, { useState } from 'react';
import { auth, db } from '../../lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const usersToSeed = [
  { email: 'maestro@capired.cl', password: 'password123', role: 'maestro', name: 'Maestro Prueba' },
  { email: 'arquitecto@capired.cl', password: 'password123', role: 'profesional', name: 'Arquitecto Prueba' },
  { email: 'ingeniero@capired.cl', password: 'password123', role: 'profesional', name: 'Ingeniero Prueba' },
  { email: 'cliente@capired.cl', password: 'password123', role: 'cliente', name: 'Cliente Prueba' },
  { email: 'ferreteria@capired.cl', password: 'password123', role: 'ferreteria', name: 'Ferreteria Prueba' },
  { email: 'constructora@capired.cl', password: 'password123', role: 'constructora', name: 'Constructora Prueba' },
];

export default function SeedPage() {
  const [log, setLog] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const runSeed = async () => {
    setLoading(true);
    setLog(["Iniciando creación de usuarios..."]);
    
    for (const user of usersToSeed) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          email: user.email,
          role: user.role,
          name: user.name,
          createdAt: new Date()
        });
        setLog(prev => [...prev, `✅ Creado: ${user.email} (${user.role})`]);
      } catch (error: any) {
        setLog(prev => [...prev, `❌ Error con ${user.email}: ${error.message}`]);
      }
    }
    
    setLog(prev => [...prev, "Proceso finalizado. Ya puedes iniciar sesión con estas cuentas."]);
    setLoading(false);
  };

  return (
    <div style={{ padding: '50px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Semilla de Base de Datos</h1>
      <p>Haz clic para inyectar los usuarios de prueba en Firebase.</p>
      <button 
        onClick={runSeed} 
        disabled={loading}
        style={{ padding: '10px 20px', fontSize: '1rem', background: '#0f172a', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }}
      >
        {loading ? 'Creando...' : 'Crear Usuarios de Prueba'}
      </button>
      
      <div style={{ marginTop: '30px', background: '#f8fafc', padding: '20px', borderRadius: '8px' }}>
        <h3>Log de Operaciones:</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {log.map((entry, idx) => (
            <li key={idx} style={{ marginBottom: '5px' }}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
