import { useSelector } from 'react-redux';
import Product from '../../Products/Product';

export const CartDialogue = ({ onDisable, onCheckout }) => {
  const cartItems = useSelector((state) => state.cart.items);

  const cartView = cartItems.map((item) => <Product key={item.id} product={item} isCartItem="true" />);

  const emptyView = (
    <>
      <h4>No items found in your cart.</h4>
      <p>Feel free to add some and check back again</p>
    </>
  );

  return (
    <>
      <h3>My Cart</h3>
      <div className="cart">{cartItems.length > 0 ? cartView : emptyView}</div>
    </>
  );
};
