import withSelectedList from '../components/Products/withSelectedList';

import ProductList from '../components/Products/ProductList';

import Banner from '../components/UI/Banner';
import { Controls } from '../components/Extra/Controls';
import promoImage from '../assets/page-content/home.png';

const memberPromoContent = {
  header: 'Member Exclusive',
  subheader1: '15% off everything + extra $10 off for the first order.',
  subheader2: 'Not a member? Join now!',
  imgURL: promoImage,
};

const AllProducts = withSelectedList(ProductList);

const Home = () => {
  return (
    <>
      <Banner content={memberPromoContent} alt="models posing" />
      <Controls />
      <AllProducts />
    </>
  );
};

export default Home;
