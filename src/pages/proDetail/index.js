import { Routes, Route, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import axios from "axios"
import styled from 'styled-components'
import { BsFillCartCheckFill } from "react-icons/bs";
import { DetailCart, DetailPrice, DetailCategory, DetailTitle, DetailDesc } from "./style";




export default function ProductDetail(p) {
    let params = useParams();
    // const { productId } = params;
    console.log("params:", params)
    console.log("params json:", JSON.stringify(params.id))


    const [product, setProduct] = useState({});


    const getDetailData = (id) => {
        // 这种接收 ID 的呼叫API 方法  axios.get(`/api/producetList.json?id=${id}`)，
        // 要写 json?id=${id}， 而不是json/?id=${id}!!

        axios.get(`/api/producetList.json?id=${id}`)
            .then((res) => {

                console.log("detail res", res.data)

                const result = res.data;
                const findContent = result.find((productObj) => {
                    // console.log(typeof (productObj.id));
                    // console.log(typeof (params.id));

                    //  params.id 和 product ID type 类型不一样，JSON里面是 ”“ string， 自身的是 number
                    // 所以对比的时候，要么 == 俩个等于号（不比较类型， 模糊）， 要么是 === 2个等于号，但是要转换下 string to number类型
                    return productObj.id === parseInt(params.id);
                });

                console.log(findContent);

                if (findContent) {
                    setProduct(findContent)

                }

            }).catch((error) => {
                console.log(error)
            })
    }

    console.log("detail state", product)



    // console.log("findcontent", findContent)


    useEffect(() => {
        if (params.id && params.id !== "") {
            getDetailData(params.id)
        }

    }, [params.id]);




    console.log("detail state", product)

    if (Object.keys(product) <= 0) {
        return null;
    }

    return (
        <div className="ui grid container" style={{
            marginTop: "45px"
        }}>

            <div className="ui placeholder segment container">
                <div className="ui two column very relaxed stackable grid">
                    <div className="column">
                        <div className="ui form">

                            <div className="ui  ">
                                <img src={product.image} style={{ display: "block", width: "100%", margin: "5px" }} />
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
                            <div className="visible">

                                Add To Cart
                            </div>
                        </DetailCart>
                    </div>
                </div>
                <div className="ui vertical divider">
                    AND
                </div>
            </div>
        </div>
    )
    // return (

    //     <DetailWrapper>
    //         <LeftPart >
    //             left {params.id}
    //             <div>
    //                 <div>
    //                     {/* <img src={product.image} alt={product.title} /> */}
    //                 </div>
    //             </div>

    //         </LeftPart>
    //         <DetailDivided>and</DetailDivided>

    //         <RightPart> right
    //             <DetailTitle> title</DetailTitle>
    //             <DetailPrice> price
    //                 <div> spot</div>
    //             </DetailPrice>
    //             <DetailCategory> category</DetailCategory>
    //             <DetailDesc> desc</DetailDesc>
    //             <DetailCart> add to cart</DetailCart>

    //         </RightPart>

    //     </DetailWrapper>
    // )
}

// flex： display :flex, direction: row

