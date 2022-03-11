import { ItemCard, DescriptionCard } from '../Products/Product.styled';
import { Card } from '../UI/Card.styled';
import { StyledUtilityBtn } from '../UI/Button.styled';
import { BiPlus, BiMinus } from 'react-icons/bi';

const CartItem = ({ product, onAddItem, onRemoveItem }) => {
  const { totalPrice } = product;

  const cartActions = (
    <>
      <Card className="cart-actions">
        <StyledUtilityBtn onClick={onAddItem} isCartAction customClr="white">
          <BiPlus />
        </StyledUtilityBtn>
        <StyledUtilityBtn onClick={onRemoveItem} isCartAction customClr="white">
          <BiMinus />
        </StyledUtilityBtn>
      </Card>
    </>
  );

  return (
    <ItemCard as="li" p="1rem" isCartItem>
      <div className="img-wrapper">
        <img src={product.image} alt={`${product.title} visual placeholder`} />
      </div>
      <DescriptionCard className="description">
        <div className="info-wrapper">
          <h3 title={product.title}>{product.title}</h3>
          <div className="cart-desc">
            <p className="price" title={`Total price for this item: $${totalPrice.toFixed(2)}`}>
              ${totalPrice.toFixed(2)}
            </p>
            <p className="quantity" title={`Total number of items: ${product.quantity}`}>
              Quantity: {product.quantity}
            </p>
          </div>
        </div>
      </DescriptionCard>
      {cartActions}
    </ItemCard>
  );
};

export default CartItem;
