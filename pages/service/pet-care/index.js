import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import classes from '../../../styles/service.module.css';
import {
  LocationOn,
  AccessTime,
  Call,
  DeleteForever,
  AddCircle,
} from '@mui/icons-material';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth, useFirebase } from '../../../firebase/useFirebase';
import moment from 'moment';
import LoadingSpinner from '../../../component/Spinner';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PetCare = () => {
  const { data: petCareData, loading } = useFirebase('PetCare');
  const router = useRouter();

  return (
    <>
      <header className={classes.header}>
        <ArrowBackIcon
          sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}
          className={classes.backIcon}
          onClick={() => router.back()}
        />
      </header>
      <Stack
        className=''
        direction='column'
        justifyContent='center'
        alignItems='center'
        m={5}
        sx={{
          maxWidth: { sm: '40rem', md: '60rem', lg: '80rem' },
          marginLeft: ' auto',
          marginRight: 'auto',
        }}
      >
        <LoadingSpinner open={loading} />

        {/* TITLE */}
        <div className=''>
          <h1>SERVICE</h1>
        </div>
        <div className=''>
          <Typography
            mt={5}
            mx={3}
            sx={{ fontSize: { sm: '1rem', md: '1.5rem' } }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </div>
        {/* CENTER */}
        <main style={{ margin: 40 }}>
          <Stack direction='column' justifyContent={'center'} gap={3}>
            {petCareData?.map(
              ({
                avatar,
                address,
                description,
                name,
                phone,
                createdAt,
                userId,
              }) => (
                <Box
                  key={name}
                  className={classes.card_container}
                  sx={{
                    display: 'flex',
                    width: { xs: '20rem', sm: '30rem', md: '50rem' },
                    height: { xs: '20rem', sm: 'auto', md: 'auto' },
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'center' },
                    justifyContent: { xs: 'center' },
                  }}
                >
                  <div>
                    <Avatar
                      alt={name}
                      src={avatar}
                      sx={{
                        width: {
                          xs: '30',
                          sm: '50px',
                          md: '80px',
                          lg: '100px',
                        },
                        height: {
                          xs: '30',
                          sm: '50px',
                          md: '80px',
                          lg: '100px',
                        },
                      }}
                    />
                  </div>
                  <Stack direction='column' m={2} gap={2}>
                    <Stack
                      direction='row'
                      justifyContent='space-between'
                      alignItems={'center'}
                    >
                      <Typography
                        fontSize={'1.5rem'}
                        fontWeight='bold'
                        sx={{ fontSize: { sm: '1rem', md: '1.5rem' } }}
                      >
                        {name}
                      </Typography>
                      <Stack direction='row'>
                        <AccessTime
                          sx={{
                            fontSize: {
                              xs: '0.75rem',
                              sm: '1rem',
                              md: '1.5rem',
                            },
                          }}
                        />
                        <Typography
                          ml={1}
                          sx={{
                            fontSize: {
                              xs: '0.75rem',
                              sm: '1rem',
                              md: '1.25rem',
                            },
                          }}
                        >
                          {/* {'2022-12-06'} */}
                          {moment(new Date(createdAt?.seconds * 1000)).format(
                            'L'
                          )}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Typography
                      sx={{
                        fontSize: { xs: '0.75rem', sm: '1rem', md: '1.25rem' },
                      }}
                    >
                      {description}
                    </Typography>
                    <Stack direction='row' alignItems={'center'}>
                      <LocationOn
                        sx={{
                          fontSize: { xs: '1rem', sm: '1.25rem', md: '2rem' },
                        }}
                      />
                      <Typography
                        fontWeight={600}
                        ml={2}
                        sx={{
                          fontSize: {
                            xs: '0.75rem',
                            sm: '1rem',
                            md: '1.25rem',
                          },
                        }}
                      >
                        {address}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    gap={2}
                    ml={2}
                    sx={{
                      flexDirection: { xs: 'row', sm: 'column' },
                    }}
                  >
                    <div className={classes.call_icon}>
                      <Call
                        sx={{
                          width: { xs: 20, sm: 25, md: 40 },
                          height: { xs: 20, sm: 25, md: 40 },
                          color: 'white',
                        }}
                      />
                    </div>
                    {auth?.currentUser?.uid === userId && (
                      <div className={classes.trash_icon}>
                        <DeleteForever
                          sx={{
                            width: { xs: 20, sm: 25, md: 40 },
                            height: { xs: 20, sm: 25, md: 40 },
                            color: 'white',
                          }}
                        />
                      </div>
                    )}
                  </Stack>
                </Box>
              )
            )}
          </Stack>
          <Stack direction='row' justifyContent={'center'}>
            <Box
              mt={5}
              mb={6}
              sx={{
                width: { xs: '20rem', sm: '30rem', md: '30rem' },
                height: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                '&:hover': { backgroundColor: '#ffce30' },
                backgroundColor: '#ffce30',
                borderRadius: 50,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              className={classes.btn_wrapper}
              onClick={() => router.push('/service/pet-care/announcement')}
            >
              <AddCircle
                sx={{
                  position: 'absolute',
                  left: '0',
                  color: '#fff',
                  width: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  height: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                }}
              />
              <Typography
                className={classes.btn}
                sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}
              >
                Зар оруулах
              </Typography>
            </Box>
          </Stack>
        </main>
      </Stack>
    </>
  );
};

export default PetCare;
