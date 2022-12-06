import React from 'react';
import Image from 'next/image';
import classes from '../../styles/service.module.css';
import { Grid, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const Service = () => {
  const router = useRouter();
  const jump = (name) => {
    router.push(`/service/${name}`);
  };

  return (
    <Stack
      className=''
      direction='column'
      justifyContent='center'
      alignItems={'center'}
      m={5}
    >
      {/* TITLE */}
      <div className=''>
        <h1>SERVICE</h1>
      </div>
      <div className=''>
        <Typography mt={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </div>
      {/* CENTER */}
      <main className={classes.centerColumn}>
        <Grid
          container
          spacing={5}
          m={0}
          justifyContent='center'
          sx={{ cursor: 'pointer' }}
        >
          <Grid item>
            <div className={classes.imgContainer}>
              <Image
                src={
                  'https://cdn2.vectorstock.com/i/1000x1000/56/61/cartoon-veterinarian-vector-2595661.jpg'
                }
                layout='fill'
                objectFit='cover'
                alt='vet'
                onClick={() => jump('pet-care')}
              />
              <div className={classes.title_wrapper}>
                <p className={classes.title}>VET</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.imgContainer}>
              <Image
                src={
                  'https://cdn5.vectorstock.com/i/1000x1000/47/74/cartoon-pet-shop-vector-35844774.jpg'
                }
                layout='fill'
                objectFit='cover'
                alt='pet-shop'
                onClick={() => jump('pet-shop')}
              />
              <div className={classes.title_wrapper}>
                <p className={classes.title}>PET SHOP</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.imgContainer}>
              <Image
                src={
                  'https://as1.ftcdn.net/v2/jpg/02/69/90/84/1000_F_269908485_57YTpSqlEr22R8cSugAM9pf251Y5OB6K.jpg'
                }
                layout='fill'
                objectFit='cover'
                alt='pet-care'
                onClick={() => jump('pet-care')}
              />
              <div className={classes.title_wrapper}>
                <p className={classes.title}>PET CARE</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.imgContainer}>
              <Image
                src={
                  'https://cdn2.vectorstock.com/i/1000x1000/56/61/cartoon-veterinarian-vector-2595661.jpg'
                }
                layout='fill'
                objectFit='cover'
                alt='pet-training'
                onClick={() => jump('pet-training')}
              />
              <div className={classes.title_wrapper}>
                <p className={classes.title}>PET TRAINING</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </main>
    </Stack>
  );
};

export default Service;
