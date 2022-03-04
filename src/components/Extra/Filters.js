import { useState } from 'react';

import StyledFilters from './Filters.styled';
import { CtaButton } from '../UI/Button.styled';
import Checkbox from '../UI/Checkbox/Checkbox';
import CustomSlider from '../UI/Slider.styled';

const Filters = () => {
  const [price, setPrice] = useState(1000);

  const changePriceHandler = (e) => {
    setPrice(e.target.value);
  };

  return (
    <>
      <StyledFilters>
        <h3>By Category</h3>
        <Checkbox>Men</Checkbox>
        <Checkbox>Women</Checkbox>
        <Checkbox>Jewelry</Checkbox>
        <Checkbox>Electronics</Checkbox>
        <h3>By Price</h3>
        <div className="price">
          <label>Price:</label>
          <p className="selected-price">$ {price}</p>
        </div>
        <CustomSlider
          onChange={changePriceHandler}
          type="range"
          min="100"
          max="1000"
          step="100"
          value={price}
        />
        <CtaButton type="submit" p="1.25rem 4rem" alignSelf="center">
          Search
        </CtaButton>
      </StyledFilters>
    </>
  );
};

export default Filters;
