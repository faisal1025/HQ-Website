'use client'

import Cookies from 'js-cookie'
// import Router from 'next/router';

export type loginResponse = {
    jwt: string,
    user: {
        username: string,
        email: string,
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

    console.log("value: ", value);
    
    // if(Cookies.get('username')){
    //     Router.reload()
    // }
}

export function unsetToken() {
    if(typeof window === 'undefined'){
        return;
    }
    Cookies.remove('jwt')
    Cookies.remove('username')
    Cookies.remove('id')  

    // Router.reload() 
}

export function getToken() {
    const jwt = Cookies.get('jwt')
    return jwt;
}

export function getUser() {
    return {
        username: Cookies.get('username'),
        id: Cookies.get('id')
    }
}

