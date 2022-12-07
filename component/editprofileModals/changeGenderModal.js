import {  IconButton,  Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';

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


const ChangeGenderModal = ({openGender, onClose}) =>{
    return(
            <Modal open={openGender} onClose={onClose}>
                <Box sx={style}>
                    <Box sx={{display:'flex', flexDirection:"column", alignItems:'center', gap:2}}>
                        <IconButton onClick={()=>onClose(false)} sx={{border:"1px solid #000"}}>
                            <ArrowBackIcon/>
                        </IconButton>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                        What's your gender
                        </Typography>
                        <Box sx={{margin: ' 10px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            {/* <Avatar alt="user_avatar" src={imageData.url ? imageData.url : userData?.avatar} sx={{ width: 106, height: 106 }}/> */}
                            {/* <Label>
                                <Input
                                    sx={{ display: 'none' }}
                                    type='file'
                                    onChange={imgUploadHandler}
                                />
                                <CameraAltOutlined />
                            </Label> */}
                            <Typography textAlign="center">Хүүш та чинь одоо хүйсээ сольцон юм уу. {<img width={20} height={20} src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/5a24123c6003f508dd5d5b39.png?alt=media&token=cd5c1bf9-dd7e-4aae-9b18-9a24dd1272e5"/>} </Typography>
                        </Box>
                        <IconButton color='success' >
                            <CheckIcon/>
                        </IconButton>
                    </Box>
                </Box>
            </Modal>
    )
}

export default ChangeGenderModal;