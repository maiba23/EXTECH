import React from "react"
import ServiceTemplate from "../../components/services/service-template"
import { Tech4, Tech5 } from "../../utils/imgLoader"

const data = {
  type: "aluminum-window",
  heading: "Our Aluminum Framing Systems",
  to: "aluminum-window-framing",
  quote: `The framing is the most important aspect of daylighting.

  Since 1975, EXTECH has fabricated and customized aluminum framing extrusions for nearly every type of building application.`,
}

const content1 = `In over 40 years of experience, not only have we honed our extruding expertise, we’ve learned that a system's seamless integration requires detailed attention to the frame engineering.

Some daylighting providers sell generic framing systems they received from their polycarbonate panel suppliers. Generic framing solutions are not designed to deliver a durable and long-lasting performance. Though outsourcing the framing may allow providers 
to sell systems at a cheaper price, it puts their customers at a huge disadvantage - what they don’t disclose is that the generic system 
will cost more due to the extra labor and hardware it mandates.`

const content2 = `Since the use of generic framing is fraught with complications, we avoid using it. EXTECH’s patented framing systems were created to allow for customization on every project, and our engineers partner with clients to develop die designs and drawings that seamlessly integrate into every aspect of their application. Our extrusion process is always done in-house by EXTECH engineers who possess customization skills honed through decades of experience.

The combination of our customization experience, commitment to partnership, and determination to deliver solutions results in streamlined systems that are stunning, easy to install, and offer long-term cost-savings.

Our aluminum framing systems come in a variety of colors and finishes that can be tailored to meet your needs. Contact us to find out how our aluminum framing can help your design come to life.`

const Technology = () => {
  return (
    <ServiceTemplate data={data}>
      <div className="container">
        <div className="row flex-row-reverse align-items-center">
          <div className="col-sm-6">
            <img src={Tech4} alt="technology" className="tech4" />
          </div>
          <div className="col-sm-6">
            <p className="pre-wrap text-black">{content1}</p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-sm-6">
            <img src={Tech5} alt="technology" className="tech4" />
          </div>
          <div className="col-sm-6">
            <p className="pre-wrap text-black">{content2}</p>
          </div>
        </div>
      </div>
    </ServiceTemplate>
  )
}

export default Technology
