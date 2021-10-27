import * as React from "react"
import SocialLinks from "./SocialLinks"
import {
  translucent_walls,
  skylights,
  canopies,
  windows,
  interiors,
  specialty_exteriors,
  exclusive_systems,
  menus,
  company,
  services,
} from "../utils/staticData"
import NavSystemLink from "../components/shared/NavSystemLink"

const Footer = () => {
  return (
    <footer>
      <div className="footer-navbar">
        <div className="container ">
          <div className="row">
            <div className="col-lg-4">
              <h5 className="underline">EXTECH Systems</h5>
              <div className="d-flex">
                <div className="col-6">
                  <NavSystemLink
                    subtitle="Translucent Walls"
                    links={translucent_walls}
                  />
                  <NavSystemLink subtitle="Skylights" links={skylights} />
                  <NavSystemLink subtitle="Canopies" links={canopies} />
                </div>
                <div className="col-6">
                  <NavSystemLink subtitle="Windows" links={windows} />
                  <NavSystemLink subtitle="Interiors" links={interiors} />
                  <NavSystemLink
                    subtitle="Specialty Exteriors"
                    links={specialty_exteriors}
                  />
                  <NavSystemLink
                    subtitle="Exclusive Systems"
                    links={exclusive_systems}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <h5 className="underline">Quick Links</h5>
              <div className="d-flex">
                <div className="col-6">
                  <NavSystemLink subtitle="Menu" links={menus} />
                  <NavSystemLink subtitle="Services" links={services} />
                </div>
                <div className="col-6">
                  <NavSystemLink subtitle="Company" links={company} />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <h5 className="underline">Sign-up for our Newsletter</h5>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ipsum ipsum.
              </p>
              <form className="my-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="form-control my-2"
                  id="email"
                  placeholder="Email"
                />
                <button type="submit" className="btn-third w-100">
                  Confirm
                </button>
              </form>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
      <div className="bottombar text-center">
        <p>© {new Date().getFullYear()} Extech / Exterior Technologies Inc.</p>
      </div>
    </footer>
  )
}

export default Footer
