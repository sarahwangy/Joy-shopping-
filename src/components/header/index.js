import React from 'react'
import styled from 'styled-components'

export default function Header() {
    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <h2 style={{ padding: "10px", fontSize: "25px" }}> Joy&Shop</h2>
            </div>
        </div>)

    // return (
    //     <HeaderWrapper>
    //         <HeaderContainer>
    //             <Head >
    //                 Joy&Shop
    //             </Head>
    //         </HeaderContainer>
    //     </HeaderWrapper>
    // )
}

// const HeaderWrapper = styled.div`
//     background: #ffffff;
//     padding-top: 15px;
//     height:60px;
//     width: 100%;
//     border-bottom: 1px solid gray;
//     box-shadow:  0px 0 0 2px lightgray;
//     position: fixed;
// `;


// const HeaderContainer = styled.div`
//     height:43px;
//     margin: 0 155px;
// `;


// const Head = styled.h2`
//     color:#000000DE;
//     font:24px;
//     width:105px;
//     height:43px
// `;