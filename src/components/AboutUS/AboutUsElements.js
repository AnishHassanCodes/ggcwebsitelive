import styled from "styled-components"

import {Link as LinkR} from 'react-router-dom'

export const AboutUsContainer = styled.div`
min-height : 100vh;
background: #eebb99;
padding : 5rem calc((100vw - 1500px) / 2);

`

export const AboutUsH1 = styled.h1`
font-size : clamp(1.2rem, 5vw, 3rem);
text-align : center;
margin-bottom: 2rem;
margin-top: 0.5rem;
color : #fff;
font-family : 'Poppins';    

`

export const AboutUsImg = styled.img`
max-width: 100%;
height: auto;
position : relative;
border-radius : 10px;
transition: transform .2s;
transition : 0.4s cubic-bezier(0.075,0.82,0.165,1);
@media  screen and (max-width : 970px){
    width : 50%;
    
}

`;  

export const AboutUsRow = styled.div`
display : flex;
flex-wrap : wrap;

`

export const AboutUsColumn = styled.div`
 width : 60%;
 padding : 0 10px;
 display : flex;
 flex-wrap : wrap;
 @media  screen and (max-width : 1230px){
    width : 50%;
    
}
@media  screen and (max-width : 970px){
    width : 100%;
    
}

`
export const AboutUsColumnS = styled.div`
 width : 20%;
 padding : 0 10px;
 display : flex;
 flex-wrap : wrap;
 @media  screen and (max-width : 1230px){
    width : 25%;
    
}
@media  screen and (max-width : 970px){
    width : 50%;
    
    
}
@media  screen and (max-width : 480px){
    width : 100%;
    
}

`
export const AboutUsP = styled.p`
font-family : 'Poppins';
float: left;
clear: left;
margin-bottom : 15px;
font-size: 16px;
text-transform : capitalize;
color : #ec268f;
text-decoration : none;
font-weight :300;
transition : all 0.3s ease;
text-align: justify;
text-justify: inter-word;

&:hover{
    color : #ffffff;
    padding-left : 10px;
    font-size: 18px;
}

@media  screen and (max-width : 1450px){
    margin-bottom : 10px;
    font-size: 12px;
    &:hover{
    color : #ffffff;
    padding-left : 8px;
    font-size: 14px;
}
}
@media  screen and (max-width : 1130px){
    margin-bottom : 7px;
    font-size: 10px;
    &:hover{
    padding-left : 7px;
    font-size: 12px;
}
}
`

export const AboutUsHeading = styled.h4`
font-size : 18px;
color : #ffffff;
text-transform : capitalize;
margin-bottom : 25px;
font-family : 'Poppins';
font-weight : 700; 


`
export const AboutUsMenu = styled.ul`
list-style : none;
margin-top: 20px;
align-items : center;
justify-content : center;
`
export const AboutUsItemSocial = styled.a`
font-family : 'Poppins';
display : inline-block;
height : 40px;
width  : 40px;
background : rgba(255,255,255,0.2);
margin : 0 10px 10px 0;
text-align : center;
line-height : 45px;
border-radius : 50%;
color : #ffffff;
transition : all 0.3s ease;
margin-left : 50px;

&:hover{
  color: 24262b;
  background : #ec268f;
  transform: scale(1.4);
}

`