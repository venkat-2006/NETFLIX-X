// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6sAwhb-ZP2qsbP6olSATeowzy7foaZ7Y",
  authDomain: "netflix-x-2cadc.firebaseapp.com",
  projectId: "netflix-x-2cadc",
  storageBucket: "netflix-x-2cadc.firebasestorage.app",
  messagingSenderId: "948827103028",
  appId: "1:948827103028:web:7217b6ded165d0223f0f61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

const signup=async(name,email,password)=>{
    try{
       const res= await createUserWithEmailAndPassword(auth,email,password);
       const user=res.user;
       await addDoc(collection(db,"user"),{
        uid: user.uid,
        name,
        authProvider:"local",
        email,
        
       });

    }catch(error){
        console.log(error);
        alert(error);

    }

}
const login=async(email,password)=>{
    try {
      await  signInWithEmailAndPassword(auth,email,password);
        
    } catch (error) {
        console.log(error);
        alert(error);
        
    }
}
const logout=()=>{
    signOut(auth);
}
export {auth,db,login,signup,logout};