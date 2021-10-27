import React, { useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import { selectData, selectList } from "../../utils/staticData"

const DownloadItem = ({ data }) => {
  return (
    <>
      {data.map((item, idx) => (
        <div className="download" key={idx}>
          <div className="download-info">
            <p className="file-name">{item.name}</p>
            <p className="file-content">{item.content}</p>
          </div>
          <button className="btn-second">Download</button>
        </div>
      ))}
    </>
  )
}
const TechTab = () => {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <div className="tech-info__tab">
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          {selectList.map((item, idx) => (
            <Tab key={idx}>{item.label}</Tab>
          ))}
        </TabList>
        {Object.keys(selectData).map((key, index) => (
          <TabPanel key={index}>
            <DownloadItem data={selectData[key]} />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  )
}

export default TechTab
