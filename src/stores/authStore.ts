import type { NewUser, Session } from "@/models/AuthModel";
import { defineStore } from "pinia";

interface AuthState {
    isLoading: boolean,
    data: {
        session: Session | null,
        user: NewUser | null

    },
    error: string | null,
}

export const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
        isLoading: false,
        data: { session: null, user: null },
        error: null
    }),
    actions: {
        setLoading(value: boolean) { this.isLoading = value },
        setError(value: string | null) { this.error = value },
        setData(value: { session: Session | null, user: NewUser | null }) { this.data = value },
    }
})