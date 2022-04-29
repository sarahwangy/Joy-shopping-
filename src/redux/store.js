import { createStore, applyMiddleware, compose } from "redux";
import AllReducer from "./index";

import thunk from "redux-thunk";


//  react Dev tools redux extension 的使用 结合compose，要不然不起作用。。。！

const store = createStore(
    AllReducer,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
export default store; 