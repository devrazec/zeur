'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MapContainer = dynamic(
  () => import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), {
  ssr: false,
});
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), {
  ssr: false,
});
const GeoJSON = dynamic(
  () => import('react-leaflet').then(mod => mod.GeoJSON),
  { ssr: false }
);
const MarkerClusterGroup = dynamic(() => import('react-leaflet-cluster'), {
  ssr: false,
});

export default function MapComponent() {
  const [markers, setMarkers] = useState([]);
  const [portugalGeo, setPortugalGeo] = useState(null);

  useEffect(() => {
    fetch('/api/markers')
      .then(res => res.json())
      .then(setMarkers);

    fetch('/api/borders')
      .then(res => res.json())
      .then(setPortugalGeo);
  }, []);

  return (
    <MapContainer
      center={[39.5, -8]}
      zoom={7}
      scrollWheelZoom={true}
      className="w-full h-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />

      <MarkerClusterGroup chunkedLoading>
        {markers.map(m => (
          <Marker key={m.id} position={[m.lat, m.lng]}>
            <Popup>
              <div className="w-56">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-32 object-cover rounded-md mb-3"
                />

                <h3 className="font-bold text-lg mb-1">{m.name}</h3>

                <button
                  onClick={() => window.open(m.link, '_blank')}
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full"
                >
                  Learn More
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>

      {portugalGeo && (
        <GeoJSON
          data={portugalGeo}
          style={() => ({
            color: 'red', // border color
            weight: 3, // border thickness
            fillColor: 'orange', // fill color
            fillOpacity: 0.25,
          })}
        />
      )}
    </MapContainer>
  );
}
