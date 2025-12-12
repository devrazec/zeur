'use client';

import React from 'react';
import { Box } from '@mui/material';

const FilterBar = () => {
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
    ></Box>
  );
};

export default React.memo(FilterBar);
