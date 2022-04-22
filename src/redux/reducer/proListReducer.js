
import { GET_LIST_DATA } from '../constants/index'


const initState = { products: [] }


export default (state = initState, action) => {

    const { type } = action;
    switch (type) {
        case GET_LIST_DATA:
            console.log("GET_LIST_DATA", action)
            return { ...state, products: action.data }

        default:
            return state;
    }
}