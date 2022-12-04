import styled from "styled-components";
import { Avatar, Typography, Stack, TextField, IconButton, Icon, Box, Modal,} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useRouter } from "next/router";
import FemaleIcon from '@mui/icons-material/Female';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React, { useState } from 'react'
import { useRef } from 'react'
import { useAuth } from "../../providers";
import CheckIcon from '@mui/icons-material/Check';
import { deepOrange, green } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const editPetProfile = () => {

  const userNameRef = useRef(null)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {userData} = useAuth()
  const router = useRouter();

   const goBackHandler = () => {
    router.back();
  };

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

  return (
  <MainContainer>
    <Header>
      <BackIconContainer>
        <IconButton onClick={goBackHandler}>
          <ArrowBackIcon fontSize='large' />
        </IconButton>
      </BackIconContainer>
      <SettingsIconContainer>
        <IconButton>
          <SettingsOutlinedIcon fontSize='large' />
        </IconButton>
      </SettingsIconContainer>
        <NameContainer sx={{borderRadius: "5%"}}>
          <Name>
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
                    What's your pet name?
                    </Typography>
                    <TextField placeholder={userData?.firstName} inputRef={userNameRef}></TextField>
                    <IconButton color='success'>
                        <CheckIcon/>
                    </IconButton>
                </Box>
            </Modal>
          </Box>
              <Typography sx={{fontsize: "13px",fontweight: "400", color: "#858383",}}>age: 2y 5m</Typography>
            </Name>
            <Box
                width="150px"
                height="100px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                backGroundColor="red">
                  <FemaleIcon fontSize="large"/>
            </Box>
        </NameContainer>
    </Header>
    <Box marginTop="30px">
      <TextField sx={{marginLeft:"10px"}} id="filled-basic" label="Weight" variant="filled" />
      <TextField sx={{marginLeft:"10px"}} id="filled-basic" label="Height" variant="filled" />
      <TextField sx={{marginLeft:"10px"}} id="filled-basic" label="Color" variant="filled" />
      <TextField sx={{marginLeft:"10px"}} id="filled-basic" label="Birth date" variant="filled" />
      <TextField sx={{marginLeft:"10px"}} id="filled-basic" label="Breed" variant="filled" />
      <TextField sx={{marginLeft:"10px"}} id="filled-basic" label="Vaccinated" variant="filled" />
    </Box>

    <TextContainer>
      <Box>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua</Box>
    </TextContainer>

    <AvatarContainer>

      <Avatar sx={{ bgcolor: "#d9d9d9", width: "100px", height: "100px" }} variant="rounded"/>
      <Avatar sx={{ bgcolor: "#d9d9d9", width: "100px", height: "100px" }} variant="rounded"/>
      <Avatar sx={{ bgcolor: "#d9d9d9", width: "100px", height: "100px" }} variant="rounded"/>
      <Avatar sx={{ bgcolor: "#d9d9d9", width: "100px", height: "100px" }} variant="rounded"/>
      <Avatar sx={{ bgcolor: "#d9d9d9", width: "100px", height: "100px" }} variant="rounded"/>
      <Avatar sx={{ bgcolor: "#d9d9d9", width: "100px", height: "100px" }} variant="rounded"/>

    </AvatarContainer>

  </MainContainer>
  )
}

export default editPetProfile;

const MainContainer = styled.div`
widht: 100%;
height: 120vh;
`
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  background-color: #d9d9d9;
  height: 300px;
`;
const SettingsIconContainer = styled.div`
  padding: 20px;
`;
const BackIconContainer = styled.div`
  padding: 20px;
  position: absolute;
  left: 10px;
`;
const NameContainer = styled.div`
  width: 300px;
  height: 100px;
  background-color: #FFFFFF;
  margin: auto;
  display: flex;
  border-radius: 20px;
  border: 2px solid #B4B4B4;
`
const Name = styled.div`
  width: 150px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const TextContainer = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const AvatarContainer = styled.div`
  width: 400px;
  height: 250px;
  margin: auto;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 30px; 
`
