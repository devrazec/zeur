'use client';

import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import GoogleLayer from './GoogleLayer';
import GoogleMyLocation from './GoogleMyLocation';
import GoogleResetLocation from './GoogleResetLocation';

const GoogleMap = () => {
  const {
    geoEventPinLocation,
    setGeoEvenPinLocation,
    geoEventInitialView,
    geoEventZoomView,
    setGeoEventAddressLocation,
    geoEventMyLocation,
    setGeoEvenMyLocation,
  } = useContext(GlobalContext);

  const [markerLabel, setMarkerLabel] = useState('');

  // Reverse geocode function
  const updateAddress = (lat, lng) => {
    if (!window.google || !window.google.maps || !window.google.maps.Geocoder) {
      // Wait a bit and retry
      setTimeout(() => updateAddress(lat, lng), 100);
      return;
    }

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === 'OK' && results[0]) {
        setGeoEventAddressLocation(results[0].formatted_address);
        setMarkerLabel(results[0].formatted_address);
      } else {
        setGeoEventAddressLocation(null);
        setMarkerLabel('');
      }
    });
  };

  useEffect(() => {
    if (geoEventPinLocation) {
      updateAddress(geoEventPinLocation.lat, geoEventPinLocation.lng);
    }
  }, [geoEventPinLocation]);

  return (
    <APIProvider
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      libraries={['drawing']}
    >
      <Map
        style={{ width: '100%', height: '80vh' }}
        defaultCenter={geoEventInitialView}
        defaultZoom={geoEventZoomView}
        gestureHandling="greedy"
        mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID}
        options={{
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: true,
          scaleControl: false,
          rotateControl: false,
          keyboardShortcuts: false,
          clickableIcons: false,
          scrollwheel: true,
          cameraControl: false,
        }}
        onClick={event => {
          const lat = event.latLng.lat();
          const lng = event.latLng.lng();
          setGeoEvenPinLocation({ lat, lng });
          setGeoEvenMyLocation({ lat, lng });
          updateAddress(lat, lng);
        }}
      >
        <GoogleLayer />

        {/* Single draggable marker with tooltip */}
        {geoEventPinLocation && (
          <AdvancedMarker
            position={geoEventPinLocation}
            draggable={true}
            title={markerLabel}
            //animation={window.google.maps.Animation.DROP} // smooth animation on initial drop
            onDragEnd={event => {
              const lat = event.latLng.lat();
              const lng = event.latLng.lng();
              setGeoEvenPinLocation({ lat, lng });
              setGeoEvenMyLocation({ lat, lng });
              updateAddress(lat, lng);
            }}
          />
        )}

        {/* My Location Button */}
        <GoogleMyLocation
          mapZoom={geoEventZoomView}
          updateAddress={updateAddress}
        />

        {/* Reset Location Button */}
        <GoogleResetLocation
          initialView={geoEventInitialView}
          zoomView={geoEventZoomView}
          updateAddress={updateAddress}
        />
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;
