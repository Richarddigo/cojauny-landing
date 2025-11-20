# Checklist de Despliegue del Sistema de Referral / Deployment Checklist

## Pre-Despliegue / Pre-Deployment

### 1. Verificación de Código / Code Verification
- [x] TypeScript compilation passes (`npm run type-check`)
- [x] ESLint passes (`npm run lint`)
- [x] Tests updated and passing
- [x] CodeQL security scan passes (0 vulnerabilities)

### 2. Revisión de Archivos / File Review
- [x] `SUPABASE_SCHEMA.sql` - Database schema
- [x] `supabase/functions/track-referral-visit/` - Edge function for visit tracking
- [x] `supabase/functions/send-beta-email/index.ts` - Updated email templates
- [x] `src/app/api/referral/visit/route.ts` - Visit tracking API
- [x] `src/app/api/referral/stats/route.ts` - Stats retrieval API
- [x] `src/app/api/beta-signups/route.ts` - Updated with referral support
- [x] `src/components/ReferralPanel.tsx` - New component
- [x] `src/components/BetaSignupForm.tsx` - Updated with referral tracking
- [x] `src/locales/copy.ts` - Updated with 4-language support

## Pasos de Despliegue / Deployment Steps

### Paso 1: Base de Datos Supabase

```bash
# 1. Abrir Supabase Dashboard
# 2. Ir a SQL Editor
# 3. Crear nueva query
# 4. Copiar y pegar contenido de SUPABASE_SCHEMA.sql
# 5. Ejecutar (Run)
```

**Verificación**:
```sql
-- Verificar que las tablas existen
SELECT COUNT(*) FROM referral_stats;

-- Verificar que las funciones existen
SELECT proname FROM pg_proc WHERE proname LIKE '%referral%';

-- Verificar trigger
SELECT * FROM pg_trigger WHERE tgname = 'create_referral_on_signup';
```

**Resultado esperado**:
- ✅ Tabla `referral_stats` creada
- ✅ Campo `referral_code_used` añadido a `waitlist`
- ✅ Funciones creadas: `generate_referral_code`, `increment_referral_visits`, `increment_referral_signups`
- ✅ Trigger `create_referral_on_signup` activo
- ✅ Políticas RLS configuradas

### Paso 2: Supabase Edge Functions

**Requisitos**:
- Supabase CLI instalado: `npm install -g supabase`
- Logged in: `supabase login`
- Project ref conocido

```bash
# Deploy track-referral-visit (nueva función)
cd supabase/functions
supabase functions deploy track-referral-visit --project-ref YOUR_PROJECT_REF

# Deploy send-beta-email (actualizada)
supabase functions deploy send-beta-email --project-ref YOUR_PROJECT_REF
```

**Configurar variables de entorno** (Supabase Dashboard → Edge Functions → Settings):
```
BASE_URL=https://YOUR_PROJECT.supabase.co
BASE_SERVICE_ROLE_KEY=your_service_role_key
SMTP_HOST=smtppro.zoho.eu
SMTP_PORT=465
SMTP_USER=beta@cojauny.com
SMTP_PASS=your_smtp_password
SMTP_USER_BETA=beta@cojauny.com
SMTP_USER_FEEDBACK=feedback@cojauny.com
SMTP_USER_SUPPORT=support@cojauny.com
```

**Verificación**:
```bash
# Test track-referral-visit
curl -X POST https://YOUR_PROJECT.functions.supabase.co/track-referral-visit \
  -H "Content-Type: application/json" \
  -d '{"referralCode":"TEST1234"}'

# Resultado esperado: {"error": "Referral code not found"} (normal si no existe)
```

### Paso 3: Next.js Application

**Variables de Entorno** (Vercel Dashboard o .env.local):
```bash
NEXT_PUBLIC_BASE_URL=https://cojauny.com
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
BASE_SERVICE_ROLE_KEY=your_service_role_key
SUPABASE_PROJECT_ID=your_project_id
BASE_URL=https://YOUR_PROJECT.supabase.co
```

**Deployment**:
```bash
# Build localmente para verificar
npm run build

# Si usa Vercel
vercel deploy --prod

# Si usa otro hosting, seguir sus instrucciones de deployment
```

