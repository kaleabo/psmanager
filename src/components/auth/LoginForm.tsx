'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { LoginSchema } from '@/lib/validation/auth'

export function LoginForm() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(event.currentTarget)
    const data = {
      email: formData.get('email'),
      password: formData.get('password')
    }

    const validation = LoginSchema.safeParse(data)
    if (!validation.success) {
      setError('Invalid input')
      setIsLoading(false)
      return
    }

    const result = await signIn('credentials', {
      ...validation.data,
      redirect: false
    })

    if (result?.error) {
      setError('Invalid credentials')
      setIsLoading(false)
      return
    }

    router.push('/dashboard')
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-100 text-red-600 rounded">{error}</div>
      )}
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
        {isLoading ? 'Loading...' : 'Sign In'}
      </button>
    </form>
  )
} 