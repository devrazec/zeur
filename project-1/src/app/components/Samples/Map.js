'use client';
import React, { useEffect, useState } from 'react';
import ClientMap from './Samples/ClientMap';

export default function MapPage() {
  const [markers, setMarkers] = useState([]);
  const [portugalGeo, setPortugalGeo] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // client-only

    fetch('/api/markers')
      .then(res => res.json())
      .then(setMarkers);

    fetch('/api/borders')
      .then(res => res.json())
      .then(setPortugalGeo);
  }, []);

  if (!isClient) return null; // render nothing on server

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">
        Interactive Map with Clustering & Portugal Highlight
      </h2>
      <ClientMap markersData={markers} geoData={portugalGeo} />
    </div>
  );
}
