'use client';

import React, { useContext } from 'react';
import Link from 'next/link';

import '../style/dashboard.css';

import { GlobalContext } from '../context/GlobalContext';

const DashboardPage = () => {
  const { theme, setTheme } = useContext(GlobalContext);

  return (
    <div>
      <p>About Page Theme: {theme}</p>

      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Change Theme
      </button>
      <Link href="/">Go to Home</Link>
    </div>
  );
};
export default React.memo(DashboardPage);
