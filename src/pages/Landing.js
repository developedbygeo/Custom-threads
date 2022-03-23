import { Link } from 'react-router-dom';

import modelHero from '../assets/page-content/modelHero.webp';
import jacketHero from '../assets/page-content/jacketHero.webp';
import { ImageCard, Card } from '../components/UI/Card.styled';
import { StyledHero } from '../components/UI/Container.styled';
import { CtaButton } from '../components/UI/Button.styled';
import { getColor } from '../components/shared/utils';
import { FiGithub } from 'react-icons/fi';

const gridSettings = {
  cols: 'repeat(2, auto)',
  rows: '1fr',
};

const flexSettings = {
  align: 'flex-start',
  justify: 'center',
  dir: 'column',
};

const Landing = () => {
  return (
    <>
      <StyledHero bgClr={getColor('heroBg')} gridSettings={gridSettings}>
        <ImageCard className="landing-img img1-cont">
          <img src={modelHero} alt="model posing with clothing" draggable={false} />
        </ImageCard>
        <Card flexSettings={flexSettings} className="cta-wrapper cta-wrapper1">
          <article className="cta-text cta-text-top">
            <p>HOT DEALS</p>
            <h2>SALES UP TO 50%</h2>
          </article>
          <Link to="/home">
            <CtaButton>VIEW NOW</CtaButton>
          </Link>
        </Card>
      </StyledHero>
      <StyledHero gridSettings={gridSettings}>
        <Card flexSettings={flexSettings} p="4rem" className="cta-wrapper cta-wrapper2">
          <article className="cta-text cta-text-bottom">
            <h3>Finishing touches? </h3>
            <p>Accessories have landed!</p>
          </article>
          <Link to="/home">
            <CtaButton ctaAltHover>SHOP NOW</CtaButton>
          </Link>
        </Card>
        <ImageCard className="landing-img img2-cont" justifySelf="flex-end" textAlign="right">
          <img src={jacketHero} alt="fancy bomber jacket hanging" draggable={false} />
        </ImageCard>
      </StyledHero>
      <footer>
        <a href="https://github.com/developedbygeo" target="_blank" rel="noreferrer">
          developedbygeo
        </a>
        <FiGithub />
      </footer>
    </>
  );
};

export default Landing;
