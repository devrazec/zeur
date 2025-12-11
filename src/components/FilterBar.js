'use client';

import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Box, MenuItem, Select, Typography, Menu } from '@mui/material';

const FilterBar = () => {
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
    filteredProduct,
  } = useContext(GlobalContext);

  return (
    <Box
      sx={{
        width: '100%',
        borderBottom: '1px solid #014034',
        display: 'flex',
        alignItems: 'center',
        gap: 3,
        paddingLeft: 2,
        paddingTop: 1,
        paddingBottom: 1,
        bgcolor: '#00473C',
        overflowX: { xs: 'auto', sm: 'auto' },
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': {
          // Chrome/Safari
          height: 6,
        },
      }}
    >
 
    </Box>
  );
};

export default React.memo(FilterBar);
