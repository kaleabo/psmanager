'use client'

import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { usePasswordStore } from '@/store/passwordStore'
import { PasswordSchema } from '@/lib/validation/schemas'
import { useSession } from 'next-auth/react'

export function AddPasswordButton() {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    username: '',
    password: '',
    url: '',
    notes: '',
    vaultId: ''
  })
  
  useEffect(() => {
    if (session?.user?.id) {
      setFormData(prev => ({ ...prev, vaultId: session.user.id }))
    }
  }, [session])

  const addPassword = usePasswordStore(state => state.addPassword)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const validated = PasswordSchema.parse(formData)
      await addPassword(validated)
      setIsOpen(false)
      setFormData({ title: '', username: '', password: '', url: '', notes: '', vaultId: '' })
    } catch (error) {
      console.error('Invalid password data:', error)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Add Password
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-md rounded bg-white p-6">
            <Dialog.Title className="text-lg font-medium mb-4">
              Add New Password
            </Dialog.Title>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={e => setFormData({ ...formData, username: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={e => setFormData({ ...formData, password: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">URL (optional)</label>
                <input
                  type="url"
                  value={formData.url}
                  onChange={e => setFormData({ ...formData, url: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Notes (optional)</label>
                <textarea
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  rows={3}
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                >
                  Add Password
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
} 