import { useAuthContext } from '../hooks/useAuthContext'
import { useCollection } from '../hooks/useCollection'

//images
// import curry from '../assets/curry.jpg'
// import noodles from '../assets/noodles.jpg'
// import stew from '../assets/stew.jpg'
import bakedSalmon from '../assets/baked_salmon_with_cherry_tomatoes.jpg'
import bangersMash from  '../assets/bangers_and_mash.jpg'
import chessBurger from '../assets/cheeseburger.jpg'
import chichagoPizza from '../assets/chicago-style_pizza.jpg'
import cottagePie from '../assets/cottage_pie.jpg'
import delmonicoSteak from '../assets/Delmonico_steak.jpg'
import fishChips from '../assets/fish_and_chips.jpg'
import freshSalad from '../assets/fresh_salad_and_appetizers.jpg'
import englishBreakefast from '../assets/full_english_breakfast.jpg'
import grilledVegetables from '../assets/grilled_vegetables_with_mushrooms.jpg'
import mapleGlazedTurkey from '../assets/maple_glazed_turkey_dinner.jpg'
import nachos from '../assets/nachos.jpg'
import hillyCheeseSteak from '../assets/philly_cheese_steak.jpg'
import reubenSandwich from '../assets/reuben_sandwich.jpg'
import steakKidney from '../assets/steak_and_kidney_pie.jpg'
import sundayRoast from '../assets/sunday_roast.jpg'
import toadHole from '../assets/toad_in_the_hole.jpg'

//components
import Card from '../components/Card'
import Header from '../components/Header'

export default function Home() {
  const { user } = useAuthContext()
  const { documents, isPending, error } = useCollection('meals')

  // uid = {user.id}

  if (error) {
    return <h2>{error}</h2>
  }
  if(isPending) {
    return <h2>loading...</h2>
  }

  return (
    <>
      <Header />
      <div>
        <h2 className="text-gray-700 text-5xl font-semibold">Recipes</h2>
        <h3 className="text-2xl font-semibold">For Ninjas</h3>
      </div>
      <div>
        <h4 className="font-bold mt-10 pb-2 border-b border-gray-200">Latest Meals</h4>

        <div className="mt-6 grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
        
        </div>

        <h4 className="font-bold mt-10 pb-2 border-b border-gray-200">Most Popular</h4>

        <div className="mt-6 grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {/* card goes here */}
          {documents && documents.map(meal => (
            <Card meal={meal} />
          ))}
          {/* <Card src={bakedSalmon} name='Baked Salmon with cherry tomatoes' />
          <Card src={bangersMash} name='Bangers and Mash' />
          <Card src={chessBurger} name='Cheese Burger' />
          <Card src={chichagoPizza} name='Chichago Pizza' />
          <Card src={cottagePie} name='Cottage Pie' />
          <Card src={delmonicoSteak} name='Delmonico Steak' />
          <Card src={fishChips} name='Fish and Chips' />
          <Card src={freshSalad} name='Fresh Salad and Appetizers' />
          <Card src={englishBreakefast} name='English Breakfast' />
          <Card src={grilledVegetables} name='Grilled Vegetables with Mushrooms' />
          <Card src={mapleGlazedTurkey} name='Maple Glazed Turkey' />
          <Card src={nachos} name='Nachos' />
          <Card src={hillyCheeseSteak} name='Hilly Cheese Steak' />
          <Card src={reubenSandwich} name='Reuben Sandwich' />
          <Card src={steakKidney} name='Steak and Kidney Pie' />
          <Card src={sundayRoast} name='Sunday Roast' />
          <Card src={toadHole} name='Toad in the Hole' /> */}
        </div>

        <div className="flex justify-center mt-16">
          <button className="btn bg-gray-600 hover:bg-gray-800 text-white hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">Load more</button>
        </div>
      </div>
    </>
  )
}
