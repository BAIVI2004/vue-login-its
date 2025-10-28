<script setup lang="ts">
import { ref } from 'vue';
import type { NewUser } from '@/models/AuthModel';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore()

const newUser = ref<NewUser>({
    email: '',
    password: '',
    name: '',
    lastName: '',
    tenantId: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'
});

function register() {
    console.log("Registrando nuevo usuario:", newUser.value);
    // Aquí iría la lógica para enviar los datos a la API
}

</script>

<template>
    <div>
        <form @submit.prevent="register" class="lg:p-11 p-7 mx-auto">
            <div class="mb-11">
                <h1 class="text-zinc-400 text-center font-manrope text-3xl font-bold leading-10 mb-2">Crear Cuenta
                </h1>
            </div>
            <input v-model="newUser.name" type="text"
                class="w-full h-12 text-zinc-400 placeholder:text-zinc-500 text-lg font-normal leading-7 rounded-md border-zinc-200 border shadow-sm focus:outline-none px-4 mb-6"
                placeholder="Nombre" required>
            <input v-model="newUser.lastName" type="text"
                class="w-full h-12 text-zinc-400 placeholder:text-zinc-500 text-lg font-normal leading-7 rounded-md border-zinc-200 border shadow-sm focus:outline-none px-4 mb-6"
                placeholder="Apellido" required>
            <input v-model="newUser.email" type="email"
                class="w-full h-12 text-zinc-400 placeholder:text-zinc-500 text-lg font-normal leading-7 rounded-md border-zinc-200 border shadow-sm focus:outline-none px-4 mb-6"
                placeholder="Email" required>
            <input v-model="newUser.password" type="password"
                class="w-full h-12 text-zinc-400 placeholder:text-gray-500 text-lg font-normal leading-7 rounded-md border-zinc-200 border shadow-sm focus:outline-none px-4 mb-1"
                placeholder="Contraseña" required>

            <button type="submit"
                class="w-full h-12 mt-6 text-white text-center text-base font-semibold leading-6 rounded-md hover:bg-emerald-800 transition-all duration-700 bg-emerald-600 shadow-sm mb-11">
                Crear Cuenta
            </button>
            <RouterLink to="/auth/login" class="flex justify-center text-zinc-400 text-base font-medium leading-6">
                ¿Ya tienes una cuenta? <span class="text-emerald-600 font-semibold pl-3">
                    Inicia Sesión
                </span>
            </RouterLink>
        </form>
    </div>
</template>