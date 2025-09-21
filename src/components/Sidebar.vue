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