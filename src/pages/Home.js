import { Link } from "react-router-dom"

//images
import curry from '../assets/curry.jpg'
import noodles from '../assets/noodles.jpg'
import stew from '../assets/stew.jpg'

export default function Home() {
  return (
    <>
      <div className="flex justify-center md:justify-end">
        {/*  */}
        <Link className="border text-gray-600 rounded-md px-4 py-2" to='/login'>Login</Link>
        <Link className="border text-gray-600 rounded-md px-4 py-2 ml-2" to='/signup'>Signup</Link>
      </div>
      <header>
        <h2 className="text-gray-700 text-5xl font-semibold">Recipes</h2>
        <h3 className="text-2xl font-semibold">For Ninjas</h3>
      </header>
      <div>
        <h4 className="font-bold mt-10 pb-2 border-b border-gray-200">Latest Recipes</h4>

        <div className="mt-6">
          {/* card goes here */}
          <div className="card">
            <img className="w-full h-32 sm:h-48 object-cover" src={stew} alt="" />
            <div className="m-4">
              <span className="font-bold block">5 Bean Chili Stew</span>
              <span>Recipe by Mario</span>
            </div>
            <div className="badge">25mins</div>
          </div>
        </div>

        <div className="mt-6">
          {/* card goes here */}
          <div className="card">
            <img className="w-full h-32 sm:h-48 object-cover" src={noodles} alt="" />
            <div className="m-4">
              <span className="font-bold block">Ved Noodles</span>
              <span>Recipe by Luigi</span>
            </div>
            <div className="badge">25mins</div>
          </div>
        </div>

        <div className="mt-6">
          {/* card goes here */}
          <div className="card">
            <img className="w-full h-32 sm:h-48 object-cover" src={curry} alt="" />
            <div className="m-4">
              <span className="font-bold block">Tofu curry</span>
              <span>Recipe by Blue</span>
            </div>
            <div className="badge">25mins</div>
          </div>
        </div>

        <h4 className="font-bold mt-10 pb-2 border-b border-gray-200">Most Popular</h4>

        <div className="mt-6">
          {/* card goes here */}
        </div>

        <div className="flex justify-center">
          <button className="bg-gray-600 text-white">Load more</button>
        </div>
      </div>
    </>
  )
}
