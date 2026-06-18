# ROADMAP DEL PROYECTO: CAPIRED B2B (ZAPALLAR)

## 1. Módulos Completados (100% Funcionales en UI/UX)
- `[x]` **Autenticación Unificada**: Login y Registro integrados con Firebase Auth. Redirección automática al dashboard correspondiente según el Rol.
- `[x]` **Estética Escandinava Premium**: Interfaz limpia, colores beige/carbón, sin tarjetas pesadas y de alta velocidad.
- `[x]` **Panel Ferretería (Catálogo B2B)**: 
  - Radar y Mapa de constructoras locales.
  - Vistas de Despachos, Ventas (KPIs), Reputación (Notas/Reclamos) y Ajustes.
- `[x]` **Panel Constructora (Radar y Obras)**: 
  - Mapa interactivo con geolocalización real (`leaflet.js` + GPS del navegador).
  - Creación de Obras Mayores con opción "Solicitar Cotización Automática a Ferreterías" (Conexión Ferretería 🤝 Constructora).
- `[x]` **Solución de Ruteo**: Erradicados los 404 (Migración de `window.location.href` a `next/navigation`).

## 2. Bases y Cimientos Estructurales (Completados)
Se establecieron las vistas maestras (`page.tsx`) de cada rol. Ya no hay enlaces vacíos.
- `[x]` **Profesional**: `/normativa` y `/red-b2b`.
- `[x]` **Maestro**: `/billetera` y `/materiales`.
- `[x]` **Cliente**: `/vision` (Módulo IA) y `/garantias`.
- `[x]` **Administrador**: Dashboard Maestro, KYC (Validación de identidad), Usuarios y Finanzas.

## 3. Próximos Pasos de Lógica (En Desarrollo)
- `[ ]` **Lógica de Postulación**: Que un Profesional/Maestro pueda enviar un formulario/presupuesto a una Obra Mayor Abierta, y que la Constructora lo reciba en su panel.
- `[ ]` **Flujo KYC Real**: Conectar el registro del Maestro/Profesional con la vista `/kyc` del Administrador para su aprobación manual (Cambiar `isVerified` a `true` en Firestore).
- `[ ]` **Motor de Reputación Activo**: Que la Constructora o Maestro, al terminar un despacho, puedan rellenar un modal "Calificar Despacho" que impacte los KPIs de la Ferretería.
- `[ ]` **Despliegue en Vercel**: Transición del proyecto desde GitHub Pages / LiteSpeed hacia Vercel nativo para CI/CD y Server-Side Rendering sin conflictos.
