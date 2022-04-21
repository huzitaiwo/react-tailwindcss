import { useState, useEffect } from 'react'
import { firebaseAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogin = (email, password) => {
  const { dispatch } = useAuthContext()
  
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [unMounted, setUnMounted] = useState(false)

  const login = async () => {
    setError(null)
    setIsPending(true)

    // sign user out
    try {
      const res = await firebaseAuth.signInWithEmailAndPassword(email, password)

      //dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      // update states
      if (!unMounted) {
        setIsPending(false)
        setError(null)
      }
    }
    
    catch(err) {
      if (!unMounted) {
        setIsPending(false)
        setError(err.message)
        console.log(err.message)
      }
    }
  }

  useEffect(() => {
    return () => setUnMounted(true)
  }, [])

  return { login, error, isPending }

}