import { useStaticQuery , graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {Button} from './Button'
// import {ImLocation} from 'react-icons/im'
import {BiDetail}  from 'react-icons/bi'
import {FcInfo,FcRating} from 'react-icons/fc'
import './Products.css'
const Products = ({heading}) => {
    const data = useStaticQuery(graphql`
    query Productsquery{
      allProductsJson {
   
        edges {
          node {
            alt
            button
            name
            url
            info
            img {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
         }
    `)
    
    function GetProducts(data){
        const ProductsArray = [];
        console.log(data);  
      //   const  getInfoModal = (value) =>{
     
      //  alert(value);
      
      // }
        data.allProductsJson.edges.forEach((item,index) => {
            console.log(item);
            ProductsArray.push(
                
                 <ProductCard key = {index} >
                     <ProductCardInner>
                       <ProductcardFront>
                        <ProductImg src={item.node.img.childImageSharp.fluid.src}
                         title="Soft Touch"
                         alt={item.node.alt}
                         fluid = {item.node.img.childImageSharp.fluid}/>    
                                    
                       <ProductsInfo>
                       <TextWrap>
                       <ProductTitle>{item.node.name}</ProductTitle>
                       </TextWrap>  

                        </ProductsInfo>
                       </ProductcardFront>
                       <ProductcardBack>
                       <ProductTitle2>{item.node.name}</ProductTitle2>
                       <ProductDescription>
                         {item.node.info}
                       </ProductDescription>
                       <ProductsInfo>
                       <Button  className="glow-on-hover"  primary= "true" round = "true" href={item.node.url} target="_blank" css={` position : absolute; margin: 0; top: 90%; -ms-transform: translateY(-50%); transform: translateY(-50%); font-size: 16px; text-align: center;  `}   >  {item.node.button} </Button>
                       </ProductsInfo>                    
                       </ProductcardBack>
                     </ProductCardInner>
                     
                 
                 </ProductCard>
                 
            )
        })
        console.log(ProductsArray);
        return ProductsArray;
    }
    return ( 
        <ProductsContainer id="products"> 
          <ProductsHeading>{heading}</ProductsHeading>
          <ProductWrapper>{GetProducts(data)}</ProductWrapper>
        </ProductsContainer>
    )
}

export default Products


const ProductsContainer = styled.div`
min-height : 100vh;
color: #fff;
padding : 3rem calc((100vw - 1600px) / 2);
`;
const ProductsHeading = styled.div`
font-size : clamp(1.2rem, 5vw, 3rem);
text-align : center;
margin-bottom: 5rem;
color : #000;
font-family : 'Poppins';
`;

const ProductWrapper = styled.div`
display : grid ;
grid-template-columns : repeat(4 , 1fr);
grid-gap : 20px;
justify-contents : center;
padding : 0 2rem;

@media screen and (max-width: 1200px) {
  grid-template-columns :  1fr 1fr;
}

@media screen and (max-width: 868px) {
  grid-template-columns :  1fr;
}

`;

const ProductCard = styled.div`
   perspective: 1000px;
   background-color: transparent;
 
`;
const ProductCardInner = styled.div`
  cursor: pointer;
    line-height : 2;
    width : 100%;
    height: 400px;
    position : relative;
    border-radius : 10px;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    
    &:hover {
      transform: scale(1.05);
      transform: rotateY(180deg);

    }
`;
const ProductcardFront = styled.div`
    position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  cursor: pointer;
`;
const ProductcardBack = styled.div`
    position: absolute;
    cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius : 10px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: rgb(31,1,1);
background: linear-gradient(90deg, rgba(31,1,1,1) 0%, rgba(102,102,102,1) 0%, rgba(131,16,115,1) 100%);
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
`;


const ProductImg = styled(Img)`
height : 100%;
max-width : 100%;
position : absolute;
border-radius : 10px;
transition: transform .2s;
filter : brightness(50%);
transition : 0.4s cubic-bezier(0.075,0.82,0.165,1);

&:hover {
 
  filter : brightness(80%);
   
}
`;

const ProductsInfo = styled.div`
display : flex;
flex-direction : column;
justify-content: center;
align-items: center;
padding : 0 2rem;



@media screen and  (max-width : 280px){
  padding : 0 1rem;
}


`;
const TextWrap = styled.div`
 display : flex;
 align-items : center;
 position : absolute;
 top : 180px;
 flex-direction : column;
`;
const ProductTitle = styled.div`
font-size : 1.3rem;
margin-left : 0.5rem;
color: #ffffff;
font-family : 'Poppins';
font-weight : 500; 
text-align: center;
text-transform : capitalize;
&:hover {
 
  color: #00000;
  
}

`;
const ProductTitle2 = styled.div`
font-size : 1.3rem;
margin-left : 0.5rem;
color: #ec268f;
font-family : 'Poppins';
font-weight : 700; 
text-align: center;
text-transform : capitalize;

`;

const ProductDescription = styled.div`
font-size : 1.4rem;
margin-left : 0.5rem;
color: #ffffff;
font-family : 'Poppins';
font-weight : 500; 
text-align: center;
align-items : center;
justify-content : center;
`;


