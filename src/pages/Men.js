import withSelectedList from '../components/Products/withSelectedList';

import { Controls } from '../components/Extra/Controls';

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

const gradient =
  'linear-gradient(-250deg, rgba(198,137,222,0.736842105263158) 0%, rgba(172,140,223,0.7918660287081339) 40%, rgba(131,203,250,0.700956937799043) 60%, rgba(165,198,219,0.8133971291866029) 100%);';

const MenProducts = withSelectedList(ProductList);

const Men = () => {
  return (
    <>
      <Banner content={menContent} customBg={gradient} customClr="#141414" customClass="dualImageBanner" />
      <Controls />
      <MenProducts retrieveID="men's clothing" />
    </>
  );
};

export default Men;
