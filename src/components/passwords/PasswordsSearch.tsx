'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { useDebounce } from '@/lib/hooks/useDebounce'

export function PasswordsSearch() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  
  const initialSearch = searchParams.get('search') || ''
  const [search, setSearch] = useState(initialSearch)
  const debouncedSearch = useDebounce(search, 300)

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    if (debouncedSearch) {
      params.set('search', debouncedSearch)
    } else {
      params.delete('search')
    }
    replace(`${pathname}?${params.toString()}`)
  }, [debouncedSearch, pathname, replace, searchParams])

  return (
    <div className="relative">
      <input
        type="search"
        placeholder="Search passwords..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
} 