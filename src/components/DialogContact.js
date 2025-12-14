'use client';

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Dialog } from 'primereact/dialog';

const DialogContact = () => {
  const { dialogContact, setDialogContact } = useContext(GlobalContext);

  return (
    <div className="card flex justify-content-center">
      <Dialog
        header="Contato"
        draggable={false}
        resizable={false}
        visible={dialogContact}
        onHide={() => {
          if (!dialogContact) return;
          setDialogContact(false);
        }}
        style={{ width: '50vw' }}
        breakpoints={{ '960px': '75vw', '641px': '100vw' }}
      >
        <div style={{ overflowY: 'auto', maxHeight: '70vh' }}>
          <div class="surface-overlay border-round min-h-full py-0">
            <p class="text-justify">
              Com mais de 10 anos de experiência em desenvolvimento de software
              e sistemas empresariais, contribuimos no crescimento de empresas
              por meio de soluções digitais, eficazes e acessíveis.
            </p>
            <p class="text-justify"></p>
            <p class="text-left">
              https://
              <a
                href="https://devrazec.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                devrazec.com
              </a>
            </p>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default React.memo(DialogContact);
