import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// 直接在 index里面解构这些，因为index 已经export * from 这些文件了
import { ProductProvider, ProductDetailProvider } from "./state-hooks/index";
// import { ProductDetailProvider } from "./state-hooks/productDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductDetailProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </ProductDetailProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
