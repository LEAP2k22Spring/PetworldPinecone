/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Divider,
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
import styles from '../../styles/Home.module.css'

const ExplorePage = () => {
  const router = useRouter();
  const { data: postsData, loading } = useFirebase('Posts');
  const { data: userData } = useFirebase('Users');
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      gap={3}
      pt={6}
      pb={2}
      width="100%"
    >
      <LoadingSpinner open={loading} color='#000' />
      <Box textAlign='center' component='span'>
        <Typography fontWeight={800}>EXPLORE</Typography>
      </Box>
      <Box
        className={styles.explore_top_btn}
        display='flex'
        justifyContent='space-around'
        ml={6}
        mr={6}
      >
        <Box display='flex' sx={{ cursor: 'pointer' }}>
          <GroupsOutlinedIcon sx={{ color: '#ffc024' }} />
          <Typography ml={1}>peoples</Typography>
        </Box>
        <Divider orientation='vertical' flexItem />
        <Box display='flex' sx={{ cursor: 'pointer' }} onClick={() => router.push('/explore/map')}>
          <MapOutlinedIcon sx={{ color: '#ffc024' }} />
          <Typography ml={1} >
            maps
          </Typography>
        </Box>
        <Divider orientation='vertical' flexItem />
        <Button
          size='small'
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
            const userFilterData = userData?.find(
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
