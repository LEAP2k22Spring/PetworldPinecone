import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, collection, getDocs, getFirestore, doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firebaseConfig } from "./firebaseKeyAdminPage";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const auth = getAuth();

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
                result.docs.forEach((data) => {
                    item.push(data.data())
                })
            }
            setUserData(item)
        }
    }



    const createUserData = async (data, userId) => {
        console.log("irlee", userId)
        console.log("data", data)
        try {
            await setDoc(doc(db, path, userId), data)
        } catch (error) {
            console.log("error", error)
        }
    }
    const createPetData = async (data) => {
        try {
            await addDoc(collection(db, "Pets"), data)
        } catch (error) {
            console.log("error", error)
        }
    }

    const getSignUp = async (data) => {
        const { emailAddress, password } = data
        let userId = ""
        try {
            const user = await createUserWithEmailAndPassword(auth, emailAddress, password)
            userId = user.user.uid
            alert("Sign Up Successfully")
        } catch (error) {
        }

        return userId
    }





    // const updateData = () => updateDoc
    // const deleteData = () => deleteDoc

    return { userData, loading, getUsersData, createUserData, getSignUp, createPetData }
}