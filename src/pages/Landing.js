import modelHero from '../assets/modelHero.webp';
import jacketHero from '../assets/jacketHero.webp';
import { ImageCard, Card } from '../components/UI/Card.styled';
import { StyledHero } from '../components/UI/Container.styled';
import { CtaButton } from '../components/UI/Button.styled';
import { getColor } from '../components/shared/utils';

const gridSettings = {
  cols: 'repeat(2, 1fr)',
  rows: '1fr',
};

const flexPrimary = {
  align: 'flex-start',
  justify: 'center',
  dir: 'column',
};

const flexSecondary = {
  align: 'center',
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
          <CtaButton>VIEW NOW</CtaButton>
        </Card>
      </StyledHero>
      <StyledHero gridSettings={gridSettings}>
        <Card flexSettings={flexSecondary} p="4rem">
          <div>
            <h3>Finishing touches? </h3>
            <p>Accessories have landed!</p>
          </div>
          <CtaButton ctaAltHover alignSelf="flex-start">
            SHOP NOW
          </CtaButton>
        </Card>
        <ImageCard>
          <img src={jacketHero} alt="fancy hanging bomber jacket" />
        </ImageCard>
      </StyledHero>
    </>
  );
};

export default Landing;
