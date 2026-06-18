"use client";

import React, { useState } from 'react';

type JobPing = {
  id: number;
  title: string;
  price: string;
  distance: string;
  top: string;
  left: string;
  delay: string;
  desc: string;
};

export default function RadarObras() {
  const [activeJob, setActiveJob] = useState<number | null>(null);
  const [showLegalModal, setShowLegalModal] = useState<boolean>(false);
  const [selectedJobToAccept, setSelectedJobToAccept] = useState<JobPing | null>(null);
  const [contractAccepted, setContractAccepted] = useState(false);
  
  const jobs: JobPing[] = [
    { id: 1, title: "Fuga de Gasfitería", price: "$45.000", distance: "1.2 km", top: "30%", left: "40%", delay: "0s", desc: "Cañería rota bajo el lavaplatos." },
    { id: 2, title: "Instalación Eléctrica", price: "$85.000", distance: "3.5 km", top: "60%", left: "70%", delay: "1s", desc: "Instalación de 4 enchufes y diferencial." },
    { id: 3, title: "Armado de Muebles", price: "$30.000", distance: "800 m", top: "45%", left: "20%", delay: "2s", desc: "Armado de clóset 4 puertas." },
  ];

  const handleAcceptClick = (job: JobPing) => {
    setSelectedJobToAccept(job);
    setContractAccepted(false);
    setShowLegalModal(true);
  };

  return (
    <div style={{ display: 'flex', gap: '20px', width: '100%', height: '600px', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* VISTA LATERAL IZQUIERDA: RADAR (65%) */}
      <div style={{
        flex: '0 0 65%',
        position: 'relative',
        background: '#0f172a',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid #1e293b',
        boxShadow: 'inset 0 0 50px rgba(0,0,0,0.5)'
      }}>
        {/* Cuadrícula de Radar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.5 }} />

        {/* Círculos de Radar */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '200px', height: '200px', border: '1px solid rgba(56, 189, 248, 0.2)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '400px', height: '400px', border: '1px solid rgba(56, 189, 248, 0.1)', borderRadius: '50%' }} />

        {/* Centro (Tu ubicación) */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '15px', height: '15px', background: '#38bdf8', borderRadius: '50%', boxShadow: '0 0 20px #38bdf8' }}>
          <div style={{ position: 'absolute', top: '-10px', left: '-10px', right: '-10px', bottom: '-10px', border: '2px solid #38bdf8', borderRadius: '50%', animation: 'ping 2s infinite' }} />
        </div>

        {/* Pings de Trabajos */}
        {jobs.map((job) => (
          <div 
            key={job.id}
            style={{ position: 'absolute', top: job.top, left: job.left, animation: `fadeIn 1s ${job.delay} forwards`, opacity: 0, cursor: 'pointer', zIndex: activeJob === job.id ? 10 : 1 }}
            onMouseEnter={() => setActiveJob(job.id)}
            onMouseLeave={() => setActiveJob(null)}
          >
            {/* El Ping */}
            <div style={{ width: '16px', height: '16px', background: '#f59e0b', borderRadius: '50%', boxShadow: '0 0 15px #f59e0b', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-6px', left: '-6px', right: '-6px', bottom: '-6px', border: '2px solid #f59e0b', borderRadius: '50%', animation: 'ping 2s infinite' }} />
            </div>

            {/* Hover Tooltip en Mapa */}
            {activeJob === job.id && (
              <div style={{ position: 'absolute', top: '-40px', left: '25px', background: 'rgba(15, 23, 42, 0.9)', color: 'white', padding: '5px 10px', borderRadius: '8px', fontSize: '0.8rem', whiteSpace: 'nowrap', border: '1px solid #334155' }}>
                {job.title} - <span style={{color: '#10b981'}}>{job.price}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* VISTA LATERAL DERECHA: FEED DE TARJETAS (35%) */}
      <div style={{
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        overflowY: 'auto',
        paddingRight: '10px'
      }}>
        <h3 style={{ color: 'var(--capi-navy)', margin: '0 0 10px 0', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Obras en Radar</h3>
        
        {jobs.map((job) => (
          <div 
            key={`card-${job.id}`}
            style={{
              background: activeJob === job.id ? 'rgba(240, 249, 255, 1)' : 'white',
              border: activeJob === job.id ? '1px solid #38bdf8' : '1px solid var(--capi-border)',
              borderRadius: '12px',
              padding: '12px',
              transition: 'all 0.3s ease',
              boxShadow: activeJob === job.id ? '0 5px 15px rgba(56, 189, 248, 0.15)' : '0 2px 4px rgba(0,0,0,0.02)',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setActiveJob(job.id)}
            onMouseLeave={() => setActiveJob(null)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--capi-navy)', fontWeight: 'bold', fontSize: '0.95rem', lineHeight: '1.2' }}>{job.title}</span>
              <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '0.95rem' }}>{job.price}</span>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.8rem', margin: '0 0 10px 0', lineHeight: '1.3' }}>{job.desc}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#64748b', fontSize: '0.75rem' }}>📍 A {job.distance}</span>
              <button 
                onClick={() => handleAcceptClick(job)}
                style={{ background: 'var(--capi-navy)', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.75rem' }}
              >
                Aceptar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL LEGAL DE CONTRATO (RESGUARDO LEGAL) */}
      {showLegalModal && selectedJobToAccept && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(5px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999 }}>
          <div style={{ background: 'white', padding: '40px', borderRadius: '20px', width: '90%', maxWidth: '500px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
            
            <div style={{ borderBottom: '2px solid #f1f5f9', paddingBottom: '20px', marginBottom: '20px' }}>
              <h2 style={{ color: 'var(--capi-navy)', fontSize: '1.5rem', margin: '0 0 10px 0' }}>Acuerdo de Adjudicación de Obra</h2>
              <p style={{ color: '#64748b', margin: 0 }}>Estás a punto de tomar: <strong>{selectedJobToAccept.title}</strong> por <strong>{selectedJobToAccept.price}</strong>.</p>
            </div>

            <div style={{ background: '#fef2f2', borderLeft: '4px solid #ef4444', padding: '15px', borderRadius: '0 8px 8px 0', marginBottom: '20px' }}>
              <h4 style={{ color: '#b91c1c', margin: '0 0 10px 0' }}>🚨 Resguardos Legales y Sanciones</h4>
              <ul style={{ color: '#991b1b', fontSize: '0.9rem', margin: 0, paddingLeft: '20px', lineHeight: '1.5' }}>
                <li style={{marginBottom: '8px'}}><strong>Garantía Capi:</strong> El dinero ya fue retenido al cliente. Se liberará a tu cuenta bancaria al finalizar el trabajo.</li>
                <li style={{marginBottom: '8px'}}><strong>Tratos por Fuera:</strong> Si intentas contactar o acordar con el cliente evadiendo la plataforma, aceptas pagar una <strong>multa automática de 5 UF</strong> y serás expulsado de la Red.</li>
                <li><strong>Cancelación:</strong> Abandonar la obra bajará tu calificación a cero y tu cuenta será suspendida 30 días.</li>
              </ul>
            </div>

            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', marginBottom: '30px' }}>
              <input type="checkbox" checked={contractAccepted} onChange={(e) => setContractAccepted(e.target.checked)} style={{ width: '20px', height: '20px', marginTop: '3px' }} />
              <span style={{ color: '#475569', fontSize: '0.95rem' }}>He leído las condiciones y <strong>firmo digitalmente</strong> la aceptación de este trabajo y sus multas asociadas.</span>
            </label>

            <div style={{ display: 'flex', gap: '15px' }}>
              <button onClick={() => setShowLegalModal(false)} style={{ flex: 1, background: '#f1f5f9', color: '#475569', border: 'none', padding: '15px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
                Cancelar
              </button>
              <button 
                disabled={!contractAccepted}
                onClick={() => { alert('¡Trabajo adjudicado! Se ha generado tu contrato.'); setShowLegalModal(false); }} 
                style={{ flex: 1, background: contractAccepted ? '#10b981' : '#94a3b8', color: 'white', border: 'none', padding: '15px', borderRadius: '10px', fontWeight: 'bold', cursor: contractAccepted ? 'pointer' : 'not-allowed', transition: 'background 0.3s' }}
              >
                Firmar y Aceptar Trabajo
              </button>
            </div>

          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}} />
    </div>
  );
}
