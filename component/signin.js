import {
  Avatar,
  Button,
  Grid,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/useFirebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { LogoSignIn } from "./svg/LogoSignIn";
import { useCollection } from "../firebase/useFirebase";
import Styles from '../styles/Home.module.css'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

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
    <Grid className={Styles.login_wrapper} container component="main" sx={{ height: "100vh" }}>
      <Grid item xs={8}>
        <Box
          sx={{
            my: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          
        </Box>
      </Grid>
      <Grid item xs={4} backgroundColor="#dddd"  className={Styles.login_inside}>
        <Box
          sx={{
            my: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LogoSignIn />
          <Typography variant="h5">Sign In</Typography>
          <Box sx={{ width: "50%" }}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                height: "8vh",
                alignItems: "center",
              }}
            >
              <InputBase
                fullWidth
                placeholder="Username"
                required
                inputRef={emailRef}
                sx={{
                  borderRadius: "40px",
                  height: "5vh",
                  padding: 2,
                  backgroundColor: "#EEEBEB",
                  color: "#000",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                height: "8vh",
                alignItems: "center",
              }}
            >
              <InputBase
                fullWidth
                placeholder="Password"
                required
                type="password"
                inputRef={passwordRef}
                sx={{
                  borderRadius: "40px",
                  height: "5vh",
                  padding: 2,
                  backgroundColor: "#EEEBEB",
                  color: "#000",
                }}
              />
            </Box>

            <Button
              sx={{ ...margintop, backgroundColor: "buttonColor.main" }}
              fullWidth
              variant="outlined"
              onClick={handleSignIn}
            >
              Sign in
            </Button>
            <Button
              sx={{ ...margintop, backgroundColor: "buttonColor.main" }}
              fullWidth
              variant="outlined"
              onClick={login}>
              <Image src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fgoogle-logo.png?alt=media&token=336a7af6-544a-4cc2-b881-a89be5434f32"
              alt="google sign in"
              width={20}
              height={20}
              />
              Google login
            </Button>
          </Box>
          <Typography sx={{ textAlign: "center", marginTop: 2 }}>
            Need an account?{" "}
            <Button onClick={() => setIsClicked(!isClicked)}>SignUp</Button>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  ) : (
    <SignUp />
  );
};
export default Login;
