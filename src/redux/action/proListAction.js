import axios from "axios"

import { GET_LIST_DATA } from "../constants"

const getListAction = (data) => ({ type: GET_LIST_DATA, data })


export const getListData = () => {
    return (dispatch) => {
        axios.get(`/api/producetList.json`)
            .then((res) => {
                console.log("res.data")
                console.log(res.data)
                const result = res.data;
                dispatch(getListAction(result))


            }).catch((error) => {
                console.log(error)
            })

    }


}
