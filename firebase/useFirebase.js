import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
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
} from 'firebase/firestore';
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage';

// import { db, app } from "../firebase.config";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

export const useFirebase = (path) => {
  const [data, setPetData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        let item = [];
        const q = query(
          collection(db, path),
          orderBy('createdAt', 'desc')
          // limit(5)
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot) {
          for (let doc of querySnapshot.docs) {
            item.push({
              ...doc.data(),
              id: doc.id,
            });
          }
          setPetData(item);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [path]);

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
    data,
    loading,
    imageUploadToFirestore,
    updateData,
    deleteData,
  };
};

export const useCollection = (collectionName, docId) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [snapData, setSnapData] = useState();

  useEffect(() => {
    if (docId) {
      (async () => {
        try {
          setLoading(true);
          const docRef = doc(db, collectionName, docId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setData(docSnap.data());
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.log(error.message);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [collectionName, docId]);

  //real time update listener
  useEffect(() => {
    const colRef = collection(db, collectionName);
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      let result = [];
      snapshot.docs.forEach((doc) => {
        result.push({ ...doc.data() });
      });
      setSnapData(result);
    });
    return () => unsubscribe();
  }, [collectionName]);

  const getData = async (docId) => {
    try {
      setLoading(true);
      const docRef = doc(db, collectionName, docId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const createData = (userId, data) =>
    setDoc(doc(db, collectionName, userId), data);
  // const updateData = (data) => updateDoc(doc(db, collectionName, docId), data);

  const createUserData = async (userId, data) => {
    try {
      await setDoc(doc(db, collectionName, userId), data);
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
      alert('Sign Up Successfully');
    } catch (error) {}

    return userId;
  };

  // image upload Component Firebase
  return {
    snapData,
    data,
    loading,
    getData,
    createUserData,
    createUser,
    createData,
  };
};

export const useSubCollection = (collectionName, docId, subCollection) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, collectionName, docId, subCollection),
      (snapshot) => {
        setData(snapshot.docs);
      }
    );
    return () => unsubscribe();
  }, [collectionName, docId, subCollection]);

  const updateData = (subId, data) =>
    setDoc(doc(db, collectionName, docId, subCollection, subId), data);
  const createData = (subId, data) =>
    addDoc(collection(db, collectionName, docId, subCollection), data);

  const deleteData = (subId) =>
    deleteDoc(doc(db, collectionName, docId, subCollection, subId));
  return { data, updateData, createData, deleteData };
};

export const userSignIn = async (email, pass) => {
  let userId = '';
  try {
    const user = await signInWithEmailAndPassword(auth, email, pass);
    userId = user.user.uid;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // getUsersDatabase(useCollection("Users", userId));
    alert('Sign in Success');
  } catch (error) {
    console.log(error);
  }
};

export const useSort = (path, sortField, id) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const q = query(
            collection(db, path),
            where(sortField, '==', id),
            orderBy('createdAt', 'desc')
          );
          const result = [];
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            result.push({
              docId: doc.id,
              data: doc.data(),
            });
          });
          setData(result);
        } catch (error) {
          console.log(error.message);
        }
      })();
    }
  }, [id, path, sortField]);
  return { data };
};

export const useDocument = ({ path, docId }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (docId) {
      (async () => {
        setLoading(true);
        const docRef = doc(db, path, docId);
        try {
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setData(docSnap.data());
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [path, docId]);
  const updateData = (data) => setDoc(doc(db, path, docId), data);
  const createData = (data) => addDoc(collection(db, path), data);
  const deleteData = (docId) => deleteDoc(doc(db, path, docId));

  return { data, loading, updateData, createData, deleteData };
};

export const imageUploadToFirestore = async (imageData) => {
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

export const useCollection1 = (collectionName) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (snapshot) => {
        setData(snapshot.docs);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, [collectionName]);

  const updateData = (docId, data) =>
    setDoc(doc(db, collectionName, docId), data);
  const createData = (data) => addDoc(collection(db, collectionName), data);

  const deleteData = (docId) => deleteDoc(doc(db, collectionName, docId));
  return { data, loading, updateData, createData, deleteData };
};
