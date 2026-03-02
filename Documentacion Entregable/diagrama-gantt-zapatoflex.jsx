import { useState } from "react";

/*
 * PALETA ZAPATOFLEX — Fondo Azul
 * Primary:   #1a3a5c (azul oscuro profundo)
 * Secondary: #2563eb (azul brillante / acento)
 * Accent:    #60a5fa (azul claro)
 * Surface:   #0f2744 (azul muy oscuro - fondo)
 * Text:      #e8f0fe (blanco azulado)
 * Highlight: #f0c040 (dorado para CTAs)
 * Muted:     #4a7fb5 (azul medio)
 */

const COLORS = {
  bg: "#0f2744",
  bgDeep: "#091b33",
  surface: "#1a3a5c",
  surfaceLight: "#234b72",
  primary: "#2563eb",
  accent: "#60a5fa",
  highlight: "#f0c040",
  text: "#e8f0fe",
  textMuted: "#8ab4d8",
  border: "#1e4670",
  success: "#34d399",
  danger: "#f87171",
  white: "#ffffff",
};

const mockups = [
  {
    id: "home",
    title: "🏠 Home Rediseñado",
    subtitle: "Landing page optimizada para conversión",
    description: "Hero con búsqueda prominente, categorías visuales, ofertas dinámicas y selector de idioma/moneda para expansión internacional.",
    improvements: [
      "Hero con video/animación de producto estrella",
      "Barra de búsqueda predictiva con IA",
      "Categorías con iconografía premium",
      "Banner de ofertas dinámico por región",
      "Selector de idioma y moneda visible",
    ],
    preview: "home",
  },
  {
    id: "catalog",
    title: "📦 Catálogo Inteligente",
    subtitle: "Filtros avanzados y vista rápida",
    description: "Catálogo con filtros laterales, ordenamiento múltiple, vista rápida de producto y paginación infinita optimizada con lazy loading.",
    improvements: [
      "Filtros por talla, color, precio, material",
      "Vista rápida sin cambiar de página",
      "Lazy loading + paginación infinita",
      "Etiquetas de 'Nuevo', 'Oferta', 'Agotado'",
      "Comparador de productos (hasta 3)",
    ],
    preview: "catalog",
  },
  {
    id: "checkout",
    title: "💳 Checkout Multi-Pasarela",
    subtitle: "Patrón Strategy para pagos flexibles",
    description: "Checkout unificado con múltiples métodos de pago integrados mediante Strategy Pattern. Experiencia fluida en 3 pasos.",
    improvements: [
      "PayPal, Stripe, Mercado Pago integrados",
      "Agregar nuevos métodos sin tocar el core",
      "Cálculo dinámico de impuestos por región",
      "Resumen de pedido en tiempo real",
      "Dirección con autocompletado internacional",
    ],
    preview: "checkout",
  },
  {
    id: "mobile",
    title: "📱 App Móvil",
    subtitle: "APIs REST/GraphQL compartidas",
    description: "App nativa consumiendo las mismas APIs del backend. Navegación por tabs, notificaciones push y experiencia offline-first.",
    improvements: [
      "Misma lógica de negocio que la web",
      "Navegación bottom tabs nativa",
      "Notificaciones push de pedidos",
      "Modo offline para catálogo",
      "Escaneo de código QR en tienda",
    ],
    preview: "mobile",
  },
  {
    id: "dashboard",
    title: "📊 Panel Admin",
    subtitle: "Métricas en tiempo real",
    description: "Dashboard administrativo con KPIs, gestión de inventario, pedidos y analítica por región para la expansión internacional.",
    improvements: [
      "KPIs en tiempo real (ventas, usuarios, conversión)",
      "Gestión de inventario multi-bodega",
      "Mapa de calor de ventas por país",
      "Alertas de stock bajo automáticas",
      "Reportes exportables por región",
    ],
    preview: "dashboard",
  },
  {
    id: "architecture",
    title: "🏗️ Arquitectura",
    subtitle: "Docker + Load Balancer + Cloud DB",
    description: "Diagrama de la arquitectura objetivo: contenedores Docker orquestados, balanceo de carga, base de datos gestionada y APIs compartidas.",
    improvements: [
      "Contenedores Docker con orquestación",
      "Load Balancer para distribución de tráfico",
      "Base de datos gestionada (RDS/Cloud SQL)",
      "CDN para assets estáticos",
      "CI/CD automatizado con GitHub Actions",
    ],
    preview: "architecture",
  },
];

