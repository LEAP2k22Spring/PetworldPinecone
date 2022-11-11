import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/useFirebase";
import Login from "../component/signin";
import LandingPage from "../component/landingPage";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [checking, setChecking] = useState(true);
  const [startBtnClick, setStartBtnClick] = useState(false);
  console.log("auth");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
      } else {
        setUser(false);
      }
      setChecking(false);
    });

    return () => unsubscribe();
  }, []);
  const logout = () => {
    setStartBtnClick(true);
    signOut(auth)
      .then(() => {
        console.log("Log-out success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const userSignIn = async (email, pass) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, pass);
      setUser(true);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider value={{ user, logout, userSignIn }}>
      {checking && (
        <h1
          style={{
            position: "absolute",
            zIndex: "1300",
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0,0,0,0.3)",
          }}
        >
          LOADING...
        </h1>
      )}

      {!checking && !user ? (
        startBtnClick ? (
          <Login />
        ) : (
          <LandingPage />
        )
      ) : (
        children
      )}
      {/* {!checking && user && children} */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
