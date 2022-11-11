import { Avatar, Button, Input, TextField } from "@mui/material"
import { Box } from "@mui/system"
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { useCollection } from "../firebase/useFirebase";

const AddPost = ()=>{
    const { createPost, imageUploadToFirestore } = useCollection("Posts");
    const [imageData, setImageData] = useState({
        url: '',
        file: '',
        imageName: '',
      });

      const descRef = useRef();
    const UploadImageContainer = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 10px;
    `;
    const UserAvatar = styled(Avatar)`
      width: 100px;
      height: 100px;
    `;
    
    const Label = styled.label`
      position: absolute;
      top: 80px;
      left: 70px;
      width: 30px;
      height: 30px;
      border: 3px solid #fff;
      background-color: #f5f5f7;
      border-radius: 50%;
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
        }
      };
   
    return(
        <Box>
            <TextField inputRef={descRef}>Description</TextField>
            <UploadImageContainer>
              <div style={{ position: 'relative', margin: ' 10px' }}>
                <UserAvatar src={imageData.url} />
                <Label>
                  <Input
                    sx={{ display: 'none' }}
                    type='file'
                    onChange={imgUploadHandler}
                  />
                  <CameraAltOutlinedIcon />
                </Label>
              </div>
            </UploadImageContainer>
            <Button variant="contained" onClick={onSave}>submit</Button>
        </Box>
    )
}
export default AddPost