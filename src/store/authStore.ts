import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  masterKey: string | null
  setMasterKey: (key: string) => void
  clearMasterKey: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      masterKey: null,
      setMasterKey: (key) => set({ masterKey: key }),
      clearMasterKey: () => set({ masterKey: null })
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ masterKey: state.masterKey })
    }
  )
) 