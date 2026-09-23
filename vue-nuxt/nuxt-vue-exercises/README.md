# nuxt-vue-exercises

Proyecto base de ejercicios de Vue 3 (Composition API) + Nuxt 4.
Todos los ejercicios del curso se construyen sobre este mismo proyecto, uno detrás de otro.

## Stack

- **Nuxt 4** — meta-framework sobre Vue 3, usando Composition API
- **TypeScript** — tipado estático (`strict: true`)
- **Tailwind CSS** (`@nuxtjs/tailwindcss`) — estilos utility-first
- **Pinia** (`@pinia/nuxt`) — gestión de estado

## Estructura del proyecto

```
app/
├── assets/
│   └── css/
│       └── main.css       # Directivas de Tailwind (@tailwind base/components/utilities)
├── components/             # Componentes reutilizables
├── composables/            # Composables (lógica reutilizable con Composition API)
├── layouts/
│   └── default.vue         # Layout base de la app
├── pages/                  # Rutas (file-based routing de Nuxt)
├── stores/                 # Stores de Pinia
├── types/                  # Tipos e interfaces de TypeScript
└── app.vue                 # Punto de entrada, monta NuxtLayout + NuxtPage

nuxt.config.ts               # Configuración de Nuxt (módulos, TypeScript, CSS)
tailwind.config.js           # Configuración de Tailwind
```

## Scripts

| Comando          | Descripción                          |
|-------------------|---------------------------------------|
| `pnpm dev`        | Servidor de desarrollo                |
| `pnpm build`      | Build de producción                   |
| `pnpm generate`   | Generación estática                   |
| `pnpm preview`    | Previsualizar build de producción     |

## Notas

- Preflight de Tailwind está activo y verificado: los márgenes/paddings por defecto del navegador en elementos como `h1`, `p` y `ul/li` han sido eliminados.
- Este es el único proyecto Nuxt del curso — cada ejercicio se agrega como páginas, componentes, composables o stores dentro de esta misma base, sin crear proyectos nuevos.