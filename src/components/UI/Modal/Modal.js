import React from 'react';
import reactDom from 'react-dom';
import DynamicDiv from './Modal.styled';

const modalContainer = document.querySelector('#overlay');

const Backdrop = ({ onDisable }) => {
  return <DynamicDiv onClick={onDisable} backdrop={true} />;
};

const ModalOverlay = ({ children, purpose }) => {
  return <DynamicDiv purpose={purpose}>{children}</DynamicDiv>;
};

const Modal = ({ onDisable, children, purpose }) => {
  return (
    <>
      {reactDom.createPortal(<Backdrop onDisable={onDisable} />, modalContainer)}
      {reactDom.createPortal(<ModalOverlay purpose={purpose}>{children}</ModalOverlay>, modalContainer)}
    </>
  );
};

export default React.memo(Modal);
