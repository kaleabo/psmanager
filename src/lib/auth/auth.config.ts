import { hashPassword, verifyPassword } from '@/lib/crypto/encryption'
import { getUserByEmail } from '@/lib/data/user'
import { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error('No credentials provided')
        }

        const user = await getUserByEmail(credentials.email)
        if (!user) {
          throw new Error('No user found with the given email')
        }

        const isValid = await verifyPassword(credentials.password, user.password)
        if (!isValid) {
          throw new Error('Invalid password')
        }

        return { id: user.id, email: user.email }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user = { ...session.user, id: token.id as string }
      }
      return session
    }
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error'
  },
  secret: process.env.NEXTAUTH_SECRET
}
