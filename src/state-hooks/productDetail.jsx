import { GET_DETAIL, REMOVE_DETAIL } from "../constants";
import { useReducer, useContext, createContext } from "react";
import ProductList from "../config/productList.json";

// import ProductDetail from '../pages/proDetail'

//  actions

export const removeDetail = () => ({ type: REMOVE_DETAIL });
export const getDetail = (data) => ({ type: GET_DETAIL, data });

export const getDetailDataAction = (dispatch) => {
  return (id) => {
    const findContent = ProductList[id];
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

  const productDetailActions = getDetailDataAction(dispatch);
  return (
    <ProductDetailContext.Provider
      value={{ productDetailState: state, productDetailActions }}
    >
      {children}
    </ProductDetailContext.Provider>
  );
};
