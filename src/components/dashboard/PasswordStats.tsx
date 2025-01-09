'use client'

import { usePasswordStore } from '@/store/passwordStore'

export function PasswordStats() {
  const passwords = usePasswordStore(state => state.passwords)

  const stats = {
    total: passwords.length,
    weak: passwords.filter(p => p.password.length < 12).length,
    reused: new Set(passwords.map(p => p.password)).size !== passwords.length
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="p-4 bg-white rounded-lg shadow">
        <dt className="text-sm font-medium text-gray-500">Total Passwords</dt>
        <dd className="mt-1 text-3xl font-semibold text-gray-900">{stats.total}</dd>
      </div>
      
      <div className="p-4 bg-white rounded-lg shadow">
        <dt className="text-sm font-medium text-gray-500">Weak Passwords</dt>
        <dd className="mt-1 text-3xl font-semibold text-red-600">{stats.weak}</dd>
      </div>
      
      <div className="p-4 bg-white rounded-lg shadow">
        <dt className="text-sm font-medium text-gray-500">Reused Passwords</dt>
        <dd className="mt-1 text-3xl font-semibold text-orange-600">
          {stats.reused ? 'Yes' : 'No'}
        </dd>
      </div>
    </div>
  )
} 