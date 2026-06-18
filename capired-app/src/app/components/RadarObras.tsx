"use client";

import React, { useState, useEffect } from 'react';

type JobPing = {
  id: number;
  title: string;
  price: string;
  distance: string;
  top: string;
  left: string;
  delay: string;
};

export default function RadarObras() {
  const [activeJob, setActiveJob] = useState<number | null>(null);
  
  const jobs: JobPing[] = [
    { id: 1, title: "Fuga de Gasfitería", price: "$45.000", distance: "1.2 km", top: "30%", left: "40%", delay: "0s" },
    { id: 2, title: "Instalación Eléctrica", price: "$85.000", distance: "3.5 km", top: "60%", left: "70%", delay: "2s" },
    { id: 3, title: "Armado de Muebles", price: "$30.000", distance: "800 m", top: "45%", left: "20%", delay: "4s" },
  ];

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '500px',
      background: '#0f172a',
      borderRadius: '20px',
      overflow: 'hidden',
      border: '1px solid #1e293b',
      boxShadow: 'inset 0 0 50px rgba(0,0,0,0.5)',
      fontFamily: 'system-ui, sans-serif'
    }}>
      {/* Cuadrícula de Radar */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.5
      }} />

      {/* Círculos de Radar */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '200px', height: '200px', border: '1px solid rgba(56, 189, 248, 0.2)', borderRadius: '50%'
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '400px', height: '400px', border: '1px solid rgba(56, 189, 248, 0.1)', borderRadius: '50%'
      }} />

      {/* Centro (Tu ubicación) */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '15px', height: '15px', background: '#38bdf8', borderRadius: '50%',
        boxShadow: '0 0 20px #38bdf8'
      }}>
        <div style={{
          position: 'absolute', top: '-10px', left: '-10px', right: '-10px', bottom: '-10px',
          border: '2px solid #38bdf8', borderRadius: '50%', animation: 'ping 2s infinite'
        }} />
      </div>

      {/* Pings de Trabajos */}
      {jobs.map((job) => (
        <div 
          key={job.id}
          style={{
            position: 'absolute',
            top: job.top,
            left: job.left,
            animation: `fadeIn 1s ${job.delay} forwards`,
            opacity: 0,
            cursor: 'pointer'
          }}
          onMouseEnter={() => setActiveJob(job.id)}
          onMouseLeave={() => setActiveJob(null)}
        >
          {/* El Ping */}
          <div style={{
            width: '12px', height: '12px', background: '#f59e0b', borderRadius: '50%',
            boxShadow: '0 0 15px #f59e0b', position: 'relative'
          }}>
            <div style={{
              position: 'absolute', top: '-5px', left: '-5px', right: '-5px', bottom: '-5px',
              border: '2px solid #f59e0b', borderRadius: '50%', animation: 'ping 2s infinite'
            }} />
          </div>

          {/* Tarjeta Flotante (Hover) */}
          {activeJob === job.id && (
            <div style={{
              position: 'absolute', top: '-100px', left: '20px',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              padding: '15px', borderRadius: '12px',
              width: '220px', zIndex: 10,
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ color: '#0f172a', fontWeight: 'bold', fontSize: '0.9rem' }}>{job.title}</span>
                <span style={{ color: '#10b981', fontWeight: 'bold' }}>{job.price}</span>
              </div>
              <div style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '10px' }}>
                📍 A {job.distance} de tu ubicación
              </div>
              <button style={{
                background: '#0f172a', color: 'white', border: 'none', padding: '8px', width: '100%',
                borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.8rem'
              }}>
                Aceptar Trabajo
              </button>
            </div>
          )}
        </div>
      ))}

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
