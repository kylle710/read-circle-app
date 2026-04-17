import { AuthContextProvider } from '../context/AuthContext'
import Navbar from '../components/layout/navbar'
import './globals.css'

export const metadata = {
  title: 'ReadCircle',
  description: 'Search, save, and review books with your circle.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ colorScheme: 'light' }}>
      <body className="bg-white min-h-screen text-gray-900" suppressHydrationWarning>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}