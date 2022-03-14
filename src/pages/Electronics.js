import withSelectedList from '../components/Products/withSelectedList';

import ProductList from '../components/Products/ProductList';
import { Controls } from '../components/Extra/Controls';

import Banner from '../components/UI/Banner';
import electronics from '../assets/electronics.webp';

const electronicsContent = {
  header: 'The latest tech has landed!',
  subheader2: 'Do not miss out.',
  imgURL: electronics,
};

const ElectronicProducts = withSelectedList(ProductList);

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
      <Controls />
      <ElectronicProducts retrieveID="electronics" />
    </>
  );
};

export default Electronics;
