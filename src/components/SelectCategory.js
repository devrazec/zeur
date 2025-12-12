'use client';

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { MultiSelect } from 'primereact/multiselect';

const SelectCategory = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    category,
  } = useContext(GlobalContext);

  return (
    <div className="p-field">
      <MultiSelect
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.value)}
        options={category}
        optionLabel="label"
        showClear={true}
        placeholder="Category"
        selectedItemsLabel="Category ({0})"
        maxSelectedLabels={0}
        //className="w-full px-3 text-base text-white"
        //panelClassName="custom-multiselect-panel"
        panelStyle={{
          zIndex: 9999,
        }}
        style={{
          borderRadius: '999px',
          //padding: "0.1rem",
          backgroundColor: selectedCategory.length > 0 ? '#057642' : '#00473C',
          borderColor: '#ccc',
          border: '1px solid white',
          color: 'white',
          height: '40px',
          minWidth: '190px',
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
            <span>{option.label}</span>
          </div>
        )}
      />
    </div>
  );
};

export default React.memo(SelectCategory);
