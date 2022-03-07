import withSelectedProducts from '../components/Products/withSelectedProducts';

import ProductList from '../components/Products/ProductList';

import Banner from '../components/UI/Banner';
import femaleModel1 from '../assets/female-model-1.webp';
import femaleModel2 from '../assets/female-model-2.webp';

const womenContent = {
  header: 'Fancy nightout? Chilling by the beach?',
  subheader1: 'Stylish - anytime, anywhere',
  imgURL: femaleModel1,
  imgURL2: femaleModel2,
};

const WomenProducts = withSelectedProducts(ProductList);

const Women = () => {
  return (
    <>
      <Banner
        content={womenContent}
        customBg="#b13d3d"
        parentClass="two-tone"
        customClr="#eaeaea"
        customClass="dualImageBanner"
      />
      <WomenProducts retrieveID="women's clothing" />
    </>
  );
};

export default Women;
