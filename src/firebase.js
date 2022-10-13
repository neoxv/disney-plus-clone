import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyAGz1grGpLj48jniToJAIE_PhTmTvMJlo0",
    authDomain: "disney-plus-clone-b010b.firebaseapp.com",
    projectId: "disney-plus-clone-b010b",
    storageBucket: "disney-plus-clone-b010b.appspot.com",
    messagingSenderId: "604910797712",
    appId: "1:604910797712:web:4b319f4cc64bfa97c76915",
    measurementId: "G-LS10Q3LYWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export{ auth, provider, storage}
export default db;