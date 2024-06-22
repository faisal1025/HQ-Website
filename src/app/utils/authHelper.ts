'use client'

import Cookies from 'js-cookie';

export type loginResponse = {
    jwt: string,
    user: {
        username: string,
        email: string,
        phoneNumber: string,
        id: number
    }
}

export type errorResponse = {
    name: string,
    message: string,
    status: number,
    details: {}
}

export function setToken(value : loginResponse) {
    if(typeof window === 'undefined'){
        return;
    }
    Cookies.set('jwt', value.jwt)
    Cookies.set('username', value.user.username)
}

export function unsetToken() {
    if(typeof window === 'undefined'){
        return;
    }
    Cookies.remove('jwt')
    Cookies.remove('username')
}

export function getToken() {
    const jwt = Cookies.get('jwt')
    return jwt;
}

