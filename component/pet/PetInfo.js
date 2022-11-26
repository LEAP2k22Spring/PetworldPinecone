import { Paper, Typography, Stack } from '@mui/material';
import Image from 'next/image';
import classes from '../../component/profile.module.css';


const PetInfo = ({ petData }) => {
  return (
    <div>
      <Stack direction='row' flexWrap='wrap' sx={{ padding: '20px' }}>
        <Paper variant='outlined' className={classes.paper}>
          <Stack
            direction='column'
            justifyContent='flex-start'
            sx={{ padding: '10px 20px' }}
          >
            <Image 
              width={64}
              height={64}
              alt="pet weight"
              src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fweight.png?alt=media&token=a27f0458-3be1-4385-a9c2-c5e25f699bec"
            />
            <Typography sx={{ color: '#696969' }}>Weight (kg):</Typography>
            <Typography sx={{ fontSize: '1rem', fontWeight: 700 }}>
              {petData?.weight}
            </Typography>
          </Stack>
        </Paper>
        <Paper variant='outlined' className={classes.paper}>
          <Stack
            direction='column'
            justifyContent='flex-start'
            sx={{ padding: '10px 20px' }}
          >
            <Image 
              width={64}
              height={64}
              alt="pet height"
              src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fheight1.png?alt=media&token=ec36eba3-1322-4bbb-a5b0-e8a611a37268"
            />
            <Typography sx={{ color: '#696969' }}>Height (cm):</Typography>
            <Typography sx={{ fontSize: '1rem', fontWeight: 700 }}>
              {petData?.height}
            </Typography>
          </Stack>
        </Paper>
        <Paper variant='outlined' className={classes.paper}>
          <Stack
            direction='column'
            justifyContent='flex-start'
            sx={{ padding: '10px 20px' }}
          >
            <Image 
              width={64}
              height={64}
              alt="pet weight"
              src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fpets-allowed.png?alt=media&token=28cae717-d0dd-4fec-ae58-ce578e96455a"
            />
            <Typography sx={{ color: '#696969' }}>Color:</Typography>
            <Typography sx={{ fontSize: '1rem', fontWeight: 700 }}>
              {petData?.color}
            </Typography>
          </Stack>
        </Paper>
        <Paper variant='outlined' className={classes.paper}>
          <Stack
            direction='column'
            justifyContent='flex-start'
            sx={{ padding: '10px 20px' }}
          >
            <Image 
              width={64}
              height={64}
              alt="pet weight"
              src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fcalendar_date.png?alt=media&token=6cd94fe6-74d0-48ce-a617-64f22279a077"
            />
            <Typography sx={{ color: '#696969' }}>Birth date:</Typography>
            <Typography sx={{ fontSize: '1rem', fontWeight: 700 }}>
              {petData?.birthDate}
            </Typography>
          </Stack>
        </Paper>
        <Paper variant='outlined' className={classes.paper}>
          <Stack
            direction='column'
            justifyContent='flex-start'
            sx={{ padding: '10px 20px' }}
          >
            <Image 
              width={64}
              height={64}
              alt="pet weight"
              src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fcertificate.png?alt=media&token=faf3f13a-5190-46ff-bcb9-e6f9cf7927a8"
            />
            <Typography sx={{ color: '#696969' }}>Breed:</Typography>
            <Typography sx={{ fontSize: '1rem', fontWeight: 700 }}>
              {petData?.breed}
            </Typography>
          </Stack>
        </Paper>
        <Paper variant='outlined' className={classes.paper}>
          <Stack
            direction='column'
            justifyContent='flex-start'
            sx={{ padding: '10px 20px' }}
          >
            <Image 
              width={64}
              height={64}
              alt="pet weight"
              src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fvaccination.png?alt=media&token=8a7ea45f-7ed1-4519-986a-7574bdbd6922"
            />
            <Typography sx={{ color: '#696969' }}>Vaccinated:</Typography>
            <Typography sx={{ fontSize: '1rem', fontWeight: 700 }}>
              {petData?.vaccinated ? 'yes' : 'no'}
            </Typography>
          </Stack>
        </Paper>
        <Paper variant='outlined' className={classes.paper}>
          <Stack
            direction='column'
            justifyContent='flex-start'
            sx={{ padding: '10px 20px' }}
          >
            <Image 
              width={64}
              height={64}
              alt="pet weight"
              src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fmicrochip.png?alt=media&token=acbc6218-ae2f-4834-8a66-0f96a522ad18"
            />
            <Typography sx={{ color: '#696969' }}>Microchipped:</Typography>
            <Typography sx={{ fontSize: '1rem', fontWeight: 700 }}>
              {petData?.microchipped ? 'yes' : 'no'}
            </Typography>
          </Stack>
        </Paper>
        <Paper variant='outlined' className={classes.paper}>
          <Stack
            direction='column'
            justifyContent='flex-start'
            sx={{ padding: '10px 20px' }}
          >
            <Image 
              width={64}
              height={64}
              alt="pet weight"
              src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fveterinarian.png?alt=media&token=11fa1d2e-ba13-47be-a912-d00d5999226c"
            />
            <Typography sx={{ color: '#696969' }}>Sprayed:</Typography>
            <Typography sx={{ fontSize: '1rem', fontWeight: 700 }}>
              {petData?.sprayed ? 'yes' : 'no'}
            </Typography>
          </Stack>
        </Paper>
      </Stack>
    </div>
  );
};

export default PetInfo;
