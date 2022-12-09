/* eslint-disable @next/next/no-img-element */
import { Button, Fab, Input, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useRef, useState } from 'react';
import {
  auth,
  imageUploadToFirestore,
  useDocument,
} from '../firebase/useFirebase';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LoadingSpinner from '../component/Spinner';
import { serverTimestamp } from 'firebase/firestore';

const AddPost = () => {
  const { createData: createPost } = useDocument({ path: 'Posts' });
  const [imageData, setImageData] = useState({
    url: '',
    file: '',
    imageName: '',
  });
  const descRef = useRef();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // 2) Image picker handler
  const imgUploadHandler = (e) => {
    console.log("first")

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
    if (imageData.url === "") {
      alert("Please upload your image");
      return;
    }
    const { uploaded, url } = await imageUploadToFirestore(imageData);
    if (uploaded) {
      await saveData(url);
      setIsLoading(false);
    } else {
      alert('Could not upload image');
      return;
    }
  };

  // if image successfully uploaded then save all data to the firebase/firestore
  const saveData = async (url) => {
    const successfullyUploaded = await createPost({
      desc: descRef.current.value,
      userID: auth?.currentUser?.uid,
      image: url,
      createdAt: serverTimestamp(),
    });
    if (successfullyUploaded) {
      alert('Post successfully created!');
      router.push('/explore');
    }
  };

  return (
    <Box>
      <LoadingSpinner open={isLoading} />
      <Box display='flex' alignItems='center'>
        <ArrowBackIcon
          fontSize='large'
          sx={{
            position: 'absolute',
            ml: '20px',
            border: '1px solid #000',
            borderRadius: '50%',
            p: '5px',
          }}
          onClick={() => router.push('/explore')}
        />
        <Box
          width='100%'
          height='50px'
          display='flex'
          justifyContent='center'
          alignItems='center'
          sx={{ backgroundColor: '#ddd' }}
        >
          <Typography>Share post</Typography>
        </Box>
      </Box>
      <TextField
        sx={{ '& fieldset': { border: 'none' } }}
        inputRef={descRef}
        placeholder='Таны оройн зай'
        multiline
        fullWidth
        rows={2}
      >
        Description
      </TextField>
      <Box>
        <Box>
          <img
            src={imageData.url}
            alt=''
            sizes='cover'
            style={{
              objectFit: 'contain',
              width: '100% !important',
              hieght: '300 !important',
            }}
          />
        </Box>
        <Box
          display='flex'
          alignItems='center'
          p={2}
          justifyContent='space-between'
        >
          <label  >
         
        
        
            <Input
              sx={{ display: 'none' }}
              type='file'
              onChange={imgUploadHandler}
            />
                <Fab component='span' size='small'>
              <AddPhotoAlternateIcon fontSize='small' />
            </Fab>
          </label>
          <Button variant='contained' onClick={onSave}>
            submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default AddPost;
