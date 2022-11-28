import {Avatar, Box, Button, Divider, Fab, IconButton, ImageList, ImageListItem, Input, Modal, TextField, Typography,} from '@mui/material'
import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from "styled-components";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useAuth } from '../providers';
import { useRouter } from 'next/router';
import { uuidv4 } from '@firebase/util';
import CheckIcon from '@mui/icons-material/Check';
import { useRef } from 'react';

function Editprofile() {
    const [selectedProfileImage, setSelectedProfileImage] = useState();
    const [selectedBackgroundImage, setSelectedBackgroundImage] = useState();
    const [imageData, setImageData] = useState();
    const userNameRef = useRef(null)
    console.log("userNameRef", userNameRef.current);

    const {userData} = useAuth()
    const router = useRouter()


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  

    const imgUploadHandler = (e) => {
        const file = e.target.files[0];
        const fileName = `${file.name}-${uuidv4()}`;
        const reader = new FileReader();
        reader.onload = (event) => {
            if (e.target.id === "profileImage") {
                setSelectedProfileImage({
                    ...imageData,
                    url: event.target.result,
                    imageName: fileName,
                    file: file,
                  })
            } else {
                setSelectedBackgroundImage({
                    ...imageData,
                    url: event.target.result,
                    imageName: fileName,
                    file: file,
                })
            }
        };
        reader.readAsDataURL(file);
      };
    
    const goBackHandler = () => {
        router.back();
    };
    const tests = () =>{
        console.log("hey");
    }

    

    const Label = styled.label``;
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 2,
        display:'flex',
        flexDirection:'column',
        alignItems:"center",
        gap:3
      };
    return(
        <>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" sx={{backgroundColor:"#ddd"}}> 
            <Fab variant='circular' size='small' sx={{display:'flex', justifyContent:'center', alignItems:'center'}} onClick={goBackHandler}>
                <ArrowBackIcon/>
            </Fab>
            <Typography variant='h6'>Edit Profile</Typography>
            <Button variant='contained'>Save</Button>
        </Box>
        <Box>
            <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
                <Typography fontSize={15}>Profile picture</Typography>
                <Box >
                        <Label>
                            <Input sx={{ display: "none",  }} type="file" id='profileImage' onChange={imgUploadHandler}/>
                            <Typography fontSize={15} color="#ffbb00">Upload New</Typography>
                        </Label>
                </Box>

            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Avatar alt="user_avatar" src={selectedProfileImage ? selectedProfileImage.url : userData?.avatar} sx={{ width: 106, height: 106 }}/>
            </Box>
            <Divider sx={{margin:'20px 20px 0 20px'}}/>
        </Box>
        <Box >
            <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
                <Typography fontSize={15}>Background picture</Typography>
                <Box>
                    <Label>
                        <Input type='file' sx={{display:'none'}} id='backgroundImage' onChange={imgUploadHandler} >Upload New</Input>
                        <Typography fontSize={15} color="#ffbb00">Upload New</Typography>
                    </Label>
                </Box>
            </Box>
            <Box ml={2} mr={2} display="flex" justifyContent="center" alignItems="center">
                <ImageList sx={{ width: '100%', height: "150px" }} cols={1} rowHeight={164}>
                        <ImageListItem >
                            <img
                                src={selectedBackgroundImage ? selectedBackgroundImage.url : userData?.backgroundImage}
                                alt="test"
                            />
                        </ImageListItem>
                </ImageList>

            </Box>
            <Divider sx={{margin:'20px 20px 0 20px'}}/>
        </Box>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
            <Typography variant='h7' >Name</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant='h7'> {userData?.firstName}</Typography>
                <IconButton onClick={handleOpen}>
                    <NavigateNextIcon />
                </IconButton>
            </Box>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box>
                        <IconButton sx={{border:"1px solid #000"}}>
                            <ArrowBackIcon/>
                        </IconButton>
                    </Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    What's your name?
                    </Typography>
                    <TextField placeholder={userData?.firstName} inputRef={userNameRef}></TextField>
                    <IconButton color='success'>
                        <CheckIcon/>
                    </IconButton>
                </Box>
            </Modal>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
            <Typography variant='h7' >Gender</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant='h7'> {userData?.gender}</Typography>
                <IconButton onClick={tests}>
                    <NavigateNextIcon/>
                </IconButton>
            </Box>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
            <Typography variant='h7' >Date of birth</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant='h7'> {userData?.dateOfBirth}</Typography>
                <IconButton onClick={tests}>
                    <NavigateNextIcon />
                </IconButton>
            </Box>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
            <Typography variant='h7' >Email address</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant='h7'> {userData?.emailAddress}</Typography>
                <IconButton onClick={tests}>
                    <NavigateNextIcon />
                </IconButton>
            </Box>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
            <Typography variant='h7' >City</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant='h7'> {userData?.cityName}</Typography>
                <IconButton onClick={tests}>
                    <NavigateNextIcon />
                </IconButton>
            </Box>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
            <Typography variant='h7' >Phone</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant='h7'> {userData?.phoneNumber}</Typography>
                <IconButton onClick={tests}>
                    <NavigateNextIcon />
                </IconButton>
            </Box>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>
        </>
    )
}

export default Editprofile


