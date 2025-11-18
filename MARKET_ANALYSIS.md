# Análisis de Mercado y Estrategia de Pricing - Cojauny

**Fecha:** 18 de noviembre de 2025  
**Mercados objetivo:** Europa y Estados Unidos (expansión global potencial)

---

## 1. ANÁLISIS DEL MERCADO

### 1.1 Tamaño del Mercado

**Transporte Aeroportuario Global:**
- **Mercado global de transporte aeroportuario:** ~$65 mil millones USD (2024)
- **Europa:** ~$18 mil millones USD
- **Estados Unidos:** ~$25 mil millones USD
- **Pasajeros aéreos anuales (Europa + USA):** ~1.500 millones de pasajeros

**Mercado Potencial de Cojauny:**
- Si capturamos el **5% del mercado** de transporte compartido: ~$2.15 mil millones
- **Target realista año 1:** 0.01% = ~$4.3 millones en valor de transporte coordinado
- **Usuarios potenciales año 1:** 50,000-100,000 usuarios activos

### 1.2 Competencia y Posicionamiento

#### **Competidores Indirectos (Alternativas al transporte individual):**
- **Trenes/Metro al aeropuerto:** Económico pero limitado geográficamente
- **Buses/Autobuses:** Lento, poco flexible
- **Shuttles compartidos:** Poca flexibilidad, no personalizable

#### **Potenciales Aliados (No competidores):**
- **BlaBlaCar:** Ridesharing general, no específico de aeropuertos
- **Uber/Cabify/Bolt:** Pueden ser proveedores de transporte que los usuarios coordinan vía Cojauny
- **Taxis locales:** Pueden ofrecer tarifas compartidas coordinadas en Cojauny

**Diferenciador clave de Cojauny:**
> Cojauny NO es un proveedor de transporte, es una plataforma de **coordinación y matching** para viajeros del mismo vuelo. Los usuarios eligen su proveedor (BlaBlaCar, Uber, taxi, coche propio).

### 1.3 Perfil del Cliente

**Usuario Objetivo Principal:**
- **Edad:** 18-55 años
- **Perfil:** Viajeros conscientes de costos y medio ambiente
- **Frecuencia:** Desde viajeros ocasionales (2-4 vuelos/año) hasta frecuentes (10+ vuelos/año)
- **Motivaciones:**
  1. Ahorro económico (50-75% en transporte)
  2. Reducción de huella de carbono
  3. Networking y hacer contactos
  4. Seguridad (viajan con personas del mismo vuelo)

**Segmentos:**
1. **Estudiantes y jóvenes profesionales** (18-30): Muy sensibles al precio
2. **Profesionales business** (30-50): Valoran tiempo + networking
3. **Viajeros frecuentes** (30-60): Buscan eficiencia y comunidad
4. **Turistas y familias** (25-55): Ahorro y experiencia social

---

## 2. ANÁLISIS DE COSTOS

### 2.1 Costos Operativos Mensuales (Estimación)

| Concepto | Costo Mensual (EUR) |
|----------|---------------------|
| **Infraestructura Cloud** (Firebase, Servers) | €50-200 |
| **Aerodatabox API** (datos de vuelos) | €100-300 |
| **Storage & Database** | €20-80 |
| **Notificaciones push** | €10-50 |
| **Email service** | €10-30 |
| **CDN & Bandwidth** | €20-50 |
| **Seguros y legal** | €100-300 |
| **Marketing digital** | €200-500 |
| **Mantenimiento/Soporte** | €100-200 |
| **TOTAL OPERATIVO** | **€610 - €1,710/mes** |

### 2.2 Costos Iniciales (One-time)

| Concepto | Costo (EUR) |
|----------|-------------|
| Constitución empresa | €500-1,500 |
| Seguros iniciales | €300-800 |
| Desarrollo completado | €0 (ya hecho) |
| Marketing lanzamiento | €1,000-3,000 |
| **TOTAL INICIAL** | **€1,800 - €5,300** |

