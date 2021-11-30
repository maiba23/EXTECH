import React, { useState } from "react"
import Select from "react-select"
import { Download } from "../../utils/imgLoader"
// import { selectList, selectData } from "../../utils/staticData"

const Techselect = ({ list, info }) => {
  const [tech, setTech] = useState(list[0])
  const handleClick = v => {
    setTech(v)
  }
  return (
    <div className="tech-info__select">
      <Select options={list} value={tech} onChange={v => handleClick(v)} />
      {info[tech.value].map((item, idx) => (
        <div className="download" key={idx}>
          <div className="download-info">
            <p className="file-name">{item.title}</p>
            <p className="file-content">{item.description}</p>
          </div>
          <a
            className="btn-second"
            href={item.file.url}
            target="_blank"
            rel="noreferrer"
          >
            <img src={Download} alt="download" />
          </a>
        </div>
      ))}
    </div>
  )
}

export default Techselect
