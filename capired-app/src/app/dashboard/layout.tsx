"use client";

import React, { useEffect, useState } from 'react';
import { auth, db } from '../../lib/firebase';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { 
  LogOut, 
  LayoutDashboard, 
  Package, 
  Truck, 
  BarChart3, 
  Settings, 
  Users, 
  ShieldCheck, 
  FileText,
  Search,
  Wallet,
  Home,
  Camera,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [userName, setUserName] = useState('Usuario');
  const [role, setRole] = useState('');
  const pathname = usePathname();

  useEffect(() => {
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
        window.location.href = '/capired-app/out/';
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = '/capired-app/out/';
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  const getMenu = () => {
    switch (role) {
      case 'ferreteria':
        return [
          { name: 'Catálogo B2B', icon: <Package size={20} />, href: '/dashboard/ferreteria' },
          { name: 'Despachos', icon: <Truck size={20} />, href: '#' },
          { name: 'Ventas', icon: <BarChart3 size={20} />, href: '#' },
          { name: 'Ajustes', icon: <Settings size={20} />, href: '#' },
        ];
      case 'admin':
        return [
          { name: 'Comando', icon: <LayoutDashboard size={20} />, href: '/dashboard/admin' },
          { name: 'KYC & Validaciones', icon: <ShieldCheck size={20} />, href: '#' },
          { name: 'Usuarios', icon: <Users size={20} />, href: '#' },
          { name: 'Finanzas', icon: <Wallet size={20} />, href: '#' },
        ];
      case 'constructora':
        return [
          { name: 'Mis Obras', icon: <LayoutDashboard size={20} />, href: '/dashboard/constructora' },
          { name: 'Obras Mayores', icon: <FileText size={20} />, href: '/dashboard/constructora/obras-mayores' },
          { name: 'Contratistas', icon: <Users size={20} />, href: '/dashboard/constructora/contratistas' },
        ];
      case 'cliente':
        return [
          { name: 'Mi Hogar', icon: <Home size={20} />, href: '/dashboard/cliente' },
          { name: 'Capi IA Visión', icon: <Camera size={20} />, href: '#' },
          { name: 'Garantías', icon: <ShieldCheck size={20} />, href: '#' },
        ];
      case 'profesional':
        return [
          { name: 'Drive Proyectos', icon: <FileText size={20} />, href: '/dashboard/profesional' },
          { name: 'Normativa', icon: <BookOpen size={20} />, href: '#' },
          { name: 'Red B2B', icon: <Users size={20} />, href: '#' },
        ];
      case 'maestro':
        return [
          { name: 'Radar de Obras', icon: <Search size={20} />, href: '/dashboard/maestro' },
          { name: 'Billetera', icon: <Wallet size={20} />, href: '#' },
          { name: 'Materiales', icon: <Package size={20} />, href: '#' },
        ];
      default:
        return [];
    }
  };

  const menuItems = getMenu();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F5F5F4', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* SIDEBAR FIJO GLOBAL */}
      <aside style={{
        width: '280px',
        background: '#FFFFFF',
        borderRight: '1px solid #E7E5E4',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        height: '100vh',
        zIndex: 50
      }}>
        {/* LOGO AREA */}
        <div style={{ padding: '30px 30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '40px', height: '40px', background: '#292524', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#F5F5F4', fontWeight: 'bold', fontSize: '1.2rem' }}>C</span>
          </div>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '800', color: '#292524', letterSpacing: '-0.5px' }}>CAPI<span style={{ color: '#78716C' }}>RED</span></h1>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#A8A29E', textTransform: 'uppercase', letterSpacing: '1px' }}>{role || 'Plataforma B2B'}</p>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav style={{ flex: 1, padding: '20px' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {menuItems.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <li key={idx}>
                  <Link href={item.href} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    color: isActive ? '#292524' : '#78716C',
                    background: isActive ? '#F5F5F4' : 'transparent',
                    fontWeight: isActive ? '600' : '500',
                    transition: 'all 0.2s ease',
                    fontSize: '0.95rem'
                  }}>
                    <span style={{ color: isActive ? '#292524' : '#A8A29E' }}>{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* USER PROFILE BOTTOM */}
        <div style={{ padding: '20px', borderTop: '1px solid #E7E5E4' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#F5F5F4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#78716C', fontWeight: 'bold', border: '1px solid #E7E5E4' }}>
              {userName.charAt(0).toUpperCase()}
            </div>
            <div style={{ overflow: 'hidden' }}>
              <p style={{ margin: 0, fontWeight: '600', color: '#292524', fontSize: '0.9rem', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{userName}</p>
              <p style={{ margin: 0, fontSize: '0.75rem', color: '#A8A29E', textTransform: 'capitalize' }}>{role}</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '10px',
              background: '#FFFFFF',
              color: '#292524',
              border: '1px solid #E7E5E4',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'all 0.2s'
            }}
          >
            <LogOut size={16} /> Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* ÁREA DE CONTENIDO PRINCIPAL */}
      <main style={{ marginLeft: '280px', flex: 1, padding: '40px', maxWidth: '1400px' }}>
        {children}
      </main>

    </div>
  );
}
