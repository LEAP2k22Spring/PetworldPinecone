import React, { useState, useRef, useMemo, useCallback } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
  useMapEvents,
} from 'react-leaflet';
import { useRouter } from 'next/router';
import classes from '../../../styles/map.module.css';
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';
import L from 'leaflet';
import { Box, Divider, Typography, Button, Stack } from '@mui/material';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const getIcon = (url) => {
  return L.icon({
    iconUrl: url,
    iconSize: [40, 40],
    // iconAnchor: [32, 45],
    popupAnchor: [0, -26],
  });
};

const people = [
  {
    lat: 47.908,
    lng: 106.94,
    location: 'Ulaanbaatar',
    url: 'https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/me.jpg?alt=media&token=1b82e3bf-656b-466a-a93c-a0cf17a70d26',
  },
  {
    lat: 47.938867251788984,
    lng: 106.9,
    url: 'https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/me.jpg?alt=media&token=1b82e3bf-656b-466a-a93c-a0cf17a70d26',

    location: 'Ulaanbaatar',
  },
  {
    lat: 47.89583938833195,
    lng: 106.88416705172021,
    url: 'https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/me.jpg?alt=media&token=1b82e3bf-656b-466a-a93c-a0cf17a70d26',
    location: 'Ulaanbaatar',
  },
  {
    lat: 47.92,
    lng: 106.87,
    url: 'https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/me.jpg?alt=media&token=1b82e3bf-656b-466a-a93c-a0cf17a70d26',
    location: 'Ulaanbaatar',
  },
];

const Map = () => {
  const [coordinates, setCoordinates] = useState({
    lat: 47.928,
    lng: 106.9161,
  });
  const router = useRouter();
  const center = {
    lat: 47.918,
    lng: 106.9148,
  };

  function ClickedMarker() {
    const [position, setPosition] = useState(coordinates);
    const markerRef = useRef(null);

    return (
      <Marker
        draggable={true}
        position={position}
        ref={markerRef}
        icon={icon({
          iconUrl: '/marker.png',
          iconSize: [25, 35],
        })}
      >
        <Popup minWidth={60}>Your position</Popup>
      </Marker>
    );
  }
  const MapEvents = () => {
    useMapEvents({
      click(e) {
        setCoordinates({
          lat: e.latlng.lat,
          lng: e.latlng.lng,
        });
      },
    });
    return false;
  };
  console.log(coordinates);

  return (
    <div className={classes.wrapper}>
      <div className={classes.leafletContainer}>
        <Box textAlign='center' component='span'>
          <Typography fontWeight={800} mt={5}>
            EXPLORE
          </Typography>
        </Box>
        <Box display='flex' justifyContent='space-evenly' mx={6} my={2} sx={{}}>
          <Stack direction='row' onClick={() => router.push('/explore')}>
            <GroupsOutlinedIcon />
            <Typography ml={2}>People</Typography>
          </Stack>
          <Divider orientation='vertical' flexItem />
          <Stack direction='row' sx={{ color: '#00cc66' }}>
            <MapOutlinedIcon />
            <Typography ml={2}>Map</Typography>
          </Stack>
        </Box>
        <MapContainer
          style={{ height: '65%', width: '100%' }}
          center={center}
          zoom={12}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">Click to get coordinates</a>'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {people.map((person, i) => {
            return (
              <Marker
                key={i}
                position={[person.lat, person.lng]}
                icon={getIcon(person.url)}
              >
                <Popup>{person.location}</Popup>{' '}
                <Tooltip>Tooltip for Marker</Tooltip>
              </Marker>
            );
          })}
          <ClickedMarker />
          <MapEvents />
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;

// https://stackoverflow.com/questions/67552020/how-to-fix-error-failed-to-compile-node-modules-react-leaflet-core-esm-pat

// https://stackoverflow.com/questions/40365440/react-leaflet-map-not-correctly-displayed

//https://www.youtube.com/watch?v=UNSYoW3gkDc

//https://stackoverflow.com/questions/70392715/how-to-get-coordinates-of-current-mouse-click-in-leaflet-react-js

//https://github.com/PaulLeCam/react-leaflet/issues/808
