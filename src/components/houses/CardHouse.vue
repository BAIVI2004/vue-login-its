<script setup lang="ts">


const props = defineProps({
    houseName: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    counter: {
        type: Number,
        required: true,
    }


})

const houseBadges: string[] = [
    "inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400 inset-ring inset-ring-red-400/20",
    "inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 inset-ring inset-ring-green-500/20",
    "inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 inset-ring inset-ring-blue-400/30",
    "inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-500 inset-ring inset-ring-yellow-400/20"
]

function detectHouse(houseName: string): number {
    switch (houseName) {
        case "Gryffindor":
            return 0
        case "Slytherin":
            return 1
        case "Ravenclaw":
            return 2
        case "Hufflepuff":
            return 3
        default:
            return 0;
    }
}
</script>

<template>
    <div class="h-32 w-64 py-2 px-4 flex flex-row justify-center items-center">
        <!-- card -->
        <div class="h-16 w-full rounded-sm p-2 flex flex-row justify-around items-center bg-white">
            <!-- icono -->
            <div class="w-10 h-10 p-1 my-auto">
                <img :src="props.icon" width="48" height="48" alt="hogwarts-house">
            </div>
            <!-- casa -->
            <h2>{{ props.houseName }}</h2>
            <!-- contador -->
            <span :class="houseBadges[detectHouse(props.houseName)]">{{
                props.counter }}</span>
        </div>
    </div>
</template>


<style scoped></style>