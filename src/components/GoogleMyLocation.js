'use client';

import { useEffect, useRef, useContext } from 'react';
import { useMap } from '@vis.gl/react-google-maps';
import { GlobalContext } from '../context/GlobalContext';

const GoogleMyLocation = ({ mapZoom, updateAddress }) => {
  const map = useMap();

  const {
    geoEventZoomView,
    setGeoEventZoomView,
    geoEventMyLocation,
    setGeoEvenMyLocation,
    setGeoEvenPinLocation,
    setGeoEventAddressLocation,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (!map) return;

    const button = document.createElement('div');
    button.innerHTML = `<i class="pi pi-map-marker"></i>`;
    Object.assign(button.style, {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      background: '#fff',
      border: '2px solid #fff',
      boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
      cursor: 'pointer',
      margin: '10px',
      padding: '9px 9.5px',
      fontFamily: 'Roboto, Arial, sans-serif',
    });

    button.onclick = () => {
      if (!navigator.geolocation) return alert('Geolocation not supported.');
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        const location = { lat: latitude, lng: longitude };
        setGeoEvenMyLocation(location);
        setGeoEvenPinLocation(location);
        updateAddress(latitude, longitude);
        map.panTo(location);
        map.setZoom(mapZoom);
      });
    };

    map.controls[google.maps.ControlPosition.RIGHT_TOP].push(button);
    return () => {
      const arr = map.controls[google.maps.ControlPosition.RIGHT_TOP];
      const idx = arr.getArray().indexOf(button);
      if (idx >= 0) arr.removeAt(idx);
    };
  }, [map]);

  return null;
};

export default GoogleMyLocation;
