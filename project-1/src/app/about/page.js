'use client';

import React, { useContext } from 'react';
import Link from 'next/link';

import { GlobalContext } from '../context/GlobalContext';
import Header from '../components/Header';
export default function AboutPage() {
  const { theme, setTheme } = useContext(GlobalContext);

  return (
    <div>
      <Header />

      <p>About Page Theme: {theme}</p>

      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Change Theme
      </button>
      <Link href="/">Go to Home</Link>
    </div>
  );
}
