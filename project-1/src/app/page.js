import React from 'react';

import './style/home.css';

import Header from './components/Header';

import Map from './components/Map';

import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Map />
      <Footer />
    </div>
  );
}
