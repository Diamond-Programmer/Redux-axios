import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducers } from "./rootReducer";

export const store = createStore(rootReducers, applyMiddleware(thunk,logger));
