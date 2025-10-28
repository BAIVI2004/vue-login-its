export interface NewUserDTO {
    id: string,
    name: string,
    last_name: string,
    email: string,
    tenant_id: string,
    role: string
}


export interface ExistingUserDTO {
    id: string,
    name: string,
    last_name: string,
    email: string,
    tenant_id: string,
    role: string
}


export interface SessionDTO {
    access_token: string,
}

export interface CreateUserRequest {
    name: string,
    last_name: string,
    email: string,
    password: string,
    tenant_id: string,
    role: string
}

export interface LoginUserRequest {
    email: string,
    password: string,
    tenant_id: string
}



