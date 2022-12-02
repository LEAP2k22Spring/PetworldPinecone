/* eslint-disable react-hooks/exhaustive-deps */
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/router';
import { useFirebase } from '../../firebase/useFirebase';
import Post from '../../component/explorePost';
import LoadingSpinner from '../../component/Spinner';

const ExplorePage = () => {
  const router = useRouter();
  const { data: postsData, loading } = useFirebase('Posts');
  const { data: userData } = useFirebase('Users');
  return (
    <Box display='flex' flexDirection='column' gap={3} pt={6} pb={2}>
      <LoadingSpinner open={loading} color='#000' />
      <Box textAlign='center' component='span'>
        <Typography fontWeight={800}>EXPLORE</Typography>
      </Box>
      <Box display='flex' justifyContent='space-around' ml={6} mr={6} sx={{}}>
        <GroupsOutlinedIcon />
        <Typography>peoples</Typography>
        <Divider orientation='vertical' flexItem />
        <MapOutlinedIcon />
        <Typography onClick={() => router.push('/explore/map')}>
          maps
        </Typography>
        <Divider orientation='vertical' flexItem />
        <Button
          size='small'
          variant='contained'
          startIcon={<AddIcon />}
          onClick={() => router.push('/addpost')}
        >
          {' '}
          Share post
        </Button>
      </Box>
      <Box
        display='flex'
        justifyContent='center'
        sx={{ flexGrow: 1, marginBottom: '120px' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '40px',
            width: '80%',
          }}
        >
          {postsData?.map((el, i) => {
            const userFilterData = userData.find(
              (data) => data.id === el.userID
            );
            return (
              <Post
                key={i}
                id={el.id}
                userAvatar={userFilterData?.avatar}
                createdAt={el.createdAt}
                desc={el.desc}
                userName={userFilterData?.firstName}
                image={el.image}
                userID={el.userID}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
export default ExplorePage;
