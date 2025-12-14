'use client';

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Dialog } from 'primereact/dialog';

const DialogStepper = () => {
  const {
    dialogStepper, setDialogStepper
  } = useContext(GlobalContext);

  return (
    <div className="card flex justify-content-center">
      <Dialog header="Registro de Reclamação" draggable={false} resizable={false} visible={dialogStepper} onHide={() => { if (!dialogStepper) return; setDialogStepper(false); }}
        style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
        
      </Dialog>
    </div>
  );
};

export default React.memo(DialogStepper);
