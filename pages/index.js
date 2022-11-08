import { Box, Button, Grid, Typography } from "@mui/material"
import Image from "next/image"
import { LogoSignIn } from "../component/LogoSignIn"
import useCollection from "../firebase/useFirebase"
// import { LogoSignIn } from "../component/LogoSignIn"

export default function Home() {
  return (
    <>
      <Grid container spacing={3} sx={{ height: '100vh' }}>
        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
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
