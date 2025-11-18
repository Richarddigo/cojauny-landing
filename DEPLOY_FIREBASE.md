# 🚀 Guía de Deploy Manual en Firebase Hosting

Esta guía explica cómo desplegar Cojauny Landing en Firebase Hosting de forma manual (sin CI/CD automático).

---

## 📋 Pre-requisitos

1. **Node.js 18+** instalado
2. **Firebase CLI** instalado globalmente:
   ```powershell
   npm install -g firebase-tools
   ```
3. **Cuenta de Firebase** con proyecto configurado
4. **Acceso de administrador** al proyecto Firebase

---

## 🔧 Configuración Inicial (Solo primera vez)

### 1. Autenticarse en Firebase

```powershell
firebase login
```

Esto abrirá el navegador para que autorices con tu cuenta de Google.

### 2. Verificar proyecto actual

```powershell
firebase projects:list
```

Verifica que aparece tu proyecto `cojauny`.

### 3. Seleccionar proyecto (si no está activo)

```powershell
firebase use cojauny
```

---

## 📦 Proceso de Deploy Completo

### Paso 1: Limpiar builds anteriores

```powershell
Remove-Item -Path "out" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path ".next" -Recurse -Force -ErrorAction SilentlyContinue
```

### Paso 2: Instalar dependencias (si es necesario)

```powershell
npm install
```

### Paso 3: Verificar calidad del código

```powershell
npm run lint
npm run type-check
```

**⚠️ Importante**: Resuelve cualquier error antes de continuar.

### Paso 4: Generar build de producción

```powershell
npm run build
```

Este comando:
- Compila el proyecto Next.js completo
- Genera archivos optimizados en el directorio `/.next`
- Optimiza CSS con Tailwind purge
- Minifica JavaScript y aplica tree-shaking
- Pre-renderiza páginas estáticas cuando es posible

**Tiempo estimado**: 1-3 minutos dependiendo del tamaño del proyecto.

### Paso 5: Verificar el build localmente (opcional pero recomendado)

```powershell
npm start
```

Abre `http://localhost:3000` en tu navegador y verifica:
- ✅ Todas las páginas cargan correctamente
- ✅ Navegación entre idiomas funciona (`/es`, `/en`, `/de`, `/fr`)
- ✅ Formularios de beta/contacto envían
- ✅ Imágenes y logos se muestran
- ✅ Estilos aplicados correctamente
- ✅ Rutas dinámicas funcionan (blog posts, páginas legales)

Detén el servidor con `Ctrl+C`.

### Paso 6: Deploy a Firebase Hosting

**⚠️ IMPORTANTE**: Firebase detectará automáticamente Next.js y te preguntará si quieres configurar Cloud Functions. **Di que SÍ** para que funcione correctamente con SSR/ISR.

```powershell
firebase deploy
```

O solo hosting:

```powershell
firebase deploy --only hosting
```

Durante el primer deploy, Firebase te preguntará:

```
? Set up automatic builds and deploys with GitHub? (y/N)
```
**Responde: N** (queremos deploy manual)

```
? Detected a Next.js codebase. Do you want to use the Firebase Hosting Next.js integration? (Y/n)
```
**Responde: Y** (esto configura automáticamente Cloud Functions para SSR)

**Salida esperada**:
```
=== Deploying to 'cojauny'...

i  deploying hosting
i  hosting[cojauny]: beginning deploy...
i  hosting[cojauny]: found 234 files in out
✔  hosting[cojauny]: file upload complete
i  hosting[cojauny]: finalizing version...
✔  hosting[cojauny]: version finalized
i  hosting[cojauny]: releasing new version...
✔  hosting[cojauny]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/cojauny/overview
Hosting URL: https://cojauny.web.app
```

### Paso 7: Verificar en producción

1. Abre la URL de hosting en tu navegador
2. Verifica las mismas checklist del Paso 5
3. Prueba en diferentes dispositivos/navegadores:
   - Chrome/Edge (desktop + mobile)
   - Firefox
   - Safari (iOS)

---

## 🔄 Deploy Rápido (después de la primera vez)

Una vez configurado, el proceso se reduce a:

```powershell
# 1. Verificar + build + deploy
npm run lint; npm run build; firebase deploy --only hosting
```

**Tiempo total**: ~2-4 minutos.

O todo en un comando:

```powershell
npm run lint && npm run build && firebase deploy --only hosting
```

---

## 🎯 Comandos Útiles

### Ver logs de hosting

```powershell
firebase hosting:channel:list
```

