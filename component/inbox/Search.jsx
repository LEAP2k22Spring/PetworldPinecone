/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { auth, db } from "../../firebase/useFirebase";
import { useAuth } from "../../providers/AuthProvider";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser, userData } = useAuth();

  const handleSearch = async () => {
    const q = query(
      collection(db, "Users"),
      where("firstName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser({ ...doc.data(), uid: doc.id });
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    console.log('selUser: ', user)
    console.log('curUser: ', auth?.currentUser?.uid)
    const combinedId =
      auth?.currentUser?.uid > user?.uid
        ? auth?.currentUser?.uid + user?.uid
        : user?.uid + auth?.currentUser?.uid;
    try {
      const res = await getDoc(doc(db, "Chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "Chats", combinedId), { messages: [] });
        console.log("1: " + auth?.currentUser?.uid)
        //create user chats
        await updateDoc(doc(db, "UserChats", auth?.currentUser?.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            firstName: user?.firstName,
            photoURL: user?.avatar,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        console.log("2: " + auth?.currentUser?.uid)
        console.log("2: " + user?.uid)
        console.log(userData)
        await updateDoc(doc(db, "UserChats", user?.uid), {
          [combinedId + ".userInfo"]: {
            uid: auth?.currentUser?.uid,
            firstName: userData.firstName,
            photoURL: userData.avatar,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        console.log("3: " + auth?.currentUser?.uid)
        console.log("3: " + user?.uid)

      }
    } catch (err) { console.log(err) }
    setUser(null);
    setUsername("")
  };
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user?.avatar} alt="" />
          <div className="userChatInfo">
            <span>{user.firstName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
