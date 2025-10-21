<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue';


</script>

<template>
    <section class="flex justify-center relative">
        <div class="gradient-bg w-screen h-screen"></div>
        <div class="mx-auto max-w-lg px-6 lg:px-8 absolute p-20">
            <div class="rounded-md bg-zinc-900 shadow-xl">
                <LoginForm />
            </div>
        </div>


    </section>
</template>

<style scoped>
.gradient-bg {
    background: linear-gradient(to top, #000000, #50C878);
}
</style>