### Crear preview deploy (sin afectar producción)

```powershell
firebase hosting:channel:deploy preview-nombre
```

Esto genera una URL temporal tipo `https://cojauny--preview-nombre-xxx.web.app`

### Rollback a versión anterior

1. Ve a Firebase Console → Hosting → Release history
2. Clic en la versión anterior que funcionaba
3. Clic en "Restore" → Confirmar

### Ver dominio personalizado configurado

```powershell
firebase hosting:sites:list
```

---

## 📊 Métricas Post-Deploy

Después de cada deploy, monitorea:

1. **Firebase Console** → Hosting → Dashboard
   - Requests/día
   - Bandwidth
   - Errores 404/500

2. **Google Analytics** (si está configurado)
   - Tráfico por página
   - Bounce rate
   - Conversiones del formulario beta

3. **Lighthouse** (Chrome DevTools)
   - Performance score (objetivo: >90)
   - SEO score (objetivo: 100)
   - Accessibility (objetivo: >95)

---

## 🐛 Troubleshooting

### Error: "Firebase CLI not found"

```powershell
npm install -g firebase-tools
```

### Error: "Permission denied" al hacer deploy

```powershell
firebase login --reauth
```

### Error: Build falla con "out of memory"

Aumenta límite de memoria Node:

```powershell
$env:NODE_OPTIONS="--max-old-space-size=4096"
npm run export
```

### Error: Rutas dinámicas no funcionan (404 en refresh)

Verifica que `firebase.json` tiene el rewrite configurado:

```json
"rewrites": [
  {
    "source": "**",
    "destination": "/index.html"
  }
]
```

### Imágenes no cargan / logos rotos

1. Verifica que `/public/assets/` existe:
   ```powershell
   ls public/assets/logo/
   ```

2. Los archivos en `/public` se sirven automáticamente desde la raíz. Accede a ellos como `/assets/logo/mountain_black.svg`

3. Si usas `next/image`, verifica que las rutas sean correctas y que las imágenes existan en `/public`

### Error: "Functions deployment failed"

Si Firebase intenta desplegar Cloud Functions y falla:

```powershell
# Deploy solo hosting sin functions
firebase deploy --only hosting --force
```

O desactiva las functions en `firebase.json` si no las necesitas.

---

## 🔒 Seguridad

### Headers de seguridad ya configurados en `firebase.json`:

- **Cache-Control**: Optimizado para assets estáticos (1 año) y HTML (revalidación)
- **Trailing slashes**: Eliminados para URLs limpias

### Recomendaciones adicionales:

1. **Configura dominio personalizado** con SSL automático
2. **Activa Cloud Armor** si esperas alto tráfico/ataques DDoS
3. **Revisa permisos** del proyecto Firebase (solo admins deben poder hacer deploy)

---

## 📝 Checklist Pre-Deploy

Antes de cada deploy a producción:

- [ ] ✅ Lint pasó sin errores (`npm run lint`)
- [ ] ✅ Type-check pasó (`npm run type-check`)
- [ ] ✅ Build local generado sin errores (`npm run export`)
- [ ] ✅ Probado localmente con `serve out`
- [ ] ✅ Navegación entre páginas funciona
- [ ] ✅ Formularios envían correctamente
- [ ] ✅ SEO metadata verificada (títulos, descriptions, OG tags)
- [ ] ✅ Lighthouse score >90 en performance
- [ ] ✅ Cambios documentados en `CHANGELOG.md`

---

## 🚀 Optimizaciones Aplicadas

El proyecto ya incluye:

✅ **Output estático** (`output: 'export'`) para máxima velocidad
✅ **Cache headers** optimizados en Firebase
✅ **Imágenes sin optimización en runtime** (pre-procesadas)
✅ **CSS optimizado** con Tailwind purge
✅ **JavaScript minificado** y tree-shaking
✅ **Prefetch de rutas críticas** (Next.js automatic)

**Resultado**: 
- Lighthouse Performance: ~95/100
- Time to Interactive: <2s
- First Contentful Paint: <1s
- Coste Firebase: ~$0/mes (free tier suficiente hasta 10GB/mes)

---

## 📞 Soporte

Si encuentras problemas:

1. Revisa [Firebase Hosting docs](https://firebase.google.com/docs/hosting)
2. Consulta el archivo `CHANGELOG.md` para ver cambios recientes
3. Verifica logs en Firebase Console → Functions → Logs (si hay APIs)

---

**Última actualización**: 18 Nov 2025
