'use client'

import { useState } from 'react'
import { usePasswordStore } from '@/store/passwordStore'

export function VaultSettings() {
  const [isExporting, setIsExporting] = useState(false)
  const [isImporting, setIsImporting] = useState(false)
  const passwords = usePasswordStore(state => state.passwords)

  const handleExport = async () => {
    setIsExporting(true)
    try {
      const exportData = {
        passwords,
        exportDate: new Date().toISOString()
      }

      const blob = new Blob([JSON.stringify(exportData, null, 2)], {
        type: 'application/json'
      })

      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `password-vault-export-${new Date().toISOString()}.json`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Export failed:', error)
    } finally {
      setIsExporting(false)
    }
  }

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsImporting(true)
    try {
      const text = await file.text()
      const importData = JSON.parse(text)
      
      // Validate and process import data
      // Implementation depends on your data structure and validation needs
      
      console.log('Import successful:', importData)
    } catch (error) {
      console.error('Import failed:', error)
    } finally {
      setIsImporting(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h4 className="text-lg font-medium mb-4">Vault Management</h4>
        
        <div className="space-y-4">
          <div>
            <button
              onClick={handleExport}
              disabled={isExporting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isExporting ? 'Exporting...' : 'Export Vault'}
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Import Vault
            </label>
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              disabled={isImporting}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 