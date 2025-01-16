import Link from 'next/link'
import { LoginForm } from '@/components/auth/LoginForm'

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div className="text-center text-white">
        <h1 className="text-2xl font-bold">Welcome Back</h1>
        <p className="text-gray-400">Sign in to access your passwords</p>
      </div>
      
      <LoginForm />
      
      <div className="text-center text-sm">
        <p className="text-gray-400">
          Don't have an account?{' '}
          <Link href="/register" className="text-purple-600 hover:text-purple-800">
            Create one
          </Link>
        </p>
      </div>
    </div>
  )
} 