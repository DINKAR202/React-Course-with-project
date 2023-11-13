// MapComponent.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, Polyline, StreetViewPanorama, StreetViewService } from '@react-google-maps/api';

const MapComponent = () => {
  const [path, setPath] = useState([]);
  const [position, setPosition] = useState({ lat: 37.7749, lng: -122.4194 }); // Initial position
  const [streetViewPosition, setStreetViewPosition] = useState(null);
  const [streetViewPath, setStreetViewPath] = useState([]);
  const [walkerIndex, setWalkerIndex] = useState(0);

  // Set your destination point here
  const destination = { lat: 37.7892, lng: -122.4024 };

  useEffect(() => {
    // Fetch the route between the two points
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: position,
        destination,
        travelMode: window.google.maps.TravelMode.WALKING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          const route = result.routes[0].overview_path;
          setPath(route);

          // Update Street View path
          const streetViewService = new StreetViewService();
          const streetViewPath = [];
          let currentIndex = 0;

          const getNextPanorama = () => {
            if (currentIndex < route.length) {
              streetViewService.getPanorama(
                { location: route[currentIndex], radius: 50 },
                (data, status) => {
                  if (status === window.google.maps.StreetViewStatus.OK) {
                    streetViewPath.push(data.location.latLng);
                  }
                  currentIndex++;
                  getNextPanorama();
                }
              );
            } else {
              setStreetViewPath(streetViewPath);
            }
          };

          getNextPanorama();
        }
      }
    );
  }, [position]);

  useEffect(() => {
    // Update walker position along the path
    const interval = setInterval(() => {
      if (walkerIndex < path.length) {
        setPosition(path[walkerIndex]);
        setStreetViewPosition(streetViewPath[walkerIndex]);
        setWalkerIndex(walkerIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 1000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [walkerIndex, path, streetViewPath]);

  return (
    <LoadScript
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
      libraries={['geometry', 'places']}
    >
      <GoogleMap
        mapContainerStyle={{ height: '500px', width: '100%' }}
        zoom={15}
        center={position}
      >
        <Marker position={destination} />

        <Polyline
          path={path}
          options={{
            strokeColor: '#0000FF',
            strokeOpacity: 0.8,
            strokeWeight: 2,
          }}
        />

        {streetViewPosition && (
          <StreetViewPanorama
            position={streetViewPosition}
            visible
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
