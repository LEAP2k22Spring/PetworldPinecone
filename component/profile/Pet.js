import styled from 'styled-components';
import { Avatar, Typography, Stack, Divider } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useRouter } from 'next/router';
import LoadingSpinner from '../Spinner';
import { auth, useFirebase, useSort } from '../../firebase/useFirebase';
import { useAuth } from '../../providers';
import { Box } from '@mui/system';

const Pet = () => {
  const router = useRouter();
  const { data: petData } = useSort("Pets", "ownerID", auth?.currentUser?.uid);
  const { loading } = useAuth();

  const editPetProfile = () => {
    router.push(`/editPetProfile`);
  }
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
          variant='h6'
          mt={2}
          ml={2}
          sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#696969' }}
        >
          Pets
        </Typography>
        <Stack
          direction='row'
          justifyContent="flex-end"
          alignItems='center'
          mb={5}
        >
          <PetAvatarContainer>
            {petData &&
              petData?.map((pet, i) => (
                <PetAvatar
                  key={i}
                  id={i}
                  alt='Remy Sharp'
                  src={pet.data.image}
                  sx={{ margin: '0 10px' }}
                  onClick={() => editPetHandler(pet.docId)}
                />
              ))}
          </PetAvatarContainer>
          <Box onClick={editPetProfile}>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </Box>
          <Avatar sx={{ margin: '0 10px' }} onClick={openAddPetHandler}>
            <AddOutlinedIcon />
          </Avatar>
        </Stack>
      </PetProfile>
      <Divider sx={{ borderBottomWidth: 20, borderColor: '#d9d9d9' }} />
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
