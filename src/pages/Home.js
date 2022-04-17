import { Link } from "react-router-dom"

//images
// import curry from '../assets/curry.jpg'
// import noodles from '../assets/noodles.jpg'
import stew from '../assets/stew.jpg'

export default function Home() {
  return (
    <>
      <div>
        {/* bg-gray-500 text-white rounded px-4 py-2 */}
        <Link className="" to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </div>
      <header>
        <h2 className="text-gray-700 text-5xl font-semibold">Recipes</h2>
        <h3 className="text-2xl font-semibold">For Ninjas</h3>
      </header>
      <div>
        <h4 className="font-bold mt-10 pb-2 border-b border-gray-200">Latest Recipes</h4>

        <div className="mt-6">
          {/* card goes here */}
          <div>
            <img src={stew} alt="" />
            <div>
              <span>5 Bean Chili Stew</span>
              <span>Recipe by Mario</span>
            </div>
          </div>
        </div>

        <h4 className="font-bold mt-10 pb-2 border-b border-gray-200">Most Popular</h4>

        <div className="mt-6">
          {/* card goes here */}
        </div>

        <div>
          <button>Load more</button>
        </div>
      </div>
    </>
  )
}
