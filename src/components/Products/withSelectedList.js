import { useSelector } from 'react-redux';

const withSelectedList = (Component) => {
  const NewProductList = ({ retrieveID }) => {
    const currentItems = useSelector((state) => state.data.products);
    const filtered = useSelector((state) => state.data.filtered);

    const filteredItems = retrieveID ? currentItems.filter((item) => item.category === retrieveID) : filtered;

    return <Component products={filteredItems} />;
  };
  return NewProductList;
};

export default withSelectedList;
