// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore,doc,updateDoc, deleteField} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiTLonoQN6ZLM3CuzSqaakaSU93lxqZkE",
  authDomain: "contact-c246c.firebaseapp.com",
  projectId: "contact-c246c",
  storageBucket: "contact-c246c.appspot.com",
  messagingSenderId: "368846101340",
  appId: "1:368846101340:web:b29c775ee2746afab37f99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const dbref= doc(db,"users","Zc26AD7xcvh0bx6Xkvoz");

updateDoc(dbref,{
    code: deleteField()
})
.then(()=>{
    console.log("Field has been deleted successfully");
})
.catch(error =>{
    console.log(error);
})