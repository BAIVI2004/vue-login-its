<script setup lang="ts">
import { ref } from 'vue';
import type { IconBadgeHouse } from '@/models/HogwartsHouses';
import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';

// El estado ahora vive en el componente padre (App.vue)
const houses = ref<IconBadgeHouse[]>([
  { icon: "https://img.icons8.com/color/48/hogwarts-legacy-gryffindor.png", counter: 0, houseName: "Gryffindor" },
  { icon: "https://img.icons8.com/color/48/hogwarts-legacy-slytherin.png", counter: 0, houseName: "Slytherin" },
  { icon: "https://img.icons8.com/color/48/hogwarts-legacy-ravenclaw.png", counter: 0, houseName: "Ravenclaw" },
  { icon: "https://img.icons8.com/color/48/hogwarts-legacy-hufflepuff.png", counter: 0, houseName: "Hufflepuff" },
]);

// Esta función maneja el evento emitido por el componente Home
function handleHouseUpdate(houseIndex: number) {
  if (houses.value[houseIndex]) {
    houses.value[houseIndex].counter++;
  }
}
</script>

<template>
  <main class="w-screen h-screen flex flex-col">
    <!-- Pasamos el estado 'houses' como prop a Navbar -->
    <Navbar :houses="houses" />
    <div class="w-full h-full flex justify-center items-center">
      <!-- Pasamos el estado 'houses' a Home y escuchamos el evento 'update:house' -->
      <Home :houses="houses" @update:house="handleHouseUpdate" />
    </div>
  </main>
</template>
<style scoped></style>