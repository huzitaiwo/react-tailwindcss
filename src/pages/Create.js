import { useState, useRef } from 'react'
import Header from '../components/Header'

export default function Create() {
  const [name, setName] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [method, setMethod] = useState('')
  const [newMethod, setNewMethod] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const ingredientInput = useRef(null)
  const methodInput = useRef(null)


  const handleSubmit = e => {
    e.preventDefault()
    console.log(name, ingredients, method, cookingTime)
  }

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

  return (
    <div className='w-full'>
      <Header />
      <div className='flex justify-center'>
        <form onSubmit={handleSubmit}>
            <h2 className='text-2xl font-bold mb-4'>Add a Meal</h2>

            <label className='block mb-5 w-full'>
              <span className='block mb-2'>Meal name:</span>
              <input className='block px-2 py-1' 
                type="text"
                onChange={e => setName(e.target.value)}
                value={name}
              />
            </label>

            <label className='block mb-5 w-full'>
              <span className='block mb-2'>Cooking time:</span>
              <input className='block px-2 py-1' 
                type="number"
                onChange={e => setCookingTime(e.target.value)}
                value={cookingTime}
              />
            </label>

            <label className='block mb-5 w-full'>
              <span>Methods</span>
              <div className="flex items-center">
                <input 
                type="text" className='block px-2 py-1'
                onChange={e => setNewMethod(e.target.value)}
                value={newMethod}
                ref={methodInput}
                />
                <button className='btn authBtn' onClick={handleAddMethod}>add</button>
              </div>
            </label>
            <p className='text-xs mb-5'>Current method: {method && method.map(i => <em key={i}>{i}, </em>)}</p>

            <label className='block mb-5 w-full'>
              <span>Meal ingredients</span>
              <div className="flex items-center">
                <input 
                type="text"
                onChange={e => setNewIngredient(e.target.value)}
                value={newIngredient}
                ref={ingredientInput}
                />
                <button className='btn authBtn' onClick={handleAddIngredient}>add</button>
              </div>
            </label>
            <p className='text-xs'>Current ingredients: {ingredients && ingredients.map(i => <em key={i}>{i}, </em>)}</p>
            
            {/* {error && <div className="error">{error}</div>} */}
            {/* {isPending && <button className="btn authBtn">loging in...</button>} */}
            <button className="btn authBtn">Create</button>
            </form>
        </div>
    </div>
  )
}
