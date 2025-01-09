import { useState, useCallback } from 'react'
import { usePasswordStore } from '@/store/passwordStore'
import { SecurityAudit } from '@/components/security/SecurityAudit'

export function usePasswords() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const passwords = usePasswordStore(state => state.passwords)
  const addPassword = usePasswordStore(state => state.addPassword)
  const updatePassword = usePasswordStore(state => state.updatePassword)
  const deletePassword = usePasswordStore(state => state.deletePassword)

  const checkPasswordSecurity = useCallback(async (password: string) => {
    try {
      const strength = await SecurityAudit.checkPasswordStrength(password)
      const isCompromised = await SecurityAudit.checkHaveIBeenPwned(password)
      
      return {
        strength,
        isCompromised,
        isWeak: strength < 3
      }
    } catch (error) {
      console.error('Error checking password security:', error)
      throw error
    }
  }, [])

  const createPassword = useCallback(async (passwordData: any) => {
    setIsLoading(true)
    setError(null)
    
    try {
      const securityCheck = await checkPasswordSecurity(passwordData.password)
      if (securityCheck.isCompromised) {
        throw new Error('This password has been compromised')
      }
      
      await addPassword(passwordData)
    } catch (error) {
      setError((error as Error).message)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [addPassword, checkPasswordSecurity])

  return {
    passwords,
    isLoading,
    error,
    createPassword,
    updatePassword,
    deletePassword,
    checkPasswordSecurity
  }
} 