import React, { useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
// import { selectData, selectList } from "../../utils/staticData"

const DownloadItem = ({ data }) => {
  return (
    <>
      {data.map((item, idx) => (
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
            Download
          </a>
        </div>
      ))}
    </>
  )
}
const TechTab = ({ list, info }) => {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <div className="tech-info__tab">
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          {list.map((item, idx) => (
            <Tab key={idx}>{item.label}</Tab>
          ))}
        </TabList>
        {Object.keys(info).map((key, index) => (
          <TabPanel key={index}>
            <DownloadItem data={info[key]} />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  )
}

export default TechTab
