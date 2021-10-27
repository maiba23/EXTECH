import React from "react"
import ServiceTemplate from "../../components/services/service-template"
import CTASection from "../../components/shared/CTASection"
import { Daylight1, Daylight2, Daylight3 } from "../../utils/imgLoader"
import { ctaData3, factors } from "../../utils/staticData"

const data = {
  type: "daylighting-simulation",
  heading: "Daylighting Analysis",
  to: "daylighting-simulation",
  quote: `Natural light is a powerful tool when integrated properly into your design. It can reduce lighting loads (the cost to power lighting elements) and cooling loads (the cost to power cooling systems), earn LEED credits, and provide a relaxed and beautiful space for occupants.`,
}

const Factor = ({ item }) => {
  return (
    <div className="factor-item">
      <div className="factor-item__icon">
        <img src={item.icon} alt="factor" />
      </div>
      <p className="factor-item__name">{item.name}</p>
    </div>
  )
}

const Services = () => {
  return (
    <ServiceTemplate data={data}>
      <div className="container promo">
        <div className="row">
          <div className="col-sm-6 promo-img">
            <img src={Daylight1} alt="custom" />
          </div>
          <div className="col-sm-6 promo-text fw-bold">
            {`Though there are substantial advantages from integrating natural light into your design, there are challenges to harnessing its power. Solar heat gain and glare can impact your project, and there is typically a trade-off between daylighting and insulation values.`}
          </div>
        </div>
        <p className="mt-5 text-black">
          At EXTECH, we remove the doubt and help optimize daylighting for your
          structure through Daylighting Analysis, a simulation that places your
          design in a virtual setting and predicts the levels of daylight inside
          during different times of the day, during different seasons. Some of
          the factors taken into account are:
        </p>
      </div>
      <section className="container">
        <div className="factors">
          {factors.map((item, idx) => (
            <Factor item={item} key={idx} />
          ))}
          <p className="text-black my-4">
            When your design is visualized in our computer simulation by our
            team of engineers, it enables you to make changes on the spot to
            optimize its daylighting capabilities. We walk you through the
            different scenarios and demonstrate how alterations in design can
            greatly increase the benefits that daylighting provides.
          </p>
        </div>
        <div className="row mb-5 analysis-img">
          <div className="col-sm-6">
            <img src={Daylight2} alt="daylight" className="w-100" />
          </div>
          <div className="col-sm-6">
            <img src={Daylight3} alt="daylight" className="w-100" />
          </div>
        </div>
      </section>
      <CTASection data={ctaData3} />
    </ServiceTemplate>
  )
}

export default Services
