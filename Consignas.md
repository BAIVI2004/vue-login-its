# Consigna: Ejercicio 3 y Refactorización

¡Excelente trabajo hasta ahora! Han visto cómo TypeScript mejora la robustez de nuestro código en comparación con JavaScript, tanto con tipos primitivos como con objetos personalizados a través de interfaces.

El siguiente paso es aplicar lo aprendido y, al mismo tiempo, mejorar la estructura de nuestro proyecto para hacerlo más mantenible y escalable.

Este desafío se divide en dos partes:
1.  Crear un nuevo componente (`EjercicioTres.vue`) completamente en TypeScript.
2.  Refactorizar los tres componentes de ejercicios para eliminar código duplicado utilizando un componente reutilizable y `slots`.

---

### Parte 1: Crear `EjercicioTres.vue` - Gestor de Tareas

El objetivo es crear un pequeño gestor de tareas donde el usuario pueda definir una tarea y ver un resumen de la misma.

**Requisitos:**

1.  **Crear el archivo:** Dentro de `src/components/ejercicios/`, crea un nuevo componente llamado `EjercicioTres.vue`.

2.  **Definir la Interfaz `Tarea`:** En el `<script setup lang="ts">`, define una interfaz `Tarea` que modele una tarea con las siguientes propiedades:
    *   `titulo`: `string`
    *   `descripcion`: `string`
    *   `completada`: `boolean`
    *   `prioridad`: un tipo de unión que solo acepte los valores `'Baja'`, `'Media'` o `'Alta'`.

3.  **Crear el formulario:**
    *   Usa `ref` para crear una variable reactiva que almacene el objeto de la tarea, basado en la interfaz `Tarea`.
    *   En el `<template>`, construye un formulario que permita al usuario ingresar el título, la descripción, el estado (con un checkbox) y la prioridad (puedes usar un `<select>` con las tres opciones).
    *   Añade un botón "Crear Tarea".

4.  **Lógica del componente:**
    *   Al hacer clic en el botón, una función debe generar un resumen en texto de la tarea creada. Por ejemplo: `Tarea: "Aprender Vue" (Prioridad: Alta) - Pendiente.`.
    *   Muestra este resumen o cualquier error de validación (si decides añadir alguna) debajo del formulario.

5.  **Integración:**
    *   Añade la ruta para `/ejercicio-3` en `src/router/routes.ts`, apuntando a tu nuevo componente.
    *   Agrega un `RouterLink` en `App.vue` para que los usuarios puedan navegar a este nuevo ejercicio.

---

### Parte 2: Refactorización con un Componente Reutilizable

Si observas `EjercicioUno.vue`, `EjercicioDos.vue` y tu nuevo `EjercicioTres.vue`, notarás que la estructura general es muy similar: un contenedor principal (la "tarjeta" blanca) que envuelve un título, un formulario y una sección de resultados. Este código repetido es un candidato perfecto para la refactorización.

**Requisitos:**

1.  **Crear el Componente Wrapper:**
    *   Crea un nuevo componente, por ejemplo, `src/components/ejercicios/CardEjercicio.vue`.
    *   Este componente contendrá el layout de la tarjeta que se repite en los tres ejercicios (el `div` con clases `p-6 max-w-sm mx-auto bg-white...`).

2.  **Usar Props y Slots:**
    *   El componente `CardEjercicio.vue` debe aceptar una `prop` llamada `titulo` para mostrar el título de cada ejercicio dinámicamente.
    *   Define al menos dos `slots` con nombre dentro de la tarjeta:
        *   Un slot para el contenido del formulario (ej. `<slot name="formulario"></slot>`).
        *   Un slot para mostrar los resultados y errores (ej. `<slot name="resultado"></slot>`).

3.  **Refactorizar los Componentes de Ejercicio:**
    *   Modifica `EjercicioUno.vue`, `EjercicioDos.vue` y `EjercicioTres.vue`.
    *   Importa y utiliza tu nuevo componente `CardEjercicio.vue`.
    *   Pasa el título correspondiente a través de la `prop`.
    *   Mueve el código del formulario de cada ejercicio dentro del `slot` de formulario (`<template #formulario>...</template>`).
    *   Mueve el código que muestra el resultado/error dentro del `slot` de resultado (`<template #resultado>...</template>`).
    *   Elimina todo el HTML de layout repetido de los componentes de ejercicio, dejándolos mucho más limpios y centrados en su lógica específica.

¡Mucha suerte! Esta práctica te ayudará a escribir un código Vue más limpio, modular y profesional.