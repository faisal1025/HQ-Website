import type { NextRequest } from 'next/server'

const RestrictForUnAuthenticated = ['/dashboard', '/payment-success', '/payment-faliure']
const RestrictForAuthenticated = ['/login']

export function middleware(request: NextRequest) {
  const token = request.cookies.get('jwt')?.value
  const username = request.cookies.get('username')?.value
 
  if (!token && (request.nextUrl.pathname.startsWith('/dashboard') || RestrictForUnAuthenticated.includes(request.url))) {
    return Response.redirect(new URL('/login', request.url))
  }
 
  if (token && RestrictForAuthenticated.includes(request.nextUrl.pathname)) {
    return Response.redirect(new URL(`/dashboard/${username}/my-booking`, request.url))
  }
}