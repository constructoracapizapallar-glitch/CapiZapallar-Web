"use client";

import React, { useState } from 'react';
import AuthModal from "../components/AuthModal";

export default function CapiRedLanding() {
  const [authModalType, setAuthModalType] = useState<'login' | 'register' | null>(null);

  return (
    <>
      <header className="navbar" style={{ background: 'rgba(253, 251, 247, 0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--capi-border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--capi-navy)', letterSpacing: '2px' }}>CAPI</span>
              <span style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--capi-gold)', letterSpacing: '4px' }}>RED</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <a href="https://capizapallar.cl" style={{ color: 'var(--capi-navy)', fontWeight: 'bold', textDecoration: 'underline', marginRight: '15px' }}>Volver a CapiZapallar</a>
            <button className="btn-outline" style={{ borderColor: 'var(--capi-navy)', color: 'var(--capi-navy)' }} onClick={() => setAuthModalType('login')}>Iniciar Sesión</button>
            <button className="btn-primary" onClick={() => setAuthModalType('register')}>Únete a la Red</button>
          </div>
        </div>
      </header>

      <section className="hero" style={{ backgroundColor: 'var(--capi-bg)', color: 'var(--capi-navy)', paddingTop: '160px', paddingBottom: '100px' }}>
        <div className="container">
          <h1 style={{ color: 'var(--capi-navy)' }}>La Primera Comunidad Transaccional de Construcción en Chile</h1>
          <p style={{ color: '#475569' }}>
            Cotizaciones con Inteligencia Artificial, Cero Visitas Técnicas, y pagos 100% garantizados. 
            El marketplace cerrado más seguro para maestros, arquitectos, constructoras y ferreterías.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <button className="btn-primary" onClick={() => setAuthModalType('register')}>Crear Cuenta Gratis</button>
            <a href="#como-funciona" className="btn-outline" style={{ borderColor: 'var(--capi-navy)', color: 'var(--capi-navy)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>Cómo Funciona</a>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="section text-center" style={{ backgroundColor: 'white', padding: '80px 0', borderBottom: '1px solid var(--capi-border)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '50px', color: 'var(--capi-navy)' }}>El Ecosistema Capi Red</h2>
          
          {/* Para Maestros y Profesionales */}
          <div style={{ marginBottom: '40px', textAlign: 'left', background: 'var(--capi-bg)', padding: '40px', borderRadius: '15px', border: '1px solid var(--capi-border)', borderLeft: '4px solid var(--capi-gold)' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--capi-navy)', marginBottom: '15px' }}>Para Maestros y Especialistas</h3>
            <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '20px' }}><strong>Trabajos asegurados y sin perseguir clientes.</strong> No pierdas más tiempo ni dinero en visitas técnicas gratuitas. El sistema te asigna obras según tu especialidad.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div><strong style={{ color: 'var(--capi-navy)' }}>01. Cero Visitas:</strong> <span style={{ color: '#475569' }}>El cliente sube un video del problema.</span></div>
              <div><strong style={{ color: 'var(--capi-navy)' }}>02. Acepta y Trabaja:</strong> <span style={{ color: '#475569' }}>La IA define el precio justo, tú solo decides si lo tomas.</span></div>
              <div><strong style={{ color: 'var(--capi-navy)' }}>03. Dinero Asegurado:</strong> <span style={{ color: '#475569' }}>El cliente paga antes. Tu dinero está retenido y seguro.</span></div>
            </div>
          </div>

          {/* Para Clientes */}
          <div style={{ marginBottom: '40px', textAlign: 'left', background: '#f0f9ff', padding: '40px', borderRadius: '15px', border: '1px solid #bae6fd', borderLeft: '4px solid #38bdf8' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--capi-navy)', marginBottom: '15px' }}>Para Clientes y Empresas</h3>
            <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '20px' }}><strong>Soluciones rápidas, a precio justo y sin estrés.</strong> Reparaciones menores y grandes construcciones, todo a un clic.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div><strong style={{ color: 'var(--capi-navy)' }}>01. Graba el Problema:</strong> <span style={{ color: '#475569' }}>Sube un video o describe tu idea de proyecto.</span></div>
              <div><strong style={{ color: 'var(--capi-navy)' }}>02. Cotización IA:</strong> <span style={{ color: '#475569' }}>Obtén el precio de mercado en segundos, sin sorpresas.</span></div>
              <div><strong style={{ color: 'var(--capi-navy)' }}>03. Red Verificada:</strong> <span style={{ color: '#475569' }}>Un maestro o constructora certificada ejecutará tu obra.</span></div>
            </div>
          </div>

          {/* Para Constructoras */}
          <div style={{ marginBottom: '40px', textAlign: 'left', background: '#f8fafc', padding: '40px', borderRadius: '15px', border: '1px solid #cbd5e1', borderLeft: '4px solid #94a3b8' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--capi-navy)', marginBottom: '15px' }}>Para Constructoras</h3>
            <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '20px' }}><strong>Gestiona y Subcontrata.</strong> Encuentra rápidamente mano de obra calificada y optimiza tus costos comprando materiales directos.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div><strong style={{ color: 'var(--capi-navy)' }}>01. Subcontratos:</strong> <span style={{ color: '#475569' }}>Asigna partes de tu obra a especialistas de la red.</span></div>
              <div><strong style={{ color: 'var(--capi-navy)' }}>02. Materiales B2B:</strong> <span style={{ color: '#475569' }}>Compra suministros a precio mayorista desde la app.</span></div>
              <div><strong style={{ color: 'var(--capi-navy)' }}>03. Gestión Integral:</strong> <span style={{ color: '#475569' }}>Controla pagos, garantías y estados de avance.</span></div>
            </div>
          </div>

          {/* Para Ferreterías */}
          <div style={{ textAlign: 'left', background: '#fdf4ff', padding: '40px', borderRadius: '15px', border: '1px solid #f5d0fe', borderLeft: '4px solid #c026d3' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--capi-navy)', marginBottom: '15px' }}>Para Ferreterías B2B</h3>
            <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '20px' }}><strong>Vende directo a las obras más grandes.</strong> Conecta tu inventario a nuestra plataforma y recibe órdenes de compra.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div><strong style={{ color: 'var(--capi-navy)' }}>01. Catálogo Digital:</strong> <span style={{ color: '#475569' }}>Sincroniza tus productos con el sistema Capi Red.</span></div>
              <div><strong style={{ color: 'var(--capi-navy)' }}>02. Órdenes Directas:</strong> <span style={{ color: '#475569' }}>Recibe pedidos mayoristas de maestros y constructoras.</span></div>
              <div><strong style={{ color: 'var(--capi-navy)' }}>03. Pagos Seguros:</strong> <span style={{ color: '#475569' }}>Liquidación garantizada en 24h tras el despacho.</span></div>
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
      
      {/* FOOTER LEGAL */}
      <footer style={{ backgroundColor: '#0f172a', padding: '60px 20px', borderTop: '1px solid #1e293b' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '30px' }}>
          
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ color: 'white', marginBottom: '15px' }}>Capi Red</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6' }}>
              La plataforma que profesionaliza la industria de la construcción, garantizando pagos seguros y conexiones de confianza entre Clientes, Maestros, Constructoras y Ferreterías.
            </p>
          </div>

          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: 'white', marginBottom: '15px', fontSize: '1rem' }}>Centro Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Términos y Condiciones Generales</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Política de Retención y Pagos (Fideicomiso)</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Política Anti-Soborno y Tratos por Fuera</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Contratos de Obras Mayores B2B</a></li>
            </ul>
          </div>

          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: 'white', marginBottom: '15px', fontSize: '1rem' }}>Soporte Técnico</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Centro de Ayuda</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Reportar una Infracción</a></li>
            </ul>
          </div>

        </div>
        <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #1e293b', color: '#64748b', fontSize: '0.85rem' }}>
          © 2026 Capi Zapallar SpA. Todos los derechos reservados.
        </div>
      </footer>

      {authModalType && (
        <AuthModal 
          initialIsLogin={authModalType === 'login'} 
          onClose={() => setAuthModalType(null)} 
        />
      )}
    </>
  );
}
