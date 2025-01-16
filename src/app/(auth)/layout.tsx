export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D0D0D]">
      <div className="w-full max-w-md p-6 bg-[#1A1A1A] rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  )
} 