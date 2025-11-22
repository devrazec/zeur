'use client';

import React, { useContext } from 'react';

import Header from './components/Header';
import FooterComponent from './components/Footer';
import Link from 'next/link';
import { GlobalContext } from './context/GlobalContext';

export default function Home() {
  const { theme, setTheme } = useContext(GlobalContext);

  return (
    <div>
      <h1>Home Page</h1>
      <Header />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Change Theme
      </button>
      <Link href="/about">Go to About</Link>
      <FooterComponent />
    </div>
  );
}
