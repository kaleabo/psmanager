'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { RegisterSchema } from '@/lib/validation/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { motion } from 'framer-motion'

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={onSubmit} className="space-y-6">
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <div className="space-y-2">
          <Label className="text-white" htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            className="bg-white/5 border-white/10 text-white"
            placeholder="Enter your name"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-white" htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="bg-white/5 border-white/10 text-white"
            placeholder="Enter your email"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-white" htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            className="bg-white/5 border-white/10 text-white"
            placeholder="Create a password"
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl h-12"
        >
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </Button>
      </form>
    </motion.div>
  )
}