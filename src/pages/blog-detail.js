import React from "react"
import { Link } from "gatsby"
import Layout from "../layout"
import Sidebar from "../components/shared/Sidebar"
import CTASection from "../components/shared/CTASection"
import Signup from "../components/blog-detail/Signup"
import { Avatar, BlogPost, Share } from "../utils/imgLoader"
import { ctaData2 } from "../utils/staticData"

const content = `We are delighted to announce that EXTECH's KINETICWALL is being recognized in Green Building Alliance's GBA 25th Anniversary Award given to the Children's Museum of Pittsburgh for it's achievements in LEED and sustainability!

Green Building Alliance honors 25 projects annually that have significantly advanced the region’s green building movement at the Emerald Evening and GBA 25th Anniversary Awards gala on September 20th. 

Awardees were selected for verified innovation in design and maintenance across a diversity of sectors, building types, and project scales, and their collective efforts have elevated sustainable building practices in Western Pennsylvania. Click here to see the list of recipients!

Created and manufactured by EXTECH/Exterior Technologies, Inc., the KINETICWALL is comprised of typically 6-inch flappers that move with the wind, creating an eye-catching aesthetic. It is customizable and can be designed to accommodate a variety of materials. Structurally designed to withstand hurricane-force winds and torrential rainfall, it is light enough to enable easy installation, air flow, and visibility from the inside. The KINETICWALL also reduces solar heat gain, and the spacers between the flappers remove the chance for collateral noise.

We are honored to be recognized among these recipients of the GBA 25th Anniversary Awards. Join us in celebrating these transformative places and spaces as we all strive for a future where every building and community is sustainable so every person can thrive. 

If you would like to learn more about the KINETICWALL, you can visit the product page, read a recent case study, or contact us.

We are honored to be recognized among these recipients of the GBA 25th Anniversary Awards. Join us in celebrating these transformative places and spaces as we all strive for a future where every building and community is sustainable so every person can thrive. 

If you would like to learn more about the KINETICWALL, you can visit the product page, read a recent case study, or contact us.`

const BlogDetail = () => {
  return (
    <Layout type="secondary">
      <section className="top-gap">
        <nav aria-label="breadcrumb" className="container pt-1">
          <ol className="breadcrumb">
            <li className="breadcrumb-item link">
              <Link to="/" className="txt-gold">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item link">
              <Link to="/case-studies" className="text-black">
                OUR BLOG & LATEST NEWS
              </Link>
            </li>
          </ol>
        </nav>
      </section>
      <section className="section-blogs">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="blog-detail">
                <div className="blog-detail-hero">
                  <img
                    src={BlogPost}
                    alt="Blog Post"
                    className="blog-detail-img"
                  />
                  <div className="blog-categories">
                    <span className="typo-txt link txt-gold">architecture</span>
                    <span className="typo-txt link txt-gold">news</span>
                  </div>
                  <div className="fixed-content">
                    <h1 className="blog-head">
                      <span className="typo-txt">KINETICWALL & Children’s</span>
                    </h1>
                    <h1 className="blog-head">
                      <span className="typo-txt">Museum Win GBA Award For</span>
                    </h1>
                    <h1 className="blog-head">
                      <span className="typo-txt">LEED and Sustainability</span>
                    </h1>
                  </div>
                </div>
                <div className="blog-detail-info">
                  <img src={Avatar} alt="avatar" className="post-avatar" />
                  <span className="post-author txt-gold link">Jim leslie</span>
                  <span className="post-date txt-light-gray link">
                    25 dec 2020
                  </span>
                  <span className="post-date txt-light-gray link">2 min</span>
                  <Link to="/" className="ms-3">
                    <img src={Share} alt="share" />
                  </Link>
                </div>
                <div className="blog-detail-content">
                  <p className="pre-wrap txt-gray">{content}</p>
                </div>
                <Signup />
              </div>
            </div>
            <Sidebar type="blog-detail" />
          </div>
        </div>
      </section>
      <CTASection data={ctaData2} />
    </Layout>
  )
}

export default BlogDetail
