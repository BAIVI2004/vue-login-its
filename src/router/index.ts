import { createRouter, createWebHistory } from 'vue-router'
import EjercicioUno from '@/components/ejercicios/EjercicioUno.vue'
import EjercicioDos from '@/components/ejercicios/EjercicioDos.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // { path: '/', component: App },
    { path: '/ejercicio-1', component: EjercicioUno },
    { path: '/ejercicio-2', component: EjercicioDos },
  ],
})

export default router
