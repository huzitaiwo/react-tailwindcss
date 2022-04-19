import React from 'react'

export default function Header() {
  return (
    <header className="flex justify-center md:justify-end mb-5">
      <Link className="btn text-gray-600 hover:bg-gray-600 hover:text-white md:border transition ease-in-out duration-500" to='/login'>Login</Link>
      <Link className="btn text-gray-600 hover:bg-gray-600 hover:text-white mx-2 md:border transition ease-in-out duration-500" to='/signup'>Signup</Link>
      {!isPending && <button onClick={logout} className="btn text-gray-600 hover:bg-gray-600 hover:text-white mx-2 md:border transition ease-in-out duration-500">Logout</button>}
      {isPending && <button onClick={logout} className="btn text-gray-600 hover:bg-gray-600 hover:text-white mx-2 md:border transition ease-in-out duration-500">Loging out...</button>}
    </header>
  )
}
