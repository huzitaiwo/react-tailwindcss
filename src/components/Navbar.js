import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav>
        <div>
          <h1 className='font-bold uppercase border-b border-gray-100'>
            <Link to='/'>SweetMealssssss</Link>
          </h1>
        </div>
        <ul>
          <li className='text-gray-700 font-bold'>
            <NavLink to='/'>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/about'>
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact'>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
