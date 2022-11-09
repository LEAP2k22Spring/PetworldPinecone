import {
  Avatar,
  Button,
  Grid,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LogoSignIn } from "./LogoSignIn";
import { useCollection } from "../firebase/useFirebase";
import Link from "next/link";
const margintop = {
  marginTop: "10px",
};
import SignUp from "./signup";

const Login = () => {
  const { userSignIn } = useCollection("Users");
  const [isClicked, setIsClicked] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  console.log("login");
  async function handleSignIn(e) {
    try {
      await userSignIn(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    !isClicked ? 
      <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={8}>
        <Box
          sx={{
            my: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LogoSignIn />
        </Box>
      </Grid>
      <Grid item xs={4} backgroundColor="#dddd">
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
              variant="contained"
              color="secondary"
              onClick={handleSignIn}
            >
              Sign in
            </Button>
          </Box>
          <Typography sx={{ textAlign: "center", marginTop: 2 }}>
            Need an account? <Button onClick={() => setIsClicked(!isClicked) }>SignUp</Button>
          </Typography>
        </Box>
      </Grid>
    </Grid> : <SignUp/>
  );
};
export default Login;
