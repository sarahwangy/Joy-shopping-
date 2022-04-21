
import axios from "axios"
import React, { Component } from 'react'
import styled from 'styled-components'
import ProductComponent from "../components/productComponent"


// 1. 先class 联系，  3. function 联系， -==》 redux 练习  4. use state， usereduce 联系 



export default class ProductsList extends Component {
    //    redux 写法
    // 1. 获取 axios API 数据， action里，type，data
    //  2. reduce 里面 init state
    // 0： map compOne


    // {
    //
    // }

    // 设置一个空 列表 数组，，那后续如果判断是否有数据，没有的话需要重新加载axios调取数据
    // 如果设置的很细，ID，title， image之类的， 判断是列表为空，比较麻烦一点
    // 设置的不细，直接一个大的 products 【 】，在判断列表是否为空的时候，看length就可以判断出来，方便
    state = {
        products: []
    }

    componentDidMount() {

        // axios.get('https://fakestoreapi.com/products')
        // api 呼叫比较慢，可以测试后端接口可以呼叫成功的情况下，自己写固定的JSON api, 这样方便节约时间写前端，等样式写好了，再把固定JSON 换成后端API 接口
        axios.get('/api/producetList.json')
            .then((res) => {

                console.log(res.data)
                // console.log(res.data[0].title)

                const result = res.data

                // result ， res。data 是个 列表，所以暂时没必要用result map ID，title之类的，比较麻烦
                // 即使map，也不能在state.id 直接加，需要建立一个空 【】， 把map后的ID，push在product 【】 里
                // 要不push的话，只会出现最后一个 map的值，前一个被后一个代替了

                // let products = []
                // const { id, image, title, price, category } = this.state;
                // result.map((resObj) => {
                //     products.push({
                //         id: resObj.id,
                //         image: resObj.image,
                //         title: resObj.title,
                //         price: resObj.price,
                //         category: resObj.category
                //     })

                // })

                //  这里直接把 数组 result 【 】， 替换成空 state product 【 】， 同样的 【】 结构
                this.setState({
                    products: result
                })
            }).catch((error) => {
                console.log(error)
            })
    }


    render() {
        console.log("state", this.state)

        // console.log("state", JSON.stringify(this.state))
        return (

            <ProductComponent products={this.state.products} />
        )
    }
}

