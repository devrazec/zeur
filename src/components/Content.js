'use client';

import React, { useContext, useState } from 'react';
import { Box, Paper, Button } from '@mui/material';
import { GlobalContext } from '../context/GlobalContext';

const Content = () => {
  const {
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
    selectedProduct,
    setSelectedProduct,
    product,
    setProduct,
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
    geoLocation,
    setGeoLocation,
    mapPanel,
    setMapPanel,
  } = useContext(GlobalContext);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        height: 'calc(100vh - 128px)',
        width: '100%',
        gap: 2,
        p: 2,
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Left Column: Table */}
      <Box
        sx={{
          flex: mapPanel ? 1 : 1, // table takes full width if map hidden
          minWidth: 0,
          height: { xs: '50%', md: '100%' },
        }}
      >
        <Paper
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <Box sx={{ flex: 1, overflowY: 'auto' }}>
          </Box>
        </Paper>
      </Box>

      {/* Right Column: Map */}
      {mapPanel && (
        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            height: { xs: '50%', md: '100%' },
          }}
        >
          <Paper
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'auto',
            }}
          >
            <Box
              sx={{
                flex: 1,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
            </Box>
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default React.memo(Content);
