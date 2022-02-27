import { useSelector } from 'react-redux';

import MemberPromo from '../components/Extra/MemberPromo';
import { StyledSection } from '../components/UI/Container.styled';
import { CtaButton } from '../components/UI/Button.styled';
import { ItemCard, DescriptionCard } from '../components/UI/Card.styled';
import { UtilityButton } from '../components/Extra/Controls';
import { Filter } from '@styled-icons/fa-solid/Filter';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const gridSettings = {
  cols: '1fr',
  rows: 'auto',
  gap: '3rem',
};

const Home = () => {
  const items = useSelector((state) => state.product.products);

  const fetchedItems = items.map((item) => {
    return (
      <ItemCard as="li" key={item.id} p="1rem">
        <div>
          <img src={item.image} alt={item.description} />
        </div>
        <DescriptionCard>
          <h4>{item.title}</h4>
          <p>${item.price}</p>
          <CtaButton>Add to Cart</CtaButton>
        </DescriptionCard>
      </ItemCard>
    );
  });

  const loading = <LoadingSpinner />;

  return (
    <>
      <MemberPromo />
      <UtilityButton>
        <Filter />
        Filter & Sort
      </UtilityButton>
      <StyledSection className="products" as="ul" gridSettings={gridSettings}>
        {items ? fetchedItems : loading}
      </StyledSection>
    </>
  );
};

export default Home;
