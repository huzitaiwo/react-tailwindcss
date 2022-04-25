import { useParams } from 'react-router-dom'
import { useDocument } from '../hooks/useDocument'

export default function Meal() {
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
        <div className="flex-justify-between">
          <h2 className='text-2xl font-bold mb-6 pb-3 border-b border-gray-200 uppercase'>{meal.name}</h2>  
          <p>{meal.cookingTime} minutes to cook</p>
        </div>

        <div className="mb-6">
          <h3 className='text-xl font-bold mb-3'>Ingredients</h3>
          {meal.ingredients.map((ingredient, i) => (
            <p className='pb-2' key={i}>{ingredient}</p>
          ))}
        </div>

        <div className="mb-6">
          <h3 className='text-xl font-bold mb-3'>Method</h3>
          {meal.method.map((mtd, i) => (
            <p className='pb-2 text-justify' key={i}>{mtd}</p>
          ))}
        </div>
        </>
      )}
    </div>
  )
}
