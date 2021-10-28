import React from "react"
import NavSystemLink from "../../components/shared/NavSystemLink"
import { ServiceHover } from "../../utils/imgLoader"
import {
  translucent_walls,
  skylights,
  canopies,
  windows,
  interiors,
  specialty_exteriors,
  exclusive_systems,
} from "../../utils/staticData"

const NavSystemTab = () => {
  return (
    <div className="dropdown-content">
      <div className="container">
        <div className="black-back">
          <div className="dropmenu">
            <h5 className="underline">EXTECH Systems</h5>
            <div className="d-flex">
              <div className="col-lg-4">
                <NavSystemLink
                  subtitle="Translucent Walls"
                  links={translucent_walls}
                />
                <NavSystemLink subtitle="Canopies" links={canopies} />
              </div>
              <div className="col-lg-4">
                <NavSystemLink subtitle="Skylights" links={skylights} />
                <NavSystemLink
                  subtitle="Specialty Exteriors"
                  links={specialty_exteriors}
                />
                <NavSystemLink
                  subtitle="Exclusive Systems"
                  links={exclusive_systems}
                />
              </div>
              <div className="col-lg-4">
                <NavSystemLink subtitle="Windows" links={windows} />
                <NavSystemLink subtitle="Interiors" links={interiors} />
              </div>
            </div>
          </div>
          <div className="hover-img">
            <img src={ServiceHover} alt="hover" />
          </div>
        </div>
      </div>
      <div className="mobile-view">
        <NavSystemLink
          type="mobile"
          subtitle="Translucent Walls"
          links={translucent_walls}
        />
        <NavSystemLink type="mobile" subtitle="Canopies" links={canopies} />
      </div>
    </div>
  )
}

export default NavSystemTab
