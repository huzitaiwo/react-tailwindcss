import { useEffect, useState } from 'react'
import { firebaseFirestore } from '../firebase/config'

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  // realtime data for document
  useEffect(() => {
    setIsPending(true)
    const ref = firebaseFirestore.collection(collection).doc(id)

    const unsubscribe = ref.onSnapshot(snapshot => {
      if (snapshot.data()) {
        setIsPending(false)
        setDocument({ ...snapshot.data(), id: snapshot.id })
        setError(null)
      }
      else {
        setError('no such document')
      }
    }, (err) => {
      setIsPending(false)
      console.log(err.message)
      setError('failed to get document')
    })

    return () => unsubscribe()

  }, [collection, id])

  return { document, error, isPending }

} 