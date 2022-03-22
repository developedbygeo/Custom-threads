import { ItemCard, DescriptionCard } from './Product.styled';
import { CtaButton, StyledLink, StyledUtilityBtn } from '../UI/Button.styled';
import { AiOutlineArrowLeft, AiOutlineEye } from 'react-icons/ai';
import { Rating } from 'react-simple-star-rating';

const Product = ({ product, onAddItem, onGoBack, isDetails, asElement }) => {
  if (!product) return <p></p>;

  const price = product.price.toFixed(2);

  const seeMoreDetailsButton = (
    <StyledLink to={`/product-details/product-${product.id}`}>
      <span>See more</span>
      <span className="smallIcon">
        <AiOutlineEye />
      </span>
    </StyledLink>
  );

  const takeMeBackButton = (
    <StyledUtilityBtn onClick={onGoBack} as="a" title="Go back">
      <span className="icon smallIcon">
        <AiOutlineArrowLeft />
      </span>
      <span className="text">Take me back</span>
    </StyledUtilityBtn>
  );

  const showRatingLayout = (
    <div className="details">
      <Rating
        className="rating"
        initialValue={product.rating.rate}
        fullStyle={{ height: 'auto' }}
        emptyStyle={{ height: 'auto' }}
        style={{ width: 'auto', height: 'auto' }}
        size={14}
        allowHalfIcon
        tooltipArray={[`${product.rating.count} votes`]}
        showTooltip={false}
        readonly
      />
      <p className="price">${price}</p>
    </div>
  );

  const productInfo = isDetails ? (
    <h2 title={product.title}>{product.title}</h2>
  ) : (
    <div className="product-desc">
      <h3 title={product.title}>{product.title}</h3>
    </div>
  );

  return (
    <ItemCard isDetails={isDetails} as={asElement || 'li'} p="1rem">
      <div className="img-wrapper">
        <img src={product.image} alt={`${product.title} visual placeholder`} />
      </div>
      <DescriptionCard isDetails={isDetails} className="description" as="article">
        <div className="info-wrapper">
          {productInfo}
          {isDetails && <p className="prod-desc">{product.description}</p>}
          {isDetails ? showRatingLayout : <p className="price">${price}</p>}
        </div>
        <div className="cta-wrapper">
          <CtaButton ctaAltHover onClick={onAddItem.bind(null, product)} title="Add this item to your cart">
            Add to Cart
          </CtaButton>
          {!isDetails && seeMoreDetailsButton}
          {isDetails && takeMeBackButton}
        </div>
      </DescriptionCard>
    </ItemCard>
  );
};

export default Product;
