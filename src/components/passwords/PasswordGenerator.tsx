'use client'

import { useState } from 'react'

interface GeneratorOptions {
  length: number
  includeUppercase: boolean
  includeLowercase: boolean
  includeNumbers: boolean
  includeSymbols: boolean
}

export function PasswordGenerator() {
  const [password, setPassword] = useState('')
  const [options, setOptions] = useState<GeneratorOptions>({
    length: 16,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true
  })

  const generatePassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?'

    let chars = ''
    if (options.includeUppercase) chars += uppercase
    if (options.includeLowercase) chars += lowercase
    if (options.includeNumbers) chars += numbers
    if (options.includeSymbols) chars += symbols

    if (chars === '') {
      setPassword('')
      return
    }

    let generatedPassword = ''
    for (let i = 0; i < options.length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length)
      generatedPassword += chars[randomIndex]
    }

    setPassword(generatedPassword)
  }

  return (
    <div className="space-y-6 p-4 border rounded-lg">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Password Length: {options.length}
          </label>
          <input
            type="range"
            min="8"
            max="32"
            value={options.length}
            onChange={(e) => setOptions({ ...options, length: Number(e.target.value) })}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={options.includeUppercase}
              onChange={(e) => setOptions({ ...options, includeUppercase: e.target.checked })}
            />
            Include Uppercase Letters
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={options.includeLowercase}
              onChange={(e) => setOptions({ ...options, includeLowercase: e.target.checked })}
            />
            Include Lowercase Letters
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={options.includeNumbers}
              onChange={(e) => setOptions({ ...options, includeNumbers: e.target.checked })}
            />
            Include Numbers
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={options.includeSymbols}
              onChange={(e) => setOptions({ ...options, includeSymbols: e.target.checked })}
            />
            Include Symbols
          </label>
        </div>
      </div>

      <div className="space-y-4">
        <button
          onClick={generatePassword}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Generate Password
        </button>

        {password && (
          <div className="p-4 bg-gray-50 rounded">
            <div className="flex justify-between items-center">
              <span className="font-mono">{password}</span>
              <button
                onClick={() => navigator.clipboard.writeText(password)}
                className="text-blue-600 hover:text-blue-800"
              >
                Copy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 