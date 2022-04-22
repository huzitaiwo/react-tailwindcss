import { useEffect, useState } from "react"
import { firebaseFirestore } from "../firebase/config"

export const useCollection = collection => {
  const [documents, setDocuments] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setError(null)
    setIsPending(true)

    let ref = firebaseFirestore.collection(collection)

    const unsubscribe = ref.onSnapshot(snapshot => {
      let results = []
      snapshot.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id })
      })
      setIsPending(false)
      setDocuments(results)
      setError(null)
    }, (error) => {
      setIsPending(false)
      console.log(error)
      setError('could not fetch the data')
    })

    //unsubscribe
    return () => unsubscribe()

  }, [collection])

  return { documents, isPending, error }
}