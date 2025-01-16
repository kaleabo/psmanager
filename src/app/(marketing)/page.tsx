import Link from 'next/link'
import { Shield, Lock, Key, Fingerprint, RefreshCcw, Settings } from 'lucide-react'

const features = [
  {
    title: 'Secure Password Storage',
    description: 'Store all your passwords in an encrypted vault with military-grade security.',
    icon: Shield
  },
  {
    title: 'Password Generator',
    description: 'Create strong, unique passwords with our advanced generator.',
    icon: Key
  },
  {
    title: 'Biometric Authentication',
    description: 'Quick and secure access using your fingerprint or face ID.',
    icon: Fingerprint
  },
  {
    title: 'Auto-Fill Support',
    description: 'Automatically fill in your credentials across websites and apps.',
    icon: RefreshCcw
  },
  {
    title: 'End-to-End Encryption',
    description: 'Your data is encrypted and decrypted only on your device.',
    icon: Lock
  },
  {
    title: 'Cross-Platform Sync',
    description: 'Access your passwords seamlessly across all your devices.',
    icon: Settings
  }
]

export default function HomePage() {
  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Secure Your Digital Life with
            <span className="text-blue-600"> SecurePass</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            The modern password manager that keeps your online accounts safe and accessible.
            Generate strong passwords, store them securely, and access them anywhere.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/register"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started Free
            </Link>
            <Link
              href="/login"
              className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Everything you need in a password manager
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-blue-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to secure your passwords?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of users who trust SecurePass for their password security.
          </p>
          <Link
            href="/register"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  )
} 