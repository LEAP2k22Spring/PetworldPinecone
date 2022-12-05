import {Avatar, Box, Button, Divider, Fab,  IconButton, Typography,} from '@mui/material'
import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useRouter } from 'next/router';
import { useCollection } from '../../firebase/useFirebase';
import ChangePetPictureModal from '../../component/editpetmodals.js/changepetpicturemodal';
import ChangePetNameModal from '../../component/editpetmodals.js/changePetNameModal';
import ChangePetWeightModal from '../../component/editpetmodals.js/changePetWeightModal';
import ChangePetHeightModal from '../../component/editpetmodals.js/changePetHeightModal';
import ChangePetColorModal from '../../component/editpetmodals.js/changePetColorModal';
import ChangePetDescriptionModal from '../../component/editpetmodals.js/changePetWeightModal copy';

function EditPetProfile() {
    const router = useRouter()
    const petId = router.query.id;
    const {data:petData} = useCollection("Pets", petId)

    const [openProfile, setOpenProfile] = useState(false);
    const [openPetDescription, setOpenPetDescription] = useState(false);

    const [openPetName, setOpenPetName] = useState(false);
    const [openWeight, setOpenWeight] = useState(false);
    const [openHeight, setOpenHeight] = useState(false);
    const [openColor, setOpenColor] = useState(false);



    const [petInputData, setPetInputData] = useState({
        petName:"",
        gender:"",
        avatar:"",
        backgroundImage:""
      });
    
    const goBackHandler = () => {
        router.back();
    };
    const clickOpen = (e) =>{
        // // setOpen(true)
        if(e.currentTarget.id === "upload-profile-image"){
            setOpenProfile(true)
        }
        if(e.currentTarget.id === "description"){
            setOpenPetDescription(true)
        }
        if(e.currentTarget.id === "pet-name"){
            setOpenPetName(true)
        }
        if(e.currentTarget.id === "pet-weight"){
            setOpenWeight(true)
        }
        if(e.currentTarget.id === "pet-height"){
            setOpenHeight(true)
        }
        if(e.currentTarget.id === "pet-color"){
            setOpenColor(true)
        }
    }

    return(
        <>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" sx={{backgroundColor:"#ddd"}}> 
            <Fab variant='circular' size='small' sx={{display:'flex', justifyContent:'center', alignItems:'center'}} onClick={goBackHandler}>
                <ArrowBackIcon/>
            </Fab>
            <Typography variant='h6'>Pet Profile Edit</Typography>
            <Button variant='contained' onClick={()=>router.push("/profile")}>Save</Button>
        </Box>
        <Box>
            <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
                <Typography fontSize={15}>Profile picture</Typography>
                <Box >
                    <IconButton id='upload-profile-image'  onClick={clickOpen}>
                        <Typography fontSize={15} color="#ffbb00" id="sss" >Upload New</Typography>
                    </IconButton>
                    <ChangePetPictureModal openProfile={openProfile} onClose={()=>setOpenProfile(false)} petId={petId}/>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Avatar alt="user_avatar" src={petData?.image ? petData?.image : ""} sx={{ width: 106, height: 106 }}/>
            </Box>
            <Divider sx={{margin:'20px 20px 0 20px'}}/>
        </Box>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
            <Typography variant='h7' >Description</Typography>
                <Typography variant='h7'> {petInputData?.description ? petInputData?.description : petData?.description}</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <IconButton id='description' onClick={clickOpen}>
                    <NavigateNextIcon />
                </IconButton>
                    <ChangePetDescriptionModal openPetDescription={openPetDescription} onClose={()=>setOpenPetDescription(false)} petId={petId}/>
            </Box>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>

        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
            <Typography variant='h7' >Name</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant='h7'> {petInputData?.petName ? petInputData?.petName : petData?.petName}</Typography>
                <IconButton id='pet-name' onClick={clickOpen}>
                    <NavigateNextIcon />
                </IconButton>
                    <ChangePetNameModal openPetName={openPetName} onClose={()=>setOpenPetName(false)} petId={petId}/>
            </Box>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
            <Typography variant='h7' >Gender</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant='h7'> {petInputData?.gender ? petInputData?.gender : petData?.sex}</Typography>
                <IconButton id='change-gender' >
                    <NavigateNextIcon/>
                </IconButton>
                
            </Box>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
            <Typography variant='h7' >Weight (kg)</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant='h7'> {petData?.weight}</Typography>
                <IconButton id='pet-weight' onClick={clickOpen}>
                    <NavigateNextIcon />
                </IconButton>
                <ChangePetWeightModal openWeight={openWeight} onClose={()=>setOpenWeight(false)} petId={petId}/>
            </Box>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>

        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
            <Typography variant='h7' >Height (cm):</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant='h7'> {petData?.height}</Typography>
                <IconButton id='pet-height' onClick={clickOpen}>
                    <NavigateNextIcon />
                </IconButton>
                <ChangePetHeightModal openHeight={openHeight} onClose={()=>setOpenHeight(false)} petId={petId}/>

            </Box>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>

        <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
            <Typography variant='h7' >Color</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant='h7'> {petData?.color}</Typography>
                <IconButton id='pet-color' onClick={clickOpen}>
                    <NavigateNextIcon />
                </IconButton>
                <ChangePetColorModal openColor={openColor} onClose={()=>setOpenColor(false)} petId={petId}/>

            </Box>
        </Box>
        <Divider sx={{margin:'0 20px 0 20px'}}/>




        {/* <Box p={2} display="flex" justifyContent="space-between" alignItems="center" > 
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
        <Divider sx={{margin:'0 20px 0 20px'}}/> */}
        </>
    )
}

export default EditPetProfile


