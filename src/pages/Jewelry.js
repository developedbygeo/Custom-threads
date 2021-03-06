import withSelectedList from '../components/Products/withSelectedList';

import ProductList from '../components/Products/ProductList';
import { Controls } from '../components/Extra/Controls';

import Banner from '../components/UI/Banner';
import jewelry from '../assets/page-content/jewelry.webp';

const jewelryContent = {
  header: 'Jewelry!',
  subheader1: 'A fancy necklace or casual earrings?',
  subheader2: 'We have got just the thing!',
  imgURL: jewelry,
};

const JewelryProducts = withSelectedList(ProductList);

const Jewelry = () => {
  return (
    <>
      <Banner content={jewelryContent} customBg="#3F4C63" customClr="#eaeaea" />
      <Controls />
      <JewelryProducts retrieveID="jewelery" />
    </>
  );
};

export default Jewelry;
