import apiClient from "../client";
import type { NewUserDTO, LoginUserRequest, CreateUserRequest, SessionDTO, ExistingUserDTO } from "./types";

const baseRegister = '/auth/register';
const baseLogin = '/auth/login';
const baseUser = '/users'

export async function registerUser(payload: CreateUserRequest): Promise<NewUserDTO> {
    const res = await apiClient.post<NewUserDTO>(baseRegister, payload)
    return res.data
}

export async function loginUser(payload: LoginUserRequest): Promise<SessionDTO> {
    const res = await apiClient.post<SessionDTO>(baseLogin, payload)
    return res.data
}

export async function getUser(payload: string): Promise<ExistingUserDTO> {
    const res = await apiClient.get<ExistingUserDTO>(baseUser + '/' + payload)
    console.log(res.data)
    return res.data
}