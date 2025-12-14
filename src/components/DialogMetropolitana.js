'use client';

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Dialog } from 'primereact/dialog';
import { Image } from 'primereact/image';

const DialogMetropolitana = () => {
  const { dialogMetropolitana, setDialogMetropolitana } =
    useContext(GlobalContext);

  return (
    <div className="card flex justify-content-center">
      <Dialog
        header="Região Metropolitâna"
        draggable={false}
        resizable={false}
        visible={dialogMetropolitana}
        onHide={() => {
          if (!dialogMetropolitana) return;
          setDialogMetropolitana(false);
        }}
        style={{ width: '50vw' }}
        breakpoints={{ '960px': '75vw', '641px': '100vw' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Image
            className="border-round w-full"
            src="/img/regiao-metropolitana.png"
            alt="Região Metropolitâna"
            width="100%"
            preview={true}
          />
        </div>
      </Dialog>
    </div>
  );
};

export default React.memo(DialogMetropolitana);