function HomePreview() {
  return (
    <div style={{ background: COLORS.bg, borderRadius: 12, overflow: "hidden", fontFamily: "'Segoe UI', sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", borderBottom: `1px solid ${COLORS.border}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent})`, borderRadius: 6 }} />
          <span style={{ color: COLORS.white, fontWeight: 700, fontSize: 15 }}>ZapatoFlex</span>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 12, color: COLORS.textMuted }}>
          <span>Catálogo</span><span>Ofertas</span><span>Nosotros</span>
          <span style={{ background: COLORS.surface, padding: "3px 8px", borderRadius: 4, fontSize: 10 }}>🌐 ES | COP</span>
        </div>
      </div>
      <div style={{ padding: "40px 24px", textAlign: "center", background: `linear-gradient(180deg, ${COLORS.bg} 0%, ${COLORS.bgDeep} 100%)` }}>
        <div style={{ fontSize: 10, color: COLORS.accent, letterSpacing: 3, marginBottom: 8, textTransform: "uppercase" }}>Nueva Colección 2026</div>
        <div style={{ fontSize: 26, fontWeight: 800, color: COLORS.white, lineHeight: 1.2 }}>Estilo que se adapta<br />a tu ritmo</div>
        <div style={{ fontSize: 12, color: COLORS.textMuted, marginTop: 10 }}>Envío gratis en Colombia 🇨🇴</div>
        <div style={{ margin: "20px auto 0", maxWidth: 320, background: COLORS.surface, borderRadius: 25, padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, border: `1px solid ${COLORS.border}` }}>
          <span style={{ color: COLORS.textMuted, fontSize: 14 }}>🔍</span>
          <span style={{ color: COLORS.textMuted, fontSize: 12 }}>Buscar zapatos, tallas, estilos...</span>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 12, padding: "16px 20px" }}>
        {[{ e: "👟", n: "Casual" }, { e: "👠", n: "Formal" }, { e: "🥾", n: "Botas" }, { e: "🩴", n: "Sandalias" }].map((c) => (
          <div key={c.n} style={{ textAlign: "center" }}>
            <div style={{ width: 50, height: 50, background: COLORS.surface, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, border: `1px solid ${COLORS.border}` }}>{c.e}</div>
            <div style={{ fontSize: 9, color: COLORS.textMuted, marginTop: 4 }}>{c.n}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, padding: "8px 16px 16px" }}>
        {[{ n: "Urban Runner", p: "$189.900", tag: "NUEVO" }, { n: "Classic Leather", p: "$149.900", tag: "OFERTA" }, { n: "Sport Flex", p: "$219.900", tag: null }].map((p) => (
          <div key={p.n} style={{ background: COLORS.surface, borderRadius: 8, padding: 8, position: "relative" }}>
            {p.tag && <div style={{ position: "absolute", top: 6, left: 6, background: p.tag === "NUEVO" ? COLORS.primary : COLORS.danger, color: COLORS.white, fontSize: 7, fontWeight: 700, padding: "2px 5px", borderRadius: 3 }}>{p.tag}</div>}
            <div style={{ height: 50, background: COLORS.surfaceLight, borderRadius: 6, marginBottom: 6 }} />
            <div style={{ fontSize: 9, color: COLORS.text, fontWeight: 600 }}>{p.n}</div>
            <div style={{ fontSize: 10, color: COLORS.highlight, fontWeight: 700 }}>{p.p}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CatalogPreview() {
  return (
    <div style={{ background: COLORS.bg, borderRadius: 12, overflow: "hidden", fontFamily: "'Segoe UI', sans-serif" }}>
      <div style={{ padding: "12px 16px", background: COLORS.bgDeep, borderBottom: `1px solid ${COLORS.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 700, fontSize: 14, color: COLORS.white }}>Catálogo</span>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ fontSize: 10, background: COLORS.surface, padding: "3px 8px", borderRadius: 4, color: COLORS.textMuted }}>Ordenar ▾</span>
          <span style={{ fontSize: 10, background: COLORS.surface, padding: "3px 8px", borderRadius: 4, color: COLORS.textMuted }}>Filtros ▾</span>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: 100, padding: 10, background: COLORS.bgDeep, borderRight: `1px solid ${COLORS.border}`, fontSize: 9, color: COLORS.textMuted }}>
          <div style={{ fontWeight: 700, color: COLORS.accent, marginBottom: 6 }}>Filtros</div>
          {["Talla", "Color", "Precio", "Material", "Marca"].map((f) => (
            <div key={f} style={{ padding: "5px 0", borderBottom: `1px solid ${COLORS.border}`, display: "flex", justifyContent: "space-between" }}>
              <span>{f}</span><span style={{ color: COLORS.accent }}>›</span>
            </div>
          ))}
          <div style={{ marginTop: 8, background: COLORS.primary, color: COLORS.white, textAlign: "center", padding: "4px 0", borderRadius: 4, fontWeight: 600, fontSize: 8 }}>Aplicar</div>
        </div>
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, padding: 10 }}>
          {[
            { n: "Flex Runner", p: "$189.900", r: "⭐ 4.8", s: "NUEVO" },
            { n: "Classic Boot", p: "$249.900", r: "⭐ 4.5", s: "-20%" },
            { n: "Urban Step", p: "$159.900", r: "⭐ 4.9", s: null },
            { n: "Sport Air", p: "$199.900", r: "⭐ 4.7", s: "AGOTADO" },
          ].map((p) => (
            <div key={p.n} style={{ background: COLORS.surface, borderRadius: 8, padding: 8, border: `1px solid ${COLORS.border}`, position: "relative", opacity: p.s === "AGOTADO" ? 0.5 : 1 }}>
              {p.s && (
                <div style={{
                  position: "absolute", top: 4, right: 4, fontSize: 7, fontWeight: 700, padding: "2px 5px", borderRadius: 3,
                  background: p.s === "NUEVO" ? COLORS.success : p.s === "AGOTADO" ? "#64748b" : COLORS.danger,
                  color: COLORS.white
                }}>{p.s}</div>
              )}
              <div style={{ height: 45, background: COLORS.surfaceLight, borderRadius: 6, marginBottom: 6, display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.textMuted, fontSize: 18 }}>👟</div>
              <div style={{ fontSize: 9, fontWeight: 600, color: COLORS.text }}>{p.n}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 2 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: COLORS.highlight }}>{p.p}</span>
                <span style={{ fontSize: 8, color: COLORS.textMuted }}>{p.r}</span>
              </div>
              <div style={{ marginTop: 4, fontSize: 7, color: COLORS.white, background: COLORS.primary, textAlign: "center", padding: "3px 0", borderRadius: 4 }}>Vista rápida</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CheckoutPreview() {
  const [method, setMethod] = useState("stripe");
  return (
    <div style={{ background: COLORS.bg, borderRadius: 12, overflow: "hidden", fontFamily: "'Segoe UI', sans-serif" }}>
      <div style={{ background: `linear-gradient(135deg, ${COLORS.bgDeep}, ${COLORS.surface})`, padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ color: COLORS.white, fontWeight: 700, fontSize: 14 }}>Checkout</span>
        <div style={{ display: "flex", gap: 16, fontSize: 9, color: COLORS.accent }}>
          <span style={{ opacity: 1 }}>① Envío</span>
          <span style={{ opacity: 0.5 }}>② Pago</span>
          <span style={{ opacity: 0.3 }}>③ Confirmar</span>
        </div>
      </div>
      <div style={{ padding: 16 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: COLORS.text, marginBottom: 8 }}>Método de pago</div>
        <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
          {[
            { id: "stripe", label: "💳 Stripe", color: "#635bff" },
            { id: "paypal", label: "🅿️ PayPal", color: "#003087" },
            { id: "mercadopago", label: "🤝 M. Pago", color: "#00b1ea" },
            { id: "pse", label: "🏦 PSE", color: "#00a650" },
          ].map((m) => (
            <div key={m.id} onClick={() => setMethod(m.id)} style={{
              flex: 1, textAlign: "center", padding: "8px 4px", borderRadius: 8, fontSize: 9, fontWeight: 600,
              cursor: "pointer", transition: "all 0.2s",
              background: method === m.id ? m.color : COLORS.surface,
              color: method === m.id ? COLORS.white : COLORS.textMuted,
              border: method === m.id ? `2px solid ${m.color}` : `2px solid ${COLORS.border}`,
            }}>{m.label}</div>
          ))}
        </div>
        <div style={{ background: COLORS.surface, borderRadius: 8, padding: 12, border: `1px solid ${COLORS.border}` }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            <div style={{ gridColumn: "1 / -1", background: COLORS.surfaceLight, border: `1px solid ${COLORS.border}`, borderRadius: 6, padding: "8px 10px", fontSize: 10, color: COLORS.textMuted }}>Número de tarjeta</div>
            <div style={{ background: COLORS.surfaceLight, border: `1px solid ${COLORS.border}`, borderRadius: 6, padding: "8px 10px", fontSize: 10, color: COLORS.textMuted }}>MM/AA</div>
            <div style={{ background: COLORS.surfaceLight, border: `1px solid ${COLORS.border}`, borderRadius: 6, padding: "8px 10px", fontSize: 10, color: COLORS.textMuted }}>CVC</div>
          </div>
        </div>
        <div style={{ marginTop: 12, background: COLORS.surface, borderRadius: 8, padding: 10, fontSize: 9 }}>
          <div style={{ display: "flex", justifyContent: "space-between", color: COLORS.textMuted, marginBottom: 4 }}><span>Subtotal</span><span>$379.800</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", color: COLORS.textMuted, marginBottom: 4 }}><span>IVA (19%)</span><span>$72.162</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", color: COLORS.textMuted, marginBottom: 4 }}><span>Envío</span><span style={{ color: COLORS.success }}>Gratis</span></div>
          <div style={{ borderTop: `1px solid ${COLORS.border}`, paddingTop: 4, display: "flex", justifyContent: "space-between", fontWeight: 700, color: COLORS.white, fontSize: 12 }}><span>Total</span><span>$451.962</span></div>
        </div>
        <div style={{ marginTop: 10, background: COLORS.highlight, color: COLORS.bgDeep, textAlign: "center", padding: "10px 0", borderRadius: 8, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>Confirmar Pedido →</div>
      </div>
    </div>
  );
}

function MobilePreview() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 16, background: COLORS.surface }}>
      <div style={{ width: 180, background: COLORS.bgDeep, borderRadius: 24, padding: "8px 0", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
        <div style={{ width: 60, height: 6, background: COLORS.surface, borderRadius: 3, margin: "0 auto 8px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", padding: "0 12px 6px", fontSize: 7, color: COLORS.textMuted }}>
          <span>9:41</span><span>📶 🔋</span>
        </div>
        <div style={{ background: COLORS.bg, margin: "0 4px", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ padding: "10px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div><div style={{ fontSize: 8, color: COLORS.textMuted }}>Hola, Carlos 👋</div><div style={{ fontSize: 12, fontWeight: 700, color: COLORS.white }}>ZapatoFlex</div></div>
            <div style={{ width: 24, height: 24, borderRadius: 12, background: COLORS.primary, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>🛒</div>
          </div>
          <div style={{ margin: "0 12px 8px", background: COLORS.surface, borderRadius: 8, padding: "6px 10px", fontSize: 8, color: COLORS.textMuted }}>🔍 Buscar...</div>
          <div style={{ margin: "0 12px 8px", background: `linear-gradient(135deg, ${COLORS.primary}33, ${COLORS.accent}22)`, borderRadius: 8, padding: 10, border: `1px solid ${COLORS.border}` }}>
            <div style={{ fontSize: 7, color: COLORS.accent, letterSpacing: 1 }}>OFERTA</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.white }}>30% en Boots</div>
            <div style={{ fontSize: 7, color: COLORS.textMuted, marginTop: 2 }}>Código: FLEX30</div>
          </div>
          <div style={{ display: "flex", gap: 6, padding: "0 12px 8px", overflow: "hidden" }}>
            {["👟 Casual", "👠 Formal", "🥾 Boots"].map((p) => (
              <div key={p} style={{ minWidth: 60, background: COLORS.surface, borderRadius: 8, padding: 6, textAlign: "center" }}>
                <div style={{ fontSize: 16 }}>{p.split(" ")[0]}</div>
                <div style={{ fontSize: 7, color: COLORS.textMuted }}>{p.split(" ")[1]}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-around", padding: "8px 0", borderTop: `1px solid ${COLORS.border}`, fontSize: 8 }}>
            {["🏠", "🔍", "❤️", "📦", "👤"].map((i, idx) => (
              <span key={i} style={{ color: idx === 0 ? COLORS.accent : COLORS.textMuted }}>{i}</span>
            ))}
          </div>
        </div>
        <div style={{ width: 40, height: 3, background: COLORS.surface, borderRadius: 2, margin: "8px auto 0" }} />
      </div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div style={{ background: COLORS.bgDeep, borderRadius: 12, overflow: "hidden", fontFamily: "'Segoe UI', sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 16px", borderBottom: `1px solid ${COLORS.border}` }}>
        <span style={{ color: COLORS.accent, fontWeight: 700, fontSize: 12 }}>Admin Dashboard</span>
        <span style={{ fontSize: 9, color: COLORS.textMuted }}>Marzo 2026</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 6, padding: "10px 12px" }}>
        {[
          { label: "Ventas Hoy", value: "$4.2M", change: "+18%", color: COLORS.success },
          { label: "Usuarios", value: "12,847", change: "+340%", color: COLORS.primary },
          { label: "Conversión", value: "3.8%", change: "+0.6%", color: COLORS.highlight },
          { label: "Pedidos", value: "1,293", change: "+52%", color: COLORS.accent },
        ].map((k) => (
          <div key={k.label} style={{ background: COLORS.surface, borderRadius: 8, padding: 8 }}>
            <div style={{ fontSize: 7, color: COLORS.textMuted }}>{k.label}</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: COLORS.white }}>{k.value}</div>
            <div style={{ fontSize: 8, color: k.color }}>{k.change} ↑</div>
          </div>
        ))}
      </div>
      <div style={{ margin: "0 12px 8px", background: COLORS.surface, borderRadius: 8, padding: 10 }}>
        <div style={{ fontSize: 9, color: COLORS.textMuted, marginBottom: 8 }}>Ventas por Región</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 60 }}>
          {[
            { r: "🇨🇴 COL", h: 100 }, { r: "🇲🇽 MX", h: 65 }, { r: "🇦🇷 AR", h: 45 },
            { r: "🇨🇱 CL", h: 35 }, { r: "🇵🇪 PE", h: 25 }, { r: "🇪🇨 EC", h: 20 },
          ].map((b) => (
            <div key={b.r} style={{ flex: 1, textAlign: "center" }}>
              <div style={{ height: b.h * 0.5, background: `linear-gradient(180deg, ${COLORS.accent}, ${COLORS.primary})`, borderRadius: "4px 4px 0 0", minHeight: 8 }} />
              <div style={{ fontSize: 6, color: COLORS.textMuted, marginTop: 3 }}>{b.r}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ margin: "0 12px 12px", background: COLORS.surface, borderRadius: 8, padding: 10 }}>
        <div style={{ fontSize: 9, color: COLORS.textMuted, marginBottom: 6 }}>Pedidos Recientes</div>
        {[
          { id: "#4821", st: "Enviado", c: COLORS.success },
          { id: "#4820", st: "Pagado", c: COLORS.primary },
          { id: "#4819", st: "Pendiente", c: COLORS.highlight },
        ].map((o) => (
          <div key={o.id} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: `1px solid ${COLORS.bgDeep}`, fontSize: 8 }}>
            <span style={{ color: COLORS.text }}>{o.id}</span>
            <span style={{ color: o.c, fontWeight: 600 }}>{o.st}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArchitecturePreview() {
  const boxStyle = (color) => ({
    background: color + "20", border: `2px solid ${color}`, borderRadius: 8, padding: "6px 10px",
    fontSize: 9, fontWeight: 600, color: color, textAlign: "center",
  });
  return (
    <div style={{ background: COLORS.bg, borderRadius: 12, padding: 16, fontFamily: "'Segoe UI', sans-serif" }}>
      <div style={{ textAlign: "center", fontSize: 12, fontWeight: 800, color: COLORS.white, marginBottom: 12 }}>Arquitectura de Escalabilidad</div>
      <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 8 }}>
        <div style={boxStyle(COLORS.primary)}>🌐 Web App</div>
        <div style={boxStyle("#a78bfa")}>📱 Mobile App</div>
        <div style={boxStyle(COLORS.accent)}>🔗 API Terceros</div>
      </div>
      <div style={{ textAlign: "center", color: COLORS.textMuted, fontSize: 16 }}>↓</div>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
        <div style={{ ...boxStyle(COLORS.highlight), width: 260 }}>⚖️ Load Balancer (Nginx / AWS ALB)</div>
      </div>
      <div style={{ textAlign: "center", color: COLORS.textMuted, fontSize: 16 }}>↓</div>
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 8 }}>
        {["Container 1", "Container 2", "Container 3"].map((c) => (
          <div key={c} style={boxStyle(COLORS.success)}>🐳 {c}</div>
        ))}
      </div>
      <div style={{ textAlign: "center", color: COLORS.textMuted, fontSize: 16 }}>↓</div>
      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 8, flexWrap: "wrap" }}>
        <div style={boxStyle("#f472b6")}>💳 Payment Strategy</div>
        <div style={boxStyle("#2dd4bf")}>🌍 i18n Service</div>
        <div style={boxStyle("#fb923c")}>📦 Inventory</div>
      </div>
      <div style={{ textAlign: "center", color: COLORS.textMuted, fontSize: 16 }}>↓</div>
      <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
        <div style={boxStyle(COLORS.danger)}>🗄️ Cloud DB (RDS)</div>
        <div style={boxStyle("#818cf8")}>⚡ Redis Cache</div>
        <div style={boxStyle("#a3e635")}>📁 CDN (S3)</div>
      </div>
    </div>
  );
}

const previewComponents = {
  home: HomePreview,
  catalog: CatalogPreview,
  checkout: CheckoutPreview,
  mobile: MobilePreview,
  dashboard: DashboardPreview,
  architecture: ArchitecturePreview,
};

export default function ZapatoFlexMockups() {
  const [active, setActive] = useState(0);
  const current = mockups[active];
  const Preview = previewComponents[current.preview];

  return (
    <div style={{ minHeight: "100vh", background: COLORS.bgDeep, fontFamily: "'Segoe UI', Tahoma, sans-serif" }}>
      <div style={{ background: COLORS.bg, padding: "20px 24px", borderBottom: `1px solid ${COLORS.border}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent})`, borderRadius: 8 }} />
          <div>
            <div style={{ color: COLORS.white, fontWeight: 800, fontSize: 18 }}>ZapatoFlex — Plan de Escalabilidad</div>
            <div style={{ color: COLORS.textMuted, fontSize: 12 }}>Mockups & Roadmap de Crecimiento (6 meses)</div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 4, padding: "12px 16px", overflowX: "auto", background: COLORS.bg, borderBottom: `1px solid ${COLORS.border}` }}>
        {mockups.map((m, i) => (
          <div key={m.id} onClick={() => setActive(i)} style={{
            padding: "8px 14px", borderRadius: 8, fontSize: 11, fontWeight: 600, cursor: "pointer",
            whiteSpace: "nowrap", transition: "all 0.2s",
            background: active === i ? COLORS.primary : COLORS.surface,
            color: active === i ? COLORS.white : COLORS.textMuted,
          }}>{m.title}</div>
        ))}
      </div>

      <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "start" }}>
          <div>
            <div style={{ fontSize: 10, color: COLORS.accent, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>Mockup Preview</div>
            <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 10px 40px rgba(0,0,0,0.3)", border: `1px solid ${COLORS.border}` }}>
              <Preview />
            </div>
          </div>
          <div>
            <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.white, lineHeight: 1.2 }}>{current.title}</div>
            <div style={{ fontSize: 13, color: COLORS.accent, fontWeight: 600, marginTop: 4 }}>{current.subtitle}</div>
            <p style={{ fontSize: 13, color: COLORS.textMuted, lineHeight: 1.6, margin: "12px 0" }}>{current.description}</p>
            <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.text, marginBottom: 8 }}>Mejoras clave:</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {current.improvements.map((imp, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, background: COLORS.surface, padding: "8px 12px", borderRadius: 8, border: `1px solid ${COLORS.border}` }}>
                  <div style={{ width: 20, height: 20, borderRadius: 6, background: `${COLORS.primary}30`, color: COLORS.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                  <span style={{ fontSize: 11, color: COLORS.text, lineHeight: 1.4 }}>{imp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 32, background: COLORS.bg, borderRadius: 16, padding: 20, border: `1px solid ${COLORS.border}` }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: COLORS.white, marginBottom: 16 }}>📅 Roadmap de Implementación (6 meses)</div>
          <div style={{ display: "flex", gap: 8 }}>
            {[
              { m: "Mes 1-2", t: "Infraestructura", d: "Docker, CI/CD, Load Balancer, DB Cloud", color: COLORS.primary },
              { m: "Mes 2-3", t: "Pagos & Catálogo", d: "Strategy Pattern, filtros avanzados, búsqueda", color: COLORS.highlight },
              { m: "Mes 3-4", t: "APIs & Mobile", d: "REST/GraphQL, app React Native, auth", color: "#a78bfa" },
              { m: "Mes 4-5", t: "Internacional", d: "i18n, multi-moneda, impuestos por región", color: COLORS.success },
              { m: "Mes 5-6", t: "Dashboard & QA", d: "Admin panel, analytics, testing, lanzamiento", color: COLORS.danger },
            ].map((phase, i) => (
              <div key={i} style={{ flex: 1 }}>
                <div style={{ height: 4, background: phase.color + "30", borderRadius: 2, marginBottom: 8 }}>
                  <div style={{ height: 4, background: phase.color, borderRadius: 2, width: active >= i ? "100%" : "0%", transition: "width 0.5s" }} />
                </div>
                <div style={{ fontSize: 8, color: phase.color, fontWeight: 700, marginBottom: 2 }}>{phase.m}</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: COLORS.white }}>{phase.t}</div>
                <div style={{ fontSize: 8, color: COLORS.textMuted, lineHeight: 1.4, marginTop: 2 }}>{phase.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
