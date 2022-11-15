/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, AvatarGroup, Button, Card, CardActions, CardHeader, CardMedia, Divider, IconButton, Typography } from "@mui/material"
import { Box } from "@mui/system"
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from "next/router";
import { useGetPostsDataContext } from "../context/PostsDataContext";
import { useEffect } from "react";
import { useCollection } from "../firebase/useFirebase";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { red } from '@mui/material/colors';
import moment from "moment"

const ExplorePage = () => {
    const router = useRouter();
    const { postsData } = useGetPostsDataContext();
    const { getFireabasePostsData } = useCollection("Posts")
    useEffect(() => {
        getFireabasePostsData("Posts")
    }, [])

    return (
        <Box display="flex" flexDirection="column" gap={3} pt={6} pb={2}>
            <Box textAlign="center" component="span" >
                <Typography fontWeight={800}>EXPLORE</Typography>
            </Box>
            <Box display="flex" justifyContent="space-around" ml={6} mr={6} sx={{}}>
                <GroupsOutlinedIcon />
                <Typography>peoples</Typography>
                <Divider orientation="vertical" flexItem />
                <MapOutlinedIcon />
                <Typography>maps</Typography>
                <Divider orientation="vertical" flexItem />
                <Button size="small" variant="contained" startIcon={<AddIcon />} onClick={() => router.push("/addpost")}> Share post</Button>
            </Box>
            <Box display="flex" justifyContent="center" sx={{ flexGrow: 1, marginBottom: '120px' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', width: '80%' }}>
                {postsData?.map((el, i) => (
                <Box key={i}>
                    <Card sx={{ width: '350px', borderRadius: '20px' }}>
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: red[500], width:'30px', height:'30px' }} aria-label="recipe" src={el.userAvatar}>
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title={el.userName}
                        subheader={moment(el.createdAt.toDate()).startOf('hour').fromNow()}
                    />
                    <Typography p={2}>{el.desc}</Typography>
                    <CardMedia
                        component="img"
                        height="200"
                        image={el.image}
                        alt="Paella dish"
                    />
                    <CardActions sx={{justifyContent:'space-between'}}>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <Typography sx={{ fontWeight:'400', fontSize:'13px'}}>Liked by</Typography>
                        <AvatarGroup max={3} sx={{'& .MuiAvatar-root': { width: 20, height: 20, fontSize: 12, background:'orange' }, paddingRight:"60px"}}>
                        <Avatar alt="Remy Sharp" src="https://i.pinimg.com/564x/76/ce/7f/76ce7fe848cc16930d2d3570e24850e9.jpg" />
                        <Avatar alt="Travis Howard" src="https://i.pinimg.com/564x/0f/f6/f8/0ff6f8f3a2361ae4e48e0ac6aa9bc939.jpg" />
                        <Avatar alt="Cindy Baker" src="https://i.pinimg.com/564x/0e/a6/5c/0ea65c90ce035d5df688780e551e736a.jpg" />
                        <Avatar alt="Agnes Walker" src="https://i.pinimg.com/564x/c0/8e/50/c08e50721c255c74d25964e740046ba8.jpg" />
                        <Avatar alt="Trevor Henderson" src="https://i.pinimg.com/564x/ba/12/13/ba1213ba9e3be028a6e03f78cfa05e11.jpg" />
                        </AvatarGroup>
                        <IconButton aria-label="add to favorites" sx={{fontSize:'16px', gap:'5px', borderRadius:'15px', bgcolor:'rgb(96 165 250)', color:'white', '&:hover': {
                        backgroundColor: "rgb(0, 87, 194)"
                    }} }>
                        Follow
                        <BookmarkIcon sx={{color:'white'}} />
                        </IconButton>
                    </CardActions>
                    </Card>
                </Box>
                ))}
            </Box>
            </Box>
            </Box>

    )
}
export default ExplorePage