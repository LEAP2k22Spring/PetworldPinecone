import { Avatar, AvatarGroup, Box, Card, CardActions, CardHeader, CardMedia,  IconButton, TextField, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { red } from '@mui/material/colors';
import moment from "moment"
import React, {  useState } from "react";
import { auth, useSubCollection } from "../firebase/useFirebase";
import {  serverTimestamp,  } from "firebase/firestore";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useGetPostsDataContext } from "../context/PostsDataContext";
import { useAuth } from "../providers";



const Post = ({ id, userAvatar, createdAt, desc, userName, image, userID }) => {
    const {userData} = useAuth();
    const [comment, setComment] = useState("");
    const router = useRouter();
    const { data: likes, deleteData: deleteLike, updateData: updateLike } = useSubCollection("Posts", id, "likes")
    const { data: comments, deleteData: deleteComment, createData: createComment } = useSubCollection("Posts", id, "comments")
    const { data: follows, deleteData: unfollow, updateData: updateFollow } = useSubCollection("Users", userID, "follows")

    console.log("Log");
    //Post likes deleteData and createData
    const likePost = async () => {
        try {
            if (likes?.find((like) => like?.id === auth?.currentUser?.uid)) {
                deleteLike(auth?.currentUser?.uid)
            } else {
                updateLike(auth?.currentUser?.uid, { userName: userData.firstName, userAvatar: userData.avatar })
            }
        } catch (error) {
            console.log(error);
        }
    };

    const sendComment = async (e) => {

        e.preventDefault();
        /*     setLoading(true); */
        try {
            createComment(auth?.currentUser?.uid, {
                comment: comment,
                userName: userData.firstName,
                userAvatar: userData.avatar,
                createdAt: serverTimestamp(),
                userId: auth?.currentUser?.uid
            })
        } catch (error) {
            console.log(error);
        }

        setComment("");
        /*  setLoading(false); */
    };


    const followUser = async () => {
        try {
            if (follows?.find((follow) => follow?.id === auth?.currentUser?.uid)) {
                unfollow(auth?.currentUser?.uid)
            } else {
                updateFollow(auth?.currentUser?.uid, { userName: userData.firstName, userAvatar: userData.avatar })
            }
        } catch (error) {
            console.log(error);
        }
    };


    const openAddPetHandler = (docId) => {
        router.push(`/profile/posts/${docId}`);
    };
    return (
        <Box>
            <Card sx={{ width: '350px', borderRadius: '20px' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500], width: '30px', height: '30px' }} aria-label="recipe" src={userAvatar}>
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={userName}
                    subheader={moment(new Date(createdAt?.seconds * 1000)).fromNow()}
                />
                <Typography p={2}>{desc}</Typography>
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt="Paella dish"
                    onClick={() => openAddPetHandler(id)}
                />

                <CardActions sx={{ justifyContent: 'space-between' }}>
                    <IconButton aria-label="add to favorites" onClick={likePost}>
                        <FavoriteIcon color={likes?.find((like) => like?.id === auth?.currentUser?.uid) ? 'error' : 'inherit'} />
                    </IconButton>
                    <Typography sx={{ fontWeight: '400', fontSize: '13px' }}>{likes?.length === 0 ? "like" : `liked by ${likes?.length}`}</Typography>
                    <AvatarGroup max={3} sx={{ '& .MuiAvatar-root': { width: 20, height: 20, fontSize: 12, background: 'orange' }, paddingRight: "60px" }}>
                        {likes?.map((like, i) => (
                            <Avatar key={i} alt="Remy Sharp" src={like.data().userAvatar} />
                        ))}
                    </AvatarGroup>
                    {auth?.currentUser?.uid === userID ? "" : <IconButton aria-label="add to favorites" onClick={followUser} sx={{
                        fontSize: '16px', gap: '5px', borderRadius: '15px', bgcolor: 'rgb(96 165 250)', color: 'white', '&:hover': {
                            backgroundColor: "rgb(0, 87, 194)"
                        }
                    }}>
                        {follows?.find((follow) => follow?.id === auth?.currentUser?.uid) ? "Unfollow" : "Follow"}
                        <BookmarkIcon sx={{ color: 'white' }} />
                    </IconButton>}
                </CardActions>
                <CardActions sx={{ justifyContent: 'space-between' }} >
                    {/* <AddReactionIcon /> */}
                    <TextField fullWidth size="small" placeholder="Add a comment..." value={comment} onChange={(e) => setComment(e.target.value)}></TextField>
                    <IconButton onClick={sendComment}>
                        <PostAddIcon sx={{
                            '&:hover': {
                                color: 'rgb(96 165 250)'
                            }
                        }} />
                    </IconButton>
                </CardActions>
                {comments?.map((comment, i) => (
                    <CardActions key={i} sx={{ justifyContent: 'space-between', alignItems: "center", justifyItems: "center" }}>
                        <Box display="flex" gap={1} justifyContent="center" alignItems="center">
                            <Avatar sx={{ bgcolor: red[500], width: '30px', height: '30px' }} aria-label="recipe" src={comment?.data().userAvatar}>
                            </Avatar>
                            <Typography fontSize={15} fontWeight={600}>{comment?.data().userName}</Typography>
                            <Typography fontSize={15}>{comment?.data().comment}</Typography>

                        </Box>
                        <Typography fontSize={13}>{moment(new Date(comment?.data().createdAt?.seconds * 1000)).fromNow()}</Typography>
                        {auth?.currentUser?.uid === comment?.data().userId ? <DeleteOutlineOutlinedIcon fontSize="small" onClick={() => deleteComment(comment?.id)} sx={{
                            '&:hover': {
                                color: 'rgb(96 165 250)', cursor: "pointer"
                            }
                        }} /> : ""}
                    </CardActions>
                ))}
            </Card>
        </Box>
    )
}
export default Post;