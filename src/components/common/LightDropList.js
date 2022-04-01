import React from 'react';

import Select from 'react-select';
// import { colourOptions } from '../data';

const theme = (theme) => ({
  ...theme,
})


const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

function Dropdown({
  isMulti = false,
  name = 'NewList',
  options = colourOptions,
  marginY = '10px 0',
  width = '100%',
  placeholder = 'select...'
}) {


  return (
    <div
      style={{
        width,
        margin: `${marginY} 0`
      }}
    >

      {isMulti ? (< Select
        isMulti
        name={name}
        options={options}
        theme={theme}
        placeholder={placeholder}
      />) : (< Select
        name={name}
        options={options}
        theme={theme}
        placeholder={placeholder}
      />)}

    </div>
  );


};

export default Dropdown;