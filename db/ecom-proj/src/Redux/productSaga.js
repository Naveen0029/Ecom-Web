import {takeEvery,put} from 'redux-saga/effects';
import apiUrl from '../config';
import { PRODUCT_LIST,SEARCH_PRODUCT,SET_PRODUCT_LIST } from "./constant";

function* getProducts(){
    //console.warn("call api here");
    let data = yield fetch(`${apiUrl}/v1/product`);
    data = yield data.json();
    yield put({type:SET_PRODUCT_LIST,data:data});
    //console.warn('saga after data set in productReducer is called',data);
}

function* searchProducts(data){
    let result = yield fetch(`${apiUrl}/v1/search?q=${data.query}`);
    result = yield result.json();
    //console.log('thisisresult',result);
    yield put({type:SET_PRODUCT_LIST,data:result});
}

function* productSaga(){
    yield takeEvery(PRODUCT_LIST,getProducts);
    yield takeEvery(SEARCH_PRODUCT,searchProducts); 
}

export default productSaga;