**Verificación**:
- [ ] Página carga sin errores
- [ ] Formulario de beta signup funciona
- [ ] No hay errores en la consola del navegador

## Post-Despliegue / Post-Deployment

### Pruebas Manuales / Manual Testing

#### Test 1: Registro Normal (sin referral)
1. [ ] Ir a https://cojauny.com
2. [ ] Llenar formulario de beta signup
3. [ ] Enviar
4. [ ] **Verificar**: Email recibido con referral link
5. [ ] **Verificar**: ReferralPanel aparece en la página
6. [ ] **Verificar**: Stats muestran 0 visitas, 0 signups
7. [ ] **Verificar**: Botón "Copiar" funciona

**SQL para verificar**:
```sql
-- Ver el nuevo registro
SELECT w.email, w.name, rs.referral_code, rs.referral_link
FROM waitlist w
JOIN referral_stats rs ON rs.user_id = w.id
WHERE w.email = 'tu_email_de_prueba@example.com';
```

#### Test 2: Visita con Referral
1. [ ] Copiar referral_link del Test 1
2. [ ] Abrir en navegador incógnito: `https://cojauny.com?ref=XXXXXXXX`
3. [ ] **Verificar**: Página carga normalmente
4. [ ] **Verificar**: Formulario muestra aviso de privacidad sobre referral

**SQL para verificar**:
```sql
-- Ver que visits incrementó
SELECT referral_code, visits, signups
FROM referral_stats
WHERE referral_code = 'XXXXXXXX';
-- Resultado esperado: visits = 1, signups = 0
```

#### Test 3: Signup con Referral
1. [ ] Usar el mismo link del Test 2
2. [ ] Registrarse con email diferente
3. [ ] **Verificar**: Email de confirmación recibido
4. [ ] **Verificar**: ReferralPanel aparece para el nuevo usuario

**SQL para verificar**:
```sql
-- Ver que signups incrementó para el referrer
SELECT referral_code, visits, signups
FROM referral_stats
WHERE referral_code = 'XXXXXXXX';
-- Resultado esperado: visits >= 1, signups = 1

-- Ver que el nuevo usuario tiene referral_code_used
SELECT email, referral_code_used
FROM waitlist
WHERE email = 'nuevo_email@example.com';
-- Resultado esperado: referral_code_used = 'XXXXXXXX'
```

#### Test 4: Internacionalización
Probar en todos los idiomas:

**Español (ES)**:
1. [ ] `https://cojauny.com/es?ref=XXXXXXXX`
2. [ ] Verificar textos en español

**English (EN)**:
1. [ ] `https://cojauny.com/en?ref=XXXXXXXX`
2. [ ] Verificar textos en inglés

**Deutsch (DE)**:
1. [ ] `https://cojauny.com/de?ref=XXXXXXXX`
2. [ ] Verificar textos en alemán

**Français (FR)**:
1. [ ] `https://cojauny.com/fr?ref=XXXXXXXX`
2. [ ] Verificar textos en francés

### Monitoreo / Monitoring

#### Dashboard Queries

**Top 10 referrers**:
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

**Conversion rates**:
```sql
SELECT 
  rs.referral_code,
  w.name,
  rs.visits,
  rs.signups,
  CASE 
    WHEN rs.visits > 0 THEN ROUND((rs.signups::float / rs.visits * 100)::numeric, 2)
    ELSE 0 
  END as conversion_rate
FROM referral_stats rs
JOIN waitlist w ON w.id = rs.user_id
WHERE rs.visits > 0
ORDER BY conversion_rate DESC
LIMIT 20;
```

**Actividad reciente**:
```sql
-- Últimos 10 registros con referral
SELECT 
  w.email,
  w.name,
  w.referral_code_used,
  w.created_at
FROM waitlist w
WHERE w.referral_code_used IS NOT NULL
ORDER BY w.created_at DESC
LIMIT 10;

-- Últimas actualizaciones de stats
SELECT 
  w.email,
  rs.referral_code,
  rs.visits,
  rs.signups,
  rs.updated_at
FROM referral_stats rs
JOIN waitlist w ON w.id = rs.user_id
ORDER BY rs.updated_at DESC
LIMIT 10;
```

