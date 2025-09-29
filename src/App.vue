<script setup lang="ts">
import Navbar from './components/Navbar.vue';

</script>

<template>
  <div class="flex flex-col justify-start items-center min-w-screen h-screen bg-zinc-200">
    <Navbar />
    <div>
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
