import 'tailwindcss/tailwind.css'
import { AuthProvider } from '../contexts/auth'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )

  // return <Component {...pageProps} />
}

export default MyApp
