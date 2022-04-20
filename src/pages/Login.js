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
    login(email, password)
  }

  return (
    <div>
      <Header />
      <div className='flex justify-center'>

        <form onSubmit={handleLogin}>
          <h2 className='text-2xl font-bold mb-4'>Login</h2>

          <label className='block mb-5 w-full'>
            <span className='block mb-2'>email:</span>
            <input className='block px-2 py-1' 
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </label>

          <label className='block mb-5'>
            <span className='block mb-2'>password:</span>
            <input className='px-2 py-1' 
              type="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </label>
          
          {error && <div>{error}</div>}
          {!isPending && <button className="mt-5 btn bg-gray-600 hover:bg-gray-800 text-white hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">login</button>}
          {isPending && <button className="mt-5 btn bg-gray-600 hover:bg-gray-800 text-white hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">loging in...</button>}
        </form>
      </div>
    </div>
  )
}
