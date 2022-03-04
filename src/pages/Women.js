import useRetrieve from '../hooks/useRetrieve';

import Banner from '../components/UI/Banner';
import femaleModel1 from '../assets/female-model-1.webp';
import femaleModel2 from '../assets/female-model-2.webp';

const womenContent = {
  header: 'Fancy nightout? Chilling by the beach?',
  subheader1: 'Stylish - anytime, anywhere',
  imgURL: femaleModel1,
  imgURL2: femaleModel2,
};

const Women = () => {
  const { status, ItemsComponent, LoadingSpinner } = useRetrieve("women's clothing");

  return (
    <>
      <Banner content={womenContent} customBg="#f9844a" customClr="#eaeaea" customClass="dualImageBanner" />
      {status ? <ItemsComponent /> : <LoadingSpinner />}
    </>
  );
};

export default Women;
