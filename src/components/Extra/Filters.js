import StyledFilters from './Filters.styled';
import Checkbox from '../UI/Checkbox/Checkbox';

const Filters = () => {
  return (
    <>
      <StyledFilters>
        <h3>By Category</h3>
        <Checkbox>Men</Checkbox>
        <Checkbox>Women</Checkbox>
        <Checkbox>Jewelry</Checkbox>
        <Checkbox>Electronics</Checkbox>
        <h3>By Price</h3>
        <label>Price</label>
        <input type="range" min="20" max="1000" defaultValue="0" />
        <button>Search</button>
      </StyledFilters>
    </>
  );
};

export default Filters;
