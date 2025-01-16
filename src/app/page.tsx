import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth/auth.config'
import HomePage from './home'

export default async function RootPage() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/dashboard/overview')
  }

  return <HomePage />
}
