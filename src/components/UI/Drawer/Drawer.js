import React from 'react';
import { StyledDrawer } from './Drawer.styled';

const DrawerOverlay = ({ children }) => {
  return <StyledDrawer>{children}</StyledDrawer>;
};

const Drawer = ({ children }) => {
  return (
    <>
      <DrawerOverlay>{children}</DrawerOverlay>
    </>
  );
};

export default React.memo(Drawer);
