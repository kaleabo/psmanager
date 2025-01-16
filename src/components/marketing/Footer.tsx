'use client'

import Link from 'next/link'
import { Github, Twitter, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'

const productLinks = [
  { title: 'Features', href: '#features' },
  { title: 'Pricing', href: '#pricing' },
  { title: 'Security', href: '#security' },
  { title: 'Enterprise', href: '#enterprise' }
]

const companyLinks = [
  { title: 'About', href: '/about' },
  { title: 'Blog', href: '/blog' },
  { title: 'Careers', href: '/careers' },
  { title: 'Contact', href: '/contact' }
]

const legalLinks = [
  { title: 'Privacy Policy', href: '/privacy' },
  { title: 'Terms of Service', href: '/terms' },
  { title: 'Cookie Policy', href: '/cookies' },
  { title: 'GDPR', href: '/gdpr' }
]

const socialLinks = [
  { title: 'GitHub', href: 'https://github.com', icon: Github },
  { title: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { title: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin }
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

export function Footer() {
  return (
    <footer className="relative bg-[#0D0D0D] text-white/60">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>

      <Container className="relative">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20"
        >
          <motion.div 
            variants={fadeIn}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16"
          >
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Product</h3>
              <ul className="space-y-4">
                {productLinks.map((link) => (
                  <li key={link.title}>
                    <Link 
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.title}>
                    <Link 
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
              <ul className="space-y-4">
                {legalLinks.map((link) => (
                  <li key={link.title}>
                    <Link 
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Connect</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="w-6 h-6" />
                    </Link>
                  )
                })}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <Link 
                  href="/" 
                  className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  SecurePass
                </Link>
                <p className="text-sm mt-2">
                  © {new Date().getFullYear()} SecurePass. All rights reserved.
                </p>
              </div>
              <div className="text-sm">
                Made with ❤️ for a secure digital world
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </footer>
  )
}