import { useRef } from 'react';
import { authActions } from '../features/authSlice';
import useForm from '../hooks/useForm';

import StyledInput from '../components/UI/Input.styled';
import { StyledUtilityBtn } from '../components/UI/Button.styled';
import { Send } from 'styled-icons/boxicons-regular';
import { messages } from '../components/shared/messages';

const { successMessage, errorMessage, initialMessage } = messages;

const CheckoutInfo = () => {
  const [errorExists, submitHandler] = useForm(authActions.approveAuth);

  const shouldSubmitShow = errorExists === null || errorExists;

  const nameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const streetRef = useRef();

  return (
    <>
      <div className="img-container" role="img" alt="a mother and a child after shopping" />
      <div className="blob" role="img" alt="colored blob" />
      <form
        onSubmit={(e) =>
          submitHandler(
            e,
            nameRef.current.value,
            lastNameRef.current.value,
            addressRef.current.value,
            streetRef.current.value
          )
        }
        autoComplete="off"
      >
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
          {shouldSubmitShow && (
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
