import React from 'react'
import { FaBars } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'
import {Button} from '../Button'
import styled from 'styled-components'
import logo from '../../images/logor.png'
import { Nav, NavbarContainer, NavLogo ,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './NavbarElements'
import { useState } from 'react'
import { useEffect } from 'react'
import {animateScroll as scroll} from 'react-scroll'
export const Navbar = ({toggle}) => {

    const [scrollNav,setScrollNav] = useState(false);

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        
        else{
            setScrollNav(false)           
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []) ;

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav scrollNav= {scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                    <Img src={logo} alt="logo_ggc"  />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to="aboutus" 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}

                            >About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="products"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Products</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="vision"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Our Mission</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="location"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Store Locations</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                    <NavBtnLink to="contactus"
                    smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>
                    Contact Us
                    </NavBtnLink>
                       
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar


const Img = styled.img`
  height: 70px;
`