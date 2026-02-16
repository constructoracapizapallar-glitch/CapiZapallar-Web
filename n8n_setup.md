# Automatizaciones n8n - Capi Zapallar

Este documento detalla la estructura de los workflows requeridos en n8n para procesar los leads del sitio web.

## 1. Webhook Trigger (Entrada)
Ambos formularios (General y Prefabricadas) envían datos al mismo Webhook por simplicidad, diferenciados por un campo `formId`.

### Datos del Webhook:
- **HTTP Method:** POST
- **URL:** `[A definir por el usuario en script.js]`
- **Body JSON de ejemplo:**
```json
{
  "formId": "cotizador_prefabricadas",
  "nombre": "Juan Perez",
  "telefono": "+56912345678",
  "region": "RM",
  "mensaje": "Consulta sobre modelo m85",
  "configuracion": "Modelo: Modelo 85m², Tier: kit, Addons: armado, radier, Total: $32.300.000"
}
```

## 2. Estructura del Workflow n8n Recomendada

### Paso 1: Webhook Node
Configurar como "Production Webhook" para recibir los leads reales.

### Paso 2: Switch Node
Filtrar por el campo `formId`:
- Si es `construccion_general` -> Rama A
- Si es `cotizador_prefabricadas` -> Rama B

### Paso 3A: Procesar Lead General
1. **Google Sheets:** Insertar fila en la hoja de "Leads Construcción".
2. **Email / WhatsApp Notify:** Enviar notificación al equipo de ventas.

### Paso 4B: Procesar Lead Cotizador
1. **Google Sheets:** Insertar fila en la hoja de "Cotizaciones Prefabricadas".
2. **Auto-Respuesta (Opcional):** Enviar un correo al cliente con el resumen de su cotización.

## 3. Integración con WhatsApp (Opcional)
Se recomienda usar un nodo de **WhatsApp Business API** o una integración vía **Evolution API** para notificar instantáneamente al vendedor.

---
**Recuerda actualizar la variable `WEBHOOK_URL` en `script.js` con la URL generada por n8n.**
