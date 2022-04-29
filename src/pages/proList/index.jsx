import React, { Component, useEffect } from "react";
import ProductComponent from "../../components/productComponents";
// import { GET_LIST_DATA } from '../../../redux/constants/index'
import { useProductState } from "../../state-hooks/produtList";

export default function ProductsList() {
  const { productState } = useProductState();
  const { products } = productState;
  //   解构 action， 因为有返回的函数值 { }, 所以可以直接解构 getListDataReturn
  const { productActions } = useProductState();
  const { getListDataReturn } = productActions;

  useEffect(() => {
    // productActions();
    // 直接呼叫getListDataReturn （ ）用
    getListDataReturn();
  }, []);

  if (products.length <= 0) {
    return;
  }

  return (
    <div style={{ margin: "0 auto", marginTop: "80px" }}>
      <ProductComponent products={products} />
    </div>
  );
}
