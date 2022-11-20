import { Box, Button, Grid, Typography } from "@mui/material";
import { LogoSignIn } from "./LogoSignIn";
import Login from "./signin";
import { useAuth } from "../providers/AuthProvider";
import styles from "../styles/Home.module.css";


export default function LandingPage() {
  const { logout } = useAuth();
  return (
    <Box className={styles.landing_page}>
      <Box className={styles.landing_wrapp}>
        <Box>
          {/* <LogoSignIn/> */}
        </Box>
        <Box className={styles.background_wrapp}>
          <Box className={styles.img_shape}></Box>
        </Box>
        <Box className={styles.landing_text_wrapp}>
          <Typography fontWeight={500} variant="h1">Great Your </Typography>
          <Typography fontWeight={600} variant="h1">Pet’s Profile</Typography>
          <Typography mt={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Typography>
          <Typography >
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Button sx={{mt:'40px'}} variant="contained" onClick={() => logout()}>
            Get start
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
