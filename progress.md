# Melle Arroces - Estado del Proyecto

## Resumen

E-commerce de paellas y arroces artesanales a domicilio.

**Repositorio:** https://github.com/spc74-hub/Melle-Arroces

---

## Stack Tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| Next.js | 16.0.4 | Framework React |
| React | 19.2.0 | UI Library |
| TypeScript | 5.x | Tipado estático |
| Tailwind CSS | 4.x | Estilos |
| Framer Motion | 12.23.24 | Animaciones |
| Zustand | 5.0.8 | Estado global |
| Supabase | 2.84.0 | Backend/DB (pendiente) |
| Lucide React | 0.554.0 | Iconos |

---

## Estructura del Proyecto

```
melle-arroces/
├── app/
│   ├── layout.tsx          ✅ Completado
│   ├── page.tsx            ✅ Completado
│   └── globals.css         ✅ Completado
├── components/
│   ├── layout/
│   │   ├── Header.tsx      ✅ Completado
│   │   └── Footer.tsx      ✅ Completado
│   ├── home/
│   │   └── Hero.tsx        ✅ Completado
│   ├── product/
│   │   └── ProductCard.tsx ✅ Completado
│   ├── ui/
│   │   ├── Button.tsx      ✅ Completado
│   │   ├── Card.tsx        ✅ Completado
│   │   └── Badge.tsx       ✅ Completado
│   └── cart/               ⏳ Pendiente
├── data/
│   └── products.ts         ✅ Completado (6 productos)
├── lib/
│   ├── utils/
│   │   ├── cn.ts           ✅ Completado
│   │   └── format.ts       ✅ Completado
│   └── store/              ⏳ Pendiente (Zustand)
├── types/
│   └── index.ts            ✅ Completado
└── public/
    └── images/             ✅ Imágenes de productos
```

---

## Estado por Funcionalidades

### Completado ✅

| Funcionalidad | Descripción |
|---------------|-------------|
| **Home Page** | Página principal con Hero y productos destacados |
| **Header** | Navegación responsive con menú móvil |
| **Footer** | Información de contacto y enlaces |
| **Hero Section** | Banner principal con animaciones |
| **Product Cards** | Tarjetas de producto con hover effects |
| **Catálogo de productos** | 6 paellas/arroces definidos con datos completos |
| **Sistema de tipos** | TypeScript interfaces para todo el modelo de datos |
| **Componentes UI** | Button, Card, Badge reutilizables |
| **Utilidades** | Formateo de precios, fechas, clases CSS |
| **Diseño responsive** | Mobile-first con breakpoints |

### En Progreso 🔄

| Funcionalidad | Estado |
|---------------|--------|
| - | - |

### Pendiente ⏳

| Funcionalidad | Prioridad | Descripción |
|---------------|-----------|-------------|
| **Página de producto** | Alta | Vista detallada `/producto/[slug]` |
| **Carrito de compra** | Alta | Añadir/quitar productos, gestión de cantidades |
| **Estado global (Zustand)** | Alta | Store para carrito y usuario |
| **Página de checkout** | Alta | Proceso de compra completo |
| **Integración Supabase** | Alta | Base de datos y autenticación |
| **Autenticación** | Media | Login/registro de usuarios |
| **Página de categorías** | Media | Filtrado por categoría |
| **Sistema de reviews** | Media | Valoraciones de productos |
| **Pasarela de pago** | Alta | Integración Stripe |
| **Panel de administración** | Baja | Gestión de pedidos y productos |
| **Sistema de cupones** | Baja | Descuentos y promociones |
| **Notificaciones email** | Baja | Confirmación de pedidos |

---

## Productos en Catálogo

| Producto | Categoría | Precio base | Raciones | Destacado |
|----------|-----------|-------------|----------|-----------|
| Paella Valenciana | Paellas | 12.50€ | 2-8 pax | ✅ |
| Paella de Marisco | Paellas | 15.00€ | 2-8 pax | ✅ |
| Paella Mixta | Paellas | 13.50€ | 2-8 pax | ✅ |
| Arroz Negro | Arroces | 14.00€ | 2-6 pax | - |
| Arroz con Bogavante | Especiales | 25.00€ | 2-4 pax | ✅ |
| Arroz Vegetariano | Paellas | 11.00€ | 2-8 pax | - |

---

## Modelo de Datos (TypeScript)

### Definidos ✅

- `Product` - Productos con porciones, ingredientes, alérgenos
- `Category` - Categorías de productos
- `CartItem` / `Cart` - Carrito de compra
- `Order` / `OrderItem` - Pedidos y estados
- `User` - Usuarios con direcciones
- `Address` - Direcciones de entrega
- `Review` - Reseñas de productos
- `Coupon` - Cupones de descuento
- `DeliverySlot` - Franjas horarias de entrega

---

## Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Saffron | `#E07B00` | Primario/Acento |
| Terracotta | `#C4A77D` | Secundario |
| Olive | `#5B6B4F` | Acentos |
| Bone | `#FAF8F5` | Fondos claros |
| Charcoal | `#1A1A1A` | Texto oscuro |

---

## Próximos Pasos Recomendados

1. **Implementar carrito de compra**
   - Crear store con Zustand
   - Componente CartDrawer/CartPage
   - Persistencia en localStorage

2. **Crear página de producto**
   - Ruta dinámica `/producto/[slug]`
   - Selector de raciones
   - Galería de imágenes

3. **Configurar Supabase**
   - Crear proyecto en Supabase
   - Definir esquema de base de datos
   - Configurar autenticación

4. **Proceso de checkout**
   - Formulario de datos de envío
   - Selección de fecha/hora
   - Resumen del pedido

5. **Integrar Stripe**
   - Configurar cuenta Stripe
   - Implementar checkout session
   - Webhooks para confirmar pagos

---

## Comandos de Desarrollo

```bash
# Instalar dependencias
cd melle-arroces && npm install

# Iniciar desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar producción
npm start

# Lint
npm run lint
```

---

## Notas

- El proyecto usa Next.js App Router (no Pages Router)
- Diseño mobile-first con Tailwind CSS
- Animaciones con Framer Motion
- Imágenes optimizadas con next/image
- Tipografías: Playfair Display (títulos) + Inter (cuerpo)

---

*Última actualización: Noviembre 2025*
