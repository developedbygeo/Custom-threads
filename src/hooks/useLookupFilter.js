import { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productActions } from '../features/productSlice';

const useLookupFilter = (identifier) => {
  const dispatch = useDispatch();
  const isIdentifierString = typeof identifier === 'string';
  const [value, setValue] = useState('');
  const activeFilters = useSelector((state) => state.data.activeFilters);
  const activePrice = useSelector((state) => state.data.activePrice);

  const filterExists = isIdentifierString ? activeFilters.includes(identifier) : activePrice === identifier;

  useEffect(() => {
    if (isIdentifierString) {
      setValue(filterExists);
    } else {
      setValue(activePrice);
    }
  }, [identifier, filterExists, activePrice, isIdentifierString]);

  const changeFilterHandler = useCallback(() => {
    if (isIdentifierString && !filterExists) {
      dispatch(productActions.addFilter(identifier));
    }
    if (isIdentifierString && filterExists) {
      dispatch(productActions.removeFilter(identifier));
    }
  }, [dispatch, identifier, filterExists, isIdentifierString]);

  const changePriceHandler = useCallback(
    (e) => {
      if (typeof identifier === 'number') {
        setValue(+e.target.value);
        dispatch(productActions.setFilterPrice(+e.target.value));
      }
    },
    [dispatch, identifier]
  );

  if (isIdentifierString) {
    return [value, changeFilterHandler];
  }
  return [value, changePriceHandler];
};

export default useLookupFilter;
