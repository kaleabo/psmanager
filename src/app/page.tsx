import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import HomePage from './(marketing)/page'
import { authOptions } from '@/lib/auth/auth.config'

export default async function RootPage() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/dashboard/overview')
  }

  return <HomePage />
}
