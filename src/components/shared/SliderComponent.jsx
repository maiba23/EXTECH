import React, { useRef } from "react"
import { Link } from "gatsby"
import Slider from "react-slick"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import {
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Logo1,
  Logo2,
  Logo3,
  Logo4,
} from "../../utils/imgLoader"

const solutions = [
  {
    header: "SKYSHADE 2500",
    content: "",
    imgSrc: Img1,
  },
  {
    header: "LIGHTWALL 3440",
    content:
      "The LIGHTWALL 3440 is our most popular daylighting system. This polycarbonate wall panel system offers beauty, durability, and economy with vertical panels",
    imgSrc: Img2,
  },
  {
    header: "LIGHTWALL 3440",
    content:
      "The LIGHTWALL 3440 is our most popular daylighting system. This polycarbonate wall panel system offers beauty, durability, and economy with vertical panels",
    imgSrc: Img3,
  },
]
const projects = [
  {
    header: "Display at the Ocean Explorium",
    content: "",
    imgSrc: Img1,
  },
  {
    header: "Boston Logan International \nAirport Hangars",
    content: "",
    imgSrc: Img2,
  },
  {
    header: "General Electric/SABIC \nInnovative Plastics \nHeadquarters",
    content:
      "General Electric had a big problem with their U.S. Headquarters in Pittsfield, MA: built in the 1970s…",
    imgSrc: Img3,
  },
  {
    header: "Jackpot Junction Casino Hotel \n2013 Canopy",
    content: "",
    imgSrc: Img4,
  },
  {
    header: "Southeastern Pennsylvania \nTransportation Authority \n(SEPTA)",
    content: "",
    imgSrc: Img5,
  },
  {
    header: "General Electric/SABIC \nInnovative Plastics \nHeadquarters",
    content:
      "General Electric had a big problem with their U.S. Headquarters in Pittsfield, MA: built in the 1970s…",
    imgSrc: Img6,
  },
]
const logos = [Logo1, Logo2, Logo3, Logo4, Logo1]
const blogs = [
  {
    header: "How Do Dynamic Wall Motion Systems Work?",
    content: "",
    imgSrc: Img6,
  },
  {
    header: "What are the Steps for Creating a Dynamic Wall?",
    content:
      "We love Kineticwall projects because they are a collaborative effort between architects, building owners…",
    imgSrc: Img2,
  },
  {
    header: "5 Considerations When Installing Glass Skylights",
    content: "",
    imgSrc: Img4,
  },
  {
    header: "How Do Dynamic Wall Motion Systems Work?",
    content: "",
    imgSrc: Img5,
  },
]

const kicker = {
  solution: "BEST SOLUTIONS IN INDUSTRY",
  project: "OUR LATEST PROJECTS",
  blog: "NEWS & BLOG",
  trust: "COMPLEX SOLUTIONS ",
}

const heading = {
  solution:
    "INNOVATIVE DAYLIGHTING SOLUTIONS \nHARNESS THE POWER OF NATURAL LIGHT",
  project: "We carry out about 80 projects a year, \ntake a look at our latest",
  blog: "Our latest news \nand blog posts",
  trust: "WE TRUST US",
}

const CustomSlide = ({ data, type }) => {
  return (
    <div className={type + "-slide position-relative"}>
      <img src={data.imgSrc} alt="hero slide" />
      <div className="fixed-content">
        {type === "soluton" ? (
          <h2>
            <span className="typo-txt">{data.header}</span>
          </h2>
        ) : (
          <h5>
            <span className="typo-txt">{data.header}</span>
          </h5>
        )}
        {data.content && (
          <p>
            <span className="typo-txt">{data.content}</span>
          </p>
        )}
      </div>
    </div>
  )
}

const SolutionComponent = ({ type }) => {
  const slider = useRef()
  const next = () => {
    slider.current.slickNext()
  }
  const previous = () => {
    slider.current.slickPrev()
  }
  const solution_settings = {
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }
  const blog_settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const trust_settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
  const project_settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <section className="section-sliders">
      <div className="container">
        <span className="kicker-text txt-gold">{kicker[type]}</span>
        <div className="upper-slider">
          <h1 className="slider-heading">{heading[type]}</h1>
          <div className="arrow-btns">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="fa-2x"
              onClick={previous}
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              className="fa-2x"
              onClick={next}
            />
          </div>
        </div>
        {type === "solution" && (
          <Slider ref={c => (slider.current = c)} {...solution_settings}>
            {solutions.map((item, index) => (
              <CustomSlide data={item} key={index} type={type} />
            ))}
          </Slider>
        )}
        {type === "trust" && (
          <Slider ref={c => (slider.current = c)} {...trust_settings}>
            {logos.map((item, index) => (
              <img
                src={item}
                key={index}
                className={type + "-img"}
                alt="trust logos"
              />
            ))}
          </Slider>
        )}
        {type === "blog" && (
          <>
            <Slider ref={c => (slider.current = c)} {...blog_settings}>
              {blogs.map((item, index) => (
                <CustomSlide data={item} key={index} type={type} />
              ))}
            </Slider>
            <div className="text-center mt-4">
              <Link to="/blogs" className="btn-primary ">
                Show All
              </Link>
            </div>
          </>
        )}
        {type === "project" && (
          <>
            <Slider ref={c => (slider.current = c)} {...project_settings}>
              {projects.map((item, index) => (
                <CustomSlide data={item} key={index} type={type} />
              ))}
            </Slider>
            <div className="text-center mt-4">
              <Link to="/case-studies" className="btn-primary ">
                Show Case Studies
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default SolutionComponent
