import { Link } from "gatsby"
import React from "react"

const Cta = ({ data }) => (
  <section className={"section-cta " + data.type}>
    {data.type === "other" && <div className="blue-layer"></div>}
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-7">
          <h2 className={data.type === "other" ? "text-white" : "text-black"}>
            {data.heading}
          </h2>
          {data.content && <h6>{data.content}</h6>}
        </div>
        <div className="col-lg-5 btn-group">
          <Link
            className={
              data.type === "other" ? "btn-third me-3" : "btn-second me-3"
            }
            to="/"
          >
            {data.ctas[0]}
          </Link>
          <Link
            className={data.type === "other" ? "btn-fourth" : "btn-primary"}
            to="/"
          >
            {data.ctas[1]}
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default Cta
