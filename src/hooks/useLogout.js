import { useState } from 'react'
import { firebaseAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

const useLogout = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const logout = async () => {
    setError(null)
    setIsPending(true)

    // sign user out
    try {
      await firebaseAuth.signOut()

      //dispatch logout action
      dispatch({ type: 'LOGOUT' })

      setIsPending(false)
      setError(null)

    }
    catch(err) {
        setIsPending(false)
        setError()
    }

  }

  return { logout, error, isPending }

}