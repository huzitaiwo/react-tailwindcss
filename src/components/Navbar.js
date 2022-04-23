import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <div className='md:col-span-1 md:flex md:justify-end'>
      <nav className='text-right'>
        <div className='pl-3 py-3 md:p-0 flex justify-between items-center'>
          <h1 className='text-3xl font-bold'>
            <Link className='hover:text-gray-800' to='/'>SweetMealsss</Link>
          </h1>
          <button onClick={toggleNav} className="px-4 cursor-pointer md:hidden">
            {toggleMenu && (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            {!toggleMenu && (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {(toggleMenu || screenWidth > 768) && (
          <ul onClick={() => setToggleMenu(false)} className='text-sm'>
            <li className='py-1'>
              <NavLink to='/' className='navLink px-4 flex justify-end'>
                <span>Home</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </NavLink>
            </li>
            <li className='py-1'>
              <NavLink to='/about' className='navLink px-4 flex justify-end'>
                <span>About</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </NavLink>
            </li>
            <li className='py-1'>
              <NavLink to='/contact' className='navLink px-4 flex justify-end'>
                <span>Contact</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </NavLink>
            </li>
            <li className='py-1'>
              <NavLink to='/create' className='navLink px-4 flex justify-end'>
                <span>Add Meal</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </div>
  )
}
