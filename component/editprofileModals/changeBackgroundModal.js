import {
  Avatar,
  Fade,
  IconButton,
  Input,
  Modal,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CameraAltOutlined from '@mui/icons-material/CameraAltOutlined';
import CheckIcon from '@mui/icons-material/Check';
import styled from 'styled-components';
import { useState } from 'react';
import { useAuth } from '../../providers';
import {
  auth,
  imageUploadToFirestore,
  useCollection,
  useSort,
} from '../../firebase/useFirebase';

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

const Label = styled.label`
  position: absolute;
  top: 230px;
  left: 260px;
  width: 30px;
  height: 30px;
  border: 3px solid #fff;
  background-color: #f5f5f7;
  border-radius: 50%;
`;

const ChangeBackgroundModal = ({ openBackground, onClose }) => {
  const { updateData } = useCollection('Users', auth?.currentUser?.uid);
  const { deleteData } = useSort();
  const { userData } = useAuth();

  const [imageData, setImageData] = useState({
    url: '',
    file: '',
    imageName: '',
  });
  const imgUploadHandler = (e) => {
    const file = e.target.files[0];
    const fileName = `${file.name}`;
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
    if (imageData.url === '') {
      alert('Please upload your image');
      return;
    }
    const { uploaded, url } = await imageUploadToFirestore(imageData);
    if (uploaded) {
      updateData({ backgroundImage: url });
      if (userData?.backgroundImage) {
        deleteData(userData?.backgroundImage);
      }
      onClose(false);
      alert('Амжилттай зураг солигдлоо');
    } else {
      alert('Could not upload image');
      return;
    }
  };
  return (
    <Modal open={openBackground} onClose={onClose}>
      <Box sx={style}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <IconButton
            onClick={() => onClose(false)}
            sx={{ border: '1px solid #000' }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Add a background photo
          </Typography>
          <Box
            sx={{
              margin: ' 10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* <Avatar alt="user_avatar" src={imageData.url ? imageData.url : ""} sx={{ width: 106, height: 106 }}/> */}
            <img
              src={imageData.url ? imageData.url : userData?.backgroundImage}
              alt='test'
              width='200'
              height={100}
              style={{ objectFit: 'cover' }}
            />
            <Label>
              <Input
                sx={{ display: 'none' }}
                type='file'
                onChange={imgUploadHandler}
              />
              <CameraAltOutlined />
            </Label>
          </Box>
          <IconButton color='success' onClick={onSave}>
            <CheckIcon />
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default ChangeBackgroundModal;
