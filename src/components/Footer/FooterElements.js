import styled from "styled-components"
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
export const Footer = styled.footer`
font-family : 'Poppins';
background : #24262b;
padding : 70px 0;
`

export const FooterContainer = styled.div`
max-width: 1350px;
margin : auto;

`

export const FooterRow = styled.div`
display : flex;
flex-wrap : wrap;

`

export const FooterColumn = styled.div`
 width : 25%;
 padding : 0 22px;

@media  screen and (max-width : 1200px){
    width:  50%;
    margin-bottom : 30px;
    
}
@media  screen and (max-width : 610px){
    width:  100%;
    margin-bottom : 30px;
    
}
`


export const FooterHeading = styled.h4`


font-size : 18px;
color : #ffffff;
text-transform : capitalize;
margin-bottom : 25px;
font-family : 'Poppins';
font-weight : 700; 

${'' /* &:before{
    content: '';
    position: absolute;
    background :#ec268f;
    bottom:  -1050px;
    height: 2px;
    box-sizing :border-box;
    width: 50px;
} */}
`

export const FooterMenu = styled.ul`
list-style : none;

`

export const FooterItemR = styled.a`
font-family : 'Poppins';
float: left;
clear: left;
margin-bottom : 5px;
font-size: 16px;
text-transform : capitalize;
color : #ffffff;
text-decoration : none;
font-weight :300;
color: #bbbbbb;
transition : all 0.3s ease;

&:hover{
    color : #ffffff;
    padding-left : 10px;
}
`

export const FooterItemS = styled(LinkS)`
font-family : 'Poppins';
float: left;
clear: left;
margin-bottom : 5px;
font-size: 16px;
text-transform : capitalize;
color : #ffffff;
text-decoration : none;
font-weight :300;
color: #bbbbbb;
cursor : pointer;
transition : all 0.3s ease;
&:hover{
    color : #ffffff;
    padding-left : 10px;
}
`
export const FooterItemSocial = styled.a`
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


&:hover{
  color: 24262b;
  background : #ec268f;
  transform: scale(1.2);
}

`

export const WebsiteLogo = styled(LinkR)`
cursor : pointer;

`
export const CopyrightH = styled.div`
font-size : 18px;
color : #ec268f;
text-transform : capitalize;
font-family : 'Poppins';
font-weight : 500; 
text-align: center;


@media  screen and (max-width : 1200px){
    font-size : 15px;
    
}
@media  screen and (max-width : 610px){
    font-size : 12px;
    
}
`
