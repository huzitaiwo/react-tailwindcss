import { useState, useRef } from 'react'
import { useFirestore } from '../hooks/useFirestore'

//components
import Header from '../components/Header'

export default function Create() {
  const { addDocument, response } = useFirestore('meals')

  const [name, setName] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [method, setMethod] = useState('')
  const [newMethod, setNewMethod] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const ingredientInput = useRef(null)
  const methodInput = useRef(null)
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)

  const handleAddIngredient = e => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if(ing) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }

  const handleAddMethod = e => {
    e.preventDefault()
    const mtd = newMethod.trim()

    if(mtd) {
      setMethod(prevMethods => [...prevMethods, mtd])
    }
    setNewMethod('')
    methodInput.current.focus()
  }

  const handleFileChange = e => {
    setThumbnail(null)

    let file = e.target.files[0]

    if (!file) {
      setThumbnailError('Please select an image file')
      return
    }
    if (!file.type.includes('image')) {
      setThumbnailError('Selected file must be an image')
      return
    }
    if (file.size > 1000000) {
      setThumbnailError('Image file size must be less than 1MB')
      return 
    }

    setThumbnailError(null)
    setThumbnail(file)
  }

  const handleSubmit = e => {
    e.preventDefault()
    addDocument({name, ingredients, method, cookingTime})
  }

  return (
    <div>
      <Header />
      <div className='p-2 md:p-6'>
        <form onSubmit={handleSubmit}>
            <h2 className='text-2xl font-bold mb-6 pb-3 border-b border-gray-200'>Add a Meal</h2>

            <label className='block mb-5'>
              <span className='block mb-2'>Meal name:</span>
              <input className='input'
                type="text"
                onChange={e => setName(e.target.value)}
                value={name}
              />
            </label>

            <label className='block mb-5'>
              <span className='block mb-2'>Cooking time:</span>
              <input className='input' 
                type="number"
                onChange={e => setCookingTime(e.target.value)}
                value={cookingTime}
              />
            </label>

            <label className='block mb-5'>
              <span className='block mb-2'>Meal ingredients</span>
              <div className="flex items-center">
                <input className='input'
                type="text"
                onChange={e => setNewIngredient(e.target.value)}
                value={newIngredient}
                ref={ingredientInput}
                />
                <button className='btn authBtn ml-2' onClick={handleAddIngredient}>add</button>
              </div>
            </label>
            <p className='text-xs mb-5'>Current ingredients: {ingredients && ingredients.map(i => <em key={i}>{i}, </em>)}</p>

            <label className='block mb-5'>
              <span className='block mb-2'>Methods</span>
              <div className="flex items-center">
                <input className='input'
                  type="text" 
                  onChange={e => setNewMethod(e.target.value)}
                  value={newMethod}
                  ref={methodInput}
                />
                <button className='btn authBtn ml-2' onClick={handleAddMethod}>add</button>
              </div>
            </label>
            <p className='text-xs mb-5'>Current method: {method && method.map(i => <em key={i}>{i}, </em>)}</p>

            <label className='block mb-5'>
              <span className='block mb-2'>profile thumbnail:</span>
              <input className='input bg-gray-50'
                required 
                type="file"
                onChange={handleFileChange}
              />
              {thumbnailError && <div className='error'>{thumbnailError}</div>}
            </label>


            <div className='mt-5'>
              <button className="btn authBtn">Create</button>
            </div>
            </form>
        </div>
    </div>
  )
}
