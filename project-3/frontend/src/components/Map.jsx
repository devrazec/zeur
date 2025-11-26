import React, { useEffect, useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

// React Leaflet imports (normal React project)
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import "leaflet/dist/leaflet.css";

// Your local JSON file
import jsonMarkers from '../data/markers.json';
import portugalJson from '../data/portugal.json';

const Map = () => {

  const { markers, setMarkers, portugalGeo, setPortugalGeo } =
    useContext(GlobalContext);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Load static JSON
    setMarkers(jsonMarkers);
    setPortugalGeo(portugalJson);

    // Leaflet must mount ONLY on client
    setIsReady(true);

  }, []);

  if (!isReady) {
    return (
      <div className="w-full h-[650px] bg-gray-300 dark:bg-gray-800 animate-pulse rounded-xl" />
    );
  }

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
            scrollWheelZoom={true}
            className="w-full h-full"
          >
            {/* Base map */}
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="© OpenStreetMap contributors"
            />

            {/* Highlight Portugal */}
            {portugalGeo && (
              <GeoJSON
                data={portugalGeo}
                style={{
                  color: 'red',
                  weight: 3,
                  fillColor: 'orange',
                  fillOpacity: 0.25,
                }}
              />
            )}

            {/* Marker Clustering */}
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
};

export default Map;
