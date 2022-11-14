import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getDocs, getFirestore, doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firebaseConfig } from "./firebaseKeyAdminPage";
import { getStorage, getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { useGetUsersDataContext } from "../context/UsersDataContext";
import { useGetPostsDataContext } from "../context/PostsDataContext";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth();

export const useCollection = (path) => {
  const { setPostsData } = useGetPostsDataContext();

  const [loading, setLoading] = useState();
  const { getUsersData, setGetUsersData } = useGetUsersDataContext();
  const colRef = collection(db, path);

  const getUsersDatabase = async (Id) => {
    const docRef = doc(colRef, Id)
    const docSnap = await getDoc(docRef);
    const result = docSnap.data();
    setGetUsersData({ ...result, userId: Id })
  }

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
    } catch (error) { }

    return userId;
  };


  const userSignIn = async (email, pass) => {
    let userId = "";
    try {
      const user = await signInWithEmailAndPassword(auth, email, pass)
      userId = user.user.uid;
      getUsersDatabase(userId);
      alert("Sign in Success")
    } catch (error) {
      console.log(error)
    }
  }


  // create Post add Firebase
  const createPost = async (data) => {
    try {
      await addDoc(collection(db, "Posts"), {
        ownerName: getUsersData.firstName,
        ownerProfile: getUsersData.avatar,
        ownerID: getUsersData.userId,
        ...data,
        createdAt: serverTimestamp(),
      });
      return true;
    } catch (error) {
      console.log('error from firebase', error);
      return false;
    }
  };


  //get Post data from Firebase
  const getFireabasePostsData = async (postPath) => {
    try {
      const result = await getDocs(collection(db, "Posts"))
      const item = [];
      if (result) {
        if (result) {
          result.docs.forEach((doc) => {
            item.push(doc.data())
          })
        }
        setPostsData(item)
      }
      console.log("starting...", item);
    } catch (error) {
      console.log(error.message);
    }
  }



  // image upload Component Firebase
  const imageUploadToFirestore = async (imageData) => {
    let isImageUploaded = '';
    try {
      const storage = getStorage(app);
      const storageRef = ref(storage, 'images/' + imageData.imageName);

      await uploadBytes(storageRef, imageData.file);

      const downloadURL = await getDownloadURL(storageRef);

      isImageUploaded = true;
      //add new key (URL) to addedFood object.

      return { uploaded: isImageUploaded, url: downloadURL };
    } catch (error) {
      alert(error);
      console.log('aldaa', error.message);
      return false;
    }
  };





  // const updateData = () => updateDoc
  // const deleteData = () => deleteDoc

  return { loading, createUserData, createUser, createPetData, userSignIn, createPost, imageUploadToFirestore, getFireabasePostsData }
}