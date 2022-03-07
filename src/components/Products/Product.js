import { ItemCard, DescriptionCard } from './Product.styled';
import { Card } from '../UI/Card.styled';
import { CtaButton } from '../UI/Button.styled';
import { StyledUtilityBtn } from '../UI/Button.styled';
import { BiPlus, BiMinus } from 'react-icons/bi';

const Product = ({ product, isCartItem, onAddItem }) => {
  const cartActions = isCartItem && (
    <>
      <Card className="cart-actions">
        <StyledUtilityBtn>
          <BiPlus />
        </StyledUtilityBtn>
        <StyledUtilityBtn>
          <BiMinus />
        </StyledUtilityBtn>
      </Card>
    </>
  );

  const productItemButton = onAddItem && (
    <div className="cta-wrapper">
      <CtaButton onClick={onAddItem}>Add to Cart</CtaButton>
    </div>
  );

  const itemDescription = isCartItem ? (
    <div className="cart-desc">
      <p className="price">${product.price}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  ) : (
    <p className="price">${product.price}</p>
  );

  return (
    <ItemCard as="li" p="1rem" isCartItem={isCartItem}>
      <div className="img-wrapper">
        <img src={product.image} alt={`${product.title} visual placeholder`} />
      </div>
      <DescriptionCard>
        <div className="info-wrapper">
          <h3>{product.title}</h3>
          {itemDescription}
        </div>
        {productItemButton}
      </DescriptionCard>
      {cartActions}
    </ItemCard>
  );
};

export default Product;
