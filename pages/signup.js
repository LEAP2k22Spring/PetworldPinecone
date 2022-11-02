import {
  Avatar,
  Button,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import { getSignUp } from "../firebase/firebaseConfig";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Link from "next/link";
const margintop = {
  marginTop: "10px",
};

const SignUp = () => {
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
 

  // const handleSignUp = (e) => {
  //   e.preventDefault();
  //   if (passwordRef.current.value !== passwordConfirmRef.current.value) {
  //     return setError("Password do not match");
  //   }
  //   setError("");
  //   getSignUp(emailRef.current.value, passwordRef.current.value);
  // };
  // const currentURL = window.location.href
  // console.log(currentURL);
  return (
    <Box 
      sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Avatar sx={{ m: 1, bgcolor: 'adminColor.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h5">Sign In</Typography>
      <Box sx={{width:'30%'}}>
        <Box sx={{display:'flex', gap:2, height:"8vh", alignItems:'center'}}>
              <InputBase
                  fullWidth="true"
                  placeholder="First Name"
                  required
                  inputRef={emailRef}
                  sx={{borderRadius:'40px', height:"5vh", padding:2, backgroundColor:'#EEEBEB', color:'#000'}}
                />
                <InputBase
                  fullWidth
                  placeholder="Last Name"
                  required
                  inputRef={emailRef}
                  sx={{borderRadius:'40px', height:"5vh", padding:2, backgroundColor:'#EEEBEB', color:'#000'}}
                />
        </Box>
        <Box sx={{display:'flex', gap:2, height:"8vh", alignItems:'center'}}>
              <InputBase
                  fullWidth="true"
                  placeholder="Email"
                  required
                  inputRef={emailRef}
                  sx={{borderRadius:'40px', height:"5vh", padding:2, backgroundColor:'#EEEBEB', color:'#000'}}
                />
        </Box>
        <Box sx={{display:'flex', gap:2, height:"8vh", alignItems:'center'}}>
              <InputBase
                  fullWidth="true"
                  placeholder="Password"
                  required
                  inputRef={emailRef}
                  sx={{borderRadius:'40px', height:"5vh", padding:2, backgroundColor:'#EEEBEB', color:'#000'}}
                />
        </Box>
        <Box sx={{display:'flex', gap:2, height:"8vh", alignItems:'center'}}>
              <InputBase
                  fullWidth="true"
                  placeholder="Confirm Password"
                  required
                  inputRef={emailRef}
                  sx={{borderRadius:'40px', height:"5vh", padding:2, backgroundColor:'#EEEBEB', color:'#000'}}
                />
        </Box>
            <Button
              sx={{...margintop, backgroundColor:'#428730', height:"5vh", borderRadius:"40px" }}
              fullWidth
              variant="contained"
              // onClick={handleSignUp}
            >
              Sign Up
            </Button>
              <Typography sx={{ textAlign: "center", marginTop: 2 }}>
                Already have an account? <Link href="/signin" legacyBehavior><a>Sign In</a></Link>
              </Typography>
      </Box>
    </Box>
  );
};
export default SignUp;
