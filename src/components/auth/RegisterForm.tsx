'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { RegisterSchema } from '@/lib/validation/auth'

export function RegisterForm() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(event.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }

    const validation = RegisterSchema.safeParse(data)
    if (!validation.success) {
      setError('Invalid input')
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validation.data)
      })

      if (!response.ok) throw new Error('Registration failed')

      router.push('/login?registered=true')
    } catch (error) {
      setError('Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-100 text-red-600 rounded">{error}</div>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? 'Loading...' : 'Create Account'}
      </button>
    </form>
  )
} 