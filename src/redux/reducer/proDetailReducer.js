import { GET_DETAIL, REMOVE_DETAIL } from "../constants";


const initState = {
    // 如果设置为null，不是object，那么 需要 // if (!product) {
    //     return null;}加 过滤
    // 可以设置成{ }.,如果是空object，可以在if (Object.keys(product) <= 0) {
    // return null;} 过滤掉 -------------》

    // product: null
    product: {}

};


const proDetailReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_DETAIL:
            return { ...state, product: action.data }
        case REMOVE_DETAIL:
            return { product: {} }
        default:
            return state;
    }

}
export default proDetailReducer