import {
  Button,
  InputBase,
  Typography,
} from "@mui/material";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/useFirebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { LogoSignIn } from "./svg/LogoSignIn";
import { useCollection } from "../firebase/useFirebase";
import styles from '../styles/login.module.css'

const margintop = {
  marginTop: "10px",
};
import SignUp from "./signup";
import Image from "next/image";

const Login = () => {
  const { userSignIn } = useCollection("Users");
  const [isClicked, setIsClicked] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignIn(e) {
    try {
      await userSignIn(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      console.log(error);
    }
  }
  const [user, setUser] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();

  const login = async() => {
    const result = await signInWithPopup(auth, googleAuth);
  }
  useEffect(() => {
  }, [user])

  return !isClicked ? (
    <Box className={styles.login_wrapper}>
      <Box className={styles.login_inside}>
          <LogoSignIn />
          <Typography variant="h5">Sign In</Typography>
          <Box className={styles.login_wrapp} >
              <span>
                <input className={styles.balloon}  type="text" placeholder="Email" ref={emailRef} /><label for="Email">Email</label>
              </span>
              <span>
                <input className={styles.balloon}  type="password" placeholder="Password" ref={passwordRef} /><label for="password">Password</label>
              </span>
            <button
              onClick={handleSignIn}
            >
              Sign in
            </button>
            <button
              onClick={login}>
              <Image src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fgoogle-logo.png?alt=media&token=336a7af6-544a-4cc2-b881-a89be5434f32"
              alt="google sign in"
              width={20}
              height={20}
              />
              Google login
            </button>
          </Box>
          <Typography sx={{ textAlign: "center", marginTop: 2 }}>
            Need an account?{" "}
            <Button onClick={() => setIsClicked(!isClicked)}>SignUp</Button>
          </Typography>
      </Box>
    </Box>
  ) : (
    <SignUp />
  );
};
export default Login;
