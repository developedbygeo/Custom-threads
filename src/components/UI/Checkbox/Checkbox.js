import React, { useState } from 'react';

import { Check } from '@styled-icons/bootstrap/Check';
import StyledCheckbox from './Checkbox.styled.js';

const Checkbox = ({ children, getState }) => {
  const [isChecked, setIsChecked] = useState(true);

  const changeStatusHandler = () => setIsChecked((prevState) => !prevState);

  return (
    <StyledCheckbox onClick={changeStatusHandler}>
      <label>{children}</label>
      <input type="checkbox" />
      <span className={`checkbox ${isChecked ? 'checkbox--active' : ''}`} aria-hidden="true">
        {isChecked && <Check />}
      </span>
    </StyledCheckbox>
  );
};

export default React.memo(Checkbox);
