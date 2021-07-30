import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import About from "../components/about/About";
const Home = () => {

  return (
    <Layout>
      <Seo title="About me" />
      <About />
    </Layout>
  )
}

export default Home
