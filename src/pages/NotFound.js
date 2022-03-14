import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledHero } from '../components/UI/Container.styled';
import { CtaButton } from '../components/UI/Button.styled';
import NotFoundImage from '../assets/404.svg';

const layout = {
  justify: 'space-evenly',
  align: 'center',
  dir: 'column',
};

const NotFound = () => {
  const navigate = useNavigate();

  const goBackHandler = useCallback(() => {
    navigate('/home');
  }, [navigate]);

  return (
    <StyledHero flexSettings={layout} mHeight="90vh" h="100%">
      <div className="notFound-msg">
        <h2>Seems like you found a secret path!</h2>
        <p>Just kidding, there's nothing here.</p>
      </div>
      <div className="notFound">
        <img src={NotFoundImage} alt="404 not found" />
      </div>
      <div>
        <CtaButton onClick={goBackHandler} ctaAltHover>
          Return
        </CtaButton>
      </div>
    </StyledHero>
  );
};

export default NotFound;
