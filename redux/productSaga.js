import {takeEvery, put} from 'redux-saga/effects';
import {PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST} from './constant';

function* getProducts() {
  let data = yield fetch('http://192.168.1.27:4000/products');
  data = yield data.json();
  console.log('action is called', data);
  yield put({type: SET_PRODUCT_LIST, data});
}

function* searchProdcuts(data) {
  console.log('action is called', data.query, 'search');
  let result = yield fetch(`http://192.168.1.27:4000/products?q=${data.query}`);
  result = yield result.json();
  console.log(result, 'result of search');

  yield put({type: SET_PRODUCT_LIST, data: result});
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProdcuts);
}

export default productSaga;
