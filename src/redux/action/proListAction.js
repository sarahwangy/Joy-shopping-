// import axios from "axios"
// 不用axios 呼叫API了，直接读取 JSON file的内容， import JSON

import { GET_LIST_DATA } from "../constants"
import productList from '../../config/productList.json'

const getListAction = (data) => ({ type: GET_LIST_DATA, data })


export const getListData = () => {
    return (dispatch) => {
        // axios.get(`/api/producetList.json`)
        //     .then((res) => {
        //         console.log("res.data")
        //         console.log(res.data)
        //         const result = res.data;

        // 可以直接读取出来JSON 的内容。。，当做参数传给action
        console.log("productList", productList)
        const result = productList
        dispatch(getListAction(result))


        //         }).catch((error) => {
        //             console.log(error)
        //         })

    }


}
