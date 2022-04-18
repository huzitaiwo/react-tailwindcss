import { useState } from 'react'
import { firebaseAuth } from '../firebase/config'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const signup = async (email, password, disPlayName) => {
    setError(null)
    setIsPending(true)

    try {
      const res = await firebaseAuth.createUserWithEmailAndPassword(email, password)
      console.log(res.user)

      if (!res) {
        throw new Error('Colud not complete signup')
      }
    }
    catch (err) {
      console.log(err.message)
      setError(err.message)
      setIsPending(false)
    }
  }

  return { error, isPending, signup }
}