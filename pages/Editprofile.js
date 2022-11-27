import {Avatar, Box, Button, Divider, Fab, ImageList, ImageListItem, Input, Typography,} from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from "styled-components";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Editprofile() {
    const click2 = (e) =>{
        console.log(e);
    }
    return(
        <>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" sx={{backgroundColor:"#ddd"}}> 
            <Fab variant='circular' size='small' sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <ArrowBackIcon/>
            </Fab>
            <Typography variant='h6'>Edit Profile</Typography>
            <Button variant='contained'>Save</Button>
        </Box>
        <Box >
            <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
                <Typography fontSize={15}>Profile picture</Typography>
                <Box>
                        <Input type='file' sx={{display:'none'}} onChange={click2} >Upload New</Input>
                        <Fab size='small' variant='extended' color='error'>
                            <Typography fontSize={12}>Upload New</Typography>
                        </Fab>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Avatar alt="user_avatar" src="" sx={{ width: 106, height: 106 }}/>
            </Box>
            <Divider sx={{margin:'20px 20px 0 20px'}}/>
        </Box>
        <Box >
            <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
                <Typography fontSize={15}>Background picture</Typography>
                <Box>
                        <Input type='file' sx={{display:'none'}} onChange={click2} >Upload New</Input>
                        <Fab size='small' variant='extended' color='error'>
                            <Typography fontSize={12}>Upload New</Typography>
                        </Fab>
                </Box>
            </Box>
            <Box ml={2} mr={2} display="flex" justifyContent="center" alignItems="center">
                <ImageList sx={{ width: '100%', height: "150px" }} cols={1} rowHeight={164}>
                        <ImageListItem >
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/images%2Fcat.png-c7503874-5726-4877-becb-307f3216d3f2?alt=media&token=92d41ca5-5571-47af-b6b0-d4a8d0684804"
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
                <Typography variant='h7'> Munkhbold</Typography>
                <NavigateNextIcon />
            </Box>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
            <Typography variant='h7' >Gender</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant='h7'> Male</Typography>
                <NavigateNextIcon />
            </Box>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
            <Typography variant='h7' >Date of birth</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant='h7'> Male</Typography>
                <NavigateNextIcon />
            </Box>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
            <Typography variant='h7' >Email address</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant='h7'> mbold.unimed@gmail.com</Typography>
                <NavigateNextIcon />
            </Box>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
            <Typography variant='h7' >City</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant='h7'> Ulaanbaatar</Typography>
                <NavigateNextIcon />
            </Box>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
            <Typography variant='h7' >Phone</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant='h7'> 80797850</Typography>
                <NavigateNextIcon />
            </Box>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>
        </>
    )
}

export default Editprofile


