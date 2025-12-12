'use client';

import React, { useContext } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

import ResetView from './ResetView';
import ShowMyLocation from './ShowMyLocation';

import BrazilLayer from './BrazilLayer';
import SaoPauloLayer from './SaoPauloLayer';
import MetropolitanaLayer from './MetropolitanaLayer';

import LocationLayer from './LocationLayer';
import { GlobalContext } from '../context/GlobalContext';

const LeafletMap = () => {
  const { geoZoomView, geoInitialView } = useContext(GlobalContext);

  return (
    <MapContainer
      center={geoInitialView}
      zoom={geoZoomView}
      scrollWheelZoom={true}
      zoomControl={true}
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <ResetView />
      <ShowMyLocation />
      <BrazilLayer />
      <SaoPauloLayer />
      <MetropolitanaLayer />

      <LocationLayer />
    </MapContainer>
  );
};

export default React.memo(LeafletMap);
