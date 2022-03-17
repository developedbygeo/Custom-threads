import { useDispatch } from 'react-redux';
import { productActions } from '../../features/productSlice';
import useLookupFilter from '../../hooks/useLookupFilter';

import StyledFilters from './Filters.styled';
import { CtaButton } from '../UI/Button.styled';
import Checkbox from '../UI/Checkbox/Checkbox';
import CustomSlider from '../UI/Slider.styled';

import { getFormData } from '../shared/utils';

const Filters = () => {
  const dispatch = useDispatch();
  const [menActive, menFilterHandler] = useLookupFilter("men's clothing");
  const [womenActive, womenFilterHandler] = useLookupFilter("women's clothing");
  const [jewelryActive, jewelryFilterHandler] = useLookupFilter('jewelery');
  const [electroActive, electroFilterHandler] = useLookupFilter('electronics');
  const [price, changePriceHandler] = useLookupFilter(1000);

  const submitFiltersHandler = (e) => {
    e.preventDefault();
    const filters = getFormData(
      {
        status: menActive,
        id: "men's clothing",
      },
      { status: womenActive, id: "women's clothing" },
      { status: jewelryActive, id: 'jewelery' },
      { status: electroActive, id: 'electronics' }
    );
    dispatch(productActions.filterByCategory({ filters, price }));
  };

  return (
    <>
      <StyledFilters onSubmit={submitFiltersHandler}>
        <h3>By Category</h3>
        <Checkbox value={menActive} onValueChange={menFilterHandler}>
          Men
        </Checkbox>
        <Checkbox value={womenActive} onValueChange={womenFilterHandler}>
          Women
        </Checkbox>
        <Checkbox value={jewelryActive} onValueChange={jewelryFilterHandler}>
          Jewelry
        </Checkbox>
        <Checkbox value={electroActive} onValueChange={electroFilterHandler}>
          Electronics
        </Checkbox>

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
