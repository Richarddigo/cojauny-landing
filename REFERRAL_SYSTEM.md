# Sistema de Invitaciones / Referral System / Empfehlungssystem / Système de Parrainage

## Descripción General / Overview / Überblick / Aperçu

Este documento describe el sistema completo de invitaciones (referral system) implementado para el programa beta de Cojauny.

This document describes the complete referral/invitation system implemented for Cojauny's beta program.

Dieses Dokument beschreibt das vollständige Empfehlungssystem, das für das Cojauny-Beta-Programm implementiert wurde.

Ce document décrit le système complet de parrainage/invitation mis en place pour le programme bêta de Cojauny.

## Características / Features / Funktionen / Fonctionnalités

### 1. Generación Automática de Códigos / Automatic Code Generation
- ✅ Código único de 8 caracteres generado automáticamente al registrarse
- ✅ Enlace de referral personalizado (formato: `https://cojauny.com?ref=XXXXXXXX`)
- ✅ Almacenado en tabla `referral_stats` con relación a usuario

### 2. Rastreo Anónimo de Visitas / Anonymous Visit Tracking
- ✅ Detección automática del parámetro `?ref=` en la URL
- ✅ Incremento anónimo del contador de visitas
- ✅ Sin recopilación de datos personales del visitante

### 3. Rastreo de Registros / Signup Tracking
- ✅ Asociación automática del nuevo usuario con el código de referral
- ✅ Incremento del contador de signups del referrer
- ✅ Campo `referral_code_used` en tabla waitlist

### 4. Panel de Estadísticas / Stats Dashboard
- ✅ Visualización de visitas y registros en tiempo real
- ✅ Botón para copiar el enlace de referral
- ✅ Instrucciones claras de uso
- ✅ Aviso de privacidad transparente

### 5. Notificaciones por Email / Email Notifications
- ✅ Enlace de referral incluido en email de confirmación
- ✅ Instrucciones de uso en 4 idiomas (ES, EN, DE, FR)
- ✅ Diseño responsive y profesional

## Arquitectura / Architecture

### Base de Datos / Database

**Tabla `referral_stats`**
```sql
- user_id (uuid, PK, FK → waitlist.id)
- referral_code (text, unique, 8 caracteres)
- referral_link (text, URL completa)
- visits (integer, default 0)
- signups (integer, default 0)
- created_at (timestamptz)
- updated_at (timestamptz)
```

**Extensión de `waitlist`**
```sql
- referral_code_used (text, nullable)
```

### Funciones de Base de Datos / Database Functions

1. **`generate_referral_code()`**
   - Genera código único de 8 caracteres
   - Verifica unicidad en la tabla

2. **`create_referral_stats_for_user()`**
   - Trigger automático al insertar en waitlist
   - Crea entrada en referral_stats

3. **`increment_referral_visits(ref_code)`**
   - Incrementa contador de visitas
   - Retorna estadísticas actualizadas

4. **`increment_referral_signups(ref_code)`**
   - Incrementa contador de registros
   - Retorna estadísticas actualizadas

### API Endpoints

#### 1. `/api/referral/visit` (POST)
**Propósito**: Rastrear visitas anónimas

```typescript
// Request
{
  "referralCode": "ABC12345"
}

// Response
{
  "success": true,
  "data": {
    "visits": 15,
    "signups": 3
  }
}
```

#### 2. `/api/referral/stats` (GET)
**Propósito**: Obtener estadísticas de un usuario

```typescript
// Query params
?email=user@example.com

// Response
{
  "success": true,
  "data": {
    "referral_code": "ABC12345",
    "referral_link": "https://cojauny.com?ref=ABC12345",
    "visits": 15,
    "signups": 3
  }
}
```

#### 3. `/api/beta-signups` (POST)
**Actualizado para incluir referralCode**

```typescript
// Request
{
  "email": "user@example.com",
  "fullName": "Juan Pérez",
  "company": "Acme Corp",
  "useCase": "Corporate mobility",
  "termsAccepted": true,
  "locale": "es",
  "referralCode": "ABC12345" // Opcional
}

// Response
{
  "success": true,
  "id": "uuid",
  "confirmationToken": "token",
  "referralLink": "https://cojauny.com?ref=XYZ98765"
}
```

### Supabase Edge Functions

