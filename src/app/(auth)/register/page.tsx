import Link from 'next/link'
import { RegisterForm } from '@/components/auth/RegisterForm'

export default function RegisterPage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Create Account</h1>
        <p className="text-gray-600">Start managing your passwords securely</p>
      </div>
      
      <RegisterForm />
      
      <div className="text-center text-sm">
        <p className="text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 hover:text-blue-800">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
} 