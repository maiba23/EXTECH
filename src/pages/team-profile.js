import React from "react"
import Layout from "../layout"
import { Link } from "gatsby"
import CTASection from "../components/shared/CTASection"
import SliderComponent from "../components/shared/SliderComponent"
import { ctaData2 } from "../utils/staticData"
import { Jim } from "../utils/imgLoader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const about = `Jim Leslie oversees all facets of EXTECH and directly manages its operational and strategic endeavors. He revitalized the company’s marketing initiatives, and has implemented systems and processes that ensure efficiency, cross-collaboration, knowledge-sharing, innovation, and client satisfaction.

Jim is a seasoned A/E/C and manufacturing professional. Prior to EXTECH, he was involved in several ventures, including a custom cabinet manufacturing business where his work was featured in dozens of publications and won several national awards. Jim earned his Bachelor of Science from Penn State University and is a member of APICS, the professional association for supply chain and operations management - view on LinkedIn`

const TeamProfile = () => {
  return (
    <Layout type="secondary">
      <div className="top-gap"></div>
      <nav aria-label="breadcrumb" className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item link">
            <Link to="/" className="txt-gold">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item link">
            <Link to="/" className="txt-gold">
              Company
            </Link>
          </li>
          <li className="breadcrumb-item link">
            <Link to="/our-team" className="txt-gold">
              OUR Team
            </Link>
          </li>
          <li className="breadcrumb-item link">
            <Link to="/" className="text-black">
              Jim Leslie
            </Link>
          </li>
        </ol>
      </nav>
      <section className="team-profile">
        <div className="container">
          <div className="headline">
            <h1 className="text-uppercase text-black">Jim Leslie</h1>
            <p className="text-black">General Manager</p>
          </div>
          <div className="row flex-row-reverse">
            <div className="col-sm-6">
              <img src={Jim} alt="avtar" className="w-100" />
            </div>
            <div className="col-sm-6 profile-about">
              <p className="pre-wrap text-black">
                {about}
                <a href="https://linkedin.com" className="txt-gold">
                  - view on LinkedIn
                </a>
              </p>
              <ul className="profile-social">
                <li>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="txt-blue fa-2x"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="txt-blue fa-2x"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="txt-blue fa-2x"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CTASection data={ctaData2} />
      <SliderComponent type="project" />
      <SliderComponent type="blog" />
    </Layout>
  )
}

export default TeamProfile
