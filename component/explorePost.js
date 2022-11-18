import { Avatar, AvatarGroup, Box, Card, CardActions, CardHeader, CardMedia, getAlertUtilityClass, IconButton, TextField, Typography } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { red } from '@mui/material/colors';
import moment from "moment"
import React, { useEffect, useState } from "react";
import { auth, db, useCollection } from "../firebase/useFirebase";
import { collection, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore";
import { useGetUsersDataContext } from "../context/UsersDataContext";
import PostAddIcon from '@mui/icons-material/PostAdd';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";



const Post = ({ id, userAvatar, createdAt, desc, userName, image, userID }) => {
    const [likes, setLikes] = useState([]);
    const [hasLikes, setHasLikes] = useState(false);
    const { getUsersData } = useGetUsersDataContext();
    const [comment, setComment] = useState("");
    const [user] = useAuthState(auth);
    const router = useRouter();



    useEffect(() =>
        onSnapshot(collection(db, "Posts", id, "likes"), (snapshot) => {
            setLikes(snapshot.docs)
        }
        ), [db, id])

    useEffect(
        () => setHasLikes(likes.findIndex((like) => like.id === user.uid) !== -1),
        [likes]
    );
    const likePost = async () => {
        try {
            if (hasLikes) {
                await deleteDoc(doc(db, "Posts", id, "likes", user.uid));
            } else {
                await setDoc(doc(db, "Posts", id, "likes", user.uid), {
                    userName: getUsersData.firstName,
                    userAvatar: getUsersData.avatar

                });
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
                        {hasLikes ? <FavoriteIcon color="error" /> : <FavoriteIcon />}
                    </IconButton>
                    <Typography sx={{ fontWeight: '400', fontSize: '13px' }}>{likes.length === 0 ? "like" : `liked by ${likes.length}`}</Typography>
                    <AvatarGroup max={3} sx={{ '& .MuiAvatar-root': { width: 20, height: 20, fontSize: 12, background: 'orange' }, paddingRight: "60px" }}>
                        {likes?.map((like, i) => (
                            <Avatar key={i} alt="Remy Sharp" src={like.data().userAvatar} />
                        ))}
                    </AvatarGroup>
                    <IconButton aria-label="add to favorites" sx={{
                        fontSize: '16px', gap: '5px', borderRadius: '15px', bgcolor: 'rgb(96 165 250)', color: 'white', '&:hover': {
                            backgroundColor: "rgb(0, 87, 194)"
                        }
                    }}>
                        Follow
                        <BookmarkIcon sx={{ color: 'white' }} />
                    </IconButton>
                </CardActions>
                <CardActions sx={{ justifyContent: 'space-between' }} >
                    <Typography></Typography>
                    <AddReactionIcon />
                    <TextField size="small" placeholder="Add a comment..."></TextField>
                    <IconButton>
                        <PostAddIcon sx={{
                            '&:hover': {
                                color: 'rgb(96 165 250)'
                            }
                        }} />
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
    )
}
export default Post;