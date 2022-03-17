import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../features/authSlice';

import ProfileInfo from './ProfileInfo';
import StyledLogin from '../UI/Login.styled';
import { ReactComponent as LoginSVG } from '../../assets/login.svg';
import { StyledUtilityBtn, CtaButton } from '../UI/Button.styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const loginLayout = {
  justify: 'space-between',
  align: 'center',
  dir: 'column',
};

const ProfileView = ({ onDisable }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const loginSuccess = (
    <>
      <div className="svg-success">
        <h2>Glad to have you back!</h2>
        <LoginSVG />
      </div>
      <div className="success-actions">
        <StyledUtilityBtn onClick={onDisable}>
          <span className="icon smallIcon">
            <AiOutlineArrowLeft />
          </span>
          <span className="text">Return</span>
        </StyledUtilityBtn>
        <CtaButton onClick={logoutHandler}>
          <span className="text">Logout</span>
        </CtaButton>
      </div>
    </>
  );

  return (
    <StyledLogin flexSettings={loginLayout}>
      {isLoggedIn ? loginSuccess : <ProfileInfo onDisable={onDisable} />}
    </StyledLogin>
  );
};

export default React.memo(ProfileView);
