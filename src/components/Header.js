import * as React from "react"
import { Link } from "gatsby"
import logo from '../images/logor.png'
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa' 
import {menuData} from './data/MenuData'
import { Button } from "./Button"
const Header = () => {
  return  (
        <Nav>
          <NavLink to="/" >
             <Img src={logo} alt="logo_ggc"  />
          </NavLink>
          <Bars/> 
          <NavMenu>
            {menuData.map((item,index) => (
                 <NavLinkM to={item.link} key={index}>
                    {item.title}
                 </NavLinkM>
            ) 

            )

            }
          </NavMenu>
          <NavBtn>
            <Button primary="true" round="true" to="/contactus">Contact Us</Button>
          </NavBtn>
        </Nav>
  )
}


export default Header

const Nav = styled.nav`
    ${'' /* background: linear-gradient(to bottom, #ffccff 0%, #ff66ff 100%); */}
  height : 80px;
  display: flex;
  justify-content : space-between;
  padding: 0.5rem calc((100vw - 1300px)/ 2);
  z-index : 100;
  position: relative;
`
const Img = styled.img`
  height: 70px;
`

const NavLink = styled(Link)`
      display: flex;
      align-items : center;
      text-decoration : none;
      padding : 0 1rem;
      height : 100%;
      cursor: pointer; 
      color: #fff;
`
const NavLinkM = styled(Link)`
      display: flex;
      align-items : center;
      text-decoration : none;
      padding : 0 2rem;
      height : 100%;
      font-size: 15px;
      cursor: pointer; 
      color: #fff;

      &:hover{
     background : ${({primary}) => (primary? "#077BF1":"#F26A2E")};
    transform : translateY(-2px);
    border-radius : 20px;
    height : 30px;
}
`
const Bars = styled(FaBars)`
display: none;
color : #fff;

@media screen and (max-width: 1072px) {
     display : block;
     position: absolute;  
     top : 0;
     right: 0;
     transform : translate(-100%,75%);
     cursor : pointer;
     font-size : 1.8rem;
}

`;

const NavMenu = styled.div`
      display : flex;
      align-items : center;
      margin-right : -48x;
      @media screen and (max-width: 1072px){
        display : none;
      }
`;


const NavBtn = styled.div`
display: flex;
align-items : center;
margin-right: 24px;

@media screen and (max-width: 1072px){
  display: none;
}

`;