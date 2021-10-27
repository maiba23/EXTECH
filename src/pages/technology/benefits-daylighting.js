import React from "react"
import { Link } from "gatsby"
import ServiceTemplate from "../../components/services/service-template"
import Portfolio from "../../components/shared/Portfolio"

import {
  Prod1,
  Prod2,
  Prod3,
  Prod4,
  Prod5,
  Prod6,
  Prod7,
  Prod8,
  Prod9,
  Tech1,
} from "../../utils/imgLoader"

const data = {
  type: "benefit-daylight",
  heading: "The Benefits of Daylighting",
  to: "benefits-daylighting",
  quote: `“Study nature, love nature, stay close to nature. It will never fail you.”`,
}

const content1 = `Frank Lloyd Wright, the prolific American architect, knew well the importance of incorporating nature into his designs, particularly the sun. His greatest architectural achievements utilized many windows and apertures that harnessed daylighting’s benefits.

Unfortunately in the post-World War II era, cheap electricity and changes in electric lighting technology caused architects and builders to forget about the sun's inherent benefits. The result was buildings designed to look like giant cinder blocks.

Thankfully, today there is a resurgence of daylighting in architecture because of its proven advantages. One of its most attractive benefits is the energy savings - daylighting reduces electric lighting loads and related cooling loads (the costs of powering those systems).  Additionally, solar gains during cooling load periods can be lessened and solar gains during heating load periods can be utilized, further reducing energy costs and demand on HVAC systems.`

const content2 = `Many studies have concluded that daylighting has positive physical and mental effects. Daylighting has been linked to decreases in absenteeism, higher productivity, higher test scores, and shorter recovery times for hospitalized patients.

LEED certification, an accreditation that recognizes sustainable and environmentally-friendly building construction, has gained a lot of attention in recent years.  More and more, companies hire vendors that incorporate sustainability into their daily operations, and LEED certification is one of the best ways a business can demonstrate their commitment to green practices.  When you incorporate daylighting into your design, you are eligible to earn credits that count toward LEED certification.

Lastly, the beauty of daylighting is hard to deny. You can see the many wonderful examples of daylighting with the San Diego Humane Society, the National Centre for Synchrotron Science, and Fort Campbell Army Base (pictured above), which was built with EXTECH’s LIGHTWALL 3440.
 
Our Daylighting Analysis can help discover the possibilities of daylighting for your design. Please contact us to learn how we can help you achieve your vision through daylighting!`

const products1 = [
  {
    imgSrc: Prod1,
    name: "Lightwall 3000",
    type: "Curtain wall system",
    to: "/",
  },
  {
    imgSrc: Prod2,
    name: "LIGHTWALL 3100LS",
    type: "Long spanning wall system",
    to: "/",
  },
  {
    imgSrc: Prod3,
    name: "LIGHTWALL 3440",
    type: "Interlocking wall system",
    to: "/",
  },
]
const products2 = [
  {
    imgSrc: Prod4,
    name: "SKYGARD 3300",
    type: "Surface mounted skylight",
    to: "/",
  },
  {
    imgSrc: Prod5,
    name: "SKYGARD 3700",
    type: "Self-spanning skylight",
    to: "/",
  },
]
const products3 = [
  {
    imgSrc: Prod6,
    name: "SKYSHADE 3100",
    type: "Standing seam canopy",
    to: "/",
  },
  {
    imgSrc: Prod7,
    name: "SKYSHADE 3300",
    type: "Surface mounted canopy",
    to: "/",
  },
  {
    imgSrc: Prod8,
    name: "SKYSHADE 3700",
    type: "Aluminum framed canopy",
    to: "/",
  },
]
const products4 = {
  imgSrc: Prod9,
  name: "TECHVENT 5300",
  type: "Top-hinged industrial window",
  to: "/",
}

const Product = ({ data }) => {
  return (
    <div className="fixed-content">
      <p className="text-center">
        <span className="typo-txt">{data.type}</span>
      </p>

      <h2 className="text-center mt-2">
        <span className="typo-txt">{data.name}</span>
      </h2>
    </div>
  )
}

const Technology = () => {
  return (
    <ServiceTemplate data={data}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img src={Tech1} alt="technology" className="w-100" />
          </div>
          <div className="col-sm-6">
            <p className="pre-wrap text-black">{content1}</p>
          </div>
        </div>
        <p className="pre-wrap text-black mt-4">{content2}</p>
      </div>
      <section className="daylight-projects">
        <div className="container">
          <h1 className="text-black mb-4">Our Daylighting Products</h1>
          <div className="row">
            {products1.map((item, idx) => (
              <div className="col-sm-4" key={idx}>
                <Link to={item.to}>
                  <div className="product-item">
                    <img src={item.imgSrc} alt="product" />
                    <Product data={item} />
                  </div>
                </Link>
              </div>
            ))}
            {products2.map((item, idx) => (
              <div className="col-sm-6" key={idx}>
                <Link to={item.to}>
                  <div className="product-item">
                    <img src={item.imgSrc} alt="product" />
                    <Product data={item} />
                  </div>
                </Link>
              </div>
            ))}
            {products3.map((item, idx) => (
              <div className="col-sm-4" key={idx}>
                <Link to={item.to}>
                  <div className="product-item">
                    <img src={item.imgSrc} alt="product" />
                    <Product data={item} />
                  </div>
                </Link>
              </div>
            ))}

            <div className="col-sm-12">
              <Link to={products4.to}>
                <div className="product-item">
                  <img src={products4.imgSrc} alt="product" />
                  <Product data={products4} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Portfolio type="professionals" />
    </ServiceTemplate>
  )
}

export default Technology
