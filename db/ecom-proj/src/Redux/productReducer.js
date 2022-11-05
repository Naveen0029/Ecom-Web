import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [],action)=>{
    switch(action.type){
        case SET_PRODUCT_LIST:
            //console.warn("setting product list",action);
            return action.data.product;    
        default:
            return [];
    }
}