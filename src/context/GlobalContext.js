'use client';

import { createContext, useState, useEffect } from 'react';

import geoPortugalJson from '../data/geo-portugal.json';
import geoLisbonJson from '../data/geo-lisbon.json';
import geoPortoJson from '../data/geo-porto.json';
import geoFaroJson from '../data/geo-faro.json';
import geoCoimbraJson from '../data/geo-coimbra.json';
import geoBragaJson from '../data/geo-braga.json';
import geoBragancaJson from '../data/geo-braganca.json';
import geoLeiriaJson from '../data/geo-leiria.json';
import geoGuardaJson from '../data/geo-guarda.json';
import geoBejaJson from '../data/geo-beja.json';
import geoVianaJson from '../data/geo-viana.json';
import geoVilarealJson from '../data/geo-vilareal.json';
import geoSetubalJson from '../data/geo-setubal.json';
import storeProductJson from '../data/store-product.json';
import mongodbImageJson from '../data/mongodb-image.json';

import dataProductJson from '../data/data-product.json';
import dataProductNameJson from '../data/data-product-name.json';
import dataSellerNameJson from '../data/data-seller-name.json';
import dataBrokerJson from '../data/data-broker.json';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileDevice, setMobileDevice] = useState(false);

  const [mobilePanel, setMobilePanel] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [language, setLanguage] = useState([
    { name: 'English', code: 'EN', icon: 'fi fi-gb' },
    { name: 'Portuguese', code: 'PT', icon: 'fi fi-pt' },
    { name: 'Spanish', code: 'ES', icon: 'fi fi-es' },
  ]);
  const [city, setCity] = useState([
    { label: 'Lisbon', value: 'Lisbon', colorCode: '#1A73E8' },
    { label: 'Porto', value: 'Porto', colorCode: '#E91E63' },
    { label: 'Faro', value: 'Faro', colorCode: '#F57C00' },
    { label: 'Coimbra', value: 'Coimbra', colorCode: '#43A047' },
    { label: 'Braga', value: 'Braga', colorCode: '#8E24AA' },
    { label: 'Bragança', value: 'Bragança', colorCode: '#39CCCC' },
    { label: 'Leiria', value: 'Leiria', colorCode: '#0097A7' },
    { label: 'Guarda', value: 'Guarda', colorCode: '#C62828' },
    { label: 'Beja', value: 'Beja', colorCode: '#6D4C41' },
    { label: 'Viana', value: 'Viana', colorCode: '#0D47A1' },
    { label: 'VilaReal', value: 'VilaReal', colorCode: '#7CB342' },
    { label: 'Setubal', value: 'Setubal', colorCode: '#673AB7' },
  ]);
  const [selectedCity, setSelectedCity] = useState([]);

  const [category, setCategory] = useState([
    { label: 'Tops', value: 'Tops' },
    { label: 'Capris', value: 'Capris' },
    { label: 'Dresses', value: 'Dresses' },
    { label: 'Shorts', value: 'Shorts' },
    { label: 'Tshirts', value: 'Tshirts' },
    { label: 'Skirts', value: 'Skirts' },
    { label: 'Jeans', value: 'Jeans' },
    { label: 'Leggings', value: 'Leggings' },
    { label: 'Innerwear Vests', value: 'Innerwear Vests' },
    { label: 'Rompers', value: 'Rompers' },
    { label: 'Lehenga Choli', value: 'Lehenga Choli' },
    { label: 'Salwar', value: 'Salwar' },
    { label: 'Booties', value: 'Booties' },
    { label: 'Clothing Set', value: 'Clothing Set' },
    { label: 'Trousers', value: 'Trousers' },
    { label: 'Shirts', value: 'Shirts' },
    { label: 'Jackets', value: 'Jackets' },
    { label: 'Kurtas', value: 'Kurtas' },
    { label: 'Sweatshirts', value: 'Sweatshirts' },
    { label: 'Kurta Sets', value: 'Kurta Sets' },
    { label: 'Churidar', value: 'Churidar' },
    { label: 'Waistcoat', value: 'Waistcoat' },
    { label: 'Blazers', value: 'Blazers' },
  ]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const [color, setColor] = useState([
    { label: 'White', value: 'White', colorCode: '#FFFFFF' },
    { label: 'Black', value: 'Black', colorCode: '#000000' },
    { label: 'Blue', value: 'Blue', colorCode: '#007BFF' },
    { label: 'Pink', value: 'Pink', colorCode: '#FF69B4' },
    { label: 'Red', value: 'Red', colorCode: '#FF0000' },
    { label: 'Olive', value: 'Olive', colorCode: '#808000' },
    { label: 'Yellow', value: 'Yellow', colorCode: '#FFFF00' },
    { label: 'Navy Blue', value: 'Navy Blue', colorCode: '#000080' },
    { label: 'Magenta', value: 'Magenta', colorCode: '#FF00FF' },
    { label: 'Grey', value: 'Grey', colorCode: '#808080' },
    { label: 'Green', value: 'Green', colorCode: '#008000' },
    { label: 'Orange', value: 'Orange', colorCode: '#FFA500' },
    { label: 'Purple', value: 'Purple', colorCode: '#800080' },
    { label: 'Turquoise Blue', value: 'Turquoise Blue', colorCode: '#40E0D0' },
    { label: 'Peach', value: 'Peach', colorCode: '#FFDAB9' },
    { label: 'Off White', value: 'Off White', colorCode: '#F8F8F0' },
    { label: 'Teal', value: 'Teal', colorCode: '#008080' },
    { label: 'Sea Green', value: 'Sea Green', colorCode: '#2E8B57' },
    { label: 'Lime Green', value: 'Lime Green', colorCode: '#32CD32' },
    { label: 'Brown', value: 'Brown', colorCode: '#A52A2A' },
    { label: 'Lavender', value: 'Lavender', colorCode: '#E6E6FA' },
    { label: 'Beige', value: 'Beige', colorCode: '#F5F5DC' },
    { label: 'Khaki', value: 'Khaki', colorCode: '#F0E68C' },
    { label: 'Multi', value: 'Multi', colorCode: '#CCCCCC' },
    { label: 'Maroon', value: 'Maroon', colorCode: '#800000' },
    { label: 'Cream', value: 'Cream', colorCode: '#FFFDD0' },
    { label: 'Rust', value: 'Rust', colorCode: '#B7410E' },
    { label: 'Grey Melange', value: 'Grey Melange', colorCode: '#BEBEBE' },
  ]);
  const [selectedColor, setSelectedColor] = useState([]);

  const [gender, setGender] = useState([
    { label: 'Boys', value: 'Boys', colorCode: '#0074D9' },
    { label: 'Girls', value: 'Girls', colorCode: '#B10DC9' },
  ]);
  const [selectedGender, setSelectedGender] = useState([]);

  const [geoZoomView, setGeoZoomView] = useState(7);
  const [geoInitialView, setGeoInitialView] = useState([39.3999, -8.2245]);

  const [geoCityBounds, setGeoCityBounds] = useState({
    Lisbon: { latMin: 38.69, latMax: 38.82, lngMin: -9.25, lngMax: -9.05 },
    Porto: { latMin: 41.11, latMax: 41.19, lngMin: -8.74, lngMax: -8.53 },
    Faro: { latMin: 37.0, latMax: 37.2, lngMin: -8.1, lngMax: -7.8 },
    Coimbra: { latMin: 40.18, latMax: 40.23, lngMin: -8.48, lngMax: -8.4 },
    Braga: { latMin: 41.53, latMax: 41.57, lngMin: -8.47, lngMax: -8.42 },
    Bragança: { latMin: 41.79, latMax: 41.83, lngMin: -6.75, lngMax: -6.7 },
    Leiria: { latMin: 39.74, latMax: 39.76, lngMin: -8.87, lngMax: -8.8 },
    Guarda: { latMin: 40.53, latMax: 40.56, lngMin: -7.48, lngMax: -7.42 },
    Beja: { latMin: 37.93, latMax: 38.02, lngMin: -7.93, lngMax: -7.82 },
    Viana: { latMin: 41.67, latMax: 41.72, lngMin: -8.86, lngMax: -8.77 },
    VilaReal: { latMin: 41.27, latMax: 41.33, lngMin: -7.77, lngMax: -7.65 },
    Setubal: { latMin: 38.51, latMax: 38.56, lngMin: -8.92, lngMax: -8.84 },
  });

  const [geoPortugal, setGeoPortugal] = useState(geoPortugalJson);
  const [geoLisbon, setGeoLisbon] = useState(geoLisbonJson);
  const [geoPorto, setGeoPorto] = useState(geoPortoJson);
  const [geoFaro, setGeoFaro] = useState(geoFaroJson);
  const [geoCoimbra, setGeoCoimbra] = useState(geoCoimbraJson);
  const [geoBraga, setGeoBraga] = useState(geoBragaJson);
  const [geoBraganca, setGeoBraganca] = useState(geoBragancaJson);
  const [geoLeiria, setGeoLeiria] = useState(geoLeiriaJson);
  const [geoGuarda, setGeoGuarda] = useState(geoGuardaJson);
  const [geoBeja, setGeoBeja] = useState(geoBejaJson);
  const [geoViana, setGeoViana] = useState(geoVianaJson);
  const [geoVilaReal, setGeoVilaReal] = useState(geoVilarealJson);
  const [geoSetubal, setGeoSetubal] = useState(geoSetubalJson);
  const [storeProduct, setStoreProduct] = useState(storeProductJson);

  //const [dataProduct, setDataProduct] = useState(dataProductJson);
  const [dataProduct, setDataProduct] = useState(dataProductJson.slice(0, 200));

  const [dataProductName, setDataProductName] = useState(dataProductNameJson);
  const [dataSellerName, setDataSellerName] = useState(dataSellerNameJson);
  const [dataBroker, setDataBroker] = useState(dataBrokerJson);

  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const [productLayout, setProductLayout] = useState('grid');

  const [selectedProduct, setSelectedProduct] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [hoverProductId, setHoverProductId] = useState(null);
  const [selectedProductName, setSelectedProductName] = useState(null);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [mapPanel, setMapPanel] = useState(true);

  const [mongodbImage, setMongodbImage] = useState(mongodbImageJson);

  useEffect(() => {
    if (!dataProduct) {
      setFilteredProduct([]);
      return;
    }

    let filtered = [...dataProduct];

    if (selectedCategory.length > 0) {
      filtered = filtered.filter(p => selectedCategory.includes(p.category));
    }
    if (selectedCity.length > 0) {
      filtered = filtered.filter(p => selectedCity.includes(p.location));
    }
    if (selectedColor.length > 0) {
      filtered = filtered.filter(p => selectedColor.includes(p.color));
    }
    if (selectedGender.length > 0) {
      filtered = filtered.filter(p => selectedGender.includes(p.gender));
    }
    if (selectedProductName) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(selectedProductName.toLowerCase())
      );
    }

    // Sorting
    if (sortField) {
      filtered.sort((a, b) => {
        let valA = a[sortField];
        let valB = b[sortField];

        if (sortField === 'price') {
          // Remove any non-digit characters (like currency symbols) and convert to number
          valA = Number(String(valA).replace(/[^\d.-]/g, ''));
          valB = Number(String(valB).replace(/[^\d.-]/g, ''));
        } else if (typeof valA === 'string') {
          valA = valA.toLowerCase();
          valB = valB.toLowerCase();
        }

        if (valA < valB) return sortOrder === 1 ? -1 : 1;
        if (valA > valB) return sortOrder === 1 ? 1 : -1;
        return 0;
      });
    }

    setFilteredProduct(filtered);
  }, [
    dataProduct,
    selectedCategory,
    selectedCity,
    selectedColor,
    selectedGender,
    selectedProductName,
    sortField,
    sortOrder,
  ]);

  return (
    <GlobalContext.Provider
      value={{
        darkMode,
        setDarkMode,
        mobileDevice,
        setMobileDevice,
        mobilePanel,
        setMobilePanel,
        selectedLanguage,
        setSelectedLanguage,
        language,
        setLanguage,
        selectedCity,
        setSelectedCity,
        city,
        setCity,
        selectedCategory,
        setSelectedCategory,
        category,
        setCategory,
        selectedColor,
        setSelectedColor,
        color,
        setColor,
        selectedGender,
        setSelectedGender,
        gender,
        setGender,
        geoZoomView,
        setGeoZoomView,
        geoInitialView,
        setGeoInitialView,
        geoPortugal,
        setGeoPortugal,
        geoLisbon,
        setGeoLisbon,
        geoPorto,
        setGeoPorto,
        geoFaro,
        setGeoFaro,
        geoCoimbra,
        setGeoCoimbra,
        geoBraga,
        setGeoBraga,
        geoBraganca,
        setGeoBraganca,
        geoLeiria,
        setGeoLeiria,
        geoGuarda,
        setGeoGuarda,
        geoBeja,
        setGeoBeja,
        geoViana,
        setGeoViana,
        geoVilaReal,
        setGeoVilaReal,
        geoSetubal,
        setGeoSetubal,
        geoCityBounds,
        setGeoCityBounds,
        storeProduct,
        setStoreProduct,
        dataProduct,
        setDataProduct,
        dataProductName,
        setDataProductName,
        dataSellerName,
        setDataSellerName,
        dataBroker,
        setDataBroker,
        sortField,
        setSortField,
        sortOrder,
        setSortOrder,
        productLayout,
        setProductLayout,
        selectedProductId,
        setSelectedProductId,
        selectedProduct,
        setSelectedProduct,
        hoverProductId,
        setHoverProductId,
        selectedProductName,
        setSelectedProductName,
        filteredProduct,
        setFilteredProduct,
        mapPanel,
        setMapPanel,
        mongodbImage,
        setMongodbImage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
