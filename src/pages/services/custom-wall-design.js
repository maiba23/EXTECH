import React, { useState, useEffect } from "react"
import ServiceTemplate from "../../components/services/service-template"
import Slider from "react-slick"
import { Img1, Img2, Img3, Img4, Custom1 } from "../../utils/imgLoader"
import ServiceSlider from "../../components/services/service-slide"

const data = {
  type: "custom-design",
  heading: "Custom Design",
  to: "custom-wall-design",
  quote: `Architectural design and construction always present unique challenges, 
  no matter what the size of your project. There are hundreds of choices 
  to make, and even more problems to solve – for every beautiful design imagined, the reality of cost, timelines, sustainability, LEED status, 
  and functionality comes into play.`,
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
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const [slider1, setSlider1] = useState(null)
  const [slider2, setSlider2] = useState(null)

  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
  })

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }
  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "10px",
  }
  return (
    <ServiceTemplate data={data}>
      <div className="container promo">
        <div className="row">
          <div className="col-md-6 promo-img">
            <img src={Custom1} alt="custom" />
          </div>
          <div className="col-md-6 promo-text">
            {`At EXTECH, we understand the task of taking a project from concept to implementation. We partner with architects, building owners, construction managers, and contractors to engineer high-quality solutions that enchant the eye while respecting the bottom line. We believe in working closely with clients to solve challenges, and we’re committed to seeking every engineering avenue possible to deliver on your ideas.

We’ve been presented with many custom design challenges since our inception in 1975 – the following is a selection of some of our most recent custom projects. Hopefully, it will give you some insight into the inventiveness and diligence of the EXTECH team, and demonstrate our commitment to helping you create every tower, pantheon, and pagoda you imagine.
`}
          </div>
        </div>
      </div>
      <section className="section-gallery services-slider">
        <div className="container">
          <Slider
            {...settings}
            asNavFor={nav2}
            ref={slider => setSlider1(slider)}
          >
            {custom_designs.map((item, index) => (
              <ServiceSlider data={item} key={index} />
            ))}
          </Slider>
          <div className="thumbnail-slider-wrap">
            <Slider
              {...settingsThumbs}
              asNavFor={nav1}
              ref={slider => setSlider2(slider)}
            >
              {custom_designs.map((item, idx) => (
                <div className="slick-slide" key={idx}>
                  <img src={item.imgSrc} alt="slide" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </ServiceTemplate>
  )
}

export default Services
