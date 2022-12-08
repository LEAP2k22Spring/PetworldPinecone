import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';


export default function ColumnsGrid() {
  const router = useRouter();

  return (
    <Box
      className={styles.banner_wrapp}
      sx={{ flexGrow: 1 }}
    >
      <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }}>
        <Grid xs={12} sm={12} md={6}>
          <Box
            onClick={() => {
              router.push('/service/pet-shop');
            }}
            className={styles.banner1}
            sx={{ width: '100%', height: '250px', borderRadius: '20px' }}
          ></Box>
        </Grid>
        <Grid xs={12} sm={12} md={6}>
          <Box
            onClick={() => {
              router.push('/service/pet-shop');
            }}
            className={styles.banner2}
            sx={{ width: '100%', height: '250px', borderRadius: '20px' }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
}
