import { PRODUCT_LIST,SET_PRODUCT_LIST,SEARCH_PRODUCT } from "./constant"
export const productList = ()=>{
    //console.warn("product action is called");
    return {
        type:PRODUCT_LIST,
    }
}

export const searchProduct = (query) =>{
    return {
        type:SEARCH_PRODUCT,
        query
    }
}
