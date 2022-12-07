import Image from 'next/image';
import { Stack } from '@mui/material';
import classes from '../../styles/profile.module.css';
import { useRouter } from 'next/router';
import { useGetPostsDataContext } from '../../context/PostsDataContext';
import { useAuth } from '../../providers';
import { auth } from '../../firebase/useFirebase';

const PostItems = ({ postData }) => {
  const { setPostOwner } = useGetPostsDataContext();
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
      <Stack direction='row' sx={{ background: '#fff' }}>
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
      </Stack>
    </div>
  );
};

export default PostItems;
