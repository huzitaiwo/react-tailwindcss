import { useState, useEffect } from 'react'
import { firebaseAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [unMounted, setUnMounted] = useState(false)

  const logout = async () => {
    setError(null)
    setIsPending(true)

    // sign user out
    try {
      await firebaseAuth.signOut()

      //dispatch logout action
      dispatch({ type: 'LOGOUT' })

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

  return { logout, error, isPending }

}