import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <div>
        <Link to='/login'>Login</Link>
        <Link to='/login'>Signup</Link>
      </div>
      <header>
        <h2>Recipes</h2>
        <h3>For Ninjas</h3>
      </header>
      <div>
        <h4>Latest Recipes</h4>

        <div>
          {/* card goes here */}
          <div>
            <img src="" alt="" />
            <div>
              <span>5 Bean Chili Stew</span>
              <span>Recipe by Mario</span>
            </div>
          </div>
        </div>

        <h4>Most Popular</h4>

        <div>
          {/* card goes here */}
        </div>

        <div>
          <button>Load more</button>
        </div>
      </div>
    </>
  )
}