### 2.3 Punto de Equilibrio

Con costos de **€1,200/mes** (promedio):
- **Con plan Premium a €4.99/mes:** 241 suscriptores Premium
- **Con plan Premium a €2.99/mes:** 402 suscriptores Premium
- **Con mix 70% Free + 30% Premium:** ~800 usuarios activos totales

---

## 3. ANÁLISIS COMPETITIVO DE PRICING

### 3.1 Referencias del Mercado

| App/Servicio | Modelo | Precio |
|--------------|--------|--------|
| **BlaBlaCar** | Comisión por viaje | 10-12% del costo del viaje |
| **Uber Pool** (descontinuado en muchas áreas) | Por viaje | ~20-30% descuento vs Uber normal |
| **Cabify Share** | Por viaje | Similar a Uber Pool |
| **Trainline Plus** | Suscripción | £4.99/mes (~€5.90) |
| **Too Good To Go** | Freemium | €3.99/mes premium |
| **Qlub** (split bills) | Freemium | €2.99/mes |
| **Splitwise Pro** | Freemium | $2.99/mes (~€2.80) |

### 3.2 Percepción de Valor

**Ahorro promedio por viaje compartido:**
- Taxi aeropuerto individual: €50-80
- Taxi compartido (4 personas): €12-20/persona
- **Ahorro neto por viaje:** €30-60

**Si un usuario hace 6 viajes/año:**
- Ahorro total anual: €180-360
- Costo Premium (€4.99 x 12): €59.88
- **ROI para el usuario:** 200-500%

---

## 4. ESTRATEGIAS DE PRICING PROPUESTAS

### **OPCIÓN 1: Modelo Simple (2 Tiers) - RECOMENDADO ⭐**

#### **FREE (Tier Gratuito)**
**Precio:** €0/mes
- ✅ 1 viaje activo simultáneo
- ✅ Unirse a 2 eventos por mes
- ✅ Chat con organizadores
- ✅ Perfil básico verificado
- ✅ Notificaciones básicas
- ✅ Estadísticas básicas
- ❌ No crear eventos
- ❌ No chat grupal
- ❌ No eventos recurrentes

#### **PREMIUM**
**Precio:** €3.99/mes o €39/año (18% descuento)
- ✅ **Viajes ilimitados**
- ✅ **Eventos ilimitados** (unirse + crear)
- ✅ **Chat grupal** con todos los participantes
- ✅ **Crear eventos propios**
- ✅ **Eventos recurrentes**
- ✅ **Estadísticas avanzadas** (ahorro total, CO₂, badges)
- ✅ **Prioridad en eventos** (apareces primero)
- ✅ **Badge Premium visible**
- ✅ **Notificaciones personalizadas**
- ✅ **Soporte prioritario**

**Conversión esperada:** 20-30% de usuarios activos → Premium

---

### **OPCIÓN 2: Modelo Freemium con Upsells (3 Tiers)**

#### **FREE**
€0/mes - Como en Opción 1

#### **TRAVELER** 
**Precio:** €2.99/mes o €29/año
- ✅ 5 viajes simultáneos
- ✅ 10 eventos/mes
- ✅ Chat con organizadores
- ✅ Crear 2 eventos/mes
- ✅ Estadísticas intermedias
- ❌ No chat grupal
- ❌ No eventos recurrentes

#### **PRO**
**Precio:** €5.99/mes o €59/año
- ✅ Todo ilimitado
- ✅ Todas las features Premium
- ✅ Verificación prioritaria
- ✅ Analytics detallados
- ✅ Soporte 24/7

**Conversión esperada:** 15% Traveler + 10% Pro = 25% de conversión total

---

### **OPCIÓN 3: Modelo Pay-Per-Value (Basado en uso)**

#### **FREE**
€0/mes - Básico limitado

#### **PAY AS YOU GO**
- **€0.99 por evento creado** (ilimitado para unirse)
- **€1.99/mes para chat grupal**
- **€0.49 por evento recurrente**

