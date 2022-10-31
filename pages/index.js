import { Box, Button, Grid, Typography } from "@mui/material"
import RememberMeIcon from '@mui/icons-material/RememberMe';
export default function Home() {
  return (
    <>
      <Grid container spacing={3} sx={{ height: '100vh' }}>
        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ddd' }}>
          <RememberMeIcon />
        </Grid>
        <Grid item xs={6} gap={8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h5">Great Your
            Pet’s Profile</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna
            aliqua.
          </Typography>
          <Button variant="contained">Get start</Button>
        </Grid>

      </Grid>
    </>
  )
}
