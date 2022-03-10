import { ItemCard, DescriptionCard } from './Product.styled';
import { CtaButton } from '../UI/Button.styled';

const Product = ({ product, onAddItem }) => {
  return (
    <ItemCard as="li" p="1rem">
      <div className="img-wrapper">
        <img src={product.image} alt={`${product.title} visual placeholder`} />
      </div>
      <DescriptionCard className="description">
        <div className="info-wrapper">
          <h3 title={product.title}>{product.title}</h3>
          <p className="price">${product.price}</p>
        </div>
        <div className="cta-wrapper">
          <CtaButton onClick={onAddItem}>Add to Cart</CtaButton>
        </div>
      </DescriptionCard>
    </ItemCard>
  );
};

export default Product;
