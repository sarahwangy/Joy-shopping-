import styled from 'styled-components'




export const ListComponentWrapper = styled.div`
     box-sizing: border-box;
    cursor: pointer;
    line-height: 20px;
     margin: -1px -1px;
    padding:10px 50px;
    height: 400px;
     display: block;
     border: 1px solid lightgray; 
    border-radius: 10px;
    :hover {
        box-shadow:  5px 5px 5px 5px gray;
         transition: all .5s ease-in-out;
    }
`;

export const Content = styled.div`
    height:373px, 
    widht: 260px,
     margin: 12px 7px,
      background: #ffffff

`;


export const ImageWrapper = styled.div`
    width: 205px,
    margin: 0px 15px, 
    height: 250px, 
    padding: 10px,
    background: #ffffff
`;


export const Image = styled.img`
   height: 210px;
    width: 175px;
    margin: 20px;

`;

export const BottomWrapper = styled.div`
    border-top: 1px solid lightgray;
     padding-top: 15px;
    

`;

export const ListTitle = styled.div`
    text-align: left;
    max-height: 58px;
    max-width: 232px;
    overflow: hidden; 
    margin-bottom: 15px;
    color:#000000D9;
    font-size:20px;
    margin: -3.8px 0 5px;
    font-weight:600;
    line-height: 58px;
`;

export const Price = styled.div`
    margin: 0 0 5px; 
    color: #333333;
    width: 232px;
     height: 20px;
      font-size: 20px;
       color: #333;
        font-weight: 600 ;


`;

export const Category = styled.div`
    font: 14px;
    color: #00000066;
     width: 232px;
     height: 20px;

`;

