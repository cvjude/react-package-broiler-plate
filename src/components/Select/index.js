import React, { useState, useEffect } from 'react';
import { validateInput, validate } from '../../helpers';
// import rdown from '../../assets/aDown.png';
import '../Input/style.scss';

const Select = ({
  name,
  placeHolder = 'place Holder',
  value,
  error = '',
  inputs,
  currentText = 'None',
  required,
  validateSelf,
  handleSelect,
}) => {
  const [error, setError] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);
  const [presentValue, setPresentValue] = useState('');
  const [value, setValue] = useState('');

  selectRef = React.createRef();

  useEffect(() => {
    setPresentValue(currentText);

    if (validateSelf) {
      const isValid = validate(value, name);

      if (!isValid) {
        this.selectRef.current.classList.add('invalid');
      }
    }

    return () => {};
  }, []);

  const handleClick = (name, value) => {
    setPresentValue(value);
    setOpenDrop(false);
    selectRef.current.classList.add('valid');
    handleSelect(name, value);
    setValue(value);
  };

  const revileDropDown = () => {
    setOpenDrop(!openDrop);
  };

  const close = () => {
    this.setState((prevState) => ({
      openDrop: false,
    }));
  };

  const options = inputs.map((input, index) => {
    return (
      <button
        className={`options ${
          input.option === this.state.presentValue ? 'selected' : ''
        }`}
        type='button'
        key={index}
        value={input.option}
        onClick={() => handleClick(name, input.option)}
      >
        {input.option}
      </button>
    );
  });

  return (
    <div className='input-div' onBlur={close} tabIndex={-1}>
      <div className='input'>
        <div
          className={`select ${openDrop ? 'open-drop' : ''}`}
          ref={selectRef}
        >
          <button
            className={`currentValue ${openDrop ? 'open-drop' : ''}`}
            type='button'
            onClick={revileDropDown}
          >
            <p>{presentValue ? presentValue : currentText}</p>
            {/* <img src={rdown} alt='' /> */}
          </button>
          <div
            className={`dropDownButtons ${openDrop ? 'open-drop' : 'close'}`}
          >
            {options}
          </div>
        </div>

        <label className='place-holder'>{placeHolder}</label>
        <span></span>
      </div>
    </div>
  );
};

export default Select;
