import { useSelector } from 'react-redux';

const withSelectedProducts = (Component) => {
  const NewProductList = ({ retrieveID }) => {
    const currentItems = useSelector((state) => state.data.products);

    const filteredItems = retrieveID
      ? currentItems.filter((item) => item.category === retrieveID)
      : currentItems;

    return <Component products={filteredItems} />;
  };
  return NewProductList;
};

export default withSelectedProducts;
