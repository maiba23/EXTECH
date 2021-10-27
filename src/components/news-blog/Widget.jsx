import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

const Widget = ({ type, data }) => {
  return (
    <section className="widget">
      <h5 className="text-black">{type}</h5>
      <hr />
      <ul>
        {data.map((item, idx) => (
          <li key={idx}>
            <Link to={item.to}>
              {item.name}&nbsp;
              <span className="txt-light-gray">({item.cnt})</span>
            </Link>
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

export default Widget
