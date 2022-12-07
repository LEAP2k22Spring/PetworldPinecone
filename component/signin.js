import { Button, Typography } from "@mui/material";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, userSignIn } from "../firebase/useFirebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { LogoSignIn } from "./svg/LogoSignIn";
import styles from "../styles/login.module.css";

const margintop = {
  marginTop: "10px",
};
import SignUp from "./signup";
import Image from "next/image";

const Login = () => {
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

  const login = async () => {
    const result = await signInWithPopup(auth, googleAuth);
  };
  useEffect(() => { }, [user]);

  return !isClicked ? (
    <Box className={styles.login_wrapper}>
      <Box className={styles.login_middle_wrapp}>
        <Box className={styles.login_inside}>
          <Image
            className={styles.login_top_img}
            src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/banner%20image%2Fmagic_cut.png?alt=media&token=3c6a4129-4fa4-4aa2-a5b5-74239fa6369e"
            alt="login top image"
            height={210}
            width={350}
          />
          <LogoSignIn />
          <Typography variant="h5">Login</Typography>
          <Box className={styles.login_wrapp}>
            <span>
              <input
                className={styles.balloon}
                type="text"
                placeholder=""
                ref={emailRef}
              />
              <label htmlFor="Email">Email</label>
            </span>
            <span>
              <input
                className={styles.balloon}
                type="password"
                placeholder=""
                ref={passwordRef}
              />
              <label htmlFor="password">Password</label>
            </span>
            <button className={styles.login_btn} onClick={handleSignIn}>
              Login
            </button>
            <Typography className={styles.text_google}>
              <b></b>or login with<a></a>
            </Typography>
            <button className={styles.google_button} onClick={login}>
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fgoogle-logo.png?alt=media&token=336a7af6-544a-4cc2-b881-a89be5434f32"
                alt="google sign in"
                width={20}
                height={20}
              />
              Google login
            </button>
          </Box>
          <Typography
            sx={{
              textAlign: "center",
              marginTop: 2,
              fontWeight: "400",
              fontSize: "15px",
            }}
          >
            Need an account?{" "}
            <Button sx={{ color: '#9188e5' }} onClick={() => setIsClicked(!isClicked)}>SignUp</Button>
          </Typography>
        </Box>
      </Box>
    </Box >
  ) : (
    <SignUp />
  );
};
export default Login;
