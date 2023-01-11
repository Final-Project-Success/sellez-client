import { combineReducers } from "redux";
import productReducer from "./productReducer";
import orderReducer from './orderReducer'
import loadingReducer from './loading'
const rootReducer = combineReducers ({
    productReducer,
    orderReducer,
    loadingReducer
})

export default rootReducer