import { Stack, Box, TextField, InputLabel, Typography } from '@mui/material';
import { useState } from 'react';
import classes from '../../../../styles/service.module.css';
import { Save } from '@mui/icons-material';

const Announcement = () => {
  const [phone, setPhone] = useState(null);

  const handleChange = (event) => {
    setPhone(event.target.value);
  };

  return (
    <div>
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
            <h1 style={{ textAlign: 'center' }}>Зар оруулах хэсэг</h1>
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
                  id='outlined-name'
                  //   label='Phone number*'
                  value={phone}
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
                  id='outlined-name'
                  type='number'
                  //   label='Phone number*'
                  value={phone}
                  onChange={handleChange}
                  sx={{
                    width: { xs: '15rem', sm: '25rem', md: '45rem' },
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
                  id='outlined-name'
                  //   label='Phone number*'
                  value={phone}
                  onChange={handleChange}
                  sx={{
                    width: { xs: '15rem', sm: '25rem', md: '45rem' },
                  }}
                />
              </Box>
            </Stack>
          </Box>
        </Stack>
        {/* SAVE BUTTON */}
        <Stack direction='row' justifyContent={'center'}>
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
            // onClick={() => router.push('/service/pet-care/announcement')}
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
