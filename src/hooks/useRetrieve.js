import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { StyledSection } from '../components/UI/Container.styled';
import { ItemCard, DescriptionCard } from '../components/UI/Card.styled';
import { CtaButton } from '../components/UI/Button.styled';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const gridSettings = {
  cols: '1fr',
  rows: 'auto',
  gap: '3rem',
};

const useRetrieve = (retrieveID) => {
  const [itemsExist, setItemsExist] = useState(false);
  const currentItems = useSelector((state) => state.data.products);

  useEffect(() => {
    if (currentItems.length > 1) {
      setItemsExist(true);
    }
  }, [currentItems]);

  const filteredItems = retrieveID
    ? currentItems.filter((item) => item.category === retrieveID)
    : currentItems;

  const ItemsComponent = () => {
    return (
      <StyledSection lassName="products" as="ul" gridSettings={gridSettings}>
        {filteredItems.map((item) => {
          return (
            <ItemCard as="li" key={item.id} p="1rem">
              <div>
                <img src={item.image} alt={`${item.title} visual placeholder`} />
              </div>
              <DescriptionCard>
                <h4>{item.title}</h4>
                <p>${item.price}</p>
                <CtaButton>Add to Cart</CtaButton>
              </DescriptionCard>
            </ItemCard>
          );
        })}
      </StyledSection>
    );
  };

  return { status: itemsExist, ItemsComponent, LoadingSpinner };
};

export default useRetrieve;
