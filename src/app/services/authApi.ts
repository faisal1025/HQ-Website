import { baseUrl } from "./cityApi"

type registerModal = {
    username: string,
    email: string,
    password: string,
    confirm_password: string
}

type loginModal = {
    identifier : string,
    password: string
}

export async function registerUser(value : registerModal) {
    const response = await fetch(`${baseUrl}/auth/local/register`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
    })

    const register = await response.json();
    return register
}

export async function loginUser(value: loginModal) {
    const response = await fetch(`${baseUrl}/auth/local`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
    })
    const login = await response.json();
    
    return login
}