import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Avatar, Typography, Stack, Button, Divider } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useRouter } from 'next/router';
import LoadingSpinner from '../Spinner';
import { useFirebase } from '../../firebase/useFirebase';
import { useGetUsersDataContext } from '../../context/UsersDataContext';

const Pet = ({ petNumber }) => {
  const { getMultipleData } = useFirebase('Pets');
  const { getUsersData } = useGetUsersDataContext();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [petData, setPetData] = useState(null);
  console.log('petee2', petData)

  // jump to the "localhost:3000/add-pet" page
  const openAddPetHandler = () => {
    router.push(`/add-pet`);
  };

  // jump to the "localhost:3000/profile/DsfLp8XF54PrVSozK1k4pet" pet profile page
  const editPetHandler = (petId) => {
    router.push(`/profile/${petId}`);
  };

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const petCollection = await getMultipleData(
          'ownerID',
          getUsersData.userId
        );
        setIsLoading(false);
        setPetData(petCollection);

        //parent element-ees function duudaad, data damjuulaw...
        petNumber(petCollection.length);
      } catch (error) {}
    })();
  }, []);

  return (
    <div>
      <LoadingSpinner open={isLoading} />
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
          justifyContent='space-between'
          alignItems='center'
          mb={5}
        >
          <PetAvatarContainer >
            {petData &&
              petData.map((pet, i) => (
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
