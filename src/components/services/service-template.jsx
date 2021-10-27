import React from "react"
import { Link } from "gatsby"
import Layout from "../../layout"
import SliderComponent from "../shared/SliderComponent"
import CTASection from "../shared/CTASection"
import { ctaData2 } from "../../utils/staticData"

const ServiceTemplate = ({ children, data }) => {
  return (
    <Layout type="secondary">
      <section className={"hero-section " + data.type}>
        <div className="container">
          <h1 className="hero">
            <span className="typo-txt">{data.heading}</span>
          </h1>
        </div>
      </section>
      <nav aria-label="breadcrumb" className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item link">
            <Link to="/" className="txt-gold">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item link">
            <Link to="/" className="txt-gold">
              Services
            </Link>
          </li>
          <li className="breadcrumb-item link">
            <Link to={data.to} className="text-black">
              {data.heading}
            </Link>
          </li>
        </ol>
      </nav>
      <div className="container">
        <p className="quote">{data.quote}</p>
      </div>
      {children}
      <SliderComponent type="project" />
      <SliderComponent type="blog" />
      <CTASection data={ctaData2} />
    </Layout>
  )
}

export default ServiceTemplate
