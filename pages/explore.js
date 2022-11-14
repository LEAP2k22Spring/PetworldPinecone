import { Avatar, Button, Divider, Typography } from "@mui/material"
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

const ExplorePage = () => {
    const router = useRouter();
    const { postsData } = useGetPostsDataContext();
    const { getFireabasePostsData } = useCollection("Posts")
    useEffect(() => {
        getFireabasePostsData("Posts")
    }, [])
    console.log("postsData", postsData);
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
            {postsData?.map((el, i) => <Box key={i} m="auto" sx={{ width: "80%", hieght: "auto", border: "1px solid #000" }}>
                <Box display="flex" justifyContent="space-between">
                    <Box p={1} gap={2} display="flex" alignItems="center">
                        <Avatar sizes="small" alt="Remy Sharp" src={el.ownerProfile} />
                        <Typography>{el.ownerName}</Typography>
                    </Box>
                    <Box p={1} gap={2} display="flex" alignItems="center">
                        <Button size="small" variant="contained">Follow</Button>
                        <MoreHorizIcon />
                    </Box>
                </Box>
                <Box sx={{ width: "100%", height: "auto", backgroundColor: "#ddd" }}>
                    <img width="100%" src={el.image}/>
                </Box>
                <Box width="100%">
                    <Box display="flex" alignItems="center" p={2} gap={1}>
                        <FavoriteBorderOutlinedIcon />
                        <AddCommentOutlinedIcon />
                        <IosShareOutlinedIcon />
                    </Box>
                </Box>
            </Box>)}

            <Box m="auto" sx={{ width: "80%", hieght: "auto", border: "1px solid #000" }}>
                <Box display="flex" justifyContent="space-between">
                    <Box p={1} gap={2} display="flex" alignItems="center">
                        <Avatar sizes="small" alt="Remy Sharp" src="" />
                        <Typography>Name</Typography>
                    </Box>
                    <Box p={1} gap={2} display="flex" alignItems="center">
                        <Button size="small" variant="contained">Follow</Button>
                        <MoreHorizIcon />
                    </Box>
                </Box>
                <Box sx={{ width: "100%", height: "200px", backgroundColor: "#ddd" }}>

                </Box>
                <Box width="100%">
                    <Box display="flex" alignItems="center" p={2} gap={1}>
                        <FavoriteBorderOutlinedIcon />
                        <AddCommentOutlinedIcon />
                        <IosShareOutlinedIcon />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default ExplorePage