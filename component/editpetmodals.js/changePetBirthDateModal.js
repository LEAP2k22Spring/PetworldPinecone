/* eslint-disable react/no-unescaped-entities */
import { IconButton, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';
import { useCollection } from "../../firebase/useFirebase";
import { useRef } from "react";

const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ChangePetNameModal = ({openPetName, onClose, petId}) =>{
    const {updateData} = useCollection("Pets", petId)
    const {data:petData} = useCollection("Pets", petId)
    const petNameRef = useRef()

      const onSave = async () => {
        updateData({petName:petNameRef.current.value})
        onClose(false)
      };
    return(
            <Modal open={openPetName} onClose={onClose}>
                <Box sx={style}>
                    <Box sx={{display:'flex', flexDirection:"column", alignItems:'center', gap:2}}>
                        <IconButton onClick={()=>onClose(false)} sx={{border:"1px solid #000"}}>
                            <ArrowBackIcon/>
                        </IconButton>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                        What's your pet name?
                        </Typography>
                        <Box sx={{margin: ' 10px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            <TextField placeholder={petData?.petName} error={false}
                              name='petName'
                              label='Name*'
                              // defaultValue='Hello World'
                              inputRef={petNameRef}
                              onBlur={onSave}
                            ></TextField>
                        </Box>
                        <IconButton color='success' onClick={onSave} >
                            <CheckIcon/>
                        </IconButton>
                    </Box>
                </Box>
            </Modal>
    )
}
export default ChangePetNameModal;