'use client'

import { useState } from 'react'
import { usePasswordStore } from '@/store/passwordStore'

export function PasswordList() {
  const [searchQuery, setSearchQuery] = useState('')
  const passwords = usePasswordStore(state => state.passwords)
  const searchPasswords = usePasswordStore(state => state.searchPasswords)

  const filteredPasswords = searchQuery ? searchPasswords(searchQuery) : passwords

  return (
    <div className="space-y-4">
      <input
        type="search"
        placeholder="Search passwords..."
        className="w-full p-2 border rounded"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredPasswords.map((password) => (
          <div key={password.id} className="p-4 border rounded shadow">
            <h3 className="font-bold">{password.title}</h3>
            <p className="text-sm text-gray-600">{password.username}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 