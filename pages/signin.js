import { Avatar, Button, Grid, InputBase, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
// import { getLogIn } from "../firebase/firebaseConfig";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LogoSignIn } from "../component/LogoSignIn";
import Image from "next/image";
import Link from "next/link";
// import { UseUserDataContext } from "../contexts/UserDataContext";
// import { UseIsSignInContext } from "../contexts/IsSignInContext";
const margintop = {
  marginTop: "10px",
};

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const { setUserData } = UseUserDataContext();
  // const { setIsSignIn } = UseIsSignInContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  // const navigate = useNavigate();

  // async function handleSignIn(e) {
  //   // e.preventDefault();
  //   try {
  //     setError("");
  //     console.log(error);
  //     console.log(loading);
  //     setLoading(true);
  //     await getLogIn(emailRef.current.value, passwordRef.current.value);
  //     navigate("/menu");
  //     alert("Log in successful");
  //     setUserData(emailRef.current.value);
  //     setIsSignIn(true);
  //   } catch {
  //     alert("Failed to sign in");
  //     setError("Failed to sign in");
  //   }
  //   setLoading(false);
  // }
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={8}
        sx={{
          // backgroundColor: "#000723",
        }}
      >
        <Box
          sx={{
            my: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Image src={"/logo.png"} alt="Picture of the author"
          width={500}
          height={200}/> */}
          <LogoSignIn/>
        </Box>
      </Grid>
      <Grid item xs={4} backgroundColor='#dddd'>
        <Box
          sx={{
            my: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "adminColor.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">Sign In</Typography>
          <Box sx={{ width: "80%" }}>
        <Box sx={{display:'flex', gap:2, height:"8vh", alignItems:'center'}}>
          <InputBase
                  fullWidth
                  placeholder="Username"
                  required
                  inputRef={emailRef}
                  sx={{borderRadius:'40px', height:"5vh", padding:2, backgroundColor:'#EEEBEB', color:'#000'}}
                />
        </Box>

        <Box sx={{display:'flex', gap:2, height:"8vh", alignItems:'center'}}>
          <InputBase
                  fullWidth
                  placeholder="Password"
                  required
                  inputRef={emailRef}
                  sx={{borderRadius:'40px', height:"5vh", padding:2, backgroundColor:'#EEEBEB', color:'#000'}}
                />
        </Box>

            <Button
              sx={{ ...margintop, backgroundColor: "buttonColor.main" }}
              fullWidth
              variant="contained"
              color="secondary"
              // onClick={() => handleSignIn()}
            >
              Sign in
            </Button>
          </Box>
          <Typography sx={{ textAlign: "center", marginTop: 2 }}>
            Need an account? <Link href="/signup">SignUp</Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Login;