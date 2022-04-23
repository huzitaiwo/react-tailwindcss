import { useReducer, useEffect, useState } from 'react'
import { firebaseFirestore, timestamp } from '../firebase/config'

let initalState = {
  document: null,
  success: false,
  isPending: false,
  error: null
}

const firestoreReducer = (state, action) => {
  switch(action.type) {
    case 'IS_PENDING':
      return { document: null, success: false, isPending: true, error: null }
    case 'ERROR':
      return { document: null, success: false, isPending: false, error: action.payload }
    case 'ADDED_DOCUMENT':
      return { document: action.payload, success: true, isPending: false, error: null }
    default:
      return state
  }
}

export const useFirestore = collecion => {
  const [response, dispatch] = useReducer(firestoreReducer, initalState)
  const [isUnMounted, setIsUnMounted] = useState(false)

  //collection reference
  const ref = firebaseFirestore.collection(collecion)

  const dispatchIfNotUnMounted = action => {
    if(!isUnMounted) {
      dispatch(action)
    }
  }

  //add a document
  const addDocument = async doc => {
    dispatch({ type: 'IS_PENDING', })

    try {
      const createdAt = timestamp.fromDate(new Date())
      const addedDocument = await ref.add({ ...doc, createdAt })
      dispatchIfNotUnMounted({ type: 'ADDED_DOCUMENT', payload: addedDocument })
    }
    catch(err) {
      dispatchIfNotUnMounted({ type: 'ERROR', payload: err })
    }
  }

  //add a document
  const deleteDocument = async id => {
    
  }

  useEffect(() => {
    return () => setIsUnMounted(true)
  }, [])

  return { addDocument, deleteDocument, response }
}