import useRetrieve from '../hooks/useRetrieve';

import Banner from '../components/UI/Banner';
import electronics from '../assets/electronics.webp';

const electronicsContent = {
  header: 'The latest tech has landed!',
  subheader2: 'Do not miss out.',
  imgURL: electronics,
};

const Electronics = () => {
  const { status, ItemsComponent, LoadingSpinner } = useRetrieve('electronics');

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
      {status ? <ItemsComponent /> : <LoadingSpinner />}
    </>
  );
};

export default Electronics;
