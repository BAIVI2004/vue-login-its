<script setup lang="ts">
import { ref } from 'vue';
import type { Credentials } from '@/models/AuthModel';

const credentials = ref<Credentials>({
    username: '',
    password: ''
});

function login() {
    console.log("si todo va bien deberiamos rutear a home")
}

</script>

<template>
    <div>
        <form @submit.prevent="login" class="lg:p-11 p-7 mx-auto">
            <div class="mb-11">
                <h1 class="text-zinc-400 text-center font-manrope text-3xl font-bold leading-10 mb-2">Ingresar
                </h1>
            </div>
            <input v-model="credentials.username" type="text"
                class="w-full h-12 text-zinc-400 placeholder:text-zinc-500 text-lg font-normal leading-7 rounded-md border-zinc-200 border shadow-sm focus:outline-none px-4 mb-6"
                placeholder="Username">
            <input v-model="credentials.password" type="password"
                class="w-full h-12 text-zinc-400 placeholder:text-gray-500 text-lg font-normal leading-7 rounded-md border-zinc-200 border shadow-sm focus:outline-none px-4 mb-1"
                placeholder="Password">
            <a href="javascript:;" class="flex justify-end mb-6">
                <span class="text-emerald-600 text-right text-base font-normal leading-6">Olvidaste la
                    Contraseña?</span>
            </a>
            <button type="submit"
                class="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-md hover:bg-emerald-800 transition-all duration-700 bg-emerald-600 shadow-sm mb-11">Login</button>
            <a href="javascript:;" class="flex justify-center text-zinc-400 text-base font-medium leading-6">
                No tienes una cuenta? <span class="text-emerald-600 font-semibold pl-3"> Registrate</span>
            </a>
        </form>
    </div>
</template>
