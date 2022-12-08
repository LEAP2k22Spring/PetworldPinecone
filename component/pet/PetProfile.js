/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useRouter } from "next/router";
import {
  SettingsOutlined,
  FemaleOutlined,
  MaleOutlined,
  ArrowBackIosNewOutlined,
} from "@mui/icons-material";
import classes from "../../styles/profile.module.css";
import PetInfo from "./PetInfo";
import PetsIcon from "@mui/icons-material/Pets";
import ChatIcon from "@mui/icons-material/Chat";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Typography, Stack, Divider, Box, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import LoadingSpinner from "../Spinner";

export const PetProfile = ({ data }) => {
  const router = useRouter();
  const petId = router.query.petId;
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);
  const goBackHandler = () => {
    router.back();
  };
  const editPetHandler = (id) => {
    router.push(`/pet/${id}`);
  };
  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <Box className={classes.petProfile_wrapp}>
      <div className={classes.pet_container} style={{ position: "relative" }}>
        <LoadingSpinner open={isLoading} />
        <div style={{ height: "400px", background: "#d9d9d9" }}>
          <Box position="absolute" left={30} mt={1}>
            <IconButton
              sx={{ backgroundColor: "#f8aa08", color: "#fff" }}
              onClick={goBackHandler}
            >
              <ArrowBackIosNewOutlined fontSize="large" />
            </IconButton>
          </Box>
          <Box position="absolute" right={30} mt={1}>
            <IconButton
              sx={{ backgroundColor: "#f8aa08", color: "#fff" }}
              onClick={() => editPetHandler(petId)}
            >
              <SettingsOutlined fontSize="large" />
            </IconButton>
          </Box>
          <img
            alt="background_image"
            src={
              data?.image
                ? data?.image
                : "https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/no-image%20(1).png?alt=media&token=a56e4cdf-5382-4c6f-8860-aaa004558de6"
            }
            width="100%"
            height={400}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={classes.petAvatarContainer}>
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
                  {data?.petName || "empty"}
                </Typography>
                <Typography
                  sx={{
                    background: "#d0d0d0",
                    color: "white",
                    padding: "0 10px",
                    borderRadius: "15px",
                  }}
                >
                  {data?.breed}
                </Typography>
              </Stack>
              {data?.sex === "female" ? (
                <FemaleOutlined
                  sx={{
                    fontSize: "3rem",
                    background: "pink",
                    color: "white",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                />
              ) : (
                <MaleOutlined
                  sx={{
                    fontSize: "3rem",
                    background: "#0057c2",
                    color: "white",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                />
              )}
            </Stack>
          </Box>
        </div>
        <Stack direction="column" sx={{ background: "#fff" }}>
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
            About pet
            <PetsIcon sx={{ padding: "8px 0 0 8px" }} />
          </Typography>
          {/* =========================================== */}
          <PetInfo petData={data} />
          {/* =========================================== */}
        </Stack>
        <Divider
          sx={{
            borderBottomWidth: 20,
            borderColor: "#f0f0f0",
            borderRadius: "10px",
          }}
        />
        <Stack direction="column" sx={{ background: "#fff" }}>
          <Typography
            variant="h6"
            width={200}
            mt={2}
            ml={2}
            sx={{
              fontSize: "1.5rem",
              fontWeight: 700,
              backgroundColor: "#77ccff",
              padding: "0 20px",
              borderRadius: "15px",
              color: "white",
            }}
          >
            Description
            <ChatIcon sx={{ padding: "8px 0 0 8px" }} />
          </Typography>
          <Typography variant="body1" my={2} mx={3}>
            {data?.description}
          </Typography>
        </Stack>
        <Divider
          sx={{
            borderBottomWidth: 20,
            borderColor: "#f0f0f0",
            borderRadius: "10px",
          }}
        />
        <Stack direction="column" sx={{ background: "#fff" }}>
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
            Pet photos
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
        </Stack>
      </div>
    </Box>
  );
};