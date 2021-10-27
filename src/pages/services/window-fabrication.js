import React from "react"
import ServiceTemplate from "../../components/services/service-template"
import { Fabrication1, Fabrication2 } from "../../utils/imgLoader"

const data = {
  type: "fabrication",
  heading: "Fabrication",
  to: "window-fabrication",
  quote: `EXTECH’s fabrication process is where engineering meets art. Our technology and methods are designed to maximize efficiency and quality, and we partner with you to ensure our systems are fabricated with the precision your design needs.`,
}

const Services = () => {
  return (
    <ServiceTemplate data={data}>
      <div className="container promo">
        <div className="row">
          <div className="col-sm-6 promo-img">
            <img src={Fabrication1} alt="custom" />
          </div>
          <div className="col-sm-6 promo-text">
            {`Using state-of-the-art 3D modeling software and Computer Numeric Controlled (CNC) machinery, we fully fabricate our systems so that your team can perform installations with ease and accuracy.  All fabrication is done in our Pittsburgh, PA facility by engineers and technicians equipped with the insight, knowledge, and savvy required for superior craftsmanship.`}
          </div>
        </div>
        <div className="row mt-5 flex-row-reverse">
          <div className="col-sm-6 promo-img">
            <img src={Fabrication2} alt="custom" />
          </div>
          <div className="col-sm-6 promo-text">
            {`Our services don’t end when the product leaves our dock – our technicians work with you through the duration of your project to make sure our system properly integrates into your design. The combination of our advanced tools and dedicated team results in systems that are made with precision, and made to last.

We provide fully fabricated products because we believe full fabrication delivers the most accuracy and long-term cost-savings. However, if you are considering value-engineered alternatives, we can work with you to deliver systems that accommodate your needs.`}
          </div>
        </div>
      </div>
    </ServiceTemplate>
  )
}

export default Services
