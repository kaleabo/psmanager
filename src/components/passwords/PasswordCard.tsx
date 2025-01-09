'use client'

import { useState } from 'react'
import { usePasswordStore } from '@/store/passwordStore'

interface PasswordCardProps {
  id: string
  title: string
  username: string
  password: string
  url?: string
  notes?: string
}

export function PasswordCard({ id, title, username, password, url, notes }: PasswordCardProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const deletePassword = usePasswordStore(state => state.deletePassword)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold">{title}</h3>
        <button
          onClick={() => deletePassword(id)}
          className="text-red-600 hover:text-red-800"
        >
          Delete
        </button>
      </div>
      
      <div className="space-y-2">
        <div>
          <label className="text-sm text-gray-500">Username</label>
          <div className="flex items-center gap-2">
            <span>{username}</span>
            <button
              onClick={() => copyToClipboard(username)}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Copy
            </button>
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-500">Password</label>
          <div className="flex items-center gap-2">
            <span>
              {isPasswordVisible ? password : '••••••••'}
            </span>
            <button
              onClick={togglePasswordVisibility}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              {isPasswordVisible ? 'Hide' : 'Show'}
            </button>
            <button
              onClick={() => copyToClipboard(password)}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Copy
            </button>
          </div>
        </div>

        {url && (
          <div>
            <label className="text-sm text-gray-500">URL</label>
            <div className="flex items-center gap-2">
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                {url}
              </a>
            </div>
          </div>
        )}

        {notes && (
          <div>
            <label className="text-sm text-gray-500">Notes</label>
            <p className="text-sm">{notes}</p>
          </div>
        )}
      </div>
    </div>
  )
} 