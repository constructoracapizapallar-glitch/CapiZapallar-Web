# Plan de Implementación: SEO, GEO-Targeting y WhatsApp Dinámico

Este plan detalla las mejoras para posicionar a **Capi Zapallar** por encima de la competencia y automatizar el contacto.

## 1. SEO & Geo-Targeting (Fase "Ataque")
El objetivo es dominar las búsquedas locales en la Quinta Región y Santiago, tanto para clientes particulares como para el sector corporativo (B2B).

### Acciones en `index.html` (Home & B2B):
- **Estrategia Dual:** Posicionar la marca como líder en construcción residencial de lujo e ingeniería industrial B2B.
- **Meta Tags:**
  - Títulos: "Constructora e Ingeniería Capi Zapallar | B2B, Galpones y Casas Llave en Mano".
  - Descripción: Enfoque en galpones, locales comerciales y casas personalizadas.
- **Optimización B2B:** Concentrar los keywords de galpones industriales y locales comerciales aquí.

### Acciones en `prefabricadas.html` (Residencial):
- **Estrategia:** Enfoque puro en casas prefabricadas SIP, autoconstrucción y eficiencia energética.
- **Meta Tags:** Título y descripción libres de B2B, enfocados 100% en vivienda.
- **Optimización de B2B (Keywords):**
  - "Construcción de galpones en Santiago", "Proyectos industriales Quinta Región", "Locales comerciales llave en mano", "Ingeniería B2B Chile".
- **Geo-Targeting:**
  - Áreas industriales: Quilicura, Pudahuel, Lampa (Santiago) y Concón, Quilpué, Valparaíso (V Región).

## 2. Integración de WhatsApp Dinámico (App tsdigital-next)
Usaremos la App multi-tenant para centralizar las comunicaciones.

### Flujo Técnico:
- **Web -> n8n:** n8n recibirá el `formId` y el `organizationId` de Capi Zapallar.
- **n8n -> tsdigital-next API:** 
  - Llamaremos al endpoint `/api/whatsapp/send`.
  - Enviaremos el `organizationId` correcto de Capi Zapallar para que use tus credenciales específicas (no las genéricas).
- **Notificación de Cierre:** Al número +56973732599 llegará el aviso cada vez que Andrés (Retell) logre una calificación positiva.

## 3. Botón de WhatsApp Dinámico en la Web
Implementar en `script.js` un "Call to Action" post-formulario:
- **Mensaje dinámico:** "Hola, acabo de cotizar mi casa de {{m2}}m2. Quiero hablar con un humano ahora".
- **Objetivo:** Que el cliente inicie la charla para que la API de Meta no cobre la sesión saliente.

## 4. Filtro de Tiempo en Retell AI
Configurar a Andrés para que, si el cliente dice "quiero construir en 1 año", lo derive a un flujo de nutrición mensual y no te agende reunión ahora, ahorrando tu tiempo.

---
**¿Deseas que comience aplicando los cambios de SEO y Schema.org ahora mismo?**
