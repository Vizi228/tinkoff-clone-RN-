import {  doc, updateDoc } from "firebase/firestore";
import { useMemo, useState } from "react"
import { Alert } from "react-native";
import { db } from "../../../firebase";
import { useAuth } from "../../../hooks/useAuth";


export const useUpdateProfile = (name: string, docId: string, displayName: string) => {
  const {user} = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const updateProfile = async () => {
    if(!user) return
    if(displayName === name) return
    if(name === '' || name.trim() === '') return
    setIsLoading(true)
    try {
      const docRef = doc(db, 'users', docId)
      await updateDoc(docRef, {
        displayName: name.trim()
      })
      setIsSuccess(true);

      setTimeout(() => {setIsSuccess(false)}, 3000)
    } catch (error: any) {
      Alert.alert('Error update profile', error.message)
    } finally {
      setIsLoading(false);
    }
  }
  return {isSuccess, isLoading, updateProfile}
}
