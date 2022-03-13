import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { cartActions } from '../features/cartSlice';

import Product from '../components/Products/Product';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const parsedId = id.replace('product-', '');
  const items = useSelector((state) => state.data.products);
  const itemToRender = items.find((item) => item.id === +parsedId);

  const addItemHandler = useCallback(
    (product) => {
      dispatch(cartActions.addItem(product));
    },
    [dispatch]
  );

  const goBackHandler = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  useEffect(() => {
    if (!itemToRender) {
      navigate('/404');
    }
  }, [itemToRender, navigate]);

  return (
    <>
      <Product
        product={itemToRender}
        asElement="section"
        isDetails
        onAddItem={addItemHandler}
        onGoBack={goBackHandler}
      />
    </>
  );
};

export default ProductDetails;
