'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports for React-Leaflet (SSR safe)
const MapContainer = dynamic(
  () => import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
);
const GeoJSON = dynamic(
  () => import('react-leaflet').then(mod => mod.GeoJSON),
  { ssr: false }
);
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), {
  ssr: false,
});
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), {
  ssr: false,
});
const MarkerClusterGroup = dynamic(() => import('react-leaflet-cluster'), {
  ssr: false,
});

export default function MapPage() {
  const [isClient, setIsClient] = useState(false);
  const [markers, setMarkers] = useState([]);
  const [portugalGeo, setPortugalGeo] = useState(null);

  useEffect(() => {
    setIsClient(true); // render only on client

    // load markers from your API
    fetch('/api/markers')
      .then(res => res.json())
      .then(setMarkers);

    // load Portugal GeoJSON
    fetch('/api/borders')
      .then(res => res.json())
      .then(json => {
        if (json.type === 'FeatureCollection' || json.type === 'Feature') {
          setPortugalGeo(json);
        } else {
          console.error('Invalid GeoJSON', json);
        }
      });
  }, []);

  // render placeholder on server
  if (!isClient) return null;

  return (
    <section className="bg-base-100 dark:bg-base-900 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Interactive Map with Clustering & Portugal Highlight
        </h2>

        <div className="w-full h-[650px] rounded-xl overflow-hidden shadow-lg">
          <MapContainer
            center={[39.5, -8]}
            zoom={7}
            scrollWheelZoom
            className="w-full h-full"
          >
            {/* TileLayer first */}
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="© OpenStreetMap contributors"
            />

            {/* Marker clustering */}
            {markers.length > 0 && (
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
            )}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
