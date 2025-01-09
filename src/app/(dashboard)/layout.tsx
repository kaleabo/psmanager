import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth/auth.config'
import { DashboardNav } from '@/components/dashboard/DashboardNav'
import { UserNav } from '@/components/dashboard/UserNav'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Password Manager</h1>
          <UserNav user={session.user} />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex gap-8">
        <aside className="w-64">
          <DashboardNav />
        </aside>
        
        <main className="flex-1">
          <div className="bg-white rounded-lg shadow p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
} 