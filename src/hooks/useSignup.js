import { useState } from 'react'
import { firebaseAuth, firebaseStorage } from '../firebase/config'
import { useAuthContext } from './useAuthcontext'

export const useSignup = () => {
  const { dispatch } = useAuthContext()

  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const signup = async (email, password, displayName) => {
    setError(null)
    setIsPending(true)

    try {
      // sign user up
      const res = await firebaseAuth.createUserWithEmailAndPassword(email, password)

      if (!res) {
        throw new Error('Colud not complete signup')
      }

      // add displayName to user
      await res.user.updateProfile({ displayName })

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      setIsPending(false)
      setError(null)
    }
    catch (err) {
      console.log(err.message)
      setError(err.message)
      setIsPending(false)
    }
  }

  return { error, isPending, signup }
}