'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  HomeIcon, 
  KeyIcon, 
  WrenchIcon, 
  CogIcon 
} from '@heroicons/react/24/outline'

const navItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: HomeIcon
  },
  {
    title: 'Passwords',
    href: '/dashboard/passwords',
    icon: KeyIcon
  },
  {
    title: 'Generator',
    href: '/dashboard/generator',
    icon: WrenchIcon
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: CogIcon
  }
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="space-y-1">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        const Icon = item.icon
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`
              flex items-center px-4 py-2 text-sm font-medium rounded-md
              ${isActive 
                ? 'bg-gray-100 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
            `}
          >
            <Icon className="mr-3 h-5 w-5" />
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
} 