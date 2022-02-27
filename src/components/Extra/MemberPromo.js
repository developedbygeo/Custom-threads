import { StyledPromo } from '../UI/Container.styled';
import { ImageCard } from '../UI/Card.styled';
import homeImage from '../../assets/home.png';

const MemberPromo = () => {
  return (
    <StyledPromo>
      <article>
        <div>
          <h2>Member Exclusive</h2>
          <div>
            <p>15% off everything + extra $10 off for the first order.</p>
            <span>Not a member? Join now!</span>
          </div>
        </div>
        <ImageCard>
          <img src={homeImage} alt="models posing" />
        </ImageCard>
      </article>
    </StyledPromo>
  );
};

export default MemberPromo;
