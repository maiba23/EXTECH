import React from "react"
import ServiceTemplate from "../../components/services/service-template"
import { Tech6 } from "../../utils/imgLoader"

const data = {
  type: "leed-certified",
  heading: "LEED & Sustainability",
  to: "leed-certified-windows",
  quote: `The Leadership in Energy and Environmental Design (LEED) is a certification that measures, according to their criteria, how sustainable buildings, neighborhoods and the operation of buildings are.`,
}

const content1 = `LEED (Leadership in Energy and Environmental Design) is a voluntary, consensus-based national rating system for developing high-performance, sustainable buildings. Developed by USGBC, LEED addresses all building types and emphasizes state-of-the-art strategies for sustainable site development, water savings, energy efficiency, materials and resources selection, and indoor environmental quality. LEED accreditation has gained a lot of attention in recent years since more and more, companies contract with vendors that incorporate sustainability into their building construction and daily operations.

When you incorporate daylighting into your design, one of the many benefits is that you are eligible to earn credits that count toward LEED certification. EXTECH is proud to offer creative manufacturing solutions that are developed with efficiency and sustainability in mind. EXTECH partners with clients to provide products and services that follow green design and construction practices, and offer credits toward LEED certification projects.

For information and guidelines on how EXTECH may contribute to a LEED project, see the below documentation or Contact us.`

const Technology = () => {
  return (
    <ServiceTemplate data={data}>
      <div className="container">
        <div className="row flex-row-reverse align-items-center">
          <div className="col-md-6 text-center">
            <img src={Tech6} alt="technology" className="tech5" />
          </div>
          <div className="col-md-6">
            <p className="pre-wrap text-black">{content1}</p>
          </div>
        </div>
      </div>
    </ServiceTemplate>
  )
}

export default Technology
