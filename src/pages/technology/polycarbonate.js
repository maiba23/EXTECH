import React, { useState, useEffect } from "react"
import ServiceTemplate from "../../components/services/service-template"
import Slider from "react-slick"
import { Tech2, Tech3 } from "../../utils/imgLoader"
import TechnologySlider from "../../components/technology/tech-slider"
import { sheeting } from "../../utils/staticData"

const data = {
  type: "polycarbonate",
  heading: "The Polycarbonate Difference",
  to: "polycarbonate",
  quote: `EXTECH began specializing in the use of cellular polycarbonate for daylighting solutions, and we never looked back – a decision that has proven prescient and valuable.`,
}
const content1 = `Prior to the availability of structured polycarbonate panels, EXTECH used Fiberglass Reinforced Panels (FRP) in our daylighting systems. When cellular polycarbonate came on the scene, we gave it a try -  and quickly realized how superior it is to FRP.

The benefits of this versatile and environmentally-friendly product are unsurpassed in terms of quality and function for walls, windows, skylights, canopies, and interior projects. Polycarbonate is delicate enough to transmit light while possessing the durability to withstand hurricane-blown debris. It isn’t affected by “fiber-bloom,” a deterioration that happens in FRP (see below photos for example). Polycarbonate is also resistant to yellowing, another symptom of aging FRP. Polycarbonate can be used with a wide range of applications, from industrial structures that demand resilience to cultural institutions that prefer soft, ethereal aesthetics.`
const content2 = `Though we specialize in the use of cellular polycarbonate, our systems can also accept glass. The EXTECH team is ready to answer all your questions on daylighting and the options available – please contact us to find out more!`
const content3 = `"Fiber-bloom" is a deterioration that is common in Fiberglass Reinforced Panels (FRP) and can happen within 10 years of an application's construction. Many of our retrofits are done on buildings that originally used FRP but had to be replaced with polycarbonate due to yellowing and a diminished daylighting capacity. Fiber-bloom is one of the many reasons EXTECH does not use FRP.`

const list = [
  "Highly insulating",
  "Light-weight panels install quickly for reduced installation cost",
  "Protects against UV rays and delivers solar shading",
  "Diffuses light, providing a soft glow without glare; glass beads can be added to the resin to deliver an enhanced glow",
  "100% recyclable; utilization can count toward LEED certification",
  "Superior alternative to Fiberglass Reinforced Panel (FRP) because of FRP’s tendency to result in 'fiber-bloom' (see below photos)",
  "Resistant to yellowing as it ages, an issue with FRP",
  "Good alternative to glass, which is prone to breakage, and heavy (making it hard to install)",
  "Extremely durable; tested and designed to deliver impact resistance for use in coastal structures affected by hurricanes",
  "Available in various colors and translucencies",
  "Especially effective for retrofits",
  "Less expensive than glass",
  "Unlike glass, polycarbonate can be cold-formed to various radii to create curved applications",
  "Available in ASTM E-84 Class A, CC-1 fire rated material",
]

const Technology = () => {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const [slider1, setSlider1] = useState(null)
  const [slider2, setSlider2] = useState(null)

  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
  })

  const settingsMain = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".slider-nav",
  }
  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <ServiceTemplate data={data}>
      <div className="container">
        <p className="pre-wrap text-black mt-4">{content1}</p>
        <div className="row mt-5">
          <div className="col-md-6">
            <img src={Tech2} alt="technology" className="w-100 tech2" />
          </div>
          <div className="col-md-6 ">
            <ul className="advantage">
              {list.map((item, idx) => (
                <li className="text-black" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="pre-wrap text-black mt-4">{content2}</p>
        <div className="row mt-5 align-items-center">
          <div className="col-sm-6">
            <img src={Tech3} alt="technology" className="w-100 tech3" />
          </div>
          <div className="col-sm-6 d-flex justify-content-center">
            <div className="content3">{content3}</div>
          </div>
        </div>
      </div>
      <section className="section-gallery technology-slider">
        <div className="container">
          <h1 className="text-white text-uppercase">Sheeting</h1>
          <p>
            The four main types of sheeting we offer with our systems are
            Standing Seam, Interlocking, Monolithic, and Flat Sheet. Each type
            offers its own unique advantages, described below; all four provide
            the benefits described above.
          </p>
          <div className="thumbnail-slider-wrap">
            <Slider
              {...settingsThumbs}
              asNavFor={nav1}
              ref={slider => setSlider2(slider)}
            >
              {sheeting.map((item, idx) => (
                <div className="slick-slide" key={idx}>
                  <span className="text-uppercase">{item.name}</span>
                </div>
              ))}
            </Slider>
          </div>
          <Slider
            {...settingsMain}
            asNavFor={nav2}
            ref={slider => setSlider1(slider)}
          >
            {sheeting.map((item, index) => (
              <TechnologySlider data={item} key={index} />
            ))}
          </Slider>
        </div>
      </section>
    </ServiceTemplate>
  )
}

export default Technology
