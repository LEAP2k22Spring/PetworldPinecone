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
    >
      {/* TITLE */}
      <div className=''>
        <h1>SERVICE</h1>
      </div>
      <div className=''>
        <Typography mt={5}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </div>
      {/* CENTER */}
      <main style={{ margin: 40 }}>
        <Stack direction='column' justifyContent={'center'} gap={3}>
          <Box className={classes.card_container + ' ' + classes.center}>
            <div>
              <Avatar
                alt='user'
                src='https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/me.jpg?alt=media&token=1b82e3bf-656b-466a-a93c-a0cf17a70d26'
                sx={{ width: 100, height: 100 }}
              />
            </div>
            <Stack direction='column' m={2} gap={2}>
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems={'center'}
              >
                <Typography fontSize={'1.5rem'} fontWeight='bold'>
                  Bat-Erdene
                </Typography>
                <Stack direction='row'>
                  <AccessTime />
                  <Typography ml={1}>2022 Nov 23</Typography>
                </Stack>
              </Stack>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia deleniti nostrum numquam ex impedit eum assumenda,
                architecto ratione repellendus pariatur?
              </Typography>
              <Stack direction='row' alignItems={'center'}>
                <LocationOn fontSize='large' />
                <Typography fontWeight={600} ml={2}>
                  Ulaanbaatar, KHU Duureg 17-r khoroo King tower 135
                </Typography>
              </Stack>
            </Stack>
            <Stack gap={2} ml={2}>
              <div className={classes.call_icon}>
                <Call sx={{ width: 30, height: 30, color: 'white' }} />
              </div>
              <div className={classes.trash_icon}>
                <DeleteForever sx={{ width: 30, height: 30, color: 'white' }} />
              </div>
            </Stack>
          </Box>
          <Box className={classes.card_container + ' ' + classes.center}>
            <div>
              <Avatar
                alt='user'
                src='https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/me.jpg?alt=media&token=1b82e3bf-656b-466a-a93c-a0cf17a70d26'
                sx={{ width: 100, height: 100 }}
              />
            </div>
            <Stack direction='column' m={2} gap={2}>
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems={'center'}
              >
                <Typography fontSize={'1.5rem'} fontWeight='bold'>
                  Bat-Erdene
                </Typography>
                <Stack direction='row'>
                  <AccessTime />
                  <Typography ml={1}>2022 Nov 23</Typography>
                </Stack>
              </Stack>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia deleniti nostrum numquam ex impedit eum assumenda,
                architecto ratione repellendus pariatur?
              </Typography>
              <Stack direction='row' alignItems={'center'}>
                <LocationOn fontSize='large' />
                <Typography fontWeight={600} ml={2}>
                  Ulaanbaatar, KHU Duureg 17-r khoroo King tower 135
                </Typography>
              </Stack>
            </Stack>
            <Stack gap={2} ml={2}>
              <div className={classes.call_icon}>
                <Call sx={{ width: 30, height: 30, color: 'white' }} />
              </div>
              <div className={classes.trash_icon}>
                <DeleteForever sx={{ width: 30, height: 30, color: 'white' }} />
              </div>
            </Stack>
          </Box>
        </Stack>
      </main>
    </Stack>
  );
};

export default PetCare;
