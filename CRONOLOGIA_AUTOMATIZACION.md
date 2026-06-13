# 🗺️ CRONOLOGÍA MAESTRA DE AUTOMATIZACIÓN - CAPI ZAPALLAR

Este documento detalla el flujo cronológico y las dependencias técnicas de todo el sistema.

## 1. FASE DE CAPTACIÓN (n8n Rama Principal)
- **Evento:** Formulario Web / Ads.
- **Acción 1:** Guardar datos en Google Sheets.
- **Acción 2:** Enviar WhatsApp de invitación.
- **Dato Crítico:** El link enviado debe ser: `https://capizapallar.cl/llamar.html?tel={{$json["phone"]}}&tipo={{$json["interes"]}}`.

## 2. FASE DE CONVERSACIÓN (Andrés AI)
- **Evento:** Cliente abre `llamar.html` e inicia llamada.
- **Acción 1:** `llamar.html` inyecta el `user_phone` en la metadata de Retell.
- **Acción 2:** Andrés califica según el Prompt (Materiales: Madera, Metalcom, SIP).
- **Acción 3:** Andrés agenda cita y activa la herramienta `send_whatsapp_resource`.

## 3. FASE DE EJECUCIÓN (n8n Rama de Acción)
- **Evento:** Webhook disparado por la Tool de Andrés (`call_analyzed` o Tool Call).
- **FIX URGENTE:** Configurar `Update row in sheet` con el valor de match: `{{ $json["body"]["call"]["metadata"]["user_phone"] }}`.
- **Rama Cliente (Zoom):** 
    - [ ] Agregar nodo **Zoom** (Operación: Create Meeting).
    - [ ] Enviar link generado por WhatsApp.
- **Rama Disponibilidad (Calendario):**
    - [ ] Agregar nodo **Google Calendar** (Operación: List/Check availability).
- **Rama Admin (Diego):** Envío de Notificación Push a la App TSD con el resumen de la cita.

---
## 🛠️ ESTADO TÉCNICO
- [x] Backend Proxy (PHP) - **LISTO**
- [x] Frontend ESM (Safari fix) - **LISTO**
- [ ] Herramienta en Retell - **PENDIENTE CONFIG MANUAL**
- [ ] Webhook en n8n - **PENDIENTE CONFIG MANUAL**
- [ ] Prompt Tuning - **PENDIENTE CARGA MANUAL**
