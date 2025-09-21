<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
</script>

<template>
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

</template>

<style scoped></style>
