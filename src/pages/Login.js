import { useState } from "react"
import { useLogin } from '../hooks/useLogin'

//components
import Header from "../components/Header"

export default function Login() {
  const { login, error, isPending } = useLogin()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = e => {
    e.preventDefault()
    console.log(email)
    login(email, password)
  }

  return (
    <div>
      <Header />
      <div className='p-6 md:p-3'>

        <form onSubmit={handleLogin}>
          <h2 className='text-2xl font-bold mb-6 pb-3 border-b border-gray-200'>Login</h2>

          <label className='block mb-5'>
            <span className='block mb-2'>email:</span>
            <input className='input' 
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </label>

          <label className='block mb-5'>
            <span className='block mb-2'>password:</span>
            <input className='input' 
              type="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </label>
          
          {error && <div className="error">{error}</div>}
          {isPending && <button className="btn authBtn">loging in...</button>}
          {!isPending && <button className="btn authBtn">login</button>}
        </form>
      </div>
    </div>
  )
}
