import { PasswordStats } from '@/components/dashboard/PasswordStats'
import { RecentPasswords } from '@/components/dashboard/RecentPasswords'
import { SecurityScore } from '@/components/dashboard/SecurityScore'

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PasswordStats />
        <SecurityScore />
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Recent Passwords</h3>
        <RecentPasswords />
      </div>
    </div>
  )
} 