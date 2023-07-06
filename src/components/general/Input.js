import React from 'react';
import './general.css';

const Input = ({
  label,
  type,
  className,
  value,
  setValue,
  icon,
  inputAttributes,
}) => {
  const handleInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="input-wrapper">
      {label && <label>{label}</label>}
      <div className="input-container">
        {icon && <div className="icon-container">{icon}</div>}
        <input
          type={type}
          className={className}
          value={value}
          onChange={handleInput}
          {...inputAttributes}
        />
      </div>
    </div>
  );
};

export default Input;
