import { Stack, Box, TextField, InputLabel, Typography } from '@mui/material';
import { useState } from 'react';
import classes from '../../../../styles/service.module.css';
import { Save } from '@mui/icons-material';
import { auth, useFirebase } from '../../../../firebase/useFirebase';
import LoadingSpinner from '../../../../component/Spinner';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import { useAuth } from '../../../../providers/AuthProvider';
import { serverTimestamp } from 'firebase/firestore';

const Announcement = () => {
  const router = useRouter();
  const { userData } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const { createDataWithoutSpecificID } = useFirebase('PetCare');
  const [inputs, setInputs] = useState({
    description: '',
    phone: '',
    address: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const clearAllInputs = () => {
    setInputs({
      description: '',
      phone: '',
      address: '',
    });
  };

  // save all inputs
  const saveInputHandler = async () => {
    setIsLoading(true);
    if (
      inputs.phone.trim().length === 8 &&
      inputs.description.trim() !== '' &&
      inputs.address.trim() !== ''
    ) {
      const result = await createDataWithoutSpecificID({
        ...inputs,
        avatar: userData?.avatar,
        name: userData?.firstName,
        phone: userData?.phoneNumber,
        createdAt: serverTimestamp(),
        userId: auth?.currentUser?.uid,
      });
      if (result) {
        setIsLoading(false);
        alert('Successfully saved data');
        clearAllInputs();
      }
    } else {
      alert('Please enter valid inputs');
    }
  };

  return (
    <div>
      <LoadingSpinner open={isLoading} />
      <header className={classes.header}>
        <ArrowBackIcon
          sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}
          className={classes.backIcon}
          onClick={() => router.back()}
        />
      </header>
      <Stack
        className=''
        direction='column'
        justifyContent='center'
        alignItems='center'
        m={5}
        sx={{
          maxWidth: { sm: '40rem', md: '60rem', lg: '80rem' },
          marginLeft: ' auto',
          marginRight: 'auto',
        }}
      >
        {/* INPUT SECTION */}
        <Stack direction='column' justifyContent={'center'}>
          <Box mb={2}>
            <Typography
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
              }}
            >
              Зар оруулах хэсэг
            </Typography>
          </Box>
          <Box
            className={classes.card1_container}
            sx={{
              display: 'flex',
              width: { xs: '20rem', sm: '30rem', md: '50rem' },
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'center' },
              justifyContent: { xs: 'center' },
            }}
          >
            <Stack sx={{ padding: '20px 40px' }}>
              <Box my={5}>
                <InputLabel className={classes.inputLabel}>
                  Description*
                </InputLabel>
                <TextField
                  value={inputs.description}
                  name='description'
                  multiline
                  placeholder='... add some description'
                  rows={5}
                  column={3}
                  onChange={handleChange}
                  fullWidth
                />
              </Box>
              <Box>
                <InputLabel
                  className={classes.inputLabel}
                  sx={{ background: '#77ccff!important' }}
                >
                  Phone number*
                </InputLabel>
                <TextField
                  type='number'
                  name='phone'
                  value={inputs.phone}
                  onChange={handleChange}
                  sx={{
                    width: { xs: '18rem', sm: '25rem', md: '45rem' },
                  }}
                />
              </Box>
              <Box mt={5}>
                <InputLabel
                  className={classes.inputLabel}
                  sx={{ background: '#FF5733!important' }}
                >
                  Address*
                </InputLabel>
                <TextField
                  name='address'
                  value={inputs.address}
                  onChange={handleChange}
                  sx={{
                    width: { xs: '18rem', sm: '25rem', md: '45rem' },
                  }}
                />
              </Box>
            </Stack>
          </Box>
        </Stack>
        {/* SAVE BUTTON */}
        <Stack
          direction='row'
          justifyContent={'center'}
          onClick={saveInputHandler}
        >
          <Box
            mt={5}
            sx={{
              width: { xs: '20rem', sm: '30rem', md: '30rem' },
              height: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              '&:hover': { backgroundColor: '#ffce30' },
              backgroundColor: '#ffce30',
              borderRadius: 50,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            className={classes.btn_wrapper}
          >
            <Save
              sx={{
                position: 'absolute',
                left: '0',
                padding: '5px',
                color: '#fff',
                width: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                height: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              }}
            />
            <Typography
              className={classes.btn}
              sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}
            >
              Хадгалах
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </div>
  );
};

export default Announcement;
