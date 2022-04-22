import { combineReducers } from "redux";


import proListReducer from './reducer/proListReducer'
import proDetailReducer from './reducer/proDetailReducer'

export default combineReducers({
    proList: proListReducer

})
