
import React, { Component, useEffect } from 'react'
import ProductComponent from "../../components/productComponents"
// import { GET_LIST_DATA } from '../../../redux/constants/index'
import { useProductState } from '../../state-hooks/produtList'


 export default function ProductsList () {

     const {productState} = useProductState()
    const {products} = productState;
   const {productActions} = useProductState()
    // const {getListData} = productActions;


    useEffect(() => {
       
          productActions();
        
    }, []);

     
        if (products.length <= 0) {
            return;
        }

        return (

            <div style={{ margin: "0 auto", marginTop: "80px" }}>
                <ProductComponent products={products} />
            </div>
        )
    }






