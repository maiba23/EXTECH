import React from "react"
import { Link } from "gatsby"
import ImageGallery from "react-image-gallery"
import Layout from "../layout"
import {
  ChevronDown,
  ChevronUp,
  Play,
  ProdImg,
  ProdModel,
} from "../utils/imgLoader"
import { icons, images, questions } from "../utils/staticData"
import SliderComponent from "../components/shared/SliderComponent"
import CTASection from "../components/shared/CTASection"
import { ctaData2, ctaData4 } from "../utils/staticData"
import TechTab from "../components/product-page/TechTab"
import TechSelect from "../components/product-page/TechSelect"
import FAQSection from "../components/product-page/FAQSection"

const ArrowUp = ({ onClick, disabled }) => {
  return (
    <div className="image-gallery-up-nav" disabled={disabled} onClick={onClick}>
      <img src={ChevronUp} alt="arrow up" />
    </div>
  )
}
const ArrowDown = ({ onClick, disabled }) => {
  return (
    <div
      className="image-gallery-down-nav"
      disabled={disabled}
      onClick={onClick}
    >
      <img src={ChevronDown} alt="arrow down" />
    </div>
  )
}
const FeatureItem = ({ data }) => (
  <div className="feature-item">
    <img src={data.icon} alt="feature" className="feature-img" />
    <p className="feature-text">{data.text}</p>
  </div>
)

const ProductPage = () => {
  return (
    <Layout type="secondary">
      <section className="top-gap"></section>
      <nav aria-label="breadcrumb" className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item link">
            <Link to="/" className="txt-gold">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item link">
            <Link to="/" className="txt-gold">
              Systems
            </Link>
          </li>
          <li className="breadcrumb-item link">
            <Link to="/" className="text-black">
              LIGHTWALL 3440®
            </Link>
          </li>
        </ol>
      </nav>
      <section className="product-detail">
        <div className="container">
          <div className="text-center mb-5">
            <img src={ProdImg} alt="product" className="w-100" />
          </div>
          <h1 className="hero text-black">LIGHTWALL 3440®</h1>
          <h5 className="text-black">Mortarless Glass Block System</h5>
          <p className="txt-gray my-4">
            EXTECH's SKYGARD 2500 is a glass skylight system that uses aluminum
            mullions that can incorporate a variety of glass glazing options.
            The system is can accommodate glass panels with greater than
            9/16-inch thicknesses and optional custom silk-screen patterns and
            glass coatings provided diffused daylighting while helping to
            control solar heat gain.
          </p>
          <button className="btn-primary me-3">Order a sample</button>
          <button className="btn-second">Downloads</button>
        </div>
      </section>
      <section className="section-features container">
        {icons.map((item, idx) => (
          <FeatureItem data={item} key={idx} />
        ))}
      </section>
      <section className="section-gallery product-page">
        <div className="container">
          <h6 className="text-white">SKYGARD 2500</h6>
          <h1 className="text-white text-uppercase">Project gallery</h1>
          <ImageGallery
            items={images}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={true}
            thumbnailPosition="right"
            renderLeftNav={(onClick, disabled) => (
              <ArrowUp onClick={onClick} disabled={disabled} />
            )}
            renderRightNav={(onClick, disabled) => (
              <ArrowDown onClick={onClick} disabled={disabled} />
            )}
          />
          <ImageGallery
            items={images}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={true}
          />
        </div>
      </section>
      <section className="product-spotlight container">
        <div className="row flex-row-reverse align-items-center">
          <div className="col-sm-6 text-center">
            <img src={ProdModel} alt="product model" className="w-100" />
          </div>
          <div className="col-sm-6">
            <span className="kicker-text txt-gold">PRODUCT SPOTLIGHT</span>
            <h1 className="pre-wrap text-black">LIGHTWALL 3440®</h1>
            <p className="txt-brown my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
              netus ipsum velit vitae. Nec, nulla vulputate faucibus pharetra
              nisl, enim. Ornare sit vestibulum a pulvinar viverra sed lacus.
              Porta cursus orci, mi parturient. Quis eu pellentesque nunc,
              aliquet diam sollicitudin pretium id.{" "}
            </p>
            <button className="btn-fifth">Get Your Free Quote</button>
          </div>
        </div>
      </section>
      <section className="model-section container">
        <h6 className="kicker-text txt-gold">LIGHTWALL 3440®</h6>
        <h1 className="pre-wrap text-black">PRODUCT VIDEOS</h1>
        <div className="threed-model">
          <div className="pos-center">
            <button className="btn-play">
              <img src={Play} alt="play" />
            </button>
          </div>
        </div>
      </section>
      <SliderComponent type="project" />
      <section className="section-cta other">
        <div className="blue-layer"></div>
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-6">
              <h2 className="text-white">{ctaData4.heading}</h2>
              <p>{ctaData4.content}</p>
            </div>
            <div className="col-md-6 btn-group">
              <Link className="btn-fourth" to="/">
                {ctaData4.ctas[0]}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="model-section container">
        <h6 className="kicker-text txt-gold">LIGHTWALL 3440®</h6>
        <h1 className="pre-wrap text-black">3D Model</h1>
        <div className="threed-model">
          <div className="pos-center">
            <button className="btn-play">
              <img src={Play} alt="play" />
            </button>
            <p className="text-black">
              Click to show the 3D model of
              <br />
              LIGHTWALL 3440®
            </p>
          </div>
        </div>
      </section>
      <section className="tech-info container">
        <h6 className="kicker-text txt-gold">LIGHTWALL 3440®</h6>
        <h1 className="pre-wrap text-black">Technical Information</h1>
        <TechTab />
        <TechSelect />
      </section>
      <FAQSection questions={questions} />
      <CTASection data={ctaData2} />
    </Layout>
  )
}

export default ProductPage
