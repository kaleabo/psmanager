'use client'

import { useEffect, useState } from 'react'
import { usePasswordStore } from '@/store/passwordStore'
import { SecurityAudit } from '@/components/security/SecurityAudit'

export function SecurityScore() {
  const [score, setScore] = useState(0)
  const passwords = usePasswordStore(state => state.passwords)

  useEffect(() => {
    const calculateScore = async () => {
      let totalScore = 0
      
      for (const password of passwords) {
        const strength = await SecurityAudit.checkPasswordStrength(password.password)
        totalScore += strength
      }

      const averageScore = passwords.length 
        ? Math.round((totalScore / passwords.length) * 20) 
        : 0

      setScore(averageScore)
    }

    calculateScore()
  }, [passwords])

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900">Security Score</h3>
      
      <div className="mt-4">
        <div className="relative pt-1">
          <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: `${score}%` }}
              className={`
                shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center
                ${score > 80 ? 'bg-green-500' : score > 60 ? 'bg-yellow-500' : 'bg-red-500'}
              `}
            />
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Score: {score}/100
        </div>
      </div>
    </div>
  )
} 