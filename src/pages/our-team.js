import React from "react"
import Layout from "../layout"
import { Link } from "gatsby"
import CTASection from "../components/shared/CTASection"
import SliderComponent from "../components/shared/SliderComponent"
import { ctaData2, general_team, sales_team } from "../utils/staticData"

const Profile = ({ data }) => {
  return (
    <div className="col-6 col-sm-4 profile-item">
      <Link to={data.to} className="profile-link">
        <img src={data.avatar} alt="avatar" />
        <h5>{data.name}</h5>
        <p>{data.role}</p>
      </Link>
    </div>
  )
}

const OurTeam = () => {
  return (
    <Layout type="secondary">
      <section className="hero-section our-team">
        <div className="container">
          <h1 className="hero typo-txt">EXTECH's Team</h1>
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
              Company
            </Link>
          </li>
          <li className="breadcrumb-item link">
            <Link to="/" className="text-black">
              OUR Team
            </Link>
          </li>
        </ol>
      </nav>
      <section className="team-members">
        <div className="container">
          <div className="general-team">
            <h1 className="text-black text-uppercase">
              General Management team
            </h1>
            <p className="txt-gray intro">
              Consectetur tempus cursus sem morbi commodo vulputate et suscipit
              ornare. Lobortis semper dolor, ultrices amet ultrices. Nec lacus,
              dignissim rhoncus amet a tempor gravida. Mollis gravida in mattis
              non scelerisque volutpat. Netus nunc pulvinar ornare magna diam
              gravida. Egestas elit massa aliquam laoreet nibh sodales.
              <br />
              Turpis ipsum cum leo tellus, at gravida scelerisque amet, et.
              Risus mauris scelerisque eu, amet nunc. Aliquet ante eu, ac
              tincidunt porta.
            </p>
            <div className="row profile">
              {general_team.map((item, idx) => (
                <Profile data={item} key={idx} />
              ))}
            </div>
          </div>
          <div className="sales-tema">
            <h1 className="text-black text-uppercase">EXTECH's Sales Team</h1>
            <div className="row profile">
              {sales_team.map((item, idx) => (
                <Profile data={item} key={idx} />
              ))}
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

export default OurTeam
