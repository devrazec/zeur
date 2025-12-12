'use client';

import React, { useContext } from 'react';
import { Box, Paper } from '@mui/material';
import { GlobalContext } from '../context/GlobalContext';
import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('../components/LeafletMap'), {
  ssr: false,
});

const Content = () => {
  const { dataPanel, mapPanel } = useContext(GlobalContext);

  // If both panels are hidden → show nothing (or a placeholder)
  if (!dataPanel && !mapPanel)
    return (
      <Box
        sx={{
          height: 'calc(100vh - 128px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'text.secondary',
        }}
      >
        No panels visible
      </Box>
    );

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
      {/* LEFT PANEL — DATA TABLE */}
      {dataPanel && (
        <Box
          sx={{
            flex: mapPanel ? 1 : 2, // If map hidden → table expands
            minWidth: 0,
            height: { xs: mapPanel ? '50%' : '100%', md: '100%' },
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
              {/* Table content here */}
            </Box>
          </Paper>
        </Box>
      )}

      {/* RIGHT PANEL — MAP */}
      {mapPanel && (
        <Box
          sx={{
            flex: dataPanel ? 1 : 2, // If table hidden → map expands
            minWidth: 0,
            height: { xs: dataPanel ? '50%' : '100%', md: '100%' },
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
              <LeafletMap />
            </Box>
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default React.memo(Content);
