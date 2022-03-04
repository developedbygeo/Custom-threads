import { StyledPromo } from './Container.styled';
import { ImageCard } from './Card.styled';

const Banner = ({ customClass, content, alt, customBg, customClr }) => {
  const additionalImageExists = 'imgURL2' in content;

  return (
    <StyledPromo customBg={customBg} customClr={customClr}>
      <article className={customClass}>
        {additionalImageExists && (
          <ImageCard className="image-cont2">
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
