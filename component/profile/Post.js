import { Stack, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import PostItems from './Post-Items';
import classes from '../profile.module.css';
import { useGetUsersDataContext } from '../../context/UsersDataContext';
import { useFirebase } from '../../firebase/useFirebase';

//imported from 'profile/index.js'
const Post = () => {
  const { getUsersData } = useGetUsersDataContext();
  const { getMultipleDataWithSort } = useFirebase('Posts');
  const [postData, setPostData] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  const [selectedTab, setSelectedTab] = useState({
    posts: true,
    videos: false,
  });

  const handleChange = (event) => {
    const { id } = event.target;
    setSelectedTab((prevState) => ({
      [id]: !prevState[id],
    }));
  };

  const { posts, videos } = selectedTab;

  useEffect(() => {
    // setIsLoading(true);
    (async () => {
      const userId = getUsersData.userId;
      try {
        const result = await getMultipleDataWithSort('userID', userId);
        setPostData(result);
        // setIsLoading(false);
      } catch (error) {}
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('post.js');

  return (
    <Stack direction='column' justifyContent='center'>
      <Stack direction='row' justifyContent='center'>
        <Button
          m={2}
          value='videos'
          id='posts'
          onClick={handleChange}
          // disabled={posts ? true : false}
          className={posts ? classes.postTogglerActive : classes.postToggler}
        >
          Posts
        </Button>
        <Button
          value='posts'
          id='videos'
          onClick={handleChange}
          m={2}
          className={videos ? classes.postTogglerActive : classes.postToggler}
        >
          Videos
        </Button>
      </Stack>
      {posts ? <PostItems postData={postData} /> : ''}
    </Stack>
  );
};

export default Post;
