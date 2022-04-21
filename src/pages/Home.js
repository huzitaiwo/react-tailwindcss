//images
import curry from '../assets/curry.jpg'
import noodles from '../assets/noodles.jpg'
import stew from '../assets/stew.jpg'
import bakedSalmon from '../assets/baked_salmon_with_cherry_tomatoes.jpg'
import bangersMash from  '../assets/bangers_and_mash.jpg'
import chessBurger from '../assets/cheeseburger.jpg'
import chichagoPizza from '../assets/chicago-style_pizza.jpg'
import cottagePie from '../assets/cottage_pie.jpg'

//components
import Card from '../components/Card'
import Header from '../components/Header'

export default function Home() {

  return (
    <>
      <Header />
      <div>
        <h2 className="text-gray-700 text-5xl font-semibold">Recipes</h2>
        <h3 className="text-2xl font-semibold">For Ninjas</h3>
      </div>
      <div>
        <h4 className="font-bold mt-10 pb-2 border-b border-gray-200">Latest Recipes</h4>

        <div className="mt-6 grid lg:grid-cols-2 xl:grid-cols-3 gap-5">

          <Card src={stew} name='Tofu curry' owner='Mario' />

          <Card src={noodles} name='Ved Noodles' owner='Luigi' />

          <Card src={curry} name='Tofu curry' owner='Blue' />
        
        </div>

        <h4 className="font-bold mt-10 pb-2 border-b border-gray-200">Most Popular</h4>

        <div className="mt-6 grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {/* card goes here */}
          <Card src={bakedSalmon} name='Baked Salmon with cherry tomatoes' />
          <Card src={curry} />
          <Card src={curry} />
          <Card src={curry} />
          <Card src={curry} />
          <Card src={curry} />
          <Card src={curry} />
          <Card src={curry} />
          <Card src={curry} />
          <Card src={curry} />
          <Card src={curry} />
          <Card src={curry} />
          <Card src={curry} />
          <Card src={curry} />
          <Card src={curry} />
          <Card src={curry} />
          <Card src={curry} />
          <Card src={curry} />
        </div>

        <div className="flex justify-center mt-16">
          <button className="btn bg-gray-600 hover:bg-gray-800 text-white hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">Load more</button>
        </div>
      </div>
    </>
  )
}
