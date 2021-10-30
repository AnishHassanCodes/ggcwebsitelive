import React from 'react'
import {SidebarContainer,
        Icon,
        CloseIcon,
        SidebarWrapper,
        SidebarLink,
        SidebarMenu,
        SideBtnWrap,
        SideBtnLink} from './SidebarElements'
 const  Sidebar = ({isOpen,toggle}) => {
    return (
        
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon/>
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                   <SidebarLink to="aboutus"  onClick={toggle}>
                      About Us
                   </SidebarLink>
                   <SidebarLink to="products" onClick={toggle}>
                      Products
                   </SidebarLink>
                   <SidebarLink to="vision" onClick={toggle}>
                     Mission
                   </SidebarLink>
                   <SidebarLink to="location" onClick={toggle}>
                     Store Locations
                   </SidebarLink>
                   
               </SidebarMenu>
               <SideBtnWrap>
                   <SideBtnLink to="contactus" onClick={toggle}>Contact Us</SideBtnLink>
               </SideBtnWrap>
           </SidebarWrapper>
        </SidebarContainer>
            
      
    )
}

export default Sidebar
