import React, { Component, lazy, Suspense } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";

const ProductDetail = lazy(() => import("./pages/proDetail/index"));
const ProductsList = lazy(() => import("./pages/proList/index"));

function App() {
  return (
    <div>
      Test Page
      <Suspense fallback={<h1>Loading.....</h1>}>
        <BrowserRouter>
          <Header href="/" />
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
