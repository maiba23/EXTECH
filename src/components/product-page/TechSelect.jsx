import React, { useState } from "react"
import Select from "react-select"
import { Download } from "../../utils/imgLoader"
import { selectList, selectData } from "../../utils/staticData"
const Techselect = () => {
  const [tech, setTech] = useState(selectList[0])
  const handleClick = v => {
    setTech(v)
  }
  return (
    <div className="tech-info__select">
      <Select
        options={selectList}
        value={tech}
        onChange={v => handleClick(v)}
      />
      {selectData[tech.value].map((item, idx) => (
        <div className="download" key={idx}>
          <div className="download-info">
            <p className="file-name">{item.name}</p>
            <p className="file-content">{item.content}</p>
          </div>
          <button className="btn-second">
            <img src={Download} alt="download" />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Techselect
