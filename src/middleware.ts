import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'

export const middleware = withAuth(
  function middleware(req) {
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
)

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/passwords/:path*',
    '/generator/:path*',
    '/settings/:path*',
    '/overview/:path*'
  ]
} 