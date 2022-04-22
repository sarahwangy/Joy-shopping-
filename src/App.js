
// import { Provider } from 'react-redux'
import React, { Component, lazy, Suspense } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header';

const ProductDetail = lazy(() => import('./pages/detailList/index'))
const ProductsList = lazy(() => import('./pages/homeList/index'))



function App() {
  return (
    <Suspense fallback={<h1>Loading.....</h1>}>

      {/* <Provider store={store}> */}
      <BrowserRouter>
        <Header href='/' />
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
      {/* </Provider> */}
    </Suspense>
  )
}

export default App;
