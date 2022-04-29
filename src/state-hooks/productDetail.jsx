import { GET_DETAIL, REMOVE_DETAIL } from "../constants";
import { useReducer, useContext, createContext } from "react";
import { productList } from "../data";
// 不用 json fake API，用 data js 代替，这样方便部署 deploy
// import ProductsList from "../config/productList.json";

//  actions

export const removeDetail = () => ({ type: REMOVE_DETAIL });
export const getDetail = (data) => ({ type: GET_DETAIL, data });

export const getDetailDataAction = (dispatch) => {
  return (id) => {
    const findContent = productList[id];
    dispatch(getDetail(findContent));
  };
};

// reducer

const initialState = {
  product: {},
};

const proDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL:
      return { ...state, product: action.data };
    case REMOVE_DETAIL:
      return { product: {} };
    default:
      return state;
  }
};

// use context
export const ProductDetailContext = createContext(initialState);

export const useProductDetailState = () => {
  return useContext(ProductDetailContext);
};

//  use reducer
export const ProductDetailProvider = ({ children }) => {
  const [state, dispatch] = useReducer(proDetailReducer, initialState);

  // productDetailActions是getDetailDataAction 返回的函数。。。
  const productDetailActions = getDetailDataAction(dispatch);
  return (
    <ProductDetailContext.Provider
      value={{ productDetailState: state, productDetailActions }}
    >
      {children}
    </ProductDetailContext.Provider>
  );
};
