import { Avatar, Typography, Stack, Divider, Box } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useRouter } from 'next/router';
import LoadingSpinner from '../Spinner';
import { auth, useFirebase, useSort } from '../../firebase/useFirebase';
import { useAuth } from '../../providers';
import PetsIcon from '@mui/icons-material/Pets';

const Pet = () => {
  const router = useRouter();
  const { data: petData } = useSort('Pets', 'ownerID', auth?.currentUser?.uid);
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
      <Stack direction='column' sx={{ background: '#fff' }}>
        <Typography
          variant='h6'
          my={2}
          mx={1}
          width='fit-content'
          sx={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#fff',
            background: 'orange',
            padding: '0 10px 0 10px',
            borderRadius: '11px',
          }}
        >
          Pets <PetsIcon sx={{ padding: '7px 0 0 0' }} />
        </Typography>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          mb={5}
        >
          {/* <PetAvatarContainer> */}
          <Box display='flex' sx={{ cursor: 'pointer' }}>
            {petData &&
              petData?.map((pet, i) => (
                <Avatar
                  key={i}
                  id={i}
                  alt='Remy Sharp'
                  src={pet.data.image}
                  sx={{ margin: '0 10px', width: '50px', height: '50px' }}
                  onClick={() => editPetHandler(pet.docId)}
                />
              ))}
          </Box>
          {/* </PetAvatarContainer> */}
          <Avatar
            sx={{ margin: '0 10px', cursor: 'pointer' }}
            onClick={openAddPetHandler}
          >
            <AddOutlinedIcon />
          </Avatar>
        </Stack>
      </Stack>
      <Divider
        sx={{
          borderBottomWidth: 20,
          borderColor: '#f0f0f0',
          borderRadius: '10px',
        }}
      />
    </div>
  );
};

export default Pet;
