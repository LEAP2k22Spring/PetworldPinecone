import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import classes from '../../../styles/service.module.css';
import {
  LocationOn,
  AccessTime,
  Call,
  DeleteForever,
} from '@mui/icons-material';

const PetCare = () => {
  return (
    <Stack
      className=''
      direction='column'
      justifyContent='center'
      alignItems={'center'}
      m={5}
      sx={{
        maxWidth: { sm: '40rem', md: '60rem', lg: '80rem' },
        marginLeft: ' auto',
        marginRight: 'auto',
      }}
    >
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
          <Box
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
                alt='user'
                src='https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/me.jpg?alt=media&token=1b82e3bf-656b-466a-a93c-a0cf17a70d26'
                sx={{
                  width: { xs: '30', sm: '50px', md: '80px', lg: '100px' },
                  height: { xs: '30', sm: '50px', md: '80px', lg: '100px' },
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
                  Bat-Erdene
                </Typography>
                <Stack direction='row'>
                  <AccessTime
                    sx={{
                      fontSize: { xs: '0.75rem', sm: '1rem', md: '1.5rem' },
                    }}
                  />
                  <Typography
                    ml={1}
                    sx={{
                      fontSize: { xs: '0.75rem', sm: '1rem', md: '1.25rem' },
                    }}
                  >
                    2022 Nov 23
                  </Typography>
                </Stack>
              </Stack>
              <Typography
                sx={{ fontSize: { xs: '0.75rem', sm: '1rem', md: '1.25rem' } }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia deleniti nostrum numquam ex impedit eum assumenda,
                architecto ratione repellendus pariatur?
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
                    fontSize: { xs: '0.75rem', sm: '1rem', md: '1.25rem' },
                  }}
                >
                  Ulaanbaatar, KHU Duureg 17-r khoroo King tower 135
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
              <div className={classes.trash_icon}>
                <DeleteForever
                  sx={{
                    width: { xs: 20, sm: 25, md: 40 },
                    height: { xs: 20, sm: 25, md: 40 },
                    color: 'white',
                  }}
                />
              </div>
            </Stack>
          </Box>
        </Stack>
      </main>
    </Stack>
  );
};

export default PetCare;
