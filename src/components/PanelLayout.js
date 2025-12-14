'use client';

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Button } from 'primereact/button';

const PanelLayout = () => {
  const {
    panelLayout,
    setPanelLayout,
    mapPanel,
    setMapPanel,
    dataPanel,
    setDataPanel,
  } = useContext(GlobalContext);

  return (
    <div className="card flex justify-content-center gap-3">
      <Button
        type="button"
        label=""
        style={{
          //borderRadius: '999px',
          //padding: "0.1rem",
          backgroundColor: dataPanel ? '#057642' : '#00473C',
          borderColor: '#ccc',
          border: '1px solid #16a34a',
          color: 'white',
          height: '40px',
          minWidth: '50px',
        }}
        icon="pi pi-table"
        onClick={() => setDataPanel(!dataPanel)}
      />
      <Button
        type="button"
        label=""
        style={{
          //borderRadius: '999px',
          //padding: "0.1rem",
          backgroundColor: mapPanel ? '#057642' : '#00473C',
          borderColor: '#ccc',
          border: '1px solid #16a34a',
          color: 'white',
          height: '40px',
          minWidth: '50px',
        }}
        icon="pi pi-map"
        onClick={() => setMapPanel(!mapPanel)}
      />
      <Button
        type="button"
        label=""
        style={{
          //borderRadius: '999px',
          //padding: "0.1rem",
          backgroundColor: panelLayout === 'list' ? '#057642' : '#00473C',
          borderColor: '#ccc',
          border: '1px solid #16a34a',
          color: 'white',
          height: '40px',
          minWidth: '50px',
        }}
        icon="pi pi-list"
        onClick={() => setPanelLayout('list')}
      />
      <Button
        type="button"
        label=""
        style={{
          //borderRadius: '999px',
          //padding: "0.1rem",
          backgroundColor: panelLayout === 'grid' ? '#057642' : '#00473C',
          borderColor: '#ccc',
          border: '1px solid #16a34a',
          color: 'white',
          height: '40px',
          minWidth: '50px',
        }}
        icon="pi pi-th-large"
        onClick={() => setPanelLayout('grid')}
      />
    </div>
  );
};

export default React.memo(PanelLayout);
