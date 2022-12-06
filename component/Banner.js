import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import styles from '../styles/Home.module.css';

export default function ColumnsGrid() {
  return (
    <Box
      className={styles.banner_wrapp}
      sx={{ flexGrow: 1, width: '80%', maxWidth: '1425px', margin: '20px 0' }}
    >
      <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }}>
        <Grid xs={12} sm={12} md={6}>
          <Box
            className={styles.banner1}
            sx={{ width: '100%', height: '250px', borderRadius: '20px' }}
          ></Box>
        </Grid>
        <Grid xs={12} sm={12} md={6}>
          <Box
            className={styles.banner2}
            sx={{ width: '100%', height: '250px', borderRadius: '20px' }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
}
