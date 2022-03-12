import { useState } from 'react';

import Drawer from '../UI/Drawer/Drawer';
import Filters from './Filters';
import { StyledUtilityBtn } from '../UI/Button.styled';
import { Card, ActionWrapper } from '../UI/Card.styled';
import { Filter } from '@styled-icons/fa-solid/Filter';
import { CaretUpFill } from '@styled-icons/bootstrap/CaretUpFill';
import { CaretDownFill } from '@styled-icons/bootstrap/CaretDownFill';

const wrapperSettings = {
  justify: 'space-between',
  align: 'center',
  dir: 'row',
};

export const Controls = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };

  // TODO finish the sorting logic - maybe implement sort on other pages as well

  return (
    <ActionWrapper sticky flexSettings={wrapperSettings}>
      <Card p="1rem" customMargin="0%">
        <StyledUtilityBtn onClick={menuToggleHandler}>
          <span className="icon">
            <Filter />
          </span>
          <span className="text">Filter</span>
        </StyledUtilityBtn>
      </Card>
      {menuOpen && (
        <Drawer>
          <Filters />
        </Drawer>
      )}
      <Card sticky p="1rem" customMargin="0%">
        <StyledUtilityBtn>
          <span className="text">Sort</span>
          <span className="icon smallIcon">
            <CaretUpFill />
            {/* <CaretDownFill /> */}
          </span>
        </StyledUtilityBtn>
      </Card>
    </ActionWrapper>
  );
};
