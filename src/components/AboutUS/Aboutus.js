import React from 'react'
import {AboutUsContainer,AboutUsH1,AboutUsImg,AboutUsRow,AboutUsColumn,AboutUsP,AboutUsColumnS,AboutUsHeading,AboutUsMenu,AboutUsItemSocial} from './AboutUsElements'
import Tilt from 'react-tilt'
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube} from 'react-icons/fi'
import {ImPinterest2} from 'react-icons/im'
import certificate1 from '../../images/certificate1.jpg'
import certificate2 from '../../images/certificate2.jpg'
function AboutUs() {
    return (
        <>
          <AboutUsContainer id="aboutus">
          <AboutUsH1>About Us</AboutUsH1>
            <AboutUsRow>
              <AboutUsColumn>
                <AboutUsP>
                Shanns Cosmetics & Chemicals (Golden Girl Cosmetics) is an ISO 9001-2008 (Quality Certification) and CGMP (Certified Good Manufacturing Practice) cosmetics manufacturing company based in Lahore Pakistan and is registered with Federal Board of Revenue, Government of Pakistan under No. 03-99-9999-220-73 as manufacturer and National Tax Number 1287427-2. We are manufacturer of a wide range of cosmetics products ranging from creams, lotions, shampoo, conditioner, toiletries and a number of products exclusively for institutions and beauty salon segment. Our brand name GOLDEN GIRL is widely known and acknowledged as a quality name in cosmetics and toiletries. 
                </AboutUsP>
                <AboutUsP>
                We have a state of art manufacturing facility at Raiwind Road, Lahore where more than 100 employees are making sure that our consumers get the best quality of cosmetic product that can be produced at economical price.  We urge our buyers and specially you to visit our manufacturing facility in order to witness themselves our emphasis on quality and research.</AboutUsP>
                <AboutUsP>
                We have a network of around 120 Distributors throughout the country to facilitate distribution of our quality products to all the valued shops and stores in the country. We have also agreement with Metro , Makro , Hyperstar and Canteen Stores Department(CSD) Stores  who proudly display and sell our products to their customers.</AboutUsP>
                <AboutUsP>
                In the field of beauty salons our name and products are well known and considered best sellers in skin care. Depilex Beauty Institute , Allenora Beauty Parlours , Rose Beauty salons , Mahrose Beauty Parlours , New look Beauty Institute & Salon and other A class salons are just a few of our satisfied customers who prefer our products for their esteemed and exclusive customers.</AboutUsP> 
              </AboutUsColumn>
            
              <AboutUsColumnS>
                <Tilt >
                  <AboutUsImg src={certificate1} alt="img"/>
                </Tilt> 
              </AboutUsColumnS>
              <AboutUsColumnS>
                <Tilt >
                  <AboutUsImg src={certificate2} alt="img"/>
                </Tilt> 
              </AboutUsColumnS>
                          <AboutUsMenu>
                           <AboutUsItemSocial href="https://www.facebook.com/goldengirlcosmeticsofficial/" target="_blank"><FiFacebook/></AboutUsItemSocial>
                           <AboutUsItemSocial href="https://www.instagram.com/goldengirlcosmeticsofficials/" target="_blank"><FiInstagram/></AboutUsItemSocial>
                           <AboutUsItemSocial href="https://www.linkedin.com/company/golden-girl-cosmetics/?originalSubdomain=pk" target="_blank"><FiLinkedin/></AboutUsItemSocial>
                           <AboutUsItemSocial href="https://www.youtube.com/channel/UCzTTCJue4-3r3nAkS_UR6VQ" target="_blank"><FiYoutube/></AboutUsItemSocial>
                           <AboutUsItemSocial href="https://www.pinterest.com/goldengirlcosmetic/_created/" target="_blank"><ImPinterest2/></AboutUsItemSocial>
                           </AboutUsMenu>
            </AboutUsRow>
          
          
          
          </AboutUsContainer>
        </>
    )
}

export default AboutUs
