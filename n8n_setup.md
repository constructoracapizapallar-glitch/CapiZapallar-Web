# Automatizaciones n8n - Capi Zapallar

Este documento detalla la estructura de los workflows requeridos en n8n para procesar los leads del sitio web de Capi Zapallar.

## 1. Webhook Trigger (Entrada)
Ambos formularios (General y Prefabricadas) envían datos al mismo Webhook n8n, diferenciados por el campo `formId`.

### Datos del Webhook:
- **HTTP Method:** POST
- **Body JSON de ejemplo:**
```json
{
  "formId": "cotizador_prefabricadas",
  "nombre": "Juan Perez",
  "telefono": "+56912345678",
  "comuna": "Zapallar",
  "m2": "85",
  "model": "M85",
  "configuracion": "Tier: kit, Addons: armado, radier, Total: $32.300.000"
}
```

## 2. Estructura del Workflow n8n Recomendada

### Paso 1: Webhook Node
Configurar como "Production Webhook" para recibir los leads del sitio web.

### Paso 2: Retell AI (Llamada de Calificación)
- **Node:** HTTP Request (Retell API)
- **Acción:** Disparar llamada a Andrés para filtrar por tiempo de construcción.
- **Agent ID:** `agent_78e4eb5e2660fff6ac4a9f04b9`

### Paso 3: Filtro de Calificación
- Si Andrés califica con `interes_inmediato: true` -> Rama "Aviso VIP".
- Si es `false` -> Rama "Google Sheets / CRM".

### Paso 4: Notificación Admin (GRATIS)
Para evitar que Meta te cobre cada mensaje de aviso que te enviamos a ti, usaremos las **Push Notifications** que ya tiene tu app native:
- **URL:** `https://www.tsdnext.com/api/admin/notification/trigger`
- **Headers:** `x-api-key: tsd_secure_app_2025_master_key_v1`
- **Body JSON:**
  ```json
  {
    "organizationId": "cmj8qkv4d0000d4u8z3l5kn4k",
    "title": "🔥 Lead Calificado: Capi Zapallar",
    "message": "Andrés acaba de hablar con [Nombre]. Quiere construir AHORA. Revisa tu CRM.",
    "data": { "route": "/admin/chat" }
  }
  ```

## 3. Seguridad y Multi-tenancy
- **Organization ID:** Tu ID de Capi Zapallar es `cmj8qkv4d0000d4u8z3l5kn4k`. Al usar este ID, la notificación **SOLO** llegará a los miembros de tu empresa, sin mezclarse con otros usuarios de tu App.
- **Identidad de API:** Tu App ya tiene guardado el PhoneID `10241291911492966` exclusivo para Capi Zapallar. El sistema detectará automáticamente de qué empresa viene la respuesta.

---
**Recuerda actualizar la variable `WEBHOOK_URL` en `script.js` con la URL generada por n8n.**
