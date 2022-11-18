import { Backdrop, Stack } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingSpinner = ({ open }) => {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <Stack>
          <div style={{ marginBottom: '20px', fontSize: '18px' }}>
            Loading...
          </div>
          <CircularProgress color='inherit' />
        </Stack>
      </Backdrop>
    </div>
  );
};

export default LoadingSpinner;
