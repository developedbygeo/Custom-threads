import withSelectedProducts from '../components/Products/withSelectedProducts';

import LoadingSpinner from '../components/UI/LoadingSpinner';
import ProductList from '../components/Products/ProductList';

import Banner from '../components/UI/Banner';
import electronics from '../assets/electronics.webp';

const electronicsContent = {
  header: 'The latest tech has landed!',
  subheader2: 'Do not miss out.',
  imgURL: electronics,
};

const ElectronicProducts = withSelectedProducts(ProductList);

const Electronics = () => {
  return (
    <>
      <Banner
        content={electronicsContent}
        customBg="#e2d9d6"
        customClr="#141414"
        customClass="dualImageBanner"
        rowReverse={true}
        parentClass="wall"
      />
      <ElectronicProducts retrieveID="electronics" />
    </>
  );
};

export default Electronics;
