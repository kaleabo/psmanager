'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { LoginSchema } from '@/lib/validation/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'

export function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {searchParams.get('registered') && (
        <Alert className="mb-6 bg-green-500/10 text-green-500 border-green-500/20">
          <AlertDescription>
            Account created successfully! Please sign in.
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={onSubmit} className="space-y-6">
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
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
            placeholder="Enter your password"
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl h-12"
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>
    </motion.div>
  )
}