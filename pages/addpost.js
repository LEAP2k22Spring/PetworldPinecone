import { Avatar, Button, Fab, Input, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { useCollection } from "../firebase/useFirebase";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from "next/router";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';


const AddPost = ()=>{
    const { createPost, imageUploadToFirestore } = useCollection("Posts");
    const [imageData, setImageData] = useState({
        url: '',
        file: '',
        imageName: '',
      });
    const descRef = useRef();
    const router = useRouter();

    const UploadImageContainer = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 10px;
    `;
    const UserAvatar = styled(Avatar)`
      width: 50px;
      height: 50px;
    `;
    
    const Label = styled.label`

    `;
    const Image = styled.img`
      object-fit:contain;
      width:100% !important;
      hieght:unset !important
    `;
      // 2) Image picker handler
      const imgUploadHandler = (e) => {
        const file = e.target.files[0];
        const fileName = `${file.name}-${uuidv4()}`;
        const reader = new FileReader();
        reader.onload = (event) => {
          setImageData({
            ...imageData,
            url: event.target.result,
            imageName: fileName,
            file: file,
          });
        };
        reader.readAsDataURL(file);
      };
      const onSave = async () => {
        // Validation - 1;
        const { uploaded, url } = await imageUploadToFirestore(imageData);
    
        if (uploaded) {
          console.log('url', url);
          await saveData(url);
        } else {
          alert('Could not upload image');
          return;
        }
      };
    
      // if image successfully uploaded then save all data to the firebase/firestore
      const saveData = async (url) => {
        const successfullyUploaded = await createPost({
          desc:descRef.current.value,
          image: url,
          ownerID: 'YkrI259vNWXbQuEM6J49zpIDcbJ3',
        });
    
        if (successfullyUploaded) {

          alert('Post successfully created!');
          router.push("/explore")
        }
      };
   
    return(
        <Box>
            <Box display="flex" alignItems="center">
              <ArrowBackIcon fontSize="large" sx={{ position:"absolute", ml:'20px', border:'1px solid #000', borderRadius:'50%', p:'5px'}} onClick={() => router.push("/explore")}/>
              <Box width="100%" height="50px" display="flex" justifyContent="center" alignItems="center" sx={{backgroundColor:"#ddd"}}>
                  <Typography>Share post</Typography>
              </Box>
            </Box>
            <TextField sx={{"& fieldset": { border: 'none' },}} inputRef={descRef} placeholder="Таны оройн зай" multiline fullWidth rows={2}>Description</TextField>
            <Box >
              <Box>
                <Image src={imageData.url} sizes="cover"/>
              </Box>
              <Box display="flex" alignItems="center" p={2} justifyContent="space-between">
                <Label>
                  <Input
                    sx={{ display: 'none' }}
                    type='file'
                    onChange={imgUploadHandler}
                  />
                  <Fab component="span" size="small">
                    <AddPhotoAlternateIcon fontSize="small" />
                  </Fab>
                </Label>
                <Button variant="contained" onClick={onSave}>submit</Button>
              </Box>
            </Box>
        </Box>
    )
}
export default AddPost