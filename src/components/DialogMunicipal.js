'use client';

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Dialog } from 'primereact/dialog';
import { Divider } from "primereact/divider";

const DialogMunicipal = () => {
  const {
    dialogMunicipal, setDialogMunicipal,
  } = useContext(GlobalContext);

  const municipios = [
    { name: "São Paulo", phone: "156", url: "https://www.prefeitura.sp.gov.br/" },
    { name: "Arujá", phone: "(11) 4652-7600", url: "https://www.prefeituradearuja.sp.gov.br/" },
    { name: "Barueri", phone: "(11) 4199-1000", url: "https://www.barueri.sp.gov.br/" },
    { name: "Biritiba Mirim", phone: "(11) 4657-9000", url: "https://www.biritibamirim.sp.gov.br/" },
  ];

  return (
    <div className="card flex justify-content-center">
      <Dialog header="Secretaria Municipal" draggable={false} resizable={false} visible={dialogMunicipal} onHide={() => { if (!dialogMunicipal) return; setDialogMunicipal(false); }}
        style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
        <div style={{ overflowY: "auto", maxHeight: "70vh" }}>
          {municipios.map((municipio, index) => (
            <div key={municipio.name}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <div className="font-bold text-lg">{municipio.name}</div>
                {municipio.phone && <div>Telefone: {municipio.phone}</div>}
                {municipio.url && (
                  <div>
                    Prefeitura: <a href={municipio.url} target="_blank" rel="noopener noreferrer">{municipio.url}</a>
                  </div>
                )}
              </div>
              {index < municipios.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </Dialog>
    </div>
  );
};

export default React.memo(DialogMunicipal);
