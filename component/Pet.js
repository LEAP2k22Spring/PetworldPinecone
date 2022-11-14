import { useEffect, useState } from "react";
import styled from "styled-components";
import { Avatar, Typography, Stack, Button, Divider } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useRouter } from "next/router";
import LoadingSpinner from "./Spinner";
import { useFirebase } from "../firebase/useFirebase";

const pet = [
  "dog",
  "cat",
  "fish",
  "husky",
  "kitty",
  "doggy",
  "chihuahua",
  "pit",
];

const Pet = () => {
  const { getMultipleData } = useFirebase("Pets");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [petData, setPetData] = useState(null);

  const openAddPetHandler = () => {
    console.log("works");
    router.push(`/add-pet`);
  };

  const editPetHandler = (petId) => {
    router.push(`/profile/${petId}`);
  };

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const petCollection = await getMultipleData(
          "ownerID",
          "YkrI259vNWXbQuEM6J49zpIDcbJ3"
        );
        console.log(petCollection);
        setIsLoading(false);
        setPetData(petCollection);
      } catch (error) {}
    })();
  }, []);
  return (
    <div>
      <LoadingSpinner open={isLoading} />
      <PetProfile>
        <Typography
          variant="h6"
          mt={2}
          ml={2}
          sx={{ fontSize: "1.5rem", fontWeight: 700, color: "#696969" }}
        >
          Pets
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={5}
        >
          <PetAvatarContainer>
            {petData &&
              petData.map((pet, i) => (
                <PetAvatar
                  key={i}
                  id={i}
                  alt="Remy Sharp"
                  src={pet.data.image}
                  sx={{ margin: "0 10px" }}
                  onClick={() => editPetHandler(pet.docId)}
                />
              ))}
          </PetAvatarContainer>
          <Avatar sx={{ margin: "0 10px" }} onClick={openAddPetHandler}>
            <AddOutlinedIcon />
          </Avatar>
        </Stack>
      </PetProfile>
      <Divider sx={{ borderBottomWidth: 20, borderColor: "#d9d9d9" }} />
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
  width: 400px;
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
