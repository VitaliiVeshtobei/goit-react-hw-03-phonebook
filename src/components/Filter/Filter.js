import React from 'react';
import PropTypes from 'prop-types';
import { InputFilter } from './FilterStyled';

export function Filter({ value, onChange }) {
  return (
    <label>
      Find contacts by name
      <InputFilter type="text" value={value} onChange={onChange}></InputFilter>
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
