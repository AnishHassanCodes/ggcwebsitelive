import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
export const Nav =  styled.nav`
background : ${({ scrollNav}) => (scrollNav ? '#ec268f' : 'transparent')};
height : 80px;
margin-top: -80px;
display : flex;
justify-content : center;
padding: 0.5rem calc((100vw - 1300px)/ 2);
z-index : 100;
position: relative;
align-items: center;
font-size : 1rem;
position: sticky;
top: 0;
z-index :10;


@media screen and (max-width : 960px){
    transition  : 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
 display : flex;
 justify-content: space-between;
 height : 80px;
 z-index :1;
 width : 100%;
 padding : 0 24px;
 max-width : 1100px;


`

export const NavLogo = styled(LinkR)`
color : #fff;
justify-self : flex-start;
cursor : pointer;
font-size: 1.5rem;
display : flex;
align-items: center;
font-weight : bold;
text-decoration: none;
`

export const MobileIcon = styled.div`
display : none;
  
@media screen and (max-width: 1072px) {

    display : block;
    position: absolute;
    top:0;
    right : 0;
    transform : translate(-100%,60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`

export const NavMenu = styled.ul`
display : flex;
align-items : center;
list-style : none;
text-align: center;
margin-right: -22px;


@media  screen and (max-width : 1072px){
    display: none;
}

`
export const NavItem = styled.li`
height : 80px;
font-family : 'Poppins';
`

export const NavLinks = styled(LinkS)`
color :#fff;
display : flex;
align-items :center;
text-decoration : none;
padding: 0 1rem;
height : 100%;
cursor : pointer;
font-family : 'Poppins';
&.active {
    border-bottom: 3px solid #01bf71;
}

&:hover{
    transition : all 0.2s ease-in-out;
    color: #01bf71;
    transform : translateY(-2px);
}
`
export const NavBtn = styled.nav`
display: flex;
align-items : center;
${'' /* margin-right: 0.5rem calc((100vw - 1300px)/ 2);
margin-left :200px; */}
${'' /* @media screen and (max-width :1433px){
    margin-right: -100px;
}
@media screen and (max-width :1433px){
    margin-right: -10px;
} */}
@media screen and (max-width :1072px){
    display : none;
}
`
export const NavBtnLink = styled(LinkS)`
border-radius : 50px;
background : #01bf71;
whitespace: nowrap;
padding :10px 22px;
color: #010606;
font-size: 16px;
outline : none;
border : none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration : none;
font-family : 'Poppins';
&:hover{
    transition : all 0.2s ease-in-out;
    background :#fff;
    color: #010606;
    transform : translateY(-2px);
}
`



