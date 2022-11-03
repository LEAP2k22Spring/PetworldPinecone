import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firebaseConfig } from "./firebaseKeyAdminPage";
const app = initializeApp(firebaseConfig);
const db = getFirestore()
// export default app

const useCollection = async (path) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState();


    useEffect(() => {
        // setLoading
        (async () => {
            try {
                const colRef = createRef(path)
                const result = await getDocs(colRef)
                const item = []; 
                if (result) {
                    if (result) {
                        result.docs.forEach((doc) => {
                            item.push(doc.data())
                        })
                    }
                    setData(item)
                }
                console.log("data", item);
            } catch (error) {
            }
        })()
    }, [])


    const createData = async (data) => await addDoc(path, data)
    const updateData = () => updateDoc
    const deleteData = () => deleteDoc

    const createRef = (path) => {
        return collection(db, path)
    }

    return { data, loading, createData, updateData, deleteData }

}
export default useCollection