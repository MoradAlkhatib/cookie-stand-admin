import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import LoginForm from '../components/LoginForm'
import { useAuth } from '../contexts/auth'
export default function CookieStandAdmin() {
  const { user, login, logout } = useAuth();
  return (
    <div className="bg-green-50">
      
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {user? <Main /> : <LoginForm/> }

      

    </div>
  )
}