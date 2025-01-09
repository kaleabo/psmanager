import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { encryptData, decryptData } from '@/lib/crypto/encryption'

interface Password {
  id: string
  title: string
  username: string
  password: string
  url?: string
  notes?: string
  category?: string
  vaultId: string
  createdAt: Date
  updatedAt: Date
}

interface PasswordState {
  passwords: Password[]
  selectedVaultId: string | null
  isLoading: boolean
  error: string | null
  masterKey: Buffer | null
  setMasterKey: (key: Buffer) => void
  addPassword: (password: Omit<Password, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>
  updatePassword: (id: string, password: Partial<Password>) => Promise<void>
  deletePassword: (id: string) => Promise<void>
  setSelectedVault: (vaultId: string) => void
  searchPasswords: (query: string) => Password[]
}

export const usePasswordStore = create<PasswordState>()(
  persist(
    (set, get) => ({
      passwords: [],
      selectedVaultId: null,
      isLoading: false,
      error: null,
      masterKey: null,

      setMasterKey: (key) => set({ masterKey: key }),

      addPassword: async (password) => {
        try {
          set({ isLoading: true, error: null })
          const { masterKey } = get()
          if (!masterKey) throw new Error('Master key not set')

          const encrypted = await encryptData(password.password, masterKey)
          // API call to save password would go here
          
          set((state) => ({
            passwords: [...state.passwords, {
              ...password,
              id: crypto.randomUUID(),
              createdAt: new Date(),
              updatedAt: new Date()
            }]
          }))
        } catch (error) {
          set({ error: (error as Error).message })
        } finally {
          set({ isLoading: false })
        }
      },

      updatePassword: async (id, updatedPassword) => {
        try {
          set({ isLoading: true, error: null })
          // API call to update password would go here
          
          set((state) => ({
            passwords: state.passwords.map((p) =>
              p.id === id ? { ...p, ...updatedPassword, updatedAt: new Date() } : p
            )
          }))
        } catch (error) {
          set({ error: (error as Error).message })
        } finally {
          set({ isLoading: false })
        }
      },

      deletePassword: async (id) => {
        try {
          set({ isLoading: true, error: null })
          // API call to delete password would go here
          
          set((state) => ({
            passwords: state.passwords.filter((p) => p.id !== id)
          }))
        } catch (error) {
          set({ error: (error as Error).message })
        } finally {
          set({ isLoading: false })
        }
      },

      setSelectedVault: (vaultId) => set({ selectedVaultId: vaultId }),

      searchPasswords: (query) => {
        const { passwords } = get()
        const searchTerm = query.toLowerCase()
        
        return passwords.filter((p) =>
          p.title.toLowerCase().includes(searchTerm) ||
          p.username.toLowerCase().includes(searchTerm) ||
          p.url?.toLowerCase().includes(searchTerm) ||
          p.category?.toLowerCase().includes(searchTerm)
        )
      }
    }),
    {
      name: 'password-store',
      partialize: (state) => ({
        selectedVaultId: state.selectedVaultId,
        // Don't persist sensitive data
      })
    }
  )
) 