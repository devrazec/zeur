'use client';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { useContext, useMemo, useEffect } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { PrimeReactProvider } from 'primereact/api';
import { GlobalContext } from '../context/GlobalContext';

export default function Providers({ children }) {
  const {
    darkMode,
    setDarkMode,
    mobileDevice,
    setMobileDevice,
    mobilePanel,
    setMobilePanel,
  } = useContext(GlobalContext);

  const baseTheme = useTheme();
  const isMobileDevice = useMediaQuery(baseTheme.breakpoints.down('sm'));

  useEffect(() => {
    setMobileDevice(isMobileDevice);
  }, [isMobileDevice, setMobileDevice]);

  const lightTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'light',
          primary: { main: '#1976d2' },
        },
      }),
    []
  );

  const darkTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'dark',
          primary: { main: '#1976d2' },
        },
      }),
    []
  );

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PrimeReactProvider value={{ ripple: true }}>
        {children}
      </PrimeReactProvider>
    </ThemeProvider>
  );
}
