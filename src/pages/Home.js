import useRetrieve from '../hooks/useRetrieve';

import Banner from '../components/UI/Banner';
import { UtilityButton } from '../components/Extra/Controls';
import { Filter } from '@styled-icons/fa-solid/Filter';
import promoImage from '../assets/home.png';

const memberPromoContent = {
  header: 'Member Exclusive',
  subheader1: '15% off everything + extra $10 off for the first order.',
  subheader2: 'Not a member? Join now!',
  imgURL: promoImage,
};

const Home = () => {
  const { status, ItemsComponent, LoadingSpinner } = useRetrieve();
  return (
    <>
      <Banner content={memberPromoContent} alt="models posing" />
      <UtilityButton>
        <Filter />
        Filter & Sort
      </UtilityButton>
      {status ? <ItemsComponent /> : <LoadingSpinner />}
    </>
  );
};

export default Home;
