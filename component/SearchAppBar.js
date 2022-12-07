import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css';
import TextField from '@mui/material/TextField';
import PetsIcon from '@mui/icons-material/Pets';
import Autocomplete from '@mui/material/Autocomplete';


export default function LimitTags() {
  return (
    <Stack spacing={2} direction="row" className={styles.search_box}>
      <Autocomplete
        multiple
        limitTags={1}
        id="multiple-limit-tags"
        options={Pets}
        getOptionLabel={(option) => option.breed}
        renderInput={(params) => (
          <TextField color='warning' {...params} label="Search Pets" placeholder="Search.." />
        )}
        sx={{ width: '500px' }}
      />
      <Button sx={{
        height: "55px",
        background: '#ed7d31',
        color: 'white',
        ':hover': {
          background: '#ffc024',
        },
      }}><PetsIcon /></Button>
    </Stack>
  );
}

const Pets = [
  { breed: "Golden Retrievers" },
  { breed: "Boston Terriers" },
  { breed: "Labrador Retrievers" },
  { breed: "Poodles" },
  { breed: "Border Collie" },
  { breed: "Beagle" },
  { breed: "Irish Setter" },
  { breed: "Akita" },
  { breed: "Spaniel" },
  { breed: "Cockapoo" },
  { breed: "Boxer" },
  { breed: "French Bulldog" },
]