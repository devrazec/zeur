'use client';

import { useEffect, useContext } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { GlobalContext } from '../context/GlobalContext';

const BrazilLayer = () => {
  const map = useMap();

  const { geoBrazil } = useContext(GlobalContext);

  useEffect(() => {
    if (!map) return;

    const geom = geoBrazil.features[0].geometry;

    const polygons = [];

    if (geom.type === 'Polygon') {
      // Single polygon (mainland)
      const coords = geom.coordinates[0].map(([lng, lat]) => [lat, lng]);
      polygons.push(coords);
    } else if (geom.type === 'MultiPolygon') {
      // Mainland + islands
      geom.coordinates.forEach(poly => {
        const coords = poly[0].map(([lng, lat]) => [lat, lng]);
        polygons.push(coords);
      });
    }

    // Draw polygons
    const leafletPolygons = polygons.map(coords =>
      L.polygon(coords, {
        color: '#057642', // border color
        weight: 2,
        //fillColor: '#057642', // fill color
        fillOpacity: 0.01, // soft highlight
      }).addTo(map)
    );

    return () => {
      leafletPolygons.forEach(poly => map.removeLayer(poly));
    };
  }, [map, geoBrazil]);

  return null;
};

export default BrazilLayer;
