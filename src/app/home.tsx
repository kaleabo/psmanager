'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Lock, Key, Fingerprint, RefreshCcw, Settings, ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'

const features = [
  {
    title: 'Zero-Knowledge Security',
    description: 'End-to-end encryption ensures only you can access your data.',
    icon: Lock
  },
  {
    title: 'Unlimited Storage',
    description: 'Store all your passwords and secure notes without limits.',
    icon: Shield
  },
  {
    title: 'AI-Powered Generator',
    description: 'Create unbreakable passwords with smart generation.',
    icon: Key
  },
  {
    title: 'Biometric Access', 
    description: 'Instant secure access with fingerprint and Face ID.',
    icon: Fingerprint
  },
  {
    title: 'Smart Autofill',
    description: 'Context-aware form filling across all platforms.',
    icon: RefreshCcw
  },
  {
    title: 'Universal Sync',
    description: 'Real-time sync across all your devices seamlessly.',
    icon: Settings
  }
]

const highlights = [
  'Military-grade encryption',
  'Unlimited secure storage', 
  'Free forever guarantee',
  'AI-powered security features',
  'Cross-platform availability',
  'Smart breach monitoring'
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-[#0D0D0D] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              variants={fadeIn}
              className="flex items-center justify-center gap-2 mb-8"
            >
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm font-medium">
                <span className="text-purple-400">New</span>
                {' '}AI-Powered Security{' '}
                <span className="text-purple-400">2024</span>
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn} 
              className="text-7xl md:text-8xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
            >
              Secure Your Digital
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Future Today
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto"
            >
              Experience the next evolution in password security. Military-grade encryption
              meets artificial intelligence for unparalleled protection.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg rounded-2xl px-8 h-14"
              >
                <Link href="/register">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg rounded-2xl px-8 h-14 border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm"
              >
                <Link href="/login">
                  Sign In
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </Container>

        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] -top-40 -right-20 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute w-[500px] h-[500px] -bottom-40 -left-20 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 relative">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeIn}
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
            >
              The Future is Secure
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-white/60 max-w-2xl mx-auto"
            >
              Cutting-edge features powered by artificial intelligence
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  variants={fadeIn}
                  whileHover={{ scale: 1.02 }}
                  className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-white/60">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </Container>
      </section>

      {/* Highlights Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
        <Container className="relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeIn}>
                <h2 className="text-5xl md:text-6xl font-bold mb-8">
                  Enterprise Grade
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Protection
                  </span>
                </h2>
                <p className="text-xl text-white/60 mb-10 leading-relaxed">
                  Advanced security made accessible. Experience enterprise-level protection with consumer-friendly simplicity.
                </p>
                <ul className="space-y-6">
                  {highlights.map((highlight) => (
                    <motion.li
                      key={highlight}
                      variants={fadeIn}
                      className="flex items-center gap-4"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                        <Check className="w-5 h-5 text-purple-400" />
                      </div>
                      <span className="text-lg text-white/80">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-3xl transform rotate-3 scale-105 blur-2xl" />
                <Card className="relative bg-gradient-to-br from-white/10 to-white/5 p-10 rounded-3xl border-0 backdrop-blur-xl">
                  <div className="text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    $0
                  </div>
                  <div className="text-2xl mb-10 text-black">Forever Free</div>
                  <ul className="space-y-5 mb-10">
                    {['Unlimited passwords', 'AI-powered security', 'Cross-platform sync', 'Premium support'].map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-purple-400" />
                        <span className="text-black">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl h-14 text-lg"
                  >
                    <Link href="/register">
                      Get Started
                    </Link>
                  </Button>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-32">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Common Questions</h2>
              <p className="text-xl text-white/60">
                Everything you need to know about our platform
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="space-y-6"
            >
              {[
                {
                  q: 'How secure is the platform?',
                  a: 'We use military-grade AES-256 encryption with zero-knowledge architecture. Your data is encrypted before it leaves your device - even we can\'t access it.'
                },
                {
                  q: 'Why is it free?',
                  a: 'We believe everyone deserves top-tier security. Our efficient infrastructure and community support keep costs low, allowing us to offer enterprise features at no cost.'
                },
                {
                  q: 'What about data privacy?',
                  a: 'Your security is paramount. All data is encrypted locally using advanced algorithms, and we follow a strict zero-knowledge policy.'
                }
              ].map(({ q, a }) => (
                <motion.div
                  key={q}
                  variants={fadeIn}
                  className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3">{q}</h3>
                  <p className="text-white/60 leading-relaxed">{a}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeIn}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-white/60 mb-10"
            >
              Join thousands of users protecting their digital lives with AI-powered security.
              No credit card required.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg rounded-2xl px-8 h-14"
              >
                <Link href="/register">
                  Start Protecting Your Passwords
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}