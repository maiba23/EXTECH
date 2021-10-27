import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../layout"
import ReactPaginate from "react-paginate"
import CTASection from "../components/shared/CTASection"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import Sidebar from "../components/shared/Sidebar"
import { blogs, ctaData2 } from "../utils/staticData"

const Blogs = ({ data }) => {
  return (
    <>
      {data.img ? (
        <article>
          <div className="row">
            <div className="col-lg-5">
              <img src={data.img} alt="blog item" className="post-image" />
            </div>
            <div className="col-lg-7">
              <div className="blog-item">
                <header>
                  <p className="link txt-gold">{data.kicker}</p>
                  <Link to={data.to}>
                    <h5 className="text-black">{data.title}</h5>
                  </Link>
                </header>
                <p className="post-content">{data.content}</p>
                <footer>
                  <span className="post-author txt-blue link">
                    {data.author}
                  </span>
                  <span className="post-date txt-light-gray link">
                    {data.date}
                  </span>
                </footer>
              </div>
            </div>
          </div>
        </article>
      ) : (
        <article>
          <div className="blog-item">
            <header>
              <p className="link txt-gold">{data.kicker}</p>
              <Link to={data.to}>
                <h5 className="text-black">{data.title}</h5>
              </Link>
            </header>
            <p className="text-black">{data.content}</p>
            <footer>
              <span className="post-author txt-blue link">{data.author}</span>
              <span className="post-date txt-light-gray link">{data.date}</span>
            </footer>
          </div>
        </article>
      )}
    </>
  )
}

const NewsBlog = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const PER_PAGE = 3
  const offset = currentPage * PER_PAGE
  const currentPageData = blogs.slice(offset, offset + PER_PAGE)
  const pageCount = Math.ceil(blogs.length / PER_PAGE)

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage)
  }

  return (
    <Layout type="secondary">
      <section className="hero-section news-hero">
        <div className="container">
          <h1 className="hero">
            <span className="typo-txt">Latest News & Blog Posts</span>
          </h1>
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
            <Link to="/case-studies" className="text-black">
              OUR BLOG & LATEST NEWS
            </Link>
          </li>
        </ol>
      </nav>
      <section className="section-blogs">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              {currentPageData.map((item, idx) => (
                <Blogs data={item} key={idx} />
              ))}
              <ReactPaginate
                previousLabel={
                  <FontAwesomeIcon icon={faAngleLeft} className="fa-lg" />
                }
                nextLabel={
                  <FontAwesomeIcon icon={faAngleRight} className="fa-lg" />
                }
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination-link"}
                nextLinkClassName={"pagination-link"}
                disabledClassName={"pagination-link__disabled"}
                activeClassName={"pagination-link__active"}
              />
            </div>
            <Sidebar />
          </div>
        </div>
      </section>
      <CTASection data={ctaData2} />
    </Layout>
  )
}

export default NewsBlog
