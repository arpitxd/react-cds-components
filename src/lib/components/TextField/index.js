import React, { useState } from 'react';

import PropTypes from 'prop-types';
import Text from '../Text';

import './styles.css';

const TextField = ({
  className = '',
  value = '',
  defaultValue = '',
  placeholder = 'Enter value here',
  id = '',
  type = 'text',
  autoFocus,
  required,
  onChange = () => {},
  ...props
}) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const handleOnchange = (e) => {
    if (isControlled) {
      onChange(e.target.value);
    } else {
      setInputValue(e.target.value);
    }
  };

  return (
    <div className="input-text-container">
      <input
        type={type}
        aria-label={placeholder}
        className={`inputField greyColor ${className}`}
        id={id}
        value={isControlled ? value : inputValue}
        autoFocus={autoFocus}
        onChange={handleOnchange}
        autoComplete="off"
        {...props}
      />
      <label
        className={`greyColor ${value ? 'focused-label' : 'un-focused'} ${
          required ? 'display-flex gap-10 required' : ''
        }`}
        htmlFor={placeholder}>
        <Text>{placeholder}</Text>
      </label>
    </div>
  );
};

TextField.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
};

export default TextField;
