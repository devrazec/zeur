'use client';

import { createContext, useState } from 'react';

import geoBrazilJson from '../data/geo-brazil.json';
import geoSaoPauloJson from '../data/geo-sao-paulo.json';
import geoMetropolitanaJson from '../data/geo-metropolitana.json';
import geoJuquitibaJson from '../data/geo-juquitiba.json';
import geoSaoLorencoJson from '../data/geo-sao-lorenco.json';
import geoEmbuGuacuJson from '../data/geo-embu-guacu.json';
import geoItapecericaSerraJson from '../data/geo-itapecerica-serra.json';
import geoCotiaJson from '../data/geo-cotia.json';

import geoEmbuArtesJson from '../data/geo-embu-artes.json';
import geoVargemPaulistaJson from '../data/geo-vargem-paulista.json';
import geoTaboaoSerraJson from '../data/geo-taboao-serra.json';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileDevice, setMobileDevice] = useState(false);
  const [mobilePanel, setMobilePanel] = useState(false);
  const [mapPanel, setMapPanel] = useState(true);
  const [dataPanel, setDataPanel] = useState(true);
  const [panelLayout, setPanelLayout] = useState('grid');

  const [location, setlocation] = useState([
    {
      color: '#7e7ef5',
      label: 'Juquitiba',
      value: 1,
      subregion: 'sudoeste',
      bounds: { latMin: 38.69, latMax: 38.82, lngMin: -9.25, lngMax: -9.05 },
    },
    {
      color: '#7e7ef5',
      label: 'São Lorenço da Serra',
      value: 2,
      subregion: 'sudoeste',
      bounds: { latMin: 38.6, latMax: 38.73, lngMin: -9.3, lngMax: -9.1 },
    },
    {
      color: '#7e7ef5',
      label: 'Embu-Guaçu',
      value: 3,
      subregion: 'sudoeste',
      bounds: { latMin: 38.5, latMax: 38.65, lngMin: -9.28, lngMax: -9.08 },
    },
    {
      color: '#7e7ef5',
      label: 'Itapecerica da Serra',
      value: 4,
      subregion: 'sudoeste',
      bounds: { latMin: 38.55, latMax: 38.7, lngMin: -9.27, lngMax: -9.07 },
    },
    {
      color: '#7e7ef5',
      label: 'Cotia',
      value: 5,
      subregion: 'sudoeste',
      bounds: { latMin: 38.58, latMax: 38.73, lngMin: -9.26, lngMax: -9.06 },
    },
    {
      color: '#7e7ef5',
      label: 'Embu das Artes',
      value: 6,
      subregion: 'sudoeste',
      bounds: { latMin: 38.6, latMax: 38.75, lngMin: -9.24, lngMax: -9.04 },
    },
    {
      color: '#7e7ef5',
      label: 'Vargem Grande Paulista',
      value: 7,
      subregion: 'sudoeste',
      bounds: { latMin: 38.62, latMax: 38.77, lngMin: -9.22, lngMax: -9.02 },
    },
    {
      color: '#7e7ef5',
      label: 'Taboão da Serra',
      value: 8,
      subregion: 'sudoeste',
      bounds: { latMin: 38.63, latMax: 38.78, lngMin: -9.23, lngMax: -9.03 },
    },
  ]);
  const [selectedLocation, setSelectedLocation] = useState([]);

  const [category, setCategory] = useState([
    { label: 'Iluminação Pública', value: 1, color: '#ffc107' },
    { label: 'Limpeza Urbana', value: 2, color: '#28a745' },
    { label: 'Pavimentação e Ruas', value: 3, color: '#fd7e14' },
    { label: 'Árvore e Vegetação', value: 4, color: '#20c997' },
    { label: 'Sinalização e Trânsito', value: 5, color: '#17a2b8' },
    { label: 'Água e Esgoto', value: 6, color: '#0d6efd' },
    { label: 'Barulho / Poluição Sonora', value: 7, color: '#ffc107' },
    { label: 'Animais', value: 8, color: '#6f42c1' },
    { label: 'Segurança e Vandalismo', value: 9, color: '#dc3545' },
    { label: 'Outros', value: 10, color: '#6c757d' },
  ]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const [priority, setPriority] = useState([
    { label: 'Baixa', value: 1, color: '#28a745' },
    { label: 'Média', value: 2, color: '#ffc107' },
    { label: 'Alta', value: 2, color: '#dc3545' },
  ]);
  const [selectedPriority, setSelectedPriority] = useState([]);

  const [geoZoomView, setGeoZoomView] = useState(9);
  const [geoInitialView, setGeoInitialView] = useState([-23.55, -46.63]);

  const [geoBrazil, setGeoBrazil] = useState(geoBrazilJson);
  const [geoSaoPaulo, setGeoSaoPaulo] = useState(geoSaoPauloJson);
  const [geoMetropolitana, setGeoMetropolitana] =
    useState(geoMetropolitanaJson);
  const [geoJuquitiba, setGeoJuquitiba] = useState(geoJuquitibaJson);
  const [geoSaoLorenco, setGeoSaoLorenco] = useState(geoSaoLorencoJson);
  const [geoEmbuGuacu, setGeoEmbuGuacu] = useState(geoEmbuGuacuJson);
  const [geoItapecericaSerra, setGeoItapecericaSerra] = useState(
    geoItapecericaSerraJson
  );
  const [geoCotia, setGeoCotia] = useState(geoCotiaJson);
  const [geoEmbuArtes, setGeoEmbuArtes] = useState(geoEmbuArtesJson);
  const [geoVargemPaulista, setGeoVargemPaulista] = useState(
    geoVargemPaulistaJson
  );
  const [geoTaboaoSerra, setGeoTaboaoSerra] = useState(geoTaboaoSerraJson);

  return (
    <GlobalContext.Provider
      value={{
        darkMode,
        setDarkMode,
        mobileDevice,
        setMobileDevice,
        mobilePanel,
        setMobilePanel,
        mapPanel,
        setMapPanel,
        dataPanel,
        setDataPanel,
        panelLayout,
        setPanelLayout,
        category,
        setCategory,
        selectedCategory,
        setSelectedCategory,

        location,
        setlocation,
        selectedLocation,
        setSelectedLocation,
        priority,
        setPriority,
        selectedPriority,
        setSelectedPriority,

        geoZoomView,
        setGeoZoomView,
        geoInitialView,
        setGeoInitialView,

        geoBrazil,
        setGeoBrazil,
        geoSaoPaulo,
        setGeoSaoPaulo,
        geoMetropolitana,
        setGeoMetropolitana,

        geoJuquitiba,
        setGeoJuquitiba,

        geoSaoLorenco,
        setGeoSaoLorenco,

        geoEmbuGuacu,
        setGeoEmbuGuacu,

        geoItapecericaSerra,
        setGeoItapecericaSerra,

        geoCotia,
        setGeoCotia,

        geoEmbuArtes,
        setGeoEmbuArtes,

        geoVargemPaulista,
        setGeoVargemPaulista,

        geoTaboaoSerra,
        setGeoTaboaoSerra,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
