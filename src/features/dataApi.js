import { productActions } from './productSlice';
import { uiActions } from './uiSlice';

export const fetchDataAPI = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      let data;
      if (!localStorage.getItem('ecommerceDevGeoData')) {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) {
          throw new Error('Failed to retrieve data');
        }
        data = await res.json();
        localStorage.setItem('ecommerceDevGeoData', JSON.stringify(data));
      } else {
        const dataLS = localStorage.getItem('ecommerceDevGeoData');
        data = JSON.parse(dataLS);
      }
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
  };
};
