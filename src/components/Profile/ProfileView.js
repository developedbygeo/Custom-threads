import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../features/authSlice';

import ProfileInfo from './ProfileInfo';
import StyledLogin from './Login.styled';
import { StyledUtilityBtn, CtaButton } from '../UI/Button.styled';
import { ReactComponent as LoginSVG } from '../../assets/svg/login.svg';
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
      <article className="svg-success">
        <div>
          <h2>Glad to have you back!</h2>
        </div>
        <div className="success-svg-wrapper">
          <LoginSVG />
        </div>
      </article>
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
