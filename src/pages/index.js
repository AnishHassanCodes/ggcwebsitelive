import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { BrowserRouter as Router } from "react-router-dom"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Products from "../components/Products"
import AboutUs from "../components/AboutUS/Aboutus"
import Visionggc from '../components/mission&vision/visionggc'
import StoresMap from "../components/storelocations/StoresMap"
import ContactUs from "../components/ContactUs/ContactUs"
const IndexPage = () => (
  <Router>
   <Layout>
    <Seo title="Home" />
    <Hero/>
    <AboutUs/>
    <Products heading="Our Products Categories"></Products>
    <Visionggc/>
    <StoresMap/>
    <ContactUs/>
   </Layout>
  </Router>
  
)


export default IndexPage
