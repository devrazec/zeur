'use client';

import React, { useEffect, useRef, useState } from 'react';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

const DEFAULT_CENTER = { lat: -23.55052, lng: -46.633308 }; // São Paulo

const SingleMarkerMap = () => {
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState(DEFAULT_CENTER); // marker starts at default
  const autocompleteContainerRef = useRef(null);
  const mapRef = useRef(null);

  // Initialize Google Places Autocomplete
  useEffect(() => {
    if (!window.google || !autocompleteContainerRef.current) return;

    autocompleteContainerRef.current.innerHTML = '';

    const autocomplete = document.createElement('gmp-place-autocomplete');
    autocomplete.setAttribute('placeholder', 'Digite o endereço');
    autocomplete.setAttribute('country', 'br');

    autocomplete.addEventListener('gmp-placeselect', event => {
      const place = event.detail.place;
      if (!place?.location) return;

      const loc = {
        lat: place.location.latitude,
        lng: place.location.longitude,
      };

      setAddress(place.formattedAddress);
      setLocation(loc);

      if (mapRef.current) {
        mapRef.current.setCenter([loc.lng, loc.lat]);
      }
    });

    autocompleteContainerRef.current.appendChild(autocomplete);

    return () => autocomplete.remove();
  }, []);

  // Marker drag
  const onMarkerDragEnd = evt => {
    const lat = evt.latLng.lat();
    const lng = evt.latLng.lng();
    const newLocation = { lat, lng };
    setLocation(newLocation);

    // Reverse geocode to update address
    if (window.google) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: newLocation }, (results, status) => {
        if (status === 'OK' && results[0]) {
          setAddress(results[0].formatted_address);
        }
      });
    }
  };

  // Click map to move the same marker
  const onMapClick = evt => {
    // evt.position contains { lat, lng } in @vis.gl/react-google-maps
    const pos = evt?.position;
    if (!pos) return;

    const newLocation = { lat: pos.lat, lng: pos.lng };
    setLocation(newLocation);

    // Reverse geocode to update address
    if (window.google) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: newLocation }, (results, status) => {
        if (status === 'OK' && results[0]) {
          setAddress(results[0].formatted_address);
        }
      });
    }
  };

  // My Location button
  const handleMyLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        const loc = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setLocation(loc);

        if (mapRef.current) mapRef.current.setCenter([loc.lng, loc.lat]);

        if (window.google) {
          const geocoder = new window.google.maps.Geocoder();
          geocoder.geocode({ location: loc }, (results, status) => {
            if (status === 'OK' && results[0]) {
              setAddress(results[0].formatted_address);
            }
          });
        }
      },
      error => {
        alert('Unable to retrieve your location: ' + error.message);
      }
    );
  };

  return (
    <APIProvider
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      libraries={['places']}
    >
      <div className="flex flex-col gap-4 w-full relative">
        {/* ADDRESS AUTOCOMPLETE */}
        <div>
          <label>Endereço</label>
          <div ref={autocompleteContainerRef} style={{ width: '100%' }} />
          <style>
            {`
              gmp-place-autocomplete {
                display: block;
                width: 100%;
              }
              gmp-place-autocomplete::part(input) {
                width: 100%;
                padding: 0.75rem;
                border-radius: 6px;
                border: 1px solid #ccc;
                font-size: 1rem;
              }
            `}
          </style>
        </div>

        {/* MAP */}
        <div style={{ height: '500px', width: '100%', position: 'relative' }}>
          <Map
            ref={mapRef}
            defaultCenter={DEFAULT_CENTER}
            defaultZoom={11}
            mapId="ocorrencia-map"
            gestureHandling="greedy"
            onClick={onMapClick}
            viewState={{
              longitude: location.lng,
              latitude: location.lat,
              zoom: 16,
              transitionDuration: 500,
            }}
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
            }}
          >
            {/* Single marker */}
            {location && (
              <AdvancedMarker
                position={location}
                draggable={true}
                onDragEnd={onMarkerDragEnd}
              />
            )}
          </Map>

          {/* My Location Button */}
          <button
            onClick={handleMyLocation}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: 10,
              backgroundColor: 'white',
              border: '1px solid #ccc',
              padding: '8px 12px',
              borderRadius: '50%',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            title="Minha localização"
          >
            📍
          </button>
        </div>

        {/* Selected Location Info */}
        {location && (
          <div className="mt-2">
            <strong>Selected Location:</strong>
            <div>Address: {address}</div>
            <div>Latitude: {location.lat}</div>
            <div>Longitude: {location.lng}</div>
          </div>
        )}
      </div>
    </APIProvider>
  );
};

export default React.memo(SingleMarkerMap);
