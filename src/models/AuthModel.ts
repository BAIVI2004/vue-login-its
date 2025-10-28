export interface Credentials {
    username: string,
    password: string,
    tenant_id: string,
}

export interface NewUser {
    id?: string,
    name: string,
    lastName: string,
    password?: string,
    email: string,
    tenantId: string
}

export interface Session {
    isLoggedIn: boolean,
    name: string | null,
    lastName: string | null,
    jwt: string | null,
    jwtExpire: Date | null
}

export interface AuthState {
    loading: boolean,
    data: Session,
    error: string | null,
}