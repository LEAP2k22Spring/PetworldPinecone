import { initializeApp } from "firebase/app";
import {addDoc, arrayUnion, collection, getDocs, getFirestore} from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendSignInLinkToEmail } from "firebase/auth";
import { firebaseConfig } from "./firebaseKeyAdminPage";

const app = initializeApp(firebaseConfig);
{console.log("firebaseConfig", firebaseConfig)}

export const auth = getAuth();
const db = getFirestore()
const colRef = collection(db, 'Foods')
{console.log("data", getDocs(colRef))}

export default app
// export const addFirebaseFoods = async (foodName, foodImage, foodPrice, foodDescription, foodType, recipeAddArr)=>{
//     console.log(recipeAddArr);
//     await addDoc(colRef, {
//         name:foodName,
//         image:foodImage,
//         price:foodPrice,
//         description:foodDescription,
//         type:foodType,
//         recipe:arrayUnion(...recipeAddArr)
//         // portion:foodPortion,
//         // recipe:[...foodRecipe]
//         })
//     }
    
export const getFirebaseFoods = async () =>{
    console.log("start....");
    const docData = await collection(db, "Users");
        let queryData = await getDocs(docData);
        console.log("queryData", queryData);
    return queryData;
}




export const getSignUp = (email, password) => {
    const actionCodesettings = {
        url: 'http://localhost:3000/signup',
        handleCodeInApp: true,
    }
    try {
        sendSignInLinkToEmail(auth, email, actionCodesettings);
        alert("Sign Up Successfully")
    } catch (error) {
        // console.log(error);
    }
    return createUserWithEmailAndPassword(auth, email, password)
}
export const getLogIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

