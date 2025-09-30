<script setup lang="ts">
import type { IconBadgeHouse } from '@/models/HogwartsHouses';
import CardHouse from './houses/CardHouse.vue';

const props = defineProps<{
    houses: IconBadgeHouse[]
}>();

const emit = defineEmits(['update:house']);

function assignHouse() {
    // Generamos un índice aleatorio entre 0 y el número de casas - 1
    const randomIndex = Math.floor(Math.random() * props.houses.length);
    // Emitimos un evento al padre con el índice de la casa a actualizar
    emit('update:house', randomIndex);
}


</script>

<template>
    <div class="h-full w-[90vw] bg-zinc-300 flex flex-col justify-center items-center">
        <div class="flex-col flex justify-center items-center">
            <!-- nombre del alumno -->
            <h1 class="almendra-regular text-2xl text-zinc-950 h-20 text-center items-center flex justify-center">Nombre
                del
                alumno</h1>
            <!-- boton -->
            <div class="w-full flex flex-col justify-center items-center">
                <button @click="assignHouse"
                    class="rounded-sm bg-zinc-800 text-white text-xl almendra-regular p-4 cursor-pointer transition-transform duration-150 ease-in-out active:scale-95">Seleccion
                    de
                    casa</button>
            </div>
        </div>
        <!-- contenedor de cards -->
        <div class="flex flex-row justify-center items-center w-full">
            <div v-for="(house, index) in props.houses" :key="index">
                <CardHouse :house-name="house.houseName" :counter="house.counter" :icon="house.icon" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.almendra-regular {
    font-family: "Almendra", serif;
    font-weight: 400;
    font-style: normal;
}
</style>