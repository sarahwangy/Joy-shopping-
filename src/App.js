
import { Provider } from 'react-redux'
import store from './redux/store'
import React, { Component, lazy, Suspense } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header';


// 没有后端API情况下，又打算部署一个GitHub pages 页面，那么可以用个.js 文件写JSON 文件，或者是自动读取 JSON file， 不用aixos 呼叫JSON API了暂时
// 直接import JSON file之后，可以自动 获取 JSON 里面的内容
// 如果需要特定ID，那么可以 console.log(TestConfig[ID]);
// import TestConfig from './config/test.json'
// console.log(TestConfig);

const ProductDetail = lazy(() => import('./pages/proDetail/index'))
const ProductsList = lazy(() => import('./pages/proList/index'))



function App() {
  return (

    <div>
      Test Page
      <Suspense fallback={<h1>Loading.....</h1>}>
        <Provider store={store}>
          <BrowserRouter>
            <Header href='/' />
            <Routes>
              <Route path="/" element={<ProductsList />} />
              <Route path="/detail/:id" element={<ProductDetail />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  )
}

export default App;
