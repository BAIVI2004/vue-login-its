import type { Racer } from '@/models/racer'
import { defineStore } from 'pinia'


interface RacersState {
    isLoading: boolean,
    data: Racer[],
    error: string | null,
}

export const useRacersStore = defineStore('racers', {
    state: (): RacersState => ({
        isLoading: true,
        data: [],
        error: null
    }),

    actions: {
        async fetchInitialData() {
            this.isLoading = true
            try {
                // Simulación de carga
                await new Promise((r) => setTimeout(r, 300))
                this.data = []
                this.error = null
            } catch (err) {
                this.error = 'Error al cargar los datos iniciales'
            } finally {
                this.isLoading = false
            }
        },

        // 🏁 Agregar un nuevo piloto
        addRacer(racer: Racer) {
            const exists = this.data.some((r) => r.numero === racer.numero)
            if (exists) {
                this.error = `El piloto con número ${racer.numero} ya existe`
                return
            }

            // Inicializamos record de vuelta en "0" si no viene definido
            if (!racer.recordVuelta) racer.recordVuelta = "0"

            this.data.push(racer)
            this.error = null
            console.log(`✅ Piloto agregado: ${racer.nombre} ${racer.apellido}`)
        },

        // 🔧 Modificar el récord de vuelta
        updateRecord(numero: number, nuevoRecord: string) {
            const piloto = this.data.find((r) => r.numero === numero)
            if (!piloto) {
                this.error = `No se encontró el piloto con número ${numero}`
                return
            }

            piloto.recordVuelta = nuevoRecord
            this.error = null
            console.log(`🕒 Nuevo récord para ${piloto.nombre}: ${nuevoRecord}`)
        }
    },

    getters: {
        // 🔹 Ordenar por número de piloto (ascendente)
        sortedByNumber: (state): Racer[] => {
            return [...state.data].sort((a, b) => a.numero - b.numero)
        },

        // 🔹 Total de pilotos registrados
        totalRacers: (state): number => state.data.length
    },
})