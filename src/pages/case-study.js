import React from "react"
import { Link } from "gatsby"
import ImageGallery from "react-image-gallery"
import { GoogleMap, LoadScript } from "@react-google-maps/api"
import Layout from "../layout"
import SliderComponent from "../components/shared/SliderComponent"
import CTASection from "../components/shared/CTASection"
import { CaseInd } from "../utils/imgLoader"

import { ctaData1, details, ctaData2, images } from "../utils/staticData"

const about_project = `The design of the canopy avoided utility lines and effectively shed water into the gutter system. The gutter system and downspout, engineered by EXTECH, was integral to the aluminum framing.

EXTECH engineered the entire system while also proposing a solution that would require the Port Authority to do less maintenance. The design also made the canopy system more economical to install and effective at managing precipitation.

EXTECH provided a mock-up for the architect’s and owner’s preview to verify that the system would perform to the high expectations and appearance. After approval, EXTECH fully fabricated the canopy and then shipped the components to the job site, allowing for quick installation. 

The glass used allows light in without the unwanted solar heat, but due to the weather, more lighting was necessary. To add to the brightness of the station, LEDs were incorporated along the glass edge.

The custom aluminum framing that supports the class was finished in a Class I clear anodize while the steel support columns were finished in white. The design of the canopy was unique but as to not conflict with surrounding architecture, the natural pallet was intentional.

The new station at 5th Avenue and Atwood street helps deliver outstanding transportation services.`

const containerStyle = {
  width: "100%",
  height: "245px",
}

const center = {
  lat: -3.745,
  lng: -38.523,
}

const CaseStudies = () => {
  return (
    <Layout type="secondary">
      <section className="case-detail">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item link">
                <Link to="/" className="txt-gold">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item link">
                <Link to="/case-studies" className="txt-gold">
                  Case Studies
                </Link>
              </li>
              <li className="breadcrumb-item link">
                <Link to="/case-studies" className="text-black">
                  5th & Atwood Street Station
                </Link>
              </li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-md-7">
              <h1 className="hero text-black">5th & Atwood Street Station</h1>
              <img src={CaseInd} alt="case" className="case-image" />

              <p className="txt-gray fw-bold case-system">
                System: <span className="txt-gold link">SKYSHADE 2500®</span>
              </p>
              <p className="txt-gray mb-4">
                Pittsburgh’s new transit station, located at 5th Avenue and
                Atwood Street, features a glass canopy and custom aluminum
                framing system engineered, fabricated, and installed by
                EXTECH/Exterior Technologies, Inc. (EXTECH).
              </p>
              {details.map((item, idx) => (
                <p className="txt-gray fw-bold detail" key={idx}>
                  {item.head}
                  <span className="txt-gray fw-normal">{item.content}</span>
                </p>
              ))}
              <div className="btn-group">
                <button className="btn-primary">I Want the Same Project</button>
                <button className="btn-second">Get a Quote</button>
              </div>
            </div>
            <div className="col-md-5">
              <img src={CaseInd} alt="case" className="case-image" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-gallery">
        <div className="container">
          <h6 className="text-white">5TH & ATWOOD STREET STATION</h6>
          <h1 className="text-white text-uppercase">Project gallery</h1>
          <ImageGallery
            items={images}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={true}
          />
        </div>
      </section>
      <section className="case-map">
        <div className="container">
          <h6 className="txt-gray">5TH & ATWOOD STREET STATION</h6>
          <h1 className="text-black text-uppercase">About Project</h1>
          <p className="pre-wrap text-black">{about_project}</p>
          <div className="google-map">
            <LoadScript googleMapsApiKey="AIzaSyC0Ts64d0td1ZRpo4LGAe4ts2s-6HxpHFk">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              >
                {/* Child components, such as markers, info windows, etc. */}
                <></>
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </section>
      <CTASection data={ctaData1} />
      <SliderComponent type="project" />
      <SliderComponent type="blog" />
      <CTASection data={ctaData2} />
    </Layout>
  )
}

export default CaseStudies
