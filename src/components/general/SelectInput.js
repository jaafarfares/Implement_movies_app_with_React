import React from 'react';
import './general.css';

const SelectInput = ({
  label, // Update the label prop value here
  options,
  multiple,
  className,
  value,
  setValue,
}) => {
  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
  };

  return (
    <div className="select-input-wrapper">
      {label && <label>{label}</label>}
      <select
        multiple={multiple}
        className={className}
        value={value}
        onChange={handleSelect}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
