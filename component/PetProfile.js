import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { Paper, Typography, Stack, Button, Divider } from "@mui/material";
import { Box } from "@mui/system";
import classes from "../component/profile.module.css";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FemaleOutlinedIcon from "@mui/icons-material/FemaleOutlined";
import MaleOutlinedIcon from "@mui/icons-material/MaleOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { useRouter } from "next/router";
import PetInfo from "./PetInfo";

const PetProfile = ({ petData }) => {
  console.log(petData);
  const router = useRouter();

  const goBackHandler = () => {
    router.back();
  };
  return (
    <>
      <Container>
        <Header>
          <Box sx={{ width: "100%", height: "100%" }}>
            <img
              src={petData?.image}
              alt="Picture of the author"
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
          </Box>
          <BackIconContainer onClick={goBackHandler}>
            <ArrowBackIosNewOutlinedIcon fontSize="large" />
          </BackIconContainer>
          <SettingsIconContainer>
            <SettingsOutlinedIcon fontSize="large" />
          </SettingsIconContainer>
        </Header>
        <AvatarContainer>
          <Box className={classes.petProfileBox}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="column">
                <Typography mt={1} sx={{ fontSize: "1.5rem", fontWeight: 700 }}>
                  Name: {petData?.givenName}
                </Typography>
                <Typography mt={2}>Age: {}</Typography>
              </Stack>
              {petData?.sex === "female" ? (
                <FemaleOutlinedIcon sx={{ fontSize: "3rem" }} />
              ) : (
                <MaleOutlinedIcon sx={{ fontSize: "3rem" }} />
              )}
            </Stack>
          </Box>
        </AvatarContainer>
        <UserProfile>
          <Stack direction="row" justifyContent="flex-end">
            <EditButton variant="outlined">Edit profile</EditButton>
          </Stack>
          <Typography variant="body1" mt={5} mx={3}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            eaque nemo reprehenderit sint inventore obcaecati et eum maxime
            consectetur illum?
          </Typography>
          <Typography
            variant="h6"
            mt={2}
            ml={2}
            sx={{ fontSize: "1.5rem", fontWeight: 700 }}
          >
            About pet
          </Typography>
          {/* =========================================== */}
          <PetInfo petData={petData} />
          {/* =========================================== */}
        </UserProfile>
        <Divider sx={{ borderBottomWidth: 20, borderColor: "#d9d9d9" }} />
        <UserProfile>
          <Typography
            variant="h6"
            mt={2}
            ml={2}
            sx={{ fontSize: "1.5rem", fontWeight: 700 }}
          >
            Description
          </Typography>
          <Typography variant="body1" mt={5} mx={3}>
            {petData?.description}
          </Typography>
        </UserProfile>
        <Divider sx={{ borderBottomWidth: 20, borderColor: "#d9d9d9" }} />
        <UserProfile>
          <Typography
            variant="h6"
            mt={2}
            ml={2}
            sx={{ fontSize: "1.5rem", fontWeight: 700 }}
          >
            Pet photos
          </Typography>
          <Image
            src={petData?.image}
            alt="Picture of the author"
            width={150}
            height={150}
            className={classes.image}
          />
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
  top: 250px;
  left: 20px;
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
`;

const EditButton = styled(Button)`
  color: #696969;
  font-weight: 700;
  border: 1px solid #d9d9d9;
  margin: 10px;
`;
