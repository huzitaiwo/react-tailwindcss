import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav>
        <div>
          <h1>
            <Link to='/'>Food Ninja</Link>
          </h1>
        </div>
        <ul>
          <li>
            <Link to='/'>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link to='/contact'>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
