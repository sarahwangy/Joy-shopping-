
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
    ListComponentWrapper, Content, BottomWrapper, Price, ListTitle,
    ImageWrapper, Category, Image
} from './style'

export default function ProductComponent(props) {
    console.log(props, "props com")
    // console.log(JSON.stringify(props), "json string props")
    return (


        < div style={{ margin: "0 auto", display: "flex", justifyContent: "center", flexDirection: "row", flexWrap: "wrap", boxSizing: "border-box" }}>
            {
                props.products.map((product) => {
                    return (
                        // link后 里面的子 div 文字变成了 a 标签 带下划线，用style={{ textDecoration: 'none' }} 可以去除下划线
                        // https://stackoverflow.com/questions/37669391/how-to-get-rid-of-underline-for-link-component-of-react-router

                        <Link to={`/detail/${product.id}`} key={product.id} style={{ textDecoration: 'none', margin: "10px 20px" }}>
                            <ListComponentWrapper>
                                <Content>
                                    <ImageWrapper>

                                        <Image src={product.image} alt={product.title} />
                                    </ImageWrapper>
                                    <BottomWrapper>
                                        <ListTitle>{product.title}</ListTitle>
                                        <Price> $ {product.price}</Price>
                                        <Category> {product.category}</Category>
                                    </BottomWrapper>

                                </Content>
                            </ListComponentWrapper >
                        </Link>
                    )
                })
            }
        </div >
    )
}



