'use client';

import { useEffect, useContext } from 'react';
import { useMap } from '@vis.gl/react-google-maps';
import { GlobalContext } from '../context/GlobalContext';

const GoogleLayer = () => {
  const map = useMap();

  const { geoMetropolitana } = useContext(GlobalContext);

  useEffect(() => {
    if (!map) return;

    const geom = geoMetropolitana.features[0].geometry;

    const polygons = [];

    if (geom.type === 'Polygon') {
      // Single polygon (only mainland)
      const coords = geom.coordinates[0].map(([lng, lat]) => ({
        lat,
        lng,
      }));
      polygons.push(coords);
    } else if (geom.type === 'MultiPolygon') {
      // Mainland + islands
      geom.coordinates.forEach(poly => {
        const coords = poly[0].map(([lng, lat]) => ({
          lat,
          lng,
        }));
        polygons.push(coords);
      });
    }

    const highlight = new google.maps.Polygon({
      paths: polygons,
      strokeColor: '#057642',
      strokeWeight: 2,
      fillColor: '#057642',
      fillOpacity: 0.2,
      map,
    });

    return () => highlight.setMap(null);
  }, [map]);

  return null;
};

export default GoogleLayer;
