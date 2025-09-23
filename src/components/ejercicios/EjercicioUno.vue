<!-- ## Javascript ## -->
<!-- <script setup>
import { ref, watch } from 'vue';

// Variables reactivas
// el metodo de vue ref nos ayuda a crear variables reactivas
const radio = ref(0);
const circunferencia = ref(null);
const error = ref(null);

/**
 * Calcula la circunferencia de un círculo.
 *
 * @param r El radio del círculo.
 * @returns La circunferencia del círculo.
 */

function calcularCircunferencia(r) {
    // validaciones:
    // radio no puede ser nulo
    // radio no puede ser negativo
    // radio no puede ser un string

    if (r === null || r === undefined || isNaN(r) || r < 0) {
        return null;
    }
    return 2 * Math.PI * r;
}

// el metodo watch nos ayuda a identificar cambios en las variables reactivas

watch(radio, (nuevoRadio) => {
    if (nuevoRadio < 0) {
        error.value = "Error: El radio no puede ser un número negativo.";
        circunferencia.value = null;
    } else {
        error.value = null;
        circunferencia.value = calcularCircunferencia(Number(nuevoRadio)).toFixed(2);
    }
}, { immediate: true });

</script> -->

<!-- ## Typescript ## -->
<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Ref } from 'vue'

// Variables reactivas
// el metodo de vue ref nos ayuda a crear variables reactivas
// pero en este caso debemos importar el tipo Ref de vue y definir nuestras variables con tipado estricto
const radio: Ref<number> = ref(0);
const circunferencia: Ref<number | null> = ref(null);
const error: Ref<string | null> = ref(null);

/**
 * Calcula la circunferencia de un círculo.
 *
 * @param r El radio del círculo.
 * @returns La circunferencia del círculo.
 */

// La funcion ya me indica que le tengo que pasar un numero y que me va a devolver un numero
function calcularCircunferencia(r: number): number {
    // TypeScript se encarga de validar el tipo 'number' en la compilación,
    // pero es buena práctica verificar si el valor es negativo.
    if (r < 0) {
        throw new Error("El radio no puede ser un número negativo.");
    }
    const circunferencia: number = 2 * Math.PI * r;
    return circunferencia;
}

// Watcher para reaccionar a los cambios en 'radio'
watch(radio, (nuevoRadio: number) => {
    if (nuevoRadio < 0) {
        error.value = "Error: El radio no puede ser un número negativo.";
        circunferencia.value = null;
    } else {
        error.value = null;
        try {
            const resultado: number = calcularCircunferencia(nuevoRadio);
            circunferencia.value = parseFloat(resultado.toFixed(2));
        } catch (e: any) {
            error.value = e.message;
            circunferencia.value = null;
        }
    }
}, { immediate: true });


</script>

<template>
    <div class="flex justify-start p-4 bg-zinc-400 w-full">
        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
            <div class="flex items-center space-x-4">
                <div class="shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-500" viewBox="0 0 24 24"
                        fill="currentColor">
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM15 12c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" />
                    </svg>
                </div>
                <div>
                    <h2 class="text-xl font-medium text-black">Calculadora de Circunferencia</h2>
                </div>
            </div>

            <div class="space-y-2">
                <label for="radio-input" class="block text-sm font-medium text-gray-700">Ingresa el radio en
                    centimetros:</label>
                <input id="radio-input" type="number" v-model="radio" placeholder="Ej: 5cm"
                    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>

            <div v-if="circunferencia" class="p-4 bg-green-100 rounded-md text-green-700">
                <p>La circunferencia es: <strong class="font-semibold">{{ circunferencia }}</strong> centimetros</p>
            </div>

            <div v-if="error" class="p-4 bg-red-100 rounded-md text-red-700">
                <p>{{ error }}</p>
            </div>
        </div>
    </div>
</template>


<style scoped></style>