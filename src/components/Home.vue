<script setup lang="ts">
import type { IconBadgeHouse } from '@/models/HogwartsHouses';
import CardHouse from './houses/CardHouse.vue';


const houses: IconBadgeHouse[] = [
    { icon: "https://img.icons8.com/color/48/hogwarts-legacy-gryffindor.png", counter: 0, houseName: "Gryffindor" },
    { icon: "https://img.icons8.com/color/48/hogwarts-legacy-slytherin.png", counter: 0, houseName: "Slytherin" },
    { icon: "https://img.icons8.com/color/48/hogwarts-legacy-ravenclaw.png", counter: 0, houseName: "Ravenclaw" },
    { icon: "https://img.icons8.com/color/48/hogwarts-legacy-hufflepuff.png", counter: 100, houseName: "Hufflepuff" }
]

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
                <button class="rounded-sm bg-zinc-800 text-white text-xl almendra-regular p-4 cursor-pointer">Seleccion
                    de
                    casa</button>
            </div>
        </div>
        <!-- contenedor de cards -->
        <div class="flex flex-row justify-center items-center w-full">
            <div v-for="(house, index) in houses" :key="index">
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