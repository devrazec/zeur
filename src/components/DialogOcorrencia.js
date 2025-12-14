'use client';

import React, { useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Dialog } from 'primereact/dialog';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

const DEFAULT_CENTER = { lat: -23.55052, lng: -46.633308 }; // São Paulo

const DialogOcorrencia = () => {
  const { dialogOcorrencia, setDialogOcorrencia } = useContext(GlobalContext);

  const [address, setAddress] = useState('');
  const [location, setLocation] = useState(null);
  const [mapKey, setMapKey] = useState(0); // <-- key to remount map when dialog opens
  const autocompleteContainerRef = useRef(null);
  const mapRef = useRef(null);

  /**
   * Initialize Google Maps Place Autocomplete
   */
  const initAutocomplete = () => {
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

      // Force map to recenter
      if (mapRef.current) {
        mapRef.current.setCenter([loc.lng, loc.lat]);
      }
    });

    autocompleteContainerRef.current.appendChild(autocomplete);
  };

  /**
   * Handle marker drag end
   */
  const onMarkerDragEnd = evt => {
    const [lng, lat] = evt.lngLat;
    const newLocation = { lat, lng };
    setLocation(newLocation);

    // Reverse geocode to update address
    if (window.google) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === 'OK' && results[0]) {
          setAddress(results[0].formatted_address);
        }
      });
    }
  };

  return (
    <APIProvider
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      libraries={['places']}
    >
      <Dialog
        header="Registro de Ocorrência"
        visible={dialogOcorrencia}
        onHide={() => setDialogOcorrencia(false)}
        draggable={false}
        resizable={false}
        style={{ width: '50vw', maxWidth: '600px' }}
        breakpoints={{ '960px': '75vw', '641px': '100vw' }}
        onShow={() => {
          // Force map to remount when dialog opens
          setMapKey(prev => prev + 1);
          initAutocomplete();
        }}
      >
        <div className="flex flex-column align-items-center">
          <p className="text-color-secondary block mb-5">
            Digite o endereço ou marque no mapa a localização.
          </p>

          {/* ADDRESS AUTOCOMPLETE */}
          <div className="flex flex-column gap-2 w-full">
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
            <small>Digite o endereço com logradouro.</small>
          </div>

          {/* MAP */}
          <div className="flex flex-column gap-2 mt-5 w-full">
            <div style={{ height: '500px', width: '100%', marginTop: '1rem' }}>
              <Map
                key={mapKey} // <-- remount map on dialog open
                ref={mapRef}
                defaultCenter={{ lat: -23.55052, lng: -46.633308 }}
                //center={location}
                defaultZoom={11}
                //zoom={location ? 16 : 11}
                mapId="abcd1234efgh5678"
                gestureHandling="greedy"
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
                {location && (
                  <AdvancedMarker
                    position={location}
                    draggable={true}
                    onDragEnd={onMarkerDragEnd}
                  />
                )}
              </Map>
            </div>
            <small>Posicione a localização no mapa.</small>
          </div>
        </div>
      </Dialog>
    </APIProvider>
  );
};

export default React.memo(DialogOcorrencia);
