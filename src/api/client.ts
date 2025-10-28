import axios from 'axios'
import { useAuthStore } from '@/stores/authStore'

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3500/v1',
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json'
    }
})

// interceptor de peticion para añadir el token
apiClient.interceptors.request.use((config) => {
    const authStore = useAuthStore()
    const token = authStore.data.session?.jwt

    if (token) {
        // TypeScript es lo suficientemente inteligente para saber que `headers` existe en `config`
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

// interceptor de respuesta / errores centralizado
apiClient.interceptors.response.use(
    (res) => res,
    (err) => {
        // aquí podemos normalizar errores (p.ej. err.response.data.message)
        return Promise.reject(err)
    }
)

export default apiClient