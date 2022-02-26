import { Link } from 'react-router-dom';

import modelHero from '../assets/modelHero.webp';
import jacketHero from '../assets/jacketHero.webp';
import { ImageCard, Card } from '../components/UI/Card.styled';
import { StyledHero } from '../components/UI/Container.styled';
import { CtaButton } from '../components/UI/Button.styled';
import { getColor } from '../components/shared/utils';

const gridSettings = {
  cols: '0.9fr 1fr',
  rows: '1fr',
};

const flexPrimary = {
  align: 'flex-start',
  justify: 'center',
  dir: 'column',
};

const flexSecondary = {
  align: 'flex-start',
  justify: 'center',
  dir: 'column',
};

const Landing = () => {
  return (
    <>
      <StyledHero bgClr={getColor('heroBg')} gridSettings={gridSettings}>
        <ImageCard>
          <img src={modelHero} alt="model posing with clothing" />
        </ImageCard>
        <Card flexSettings={flexPrimary}>
          <div>
            <p>HOT DEALS</p>
            <h2>SALE UP TO 50%</h2>
          </div>
          <Link to="/home">
            <CtaButton>VIEW NOW</CtaButton>
          </Link>
        </Card>
      </StyledHero>
      <StyledHero gridSettings={gridSettings}>
        <Card flexSettings={flexSecondary} p="4rem">
          <div>
            <h3>Finishing touches? </h3>
            <p>Accessories have landed!</p>
          </div>
          <Link to="/home">
            <CtaButton ctaAltHover>SHOP NOW</CtaButton>
          </Link>
        </Card>
        <ImageCard justifySelf="flex-end" textAlign="right">
          <img src={jacketHero} alt="fancy bomber jacket hanging" />
        </ImageCard>
      </StyledHero>
    </>
  );
};

export default Landing;
