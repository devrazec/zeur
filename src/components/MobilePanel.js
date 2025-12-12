'use client';

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { Image } from 'primereact/image';

const MobilePanel = () => {
  const { mobilePanel, setMobilePanel } = useContext(GlobalContext);

  return (
    <Sidebar
      visible={mobilePanel}
      onHide={() => setMobilePanel(false)}
      position="left"
      showCloseIcon={false} // We will make a custom close button
      style={{
        width: '80%',
        maxWidth: '250px',
        background: '#00473C',
        color: 'white',
        padding: 0, // Remove default padding
      }}
    >
      {/* HEADER */}
      <div
        style={{
          background: '#003C32',
          color: 'white',
          padding: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Image src="/img/logo250x80.png" alt="Logo" height="40px" />
        </div>

        {/* Close Button */}
        <Button
          icon="pi pi-times"
          rounded
          outlined
          className="h-2rem w-2rem p-sidebar-icon p-link"
          onClick={() => setMobilePanel(false)}
          style={{
            color: 'white',
            marginRight: '0.5rem',
            fontSize: '1.3rem',
            //background: "#00473C",
          }}
        />
      </div>

      {/* CONTENT */}
      <div style={{ padding: '1.5rem' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li className="p-mb-3 py-2">Registre Ocorrências</li>
          <li className="p-mb-3 py-2">Registro ou Login</li>
          <li className="p-mb-3 py-2">Entre em Contato</li>
        </ul>
      </div>
    </Sidebar>
  );
};

export default React.memo(MobilePanel);
