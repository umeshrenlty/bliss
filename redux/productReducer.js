import {act} from 'react-test-renderer';
import {SET_PRODUCT_LIST} from './constant';

export const productData = (data = [], action) => {
  console.log(action.data, 5678900987654, action);
  const a = Array.isArray(action.data) ? action.data : [action.data];
  console.log(a, 'array');
  switch (action.type) {
    case SET_PRODUCT_LIST:
      // console.log('PRODUCT_LIST condition ', action);
      return [...a];
    default:
      return data;
  }
};
