

import * as React from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import { GlobalStyle } from "./styles/GlobalStyles"
import Navbar from './Navbar'
import { useState } from "react"
import  FooterBar  from "./Footer"

const Layout = ({ children }) => {

  const [isOpen,setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <GlobalStyle/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
       
        <main>{children}</main>
        
      <FooterBar/>

    </>
  )
}


export default Layout
