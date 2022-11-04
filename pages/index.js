import { Box, Button, Grid, Typography } from "@mui/material"
import Image from "next/image"
import { ButtonComp } from "../component/buttunComp"
import { LogoSignIn } from "../component/LogoSignIn"
import { getFirebaseFoods } from "../firebase/firebaseConfig"
import useCollection from "../firebase/useFirebase"
// import { LogoSignIn } from "../component/LogoSignIn"

export default function Home() {
  // useCollection("Pets");

  return (
    <>
      <Grid container spacing={3} sx={{ height: '100vh' }}>
        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
          {/* <Image
          src="/logo.png"
          alt="Picture of the author"
          width={500}
          height={200}
        /> */}
          <LogoSignIn />
        </Grid>
        <Grid item xs={6} gap={8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ddd' }}>
          <Typography variant="h5">Great Your
            Pet’s Profile</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna
            aliqua.
          </Typography>
          <Button variant="contained" href="/signin">Get start</Button>
        </Grid>

      </Grid>
    </>
  )
}
