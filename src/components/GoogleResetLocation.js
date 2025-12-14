'use client';

import { useEffect, useContext } from 'react';
import { useMap } from '@vis.gl/react-google-maps';
import { GlobalContext } from '../context/GlobalContext';

const GoogleResetLocation = ({ initialView, zoomView, updateAddress }) => {
  const map = useMap();

  const { setGeoEvenPinLocation } = useContext(GlobalContext);

  useEffect(() => {
    if (!map) return;

    const button = document.createElement('div');
    button.innerHTML = `<i class="pi pi-refresh"></i>`;
    Object.assign(button.style, {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      background: '#fff',
      color: '#000',
      border: '2px solid #fff',
      boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
      cursor: 'pointer',
      margin: '10px',
      padding: '9px 9.5px',
      fontFamily: 'Roboto, Arial, sans-serif',
    });

    button.onclick = () => {
      map.panTo(initialView);
      map.setZoom(zoomView);
      setGeoEvenPinLocation(initialView);
      updateAddress(initialView.lat, initialView.lng);
    };

    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(button);
    return () => {
      const arr = map.controls[google.maps.ControlPosition.TOP_RIGHT];
      const idx = arr.getArray().indexOf(button);
      if (idx >= 0) arr.removeAt(idx);
    };
  }, [map]);

  return null;
};

export default GoogleResetLocation;
