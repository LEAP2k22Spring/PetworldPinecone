import Image from 'next/image';
import { useRouter } from 'next/router';
import { Typography, Stack, Divider, Box } from '@mui/material';
import {
  SettingsOutlined,
  FemaleOutlined,
  MaleOutlined,
  ArrowBackIosNewOutlined,
} from '@mui/icons-material';
import classes from '../../component/profile.module.css';
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
  const goBackHandler = () => {
    router.back();
  };
  return (
    <>
      <Container>
      <LoadingSpinner open={isLoading} />
        <Header>
          <Box sx={{ width: '100%', height: '400px' }}>
            {data?.image ? <Image
              src={data?.image}
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              style={{ objectFit: 'cover' }}
              alt='Picture of the cover'
            /> : <Image
            src='https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/no-image%20(1).png?alt=media&token=a56e4cdf-5382-4c6f-8860-aaa004558de6'
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            style={{ objectFit: 'cover' }}
            alt='Picture'
          />}
          </Box>
          <BackIconContainer onClick={goBackHandler}>
            <ArrowBackIosNewOutlined fontSize='large' />
          </BackIconContainer>
          <SettingsIconContainer>
            <SettingsOutlined fontSize='large' />
          </SettingsIconContainer>
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
          {data?.image ? <Image
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

          />}

        </UserProfile>
      </Container>
    </>
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
