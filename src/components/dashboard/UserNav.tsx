'use client'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useAuth } from '@/lib/hooks/useAuth'

interface UserNavProps {
  user: {
    name?: string | null
    email?: string | null
    image?: string | null
  }
}

export function UserNav({ user }: UserNavProps) {
  const { logout } = useAuth()

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center gap-2">
        {user.image ? (
          <img
            src={user.image}
            alt={user.name || ''}
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
            {user.name?.[0] || user.email?.[0] || '?'}
          </div>
        )}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => logout()}
                  className={`
                    ${active ? 'bg-gray-100' : ''} 
                    w-full text-left px-4 py-2 text-sm text-gray-700
                  `}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
} 