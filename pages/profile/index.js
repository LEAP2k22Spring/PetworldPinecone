/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import {
  Avatar,
  Typography,
  Stack,
  Divider,
  Box,
  IconButton,
} from "@mui/material";
// import { useState } from "react";
import LoadingSpinner from "../../component/Spinner";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import classes from '../../styles/profile.module.css';
import Pet from "../../component/profile/Pet";
import Post from "../../component/profile/Post";
import { useRouter } from "next/router";
import { useAuth } from "../../providers";
import PetsIcon from "@mui/icons-material/Pets";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InfoIcon from '@mui/icons-material/Info';


const Profile = () => {
  const router = useRouter();
  const { userData, loading, petData } = useAuth();
  const goBackHandler = () => {
    router.back();
  };

  return (
    <Box className={classes.petProfile_wrapp}>
      {loading && <LoadingSpinner open={loading} />}
      <Container className={classes.user_container}>
        <Header className={classes.user_header}>
          <Box position="absolute" left={30} mt={1}>
            <IconButton
              sx={{ backgroundColor: "#f8aa08", color: "#fff" }}
              onClick={goBackHandler}
            >
              <ArrowBackIcon fontSize="large" />
            </IconButton>
          </Box>
          <Box position="absolute" right={30} mt={1}>
            <IconButton
              sx={{ backgroundColor: "#f8aa08", color: "#fff" }}
              onClick={() => router.push("/editprofile")}
            >
              <SettingsOutlinedIcon fontSize="large" />
            </IconButton>
          </Box>
          <img
            alt="background_image"
            src={
              userData?.backgroundImage
                ? userData?.backgroundImage
                : "https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/no-image%20(1).png?alt=media&token=a56e4cdf-5382-4c6f-8860-aaa004558de6"
            }
            width="100%"
            height={300}
            style={{ objectFit: "cover" }}
          />
        </Header>
        <AvatarContainer>
          <UserAvatar src={userData?.avatar} />
          <Stack
            direction="row"
            mt={2}
            sx={{
              background: '#ff8164',
              padding: '0 20px',
              borderRadius: '15px'
            }}>
            <Typography
              variant="h6"
              sx={{ fontSize: "1.5rem", fontWeight: 700, color: "white" }}
            >
              {userData?.firstName}
            </Typography>
            <Typography
              variant="h6"
              ml={2}
              sx={{ fontSize: "1.5rem", fontWeight: 700, color: "white" }}
            >
              {userData?.lastName}
            </Typography>
          </Stack>
        </AvatarContainer>
        <UserProfile style={{ marginTop: "100px" }}>
          <Typography variant="body1" mt={4} mx={3}>
            Gender:
            <Box component="span" m={1} sx={{ fontWeight: 700 }}>
              {userData?.gender}
            </Box>
          </Typography>
          <Typography variant="body1" mt={2} mx={3}>
            Birth date:
            <Box component="span" m={1} sx={{ fontWeight: 700 }}>
              {userData?.dateOfBirth}
            </Box>
          </Typography>
          <Typography variant="body1" mt={2} mx={3}>
            Email:
            <Box component="span" m={1} sx={{ fontWeight: 700 }}>
              {userData?.emailAddress}
            </Box>
          </Typography>
          <Typography variant="body1" mt={2} mx={3}>
            Phone number:
            <Box component="span" m={1} sx={{ fontWeight: 700 }}>
              {userData?.phoneNumber}
            </Box>
          </Typography>
          <Stack className={classes.profile_info_btn} direction="row" justifyContent="space-between" my={5} mx={5}>
            <Box display='flex'>
              <PetsIcon />
              <StyledTypography ml={1}>{petData?.length} pets</StyledTypography>
            </Box>
            <Box display='flex'>
              <LocationOnIcon />
              <StyledTypography variant="body1">
                {userData?.cityName}
              </StyledTypography>
            </Box>
            <Box display='flex'>
              <SupervisedUserCircleIcon />
              <StyledTypography ml={1}>2 following</StyledTypography>
            </Box>
          </Stack>
        </UserProfile>
        <Divider sx={{ borderBottomWidth: 20, borderColor: '#f0f0f0', borderRadius: '10px', marginTop: '20px' }} />
        <UserProfile>
          <Typography
            variant="h6"
            width={180}
            mt={2}
            ml={2}
            sx={{
              fontSize: "1.5rem",
              fontWeight: 700,
              backgroundColor: "#abd5ab",
              padding: "0 20px",
              borderRadius: "15px",
              color: "white",
            }}
          >
            About me
            <InfoIcon sx={{ padding: "8px 0 0 8px" }} />
          </Typography>

          <Typography variant="body1" mt={5} mx={3}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            eaque nemo reprehenderit sint inventore obcaecati et eum maxime
            consectetur illum?
          </Typography>
        </UserProfile>
        <Divider sx={{ borderBottomWidth: 20, borderColor: '#f0f0f0', borderRadius: '10px' }} />
        {/* CHILD COMPONENTS */}
        <Pet />
        <Post />
      </Container>
    </Box >
  );
};

export default Profile;

const Container = styled.div`
  position: relative;
  margin-bottom: 200px;
`;
const Header = styled.div`
  background-color: #d9d9d9;
  height: 300px;
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
