'use client'

import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken'

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
    Cookies.set('id', value.user.id.toString())
    Cookies.set('email', value.user.email)
    Cookies.set('phoneNumber', value.user.phoneNumber)
}

export function unsetToken() {
    if(typeof window === 'undefined'){
        return;
    }
    Cookies.remove('jwt')
    Cookies.remove('username')
    Cookies.remove('id')  
    Cookies.remove('email')
    Cookies.remove('phoneNumber')
}

export function getToken() {
    const jwt = Cookies.get('jwt')
    return jwt;
}

export function getUser() {
    const token = Cookies.get('jwt')
    if(token){
        const user = jwt.decode(token, {json: true})
        console.log("user", user);
    }
    
    // return user;
    return {
        username: Cookies.get('username'),
        id: Cookies.get('id'),
        email: Cookies.get('email'),
        phoneNumber: Cookies.get('phoneNumber')
    }
}

