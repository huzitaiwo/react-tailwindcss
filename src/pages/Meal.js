import { useParams, useNavigate } from 'react-router-dom'
import { useDocument } from '../hooks/useDocument'

export default function Meal() {
  const Navigate = useNavigate()
  const { id } = useParams()
  const { document: meal, isPending, error } = useDocument('meals', id)

  if (error) {
    return <h2>{error}</h2>
  }
  if(isPending) {
    return <h2>loading...</h2>
  }

  return (
    <div>
      {meal && (
        <>
        <div className="md:flex items-center mb-6 pb-3 border-b border-gray-200 ">
        <button onClick={() => Navigate('/')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
        </button>
          <h2 className='text-2xl font-bold uppercase mr-auto'>{meal.name}</h2>  
          <p>{meal.cookingTime} minutes to cook</p>
        </div>

        <img className='w-full h-40 md:h-80 object-cover' src={meal.photoURL} alt={meal.name}/>

        <div className="mb-6">
          <h3 className='text-xl font-bold mb-3'>Ingredients</h3>
          {meal.ingredients && meal.ingredients.map((ingredient, i) => (
            <p className='pb-2' key={i}>{ingredient}</p>
          ))}
        </div>

        <div className="mb-6">
          <h3 className='text-xl font-bold mb-3'>Steps to make it</h3>
          {meal.method && meal.method.map((mtd, i) => (
            <p className='pb-2 text-justify' key={i}>{mtd}</p>
          ))}
        </div>
        </>
      )}
    </div>
  )
}
