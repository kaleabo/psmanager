import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth/auth.config'
import { PasswordList } from '@/components/passwords/PasswordList'

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
  }

  return (
    <main className="container mx-auto p-4">
      <div className="flex flex-col gap-6">
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Password Vault</h1>
          <div className="flex gap-2">
            <button className="btn-primary">Add Password</button>
            <button className="btn-secondary">Generate Password</button>
          </div>
        </header>
        
        <PasswordList />
      </div>
    </main>
  )
}
