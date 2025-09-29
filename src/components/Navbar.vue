<script setup lang="ts">
import type { IconBadge } from '@/models/HogwartsHouses';

const iconsWithBadges: IconBadge[] = [
    { icon: "https://img.icons8.com/color/48/hogwarts-legacy-gryffindor.png", counter: 0 },
    { icon: "https://img.icons8.com/color/48/hogwarts-legacy-slytherin.png", counter: 0 },
    { icon: "https://img.icons8.com/color/48/hogwarts-legacy-ravenclaw.png", counter: 0 },
    { icon: "https://img.icons8.com/color/48/hogwarts-legacy-hufflepuff.png", counter: 100 }
]

</script>


<template>
    <div class="w-full h-16 bg-zinc-100 border-b border-zinc-200 flex flex-row-reverse">
        <!-- crear un titulo para mi pagina home -->

        <!-- switch para cambiar de modo claro a oscuro -->
        <div class="flex flex-col justify-center items-center border-l border-zinc-200  w-20 h-full">
            switch
        </div>

        <!-- crear iconos con badge -->
        <div v-for="(icon, index) in iconsWithBadges" :key="index"
            class="flex flex-col justify-center items-center border-l border-zinc-200  w-40 h-full">
            <span
                class="absolute inline-flex -translate-y-4 translate-x-4 items-center rounded-md bg-red-500 py-0 px-1 text-xs font-small text-white inset-ring inset-ring-red-400/20">{{
                    icon.counter }}
            </span>
            <div class="w-10 h-10 p-1 my-auto">
                <img :src="icon.icon" width="48" height="48" alt="hogwarts-house">
            </div>


        </div>

        <!-- crear un titulo para mi pagina home -->
        <div class="flex w-full h-full flex-row justify-start px-8 bg-zinc-100">
            <!-- icono -->
            <div class="flex flex-col justify-center items-center">
                <img width="42" height="42" src="https://img.icons8.com/color/96/wizard.png" alt="wizard" />
            </div>
            <!-- titulo -->
            <div class="flex flex-col justify-center items-center">
                <h1
                    class="medievalsharp-regular text-4xl font-extrabold text-zinc-950 text-center items-center justify-center">
                    Sorting Hat
                </h1>
            </div>
        </div>
    </div>
</template>


<style scoped>
.medievalsharp-regular {
    font-family: "MedievalSharp", cursive;
    font-weight: 400;
    font-style: normal;
}
</style>