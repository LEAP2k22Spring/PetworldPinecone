import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, useDocument } from "../firebase/useFirebase";
import Login from "../component/signin";
import LandingPage from "../component/landingPage";
import LoadingSpinner from "../component/Spinner";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isUser, setUser] = useState(false);
  const [checking, setChecking] = useState(true);
  const [startBtnClick, setStartBtnClick] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const { data: userData, loading } = useDocument({
    path: "Users",
    docId: auth?.currentUser?.uid,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
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

  return (
    <AuthContext.Provider
      value={{ currentUser, isUser, logout, userData, loading }}
    >
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
            background: "#fff",
            color: "#000",
          }}
        >
          <LoadingSpinner open={true} color="#000" />
        </h1>
      )}

      {!checking && !isUser ? (
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
