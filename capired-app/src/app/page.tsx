"use client";

import React, { useState } from 'react';

export default function CapiRedLanding() {
  const [showRegister, setShowRegister] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistered(true);
  };

  if (isRegistered) {
    return (
      <>
        <header className="navbar">
          <div className="container">
            <div className="logo">CAPI RED</div>
            <button className="btn-outline" onClick={() => setIsRegistered(false)}>Cerrar Sesión</button>
          </div>
        </header>
        <main className="container" style={{ marginTop: '60px' }}>
          <div className="auth-container" style={{ maxWidth: '800px' }}>
            <span className="badge-unverified">⚠️ ESTADO: NO VERIFICADO</span>
            <h2>Bienvenido a tu Panel de Control</h2>
            <p style={{ marginBottom: '30px' }}>
              Tu cuenta ha sido creada exitosamente. Sin embargo, por políticas de seguridad (Filtro Cero Chasquillas), 
              <strong> no podrás aceptar trabajos ni ver cotizaciones </strong> hasta que subas la documentación obligatoria.
            </p>
            
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ marginBottom: '15px' }}>Documentos Pendientes:</h3>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ padding: '15px 0', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>📸 Cédula de Identidad (Ambos Lados)</span>
                  <button className="btn-outline" style={{ padding: '8px 16px' }}>Subir PDF/JPG</button>
                </li>
                <li style={{ padding: '15px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>📜 Certificado de Antecedentes Fines Especiales</span>
                  <button className="btn-outline" style={{ padding: '8px 16px' }}>Subir PDF</button>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </>
    );
  }

  if (showRegister) {
    return (
      <>
        <header className="navbar">
          <div className="container">
            <div className="logo" style={{ cursor: 'pointer' }} onClick={() => setShowRegister(false)}>CAPI RED</div>
            <button className="btn-outline" onClick={() => setShowRegister(false)}>Volver al Inicio</button>
          </div>
        </header>
        <div className="container">
          <div className="auth-container">
            <h2>Crear Cuenta en Capi Red</h2>
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label>Nombre Completo</label>
                <input type="text" required placeholder="Ej: Juan Pérez" />
              </div>
              <div className="form-group">
                <label>RUT</label>
                <input type="text" required placeholder="12.345.678-9" />
              </div>
              <div className="form-group">
                <label>Perfil (Rol)</label>
                <select required>
                  <option value="">Seleccione un rol...</option>
                  <option value="maestro">Maestro / Ayudante / Contratista</option>
                  <option value="profesional">Profesional (Arquitecto / Ingeniero)</option>
                  <option value="constructora">Empresa Constructora</option>
                  <option value="ferreteria">Ferretería Asociada</option>
                </select>
              </div>
              <div className="form-group">
                <label>Correo Electrónico</label>
                <input type="email" required placeholder="correo@ejemplo.com" />
              </div>
              <div className="form-group">
                <label>Contraseña</label>
                <input type="password" required />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                Registrarse Ahora
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <header className="navbar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '2px', color: 'var(--capi-white)' }}>
              CAPI<span style={{ color: 'var(--capi-gold)' }}>RED</span>
            </span>
          </div>
          <button className="btn-primary" onClick={() => setShowRegister(true)}>Únete a la Red</button>
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
            <button className="btn-primary" onClick={() => setShowRegister(true)}>Crear Cuenta Gratis</button>
            <a href="#como-funciona" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>Cómo Funciona</a>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="section bg-navy text-center" style={{ padding: '80px 0', borderBottom: '1px solid var(--capi-border)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '50px' }}>Cómo funciona Capi Red</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', textAlign: 'left' }}>
            <div style={{ padding: '30px', background: 'rgba(255,255,255,0.03)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: 'var(--capi-gold)', fontSize: '2rem', fontWeight: 800, marginBottom: '15px' }}>01</div>
              <h3 style={{ marginBottom: '15px' }}>Sube tu Proyecto</h3>
              <p style={{ color: '#a8b2d1' }}>Sube un video o fotos del trabajo. Especifica medidas y detalles básicos sin necesidad de agendar una visita técnica presencial.</p>
            </div>
            <div style={{ padding: '30px', background: 'rgba(255,255,255,0.03)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: 'var(--capi-gold)', fontSize: '2rem', fontWeight: 800, marginBottom: '15px' }}>02</div>
              <h3 style={{ marginBottom: '15px' }}>Cotización IA</h3>
              <p style={{ color: '#a8b2d1' }}>Nuestra IA analiza tu solicitud y propone un presupuesto de mano de obra ajustado al mercado en tiempo real.</p>
            </div>
            <div style={{ padding: '30px', background: 'rgba(255,255,255,0.03)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: 'var(--capi-gold)', fontSize: '2rem', fontWeight: 800, marginBottom: '15px' }}>03</div>
              <h3 style={{ marginBottom: '15px' }}>Match Inmediato</h3>
              <p style={{ color: '#a8b2d1' }}>La oferta se publica en nuestro muro exclusivo. Maestros y contratistas verificados aceptan el trabajo al instante.</p>
            </div>
            <div style={{ padding: '30px', background: 'rgba(255,255,255,0.03)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: 'var(--capi-gold)', fontSize: '2rem', fontWeight: 800, marginBottom: '15px' }}>04</div>
              <h3 style={{ marginBottom: '15px' }}>Pago Protegido</h3>
              <p style={{ color: '#a8b2d1' }}>El dinero queda resguardado. Solo se libera al profesional cuando la obra se entrega conforme a tus exigencias.</p>
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
          <button className="btn-primary" style={{ fontSize: '1.2rem', padding: '15px 40px' }} onClick={() => setShowRegister(true)}>
            Quiero postular a Capi Red
          </button>
        </div>
      </section>
    </>
  );
}
