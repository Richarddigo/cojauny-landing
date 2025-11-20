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

## Ejemplo de envío SMTP desde una Edge Function

```typescript
import { SmtpClient } from 'https://deno.land/x/smtp@v0.7.0/mod.ts';

const client = new SmtpClient();
await client.connectTLS({
  hostname: Deno.env.get('SMTP_HOST') ?? 'smtppro.zoho.eu',
  port: Number(Deno.env.get('SMTP_PORT') ?? '465'),
  username: Deno.env.get('SMTP_USER_BETA')!,
  password: Deno.env.get('SMTP_PASS')!
});

await client.send({
  from: `Cojauny Beta <${Deno.env.get('SMTP_USER_BETA')}>`,
  to: 'nuevo@ejemplo.com',
  subject: 'Bienvenido a la beta de Cojauny',
  content: 'Tu token es 123456',
  html: '<p>Tu token es <strong>123456</strong></p>'
});

await client.close();
```
