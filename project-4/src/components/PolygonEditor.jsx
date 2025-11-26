import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-draw';

const PolygonEditor = ({ onChange }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // FeatureGroup to store drawn shapes
    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    // Draw control
    const drawControl = new L.Control.Draw({
      draw: {
        polygon: true,
        polyline: false,
        rectangle: false,
        circle: false,
        circlemarker: false,
        marker: false,
      },
      edit: {
        featureGroup: drawnItems,
        remove: true,
      },
    });
    map.addControl(drawControl);

    // Polygon created
    map.on(L.Draw.Event.CREATED, (event) => {
      const layer = event.layer;
      drawnItems.addLayer(layer);

      // Zoom map to polygon bounds
      const bounds = layer.getBounds();
      map.fitBounds(bounds, { animate: true });

      if (onChange) onChange(layer.toGeoJSON());
    });

    // Polygon edited
    map.on(L.Draw.Event.EDITED, (event) => {
      event.layers.eachLayer((layer) => {
        // Zoom to edited polygon
        const bounds = layer.getBounds();
        map.fitBounds(bounds, { animate: true });

        if (onChange) onChange(layer.toGeoJSON());
      });
    });

    // Polygon deleted
    map.on(L.Draw.Event.DELETED, () => {
      if (onChange) onChange(null);
    });

    return () => {
      map.removeControl(drawControl);
      map.removeLayer(drawnItems);
    };
  }, [map, onChange]);

  return null;
};

export default PolygonEditor;
