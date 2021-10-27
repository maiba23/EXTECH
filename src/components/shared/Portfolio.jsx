import { Link } from "gatsby"
import React from "react"
import { Icon1, Icon2, Icon3 } from "../../utils/imgLoader"

const kicker = {
  services: "SERVICES",
  professionals: "WHO WE HELP",
}

const heading = {
  services: "WE OFFER FULL CYCLE SERVICES \nTO MAKE YOUR DREAMS COME TRUE",
  professionals: "SERVICE FOR PROFESSIONALS",
}

const services = [
  "Translucent Daylighting Systems",
  "Custom Facades",
  "Design, Fabrication & Installation",
]

const professionals = [
  {
    icon: Icon1,
    name: "Architect",
  },
  {
    icon: Icon2,
    name: "General Contractor",
  },
  {
    icon: Icon3,
    name: "Building Owner",
  },
]

const Portfolio = ({ type }) => {
  return (
    <section className={"section-" + type}>
      {type === "services" && <div className="blue-layer"></div>}
      <div className="container position-relative">
        <span className="kicker-text txt-white">{kicker[type]}</span>
        <h1 className="pre-wrap">{heading[type]}</h1>
        <div className="service row mt-4">
          {type === "services" &&
            services.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="service-portfolio">
                  <p className="portfolio-kicker">0{index + 1}.</p>
                  <h2 className="portfolio-name my-auto">{item}</h2>
                </div>
              </div>
            ))}
          {type === "professionals" &&
            professionals.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="service-portfolio">
                  <img src={item.icon} alt="icon" />
                  <h2 className="txt-blue text-center mt-4">{item.name}</h2>
                </div>
              </div>
            ))}
        </div>
        {type === "services" && (
          <div className="text-center service-all">
            <Link to="services" className="btn-third">
              All Services
            </Link>
          </div>
        )}{" "}
      </div>
    </section>
  )
}

export default Portfolio
