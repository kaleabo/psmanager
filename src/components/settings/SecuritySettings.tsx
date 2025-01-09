'use client'

import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { SecuritySettingsSchema } from '@/lib/validation/schemas'

export function SecuritySettings() {
  const [settings, setSettings] = useState({
    autoLockTimeout: 15,
    requireMasterPassword: true,
    enableBiometric: false,
    enableTwoFactor: false
  })

  const [isSaving, setIsSaving] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    try {
      const validated = SecuritySettingsSchema.parse(settings)
      // Save settings to backend
      await fetch('/api/settings/security', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated)
      })
    } catch (error) {
      console.error('Failed to save settings:', error)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Auto-lock Timeout (minutes)
          </label>
          <input
            type="number"
            min="1"
            max="60"
            value={settings.autoLockTimeout}
            onChange={(e) => setSettings({
              ...settings,
              autoLockTimeout: parseInt(e.target.value)
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>

        <Switch.Group>
          <div className="flex items-center justify-between">
            <Switch.Label className="text-sm font-medium text-gray-700">
              Require Master Password
            </Switch.Label>
            <Switch
              checked={settings.requireMasterPassword}
              onChange={(checked) => setSettings({
                ...settings,
                requireMasterPassword: checked
              })}
              className={`${
                settings.requireMasterPassword ? 'bg-blue-600' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className={`${
                settings.requireMasterPassword ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white`} />
            </Switch>
          </div>
        </Switch.Group>

        <Switch.Group>
          <div className="flex items-center justify-between">
            <Switch.Label className="text-sm font-medium text-gray-700">
              Enable Biometric Authentication
            </Switch.Label>
            <Switch
              checked={settings.enableBiometric}
              onChange={(checked) => setSettings({
                ...settings,
                enableBiometric: checked
              })}
              className={`${
                settings.enableBiometric ? 'bg-blue-600' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className={`${
                settings.enableBiometric ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white`} />
            </Switch>
          </div>
        </Switch.Group>

        <Switch.Group>
          <div className="flex items-center justify-between">
            <Switch.Label className="text-sm font-medium text-gray-700">
              Two-Factor Authentication
            </Switch.Label>
            <Switch
              checked={settings.enableTwoFactor}
              onChange={(checked) => setSettings({
                ...settings,
                enableTwoFactor: checked
              })}
              className={`${
                settings.enableTwoFactor ? 'bg-blue-600' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className={`${
                settings.enableTwoFactor ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white`} />
            </Switch>
          </div>
        </Switch.Group>
      </div>

      <button
        type="submit"
        disabled={isSaving}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {isSaving ? 'Saving...' : 'Save Security Settings'}
      </button>
    </form>
  )
} 