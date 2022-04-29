import { useReducer, useContext, createContext } from "react";
import { GET_LIST_DATA } from "../constants/index";
import { productList } from "../data";

// action
const getListAction = (data) => ({ type: GET_LIST_DATA, data });

// 若给返回的函数一个新名字 getListDataReturn ，并且新名字 return后的格式是 { getListDataReturn}, 这样在页面是
// 可以解构出来getListDataReturn 这个函数 用的。 否则只能用product action （ ）
export const getListData = (dispatch) => {
  const getListDataReturn = () => {
    const result = productList;
    dispatch(getListAction(result));
  };
  return { getListDataReturn };
};

//  没有返回的object，后期 productdaction 不能在解构 getlistdata， 因为productaction
// 等于 getlistdata 返回的函数，这个函数并没有起新名字，也没有返回 「{ object}，所以没办法解析。
// export const getListData = (dispatch) => {
//   return () => {
//     const result = productList;
//     dispatch(getListAction(result));
//   };
// };

//  use reducer
const initialState = { products: [] };

const productReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case GET_LIST_DATA:
      console.log("GET_LIST_DATA", action);
      return { ...state, products: action.data };

    default:
      return state;
  }
};

// use context
export const ProductContext = createContext(initialState);

export const useProductState = () => {
  return useContext(ProductContext);
};

//  use reducer
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const productActions = getListData(dispatch);
  return (
    <ProductContext.Provider value={{ productState: state, productActions }}>
      {children}
    </ProductContext.Provider>
  );
};
