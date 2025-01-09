import { PasswordGenerator } from '@/components/passwords/PasswordGenerator'
import { GeneratorHistory } from '@/components/passwords/GeneratorHistory'

export default function GeneratorPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Password Generator</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <PasswordGenerator />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Generated History</h3>
          <GeneratorHistory />
        </div>
      </div>
    </div>
  )
} 