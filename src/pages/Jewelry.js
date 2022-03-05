import withSelectedProducts from '../components/Products/withSelectedProducts';

import LoadingSpinner from '../components/UI/LoadingSpinner';
import ProductList from '../components/Products/ProductList';

import Banner from '../components/UI/Banner';
import jewelry from '../assets/jewelry.webp';

const jewelryContent = {
  header: 'Jewelry?',
  subheader1: '',
  subheader2: 'We got that too!',
  imgURL: jewelry,
};

const JewelryProducts = withSelectedProducts(ProductList, LoadingSpinner);

const Jewelry = () => {
  return (
    <>
      <Banner content={jewelryContent} customBg="#3F4C63" customClr="#eaeaea" />
      <JewelryProducts retrieveID="jewelery" />
    </>
  );
};

export default Jewelry;