#### 1. `track-referral-visit`
**Ubicación**: `supabase/functions/track-referral-visit/index.ts`

Incrementa el contador de visitas de forma anónima. Soporta CORS para llamadas desde el frontend.

#### 2. `send-beta-email` (actualizado)
**Ubicación**: `supabase/functions/send-beta-email/index.ts`

Plantillas actualizadas para incluir:
- Enlace de referral personalizado
- Instrucciones de uso
- Aviso de privacidad
- Contenido en 4 idiomas

### Componentes React / React Components

#### 1. `ReferralPanel.tsx`
Muestra el panel de referral después del registro exitoso.

**Props**:
- `copy`: ReferralPanelCopy (localización)
- `email`: string (email del usuario)

**Características**:
- Fetch automático de estadísticas
- Botón de copiar al portapapeles
- Diseño responsive
- Loading y error states

#### 2. `BetaSignupForm.tsx` (actualizado)
Captura el parámetro `?ref=` y rastrea visitas.

**Cambios**:
- useEffect para capturar parámetro ref
- Llamada automática a `/api/referral/visit`
- Muestra ReferralPanel después de signup exitoso
- Aviso de privacidad en el formulario

## Flujo de Usuario / User Flow

### 1. Visitante con Código de Referral
```
1. Usuario A comparte: https://cojauny.com?ref=ABC12345
2. Usuario B hace clic en el enlace
3. Sistema detecta ?ref=ABC12345
4. Sistema llama /api/referral/visit (anónimo)
5. visits++ en referral_stats para ABC12345
6. Usuario B ve el formulario de registro
```

### 2. Registro vía Referral
```
1. Usuario B completa el formulario
2. Sistema envía referralCode=ABC12345 con la solicitud
3. Backend:
   a. Crea entrada en waitlist con referral_code_used=ABC12345
   b. Llama increment_referral_signups(ABC12345)
   c. signups++ en referral_stats
   d. Genera código de referral para Usuario B
   e. Envía email con token + enlace de referral de B
4. Usuario B ve ReferralPanel con su propio enlace
```

### 3. Usuario sin Referral
```
1. Usuario C visita https://cojauny.com (sin ?ref=)
2. Se registra normalmente
3. Sistema genera código de referral para Usuario C
4. Email incluye enlace de referral de C
5. Usuario C ve ReferralPanel con su enlace
```

## Seguridad y Privacidad / Security & Privacy

### ✅ Implementado

1. **RLS (Row Level Security)**
   - Políticas estrictas en referral_stats
   - Solo service_role puede leer/escribir

2. **Rastreo Anónimo**
   - No se almacenan IPs de visitantes
   - No se capturan datos del navegador
   - Solo se incrementa un contador

3. **Validación de Datos**
   - Schema Zod para validación
   - Sanitización de entradas
   - Verificación de unicidad de códigos

4. **CORS Configurado**
   - Edge function acepta requests del dominio
   - Headers de seguridad apropiados

### 🔒 Avisos de Privacidad

El sistema muestra avisos claros en:
- Formulario de registro
- Panel de referral
- Email de confirmación

**Contenido del aviso**:
> "Solo contamos visitas y registros de forma anónima. No recopilamos datos personales de quienes hacen clic en tu enlace."

## Localización / Localization

Todos los textos están disponibles en 4 idiomas:

### Español (ES)
- ✅ Formulario de registro
- ✅ Panel de referral
- ✅ Email de confirmación

### English (EN)
- ✅ Registration form
- ✅ Referral panel
- ✅ Confirmation email

### Deutsch (DE)
- ✅ Registrierungsformular
- ✅ Empfehlungs-Panel
- ✅ Bestätigungs-E-Mail

### Français (FR)
- ✅ Formulaire d'inscription
- ✅ Panneau de parrainage
- ✅ Email de confirmation

## Despliegue / Deployment

### 1. Base de Datos Supabase

```bash
# 1. Ejecutar schema SQL
# Copiar contenido de SUPABASE_SCHEMA.sql
# Pegar en SQL Editor de Supabase
# Ejecutar

# 2. Verificar tablas creadas
SELECT * FROM referral_stats LIMIT 1;
```

### 2. Edge Functions

