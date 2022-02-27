import { useState } from 'react';

import Drawer from '../UI/Drawer/Drawer';
import Filters from './Filters';
import { StyledUtilityBtn } from '../UI/Button.styled';
import { Card } from '../UI/Card.styled';

export const UtilityButton = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <Card sticky p="1rem">
        <StyledUtilityBtn onClick={menuToggleHandler}>
          <span className="icon">{children[0]}</span>
          <span className="text">{children[1]}</span>
        </StyledUtilityBtn>
      </Card>
      {menuOpen && (
        <Drawer>
          <Filters />
        </Drawer>
      )}
    </>
  );
};
