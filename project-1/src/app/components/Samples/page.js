'use client';

import React from 'react';

import dynamic from 'next/dynamic';

import './style/home.css';

import Header from './components/Header';

import Footer from './components/Footer';

const Map = dynamic(() => import('./components/Samples/Map'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Header />
      <Map />
      <Footer />
    </div>
  );
}
