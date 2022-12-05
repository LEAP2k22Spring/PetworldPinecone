import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, useDocument, useSort } from "../firebase/useFirebase";
import Login from "../component/signin";
import LandingPage from "../component/landingPage";
import LoadingSpinner from "../component/Spinner";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  // const  = auth.currentUser;
  const [user, setUser] = useState(false);
  const [checking, setChecking] = useState(true);
  const [startBtnClick, setStartBtnClick] = useState(false);
  const { data: userData, loading } = useDocument({
    path: "Users",
    docId: auth?.currentUser?.uid,
  });
  const { data: petData } = useSort("Pets", "ownerID", auth?.currentUser?.uid);

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

  return (
    <AuthContext.Provider value={{ user, logout, userData, loading, petData }}>
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
