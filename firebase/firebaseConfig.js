import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseKeyAdminPage";
import { addDoc, arrayUnion, collection, deleteDoc, getDocs, getFirestore } from 'firebase/firestore'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendSignInLinkToEmail, getAuth } from "firebase/auth";
import { useEffect } from "react";
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const colRef = collection(db, "Users");
const petRef = collection(db, "Pets");

export const auth = getAuth(app);
export default app
export const addFirebaseUser = async (firstName, lastName, gender, phoneNumber, dateOfBirth, cityName, emailAddress) => {
    console.log("start...", firstName);
    try {
        const result = await addDoc(colRef, {
            firstname: firstName,
            lastname: lastName,
            gender: gender,
            phoneNumber: phoneNumber,
            dateofbirth: dateOfBirth,
            cityName: cityName,
            email: emailAddress
        })
        console.log("result", result);
    } catch (error) {
        console.log(error.message);
    }
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

export const getSignUp = async (data) => {
    const { emailAddress, password, firstName, lastName, gender, phoneNumber, dateOfBirth, cityName } = data
    const actionCodesettings = {
        url: 'http://localhost:3000/signup',
        handleCodeInApp: true,
    }
    try {
        const user = await createUserWithEmailAndPassword(auth, emailAddress, password)
        console.log("user created", user.user.uid)
        // sendSignInLinkToEmail(auth, emailAddress, actionCodesettings);
        addFirebaseUser(firstName, lastName, gender, phoneNumber, dateOfBirth, cityName, emailAddress)
        alert("Sign Up Successfully")
    } catch (error) {
        // console.log(error);
    }
    // return createUserWithEmailAndPassword(auth, emailAddress, password)
}
export const getLogIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}



