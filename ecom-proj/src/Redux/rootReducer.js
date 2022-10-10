import {combineReducers} from 'redux'
import { productData } from './productReducer'
import {cartData} from './reducer'


let rootReducer = combineReducers({
    cartData,
    productData
})

export default rootReducer;