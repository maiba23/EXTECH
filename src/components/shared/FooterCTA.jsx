import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const FooterCTA = ({ page }) => {
  const data = useStaticQuery(graphql`
    query FooterCTAQuery {
      allPrismicFooterCta {
        nodes {
          data {
            text
            btn1_text
            btn1_url
            btn2_text
            btn2_url
          }
        }
      }
    }
  `)
  const ctaData = data.allPrismicFooterCta.nodes[0].data

  return (
    <section className={"section-cta " + page}>
      {page !== "home" && <div className="blue-layer"></div>}
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-7">
            <h2 className={page !== "home" ? "text-white" : "text-black"}>
              {ctaData.text}
            </h2>
          </div>
          <div className="col-lg-5 btn-group">
            <Link
              className={page !== "home" ? "btn-third me-3" : "btn-second me-3"}
              to={ctaData.btn1_url}
            >
              {ctaData.btn1_text}
            </Link>
            <Link
              className={page !== "home" ? "btn-fourth" : "btn-primary"}
              to={ctaData.btn2_url}
            >
              {ctaData.btn2_text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterCTA
