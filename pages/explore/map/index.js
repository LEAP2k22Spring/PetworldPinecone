import React, { useState, useRef, useMemo, useCallback } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
  useMapEvents,
  Circle,
} from 'react-leaflet';
import classes from '../../../styles/map.module.css';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';
import L from 'leaflet';
import { Box } from '@mui/system';

const getIcon = (url) => {
  return L.icon({
    iconUrl: url,
    iconSize: [40, 40],
    // iconAnchor: [32, 45],
    popupAnchor: [0, -26],
  });
};

const center = {
  lat: 47.92,
  lng: 106.87,
};

const people = [
  {
    lat: 47.9081531533196,
    lng: 106.78494677615218,
    location: 'Ulaanbaatar',
    url: 'https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/me.jpg?alt=media&token=1b82e3bf-656b-466a-a93c-a0cf17a70d26',
    icon: getIcon,
  },
  {
    lat: 47.938867251788984,
    lng: 106.82425723135128,
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

function DraggableMarker() {
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState(center);
  const markerRef = useRef(null);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  console.log(position);

  return (
    <Marker

      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
      icon={icon({
        iconUrl: '/marker.png',
        iconSize: [25, 35],
      })}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? 'Marker is draggable'
            : 'Click here to make marker draggable'}
        </span>
      </Popup>
    </Marker>
  );
}

const Map = () => {
  const [coordinates, setCoordinates] = useState({});

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

  return (
    <div>
      <div className={classes.leafletContainer}>
        <MapContainer
          className={classes.leap_wrapp}
          style={{ height: '100%', width: '100%' }}
          center={center}
          zoom={12}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">Click to get coordinates</a>'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Circle key="1" center={center} radius={1000} />
          {people.map((person, i) => {
            return (
              <Box className={classes.moly_zoly}>
              <Marker
                key={i}
                position={[person.lat, person.lng]}
                icon={getIcon(person.url)}
                radius={20}

              >
                <Popup >{person.location}</Popup>{' '}
                <Tooltip >Tooltip for Marker</Tooltip>
              </Marker>
              </Box>
            );
          })}
          <DraggableMarker />
          <MapEvents />
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;

const Border = styled.div`
  border-radius: 50%;
`;

// https://stackoverflow.com/questions/67552020/how-to-fix-error-failed-to-compile-node-modules-react-leaflet-core-esm-pat

// https://stackoverflow.com/questions/40365440/react-leaflet-map-not-correctly-displayed

//https://www.youtube.com/watch?v=UNSYoW3gkDc

//https://stackoverflow.com/questions/70392715/how-to-get-coordinates-of-current-mouse-click-in-leaflet-react-js

//https://github.com/PaulLeCam/react-leaflet/issues/808
