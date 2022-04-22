import { useEffect, useRef, useState } from "react"
import { firebaseFirestore } from "../firebase/config"

export const useCollection = (collection, _query) => {
  const [documents, setDocuments] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)


  //if we dont use ref --> infinite loop in useEffect
  //_query is an arry and is "different" on every function call
  const query = useRef(_query).current

  useEffect(() => {
    setError(null)
    setIsPending(true)

    let ref = firebaseFirestore.collection(collection)

    if(query) {
      ref = ref.where(...query)
    }

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

  }, [collection, query])

  return { documents, isPending, error }
}