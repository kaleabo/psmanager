'use client'

import { usePasswordStore } from '@/store/passwordStore'
import { PasswordCard } from '@/components/passwords/PasswordCard'

export function RecentPasswords() {
  const passwords = usePasswordStore(state => state.passwords)
  
  const recentPasswords = [...passwords]
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
    .slice(0, 5)

  if (recentPasswords.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No passwords added yet
      </div>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {recentPasswords.map((password) => (
        <PasswordCard
          key={password.id}
          {...password}
        />
      ))}
    </div>
  )
} 