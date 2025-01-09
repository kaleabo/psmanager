'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'

export function AccountSettings() {
  const { data: session } = useSession()
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsChangingPassword(true)

    try {
      const response = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(passwordForm)
      })

      if (!response.ok) throw new Error('Failed to change password')

      setPasswordForm({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.error('Error changing password:', error)
    } finally {
      setIsChangingPassword(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h4 className="text-lg font-medium mb-4">Profile Information</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              disabled
              value={session?.user?.email || ''}
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50"
            />
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h4 className="text-lg font-medium mb-4">Change Master Password</h4>
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Current Password
            </label>
            <input
              type="password"
              value={passwordForm.currentPassword}
              onChange={(e) => setPasswordForm({
                ...passwordForm,
                currentPassword: e.target.value
              })}
              className="mt-1 block w-full rounded-md border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              value={passwordForm.newPassword}
              onChange={(e) => setPasswordForm({
                ...passwordForm,
                newPassword: e.target.value
              })}
              className="mt-1 block w-full rounded-md border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <input
              type="password"
              value={passwordForm.confirmPassword}
              onChange={(e) => setPasswordForm({
                ...passwordForm,
                confirmPassword: e.target.value
              })}
              className="mt-1 block w-full rounded-md border-gray-300"
            />
          </div>

          <button
            type="submit"
            disabled={isChangingPassword}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isChangingPassword ? 'Changing Password...' : 'Change Password'}
          </button>
        </form>
      </div>
    </div>
  )
} 