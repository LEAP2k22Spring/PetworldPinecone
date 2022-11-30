const coords = async (position) => {
  // for when getting location is a success

  //   await position;
  //   console.log(position.coords.latitude, position.coords.longitude);
  return {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
};

const getGeolocation = async () => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        return {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
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
    // geolocation is not supported
    // get your location some other way
    console.log('geolocation is not enabled on this browser');
  }
};

export default getGeolocation;
