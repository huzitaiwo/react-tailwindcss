import { Link, withRouter } from "react-router-dom"

//images
import curry from '../assets/curry.jpg'
import noodles from '../assets/noodles.jpg'
import stew from '../assets/stew.jpg'

export default function Home() {
  return (
    <>
      <div className="flex justify-center md:justify-end mb-5">
        {/*  */}
        <Link className="btn text-gray-600 hover:bg-gray-600 hover:text-white md:border transition ease-in-out duration-500" to='/login'>Login</Link>
        <Link className="btn text-gray-600 hover:bg-gray-600 hover:text-white ml-2 md:border transition ease-in-out duration-500" to='/signup'>Signup</Link>
      </div>
      <header>
        <h2 className="text-gray-700 text-5xl font-semibold">Recipes</h2>
        <h3 className="text-2xl font-semibold">For Ninjas</h3>
      </header>
      <div>
        <h4 className="font-bold mt-10 pb-2 border-b border-gray-200">Latest Recipes</h4>

        <div className="mt-6 grid lg:grid-cols-2 xl:grid-cols-3 gap-5">

           <div className="mt-6">
            {/* card goes here */}
            <div className="card hover:shadow-lg">
              <img className="w-full h-32 sm:h-48 object-cover" src={stew} alt="" />
              <div className="m-4">
                <span className="font-bold block">5 Bean Chili Stew</span>
                <span>Recipe by Mario</span>
              </div>
              <div className="badge">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>25mins</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            {/* card goes here */}
            <div className="card hover:shadow-lg">
              <img className="w-full h-32 sm:h-48 object-cover" src={noodles} alt="" />
              <div className="m-4">
                <span className="font-bold block">Ved Noodles</span>
                <span>Recipe by Luigi</span>
              </div>
              <div className="badge">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>25mins</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            {/* card goes here */}
            <div className="card hover:shadow-lg">
              <img className="w-full h-32 sm:h-48 object-cover" src={curry} alt="" />
              <div className="m-4">
                <span className="font-bold block">Tofu curry</span>
                <span>Recipe by Blue</span>
              </div>
              <div className="badge">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>25mins</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            {/* card goes here */}
            <div className="card hover:shadow-lg">
              <img className="w-full h-32 sm:h-48 object-cover" src={curry} alt="" />
              <div className="m-4">
                <span className="font-bold block">Tofu curry</span>
                <span>Recipe by Blue</span>
              </div>
              <div className="badge">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>25mins</span>
              </div>
            </div>
          </div>
        </div>

        <h4 className="font-bold mt-10 pb-2 border-b border-gray-200">Most Popular</h4>

        <div className="mt-6">
          {/* card goes here */}
        </div>

        <div className="flex justify-center">
          <button className="btn bg-gray-600 hover:bg-gray-800 text-white hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">Load more</button>
        </div>
      </div>
    </>
  )
}
