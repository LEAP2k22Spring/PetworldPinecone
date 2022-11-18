import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useGetUsersDataContext } from '../context/UsersDataContext';
import { useGetPostsDataContext } from '../context/PostsDataContext';
import { useEffect, useState } from 'react';
import { firebaseConfig } from './firebaseKeyAdminPage';
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
  setDoc,
  onSnapshot,
  limit,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

// import { db, app } from "../firebase.config";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

export const useFirebase = (path) => {
  const { getUsersData, setGetUsersData } = useGetUsersDataContext();

  // 1) get any single document data
  const getSingleData = async (id) => {
    const docRef = doc(db, path, id);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getMultipleData = async (sortField, id) => {
    try {
      const q = query(
        collection(db, path),
        where(sortField, "==", id),
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
    } catch (error) {
      console.log(error.message);
    }
  };

  // 2)
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
  // 3)
  const createPetData = async (data) => {
    try {
      await addDoc(collection(db, path), {
        ...data,
        createdAt: serverTimestamp(),
      });
      return true;
    } catch (error) {
      console.log('error from firebase', error);
      return false;
    }
  };

  //4) Update document
  const updateData = async (data, id) => {
    const docRef = doc(db, path, id);

    try {
      await updateDoc(docRef, {
        ...data,
      });
      return true;
    } catch (error) {
      console.log('error from firebase', error);
      return false;
    }
  };
  //5) Delete document
  const deleteData = async (id) => {
    const docRef = doc(db, path, id);

    try {
      await deleteDoc(docRef);
      return true;
    } catch (error) {
      console.log('error from firebase', error);
      return false;
    }
  };

  

  return {
    getSingleData,
    imageUploadToFirestore,
    createPetData,
    getMultipleData,
    updateData,
    deleteData,
  };
};

export const useCollection = (path) => {
  const { postsData, setPostsData } = useGetPostsDataContext();

  const [loading, setLoading] = useState();
  const { getUsersData, setGetUsersData } = useGetUsersDataContext();
  const colRef = collection(db, path);

  // useEffect(() => {
  //   // setLoading
  //   (async () => {
  //     try {
  //       //   const colRef = createRef(path)
  //       const result = await getDocs(colRef);
  //       const item = [];
  //       if (result) {
  //         if (result) {
  //           result.docs.forEach((doc) => {
  //             item.push(doc.data());
  //           });
  //         }
  //         setUserData(item);
  //       }
  //     } catch (error) {}
  //   })();
  // }, []);
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
  const getUsersDatabase = async (id) => {
    const docRef = doc(colRef, id);
    const docSnap = await getDoc(docRef);
    const result = docSnap.data();
    if (result) {
      setGetUsersData({ ...result, userId: id });
    }
  };

  const createUserData = async (data, userId) => {
    try {
      await setDoc(doc(db, path, userId), { ...data, avatar: "" });
    } catch (error) {
      console.log('error', error);
    }
  };

  const createPetData = async (data) => {
    try {
      await addDoc(collection(db, 'Pets'), data);
    } catch (error) {
      console.log('error', error);
    }
  };

  const createUser = async (data) => {
    const { emailAddress, password } = data;
    let userId = '';
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
    let userId = '';
    try {
      const user = await signInWithEmailAndPassword(auth, email, pass);
      userId = user.user.uid;
      getUsersDatabase(userId);
      alert('Sign in Success');
    } catch (error) {
      console.log(error);
    }
  };

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

  // create Post add Firebase
  const createPost = async (data) => {
    try {
      await addDoc(collection(db, 'Posts'), {
        userID: getUsersData.userId,
        ...data,
        createdAt: serverTimestamp(),
      });
      return true;
    } catch (error) {
      console.log('error from firebase', error);
      return false;
    }
  };

  const userDataPost = async (path, id) => {
    const docRef = doc(collection(db, path), id);
    const docSnap = await getDoc(docRef);
    const result = docSnap.data();
    return result;
  };

  // get Post data from Firebase
  // const getFireabasePostsData = async (postPath) => {
  //   try {
  //     const result = await getDocs(collection(db, "Posts"));
  //     const item = [];
  //     const postData = [];
  //     if (result) {
  //       console.log("result", result);
  //       for (let doc of result.docs) {
  //         const results = await userDataPost("Users", doc.data().userID)
  //         item.push({ ...doc.data(), userName: results.firstName, userAvatar: results.avatar });
  //       }
  //       console.log(item);
  //       console.log(item.length);
  //       setPostsData(item);
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  const getFireabasePostsData = async (postPath) => {
    try {
      let item = [];
      const id = "";
      const q = query(
        collection(db, "Posts"),
        orderBy("createdAt", "desc"),
        limit(5)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot) {
        for (let doc of querySnapshot.docs) {
          const results = await userDataPost("Users", doc.data().userID);
          item.push({
            ...doc.data(),
            userName: results.firstName,
            userAvatar: results.avatar,
            id: doc.id,
          });
        }
        setPostsData(item);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // image upload Component Firebase
  return {
    loading,
    createUserData,
    createUser,
    createPetData,
    userSignIn,
    createPost,
    imageUploadToFirestore,
    getFireabasePostsData,
    getUsersDatabase,
  };
};
// const updateData = () => updateDoc
// const deleteData = () => deleteDoc
