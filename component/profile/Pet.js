import styled from "styled-components";
import { Avatar, Typography, Stack, Divider, Box } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useRouter } from "next/router";
import LoadingSpinner from "../Spinner";
import { auth, useFirebase, useSort } from "../../firebase/useFirebase";
import { useAuth } from "../../providers";
import classes from "../../styles/profile.module.css";
import PetsIcon from "@mui/icons-material/Pets";

const Pet = () => {
  const router = useRouter();
  const { data: petData } = useSort("Pets", "ownerID", auth?.currentUser?.uid);
  const { loading } = useAuth();

  // jump to the "localhost:3000/add-pet" page
  const openAddPetHandler = () => {
    router.push(`/add-pet`);
  };

  // jump to the "localhost:3000/profile/DsfLp8XF54PrVSozK1k4pet" pet profile page
  const editPetHandler = (petId) => {
    router.push(`/profile/${petId}`);
  };

  return (
    <div>
      {loading && <LoadingSpinner open={loading} />}
      <PetProfile>
        <Typography
          variant="h6"
          my={2}
          mx={1}
          width="fit-content"
          sx={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#fff",
            background: "orange",
            padding: "0 10px 0 10px",
            borderRadius: "11px",
          }}
        >
          Pets <PetsIcon sx={{ padding: "7px 0 0 0" }} />
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={5}
        >
          {/* <PetAvatarContainer> */}
          <Box display="flex">
            {petData &&
              petData?.map((pet, i) => (
                <PetAvatar
                  key={i}
                  id={i}
                  alt="Remy Sharp"
                  src={pet.data.image}
                  sx={{ margin: "0 10px" }}
                  onClick={() => editPetHandler(pet.docId)}
                />
              ))}
          </Box>
          {/* </PetAvatarContainer> */}
          <Avatar sx={{ margin: "0 10px" }} onClick={openAddPetHandler}>
            <AddOutlinedIcon />
          </Avatar>
        </Stack>
      </PetProfile>
      <Divider
        sx={{
          borderBottomWidth: 20,
          borderColor: "#f0f0f0",
          borderRadius: "10px",
        }}
      />
    </div>
  );
};

export default Pet;

const PetAvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow-x: scroll;
  width: 500px;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const PetAvatar = styled(Avatar)`
  width: 50px;
  height: 50px;
`;

const PetProfile = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
`;
