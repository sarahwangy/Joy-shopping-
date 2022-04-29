import { Routes, Route, useParams } from "react-router-dom";
import React, { useEffect, useReducer, useState } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import {
  DetailCart,
  DetailPrice,
  DetailCategory,
  DetailTitle,
  DetailDesc,
} from "./style";
import { getDetail, removeDetail } from "../../state-hooks/productDetail";

import { useProductDetailState } from "../../state-hooks/productDetail";

export default function ProductDetail() {
  let params = useParams();

  // use context
  const { productDetailState, productDetailActions } = useProductDetailState();
  const { product } = productDetailState;

  useEffect(() => {
    if (params.id && params.id !== "") {
      // 函数里面有 ID 参数，所以 可以直接用productDetailAction （ID）接收参数
      // 因为productDetailActions是getDetailDataAction 返回的函数。。。
      productDetailActions(params.id);
    }
    // return () => {
    //     dispatch(removeDetail());
    // }
  }, [params.id]);

  if (Object.keys(product).length <= 0) {
    return null;
  }

  return (
    <div
      className="ui grid container"
      style={{
        marginTop: "45px",
      }}
    >
      <div className="ui placeholder segment container">
        <div className="ui two column very relaxed stackable grid">
          <div className="column">
            <div className="ui form">
              <div className="ui  ">
                <img
                  src={product.image}
                  style={{ display: "block", width: "100%", margin: "5px" }}
                />
              </div>
            </div>
          </div>
          <div className=" aligned column">
            <DetailTitle> {product.title}</DetailTitle>
            <DetailPrice> $ {product.price} </DetailPrice>
            <DetailCategory>{product.category}</DetailCategory>
            <DetailDesc>{product.description}</DetailDesc>
            <DetailCart>
              <div className="hidden content">
                <BsFillCartCheckFill size={25} />
              </div>
              <div className="visible">Add To Cart</div>
            </DetailCart>
          </div>
        </div>
        <div className="ui vertical divider">AND</div>
      </div>
    </div>
  );
}
