import { combineReducers } from "redux";
import productReducer from "./productReducer";
import orderReducer from './orderReducer'
const rootReducer = combineReducers ({
    productReducer,
    orderReducer
})

export default rootReducer