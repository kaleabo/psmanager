import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { AuthOptions } from 'next-auth'
// Import your providers and other dependencies here

export async function getAuthSession() {
  const session = await getServerSession(authOptions)
  return session
}

export async function requireAuth() {
  const session = await getAuthSession()
  
  if (!session) {
    redirect('/login')
  }
  
  return session
}

export const authOptions: AuthOptions = {
  // Your existing auth configuration...
  providers: [
    // Your providers...
  ],
  // Other options...
} 