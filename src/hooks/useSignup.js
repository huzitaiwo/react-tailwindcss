import { useState, useEffect } from 'react'
import { firebaseAuth, firebaseStorage } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const { dispatch } = useAuthContext()

  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [unMounted, setUnMounted] = useState(false)

  const signup = async (email, password, displayName) => {
    setError(null)
    setIsPending(true)

    try {
      // sign user up
      const res = await firebaseAuth.createUserWithEmailAndPassword(email, password)

      console.log(res)

      if (!res) {
        throw new Error('Colud not complete signup')
      }

      // add displayName to user
      await res.user.updateProfile({ displayName })

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      //update states
      if (!unMounted) {
        setIsPending(false)
        setError(null)
      }
    }

    catch (err) {
      if (!unMounted) {
        console.log(err.message)
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setUnMounted(true)
  }, [])

  return { error, isPending, signup }
}