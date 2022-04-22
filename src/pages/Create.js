import { useState } from 'react'

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
    <div>
      <Header />
      <form onSubmit={handleLogin}>
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

        <label>
          <span>Method</span>
          <div className="ingredients">
            <input 
              type="text"
              onChange={e => setNewMethod(e.target.value)}
              value={newMethod}
              ref={methodInput}
            />
            <button className='btn' onClick={handleAddMethod}>add</button>
          </div>
        </label>
        <p>Current method: {method && method.map(i => <em key={i}>{i}, </em>)}</p>

        <label>
          <span>Meal ingredients</span>
          <div className="ingredients">
            <input 
              type="text"
              onChange={e => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button className='btn' onClick={handleAddIngredient}>add</button>
          </div>
        </label>
        <p>Current ingredients: {ingredients && ingredients.map(i => <em key={i}>{i}, </em>)}</p>
          
        {error && <div className="error">{error}</div>}
        {isPending && <button className="btn authBtn">loging in...</button>}
        {!isPending && <button className="btn authBtn">login</button>}
        </form>
    </div>
  )
}
