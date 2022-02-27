import { productActions } from './productSlice';
import { uiActions } from './uiSlice';

export const fetchDataAPI = () => {
  return async (dispatch) => {
    if (localStorage.getItem('ecommerceDevGeoData') !== null) {
      const dataLS = JSON.parse(localStorage.getItem('ecommerceDevGeoData'));
      dispatch(productActions.addProducts(dataLS));
      return dataLS;
    } else {
      const fetchData = async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) {
          throw new Error('Failed to retrieve data');
        }
        const data = await res.json();
        localStorage.setItem('ecommerceDevGeoData', JSON.stringify(data));
        return data;
      };
      try {
        const dataAPI = await fetchData();
        dispatch(productActions.addProducts(dataAPI));
      } catch (err) {
        uiActions.createNotification({
          status: 'error',
          title: 'Error!',
          message: err.message,
        });
      }
    }
  };
};
