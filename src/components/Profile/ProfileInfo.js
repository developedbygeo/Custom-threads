import React, { useState, useRef } from 'react';
import useForm from '../../hooks/useForm';
import { authActions } from '../../features/authSlice';

import StyledInput from '../UI/Input.styled';
import { CtaButton, StyledUtilityBtn } from '../UI/Button.styled';
import { messages } from '../shared/messages';
import { AiOutlineClose } from 'react-icons/ai';
import { RiLoginBoxLine } from 'react-icons/ri';

const { errorMessage } = messages;

const ProfileInfo = ({ onDisable }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isRegister, setIsRegister] = useState(false);
  const [errorExists, formSubmitHandler] = useForm(authActions.login);

  const toggleRegister = () => {
    setIsRegister((prevState) => !prevState);
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  const registerPrompt = (
    <>
      <h2>
        Welcome to <span className="logo">Custom Threads</span>
      </h2>
      <p>
        Let's get you <span className="action-prompt">signed up!</span>
      </p>
    </>
  );

  const loginPrompt = (
    <>
      <h2>
        Welcome <span className="logo">back</span>!
      </h2>
      <p>
        Please log in with your <span className="action-prompt">credentials.</span>
      </p>
    </>
  );

  return (
    <>
      <div className="login-blob" role="img" alt="login blob" />
      <StyledUtilityBtn onClick={onDisable} className="close-btn" iconMaxWidth="3rem" title="Close Menu">
        <AiOutlineClose />
      </StyledUtilityBtn>
      <div className="login-header">{isRegister ? registerPrompt : loginPrompt}</div>
      <form
        onSubmit={(e) => formSubmitHandler(e, emailRef.current.value, passwordRef.current.value)}
        autoComplete="off"
      >
        <div className="data-field">
          <StyledInput ref={emailRef} placeholder="Username" id="username" type="text" required />
          <label htmlFor="username">Username</label>
        </div>
        <div className="data-field">
          <StyledInput ref={passwordRef} placeholder="Password" id="password" type="text" required />
          <label htmlFor="password">Password</label>
        </div>
        {errorExists && errorMessage}
        <CtaButton ctaAltHover>Join now!</CtaButton>
      </form>
      <div className="sign-in">
        <p>{isRegister ? 'Already' : 'Not'} a member?</p>
        <StyledUtilityBtn onClick={toggleRegister}>
          <span className="text">{isRegister ? 'Login' : 'Register'} now</span>
          <span className="icon smallIcon">
            <RiLoginBoxLine />
          </span>
        </StyledUtilityBtn>
      </div>
    </>
  );
};

export default React.memo(ProfileInfo);
