import * as React from "react"
import Layout from "../layout"
import Seo from "../components/shared/seo"
import HomeHero from "../components/home/HomeHero"
import SliderComponent from "../components/shared/SliderComponent"
import Portfolio from "../components/shared/Portfolio"
import History from "../components/home/History"
import Benefits from "../components/home/Benefits"
import CTASection from "../components/shared/CTASection"
import { ctaData } from "../utils/staticData"

const HomePage = () => (
  <Layout type="primary">
    <Seo title="Home" />
    <HomeHero />
    <SliderComponent type="solution" />
    <Portfolio type="services" />
    <History />
    <SliderComponent type="project" />
    <SliderComponent type="trust" />
    <Portfolio type="professionals" />
    <SliderComponent type="blog" />
    <Benefits />
    <CTASection data={ctaData} />
  </Layout>
)

export default HomePage
