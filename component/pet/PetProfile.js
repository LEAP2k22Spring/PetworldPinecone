import Image from 'next/image';
import { useRouter } from 'next/router';
import { Typography, Stack, Divider, Box } from '@mui/material';
import {
  SettingsOutlined,
  FemaleOutlined,
  MaleOutlined,
  ArrowBackIosNewOutlined,
} from '@mui/icons-material';
import classes from '../../styles/profile.module.css';
import styled from 'styled-components';
import PetInfo from './PetInfo';
import { useCollection } from '../../firebase/useFirebase';
import { useState } from 'react';
import LoadingSpinner from '../Spinner';
import { useEffect } from 'react';

export const PetProfile = ({ petData }) => {
  const router = useRouter();
  const petId = router.query.petId;
  const {data} = useCollection("Pets", petId)
  const [isLoading, setIsLoading] = useState(false);
  useEffect(()=>{
    if(data){
      setIsLoading(false);
    }
  },[data])
  // console.log('data chine', data)
  const goBackHandler = () => {
    router.back();
  };
  const capitalizeFirst = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <Box className={classes.petProfile_wrapp}>
      <Container className={classes.pet_container}>
      <LoadingSpinner open={isLoading} />
        <Header>
          <Box sx={{ width: '100%', height: '400px' }}>
            {data?.image ? <Image
              src={data?.image}
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              style={{ objectFit: 'cover', borderRadius:'0 0 20px 20px' }}
              alt='Picture of the cover'
            /> : <Image
            src='https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/paw_img.jpg?alt=media&token=587aacc2-2d55-4850-8bf7-36de3a25f6c3'
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            style={{ objectFit: 'cover', }}
            alt='Picture'
          />}
          </Box>
          <BackIconContainer onClick={goBackHandler}>
            <ArrowBackIosNewOutlined fontSize='large' sx={{color:'white', background:'brown', borderRadius:'50%', padding:'5px'}} />
          </BackIconContainer>
          <SettingsIconContainer>
            <SettingsOutlined fontSize='large' sx={{color:'white', background:'brown', borderRadius:'50%', padding:'5px'}}/>
          </SettingsIconContainer>
        </Header>
        <AvatarContainer>
          <Box className={classes.petProfileBox}>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
              p={1}
              mt={1}
            >
              <Stack direction='column' >
                <Typography mt={1} sx={{ fontSize: '1.5rem', fontWeight: 700 }}>
                 { data?.petName || 'empty'}
                </Typography>
                <Typography>{data?.breed}</Typography>
              </Stack>
              {data?.sex === 'female' ? (
                <FemaleOutlined sx={{ fontSize: '3rem', background:'pink',color:'white', borderRadius:'50%', padding:'5px' }} />
              ) : (
                <MaleOutlined sx={{ fontSize: '3rem', background:'#0057c2',color:'white', borderRadius:'50%', padding:'5px' }} />
              )}
            </Stack>
          </Box>
        </AvatarContainer>
        <UserProfile>
          <Typography
            variant='h6'
            width={155}
            mt={10}
            ml={2}
            sx={{ fontSize: '1.5rem', fontWeight: 700, backgroundColor: "green", padding:'0 20px', borderRadius:'15px', color:'white' }}
          >
            About pet
          </Typography>
          {/* =========================================== */}
          <PetInfo petData={data} />
          {/* =========================================== */}
        </UserProfile>
        <Divider sx={{ borderBottomWidth: 20, borderColor: '#d9d9d9', borderRadius:'10px' }} />
        <UserProfile>
          <Typography
            variant='h6'
            width={170}
            mt={2}
            ml={2}
            sx={{ fontSize: '1.5rem', fontWeight: 700, backgroundColor: "orange", padding:'0 20px', borderRadius:'15px', color:'white' }}
          >
            Description
          </Typography>
          <Typography variant='body1' my={2} mx={3}>
            {data?.description}
          </Typography>
        </UserProfile>
        <Divider sx={{ borderBottomWidth: 20, borderColor: '#d9d9d9', borderRadius:'10px' }} />
        <UserProfile>
          <Typography
            variant='h6'
            width={170}
            mt={2}
            ml={2}
            sx={{ fontSize: '1.5rem', fontWeight: 700, backgroundColor: "red", padding:'0 20px', borderRadius:'15px', color:'white' }}
          >
            Pet photos
          </Typography>
          {data?.image ? <Image
              src={data?.image}
              width={150}
              height={150}
              alt='Picture of the cover'
            className={classes.image}

            /> : <Image
            src='https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/paw_img.jpg?alt=media&token=587aacc2-2d55-4850-8bf7-36de3a25f6c3'
            width={150}
            height={150}
            alt='Picture'
            className={classes.image}

          />}
          <Box sx={{width:'100%', height:'100px'}}></Box>
        </UserProfile>
      </Container>
    </Box>
  );
};

const Container = styled.div`
  position: relative;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
  /* height: 300px; */
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
// const PetName = styled.div`
//   text-transform: uppercase
// `;