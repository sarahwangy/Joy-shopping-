
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


export default function ProductComponent(props) {
    return (

        < div style={{ margin: "0 auto", padding: "38px 0 0", width: "1155px", height: "2044px", display: "flex", flexDirection: "row", flexWrap: "wrap", boxSizing: "border-box" }}>

            {
                props.products.map((product) => {
                    return (
                        <Link to={`/detail/${product.id}`}>
                            <ListComponentWrapper key={product.id}>
                                {/* <div style={{ boxSizing: "border-box", cursor: "pointer", lineHeight: "20px", margin: "12px 7px", width: "300px", height: "430px", display: "block", border: "1px solid lightgray", borderRadius: "10px" }} key={product.id}> */}
                                <div style={{ height: "373px", widht: "260px", margin: "12px 7px", background: "#ffffff" }}>
                                    {/* <div style={{ border: "1px solid lightgray", margin: "15px", width: "288px" }}> */}
                                    <div style={{ width: "205px", margin: "0px 27px", height: "250px", padding: "20px", background: "#ffffff" }}>
                                        <img style={{ height: "210px", width: "165px" }} src={product.image} alt={product.title}
                                        />
                                    </div>
                                    <div >
                                        <ListTitle>{product.title}</ListTitle>

                                        {/* <div style={{ height: "48px", overflow: "hidden", marginBottom: "5px" }}> {product.title}</div> */}
                                        <div style={{ margin: "0 0 5px", color: "#333333", width: "232px", height: "20px", fontSize: "18px", color: "#333", fontWeight: "600" }}> $ {product.price}</div>
                                        <div style={{ font: "14px", color: "#00000066", width: "232px", height: "20px" }} >   {product.category}</div>
                                    </div>

                                    {/* </div> */}
                                </div>
                                {/* </div> */}
                            </ListComponentWrapper >
                        </Link>
                    )
                })
            }
        </div >
    )
}



const ListTitle = styled.div`
  height: 58px;
  width: 232px;
  overflow: hidden; 
  margin-bottom: 15px;
  color:#000000D9;
  fontsize:18px;
  margin: -3.8px 0 5px;
  font-weight:600;



`;

const ListComponentWrapper = styled.div`
     box-sizing: border-box;
    cursor: pointer;
    line-height: 20px;
     margin: 12px 7px;
     width: 300px;
    height: 430px;
     display: block;
     border: 1px solid lightgray; 
    border-radius: 10px;
    :hover {
        box-shadow:  5px 5px 5px 5px gray;
         transition: all .5s ease-in-out;
    }
`;