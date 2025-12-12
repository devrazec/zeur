'use client';

import React, { useEffect, useContext, useMemo } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { GlobalContext } from '../context/GlobalContext';

const LocationLayer = () => {
  const map = useMap();

  const {
    geoJuquitiba,
    geoSaoLorenco,
    geoEmbuGuacu,
    geoItapecericaSerra,
    geoCotia,
    geoEmbuArtes,
    geoVargemPaulista,
    geoTaboaoSerra,
  } = useContext(GlobalContext);

  const location = useMemo(
    () => [
      {
        geo: geoJuquitiba,
        color: '#7e7ef5',
        label: 'Juquitiba',
      },
      {
        geo: geoSaoLorenco,
        color: '#7e7ef5',
        label: 'São Lorenço da Serra',
      },
      {
        geo: geoEmbuGuacu,
        color: '#7e7ef5',
        label: 'Embu-Guaçu',
      },
      {
        geo: geoItapecericaSerra,
        color: '#7e7ef5',
        label: 'Itapecerica da Serra',
      },
      {
        geo: geoCotia,
        color: '#7e7ef5',
        label: 'Cotia',
      },
      {
        geo: geoEmbuArtes,
        color: '#7e7ef5',
        label: 'Embu das Artes',
      },
      {
        geo: geoVargemPaulista,
        color: '#7e7ef5',
        label: 'Vargem Grande Paulista',
      },
      {
        geo: geoTaboaoSerra,
        color: '#7e7ef5',
        label: 'Taboão da Serra',
      },
    ],
    [
      geoJuquitiba,
      geoSaoLorenco,
      geoEmbuGuacu,
      geoItapecericaSerra,
      geoCotia,
      geoEmbuArtes,
      geoVargemPaulista,
      geoTaboaoSerra,
    ]
  );

  useEffect(() => {
    if (!map) return;

    const layers = [];

    location.forEach(({ geo, color, label }) => {
      if (!geo) return;

      const defaultStyle = { color, weight: 3, fillColor: color, fillOpacity: 0.3 };
      const highlightStyle = { weight: 6, fillOpacity: 0.3 };

      const layer = L.geoJSON(geo, {
        style: defaultStyle,
        onEachFeature: (feature, layer) => {
          layer.bindTooltip(label, { permanent: false, direction: 'top', opacity: 0.9 });

          layer.on({
            mouseover: () => {
              layer.setStyle(highlightStyle);
              if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) layer.bringToFront();
            },
            mouseout: () => layer.setStyle(defaultStyle),
            click: () => {
              const bounds = layer.getBounds();
              map.fitBounds(bounds, { padding: [30, 30], maxZoom: 11, animate: true });
            },
          });
        },
      }).addTo(map);

      layers.push(layer);
    });

    return () => layers.forEach((layer) => map.removeLayer(layer));
  }, [map, location]);

  return null;
};

export default React.memo(LocationLayer);
