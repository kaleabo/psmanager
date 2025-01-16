'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

const navLinks = [
  { title: 'Features', href: '#features' },
  { title: 'Pricing', href: '#pricing' },
  { title: 'Security', href: '#security' },
  { title: 'Enterprise', href: '#enterprise' }
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]">
      <div className="absolute inset-0 bg-black/5 backdrop-blur-xl border-b border-white/10" />
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            SecurePass
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-white/60 hover:text-white transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              variant="ghost" 
              className="text-white/60 hover:text-white hover:bg-white/5"
            >
              <Link href="/login">
                Login
              </Link>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl"
            >
              <Link href="/register">
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/60 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden py-4"
            >
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
                <hr className="border-white/10 my-2" />
                <Button
                  asChild
                  variant="ghost"
                  className="text-white/60 hover:text-white hover:bg-white/5 justify-start"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/login">
                    Login
                  </Link>
                </Button>
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/register">
                    Get Started
                  </Link>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}