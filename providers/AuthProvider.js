import { onAuthStateChanged, signOut } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth, useCollection } from '../firebase/useFirebase';
import Login from '../component/signin';
import LandingPage from '../component/landingPage';
import { useGetUsersDataContext } from '../context/UsersDataContext';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [checking, setChecking] = useState(true);
  const [startBtnClick, setStartBtnClick] = useState(false);
  const { getUsersDatabase } = useCollection('Users');
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        let userId = '';
        userId = user.uid;
        setUser(true);
        getUsersDatabase(userId);
      } else {
        setUser(false);
      }
      setChecking(false);
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = () => {
    setStartBtnClick(true);
    signOut(auth)
      .then(() => {
        console.log('Log-out success');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const userSignIn = async (email, pass) => {
    console.log('starting user sign');
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
            position: 'absolute',
            zIndex: '1300',
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(0,0,0,0.3)',
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
