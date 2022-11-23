import styled from "styled-components";
import { Avatar, Typography, Stack, Button, Divider, IconButton } from "@mui/material";
import { useFirebase } from "../../firebase/useFirebase";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../component/Spinner";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useRouter } from "next/router";
import Pet from "../../component/Pet";

const Profile = () => {
  const router = useRouter();
  const { getSingleData } = useFirebase("Users");
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const userCollection = await getSingleData(
          "YkrI259vNWXbQuEM6J49zpIDcbJ3"
        );
        setIsLoading(false);
        setUserData(userCollection);
      } catch (error) {}
    })();
  }, []);

  return (
    <>
      <Container>
        <LoadingSpinner open={isLoading} />

        <Header>
            <IconButton href="/Editprofile">
            <SettingsOutlinedIcon fontSize="large" />
            </IconButton>
        </Header>
        <AvatarContainer>
          <UserAvatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1667795016173-3c1c7c86b1fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <Typography
            variant="h6"
            mt={2}
            sx={{ fontSize: "1.5rem", fontWeight: 700, color: "#696969" }}
          >
            {userData?.firstName}
          </Typography>
        </AvatarContainer>
        <UserProfile>
          <Typography variant="body1" mt={5} mx={3}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            eaque nemo reprehenderit sint inventore obcaecati et eum maxime
            consectetur illum?
          </Typography>
          <StyledTypography variant="body1" mt={5} mx={3}>
            Location
          </StyledTypography>
          <Stack direction="row" justifyContent="space-between" my={5} mx={5}>
            <StyledTypography>4 pets</StyledTypography>
            <StyledTypography>25 friends</StyledTypography>
            <StyledTypography>2 saved</StyledTypography>
          </Stack>
        </UserProfile>
        <Divider sx={{ borderBottomWidth: 20, borderColor: "#d9d9d9" }} />
        <UserProfile>
          <Typography
            variant="h6"
            mt={2}
            ml={2}
            sx={{ fontSize: "1.5rem", fontWeight: 700, color: "#696969" }}
          >
            About me
          </Typography>
          <Typography variant="body1" mt={2} mx={3}>
            Gender: {userData?.gender}
          </Typography>
          <Typography variant="body1" mt={2} mx={3}>
            Birth date: {userData?.dateOfBirth}
          </Typography>
          <Typography variant="body1" mt={5} mx={3}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            eaque nemo reprehenderit sint inventore obcaecati et eum maxime
            consectetur illum?
          </Typography>
        </UserProfile>
        <Divider sx={{ borderBottomWidth: 20, borderColor: "#d9d9d9" }} />

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
