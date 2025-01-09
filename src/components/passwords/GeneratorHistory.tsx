'use client'

import { useState, useEffect } from 'react'

interface GeneratedPassword {
  password: string
  timestamp: number
}

export function GeneratorHistory() {
  const [history, setHistory] = useState<GeneratedPassword[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('generatedPasswords')
      return saved ? JSON.parse(saved) : []
    }
    return []
  })

  const copyToClipboard = (password: string) => {
    navigator.clipboard.writeText(password)
  }

  return (
    <div className="space-y-2">
      {history.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No passwords generated yet</p>
      ) : (
        history.map((item, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
            <span className="font-mono">{item.password}</span>
            <button
              onClick={() => copyToClipboard(item.password)}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              Copy
            </button>
          </div>
        ))
      )}
    </div>
  )
} 