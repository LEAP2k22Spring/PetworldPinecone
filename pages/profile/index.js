import styled from 'styled-components';
import { Avatar, Typography, Stack, Divider, Box, IconButton } from '@mui/material';
import { useState } from 'react';
import LoadingSpinner from '../../component/Spinner';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

import Pet from '../../component/profile/Pet';
import Post from '../../component/profile/Post';
import { useRouter } from 'next/router';
import { useAuth } from '../../providers';

const Profile = () => {
  const { userData, loading } = useAuth();
  const [totalPets, setTotalPets] = useState('');
  const router = useRouter();


  const getTotalPets = (number) => {
    setTotalPets(number);
  };

  const goBackHandler = () => {
    router.back();
  };

  return (
    <>
      <Container>
        {loading && <LoadingSpinner open={loading} />}
        <Header>
          <BackIconContainer onClick={goBackHandler}>
            <ArrowBackIosNewOutlinedIcon fontSize='large' />
          </BackIconContainer>
          <SettingsIconContainer>
            <IconButton href="/Editprofile">
            <SettingsOutlinedIcon fontSize='large' />
            </IconButton>
          </SettingsIconContainer>
        </Header>
        <AvatarContainer>
          <UserAvatar src={userData?.avatar} />
          <Stack direction='row'>
            <Typography
              variant='h6'
              mt={2}
              sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#696969' }}
            >
              {userData?.firstName}
            </Typography>
            <Typography
              variant='h6'
              mt={2}
              ml={2}
              sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#696969' }}
            >
              {userData?.lastName}
            </Typography>
          </Stack>
        </AvatarContainer>
        <UserProfile style={{ marginTop: '100px' }}>
          <Typography variant='body1' mt={5} mx={3}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            eaque nemo reprehenderit sint inventore obcaecati et eum maxime
            consectetur illum?
          </Typography>
          <StyledTypography variant='body1' mt={5} mx={3}>
            {userData?.cityName}
          </StyledTypography>
          <Stack direction='row' justifyContent='space-between' my={5} mx={5}>
            <StyledTypography>{totalPets} pets</StyledTypography>
            <StyledTypography>25 friends</StyledTypography>
            <StyledTypography>2 saved</StyledTypography>
          </Stack>
        </UserProfile>
        <Divider sx={{ borderBottomWidth: 20, borderColor: '#d9d9d9' }} />
        <UserProfile>
          <Typography
            variant='h6'
            mt={2}
            ml={2}
            sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#696969' }}
          >
            About me
          </Typography>
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
          <Typography variant='body1' mt={5} mx={3}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            eaque nemo reprehenderit sint inventore obcaecati et eum maxime
            consectetur illum?
          </Typography>
        </UserProfile>
        <Divider sx={{ borderBottomWidth: 20, borderColor: '#d9d9d9' }} />
        {/* CHILD COMPONENTS */}
        <Pet petNumber={getTotalPets} />
        <Post />
      </Container>
    </>
  );
};

export default Profile;

const Container = styled.div`
  position: relative;
  margin-bottom: 200px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  background-color: #d9d9d9;
  height: 300px;
`;

const SettingsIconContainer = styled.div`
  padding: 20px;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 250px;
  left: 20px;
`;

const UserAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  height: 260px;
  background: white;
`;

const StyledTypography = styled(Typography)`
  color: #696969;
  font-weight: 700;
  font-size: 1rem;
`;
const BackIconContainer = styled.div`
  padding: 20px;
  position: absolute;
  left: 10px;
`;
