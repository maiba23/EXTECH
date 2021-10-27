import { Link } from "gatsby"
import React, { useRef } from "react"
import Slider from "react-slick"
import { benefits } from "../../utils/staticData"

const CustomSlide = ({ data }) => {
  return (
    <div className="benefit-slide position-relative">
      <div className="gradient-blue"></div>
      <img src={data.imgSrc} alt="benefit slide" />
      <div className="fixed-content">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="kicker-text">{data.kicker}</p>
              <h2 className="text-uppercase">{data.header}</h2>
              <p className="my-4 pre-wrap">{data.content}</p>
              <Link className="btn-third" to={data.to}>
                {data.btnName}
              </Link>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const BenefitComponent = () => {
  const slider = useRef()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }
  return (
    <section className="section-benefits">
      <Slider ref={c => (slider.current = c)} {...settings}>
        {benefits.map((item, index) => (
          <CustomSlide data={item} key={index} />
        ))}
      </Slider>
    </section>
  )
}

export default BenefitComponent
