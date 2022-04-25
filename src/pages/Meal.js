import { useParams } from 'react-router-dom'
import { useDocument } from '../hooks/useDocument'

export default function Meal() {
  const { id } = useParams
  const { document: meal, isPending, error } = useDocument()

  if (error) {
    return <h2>{error}</h2>
  }
  if(isPending) {
    return <h2>loading...</h2>
  }

  return (
    <div>
      {meal && (
        <h2>{meal.name}</h2>
      )}
    </div>
  )
}
