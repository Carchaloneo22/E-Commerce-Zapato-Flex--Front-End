# ZapatoFlex SAS — E-commerce de Calzado

Plataforma de comercio electrónico para la venta de calzado en Colombia, construida con **PHP 8.1** (MVC + Repository, sin framework), **React 19 + TypeScript** (Vite), y **PostgreSQL** (esquema dual: `security` + `logic`). Integra pagos con **Wompi** (pasarela colombiana).

## Estructura del Proyecto

```
├── backend/            API REST en PHP (MVC + Repository)
│   ├── Config/         Database (Singleton), Environment, ServiceFactory
│   ├── Controllers/    Auth, Cart, Catalog, Inventory, Order, Payment, User
│   ├── Core/           Request, Response, Router
│   ├── Middleware/      Auth JWT, CSRF, Rate Limiter, Permisos RBAC
│   ├── Models/         Entidades (User, Product, ProductVariant, Order, Cart…)
│   ├── Repositories/   Acceso a datos (SQL aislado)
│   └── Services/       Lógica de negocio + Payment Strategy Pattern
├── frontend/           SPA React 19 + TypeScript + Vite 7
│   └── src/
│       ├── api/        Axios clients (público + privado con interceptors)
│       ├── auth/       AuthProvider, login/register, guards
│       ├── store/      Tienda: catálogo, carrito, checkout, pedidos
│       ├── dashboard/  Panel admin: usuarios, productos, pedidos, inventario
│       ├── legal/      Términos de servicio, política de privacidad
│       └── router/     React Router + guards (Protected/Guest)
├── database/           DDL, DML (seeds), funciones PL/pgSQL
├── docs/               Documentación técnica detallada
├── scripts/            Scripts de utilidad
└── secrets/            Variables de entorno (no versionadas)
```

## Quick Start

### 1. Base de Datos (PostgreSQL)

```bash
# Conectarse a PostgreSQL y crear la base de datos
psql -U postgres
CREATE DATABASE zapatoflex;
\c zapatoflex

# Ejecutar DDL + seed en orden
\i database/DDL/security.sql
\i database/DDL/logic.sql
\i database/FUNCS/security/fun_insertar_token.sql
\i database/FUNCS/security/fun_revocar_token.sql
\i database/FUNCS/security/fun_usar_refresh_token.sql
\i database/FUNCS/security/fun_validar_permiso_menu.sql
\i database/DML/security.seed.sql
\i database/DML/logic.seed.sql
```

### 2. Backend

```bash
cp secrets/env_vars.example.php secrets/env_vars.php
# Editar secrets/env_vars.php con los datos reales de conexión

cd backend
php -S localhost:8000 -t .
```

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

El frontend usa Vite proxy (`/api` → `http://localhost:8000`).

### Credenciales de prueba

| Usuario           | Contraseña  | Rol   |
| ----------------- | ----------- | ----- |
| admin@example.com | changeme123 | ADMIN |

## Documentación Detallada

| Documento                            | Contenido                                    |
| ------------------------------------ | -------------------------------------------- |
| [docs/SETUP.md](docs/SETUP.md)       | Instalación paso a paso                      |
| [docs/BACKEND.md](docs/BACKEND.md)   | Arquitectura, API REST, autenticación, pagos |
| [docs/FRONTEND.md](docs/FRONTEND.md) | SPA, estado, rutas, componentes              |
| [docs/DATABASE.md](docs/DATABASE.md) | Esquemas, tablas, funciones, seeds           |

## Patrones de Diseño

| Patrón                   | Ubicación                          |
| ------------------------ | ---------------------------------- |
| MVC + Repository         | Arquitectura principal backend     |
| Singleton                | `Database`, `Environment`          |
| Factory                  | `ServiceFactory`                   |
| Strategy                 | `PaymentStrategyInterface` / Wompi |
| Front Controller         | `index.php`                        |
| Middleware Pipeline      | Auth, CSRF, Rate Limit, Permisos   |
| Double-Submit Cookie     | Protección CSRF                    |
| Provider Pattern (React) | Auth, Cart, Theme, Dashboard       |

## Tecnologías

- **Backend**: PHP 8.1, JWT HS256 (manual), bcrypt, PDO PostgreSQL
- **Frontend**: React 19, TypeScript, Vite 7, TanStack Query 5, React Router 7, Tailwind CSS 4, Radix UI, Zod 4
- **Base de Datos**: PostgreSQL 15+ (esquema dual `security` + `logic`)
- **Pagos**: Wompi Colombia (sandbox)
- **Despliegue**: Apache 2.4 + PHP-FPM, Let's Encrypt SSL
