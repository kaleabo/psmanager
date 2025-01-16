import Link from 'next/link'
import { Github, Twitter, Linkedin } from 'lucide-react'

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

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
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
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
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
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
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
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
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
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-xl font-bold text-white">
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
        </div>
      </div>
    </footer>
  )
} 