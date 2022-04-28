import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const options = {
  pages: {
    signIn: '/sign-in'
  },
  providers: [
    CredentialsProvider({
      name: 'Sign-in',
      credentials: {},
      async authorize({ email, password }) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API}/auth/sign-in`,
          {
            method: 'POST',
            body: new URLSearchParams({ email, password })
          }
        )

        const data = await response.json()
        const headers = response.headers.get('Authorization')
        const dataWithHeaders = { ...data, fwt: headers }
        if (data) {
          return dataWithHeaders
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      session.auth_key = token.auth_key
      return session
    },
    async jwt({ token, user }) {
      if (user && user.fwt) {
        token.auth_key = user.fwt
      }
      return token
    }
  },
  session: { jwt: true }
}

const Auth = (req, res) => NextAuth(req, res, options)

export default Auth
