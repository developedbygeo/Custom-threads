import { useDispatch } from 'react-redux';
import { productActions } from '../../features/productSlice';
import { useState, useRef } from 'react';

import StyledFilters from './Filters.styled';
import { CtaButton } from '../UI/Button.styled';
import Checkbox from '../UI/Checkbox/Checkbox';
import CustomSlider from '../UI/Slider.styled';

import { getFormData } from '../shared/utils';

const Filters = () => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(1000);
  const menRef = useRef();
  const womenRef = useRef();
  const jewelryRef = useRef();
  const electroRef = useRef();

  const changePriceHandler = (e) => {
    setPrice(e.target.value);
  };

  const submitFiltersHandler = (e) => {
    e.preventDefault();
    const filters = getFormData(
      { status: menRef.current.isChecked(), id: "men's clothing" },
      { status: womenRef.current.isChecked(), id: "women's clothing" },
      { status: jewelryRef.current.isChecked(), id: 'jewelery' },
      { status: electroRef.current.isChecked(), id: 'electronics' }
    );
    dispatch(productActions.filterByCategory({ filters, price }));
  };

  return (
    <>
      <StyledFilters onSubmit={submitFiltersHandler}>
        <h3>By Category</h3>
        <Checkbox ref={menRef}>Men</Checkbox>
        <Checkbox ref={womenRef}>Women</Checkbox>
        <Checkbox ref={jewelryRef}>Jewelry</Checkbox>
        <Checkbox ref={electroRef}>Electronics</Checkbox>
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
