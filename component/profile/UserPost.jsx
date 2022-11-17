import { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import {
  Typography,
  Stack,
  Divider,
  Avatar,
  Popper,
  Button,
  IconButton,
  Box,
  Modal,
  Fade,
  Paper,
} from '@mui/material';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import classes from '../../component/profile.module.css';
import { useGetUsersDataContext } from '../../context/UsersDataContext';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useFirebase } from '../../firebase/useFirebase';
import { useRouter } from 'next/router';
import LoadingSpinner from '../Spinner';

//pages/profile/[...slug].js-ees duudagdagj bga.
const UserPost = ({ postData }) => {
  const router = useRouter();
  const { updateData, deleteData } = useFirebase('Posts');
  const [isLoading, setIsLoading] = useState(false);
  const { getUsersData } = useGetUsersDataContext();
  const [openModal, setOpenModal] = useState(false);
  const [disableInput, setDisableInput] = useState(true);
  const [inputEditButton, setInputEditButton] = useState(false);
  const [desc, setDesc] = useState();
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  useEffect(() => {
    setDesc(postData?.desc);
  }, [postData]);

  const goBackHandler = () => {
    router.back();
  };

  const onPostEditHandler = () => {
    setInputEditButton(true);
  };

  const onChange = (e) => {
    setDesc(e.target.value);
  };

  // FINAL STEP 1. - Delete data from the firestore
  const onPostDeleteHandler = async (choice) => {
    if (choice === 'yes') {
      setIsLoading(true);
      //1) get doc ID from "localhost:3000/profile/posts/PGxpOpuxFpscgloxV62g" url
      const postId = router.query.slug[1];
      try {
        await deleteData(postId);
        setOpenModal(false);
        setIsLoading(false);
        // alert('таны пост устлаа.');
        router.push('/profile');
      } catch (error) {}
    }
    setOpenModal(false);
  };
  // FINAL STEP 2. - Update data to the firestore
  const onSubmit = async () => {
    //1) get doc ID from "localhost:3000/profile/posts/PGxpOpuxFpscgloxV62g" url
    const postId = router.query.slug[1];

    //2) Check if input field is changed, then proceed...
    if (postData?.desc !== desc) {
      setIsLoading(true);
      try {
        await updateData(
          {
            desc: desc,
          },
          postId
        );
        setInputEditButton(false);
        setIsLoading(false);
        alert('doc updated!');
      } catch (error) {}
    } else {
      setInputEditButton(false);
      console.log('nothing changed!');
    }
  };

  return (
    <>
      <Container>
        <LoadingSpinner open={isLoading} />
        {/* 1) =================================== */}
        <Header>
          <BackIconContainer onClick={goBackHandler}>
            <ArrowBackIosNewOutlinedIcon fontSize='large' />
          </BackIconContainer>
          <Typography variant='h6' sx={{ fontSize: '1.5rem', fontWeight: 700 }}>
            My posts
          </Typography>
        </Header>
        <Divider sx={{ borderBottomWidth: 20, borderColor: '#d9d9d9' }} />
        {/* 2) =================================== */}
        <UserProfile>
          {/* 2.1) =================================== */}
          <AvatarContainer>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
            >
              <UserAvatar src={getUsersData?.avatar} />
              <Typography
                variant='h6'
                ml={2}
                sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#696969' }}
              >
                {getUsersData?.firstName}
              </Typography>
            </Stack>
            {/* 2.1.1) =================================== */}
            <PopupState variant='popper' popupId='demo-popup-popper'>
              {(popupState) => (
                <div>
                  <IconButton variant='contained' {...bindToggle(popupState)}>
                    <MoreHorizOutlinedIcon fontSize='large' />
                  </IconButton>
                  <Popper {...bindPopper(popupState)} transition>
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={350}>
                        <Paper elevation={3}>
                          <Stack direction='column' alignItems='flex-start'>
                            <Button
                              startIcon={<DeleteIcon />}
                              onClick={handleOpen}
                            >
                              Delete post
                            </Button>{' '}
                            <Divider style={{ width: '100%' }} />
                            <Button
                              startIcon={<EditIcon />}
                              onClick={onPostEditHandler}
                            >
                              Edit post
                            </Button>
                          </Stack>
                        </Paper>
                      </Fade>
                    )}
                  </Popper>
                </div>
              )}
            </PopupState>
          </AvatarContainer>{' '}
          {/* 2.2) =================================== */}
          <PostImage>
            <Image
              src={postData?.image}
              alt='Picture of the author'
              width={600}
              height={400}
              className={classes.postImage}
            />{' '}
          </PostImage>
          <div className={classes.postDescription}>
            {inputEditButton && (
              <div>
                <Button
                  onClick={() => {
                    !disableInput && onSubmit();
                    setDisableInput((prevState) => !prevState);
                  }}
                >
                  {disableInput ? 'change' : 'done'}
                </Button>
              </div>
            )}

            <div className={classes.comment}>
              <input
                type='text'
                className={
                  disableInput ? classes.commentInActive : classes.commentActive
                }
                disabled={disableInput}
                value={desc}
                onChange={onChange}
              />
            </div>
          </div>
        </UserProfile>{' '}
        {/* 2.2) =================================== */}
        <div>
          <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box sx={style}>
              <Typography
                variant='h6'
                mb={5}
                sx={{ textAlign: 'center', fontWeight: 700 }}
              >
                Та постоо устгахдаа итгэлтэй байна уу?
              </Typography>
              <Stack direction='row'>
                <Button
                  variant='contained'
                  onClick={() => onPostDeleteHandler('yes')}
                  sx={{ width: '100%', marginTop: '10px' }}
                >
                  Тийм
                </Button>
                <Button
                  variant='contained'
                  onClick={() => onPostDeleteHandler('no')}
                  sx={{ width: '100%', margin: '10px 20px 0' }}
                >
                  Үгүй
                </Button>
              </Stack>
            </Box>
          </Modal>
        </div>
      </Container>
    </>
  );
};

export default UserPost;
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
const Container = styled.div`
  position: relative;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  height: auto;
  margin: 20px;
`;

const BackIconContainer = styled.div`
  padding: 20px;
  position: absolute;
  left: 10px;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const UserAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
`;
const PostImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
