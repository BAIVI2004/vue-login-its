# Vue Login ITS - Demo

Este proyecto es una demostración de una aplicación con inicio de sesión construida con Vue.js. Está diseñado como material de apoyo para los alumnos de la materia **Programación Frontend** del ITS.

## Propósito

El objetivo principal es mostrar un ejemplo práctico de cómo integrar diferentes tecnologías del ecosistema de Vue para construir una aplicación web moderna. A lo largo del desarrollo, se irán añadiendo nuevas funcionalidades en distintas ramas para ilustrar un flujo de trabajo incremental.

## Tecnologías Utilizadas

El proyecto está construido sobre las siguientes dependencias principales:

*   **[Vue.js](https://vuejs.org/)**: El framework progresivo para construir interfaces de usuario.
*   **[Vue Router](https://router.vuejs.org/)**: Para la gestión de rutas y navegación en la aplicación.
*   **[Pinia](https://pinia.vuejs.org/)**: Como store para la gestión del estado global.
*   **[Tailwind CSS](https://tailwindcss.com/)**: Para un diseño rápido y utilitario de la interfaz.

## Estructura de Ramas

El desarrollo se organizará en diferentes ramas (`branch`) para aislar la implementación de cada nueva funcionalidad. Esto permitirá revisar el historial de cambios de manera clara y ordenada.

*   **`init`**: Esta es la rama inicial. Contiene la configuración básica del proyecto, pero está funcionalmente vacía.
*   **Otras ramas**: Se crearán nuevas ramas (ej. `feat/login-form`, `feat/user-dashboard`) para añadir características específicas.
*   **`tailwind_css`**: (Rama actual) En esta rama se documenta y aplica la instalación y configuración de Tailwind CSS en el proyecto Vue.

---

## Guía de la Rama `js_vs_ts` 

En esta rama aprenderemos a crear un componente de navegacion e insertarlo en nuestro App.vue, y ademas crearemos diferentes componentes para ver el comportamiento de Typescript (usando ejemplos de js como punto de partida). Ademas usaremos "ref" que es una funcion nativa de vue, y slot que es una caracteristica del uso de el template en vue.

### 1. Creamos el componente de navegacion

Primero, creamos una carpeta en el directorio `src` llamada components.
Dentro creamos el componente sidebar, para ello creamos un archivo llamado Sidebar.vue. Usaremos slots para luego pasar nuestros links de navegacion. Para ello copiamos en el siguiente codigo en el componente:



```html
<script setup lang="ts"></script>

<template>
    <nav class="flex flex-col w-[300px] px-4 py-2 bg-gray-200 rounded min-h-screen">
        <!-- logo -->
        <div class="flex justify-start items-center h-12 mb-2">
            <div class="h-12 w-12">
                <img src="/src/assets/ts-logo-128.png" alt="log ts">
            </div>
            <h2 class="px-4 text-2xl font-extrabold m-0 py-0 text-center">TS vs JS</h2>
        </div>
        <!-- navegacion -->
        <slot name="links"></slot>
    </nav>
</template> 
<!-- no se crea style pues no lo usaremos -->
```

### 2. Insertamos nuestro componente en App.vue 
Para utilizar nuestro componente lo importamos en el script:

```typescript
import Sidebar from './components/Sidebar.vue';
```

y en nuestro template insertamos el componente, en este caso lo envolvemos en un div:

``` html
 <div class="flex w-full h-full flex-row">
    <Sidebar>
      <!-- usamos el slot "links" que creamos -->
      <template #links>
        <RouterLink to="/ejercicio-1" class="text-blue-600">Primer Ejercicio</RouterLink>
        <RouterLink to="/ejercicio-2" class="text-blue-600">Segundo Ejercicio</RouterLink>
      </template>
    </Sidebar>
  </div>
```
La etiqueta RouterLink es un componente especial de Vue Router que reemplaza el uso de etiquetas `<a>` tradicionales.
Su función es crear enlaces internos dentro de la aplicación sin recargar la página, aprovechando la navegación de una SPA (Single Page Application). Con `to` le indicamos la ruta a la que debe dirigir.

### 3. Creamos los componentes para los ejercicios uno y dos:

Para ello creamos dentro de nuestra carpeta `src/components` una nueva carpeta llamada `ejercicios`, a fin de mantener nuestro codigo ordenado. Dentro de ellos creamos los componentes `EjercicioUno.vue` y `EjercicioDos.vue`. Solo insertaremos codigo base de vue (script + template) en ellos, pues los usaremos mas tarde. 

### 4. Configuracion de rutas en `src/router/routes.ts`:

El archivo router.ts es un archivo de Typescript que nos permite gestionar nuestras rutas.
Para poder utilizarlo debemos: 

Importar los componentes a los que queremos rutear:
```typescript
// ... importaciones anteriores
import EjercicioUno from '@/components/ejercicios/EjercicioUno.vue'
import EjercicioDos from '@/components/ejercicios/EjercicioDos.vue'
```
Incluir los registros de rutas dentro de la lista `routes`.

Los registros de rutas se definen dentro de la lista routes. Esta lista está compuesta por objetos del tipo RouteRecordRaw, que describen cómo se comporta cada ruta en la aplicación.

Cada objeto de ruta tiene, entre otras, dos propiedades fundamentales:

path → define la URL que activará la ruta (por ejemplo, /about).

component → indica el componente de Vue que se debe renderizar cuando el usuario o la aplicación navegue a esa URL.

En resumen: cuando un usuario accede a una dirección específica de la aplicación, Vue Router busca el path correspondiente en routes y muestra el component asociado a esa ruta.

```typescript
routes: [
    { path: '/', component: App },
    { path: '/ejercicio-1', component: EjercicioUno },
    { path: '/ejercicio-2', component: EjercicioDos },
  ],
```

### 5. Finalmente usamos el `RouterView` dentro de nuestro App.vue para renderizar nuestros componentes:

`RouterView`, que es un “contenedor dinámico” que le indica a Vue dónde debe renderizarse el componente de la ruta activa.

Ejemplo: si estamos en /ejercicio-1, Vue Router mostrará el componente EjercicioUno.vue justo en el lugar donde colocamos <RouterView />.

```html
  <div class="flex w-full h-full flex-row">
    <!-- barra lateral -->
    <Sidebar>
      <!-- usamos el slot "links" que creamos -->
      <template #links>
        <RouterLink to="/ejercicio-1" class="text-blue-600">Primer Ejercicio</RouterLink>
        <RouterLink to="/ejercicio-2" class="text-blue-600">Segundo Ejercicio</RouterLink>
      </template>
    </Sidebar>

    <!-- Renderizacion del componente -->
    <RouterView />
  </div>
```