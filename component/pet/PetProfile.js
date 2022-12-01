import Image from 'next/image';
import { useRouter } from 'next/router';
import { Typography, Stack, Divider, Box, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FemaleOutlined from '@mui/icons-material/FemaleOutlined';
import MaleOutlined from '@mui/icons-material/MaleOutlined';


import classes from '../../component/profile.module.css';
import styled from 'styled-components';
import PetInfo from './PetInfo';
import { useState } from 'react';
import LoadingSpinner from '../Spinner';
import { useCollection } from '../../firebase/useFirebase';

const PetProfile = ({ data }) => {
  const router = useRouter();
  const petId = router.query.petId;

  const goBackHandler = () => {
    router.back();
  };
  const editPetHandler = (id) => {
    router.push(`/pet/${id}`);
  };
  return (
    <>
      <Container>
        <Header >
          <Box position="absolute" left={30} mt={1}>
              <IconButton sx={{backgroundColor:"#f8aa08", color:"#fff"}} onClick={goBackHandler}>
                <ArrowBackIcon fontSize='large' />
              </IconButton>
          </Box>
          <Box position="absolute" right={30} mt={1}>
                <IconButton sx={{backgroundColor:"#f8aa08", color:"#fff"}} onClick={() => editPetHandler(petId)} >
                  <SettingsOutlinedIcon fontSize='large' />
                </IconButton>
          </Box>
          <img alt='background_image' src={ data?.image ? data?.image : "https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/no-image%20(1).png?alt=media&token=a56e4cdf-5382-4c6f-8860-aaa004558de6"} width="100%" height={400} style={{objectFit:"cover"}}/>
        </Header>
        <AvatarContainer>
          <Box className={classes.petProfileBox}>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
            >
              <Stack direction='column'>
                <Typography mt={1} sx={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  Name: {data?.petName || 'empty'}
                </Typography>
              </Stack>
              {data?.sex === 'female' ? (
                <FemaleOutlined sx={{ fontSize: '3rem' }} />
              ) : (
                <MaleOutlined sx={{ fontSize: '3rem' }} />
              )}
            </Stack>
          </Box>
        </AvatarContainer>
        <UserProfile>
          <Typography
            variant='h6'
            mt={10}
            ml={2}
            sx={{ fontSize: '1.5rem', fontWeight: 700 }}
          >
            About pet
          </Typography>
          {/* =========================================== */}
          <PetInfo petData={data} />
          {/* =========================================== */}
        </UserProfile>
        <Divider sx={{ borderBottomWidth: 20, borderColor: '#d9d9d9' }} />
        <UserProfile>
          <Typography
            variant='h6'
            mt={2}
            ml={2}
            sx={{ fontSize: '1.5rem', fontWeight: 700 }}
          >
            Description
          </Typography>
          <Typography variant='body1' my={2} mx={3}>
            {data?.description}
          </Typography>
        </UserProfile>
        <Divider sx={{ borderBottomWidth: 20, borderColor: '#d9d9d9' }} />
        <UserProfile>
          <Typography
            variant='h6'
            mt={2}
            ml={2}
            sx={{ fontSize: '1.5rem', fontWeight: 700 }}
          >
            Pet photos
          </Typography>
          {data?.image ? <img alt='Picture of the cover' src={data?.image} width={150} height={150} className={classes.image}/> : <img alt='Picture of the cover' src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/no-image%20(1).png?alt=media&token=a56e4cdf-5382-4c6f-8860-aaa004558de6" width={150} height={150} className={classes.image}/>}
          {/* {data?.image ? <Image
              src={data?.image}
              width={150}
              height={150}
              alt='Picture of the cover'
            className={classes.image}

            /> : <Image
            src='https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/no-image%20(1).png?alt=media&token=a56e4cdf-5382-4c6f-8860-aaa004558de6'
            width={150}
            height={150}
            alt='Picture'
            className={classes.image}

          />} */}

        </UserProfile>
      </Container>
    </>
  );
};
export default PetProfile;
const Container = styled.div`
  position: relative;
`;
const Header = styled.div`
background-color: #d9d9d9;
height: 400px;
`;

const SettingsIconContainer = styled.div`
  padding: 20px;
  position: absolute;
`;
const BackIconContainer = styled.div`
  padding: 20px;
  position: absolute;
  left: 10px;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 350px;
  left: 20px;
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
`;
