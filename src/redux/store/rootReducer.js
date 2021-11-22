import { combineReducers } from "redux";
import { getProductReducer } from "../modules/products/getProductReducer";
import { addProductReducer } from './../modules/addProduct/addProductReducer';

export const rootReducers = combineReducers({
  getProduct: getProductReducer,
  addProduct: addProductReducer,
});
