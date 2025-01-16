import { Header } from '@/components/marketing/Header'
import { Footer } from '@/components/marketing/Footer'
import './globals.css'

export const metadata = {
  title: 'SecurePass - Password Manager',
  description: 'Secure your digital life with SecurePass password manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
