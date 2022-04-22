import { useReducer, useEffect, useState } from 'react'
import { firebaseFirestore } from '../firebase/config'

let initalState = {
  document: null,
  success: false,
  isPending: false,
  error: null
}

const firestoreReducer = (state, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export const useFirestore = collecion => {
  const [response, dispatch] = useReducer(firestoreReducer, initalState)
  const [isUnMounted, setIsUnMounted] = useState(false)

  //collection reference
  const ref = firebaseFirestore.collection(collecion)

  //add a document
  const addDocument = async doc => {
    
  }

  //add a document
  const deleteDocument = async id => {
    
  }

  useEffect(() => {
    return () => setIsUnMounted(true)
  }, [])

  return { addDocument, deleteDocument, response }
}