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


## Cambios realizados en la rama `login_page`

En esta rama, además de integrar Tailwind CSS, se realizaron los siguientes cambios para implementar la funcionalidad de autenticación en la aplicación:

### 1. Creación del archivo `.env`
Se creó un archivo `.env` en la raíz de la aplicación para almacenar variables de entorno. En este archivo, se definió la variable `VITE_API_URL`, que contiene la URL base de la API utilizada por la aplicación.

### 2. Configuración de la carpeta `api`
Se creó una estructura dentro de la carpeta `api` para manejar las solicitudes a la API:
- **`client.ts`**: Archivo que configura un cliente HTTP utilizando Axios. Se añadieron interceptores para incluir el token JWT en las solicitudes y manejar errores de manera centralizada.
- **`index.ts`**: Archivo que exporta los controladores y tipos relacionados con la API.
- **Carpeta `auth`**: Contiene los archivos relacionados con la funcionalidad de autenticación:
  - **`controller.ts`**: Define las funciones para interactuar con los endpoints de autenticación, como registro, inicio de sesión y obtención de datos del usuario.
  - **`types.ts`**: Define los tipos de datos utilizados en las solicitudes y respuestas de la API de autenticación.

### 3. Creación de la carpeta `services`
Se creó la carpeta `services` dentro de `src` para manejar la lógica de negocio de la aplicación. En particular, se creó el archivo `useAuthService.ts`, que orquesta las solicitudes relacionadas con la autenticación y actualiza el estado global utilizando Pinia.

### 4. Integración de Axios
Se instaló la dependencia `axios` para realizar solicitudes HTTP. El cliente configurado en `client.ts` se utiliza en los controladores para interactuar con la API.

### 5. Uso del servicio de autenticación en los componentes
Se integró el servicio de autenticación en los componentes `LoginForm.vue` y `RegisterForm.vue` para manejar el inicio de sesión y el registro de usuarios. Estos componentes utilizan el servicio para enviar datos a la API y actualizar el estado global de la aplicación.

### Propósito de los cambios
Estos cambios permiten implementar una funcionalidad básica de autenticación en la aplicación, incluyendo:
- Registro de nuevos usuarios.
- Inicio de sesión de usuarios existentes.
- Gestión del estado de autenticación (usuario actual, sesión activa, errores, etc.) utilizando Pinia.
- Comunicación con una API externa para manejar la lógica de autenticación.

Con esta implementación, la aplicación puede autenticar usuarios y proteger recursos mediante el uso de tokens JWT.
