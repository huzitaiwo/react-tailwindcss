import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'


export default function Header() {
  const { logout, isPending, error } = useLogout()

  return (
    <header className="flex justify-center md:justify-end mb-5">
      <Link to='/login' className="btn text-gray-600 hover:bg-gray-600 hover:text-white md:border transition ease-in-out duration-500">Login</Link>
      <Link to='/signup' className="btn text-gray-600 hover:bg-gray-600 hover:text-white mx-2 md:border transition ease-in-out duration-500">Signup</Link>
      {!isPending && <button className="btn text-gray-600 hover:bg-gray-600 hover:text-white mx-2 md:border transition ease-in-out duration-500">Logout</button>}
      {isPending && <button onClick={logout} className="btn text-gray-600 hover:bg-gray-600 hover:text-white mx-2 md:border transition ease-in-out duration-500">Loging out...</button>}
    </header>
  )
}


