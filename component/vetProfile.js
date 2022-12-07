/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useRouter } from "next/router";
import {
  SettingsOutlined,
  FemaleOutlined,
  MaleOutlined,
  ArrowBackIosNewOutlined,
} from "@mui/icons-material";
import PhoneIcon from "@mui/icons-material/Phone";
import classes from "../styles/profile.module.css";
import styled from "styled-components";
import PetsIcon from "@mui/icons-material/Pets";
import ChatIcon from "@mui/icons-material/Chat";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Typography, Stack, Divider, Box, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import LoadingSpinner from "./Spinner";

const VetProfile = ({ data }) => {
  const router = useRouter();
  const vetId = router.query.vetId;
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);
  const goBackHandler = () => {
    router.back();
  };
  return (
    <Box className={classes.petProfile_wrapp}>
      <Container className={classes.pet_container}>
        <LoadingSpinner open={isLoading} />
        <Header>
          <Box position="absolute" left={30} mt={1}>
            <IconButton
              sx={{ backgroundColor: "#f8aa08", color: "#fff" }}
              onClick={goBackHandler}
            >
              <ArrowBackIosNewOutlined fontSize="large" />
            </IconButton>
          </Box>
          <img
            alt="background_image"
            src={
              data?.photoURL
                ? data?.photoURL
                : "https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/no-image%20(1).png?alt=media&token=a56e4cdf-5382-4c6f-8860-aaa004558de6"
            }
            width="100%"
            height={400}
            style={{ objectFit: "cover" }}
          />
        </Header>
        <AvatarContainer>
          <Box className={classes.petProfileBox}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              p={1}
              mt={0}
            >
              <Stack direction="column">
                <Typography mt={1} sx={{ fontSize: "1.5rem", fontWeight: 700 }}>
                  {data?.name || "empty"}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </AvatarContainer>
        <UserProfile>
          <Typography
            variant="h6"
            width={180}
            mt={10}
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
            About Us
            <PetsIcon sx={{ padding: "8px 0 0 8px" }} />
          </Typography>
        </UserProfile>
        <Typography variant="body1" my={2} mx={3}>
          {data?.description}
        </Typography>
        <UserProfile>
          <Typography
            variant="h6"
            width={180}
            mt={10}
            ml={2}
            sx={{
              fontSize: "1.5rem",
              fontWeight: 700,
              backgroundColor: "rgb(0, 157, 235)",
              padding: "0 20px",
              borderRadius: "15px",
              color: "white",
            }}
          >
            Contact
            <PhoneIcon sx={{ padding: "8px 0 0 8px" }} />
          </Typography>
        </UserProfile>
        <Typography variant="body1" my={2} mx={3}>
          {data?.time}
          {data?.location}
        </Typography>
        <UserProfile>
          <Typography
            variant="h6"
            width={190}
            mt={2}
            ml={2}
            sx={{
              fontSize: "1.5rem",
              fontWeight: 700,
              backgroundColor: "#ff8164",
              padding: "0 20px",
              borderRadius: "15px",
              color: "white",
            }}
          >
            Photos
            <CameraAltIcon sx={{ padding: "8px 0 0 8px" }} />
          </Typography>
          {data?.image ? (
            <Image
              src={data?.image}
              width={150}
              height={150}
              alt="Picture of the cover"
              className={classes.image}
            />
          ) : (
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/paws-no-image.jpg?alt=media&token=49210c13-1f76-4da3-971f-4490aca97d8f"
              width={150}
              height={150}
              alt="Picture"
              className={classes.image}
            />
          )}
          <Box sx={{ width: "100%", height: "100px" }}></Box>
        </UserProfile>
      </Container>
    </Box>
  );
};
export default VetProfile;

const Container = styled.div`
  position: relative;
`;
const Header = styled.div`
  background-color: #d9d9d9;
  height: 400px;
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
