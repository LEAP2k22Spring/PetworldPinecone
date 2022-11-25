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

export const PetProfile = ({ petData }) => {
  const router = useRouter();

  const goBackHandler = () => {
    router.back();
  };
  return (
    <>
      <Container>
        <Header>
          <Box sx={{ width: '100%', height: '400px' }}>
            <Image
              src={petData?.image}
              alt='Picture of the cover'
              fill
              style={{ objectFit: 'cover' }}
            />
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
                  Name: {petData?.givenName || 'empty'}
                </Typography>
              </Stack>
              {petData?.sex === 'female' ? (
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
          <PetInfo petData={petData} />
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
            {petData?.description}
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
          <Image
            src={petData?.image}
            alt='Picture of the pet'
            width={150}
            height={150}
            className={classes.image}
          />
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
