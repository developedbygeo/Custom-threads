import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const withSelectedProducts = (Component, Fallback) => {
  const NewProductList = ({ retrieveID }) => {
    const [itemsExist, setItemsExist] = useState(false);
    const currentItems = useSelector((state) => state.data.products);

    useEffect(() => {
      if (currentItems.length > 1) {
        setItemsExist(true);
      }
    }, [currentItems]);

    const filteredItems = retrieveID
      ? currentItems.filter((item) => item.category === retrieveID)
      : currentItems;

    return <>{itemsExist ? <Component products={filteredItems} /> : <Fallback />}</>;
  };
  return NewProductList;
};

export default withSelectedProducts;
