'use client';

import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { AutoComplete } from 'primereact/autocomplete';
import { Button } from 'primereact/button';

const SearchField = () => {
  const {
    dataProduct,
    selectedProductName,
    setSelectedProductName,
    setSelectedProduct,
    setHoverProductId,
    filteredProduct,
    setFilteredProduct,
  } = useContext(GlobalContext);

  const [filteredNames, setFilteredNames] = useState([]);

  const searchNames = event => {
    const query = event.query?.toLowerCase() || '';
    setSelectedProductName(event.query); // Update as user types

    if (!query || !filteredProduct) {
      setFilteredNames([]);
      return;
    }

    const results = filteredProduct
      .filter(p => p.name.toLowerCase().includes(query))
      .map(p => p.name);

    setFilteredNames(results);
  };

  const onSelectName = name => {
    setSelectedProductName(name);

    const product = filteredProduct.find(p => p.name === name);
    if (product) {
      setSelectedProduct(product);
      setHoverProductId(product.id); // optional: sync with map
    }
  };

  const clearField = () => {
    setSelectedProductName('');
    setSelectedProduct(null);
    setFilteredNames([]);
    setHoverProductId(null);
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <AutoComplete
        value={selectedProductName || ''}
        suggestions={filteredNames}
        completeMethod={searchNames}
        placeholder="Ocorrências"
        className="w-full"
        inputClassName="p-inputtext-lg py-2 text-lg border-round-md pl-2 pr-9 w-full"
        onChange={e => onSelectName(e.value)}
      />
      {selectedProductName && (
        <Button
          icon="pi pi-times"
          className="p-button-rounded p-button-text"
          onClick={clearField}
          style={{
            position: 'absolute',
            top: '50%',
            right: '0.5rem',
            transform: 'translateY(-50%)',
            padding: '0.25rem 0.5rem',
            color: '#057642', // green color for your theme
          }}
        />
      )}
    </div>
  );
};

export default React.memo(SearchField);
