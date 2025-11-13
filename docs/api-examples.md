# Ejemplos de uso de la API

## Feedback (POST `/api/feedback`)

```bash
curl -X POST https://cojauny.com/api/feedback \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Laura",
    "email": "laura@example.com",
    "message": "Me encanta la nueva experiencia",
    "sentiment": "positive"
  }'
```

## Beta signups (POST `/api/beta-signups`)

```bash
curl -X POST https://cojauny.com/api/beta-signups \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Carlos Díaz",
    "email": "carlos@example.com",
    "company": "Cojauny",
    "useCase": "Gestionar rutas compartidas",
    "termsAccepted": true
  }'
```

## Solicitud de borrado (POST `/api/privacy/data-deletion`)

```bash
curl -X POST https://cojauny.com/api/privacy/data-deletion \
  -H "Content-Type: application/json" \
  -d '{ "email": "usuario@example.com" }'
```

## Colección Postman

1. Importa `docs/postman/cojauny.postman_collection.json` en Postman.
2. Configura las variables de entorno:
   - `baseUrl` → `https://cojauny.com`
   - `betaToken` (para pruebas internas, opcional)

## Ejemplo de llamada desde Supabase Edge Function (Zoho API)

```typescript
await fetch(`https://mail.zoho.eu/api/accounts/${Deno.env.get('ZOHO_ACCOUNT_ID')}/messages`, {
  method: 'POST',
  headers: {
    Authorization: `Zoho-oauthtoken ${Deno.env.get('ZOHO_API_KEY')}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fromAddress: Deno.env.get('EMAIL_FROM_ADDRESS'),
    toAddress: ['nuevo@ejemplo.com'],
    subject: 'Bienvenido a la beta de Cojauny',
    content: '<p>Tu token es 123456</p>',
    mailFormat: 'html'
  })
});
```