### Logs a Revisar / Logs to Review

**Supabase Edge Functions**:
1. Dashboard → Edge Functions → Logs
2. Buscar errores en:
   - `track-referral-visit`
   - `send-beta-email`

**Next.js Application**:
1. Vercel Dashboard → Logs (si usa Vercel)
2. Buscar errores en:
   - `/api/referral/visit`
   - `/api/referral/stats`
   - `/api/beta-signups`

**Errors comunes a buscar**:
- "Failed to fetch referral stats"
- "Referral code not found"
- "Failed to track referral visit"
- Database connection errors
- SMTP errors

## Troubleshooting

### Problema: Código de referral no se genera

**Síntomas**:
- Usuario se registra pero no recibe referral link
- No hay entrada en `referral_stats`

**Diagnóstico**:
```sql
-- Verificar trigger
SELECT * FROM pg_trigger WHERE tgname = 'create_referral_on_signup';

-- Intentar generar código manualmente
SELECT generate_referral_code();
```

**Solución**:
```sql
-- Re-crear trigger
DROP TRIGGER IF EXISTS create_referral_on_signup ON public.waitlist;
CREATE TRIGGER create_referral_on_signup
    AFTER INSERT ON public.waitlist
    FOR EACH ROW
    EXECUTE FUNCTION public.create_referral_stats_for_user();
```

### Problema: Visitas no se incrementan

**Síntomas**:
- Usuario comparte link pero visits no aumenta
- Error en consola del navegador

**Diagnóstico**:
1. Abrir DevTools → Network
2. Buscar llamada a `/api/referral/visit`
3. Ver status code y response

**Soluciones**:
- Si 404: Verificar que el API route existe
- Si 500: Ver logs del servidor
- Si CORS: Verificar headers en edge function

### Problema: Email no incluye referral link

**Síntomas**:
- Email llega pero sin sección de referral
- Variable `{{referral_link}}` aparece literal

**Diagnóstico**:
```sql
-- Ver si el referral_link se guardó
SELECT w.email, rs.referral_link
FROM waitlist w
JOIN referral_stats rs ON rs.user_id = w.id
WHERE w.email = 'problema@example.com';
```

**Soluciones**:
1. Verificar que se pasa `referral_link` en variables del email
2. Re-deploy `send-beta-email` edge function
3. Verificar logs de la función

## Rollback Plan

Si hay problemas críticos:

### Rollback Inmediato (Frontend)
```bash
# Revertir deployment en Vercel
vercel rollback

# O si se usa Git-based deployment
git revert HEAD
git push
```

### Rollback Parcial (Solo Backend)
```sql
-- Deshabilitar trigger temporalmente
ALTER TABLE public.waitlist DISABLE TRIGGER create_referral_on_signup;

-- Re-habilitar cuando esté listo
ALTER TABLE public.waitlist ENABLE TRIGGER create_referral_on_signup;
```

**Nota**: Los datos en `referral_stats` y `waitlist.referral_code_used` son seguros de mantener.

## Métricas de Éxito / Success Metrics

Después de 1 semana, verificar:

- [ ] **Adoption Rate**: % de usuarios que comparten su link
  ```sql
  SELECT 
    COUNT(*) FILTER (WHERE visits > 0 OR signups > 0) * 100.0 / COUNT(*) as adoption_rate
  FROM referral_stats;
  ```

- [ ] **Viral Coefficient**: Promedio de signups por referrer
  ```sql
  SELECT AVG(signups) as avg_signups_per_referrer
  FROM referral_stats
  WHERE visits > 0;
  ```

- [ ] **Conversion Rate**: % de visits que se convierten en signups
  ```sql
  SELECT 
    SUM(signups) * 100.0 / NULLIF(SUM(visits), 0) as overall_conversion_rate
  FROM referral_stats;
  ```

## Contacto / Contact

Para soporte durante el deployment:
- **Email**: support@cojauny.com
- **GitHub Issues**: https://github.com/Richarddigo/cojauny-landing/issues

---

**Fecha de creación**: 2025-01-20
**Última actualización**: 2025-01-20
**Versión del sistema**: 1.0.0
