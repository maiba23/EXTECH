import React from "react"
import Signup from "../news-blog/Signup"
import Widget from "../news-blog/Widget"
import PopularArticle from "../news-blog/PopularArticle"

const categories = [
  {
    name: "Architecture",
    cnt: 34,
    to: "/",
  },
  {
    name: "Blog Posts",
    cnt: 12,
    to: "/",
  },
  {
    name: "Case Study",
    cnt: 86,
    to: "/",
  },
  {
    name: "CEU",
    cnt: 44,
    to: "/",
  },
  {
    name: "Geolam",
    cnt: 56,
    to: "/",
  },
  {
    name: "KINETICWALL",
    cnt: 43,
    to: "/",
  },
  {
    name: "LIGHTWALL",
    cnt: 14,
    to: "/",
  },
  {
    name: "News",
    cnt: 134,
    to: "/",
  },
  {
    name: "Photos",
    cnt: 86,
    to: "/",
  },
]
const archives = [
  { name: "December 2020", cnt: 34, to: "/" },
  {
    name: "November 2020",
    cnt: 12,
    to: "/",
  },
  {
    name: "October 2020)",
    cnt: 86,
    to: "/",
  },
  {
    name: "September 2020",
    cnt: 44,
    to: "/",
  },
  {
    name: "August 2020",
    cnt: 56,
    to: "/",
  },
  {
    name: "July 2020",
    cnt: 43,
    to: "/",
  },
  {
    name: "June 2020",
    cnt: 14,
    to: "/",
  },
  {
    name: "May 2020",
    cnt: 134,
    to: "/",
  },
  {
    name: "April 2020",
    cnt: 86,
    to: "/",
  },
]

const Sidebar = ({ type }) => {
  return (
    <aside className="col-lg-3 col-md-4">
      {!type && <Signup />}
      <Widget data={categories} type="Categories" />
      <PopularArticle />
      <Widget data={archives} type="Archives" />
    </aside>
  )
}

export default Sidebar
