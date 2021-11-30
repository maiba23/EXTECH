import React, { useState, useEffect, useCallback } from "react"
import { Link } from "gatsby"
import Layout from "../layout"
import FooterCTA from "../components/shared/FooterCTA"
import SliderComponent from "../components/shared/SliderComponent"
import Gallery from "react-photo-gallery"
import Select from "react-select"
import Carousel, { Modal, ModalGateway } from "react-images"
import {
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
} from "../utils/imgLoader"

const categories = [
  {
    label: "All Images",
    value: "all",
  },
  {
    label: "Aviation",
    value: "aviation",
  },
  {
    label: "Canopies",
    value: "canopies",
  },
  {
    label: "Case Study",
    value: "case-study",
  },
  {
    label: "Ceiling Panel",
    value: "ceiling-panel",
  },
  {
    label: "Commercial",
    value: "commercial",
  },
  {
    label: "Custom",
    value: "custom",
  },
  {
    label: "Custom",
    value: "custom",
  },
]

const images = [
  {
    src: Gallery1,
    width: 2,
    height: 1,
    category: ["all", "aviation"],
  },
  {
    src: Gallery2,
    width: 3,
    height: 2,
    category: ["all", "canopies"],
  },
  {
    src: Gallery3,
    width: 3,
    height: 2,
    category: ["all", "case-study"],
  },
  {
    src: Gallery4,
    width: 4,
    height: 3,
    category: ["all", "ceiling-panel"],
  },
  {
    src: Gallery5,
    width: 1,
    height: 1,
    category: ["all", "commercial"],
  },
  {
    src: Gallery6,
    width: 3,
    height: 2,
    category: ["all", "custom"],
  },
]
const ProjectGallery = () => {
  const [filter, setFilter] = useState("all")
  const [projects, setProjects] = useState([])
  const [active, setActive] = useState("All Images")
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }
  const handleClick = item => {
    setFilter(item.value)
    setActive(item.label)
  }
  const handleSelect = item => {
    setFilter(item.value)
  }
  useEffect(() => {
    const filtered = images
      .map(p => ({
        ...p,
        filtered: p.category.includes(filter) ? "true" : "false",
      }))
      .reduce((prev, cur) => {
        cur.filtered === "true" && prev.push(cur)
        return prev
      }, [])
    setProjects(filtered)
  }, [filter])
  return (
    <Layout type="secondary">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero typo-txt">Our Projects Gallery</h1>
        </div>
      </section>
      <nav aria-label="breadcrumb" className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item link">
            <Link to="/" className="txt-gold">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item link">
            <Link to="/" className="txt-gold">
              Company
            </Link>
          </li>
          <li className="breadcrumb-item link">
            <Link to="/" className="text-black">
              OUR PROJECS GALLERY
            </Link>
          </li>
        </ol>
      </nav>
      <section className="gallery-section">
        <div className="container">
          <p className="text-black pb-4">
            This gallery shows the applications of various EXTECH systems,
            including our patented top-hinged industrial &nbsp;
            <span className="txt-blue">
              polycarbonate windows, translucent walls, commercial canopies,
              industrial skylights, building facades, translucent interior
              walls, and mortarless glass block systems.
            </span>
          </p>
          <div className="gallery__categories">
            {categories.map((item, idx) => (
              <button
                onClick={() => handleClick(item)}
                key={idx}
                className={
                  active === item.label
                    ? "category-select active"
                    : "category-select"
                }
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="gallery__categories--select">
            <Select
              options={categories}
              value={filter.label}
              onChange={v => handleSelect(v)}
              placeholder="Select category"
              className="mb-3"
              styles={{
                option: () => ({
                  border: `1px solid #D0D0D0`,
                  height: "100%",
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  fontSize: "14px",
                  lineHeight: "24px",
                  color: "#06038D",
                  padding: "8px 16px",
                }),
              }}
            />
          </div>
          <div className="gallery__container">
            <Gallery
              photos={projects}
              onClick={openLightbox}
              direction={"column"}
            />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={projects.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title,
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        </div>
      </section>
      <FooterCTA />
      <SliderComponent type="project" />
      <SliderComponent type="blog" />
    </Layout>
  )
}

export default ProjectGallery
