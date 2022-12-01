import {Avatar, Box, Button, Divider, Fab,  IconButton, Typography,} from '@mui/material'
import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useAuth } from '../providers';
import { useRouter } from 'next/router';
import ChangeGenderModal from '../component/editprofileModals/changeGenderModal';
import ChangeBackgroundModal from '../component/editprofileModals/changeBackgroundModal';
import ChangeImageModal from '../component/editprofileModals/changeImageModal';
import { auth, useDocument } from '../firebase/useFirebase';

function Editprofile() {
    const {userData , loading} = useAuth()
    
    // const { data: userData, loading } = useDocument({
    //     path: "Users",
    //     docId: auth?.currentUser?.uid,
    //   });
 

    const router = useRouter()
    const [openProfile, setOpenProfile] = useState(false);
    const [openBackground, setOpenBackground] = useState(false);
    const [openGender, setOpenGender] = useState(false);

    const [petInputData, setPetInputData] = useState({
        // firstName:"",
        gender:"",
        avatar:"",
        backgroundImage:""
      });
    
    const goBackHandler = () => {
        router.back();
    };
    const clickOpen = (e) =>{
        console.log("e", e.currentTarget.id);
        // setOpen(true)
        if(e.currentTarget.id === "upload-profile-image"){
            setOpenProfile(true)
        }
        if(e.currentTarget.id === "upload-background-image"){
            setOpenBackground(true)
        }
        if(e.currentTarget.id === "change-gender"){
            setOpenGender(true)
        }
    }

    return(
        <>
        {loading && <LoadingSpinner open={loading} />}
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" sx={{backgroundColor:"#ddd"}}> 
            <Fab variant='circular' size='small' sx={{display:'flex', justifyContent:'center', alignItems:'center'}} onClick={goBackHandler}>
                <ArrowBackIcon/>
            </Fab>
            <Typography variant='h6'>Edit Profile</Typography>
            <Button variant='contained' onClick={()=>router.push("/profile")}>Save</Button>
        </Box>
        <Box>
            <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
                <Typography fontSize={15}>Profile picture</Typography>
                <Box >
                    <IconButton id='upload-profile-image'  onClick={clickOpen}>
                        <Typography fontSize={15} color="#ffbb00" id="sss" >Upload New</Typography>
                    </IconButton>
                    <ChangeImageModal openProfile={openProfile} onClose={()=>setOpenProfile(false)}/>
                </Box>

            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Avatar alt="user_avatar" src={userData?.avatar} sx={{ width: 106, height: 106 }}/>
            </Box>
            <Divider sx={{margin:'20px 20px 0 20px'}}/>
        </Box>
        <Box >
            <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
                <Typography fontSize={15}>Background picture</Typography>
                <Box>
                    <IconButton id='upload-background-image' onClick={clickOpen}>
                        <Typography fontSize={15} color="#ffbb00" >Upload New</Typography>
                    </IconButton>
                    <ChangeBackgroundModal openBackground={openBackground} onClose={()=>setOpenBackground(false)}/>
                </Box>
            </Box>
            <Box ml={2} mr={2} display="flex" justifyContent="center" alignItems="center">
                            <img
                                src={userData?.backgroundImage}
                                alt="test"
                                width="100%"
                                height={300}
                                style={{objectFit:"cover"}}
                            />
            </Box>
            <Divider sx={{margin:'20px 20px 0 20px'}}/>
        </Box>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
            <Typography variant='h7' >Name</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant='h7'> {petInputData?.firstName ? petInputData?.firstName : userData?.firstName}</Typography>
                <IconButton >
                    <NavigateNextIcon />
                </IconButton>
            </Box>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
            <Typography variant='h7' >Gender</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant='h7'> {petInputData?.gender ? petInputData?.gender : userData?.gender}</Typography>
                <IconButton id='change-gender' onClick={clickOpen}>
                    <NavigateNextIcon/>
                </IconButton>
                    <ChangeGenderModal openGender={openGender} onClose={()=>setOpenGender(false)}/>
            </Box>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
            <Typography variant='h7' >Date of birth</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant='h7'> {userData?.dateOfBirth}</Typography>
                <IconButton onClick={clickOpen}>
                    <NavigateNextIcon />
                </IconButton>
                
            </Box>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
            <Typography variant='h7' >Email address</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant='h7'> {userData?.emailAddress}</Typography>
                <IconButton onClick={clickOpen}>
                    <NavigateNextIcon />
                </IconButton>
            </Box>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
            <Typography variant='h7' >City</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant='h7'> {userData?.cityName}</Typography>
                <IconButton onClick={clickOpen}>
                    <NavigateNextIcon />
                </IconButton>
            </Box>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
            <Typography variant='h7' >Phone</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant='h7'> {userData?.phoneNumber}</Typography>
                <IconButton onClick={clickOpen}>
                    <NavigateNextIcon />
                </IconButton>
            </Box>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>
        </>
    )
}

export default Editprofile


