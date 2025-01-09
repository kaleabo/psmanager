import { Suspense } from 'react'
import { PasswordList } from '@/components/passwords/PasswordList'
import { AddPasswordButton } from '@/components/passwords/AddPasswordButton'
import { PasswordsSearch } from '@/components/passwords/PasswordsSearch'

export default function PasswordsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Passwords</h2>
        <AddPasswordButton />
      </div>

      <PasswordsSearch />

      <Suspense fallback={<div>Loading passwords...</div>}>
        <PasswordList />
      </Suspense>
    </div>
  )
} 