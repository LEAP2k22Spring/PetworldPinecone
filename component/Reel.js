import { Box } from '@mui/system';
import * as React from 'react';
import styles from '../styles/Home.module.css'
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player';
import { useState } from 'react';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
  };

export default function Reel() {
const [isPlaying, _setIsPlaying] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className={styles.team}>
        <Box className={styles.container_1}>
            {/* {teamData && teamData((team, index)=>{})} */}
            <Box className={styles.profile_1} onClick={handleOpen}>
                <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt=""/>
                <span className={styles.name_1}>Bataa</span>
            </Box>
            <Box className={styles.profile_1} onClick={handleOpen}>
                <img src="https://images.unsplash.com/photo-1530577197743-7adf14294584?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80" alt=""/>
                <span className={styles.name_1}>Tsetsegee</span>
            </Box>
            <Box className={styles.profile_1} onClick={handleOpen}>
                <img src="https://images.unsplash.com/photo-1598641795816-a84ac9eac40c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80" alt=""/>
                <span className={styles.name_1}>Dorjoo</span>
            </Box>
            <Box className={styles.profile_1} onClick={handleOpen}>
                <img src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt=""/>
                <span className={styles.name_1}>Navchaa</span>
            </Box>
            <Box className={styles.profile_1} onClick={handleOpen}>
                <img src="https://images.unsplash.com/photo-1618018352910-72bdafdc82a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt=""/>
                <span className={styles.name_1}>Ganaa</span>
            </Box>
            <Box className={styles.profile_1} onClick={handleOpen}>
                <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=801&q=80" alt=""/>
                <span className={styles.name_1}>Boldoo</span>
            </Box>
            <Box className={styles.profile_1} onClick={handleOpen}>
                <img src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80" alt=""/>
                <span className={styles.name_1}>Turuu</span>
            </Box>
        </Box>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Box>
                <ReactPlayer url="https://www.youtube.com/watch?v=rUWxSEwctFU" playing={ isPlaying }/>
              </Box>
            </Box>
        </Modal>
    </Box>
  );
}
// const teamData = [
//     {
//         name: 'Dorjoo',
//         img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//         title:'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
//     },
//     {
//         name: 'Tsetsegee',
//         img: 'https://images.unsplash.com/photo-1530577197743-7adf14294584?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80',
//         title: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
//     },
//     {
//         name: 'Dorjoo',
//         img: 'https://images.unsplash.com/photo-1598641795816-a84ac9eac40c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80',
//         title: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
//     },
//     {
//         name: 'Navchaa',
//         img: 'https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//         title: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
//     },
//     {
//         name: 'Ganaa',
//         img: 'https://images.unsplash.com/photo-1618018352910-72bdafdc82a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//         title: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
//     },
//     {
//         name: 'Boldoo',
//         img: 'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=801&q=80',
//         title: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
//     },
//     {
//         name: 'Turuu',
//         img: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80',
//         title: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
//     },
    
// ]