```bash
# Instalar Supabase CLI
npm install -g supabase

# Login
supabase login

# Deploy track-referral-visit
cd supabase/functions/track-referral-visit
supabase functions deploy track-referral-visit --project-ref YOUR_PROJECT_REF

# Deploy send-beta-email (actualizado)
cd supabase/functions/send-beta-email
supabase functions deploy send-beta-email --project-ref YOUR_PROJECT_REF
```

### 3. Variables de Entorno

Asegúrate de configurar en Supabase Functions:

```bash
# Para send-beta-email
SMTP_HOST=smtppro.zoho.eu
SMTP_PORT=465
SMTP_USER=beta@cojauny.com
SMTP_PASS=your_password
BASE_URL=https://your-project.supabase.co
BASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 4. Next.js App

```bash
# Build
npm run build

# Deploy a Vercel/hosting
# Las variables de entorno deben incluir:
NEXT_PUBLIC_BASE_URL=https://cojauny.com
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
BASE_SERVICE_ROLE_KEY=your_service_role_key
SUPABASE_PROJECT_ID=your_project_id
BASE_URL=https://your-project.supabase.co
```

## Testing Manual / Manual Testing

### Test 1: Generación de Código
```
1. Registrarse en beta
2. Verificar email recibido
3. Confirmar que incluye referral_link
4. Verificar entrada en referral_stats
```

### Test 2: Rastreo de Visitas
```
1. Copiar referral_link de un usuario
2. Abrir en navegador incógnito
3. Verificar que visits++ en la BD
4. Recargar página varias veces
5. Confirmar incremento de visits
```

### Test 3: Rastreo de Signups
```
1. Usar referral_link en navegador nuevo
2. Registrarse con email diferente
3. Verificar signups++ en referral_stats del referrer
4. Verificar referral_code_used en waitlist del nuevo usuario
```

### Test 4: Panel de Referral
```
1. Registrarse exitosamente
2. Verificar que ReferralPanel aparece
3. Probar botón "Copiar enlace"
4. Verificar stats mostradas (visits=0, signups=0)
```

## Métricas y Análisis / Metrics & Analytics

### Queries Útiles

**Top referrers**
```sql
SELECT 
  w.email, 
  w.name, 
  rs.referral_code,
  rs.visits,
  rs.signups,
  rs.created_at
FROM referral_stats rs
JOIN waitlist w ON w.id = rs.user_id
ORDER BY rs.signups DESC, rs.visits DESC
LIMIT 10;
```

**Conversion rate**
```sql
SELECT 
  referral_code,
  visits,
  signups,
  CASE 
    WHEN visits > 0 THEN (signups::float / visits * 100)
    ELSE 0 
  END as conversion_rate
FROM referral_stats
WHERE visits > 0
ORDER BY conversion_rate DESC;
```

**Usuarios referidos**
```sql
SELECT 
  w.email,
  w.name,
  w.referral_code_used,
  w.created_at
FROM waitlist w
WHERE w.referral_code_used IS NOT NULL
ORDER BY w.created_at DESC;
```

## Troubleshooting

### Problema: Código de referral no se genera
**Solución**: Verificar que el trigger `create_referral_on_signup` está activo:
```sql
SELECT * FROM pg_trigger WHERE tgname = 'create_referral_on_signup';
```

### Problema: Visitas no se incrementan
**Solución**: 
1. Verificar que la edge function está deployada
2. Revisar logs en Supabase Dashboard > Edge Functions
3. Verificar permisos RLS en referral_stats

### Problema: Email no incluye referral_link
**Solución**:
1. Verificar que se pasa `referral_link` en variables del email
2. Revisar logs de send-beta-email function
3. Confirmar que la plantilla incluye `{{referral_link}}`

## Roadmap Futuro / Future Roadmap

### Posibles Mejoras

- [ ] Recompensas por referrals exitosos
- [ ] Dashboard de analytics para usuarios
- [ ] Códigos de referral personalizados
- [ ] Límites de tiempo en códigos
- [ ] Integración con programa de afiliados
- [ ] Notificaciones push cuando alguien usa tu código
- [ ] Gamificación (badges, leaderboard)

## Soporte / Support

Para preguntas o issues relacionados con el sistema de referral:
- Email: support@cojauny.com
- GitHub Issues: https://github.com/Richarddigo/cojauny-landing/issues

---

**Última actualización**: 2025-01-20
**Versión**: 1.0.0
**Autor**: GitHub Copilot + Richard
