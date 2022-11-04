import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getDocs, doc, setDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firebaseConfig } from "./firebaseKeyAdminPage";
const app = initializeApp(firebaseConfig);
const db = getFirestore()
// export default app

export const useCollection = (path) => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState();
    const colRef = collection(db, path)

    // useEffect(() => {
    //     // setLoading
    //     (async () => {
    //         try {
    //             const colRef = createRef(path)
    //             const result = await getDocs(colRef)
    //             const item = [];
    //             if (result) {
    //                 if (result) {
    //                     result.docs.forEach((doc) => {
    //                         item.push(doc.data())
    //                     })
    //                 }
    //                 setUserData(item)
    //             }
    //             console.log("data", item);
    //         } catch (error) {
    //         }
    //     })()
    // }, [])
    const getUsersData = async () => {
        const result = await getDocs(colRef)
        const item = [];
        if (result) {
            if (result) {
                result.docs.forEach((doc) => {
                    item.push(doc.data())
                })
            }
            setUserData(item)
        }
    }



    const createUserData = async (data, userId) => {
        console.log("irlee", userId)
        const userRef = doc(db, path, userId)
        await setDoc(userRef, data)
    }

    const getSignUp = async (data) => {
        const { emailAddress, password } = data
        let userId = ""
        try {
            const user = await createUserWithEmailAndPassword(auth, emailAddress, password)
            userId = user.user.uid
            console.log("GetSignUp", user.user.uid)
            alert("Sign Up Successfully")
        } catch (error) {
        }

        return userId
    }





    // const updateData = () => updateDoc
    // const deleteData = () => deleteDoc

    return { userData, loading, getUsersData, createUserData, getSignUp }
}