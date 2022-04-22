

import { GET_DETAIL, REMOVE_DETAIL } from '../constants'

export const removeDetail = () => ({ type: REMOVE_DETAIL })
export const getDetail = (data) => ({ type: GET_DETAIL, data })


