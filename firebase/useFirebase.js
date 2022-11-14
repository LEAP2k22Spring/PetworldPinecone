import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { firebaseConfig } from "./firebaseKeyAdminPage";
import {
  doc,
  getDoc,
  serverTimestamp,
  addDoc,
  collection,
  query,
  getDocs,
  orderBy,
  where,
  getFirestore,
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
// import { db, app } from "../firebase.config";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth();

export const useFirebase = (path) => {
  // 1) get any single document data
  const getSingleData = async (id) => {
    const docRef = doc(db, path, id);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getMultipleData = async (sortFIeld, id) => {
    try {
      const q = query(
        collection(db, path),
        where(sortFIeld, "==", id),
        orderBy("createdAt", "desc")
      );
      let data = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data.push({
          docId: doc.id,
          data: doc.data(),
        });
      });
      return data;
    } catch (error) {}
  };

  // 2)
  const imageUploadToFirestore = async (imageData) => {
    let isImageUploaded = "";
    try {
      const storage = getStorage(app);
      const storageRef = ref(storage, "images/" + imageData.imageName);

      await uploadBytes(storageRef, imageData.file);

      const downloadURL = await getDownloadURL(storageRef);

      isImageUploaded = true;
      //add new key (URL) to addedFood object.

      return { uploaded: isImageUploaded, url: downloadURL };
    } catch (error) {
      alert(error);
      console.log("aldaa", error.message);
      return false;
    }
  };
  // 3)
  const createPetData = async (data) => {
    try {
      await addDoc(collection(db, path), {
        ...data,
        createdAt: serverTimestamp(),
      });
      return true;
    } catch (error) {
      console.log("error from firebase", error);
      return false;
    }
  };

  // // 4)
  // const getPetData = async (petId) => {
  //   try {
  //     const docRef = doc(db, path, petId);
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       return docSnap.data();
  //     } else {
  //       // doc.data() will be undefined in this case
  //       console.log('No such document!');
  //     }
  //   } catch (error) {}
  // };
  return {
    getSingleData,
    imageUploadToFirestore,
    createPetData,
    getMultipleData,
  };
};

export const useCollection = (path) => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState();
  const colRef = collection(db, path);

  useEffect(() => {
    // setLoading
    (async () => {
      try {
        //   const colRef = createRef(path)
        const result = await getDocs(colRef);
        const item = [];
        if (result) {
          if (result) {
            result.docs.forEach((doc) => {
              item.push(doc.data());
            });
          }
          setUserData(item);
        }
      } catch (error) {}
    })();
  }, []);
  //   const getUsersData = async () => {
  //     const result = await getDocs(colRef);
  //     const item = [];
  //     if (result) {
  //       if (result) {
  //         result.docs.forEach((data) => {
  //           item.push(data.data());
  //         });
  //       }
  //       setUserData(item);
  //     }
  //     console.log("GETDATA",item);
  //   };

  const createUserData = async (data, userId) => {
    try {
      await setDoc(doc(db, path, userId), data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const createPetData = async (data) => {
    try {
      await addDoc(collection(db, "Pets"), data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const createUser = async (data) => {
    const { emailAddress, password } = data;
    let userId = "";
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        emailAddress,
        password
      );
      userId = user.user.uid;
      alert("Sign Up Successfully");
    } catch (error) {}

    return userId;
  };

  const userSignIn = async (email, pass) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, pass);
      alert("Sign in Success");
    } catch (error) {
      console.log(error);
    }
  };
  const createPost = async (data) => {
    try {
      await addDoc(collection(db, "Posts"), {
        ...data,
        createdAt: serverTimestamp(),
      });
      return true;
    } catch (error) {
      console.log("error from firebase", error);
      return false;
    }
  };
  const imageUploadToFirestore = async (imageData) => {
    let isImageUploaded = "";
    try {
      const storage = getStorage(app);
      const storageRef = ref(storage, "images/" + imageData.imageName);

      await uploadBytes(storageRef, imageData.file);

      const downloadURL = await getDownloadURL(storageRef);

      isImageUploaded = true;
      //add new key (URL) to addedFood object.

      return { uploaded: isImageUploaded, url: downloadURL };
    } catch (error) {
      alert(error);
      console.log("aldaa", error.message);
      return false;
    }
  };

  // const updateData = () => updateDoc
  // const deleteData = () => deleteDoc

  return {
    userData,
    loading,
    createUserData,
    createUser,
    createPetData,
    userSignIn,
    createPost,
    imageUploadToFirestore,
  };
};
