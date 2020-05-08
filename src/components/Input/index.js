import React, { useState, useEffect } from 'react';
import { validateInput, validate } from '../../helpers';
import './style.scss';

const Input = ({
  type = 'text',
  name,
  placeHolder = 'place Holder',
  value,
  errorMsg = '',
  required,
  validateSelf,
}) => {
  const [error, setError] = useState(false);
  const [value, setValue] = useState('');

  inputRef = React.createRef();

  useEffect(() => {
    if (validateSelf) {
      const isValid = validate(value, name);

      if (!isValid) {
        inputRef.current.classList.add('typing', 'invalid');
      }
    }

    inputRef.current.classList.add('typing');
    if (value === '') {
      inputRef.current.classList.remove('typing');

      setError(false);
    }

    return () => {};
  }, []);

  const validate = (event) => {
    handleChange(event, this.state.error);
    if (!validateInput(event)) {
      inputRef.current.classList.add('invalid');
      setError(true);
    } else {
      inputRef.current.classList.remove('invalid');
      setError(true);
    }
    setValue(event.target.value);
  };

  return (
    <div className='input-div'>
      <div className='input'>
        <input
          className='input-type'
          ref={inputRef}
          type={type}
          required={required}
          name={name}
          onChange={validate}
          value={value}
        />
        <label className='place-holder'>{placeHolder}</label>
        <span></span>
      </div>
      <p className='error' style={{ display: error ? 'block' : 'none' }}>
        {errorMsg}
      </p>
    </div>
  );
};

export default Input;
