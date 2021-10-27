import React, { useRef } from "react"
import Slider from "react-slick"
import ServiceTemplate from "../../components/services/service-template"
import ServiceSlider from "../../components/services/service-slide"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { Img1, Img2, Img3, Img4 } from "../../utils/imgLoader"

const data = {
  type: "engineering",
  heading: "Engineering",
  to: "industrial-window-design",
  quote: `The EXTECH team partners closely with clients at every step of the design phase, keeping them abreast of technological advances, value-engineered alternatives, code compliance, and more to help build daylighting systems and custom façades that are cost-effective, sustainable, and beautiful. Our team is committed to continued education in daylighting and architecture, and our guidance considers tried-and-true methods along with the latest industry advancements.`,
}
const custom_designs = [
  {
    header: "University of Florida Suspended Ceiling",
    content:
      "When Ross Barney Architects was hired to design the University of Florida’s Library West addition, they wanted to create an ethereal aesthetic while also respecting the university’s commitment to green technology and sustainability. EXTECH helped them realize their vision through partnership and custom engineering.",
    imgSrc: Img1,
    to: "/",
  },
  {
    header: "WLogan Airport Parking Expansion",
    content:
      "The Massachusetts Port Authority (Massport) was in need of a modern parking facility for their Central Parking Expansion at Logan International Airport.  Because of the facility’s prominent location, they were looking for a 21st-century design – one that incorporated sustainable materials and delivered an elegant and dynamic look.",
    imgSrc: Img2,
    to: "/",
  },
  {
    header: "UNO Galewood Charter School",
    content:
      "The United Neighborhood Organization (UNO) is a group dedicated to fulfilling the developmental needs of the Hispanic community in Chicago. After securing a $98 million grant, the organization decided to build three additional locations, one of which was the Galewood Charter School.  ",
    imgSrc: Img3,
    to: "/",
  },
  {
    header: "Harry Parker Community Rowing Boathouse and Sculling Pavilion",
    content:
      "After over 20 years of providing public rowing programs from a leased facility, Community Rowing, Inc. decided to construct a boathouse of their own with the infrastructure and accessibility needed to maintain and develop programs and services.",
    imgSrc: Img4,
    to: "/",
  },
]

const Services = () => {
  const slider = useRef()
  const next = () => {
    slider.current.slickNext()
  }
  const previous = () => {
    slider.current.slickPrev()
  }
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    appendDots: dots => (
      <div
        style={{
          display: "flex",
          padding: "10px",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="text-white fa-lg"
          onClick={previous}
        />
        <ul> {dots} </ul>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="text-white fa-lg"
          onClick={next}
        />
      </div>
    ),
    customPaging: i => <img src={Img1} />,
  }
  return (
    <ServiceTemplate data={data}>
      <section className="section-gallery services-slider">
        <div className="container">
          <Slider ref={c => (slider.current = c)} {...settings}>
            {custom_designs.map((item, index) => (
              <ServiceSlider data={item} key={index} />
            ))}
          </Slider>
        </div>
      </section>
    </ServiceTemplate>
  )
}

export default Services
