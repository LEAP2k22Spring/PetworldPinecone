import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseKeyAdminPage";
import { addDoc, arrayUnion, collection, getDocs, getFirestore } from 'firebase/firestore'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendSignInLinkToEmail, getAuth } from "firebase/auth";
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const colRef = collection(db, "Users");
export const auth = getAuth(app);
export default app
export const addFirebaseUser = async (userId, firstname, lastname, gender, email, dateofbirth, age, phone, city)=>{

    await addDoc(colRef, {
        userId: userId,
        firstname: firstname,
        lastname:lastname,
        gender:gender,
        email:email,
        dateofbirth:dateofbirth,
        age:age,
        phone:phone,
        city:city,
        })
    }

export const getFirebaseUsers = async () => {
    // const {foodsData, setFoodsData} = UseFoodsDataContext();
    const docData = await collection(db, "Users");
    let queryData = await getDocs(docData);
    const item = [];
    if (queryData) {
        queryData.docs.forEach((doc) => {
            item.push(doc.data())
        })
        // setFoodsData(item)
    }

    return item;
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

