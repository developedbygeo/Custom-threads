import React from 'react';

import { BsCheck } from 'react-icons/bs';
import StyledCheckbox from './Checkbox.styled.js';

const Checkbox = ({ children, value, onValueChange }) => {
  return (
    <StyledCheckbox onClick={onValueChange}>
      <label>{children}</label>
      <input type="checkbox" />
      <span className={`checkbox ${value ? 'checkbox--active' : ''}`} aria-hidden="true">
        {value && <BsCheck />}
      </span>
    </StyledCheckbox>
  );
};

export default React.memo(Checkbox);
