import React, { useState, useRef } from 'react';
import LoadingSpinner from '../../../component/Spinner';
import { useCollection } from '../../../firebase/useFirebase';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
  // useMapEvents,
} from 'react-leaflet';
import { useRouter } from 'next/router';
import classes from '../../../styles/map.module.css';
import 'leaflet/dist/leaflet.css';
import L, { icon } from 'leaflet';
import { Box, Divider, Typography, Button, Stack, Modal } from '@mui/material';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { useAuth } from '../../../providers';
import { useEffect } from 'react';
import { serverTimestamp } from 'firebase/firestore';

const getIcon = (url) => {
  return L.icon({
    iconUrl: url === '' ? '/marker-icon.png' : url,
    iconSize: url === '' ? [30, 40] : [40, 40],
    popupAnchor: [0, -26],
  });
};

//MAIN COMPONENT
const Map = () => {
  const { userData } = useAuth();
  const router = useRouter();
  const [coordinates, setCoordinates] = useState({
    lat: 0,
    lng: 0,
  });
  const {
    snapData: people,
    getData,
    createUserData,
  } = useCollection('Location'); //real-time listens
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openMap, setOpenMap] = useState(false);
  const [disableSaveBtn, setDisableSaveBtn] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await getData(userData?.userId);

      // 1) Check if user has no location info, then ask for permission to get location
      if (result === undefined) {
        setOpenModal(true);
      } else if (result) {
        setOpenMap(true);
        setDisableSaveBtn(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ClickedMarker = () => {
    const markerRef = useRef(null);

    return (
      <Marker
        draggable={false}
        position={coordinates}
        ref={markerRef}
        icon={icon({
          iconUrl: '/marker.png',
          iconSize: [25, 35],
        })}
      >
        <Tooltip>You are here!</Tooltip>
        <Popup minWidth={60}>Your position</Popup>
      </Marker>
    );
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const mapOpenHandler = async (bool) => {
    setOpenModal(false);
    setOpenMap(bool);

    // Koordinat awdag heseg
    if ('geolocation' in navigator) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setIsLoading(false);
        },
        function error(error_message) {
          // for when getting location results in an error
          console.error(
            'An error has occured while retrieving location',
            error_message
          );
        }
      );
    } else {
      // geolocation is not supported, get your location some other way
      console.log('geolocation is not enabled on this browser');
    }
  };

  //====================FINAL STEP======================
  const onSave = async () => {
    setIsLoading(true);
    await createUserData(userData?.userId, {
      latitude: coordinates.lat,
      longitude: coordinates.lng,
      name: userData?.firstName,
      avatar: userData?.avatar,
      createdAt: serverTimestamp(),
    });
    setIsLoading(false);
    setDisableSaveBtn(false);
    setCoordinates({
      lat: 0,
      lng: 0,
    });
    alert('Амжилттай хадгалагдлаа.');
  };

  return (
    <div className={classes.wrapper}>
      <LoadingSpinner open={isLoading} color='#000' />
      <div className={classes.leafletContainer}>
        <Box textAlign='center' component='span'>
          <Typography fontWeight={800} mt={5}>
            EXPLORE
          </Typography>
        </Box>
        <Box display='flex' justifyContent='space-evenly' mx={6} my={2} sx={{}}>
          <Stack
            direction='row'
            onClick={() => router.push('/explore')}
            sx={{ cursor: 'pointer' }}
          >
            <GroupsOutlinedIcon />
            <Typography ml={2}>People</Typography>
          </Stack>
          <Divider orientation='vertical' flexItem />
          <Stack direction='row' sx={{ color: '#00cc66', cursor: 'pointer' }}>
            <MapOutlinedIcon />
            <Typography ml={2}>Map</Typography>
          </Stack>
        </Box>
        {/* if user has coordinates data, then show MAP */}

        {openMap && (
          <MapContainer
            style={{ height: '65%', width: '100%' }}
            center={{ lat: 47.918, lng: 106.9148 }}
            zoom={12}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="http://www.openstreetmap.org/copyright">Click to get coordinates</a>'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {people?.map((person, i) => {
              return (
                <Marker
                  key={i}
                  position={[person.latitude, person.longitude]}
                  icon={getIcon(person.avatar)}
                >
                  <Tooltip>{person.name}</Tooltip>
                </Marker>
              );
            })}
            <ClickedMarker />
            {/* <MapCoord /> */}
          </MapContainer>
        )}

        {/* 2.2) =========MODAL========================== */}
        <div>
          <Modal open={openModal} onClose={false}>
            <Box sx={style}>
              <Typography
                variant='h6'
                mb={1}
                fontSize={14}
                sx={{ textAlign: 'center', fontWeight: 700 }}
              >
                Та байршилын координатаа өгөхийг зөвшөөрч байна уу?
              </Typography>{' '}
              <Stack direction='row'>
                <Button
                  variant='contained'
                  onClick={async () => await mapOpenHandler(true)}
                  sx={{ width: '100%', marginTop: '10px' }}
                >
                  Тийм
                </Button>
                <Button
                  variant='contained'
                  onClick={() => {
                    closeModalHandler();
                    mapOpenHandler(false);
                    router.back();
                  }}
                  sx={{ width: '100%', margin: '10px 20px 0' }}
                >
                  Үгүй
                </Button>
              </Stack>
            </Box>
          </Modal>
        </div>
        {openMap && disableSaveBtn && (
          <button className={classes.saveButton} onClick={onSave}>
            SAVE
          </button>
        )}
      </div>
    </div>
  );
};

export default Map;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

// https://stackoverflow.com/questions/67552020/how-to-fix-error-failed-to-compile-node-modules-react-leaflet-core-esm-pat

// https://stackoverflow.com/questions/40365440/react-leaflet-map-not-correctly-displayed

//https://www.youtube.com/watch?v=UNSYoW3gkDc

//https://stackoverflow.com/questions/70392715/how-to-get-coordinates-of-current-mouse-click-in-leaflet-react-js

//https://github.com/PaulLeCam/react-leaflet/issues/808

//Click on the map to get coordinates function
// const MapCoord = () => {
//   useMapEvents({
//     click(e) {
//       setCoordinates({
//         lat: e.latlng.lat,
//         lng: e.latlng.lng,
//       });
//     },
//   });
//   return false;
// };
// console.log(coordinates);
