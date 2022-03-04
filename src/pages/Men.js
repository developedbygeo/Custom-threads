import useRetrieve from '../hooks/useRetrieve';

import Banner from '../components/UI/Banner';
import maleModel1 from '../assets/male-model-1.webp';
import maleModel2 from '../assets/male-model-2.webp';

const menContent = {
  header: 'No matter the occasion',
  subheader1: "We've got you covered!",
  imgURL: maleModel1,
  imgURL2: maleModel2,
};

const Men = () => {
  const { status, ItemsComponent, LoadingSpinner } = useRetrieve("men's clothing");

  return (
    <>
      <Banner content={menContent} customBg="#e2d9d6" customClr="#141414" customClass="dualImageBanner" />
      {status ? <ItemsComponent /> : <LoadingSpinner />}
    </>
  );
};

export default Men;