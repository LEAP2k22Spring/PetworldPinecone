import { useState } from 'react';
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
import classes from '../../styles/profile.module.css';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { auth, useCollection, useDocument, useFirebase, useSort, useSubCollection } from '../../firebase/useFirebase';
import { useRouter } from 'next/router';
import LoadingSpinner from '../Spinner';
import moment from 'moment';

const UserPost = ({ postId }) => {
  const router = useRouter();
  const { deleteData } = useFirebase('Posts');
  const { data: postData, updateData } = useCollection("Posts", postId)
  const { data: userData } = useCollection("Users", postData?.userID)
  const { data: likes } = useSubCollection("Posts", postId, "likes")
  const { data: comments, deleteData: deleteComment, createData: createComment } = useSubCollection("Posts", postId, "comments")
  const { deleteData: deleteImage } = useSort();

  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [disableInput, setDisableInput] = useState(true);
  const [inputEditButton, setInputEditButton] = useState(false);
  const [desc, setDesc] = useState('');
  const [isReadMore, setIsReadMore] = useState(true);

  console.log("ddd", postData?.image);
  const handleOpen = (e) => {
    if (e.target.id === 'delete') {
      setOpenModal(true);
    } else {
      setOpenEditModal(true);
      setDisableInput(false);
    }
  };

  const handleClose = (choice) => {
    if (choice === 'delete') {
      setOpenModal(false);
    } else {
      setOpenEditModal(false);
    }
  };

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

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
        deleteImage(postData?.image)
        console.log();
        setOpenModal(false);
        setIsLoading(false);
        // alert('таны пост устлаа.');
        router.push('/profile');
      } catch (error) { }
    }
    setOpenModal(false);
  };

  // FINAL STEP 2. - Update data to the firestore
  const onSubmit = async () => {
    //1) get doc ID from "localhost:3000/profile/posts/PGxpOpuxFpscgloxV62g" url
    const postId = router.query.slug[1];

    //2) Check if input field is changed, then proceed...
    if (postData?.desc.trim() !== desc.trim()) {
      setIsLoading(true);
      setOpenEditModal(false);

      try {
        updateData({
          desc: desc,
        });

        if (updateData) {
          setInputEditButton(false);
          setIsLoading(false);
          alert('doc updated!');
        }
      } catch (error) { }
    } else {
      setOpenEditModal(true);
      alert('nothing changed!');
    }
  };

  return (
    <>
      <Container>
        <LoadingSpinner open={isLoading} />
        {/* 1) ==============HEADER===================== */}
        <Header>
          <BackIconContainer onClick={goBackHandler}>
            <IconButton>
              <ArrowBackIcon fontSize='large' />
            </IconButton>
          </BackIconContainer>
          <Typography variant='h6' sx={{ fontSize: '1.5rem', fontWeight: 700 }}>
            {auth?.currentUser?.uid === postData?.userID
              ? 'My posts'
              : `${userData?.firstName}'s posts`}
          </Typography>
        </Header>
        <Divider sx={{ borderBottomWidth: 20, borderColor: '#d9d9d9' }} />
        {/* 2) =============USER SECTION================== */}
        <UserProfile>
          {/* 2.1) =============USER AVATAR====================== */}
          <AvatarContainer>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
            >
              <UserAvatar src={userData?.avatar} />
              <Typography
                variant='h6'
                ml={2}
                sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#696969' }}
              >
                {userData?.firstName}
              </Typography>
            </Stack>
            {/* 2.1.1) =================================== */}
            {auth?.currentUser?.uid === postData?.userID && (
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
                                id='delete'
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
            )}
          </AvatarContainer>
          {/* 2.2) ==========USER POST IMAGE========================= */}
          <PostImage>
            {postData ? (
              <Image
                src={postData?.image}
                alt='Picture of the author'
                width={600}
                height={400}
                className={classes.postImage}
              />
            ) : (
              <Image
                src='https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/no-image%20(1).png?alt=media&token=a56e4cdf-5382-4c6f-8860-aaa004558de6'
                alt='Picture of the'
                width={600}
                height={400}
                className={classes.postImage}
              />
            )}
          </PostImage>
          {/* 2.3) ==========USER LIKES========================= */}
          <Typography
            variant='h6'
            ml={2}
            mt={1}
            sx={{ fontSize: '1rem', fontWeight: 700 }}
          >
            {likes?.length} likes
          </Typography>
          {/* 2.4.1) ==================USER OWN POST======================== */}
          <div>
            <Stack direction='row' alignItems='flex-start' ml={2}>
              <Typography
                variant='h6'
                component='span'
                sx={{
                  fontSize: '1rem',
                  fontWeight: 700,
                }}
              >
                {userData?.firstName}
                <span style={{ fontWeight: '400', marginLeft: '10px' }}>
                  {isReadMore ? postData?.desc?.slice(0, 100) : postData?.desc}
                </span>
                <button
                  onClick={toggleReadMore}
                  className={classes.viewMoreBtn}
                >
                  {postData?.desc?.length < 100
                    ? ''
                    : isReadMore
                      ? '...read more'
                      : ' show less'}
                </button>
                {inputEditButton && (
                  <Button id='edit' onClick={handleOpen}>
                    edit
                  </Button>
                )}
              </Typography>
            </Stack>
          </div>
          {/* 2.4) ==================COMMENTS======================== */}
          <div className={classes.postDescription}>
            {/* 2.4.2) ==================COMMENTS======================== */}
            <div className={classes.comment}>
              {/* ==================OTHER COMMENTS======================== */}
              {comments?.map((comment, i) => {
                return (
                  <>
                    <Stack direction='row' alignItems='center'>
                      <UserAvatarSmall src={comment?.data().userAvatar} />
                      <Stack direction='column' sx={{ width: '100%' }}>
                        <Stack direction='row' alignItems='center'>
                          <Typography
                            variant='h6'
                            ml={1}
                            sx={{
                              fontSize: '1rem',
                              fontWeight: 700,
                            }}
                          >
                            {comment?.data().userName}
                          </Typography>
                          <Typography
                            variant='h6'
                            ml={2}
                            sx={{
                              fontSize: '0.75rem',
                              color: '#696969',
                            }}
                          >
                            {moment(
                              new Date(comment?.data().createdAt.seconds * 1000)
                            ).fromNow()}
                          </Typography>
                        </Stack>
                        <Typography
                          variant='h6'
                          ml={1}
                          sx={{
                            fontSize: '14px',
                            fontWeight: 700,
                          }}
                        >
                          {comment?.data().comment}
                        </Typography>
                      </Stack>
                    </Stack>
                  </>
                );
              })}
            </div>
          </div>
        </UserProfile>
        {/* 2.2) =========DELETE POST MODAL========================== */}
        <div>
          <Modal
            open={openModal}
            onClose={() => handleClose('delete')}
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
        {/* 2.2) =========EDIT POST MODAL========================== */}
        <div>
          <Modal
            open={openEditModal}
            onClose={() => handleClose('edit')}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box sx={style}>
              <Typography
                variant='h6'
                mb={1}
                sx={{ textAlign: 'center', fontWeight: 700 }}
              >
                Та постоо өөрчилнө үү?
              </Typography>{' '}
              <textarea
                className={
                  disableInput ? classes.commentInActive : classes.commentActive
                }
                disabled={disableInput}
                // value={desc}
                onChange={onChange}
                rows='10'
                cols='50'
              >
                {desc}
              </textarea>
              <Stack direction='row'>
                <Button
                  variant='contained'
                  onClick={onSubmit}
                  sx={{ width: '100%', marginTop: '10px' }}
                >
                  Хадгалах
                </Button>
                <Button
                  variant='contained'
                  onClick={() => handleClose('edit')}
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
  margin-bottom: 120px;
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
const UserAvatarSmall = styled(Avatar)`
  width: 50px;
  height: 50px;
  margin: 10px;
  border: 1px solid;
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
