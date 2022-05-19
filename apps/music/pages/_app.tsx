import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0'

function MyApp({ Component, pageProps }: AppProps) {
  // support passing user prop to prepopulate useHook
  const { user } = pageProps

  return (
    <UserProvider user={user}>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
