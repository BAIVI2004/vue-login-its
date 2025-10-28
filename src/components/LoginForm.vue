<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Credentials } from '@/models/AuthModel';
import { useAuthService } from '@/services/useAuthService';
import type { LoginUserRequest } from '@/api/auth/types';
import { useAuthStore } from '@/stores/authStore';

const credentials = ref<Credentials>({
    username: '',
    password: '',
    tenant_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'
});

const authStore = useAuthStore()

const { loginUser } = useAuthService()

function login() {
    loginUser({
        email: credentials.value.username,
        password: credentials.value.password,
        tenant_id: credentials.value.tenant_id
    })
}

const loading = computed(() => authStore.isLoading)

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
                class="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-md hover:bg-emerald-800 transition-all duration-700 bg-emerald-600 shadow-sm mb-11 flex flex-row justify-center">
                <div v-if="loading" class="flex flex-col justify-center items-center">
                    <svg class="size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                </div>
                <div v-if="!loading" class="flex flex-col justify-center items-center">
                    <p>Login</p>
                </div>
            </button>
            <RouterLink to="/auth/register" class="flex justify-center text-zinc-400 text-base font-medium leading-6">
                No tienes una cuenta? <span class="text-emerald-600 font-semibold pl-3"> Registrate</span>
            </RouterLink>
        </form>
    </div>
</template>
