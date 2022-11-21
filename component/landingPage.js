import { Box, Button, Grid, Typography } from "@mui/material";
import { LogoSignIn } from "./svg/LogoSignIn";
import Login from "./signin";
import { useAuth } from "../providers/AuthProvider";
import styles from "../styles/Home.module.css";
import PetsIcon from '@mui/icons-material/Pets';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ChatIcon from '@mui/icons-material/Chat';
import SportsIcon from '@mui/icons-material/Sports';
import { Shape1 } from "./svg/Shape1";
import Image from "next/image";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';



export default function LandingPage() {
  const { logout } = useAuth();
  return (
    <Box className={styles.landing_page}>
      <Box className={styles.landing_wrapp}>
        <Box className={styles.landing_text_wrapp}>
          <Typography fontWeight={500} variant="h1">Great Your </Typography>
          <Typography fontWeight={600} variant="h1">Pet’s Profile</Typography>
          <Typography sx={{width:'80%'}} mt={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Button sx={{mt:'40px'}} variant="contained" onClick={() => logout()}>
            Get start
          </Button>
        </Box>
        <Box>
          {/* <LogoSignIn/> */}
        </Box>
        <Box className={styles.background_wrapp}>
          <Box className={styles.img_shape}><small></small>
              
              
            <Box className={styles.circle_shape}><PetsIcon/></Box>
            <Box className={styles.care_shape}>
              <HealthAndSafetyIcon className={styles.icon_care}/><p></p><b>Pets care</b><span>Dog & Cats & Other</span>
            </Box>
            <Box className={styles.inbox_shape}>
              <ChatIcon className={styles.icon_chat}/><p></p><b>Group chat</b><span>Communication</span>
            </Box>
            <Box className={styles.walking_shape}>
              <SportsIcon className={styles.icon_training}/>
              <p></p><b>Pet training</b><span>Dog & Cats & Other</span>
            </Box>
          </Box>
          
        </Box>
      </Box>
      <Box mt={20} width="100%" display="flex" flexDirection="column" alignItems="center">
        <Box className={styles.gradient_line}></Box>
        <Box width="100%" display="flex" justifyContent="center" >
          <Box className={styles.middle_img_wrapp} display="flex" width="500px" position="relative">
              <Shape1/>
              <Image src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/banner%20image%2Fdog_transparent_back.png?alt=media&token=6c6d1547-7aca-426b-bff3-edc5d285f563" 
              alt="dog_transparent"
              width={300}
              height={380}
              className={styles.transparent_img}
              />
              <Box className={styles.circle_shape_middle}><p><PlayArrowIcon/></p></Box>
          </Box>


        </Box>
      </Box>
    </Box>
  );
}
