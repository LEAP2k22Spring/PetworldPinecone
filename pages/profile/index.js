import styled from 'styled-components';
import { Avatar, Typography, Stack, Button, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../../component/Spinner';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useRouter } from 'next/router';
import Pet from '../../component/Pet';
import { useGetUsersDataContext } from '../../context/UsersDataContext';

const Profile = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { getUsersData } = useGetUsersDataContext();

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
          <UserAvatar alt='Remy Sharp' src={getUsersData?.avatar} />
          <Typography
            variant='h6'
            mt={2}
            sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#696969' }}
          >
            {getUsersData?.firstName}
          </Typography>
        </AvatarContainer>
        <UserProfile>
          <Stack direction='row' justifyContent='flex-end'>
            <EditButton variant='outlined'>Edit profile</EditButton>
          </Stack>
          <Typography variant='body1' mt={5} mx={3}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            eaque nemo reprehenderit sint inventore obcaecati et eum maxime
            consectetur illum?
          </Typography>
          <StyledTypography variant='body1' mt={5} mx={3}>
            Location
          </StyledTypography>
          <Stack direction='row' justifyContent='space-between' my={5} mx={5}>
            <StyledTypography>4 pets</StyledTypography>
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
            Gender: {getUsersData?.gender}
          </Typography>
          <Typography variant='body1' mt={2} mx={3}>
            Birth date: {getUsersData?.dateOfBirth}
          </Typography>
          <Typography variant='body1' mt={5} mx={3}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            eaque nemo reprehenderit sint inventore obcaecati et eum maxime
            consectetur illum?
          </Typography>
        </UserProfile>
        <Divider sx={{ borderBottomWidth: 20, borderColor: '#d9d9d9' }} />

        <Pet />
      </Container>
    </>
  );
};

export default Profile;

const Container = styled.div`
  position: relative;
  margin-bottom: 120px;
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
const PetAvatar = styled(Avatar)`
  width: 50px;
  height: 50px;
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  background: white;
`;

const EditButton = styled(Button)`
  color: #696969;
  font-weight: 700;
  border: 1px solid #d9d9d9;
  margin: 10px;
`;

const StyledTypography = styled(Typography)`
  color: #696969;
  font-weight: 700;
  font-size: 1rem;
`;
