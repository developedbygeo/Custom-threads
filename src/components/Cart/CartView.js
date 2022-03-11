import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../features/cartSlice';

import CartItem from './CartItem';

const CartView = ({ isCart }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalCost.toFixed(2));
  const itemsExist = cartItems.length > 0;

  const addItemHandler = useCallback(
    (item) => {
      dispatch(cartActions.addItem(item));
    },
    [dispatch]
  );

  const removeItemHandler = useCallback(
    (item) => {
      dispatch(cartActions.removeItem(item.id));
    },
    [dispatch]
  );

  const cartHeader = isCart && (
    <div className="cart-header">
      <h2>
        My <span>Cart</span>
      </h2>
    </div>
  );

  const cartView = cartItems.map((item) => (
    <CartItem
      key={item.id}
      product={item}
      onAddItem={addItemHandler.bind(null, item)}
      onRemoveItem={removeItemHandler.bind(null, item)}
    />
  ));

  const emptyView = (
    <div className="not-found">
      <h4>No items were found in your cart.</h4>
      <p>Please feel free to add some and check back again.</p>
    </div>
  );

  return (
    <>
      {cartHeader}
      {itemsExist ? <ul className="cart">{cartView}</ul> : emptyView}
      {itemsExist && (
        <div className="price-wrapper">
          <p className="price-header">Price:</p>
          <p className="price-text" title={`Total price: $${totalPrice}`}>
            ${totalPrice}
          </p>
        </div>
      )}
    </>
  );
};

export default CartView;
