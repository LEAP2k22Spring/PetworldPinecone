import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Typography, Stack, Button, Divider } from '@mui/material';
import styled from 'styled-components';
import classes from '../../styles/profile.module.css';
import { useRouter } from 'next/router';
import { useGetPostsDataContext } from '../../context/PostsDataContext';
import { useGetUsersDataContext } from '../../context/UsersDataContext';
import { useAuth } from '../../providers';
import { auth } from '../../firebase/useFirebase';

const PostItems = ({ postData }) => {
  const { setPostOwner } = useGetPostsDataContext();
  // const { getUsersData } = useGetUsersDataContext();
  const { userData } = useAuth();
  const router = useRouter();

  const openAddPetHandler = (docId) => {
    setPostOwner({
      avatar: userData.avatar,
      name: userData.firstName,
      id: auth?.currentUser?.uid,
    });
    router.push(`/profile/posts/${docId}`);
  };
  return (
    <div>
      <Container>
        {/* <Typography
          variant='h6'
          mt={2}
          ml={2}
          sx={{ fontSize: '1.5rem', fontWeight: 700 }}
        >
          Pet photos
        </Typography> */}
        <Stack direction='row' justifyContent='center' flexWrap='wrap'>
          {postData?.map((post, i) => {
            return (
              <Image
                onClick={() => openAddPetHandler(post.docId)}
                key={i}
                src={post?.data?.image}
                alt='Picture of the author'
                width={150}
                height={150}
                className={classes.image}
              />
            );
          })}
        </Stack>
      </Container>
    </div>
  );
};

export default PostItems;
const Container = styled.div`
  display: flex;
  background: white;
`;
