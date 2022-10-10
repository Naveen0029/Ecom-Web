import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./constant";
export const cartData = (data=[],action) =>{
    console.warn('reducer me',action.data);
    switch(action.type){
        case ADD_TO_CART:
            console.warn('ADD TO_CART CONDITION',action)
            return [
                ...data,
                action.data
            ]
        case REMOVE_TO_CART:
            console.warn('REMOVE CONDITION',action);
            const newData = data.filter((val)=>val.id!==action.data);
            // // data.length = data.length?data.length-1:0;
            return [...newData];
        case EMPTY_CART:
            return [];
        default:
            return data;    
    }
}