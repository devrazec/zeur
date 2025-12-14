'use client';

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { MultiSelect } from 'primereact/multiselect';

const SelectLocation = () => {
  const { selectedLocation, setSelectedLocation, location } =
    useContext(GlobalContext);

  return (
    <div className="p-field">
      <MultiSelect
        value={selectedLocation}
        onChange={e => setSelectedLocation(e.value)}
        options={location}
        optionLabel="label"
        showClear={true}
        placeholder="Localização"
        selectedItemsLabel="Localização ({0})"
        maxSelectedLabels={0}
        //className="w-full px-3 text-base text-white"
        //panelClassName="custom-multiselect-panel"
        panelStyle={{
          zIndex: 9999,
        }}
        style={{
          //borderRadius: '999px',
          //padding: "0.1rem",
          backgroundColor: selectedLocation.length > 0 ? '#057642' : '#00473C',
          borderColor: '#ccc',
          border: '1px solid #16a34a',
          color: 'white',
          height: '40px',
          minWidth: '200px',
        }}
        itemTemplate={option => (
          <div
            style={{
              padding: '0px 8px',
              //borderRadius: "4px",
              //marginBottom: "2px",
              //background: "#00473C",   // background of each option
              //color: "white",
              //width: "120px",
              display: 'flex',
              alignItems: 'center',
              //justifyContent: "space-between",
              gap: '0.5rem',
            }}
          >
            {/* Color circle */}
            <span
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: option.color
                  ? String(option.color)
                  : '#CCCCCC',
                border: '1px solid white',
              }}
            />

            <span>{option.label}</span>
          </div>
        )}
      />
    </div>
  );
};

export default React.memo(SelectLocation);
