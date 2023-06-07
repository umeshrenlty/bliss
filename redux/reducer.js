import {ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART} from './constant';

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log('ADD_TO_CART condition ', action.data.item.item);
      return [action.data, ...data];

    case REMOVE_FROM_CART:
      console.log(action.data);
      // console.log('REMOVE_FROM_CART condition ', action.data);
      const remainingItems = data.filter(
        item => item.item.item.id !== action.data,
      );
      return [...remainingItems];

    case EMPTY_CART:
      // console.log('EMPTY CART condition ', action);
      data = [];
      return [...data];
    default:
      return data;
  }
};
