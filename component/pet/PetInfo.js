import { Paper, Typography, Stack, Box } from '@mui/material';
import Image from 'next/image';
import classes from '../../styles/profile.module.css';


const PetInfo = ({ petData }) => {
  return (
    <div className={classes.profile_wrapp}>
      <Stack direction='row' flexWrap='wrap' sx={{ padding: '20px' }}>
        <Paper variant='outlined' className={classes.paper}>
          <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{ padding: '10px 0'}}
          >
            <Image 
              width={40}
              height={40}
              alt="pet weight"
              src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fweight.png?alt=media&token=a27f0458-3be1-4385-a9c2-c5e25f699bec"
            />
            <Box className={classes.petInfo_text}>
              <Typography sx={{ color: '#696969', fontSize:'10px' }}>Weight (kg):</Typography>
              <Typography sx={{ fontSize: '1rem', fontWeight: 700, fontSize:'14px' }}>
                {petData?.weight}
              </Typography>
            </Box>
          </Stack>
        </Paper>
        <Paper variant='outlined' className={classes.paper}>
          <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{ padding: '10px 0'}}
          >
            <Image 
              width={40}
              height={40}
              alt="pet height"
              src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fheight1.png?alt=media&token=ec36eba3-1322-4bbb-a5b0-e8a611a37268"
            />
            <Box className={classes.petInfo_text}>
            <Typography sx={{ color: '#696969', fontSize:'10px', marginTop:'4px' }}>Height (cm):</Typography>
            <Typography sx={{ fontSize: '1rem', fontWeight: 700, fontSize:'14px' }}>
              {petData?.height}
            </Typography>
            </Box>
          </Stack>
        </Paper>
        <Paper variant='outlined' className={classes.paper}>
          <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{ padding: '10px 0'}}
          >
            <Image 
              width={40}
              height={40}
              alt="pet weight"
              src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fpets-allowed.png?alt=media&token=28cae717-d0dd-4fec-ae58-ce578e96455a"
            />
            <Box className={classes.petInfo_text}>
            <Typography sx={{ color: '#696969', fontSize:'10px', marginTop:'4px' }}>Color:</Typography>
            <Typography sx={{ fontSize: '1rem', fontWeight: 700, fontSize:'14px' }}>
              {petData?.color}
            </Typography>
            </Box>
          </Stack>
        </Paper>
        <Paper variant='outlined' className={classes.paper}>
          <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{ padding: '10px 0'}}
          >
            <Image 
              width={40}
              height={40}
              alt="pet weight"
              src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fcalendar_date.png?alt=media&token=6cd94fe6-74d0-48ce-a617-64f22279a077"
            />
            <Box className={classes.petInfo_text}>
            <Typography sx={{ color: '#696969', fontSize:'10px', marginTop:'4px' }}>Birth date:</Typography>
            <Typography sx={{ fontSize: '1rem', fontWeight: 700, fontSize:'14px' }}>
              {petData?.birthDate}
            </Typography>
            </Box>
          </Stack>
        </Paper>
        <Paper variant='outlined' className={classes.paper}>
          <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{ padding: '10px 0'}}
          >
            <Image 
              width={40}
              height={40}
              alt="pet weight"
              src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fcertificate.png?alt=media&token=faf3f13a-5190-46ff-bcb9-e6f9cf7927a8"
            />
            <Box className={classes.petInfo_text}>
            <Typography sx={{ color: '#696969', fontSize:'10px', marginTop:'4px' }}>Breed:</Typography>
            <Typography sx={{ fontSize: '1rem', fontWeight: 700 , fontSize:'14px'}}>
              {petData?.breed}
            </Typography>
            </Box>
          </Stack>
        </Paper>
        <Paper variant='outlined' className={classes.paper}>
          <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{ padding: '10px 0'}}
          >
            <Image 
              width={40}
              height={40}
              alt="pet weight"
              src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fvaccination.png?alt=media&token=8a7ea45f-7ed1-4519-986a-7574bdbd6922"
            />
            <Box className={classes.petInfo_text}>
            <Typography sx={{ color: '#696969', fontSize:'10px', marginTop:'4px' }}>Vaccinated:</Typography>
            <Typography sx={{ fontSize: '1rem', fontWeight: 700, fontSize:'14px' }}>
              {petData?.vaccinated ? 'yes' : 'no'}
            </Typography>
            </Box>
          </Stack>
        </Paper>
        <Paper variant='outlined' className={classes.paper}>
          <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{ padding: '10px 0'}}
          >
            <Image 
              width={40}
              height={40}
              alt="pet weight"
              src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fmicrochip.png?alt=media&token=acbc6218-ae2f-4834-8a66-0f96a522ad18"
            />
            <Box className={classes.petInfo_text}>
            <Typography sx={{ color: '#696969', fontSize:'10px', marginTop:'4px' }}>Microchipped:</Typography>
            <Typography sx={{ fontSize: '1rem', fontWeight: 700, fontSize:'14px' }}>
              {petData?.microchipped ? 'yes' : 'no'}
            </Typography>
            </Box>
          </Stack>
        </Paper>
        <Paper variant='outlined' className={classes.paper}>
          <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{ padding: '10px 0'}}
          >
            <Image 
              width={40}
              height={40}
              alt="pet weight"
              src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fveterinarian.png?alt=media&token=11fa1d2e-ba13-47be-a912-d00d5999226c"
            />
            <Box className={classes.petInfo_text}>
            <Typography sx={{ color: '#696969', fontSize:'10px', marginTop:'4px' }}>Sprayed:</Typography>
            <Typography sx={{ fontSize: '1rem', fontWeight: 700, fontSize:'14px' }}>
              {petData?.sprayed ? 'yes' : 'no'}
            </Typography>
            </Box>
          </Stack>
        </Paper>
      </Stack>
    </div>
  );
};

export default PetInfo;
