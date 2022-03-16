import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../features/authSlice';

import StyledInput from '../components/UI/Input.styled';
import { StyledUtilityBtn } from '../components/UI/Button.styled';
import { Send } from 'styled-icons/boxicons-regular';
import { messages } from '../components/shared/messages';

const basicValidation = (...values) => {
  return values.every((val) => val.trim().length > 1);
};

const { successMessage, errorMessage, initialMessage } = messages;

const CheckoutInfo = () => {
  const [errorExists, setErrorExists] = useState(null);
  const [showButton, setShowButton] = useState(true);
  const dispatch = useDispatch();
  const nameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const streetRef = useRef();

  const submitDetailsHandler = (e) => {
    e.preventDefault();
    const res = basicValidation(
      nameRef.current.value,
      lastNameRef.current.value,
      addressRef.current.value,
      streetRef.current.value
    );
    if (!res) {
      setErrorExists(true);
    } else {
      setErrorExists(false);
      setShowButton(false);
      dispatch(authActions.approveAuth(res));
    }
  };

  return (
    <>
      <form onSubmit={submitDetailsHandler} autoComplete="off">
        <div className="data-field">
          <StyledInput ref={nameRef} id="name" type="text" placeholder="Name" required />
          <label htmlFor="name">Name</label>
        </div>
        <div className="data-field">
          <StyledInput ref={lastNameRef} id="lastname" type="text" placeholder="Last Name" required />
          <label htmlFor="name">Last Name</label>
        </div>
        <div className="data-field">
          <StyledInput ref={addressRef} id="address" type="text" placeholder="Address" required />
          <label htmlFor="address">Address</label>
        </div>
        <div className="data-field">
          <StyledInput ref={streetRef} id="street" type="text" placeholder="Street No." required />
          <label htmlFor="street">Street Number</label>
        </div>
        <div className="form-action">
          {showButton && (
            <StyledUtilityBtn>
              <span className="text">Submit details</span>
              <span className="icon smallIcon">
                <Send />
              </span>
            </StyledUtilityBtn>
          )}
        </div>
      </form>
      {errorExists === null ? initialMessage : errorExists ? errorMessage : successMessage}
    </>
  );
};

export default CheckoutInfo;