#### **UNLIMITED PREMIUM**
€4.99/mes - Todo incluido ilimitado

**Conversión esperada:** Difícil de predecir, puede generar fricciones

---

## 5. RECOMENDACIÓN FINAL

### **MODELO RECOMENDADO: OPCIÓN 1 (Simple 2-Tier) con precio €3.99/mes**

#### **Justificación:**

1. **Simplicidad:** Fácil de entender para usuarios
2. **Precio competitivo:** €3.99 está en el rango medio-bajo del mercado
3. **ROI claro:** Con 1 solo viaje compartido al trimestre, el usuario recupera la inversión anual
4. **Psicología de pricing:** €3.99 vs €4.99 tiene mejor percepción (umbral de €5)
5. **Conversión realista:** 25-30% de usuarios activos → Premium es alcanzable

#### **Proyección de Ingresos (Año 1)**

| Métrica | Conservador | Moderado | Optimista |
|---------|-------------|----------|-----------|
| **Usuarios totales año 1** | 10,000 | 30,000 | 75,000 |
| **Tasa conversión Premium** | 15% | 25% | 35% |
| **Usuarios Premium** | 1,500 | 7,500 | 26,250 |
| **Ingresos mensuales** | €5,985 | €29,925 | €104,738 |
| **Ingresos anuales** | €71,820 | €359,100 | €1,256,850 |
| **Costos anuales** | €14,400 | €18,000 | €25,000 |
| **Beneficio neto anual** | €57,420 | €341,100 | €1,231,850 |

---

## 6. ESTRATEGIA DE LANZAMIENTO

### **Fase 1: Beta Cerrada (Mes 1-2)**
- **Objetivo:** 500-1,000 early adopters
- **Pricing:** FREE para todos los beta testers
- **Beneficio:** Premium gratis por 6 meses para primeros 100 usuarios

### **Fase 2: Lanzamiento Público (Mes 3-4)**
- **Objetivo:** 5,000-10,000 usuarios
- **Oferta de lanzamiento:** Premium €2.99/mes primeros 3 meses (33% descuento)
- **Marketing:** €500-1,000/mes en ads dirigidos

### **Fase 3: Crecimiento (Mes 5-12)**
- **Objetivo:** 50,000+ usuarios
- **Precio normal:** €3.99/mes
- **Introducir plan anual:** €39/año (ahorra €8.88)

---

## 7. MÉTRICAS CLAVE A MONITOREAR

1. **CAC (Customer Acquisition Cost):** Debe ser < €10
2. **LTV (Lifetime Value):** Objetivo > €50 (12+ meses de suscripción)
3. **Tasa de conversión Free → Premium:** 20-30%
4. **Churn rate:** Mantener < 5% mensual
5. **NPS (Net Promoter Score):** Objetivo > 50
6. **Usuarios activos mensuales (MAU):** Crecimiento 15-20% mensual

---

## 8. PLAN B: MONETIZACIÓN ALTERNATIVA

Si la conversión a Premium es baja (<15%), considerar:

1. **Modelo de comisión:** 2-5% del valor del transporte compartido coordinado
2. **Partnerships con Uber/Cabify:** Comisión por referrals
3. **Publicidad no invasiva:** Aerolíneas, hoteles, rent-a-car
4. **Modelo B2B:** Licenciar la tecnología a aeropuertos o aerolíneas

---

## CONCLUSIÓN

**Recomendación definitiva:**
- **FREE** ilimitado para testing y adopción
- **PREMIUM a €3.99/mes** con todas las features avanzadas
- **Plan anual €39/año** (18% descuento)
- **Objetivo año 1:** 30,000 usuarios, 7,500 Premium, €360k de ingresos

Este modelo es:
✅ Sostenible financieramente  
✅ Atractivo para usuarios  
✅ Escalable globalmente  
✅ Competitivo en el mercado  
✅ Simple de comunicar

