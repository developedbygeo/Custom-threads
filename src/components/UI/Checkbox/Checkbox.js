import React from 'react';

import { Check } from '@styled-icons/bootstrap/Check';
import StyledCheckbox from './Checkbox.styled.js';

const Checkbox = ({ children, value, onValueChange }) => {
  return (
    <StyledCheckbox onClick={onValueChange}>
      <label>{children}</label>
      <input type="checkbox" />
      <span className={`checkbox ${value ? 'checkbox--active' : ''}`} aria-hidden="true">
        {value && <Check />}
      </span>
    </StyledCheckbox>
  );
};

export default React.memo(Checkbox);
