import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, Lock, Key, Fingerprint, RefreshCcw, Settings, Check } from 'lucide-react'
import { authOptions } from '@/lib/auth/auth.config'

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

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started',
    features: [
      'Up to 50 passwords',
      'Basic password generator',
      'Secure storage',
      'Mobile access'
    ]
  },
  {
    name: 'Pro',
    price: '$4.99',
    period: '/month',
    description: 'Best for personal use',
    features: [
      'Unlimited passwords',
      'Advanced password generator',
      'Secure file storage',
      'Priority support',
      'Password sharing',
      'Dark web monitoring'
    ],
    featured: true
  },
  {
    name: 'Team',
    price: '$9.99',
    period: '/user/month',
    description: 'Perfect for small teams',
    features: [
      'Everything in Pro',
      'Team management',
      'Access controls',
      'Activity logs',
      'API access',
      'SSO integration'
    ]
  }
]

const testimonials = [
  {
    quote: "SecurePass has completely transformed how I manage my online security. It's intuitive and reliable.",
    author: "Sarah Johnson",
    role: "Software Engineer",
    avatar: "/avatars/sarah.jpg"
  },
  {
    quote: "The best password manager I've ever used. The auto-fill feature saves me so much time.",
    author: "Michael Chen",
    role: "Digital Marketer",
    avatar: "/avatars/michael.jpg"
  },
  {
    quote: "As a business owner, SecurePass gives me peace of mind knowing our team's passwords are secure.",
    author: "Emma Davis",
    role: "CEO at TechStart",
    avatar: "/avatars/emma.jpg"
  }
]

const faqs = [
  {
    question: "How secure is SecurePass?",
    answer: "SecurePass uses military-grade encryption (AES-256) to protect your data. Your master password is never stored on our servers, and all encryption/decryption happens locally on your device."
  },
  {
    question: "Can I access my passwords offline?",
    answer: "Yes! Once you've synced your passwords, you can access them offline on any device where you're logged in."
  },
  {
    question: "What happens if I forget my master password?",
    answer: "For security reasons, we cannot recover your master password. However, you can set up recovery methods like biometric authentication or recovery codes."
  },
  {
    question: "Can I share passwords securely with my team?",
    answer: "Yes, our Pro and Team plans include secure password sharing features with granular access controls."
  }
]

export default async function HomePage() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/dashboard/overview')
  }

  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8">
              Secure Your Digital Life with
              <span className="text-blue-600"> SecurePass</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              The modern password manager that keeps your online accounts safe and accessible.
              Generate strong passwords, store them securely, and access them anywhere.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/register"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started Free
              </Link>
              <Link
                href="/login"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors border border-gray-200"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Everything you need in a password manager
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features to help you manage your passwords securely and efficiently
            </p>
          </div>
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
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that best fits your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`
                  bg-white rounded-xl shadow-sm p-8
                  ${plan.featured ? 'ring-2 ring-blue-600 shadow-lg scale-105' : ''}
                `}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/register"
                  className={`
                    w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors block
                    ${plan.featured
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }
                  `}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Trusted by thousands</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our users have to say about SecurePass
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Got questions? We've got answers
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to secure your passwords?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust SecurePass for their password security.
            Start your free trial today.
          </p>
          <Link
            href="/register"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  )
} 