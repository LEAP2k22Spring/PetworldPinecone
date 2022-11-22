import { Paper, Typography, Stack } from '@mui/material';
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
