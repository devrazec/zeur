'use client';

import { useEffect, useContext } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { GlobalContext } from '../context/GlobalContext';

const LocationLayer = () => {
  const map = useMap();

  const {
    geoLisbon,
    geoPorto,
    geoFaro,
    geoCoimbra,
    geoBraga,
    geoBraganca,
    geoLeiria,
    geoGuarda,
    geoBeja,
    geoViana,
    geoVilaReal,
    geoSetubal,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (!map) return;

    const layers = [];

    const districts = {
      Juquitiba: geoJuquitiba,
      SaoLorenco: geoPorto,
      EmbuGuacu: geoFaro,
      ItapecericaSerra: geoCoimbra,
      Cotia: geoBraga,
      EmbuArtes: geoBraganca,
      VargemPaulista: geoLeiria,
      TaboaSerra: geoGuarda,
      Beja: geoBeja,
      Viana: geoViana,
      VilaReal: geoVilaReal,
      Setubal: geoSetubal,
    };

    const borderColors = {
      Lisbon: '#1A73E8',
      Porto: '#E91E63',
      Faro: '#F57C00',
      Coimbra: '#43A047',
      Braga: '#8E24AA',
      Braganca: '#39CCCC',
      Leiria: '#0097A7',
      Guarda: '#C62828',
      Beja: '#6D4C41',
      Viana: '#0D47A1',
      VilaReal: '#7CB342',
      Setubal: '#673AB7',
    };

    Object.keys(districts).forEach(name => {
      const geo = districts[name];
      if (!geo) return;

      const defaultStyle = {
        color: borderColors[name] || '#000',
        weight: 3,
        fillColor: borderColors[name] || '#000',
        fillOpacity: 0.1,
      };

      const highlightStyle = {
        weight: 6,
        fillOpacity: 0.3,
      };

      const layer = L.geoJSON(geo, {
        style: defaultStyle,

        onEachFeature: (feature, layer) => {
          // --- Tooltip ---
          layer.bindTooltip(name, {
            permanent: false,
            direction: 'top',
            opacity: 0.9,
          });

          // --- Hover Highlight ---
          layer.on({
            mouseover: () => {
              layer.setStyle(highlightStyle);
              if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                layer.bringToFront();
              }
            },
            mouseout: () => {
              layer.setStyle(defaultStyle);
            },

            // --- Click to Zoom ---
            click: () => {
              const bounds = layer.getBounds();
              map.fitBounds(bounds, {
                padding: [30, 30],
                maxZoom: 11,
                animate: true,
              });
            },
          });
        },
      }).addTo(map);

      layers.push(layer);
    });

    return () => {
      layers.forEach(layer => map.removeLayer(layer));
    };
  }, [
    map,
    geoLisbon,
    geoPorto,
    geoFaro,
    geoCoimbra,
    geoBraga,
    geoBraganca,
    geoLeiria,
    geoGuarda,
    geoBeja,
    geoViana,
    geoVilaReal,
    geoSetubal,
  ]);

  return null;
};

export default React.memo(LocationLayer);
