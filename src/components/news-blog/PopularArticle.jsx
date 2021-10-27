import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { Blog1, Blog2, Blog3, Blog4 } from "../../utils/imgLoader"

const data = [
  {
    img: Blog1,
    name: "KINETICWALL & Children’s Museum Win GBA Award For LEED and Sustainability",
    to: "/",
  },
  {
    img: Blog2,
    name: "EXTECH To Attend NBAA BACE Conference Oct. 16-18 In Orlando Florida",
    to: "/",
  },
  {
    img: Blog3,
    name: "TECH Talks – Thermal Performance and Energy Savings with Polycarbonate Glazing Systems",
    to: "/",
  },
  {
    img: Blog4,
    name: "TECH Talks – Thermal Performance and Energy Savings with Polycarbonate Glazing Systems",
    to: "/",
  },
]

const PopularArticle = () => {
  return (
    <section className="widget-article">
      <h5 className="text-black">Popular Articles</h5>
      <hr />
      <ul>
        {data.map((item, idx) => (
          <li key={idx}>
            <img src={item.img} alt="blog item" />
            <Link to={item.to}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <p className="show-more">
        Show More
        <FontAwesomeIcon icon={faAngleDown} className="fa-lg ms-1" />
      </p>
    </section>
  )
}

export default PopularArticle
