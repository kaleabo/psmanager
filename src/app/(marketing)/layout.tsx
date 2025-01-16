import Link from 'next/link'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              SecurePass
            </Link>
            <div className="space-x-4">
              <Link 
                href="/login" 
                className="text-gray-600 hover:text-gray-900"
              >
                Login
              </Link>
              <Link 
                href="/register" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
} 