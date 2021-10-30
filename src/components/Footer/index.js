import React from 'react'
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube} from 'react-icons/fi'
import {ImPinterest2} from 'react-icons/im'
import {BiCopyright} from 'react-icons/bi'
import {Footer,FooterContainer,FooterRow,FooterColumn,FooterHeading,FooterMenu,FooterItemR,FooterItemS,FooterItemSocial,WebsiteLogo,CopyrightH} from './FooterElements'
import logo from '../../images/logor.png';
import styled from 'styled-components';
import {animateScroll as scroll} from 'react-scroll'
export const  FooterBar = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
          <Footer>
              <FooterContainer>
                  <FooterRow>
                      <FooterColumn>
                          <FooterHeading>
                            Menu
                          </FooterHeading>
                          <FooterMenu>
                              <FooterItemS  to="aboutus" 
                                 smooth={true}
                                 duration={500}
                                 spy={true}
                                 exact='true'
                                 offset={-80}>About Us
                              </FooterItemS>
                              <FooterItemS to="products"
                               smooth={true}
                               duration={500}
                               spy={true}
                               exact='true'
                               offset={-80}>Products
                               </FooterItemS>
                              <FooterItemS to="vision" smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Our Mission</FooterItemS>
                              <FooterItemS to="location" smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Office Locations</FooterItemS>   
                          </FooterMenu>
                      </FooterColumn>

                      <FooterColumn>
                          <FooterHeading>
                           Resource Links
                          </FooterHeading>
                          <FooterMenu>
                              <FooterItemR href="https://www.goldengirlcosmetics.com/page/privacy-policy" target="_blank">Privacy Policy</FooterItemR>
                              <FooterItemR href="https://www.goldengirlcosmetics.com/page/blogs" target="_blank">Blogs</FooterItemR>
                              <FooterItemR href="https://www.facebook.com/goldengirlcosmeticsofficial/" target="_blank">TVC's</FooterItemR>
                              <FooterItemR href="https://www.goldengirlcosmetics.com/page/careers" target="_blank">Careers</FooterItemR> 
                              <FooterItemR href="https://www.goldengirlcosmetics.com/page/shipment-policy" target="_blank">Shipment Policy</FooterItemR> 
                          </FooterMenu>
                      </FooterColumn>

                      <FooterColumn>
                          <FooterHeading>
                            Online Shop
                          </FooterHeading>
                          <FooterMenu>
                              <FooterItemR href='https://www.goldengirlcosmetics.com/' target="_blank" >Home</FooterItemR>
                              <FooterItemR href='https://www.goldengirlcosmetics.com/collection/baby-products' target="_blank" >Baby</FooterItemR>
                              <FooterItemR href='https://www.goldengirlcosmetics.com/collection/bundle-offers' target="_blank" >Bundle Offers</FooterItemR>
                              <FooterItemR href='https://www.goldengirlcosmetics.com/collection/hand-sanitizer' target="_blank" >Hand Sanitizer</FooterItemR>
                              <FooterItemR href='https://www.goldengirlcosmetics.com/collection/promo' target="_blank" >Promotions</FooterItemR>
                          </FooterMenu>
                      </FooterColumn>

                      <FooterColumn>
                          <FooterHeading>
                           Social Links
                          </FooterHeading>
                          <FooterMenu>
                           <FooterItemSocial href="https://www.facebook.com/goldengirlcosmeticsofficial/" target="_blank"><FiFacebook/></FooterItemSocial>
                           <FooterItemSocial href="https://www.instagram.com/goldengirlcosmeticsofficials/" target="_blank"><FiInstagram/></FooterItemSocial>
                           <FooterItemSocial href="https://www.linkedin.com/company/golden-girl-cosmetics/?originalSubdomain=pk" target="_blank"><FiLinkedin/></FooterItemSocial>
                           <FooterItemSocial href="https://www.youtube.com/channel/UCzTTCJue4-3r3nAkS_UR6VQ" target="_blank"><FiYoutube/></FooterItemSocial>
                           <FooterItemSocial href="https://www.pinterest.com/goldengirlcosmetic/_created/" target="_blank"><ImPinterest2/></FooterItemSocial>
                           </FooterMenu>
                      </FooterColumn>
                      <FooterColumn>
                          <WebsiteLogo to="/" onClick={toggleHome}>
                          <Img src={logo} alt="logo_ggc"  />
                          </WebsiteLogo>
                      </FooterColumn>  
                  </FooterRow>
                  <CopyrightH>Golden Girl Cosmetics <BiCopyright/> 2021 All right reserved</CopyrightH> 

              </FooterContainer>
          </Footer>  
        </>
    )
}

export default FooterBar

const Img = styled.img`
  height: 70px;
  @media  screen and (max-width : 610px){
    height: 60px;
    
}
`