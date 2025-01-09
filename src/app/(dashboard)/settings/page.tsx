import { SecuritySettings } from '@/components/settings/SecuritySettings'
import { AccountSettings } from '@/components/settings/AccountSettings'
import { VaultSettings } from '@/components/settings/VaultSettings'

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Settings</h2>
      </div>

      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-4">Security</h3>
          <SecuritySettings />
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Account</h3>
          <AccountSettings />
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Vault</h3>
          <VaultSettings />
        </section>
      </div>
    </div>
  )
} 