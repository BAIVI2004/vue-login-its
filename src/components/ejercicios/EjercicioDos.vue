<!-- ## Javascript ## -->
<!-- <script setup>
import { ref } from 'vue';

const libro = ref({
    titulo: '',
    autor: '',
    paginas: 0,
    esFiccion: false,
});
const resumen = ref('');
const error = ref('');

/**
 * @param {object} libro El objeto que contiene los datos del libro.
 * @param {string} libro.titulo El título del libro.
 * @param {string} libro.autor El nombre del autor.
 * @param {number} libro.paginas El número de páginas del libro.
 * @param {boolean} libro.esFiccion Indica si el libro es de ficción.
 * @returns {string} Una cadena de texto con el resumen del libro.
 */
function resumirLibro(libro) {
    if (!libro || typeof libro.titulo !== 'string' || typeof libro.autor !== 'string' || typeof libro.paginas !== 'number' || typeof libro.esFiccion !== 'boolean') {
        throw new Error("Objeto de libro inválido.");
    }

    const tipo = libro.esFiccion ? "ficción" : "no ficción";
    return `"${libro.titulo}" de ${libro.autor} tiene ${libro.paginas} páginas. Es un libro de ${tipo}.`;
}

function resumir() {
    try {
        resumen.value = resumirLibro(libro.value);
        error.value = '';
    } catch (e) {
        error.value = e.message;
        resumen.value = '';
    }
}
</script> -->

<!-- ## Typescript ## -->
<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

// creamos un "molde" para el objeto libro
interface Libro {
    titulo: string;
    autor: string;
    paginas: number;
    esFiccion: boolean;
}

const libro: Ref<Libro> = ref({
    titulo: '',
    autor: '',
    paginas: 0,
    esFiccion: false,
});
const resumen: Ref<string> = ref('');
const error: Ref<string> = ref('');

/**
 * Crea un resumen de los detalles de un libro.
 * @param libro El objeto de tipo Libro que contiene los datos.
 * @returns Una cadena de texto con el resumen del libro.
 */
function resumirLibro(libro: Libro): string {
    const tipo = libro.esFiccion ? "ficción" : "no ficción";
    return `"${libro.titulo}" de ${libro.autor} tiene ${libro.paginas} páginas. Es un libro de ${tipo}.`;
}

function resumir() {
    try {
        // La validación de tipos la maneja TypeScript
        resumen.value = resumirLibro(libro.value);
        error.value = '';
    } catch (e: any) {
        error.value = e.message;
        resumen.value = '';
    }
}
</script>

<template>
    <div class="flex justify-start p-4 bg-zinc-400 w-full">
        <div class="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h2 class="text-xl font-medium text-black">Resumir Libro</h2>
            <form @submit.prevent="resumir">
                <div class="space-y-2">
                    <label for="titulo" class="block text-sm font-medium text-gray-700">Título:</label>
                    <input type="text" id="titulo" v-model="libro.titulo"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" required>
                </div>
                <div class="space-y-2 mt-4">
                    <label for="autor" class="block text-sm font-medium text-gray-700">Autor:</label>
                    <input type="text" id="autor" v-model="libro.autor"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" required>
                </div>
                <div class="space-y-2 mt-4">
                    <label for="paginas" class="block text-sm font-medium text-gray-700">Páginas:</label>
                    <input type="number" id="paginas" v-model.number="libro.paginas"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" required>
                </div>
                <div class="flex items-center space-x-2 mt-4">
                    <input type="checkbox" id="ficcion" v-model="libro.esFiccion"
                        class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                    <label for="ficcion" class="text-sm font-medium text-gray-700">Es de ficción</label>
                </div>
                <button type="submit"
                    class="mt-6 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Resumir
                </button>
            </form>

            <div v-if="resumen" class="mt-6 p-4 bg-gray-100 rounded-md">
                <h3 class="text-lg font-medium text-gray-900">Resumen del libro:</h3>
                <p class="mt-2 text-gray-600">{{ resumen }}</p>
            </div>
            <div v-if="error" class="mt-6 p-4 bg-red-100 rounded-md text-red-700">
                <p>{{ error }}</p>
            </div>
        </div>
    </div>
</template>




<style scoped></style>