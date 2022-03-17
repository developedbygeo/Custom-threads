import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { productActions } from '../../features/productSlice';

import Drawer from '../UI/Drawer/Drawer';
import Filters from './Filters';
import { StyledUtilityBtn } from '../UI/Button.styled';
import { Card, ActionWrapper } from '../UI/Card.styled';
import { Filter } from '@styled-icons/fa-solid/Filter';
import { CaretUpFill } from '@styled-icons/bootstrap/CaretUpFill';
import { CaretDownFill } from '@styled-icons/bootstrap/CaretDownFill';

const wrapperSettings = {
  justify: 'space-between',
  align: 'center',
  dir: 'row',
};
const singleBtnWrapper = {
  justify: 'flex-end',
  align: 'center',
  dir: 'row',
};

export const Controls = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const filteredItems = useSelector((state) => state.data.filtered);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = new URLSearchParams(location.search);
  const sortParams = queryParams.get('sort');
  const isSortingAsc = sortParams === 'asc';
  const pathname = location.pathname.replace('/', '');
  const isHome = pathname === 'home';

  const filtersActive = filteredItems.length < 19;

  const sortingIcon = sortParams && (isSortingAsc ? <CaretDownFill /> : <CaretUpFill />);

  const sortButtonText = sortParams ? 'Sort' : 'Sort by price';

  const menuToggleHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const changeSortingHandler = () => {
    setSearchParams(`?sort=${isSortingAsc ? 'desc' : 'asc'}`);
  };

  useEffect(() => {
    if (sortParams) {
      dispatch(
        productActions.sortByPrice({
          sort: searchParams.get('sort'),
          slice: pathname === 'home' ? 'filtered' : 'products',
        })
      );
    }
  }, [sortParams, dispatch, pathname, searchParams]);

  return (
    <ActionWrapper sticky={isHome} flexSettings={isHome ? wrapperSettings : singleBtnWrapper}>
      {isHome && (
        <Card p="1rem" customMargin="0%">
          <StyledUtilityBtn
            onClick={menuToggleHandler}
            className={`${filtersActive ? 'active' : ''}`}
            title="Filter by category & price"
          >
            <span className="icon">
              <Filter />
            </span>
            <span className="text">{filtersActive ? 'Filters are active' : 'Filters'}</span>
          </StyledUtilityBtn>
        </Card>
      )}
      {menuOpen && (
        <Drawer>
          <Filters />
        </Drawer>
      )}
      <Card sticky p="1rem" customMargin="0%">
        <StyledUtilityBtn
          onClick={changeSortingHandler}
          title={sortParams && `Sort by ${isSortingAsc ? 'descending' : 'ascending'} price`}
        >
          <span className="text">{sortButtonText}</span>
          <span className="icon smallIcon">{sortingIcon}</span>
        </StyledUtilityBtn>
      </Card>
    </ActionWrapper>
  );
};
