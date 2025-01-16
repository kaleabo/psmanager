import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { Shield, Lock, Key, Fingerprint, RefreshCcw, Settings, ArrowRight, Check } from 'lucide-react'
import { authOptions } from '@/lib/auth/auth.config'

const features = [
  {
    title: 'Free Forever',
    description: 'No hidden fees, no premium features. Everything is included.',
    icon: Lock
  },
  {
    title: 'Unlimited Storage',
    description: 'Store all your passwords without any limitations.',
    icon: Shield
  },
  {
    title: 'Smart Generator',
    description: 'Create strong, unique passwords instantly.',
    icon: Key
  },
  {
    title: 'Quick Access',
    description: 'Use biometrics for fast, secure login.',
    icon: Fingerprint
  },
  {
    title: 'Auto-Fill',
    description: 'Save time with automatic form filling.',
    icon: RefreshCcw
  },
  {
    title: 'Cross-Platform',
    description: 'Access your passwords on any device.',
    icon: Settings
  }
]

const highlights = [
  'No credit card required',
  'Unlimited password storage',
  'Free forever, no hidden fees',
  'Advanced security features included',
  'Cross-platform synchronization',
  'Automatic form filling'
]

export default async function HomePage() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/dashboard/overview')
  }

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              100% Free Forever
              <span className="w-1 h-1 bg-blue-600 rounded-full" />
              No Credit Card Required
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8">
              Secure passwords,
              <span className="text-blue-600"> zero cost</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              The completely free password manager that keeps your digital life secure.
              All features included, no premium tier, no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/register"
                className="group bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/login"
                className="bg-white text-gray-900 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50 transition-all border border-gray-200 inline-flex items-center justify-center"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need, all for free
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No premium tier, no feature restrictions. Every user gets access to all features.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="group p-8 rounded-2xl bg-white hover:bg-blue-50 transition-colors border border-gray-100 hover:border-blue-100"
                >
                  <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Free forever means exactly that
                </h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  We believe password security should be accessible to everyone. That's why we offer all our features completely free, forever.
                </p>
                <ul className="space-y-4">
                  {highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-lg">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl transform rotate-3" />
                <div className="relative bg-blue-800 p-8 rounded-2xl">
                  <div className="text-5xl font-bold mb-4">$0</div>
                  <div className="text-2xl mb-6">Forever Free</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-blue-300" />
                      <span>Unlimited passwords</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-blue-300" />
                      <span>All security features</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-blue-300" />
                      <span>Cross-platform sync</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-blue-300" />
                      <span>Password sharing</span>
                    </li>
                  </ul>
                  <Link
                    href="/register"
                    className="block w-full bg-white text-blue-600 text-center px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Common questions</h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our free service
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-semibold mb-2">Is it really free?</h3>
                <p className="text-gray-600">
                  Yes, absolutely! We believe in making password security accessible to everyone.
                  There are no premium features, no hidden fees, and no credit card required.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-semibold mb-2">How do you make money?</h3>
                <p className="text-gray-600">
                  We're community-supported and run on minimal costs. Our mission is to provide
                  secure password management for everyone, not to maximize profit.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-semibold mb-2">What about my privacy?</h3>
                <p className="text-gray-600">
                  Your security is our top priority. All data is encrypted locally on your device,
                  and we never have access to your passwords or sensitive information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join thousands of users today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience secure, unlimited password management without spending a penny.
              No credit card required, no hidden fees, just sign up and start using.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 