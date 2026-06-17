"use client";

import React, { useState } from 'react';
import AuthModal from "../components/AuthModal";

export default function CapiRedLanding() {
  const [authModalType, setAuthModalType] = useState<'login' | 'register' | null>(null);

  return (
    <>
      <header className="navbar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--capi-gold)', letterSpacing: '2px' }}>CAPI</span>
              <span style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--capi-white)', letterSpacing: '4px' }}>RED</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button className="btn-outline" onClick={() => setAuthModalType('login')}>Iniciar Sesión</button>
            <button className="btn-primary" onClick={() => setAuthModalType('register')}>Únete a la Red</button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>La Primera Comunidad Transaccional de Construcción en Chile</h1>
          <p>
            Cotizaciones con Inteligencia Artificial, Cero Visitas Técnicas, y pagos 100% garantizados. 
            El marketplace cerrado más seguro para maestros, arquitectos, constructoras y ferreterías.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <button className="btn-primary" onClick={() => setAuthModalType('register')}>Crear Cuenta Gratis</button>
            <a href="#como-funciona" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>Cómo Funciona</a>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="section bg-navy text-center" style={{ padding: '80px 0', borderBottom: '1px solid var(--capi-border)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '50px', color: 'var(--capi-white)' }}>El Ecosistema Capi Red</h2>
          
          {/* Nivel 1 */}
          <div style={{ marginBottom: '60px', textAlign: 'left', background: 'rgba(255, 255, 255, 0.05)', padding: '40px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.08)', borderLeft: '4px solid #94a3b8' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--capi-gold)', marginBottom: '20px' }}>Nivel 1: Reparaciones Menores</h3>
            <p style={{ color: 'var(--capi-white)', fontSize: '1.1rem', marginBottom: '20px' }}>Para trabajos de rápida ejecución (entre 1 día y 1 semana). Soluciones inmediatas con inteligencia artificial.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div><strong style={{ color: 'var(--capi-gold)' }}>01. Video Cotización:</strong> <span style={{ color: 'var(--capi-white)' }}>Graba el problema con tu celular.</span></div>
              <div><strong style={{ color: 'var(--capi-gold)' }}>02. Valor IA:</strong> <span style={{ color: 'var(--capi-white)' }}>El sistema dicta el precio justo de mano de obra en segundos.</span></div>
              <div><strong style={{ color: 'var(--capi-gold)' }}>03. Match Rápido:</strong> <span style={{ color: 'var(--capi-white)' }}>Un maestro verificado acepta el trabajo al instante.</span></div>
              <div><strong style={{ color: 'var(--capi-gold)' }}>04. Pago Retenido:</strong> <span style={{ color: 'var(--capi-white)' }}>Pagas online, el dinero se libera al terminar.</span></div>
            </div>
          </div>

          {/* Nivel 2 */}
          <div style={{ marginBottom: '60px', textAlign: 'left', background: 'rgba(56, 189, 248, 0.05)', padding: '40px', borderRadius: '15px', border: '1px solid rgba(56, 189, 248, 0.2)', borderLeft: '4px solid #38bdf8' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--capi-gold)', marginBottom: '20px' }}>Nivel 2: Obras Mayores y Arquitectura</h3>
            <p style={{ color: 'var(--capi-white)', fontSize: '1.1rem', marginBottom: '20px' }}>Para ampliaciones y construcción llave en mano desde cero. Proyectos de alto estándar.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div><strong style={{ color: 'var(--capi-gold)' }}>01. Sube tu Idea:</strong> <span style={{ color: 'var(--capi-white)' }}>Describe tu proyecto. Si no tienes planos, se asigna el diseño a Arquitectos y Calculistas de la red.</span></div>
              <div><strong style={{ color: 'var(--capi-gold)' }}>02. Tienes Planos?:</strong> <span style={{ color: 'var(--capi-white)' }}>Si ya tienes tus planos aprobados, saltas directo a la etapa de construcción.</span></div>
              <div><strong style={{ color: 'var(--capi-gold)' }}>03. Construcción:</strong> <span style={{ color: 'var(--capi-white)' }}>Tu proyecto se ejecuta por constructoras verificadas bajo condiciones comerciales pre-aprobadas.</span></div>
              <div><strong style={{ color: 'var(--capi-gold)' }}>04. Contrato y Póliza:</strong> <span style={{ color: 'var(--capi-white)' }}>Firma digital, póliza de garantía y pagos seguros por hitos de avance.</span></div>
            </div>
          </div>

          {/* Nivel 3 */}
          <div style={{ textAlign: 'left', background: 'rgba(212, 175, 55, 0.05)', padding: '40px', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.2)', borderLeft: '4px solid var(--capi-gold)' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--capi-gold)', marginBottom: '20px' }}>Nivel 3: Suministros y Ferretería B2B</h3>
            <p style={{ color: 'var(--capi-white)', fontSize: '1.1rem', marginBottom: '20px' }}>Compras al por mayor directamente desde la obra para maestros y empresas.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div><strong style={{ color: 'var(--capi-gold)' }}>01. Lista de Materiales:</strong> <span style={{ color: 'var(--capi-white)' }}>Arma tu carrito directo en la App.</span></div>
              <div><strong style={{ color: 'var(--capi-gold)' }}>02. Descuentos Red:</strong> <span style={{ color: 'var(--capi-white)' }}>Accede a precios exclusivos B2B por tu membresía.</span></div>
              <div><strong style={{ color: 'var(--capi-gold)' }}>03. Pago Unificado:</strong> <span style={{ color: 'var(--capi-white)' }}>Paga todo con un solo clic.</span></div>
              <div><strong style={{ color: 'var(--capi-gold)' }}>04. Despacho Directo:</strong> <span style={{ color: 'var(--capi-white)' }}>Las ferreterías asociadas entregan directo en el terreno.</span></div>
            </div>
          </div>

        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Por qué elegir Capi Red</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/capired-app/out/icons/guarantee.png" alt="Garantía" style={{width: '60px', height: '60px'}} />
              </div>
              <h3>Garantía Financiera</h3>
              <p>El cliente paga la obra antes de que llegues a su puerta. Si trabajas bien, tu dinero está 100% asegurado en nuestro fondo fiduciario.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/capired-app/out/icons/ai-quote.png" alt="Cotización IA" style={{width: '60px', height: '60px'}} />
              </div>
              <h3>Cotización Inmediata por IA</h3>
              <p>El cliente sube un video, nuestra IA calcula el costo justo de mercado, y tú solo aceptas o rechazas. Cero tiempo perdido.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/capired-app/out/icons/hardware-store.png" alt="Ferretería" style={{width: '60px', height: '60px'}} />
              </div>
              <h3>Ferretería Integrada</h3>
              <p>Compra materiales con descuentos exclusivos desde la App. Las ferreterías asociadas despachan directo a tu obra.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/capired-app/out/icons/verified.png" alt="Verificado" style={{width: '60px', height: '60px'}} />
              </div>
              <h3>Red de Excelencia Verificada</h3>
              <p>Solo entran los mejores. Verificación estricta de antecedentes y perfiles comerciales para elevar el estándar de la industria.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-navy text-center">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Inicia tu expansión nacional hoy</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 40px auto', color: '#a8b2d1' }}>
            Constructoras, Profesionales y Maestros: regístrense hoy para ser los primeros en acceder al muro de oportunidades B2B y proyectos de alta rentabilidad.
          </p>
          <button className="btn-primary" style={{ fontSize: '1.2rem', padding: '15px 40px' }} onClick={() => setAuthModalType('register')}>
            Quiero postular a Capi Red
          </button>
        </div>
      </section>
      
      {authModalType && (
        <AuthModal 
          initialIsLogin={authModalType === 'login'} 
          onClose={() => setAuthModalType(null)} 
        />
      )}
    </>
  );
}
