import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCcHRx5GFE5xRZnsDP-5bTJa1LI7IHfOZY",
  authDomain: "voypost-test-63b82.firebaseapp.com",
  databaseURL: "https://voypost-test-63b82-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "voypost-test-63b82",
  storageBucket: "voypost-test-63b82.appspot.com",
  messagingSenderId: "254930977894",
  appId: "1:254930977894:web:d892d910584958081059a7",
  measurementId: "G-P34BRSKG77"
};

initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(auth, email, password);
}
export const login = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
}
export const logout = async () => {
  await signOut(auth);
}

export const db = getFirestore();