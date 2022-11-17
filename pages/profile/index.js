import styled from 'styled-components';
import { Avatar, Typography, Stack, Button, Divider, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../../component/Spinner';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Pet from '../../component/profile/Pet';
import Post from '../../component/profile/Post';
import { useGetUsersDataContext } from '../../context/UsersDataContext';

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { getUsersData } = useGetUsersDataContext();
  const [totalPets, setTotalPets] = useState('');

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(timer);
  }, []);

  const getTotalPets = (number) => {
    setTotalPets(number);
  };

  return (
    <>
      <Container>
        <LoadingSpinner open={isLoading} />
        <Header>
          <SettingsIconContainer>
            <SettingsOutlinedIcon fontSize='large' />
          </SettingsIconContainer>
        </Header>
        <AvatarContainer>
          <UserAvatar src={getUsersData?.avatar} />
          <Stack direction='row'>
            <Typography
              variant='h6'
              mt={2}
              sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#696969' }}
            >
              {getUsersData?.firstName}
            </Typography>
            <Typography
              variant='h6'
              mt={2}
              ml={2}
              sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#696969' }}
            >
              {getUsersData?.lastName}
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
            {getUsersData?.cityName}
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
              {getUsersData?.gender}
            </Box>
          </Typography>
          <Typography variant='body1' mt={2} mx={3}>
            Birth date:
            <Box component='span' m={1} sx={{ fontWeight: 700 }}>
              {getUsersData?.dateOfBirth}
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
