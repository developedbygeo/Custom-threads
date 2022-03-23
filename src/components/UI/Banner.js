import { StyledPromo } from './Container.styled';
import { ImageCard } from './Card.styled';

const Banner = ({ customClass, parentClass, content, alt, customBg, customClr, rowReverse }) => {
  const additionalImageExists = 'imgURL2' in content;

  return (
    <StyledPromo className={parentClass} customBg={customBg} customClr={customClr} rowReverse={rowReverse}>
      <article className={customClass}>
        {additionalImageExists && (
          <ImageCard className="img-cont2">
            <img className="extra-image" src={content.imgURL2} alt={alt} />
          </ImageCard>
        )}
        <div className="text-wrapper">
          <h2>{content.header}</h2>
          <div>
            <p>{content.subheader1}</p>
            {content.subheader2 && <span>{content.subheader2}</span>}
          </div>
        </div>
        <ImageCard className="img-cont">
          <img src={content.imgURL} alt={alt} />
        </ImageCard>
      </article>
    </StyledPromo>
  );
};

export default Banner;
