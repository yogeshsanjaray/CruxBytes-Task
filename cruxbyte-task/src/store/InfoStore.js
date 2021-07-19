import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import InfoReducer from "../reducer/InfoReducer";

const store = createStore(
	InfoReducer,
	composeWithDevTools(applyMiddleware(logger))
);
export default store;
