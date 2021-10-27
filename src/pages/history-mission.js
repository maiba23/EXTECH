import React from "react"
import Layout from "../layout"
import { Link } from "gatsby"
import SliderComponent from "../components/shared/SliderComponent"
import CTASection from "../components/shared/CTASection"
import { ctaData2 } from "../utils/staticData"
import { History1, History2 } from "../utils/imgLoader"

const quote = `Our Mission: 

Deliver solutions that elegantly meet the demands of the project through collaboration, innovation, and exceptional engineering.`
const content1 = `Since our founding in 1975, EXTECH/Exterior Technologies, Inc. has developed more than 20 unique systems. Our daylighting systems and custom façades have delivered solutions for a wide variety of industries and structural applications, and EXTECH’s commitment to collaboration and innovation has won several awards and garnered national attention. We believe adopting new technologies is essential to creating superior design, and we pledge to deliver our best work through on-site fabrication, constant education, and close client partnership.`
const content2 = `We hope you enjoy the time you spend on Extechinc.com. We built it to not only showcase our products and services but to deliver digital solutions. Register for a Toolkit account to track your downloads, easily order samples, and have links to useful sites from around the web collected in one convenient sidebar.  In other portions of our website, you can read our News & Blog to catch-up on the latest from the EXTECH team, or read a recent Case study to learn about some of EXTECH's custom innovations and achievements. Wherever your clicking takes you, we hope you have a good time, and find the answers you were looking for.

If you didn’t find the answers you need, please Contact us!`
const content3 = `We believe that a collaborative and creative approach is vital to produce beautiful, functional, and healthy designs. We partner closely with everyone involved in the architectural process, asking questions, listening to ideas, to foster innovation, cost-savings, and ease of implementation.

But we are committed to more than delivering the best daylighting and custom façade solutions – our goal is to create long-lasting partnerships. In all our work, EXTECH’s project managers, architects, and engineers strive to provide the unfaltering technical expertise, imaginative ingenuity, and dedicated teamwork that builds lifetime relationships.`

const History = () => {
  return (
    <Layout type="secondary">
      <section className="hero-section history-mission">
        <div className="container">
          <h1 className="hero">
            <span className="typo-txt">History & Mission</span>
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
            <Link to="/history-mission" className="text-black">
              History & Mission
            </Link>
          </li>
        </ol>
      </nav>
      <div className="container mb-5">
        <p className="quote">{quote}</p>
        <div className="row align-items-center">
          <div className="col-sm-6">
            <img src={History1} alt="technology" className="tech4" />
          </div>
          <div className="col-sm-6">
            <h2 className="text-black">Our History</h2>
            <p className="pre-wrap text-black">{content1}</p>
          </div>
        </div>
        <p className="text-black pre-wrap my-4">{content3}</p>
        <div className="row flex-row-reverse align-items-center">
          <div className="col-sm-6">
            <img src={History2} alt="technology" className="tech4" />
          </div>
          <div className="col-sm-6">
            <h2 className="text-black">Our Website</h2>
            <p className="pre-wrap text-black">{content2}</p>
          </div>
        </div>
      </div>
      <CTASection data={ctaData2} />
      <SliderComponent type="project" />
      <SliderComponent type="blog" />
    </Layout>
  )
}

export default History
