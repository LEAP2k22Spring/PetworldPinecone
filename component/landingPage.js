import { Box, Button, Grid, Typography } from "@mui/material";
import Login from "./signin";
import { useAuth } from "../providers/AuthProvider";
import styles from "../styles/Home.module.css";
import PetsIcon from '@mui/icons-material/Pets';
import { Shape1 } from "./svg/Shape1";
import Image from "next/image";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';




export default function LandingPage() {
  const { logout } = useAuth();
  return (
    <Box className={styles.landing_page}>
      <Box className={styles.landing_wrapp}>
        <Box className={styles.landing_text_wrapp}>
          <Typography fontWeight={500} variant="h1">Create Your </Typography>
          <Typography fontWeight={600} variant="h1">Pet’s Profile</Typography>
          <Typography sx={{width:'80%'}} mt={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Button sx={{mt:'40px', boxShadow:'none'}} variant="contained" onClick={() => logout()}>
            Get start
          </Button>
        </Box>
        <Box className={styles.background_wrapp}>
          <Box className={styles.img_shape}><small></small>
              
              
            <Box className={styles.circle_shape}><PetsIcon/></Box>
            <Box className={styles.care_shape}>
              <Image 
                src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fveterinarian.png?alt=media&token=11fa1d2e-ba13-47be-a912-d00d5999226c"
                width={50}
                height={50}
                alt="inbox icon"
                className={styles.icon_care}
                />
                <p></p><b>Pets care</b><span>Dog & Cats & Other</span>
            </Box>
            <Box className={styles.inbox_shape}>
              <Image 
                src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fchat%20.png?alt=media&token=cf165c9d-b227-41a6-b336-91ea873ed843"
                width={50}
                height={50}
                alt="inbox icon"
                className={styles.icon_chat}
                />
                <p></p><b>Group chat</b><span>Communication</span>
            </Box>
            <Box className={styles.walking_shape}>
              <Image 
                src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Ftrainer.png?alt=media&token=89c320c8-cb70-46cb-8338-03d7e942d33c"
                width={50}
                height={50}
                alt="training icon"
                className={styles.icon_training}
               />
              <p></p><b>Pet training</b><span>Dog & Cats & Other</span>
            </Box>
          </Box>
          
        </Box>
      </Box>
      <Box mt={15} width="100%" display="flex" flexDirection="column" alignItems="center">
        <Box className={styles.gradient_line}></Box>
        <Box width="100%" display="flex" justifyContent="center" alignItems="center" textAlign="center" className={styles.middle_wrapper}>
          <Box className={styles.middle_img_wrapp} display="flex" width="400px" position="relative">
              <Shape1/>
              <Image src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/banner%20image%2Fdog_transparent.png?alt=media&token=a3358112-53fc-4c50-b9a3-42258c8eacb1" 
              alt="dog_transparent"
              width={215}
              height={290}
              className={styles.transparent_img}
              />
              <Box className={styles.circle_shape_middle}><p><PhotoCameraIcon/></p></Box>
          </Box>
          <Box>
            <Typography color="#000c52" fontWeight={500} variant="h4">Share a photo your pet</Typography>
            <Typography color="#000c52" fontWeight={500} variant="h4">Let's start the fun!</Typography>
          </Box>


        </Box>
      </Box>
    </Box>
  );
}
