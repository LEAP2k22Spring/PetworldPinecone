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
import { useGetPostsDataContext } from '../../context/PostsDataContext';
import { useEffect } from 'react';
import { auth, useCollection } from '../../firebase/useFirebase';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Post from '../../component/explorePost';

const ExplorePage = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const { postsData } = useGetPostsDataContext();
  const { getFireabasePostsData } = useCollection('Posts');
  const [hasLikes, setHasLikes] = useState(false);
  useEffect(() => {
    getFireabasePostsData();
  }, []);

  return (
    <Box display='flex' flexDirection='column' gap={3} pt={6} pb={2}>
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
            return (
              <Post
                key={i}
                id={el.id}
                userAvatar={el.userAvatar}
                createdAt={el.createdAt}
                desc={el.desc}
                userName={el.userName}
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
