import { useAuthStore } from '@/stores/authStore'
import * as AuthApi from '@/api/auth/controller'
import type { LoginUserRequest, CreateUserRequest, SessionDTO } from '@/api'
import type { Session, NewUser } from '@/models/AuthModel'

export function useAuthService() {
    const store = useAuthStore()
    const createUser = async (payload: CreateUserRequest) => {
        store.setError(null)
        store.setLoading(true)
        try {
            const created = await AuthApi.registerUser(payload)
            const newUser: NewUser = {
                id: created.id,
                name: created.name,
                lastName: created.last_name,
                email: created.email,
                tenantId: created.tenant_id,
            }
            store.setData({ session: null, user: newUser });
            store.setLoading(false);
            await loginUser({ email: payload.email, password: payload.password, tenant_id: payload.tenant_id })

        } catch (err: any) {
            store.setError(err?.message || 'Error al registrar al usuario')
            throw err
        }
    }

    const loginUser = async (payload: LoginUserRequest) => {
        store.setError(null)
        store.setLoading(true)
        try {
            const logged = await AuthApi.loginUser(payload)
            const jwtPayload = parseJwt(logged.access_token)
            const sessionData: Session = {
                name: null,
                lastName: null,
                isLoggedIn: false,
                jwt: null,
                jwtExpire: null
            }
            if (jwtPayload) {
                sessionData.jwt = logged.access_token;
                sessionData.jwtExpire = new Date(jwtPayload.exp * 1000);
                sessionData.isLoggedIn = true
            }
            store.setData({ session: sessionData, user: store.data.user })
            const user = await AuthApi.getUser(jwtPayload.user_id)
            store.setData({
                session: sessionData, user: {
                    id: user.id,
                    name: user.name,
                    lastName: user.last_name,
                    email: user.email,
                    tenantId: user.tenant_id
                }
            })

            store.setLoading(false);

        } catch (err: any) {
            store.setError(err?.message || 'Error ingresar')
            store.setLoading(false)
            throw err
        }
    }

    return { loginUser, createUser }

}

function parseJwt(token: string): any | null {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );
        return JSON.parse(jsonPayload);
    } catch (error) {
        console.error('Token inválido o corrupto:', error);
        return null;
    }
}