import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'


export default function Header() {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()

  return (
    <header className="flex justify-end mb-5">

      {!user && (
        <>
          <Link to='/login' className="btn text-gray-600 hover:bg-gray-600 hover:text-white md:border transition ease-in-out duration-500">Login</Link>
          <Link to='/signup' className="btn text-gray-600 hover:bg-gray-600 hover:text-white mx-2 md:border transition ease-in-out duration-500">Signup</Link>
        </>
      )}

      {user && (
        <div className='flex items-center'>
          <p className='text-bold'>&#128075; Hi! {user.displayName}</p>
          <div>
            {!isPending && <button onClick={logout} className="btn text-gray-600 hover:bg-gray-600 hover:text-white mx-2 md:border transition ease-in-out duration-500">
              Logout
            </button>}
            {isPending && <button disabled className="btn text-gray-600 hover:bg-gray-600 hover:text-white mx-2 md:border transition ease-in-out duration-500">
              Loging out...
            </button>}
          </div>
        </div>
      )}
    </header>
  )
}


