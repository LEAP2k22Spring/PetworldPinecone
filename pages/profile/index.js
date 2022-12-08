/* eslint-disable @next/next/no-img-element */
import {
  Avatar,
  Typography,
  Stack,
  Divider,
  Box,
  IconButton,
} from '@mui/material';
// import { useState } from "react";
import LoadingSpinner from '../../component/Spinner';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import classes from '../../styles/profile.module.css';
import Pet from '../../component/profile/Pet';
import Post from '../../component/profile/Post';
import { useRouter } from 'next/router';
import { useAuth } from '../../providers';
import PetsIcon from '@mui/icons-material/Pets';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

const Profile = () => {
  const router = useRouter();
  const { userData, loading, petData } = useAuth();
  const goBackHandler = () => {
    router.back();
  };

  return (
    <Box className={classes.petProfile_wrapp}>
      {loading && <LoadingSpinner open={loading} />}
      <div className={classes.pet_container}>
        <div style={{ backgroundColor: '#d9d9d9', height: '300px', borderRadius: '0 0 20px 20px', overflow: 'hidden' }}>
          <Box position='absolute' left={30} mt={1}>
            <IconButton
              sx={{ backgroundColor: '#f8aa08', color: '#fff', width: '40px', height: '40px' }}
              onClick={goBackHandler}
            >
              <ArrowBackIcon fontSize='large' />
            </IconButton>
          </Box>
          <Box position='absolute' right={30} mt={1}>
            <IconButton
              sx={{ backgroundColor: '#f8aa08', color: '#fff', width: '40px', height: '40px' }}
              onClick={() => router.push('/editprofile')}
            >
              <SettingsOutlinedIcon fontSize='large' />
            </IconButton>
          </Box>
          <img
            alt='background_image'
            src={
              userData?.backgroundImage
                ? userData?.backgroundImage
                : 'https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/no-image%20(1).png?alt=media&token=a56e4cdf-5382-4c6f-8860-aaa004558de6'
            }
            width='100%'
            height={300}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={classes.avatarContainer}>
          <Avatar
            src={userData?.avatar}
            className={classes.userAvatar}
            sx={{ width: '100px', height: '100px' }}
          />
          <Stack mt={6} direction='row' sx={{ background: '#ed7d31', padding: '0 20px', borderRadius: '12px', width: 'fit-content' }}>
            <Typography
              variant='h6'
              sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}
            >
              {userData?.firstName}
            </Typography>
            <Typography
              variant='h6'
              ml={2}
              sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}
            >
              {userData?.lastName}
            </Typography>
          </Stack>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '260px',
            background: 'white',
          }}
        >
          <Typography variant='body1' mt={2} mx={3}>
            Gender:
            <Box component='span' m={1} sx={{ fontWeight: 700 }}>
              {userData?.gender}
            </Box>
          </Typography>
          <Typography variant='body1' mt={2} mx={3}>
            Birth date:
            <Box component='span' m={1} sx={{ fontWeight: 700 }}>
              {userData?.dateOfBirth}
            </Box>
          </Typography>
          <Typography variant='body1' mt={2} mx={3}>
            Email:
            <Box component='span' m={1} sx={{ fontWeight: 700 }}>
              {userData?.emailAddress}
            </Box>
          </Typography>
          <Typography variant='body1' mt={2} mx={3}>
            Phone number:
            <Box component='span' m={1} sx={{ fontWeight: 700 }}>
              {userData?.phoneNumber}
            </Box>
          </Typography>

          <Stack direction='row' justifyContent='space-between' my={5} mx={5}>
            <Box className={classes.iconText}>
              <PetsIcon sx={{ padding: '3px', mr: 1, color: '#9188e5' }} />
              <Typography
                sx={{ color: '#696969', fontWeight: 700, fontSize: '1rem' }}
              >
                {petData?.length} pets
              </Typography>
            </Box>
            <Box className={classes.iconText}>
              <LocationOnIcon sx={{ padding: '3px', mr: 1, color: '#9188e5' }} />
              <Typography
                sx={{ color: '#696969', fontWeight: 700, fontSize: '1rem' }}
              >
                {userData?.cityName}
              </Typography>
            </Box>
            <Box className={classes.iconText}>
              <SupervisedUserCircleIcon sx={{ padding: '3px', mr: 1, color: '#9188e5' }} />
              <Typography
                sx={{ color: '#696969', fontWeight: 700, fontSize: '1rem' }}
              >
                2 following
              </Typography>
            </Box>
          </Stack>
        </div>
        <Divider
          sx={{
            borderBottomWidth: 20,
            borderColor: '#f0f0f0',
            borderRadius: '10px',
            marginTop: '20px',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '150px',
            background: 'white',
          }}
        >
          <Typography
            variant='h6'
            mt={2}
            ml={2}
            sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', background: '#ffc024', padding: '0 20px', borderRadius: '12px', width: 'fit-content' }}
          >
            About me
          </Typography>

          <Typography variant='body1' mt={5} mx={3}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            eaque nemo reprehenderit sint inventore obcaecati et eum maxime
            consectetur illum?
          </Typography>
        </div>
        <Divider
          sx={{
            borderBottomWidth: 20,
            borderColor: '#f0f0f0',
            borderRadius: '10px',
            marginTop: '100px',
          }}
        />
        {/* CHILD COMPONENTS */}
        <Pet />
        <Post />
      </div>
    </Box>
  );
};

export default Profile;
