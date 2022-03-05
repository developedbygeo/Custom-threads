import withSelectedProducts from '../components/Products/withSelectedProducts';

import LoadingSpinner from '../components/UI/LoadingSpinner';
import ProductList from '../components/Products/ProductList';

import Banner from '../components/UI/Banner';
import maleModel1 from '../assets/male-model-1.webp';
import maleModel2 from '../assets/male-model-2.webp';

const menContent = {
  header: 'No matter the occasion',
  subheader1: "We've got you covered!",
  imgURL: maleModel1,
  imgURL2: maleModel2,
};

const MenProducts = withSelectedProducts(ProductList, LoadingSpinner);

const Men = () => {
  return (
    <>
      <Banner content={menContent} customBg="#A5C6DB" customClr="#141414" customClass="dualImageBanner" />
      <MenProducts retrieveID="men's clothing" />
    </>
  );
};

export default Men;
