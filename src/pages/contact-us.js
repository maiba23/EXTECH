import React, { useCallback, useReducer, useState, useRef } from "react"
import { Link } from "gatsby"
import validator from "validator"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import { Button, Modal } from "react-bootstrap"
import Slider from "react-slick"
import Select from "react-select"
import useFileUpload from "react-use-file-upload"
import Layout from "../layout"
import SocialLinks from "../layout/SocialLinks"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faAngleLeft,
  faAngleRight,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons"

import { Down, Up, Close } from "../utils/imgLoader"
import {
  FormInput,
  FormTextarea,
  Input,
} from "../components/shared/FormControl"
import {
  states,
  jobs,
  samples,
  sample_names,
  countries,
} from "../utils/staticData"

const containerStyle = {
  width: "100%",
  height: "439px",
}

const center = {
  lat: -3.745,
  lng: -38.523,
}

const ContactForm = () => {
  const [us_state, setUSState] = useState(states[0])
  const [job, setJob] = useState(jobs[0])

  const [state, setState] = useReducer(
    (old, action) => ({ ...old, ...action }),
    {
      name: { value: "", error: "" },
      phone: { value: "", error: "" },
      email: { value: "", error: "" },
      message: "",
    }
  )
  const { name, phone, email, message } = state
  const handleNameChange = useCallback(e => {
    setState({
      name: {
        value: e.target.value,
        error: e.target.value.length >= 3 ? "" : "Length must be at least 3",
      },
    })
  }, [])
  const handlePhoneChange = useCallback(e => {
    setState({
      phone: {
        value: e.target.value,
        error: validator.isMobilePhone(e.target.value)
          ? ""
          : "Invalid phone number",
      },
    })
  }, [])
  const handleEmailChange = useCallback(e => {
    setState({
      email: {
        value: e.target.value,
        error: validator.isEmail(e.target.value) ? "" : "Invalid email address",
      },
    })
  }, [])
  const handleMessage = useCallback(e => {
    e.preventDefault()
    setState({ [e.target.name]: e.target.value })
  }, [])

  const handleUSSate = value => {
    setUSState(value)
  }
  const handleJob = value => {
    setJob(value)
  }

  return (
    <div className="contact-form">
      <h4 className="text-black">Complete the form to send us a message.</h4>
      <form className="mt-4">
        <FormInput
          type="text"
          name="name"
          value={name.value}
          onChange={handleNameChange}
          placeholder="Your Name"
          error={name.error}
          label="Your Name"
          required
        />
        <FormInput
          type="tel"
          name="phone"
          value={phone.value}
          onChange={handlePhoneChange}
          placeholder="Phone"
          error={phone.error}
          label="Phone"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email.value}
          onChange={handleEmailChange}
          placeholder="Your Email"
          error={email.error}
          label="Your Email"
          required
        />
        <div className="select-group">
          <div className="mb-2">
            <label className="form-label">I am a(n)</label>
            <Select options={jobs} value={job} onChange={v => handleJob(v)} />
          </div>
          <div className="mb-2">
            <label className="form-label">State</label>
            <Select
              options={states}
              value={us_state}
              onChange={v => handleUSSate(v)}
            />
          </div>
        </div>
        <FormTextarea
          type="text"
          name="message"
          value={message}
          onChange={handleMessage}
          placeholder="Enter your message"
          label="Message"
        />
      </form>
      <button className="btn-primary mt-3">Send Message</button>
    </div>
  )
}

const ContactUs = () => {
  const [showMap, setShowMap] = useState(false)
  const [showOrder, setShowOrder] = useState(false)
  const [showQuote, setShowQuote] = useState(false)
  const [sample, setSample] = useState(sample_names[0])
  const [country, setCountry] = useState(countries[0])
  const [job, setJob] = useState(jobs[0])

  const [state, setState] = useReducer(
    (old, action) => ({ ...old, ...action }),
    {
      name: "",
      phone: "",
      email: "",
      question: "",
      street_address1: "",
      street_address2: "",
      project: "",
      project_address1: "",
      project_address2: "",
      city: "",
      region: "",
      postal: "",
      request: "",
      notes: "",
      bid_rate,
    }
  )
  const {
    name,
    phone,
    email,
    question,
    street_address1,
    street_address2,
    project,
    project_address1,
    project_address2,
    city,
    region,
    postal,
    request,
    notes,
    bid_rate,
  } = state

  const handleInput = useCallback(e => {
    e.preventDefault()
    setState({ [e.target.name]: e.target.value })
  }, [])

  const handleOrder = () => {
    setShowOrder(false)
  }
  const handleSample = value => {
    setSample(value)
  }
  const handleCountry = value => {
    setCountry(value)
  }
  const handleJob = value => {
    setJob(value)
  }

  const slider = useRef()
  const next = () => {
    slider.current.slickNext()
  }
  const previous = () => {
    slider.current.slickPrev()
  }
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  const {
    files,
    fileNames,
    fileTypes,
    totalSize,
    totalSizeInBytes,
    handleDragDropEvent,
    clearAllFiles,
    createFormData,
    setFiles,
    removeFile,
  } = useFileUpload()

  const inputRef = useRef()
  return (
    <Layout>
      <section className="contactus">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item link">
                <Link to="/" className="txt-gold">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item link">
                <Link to="/contact-us" className="text-white">
                  CONTACTS
                </Link>
              </li>
            </ol>
          </nav>
          <div className="container mt-4">
            <div className="row">
              <div className="col-sm-6 contactus-info">
                <h1 className="hero">Contact Us</h1>
                <h4 className="mt-3">We'd love to hear from you!</h4>
                <ul className="infos">
                  <li className="info-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <p>200 Bridge Street, Pittsburgh, PA 15223</p>
                  </li>
                  <li className="info-item">
                    <FontAwesomeIcon icon={faPhone} />
                    <p>
                      Toll Free: 800.500.8083 <br />
                      Local: 412.781.0991 <br />
                      Fax: 800.500.8012
                    </p>
                  </li>
                  <li className="info-item">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>info@extechinc.com</p>
                  </li>
                </ul>
                <SocialLinks />
                <div className="action-btns">
                  <button
                    className="btn-third"
                    onClick={() => setShowOrder(true)}
                  >
                    Order a Sample
                  </button>
                  <button
                    className="btn-third"
                    onClick={() => setShowQuote(true)}
                  >
                    Quote Request
                  </button>
                </div>
              </div>
              <div className="col-sm-6">
                <ContactForm />
              </div>
            </div>
            <p className="link show-map" onClick={() => setShowMap(!showMap)}>
              {showMap ? (
                <span>
                  HIDE MAP
                  <img src={Up} alt="up" />
                </span>
              ) : (
                <span>
                  SHOW MAP
                  <img src={Down} alt="down" />
                </span>
              )}
            </p>
          </div>
        </div>
      </section>
      {showMap && (
        <section className="google-map">
          <LoadScript googleMapsApiKey="AIzaSyC0Ts64d0td1ZRpo4LGAe4ts2s-6HxpHFk">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </section>
      )}
      <section>
        <ContactForm />
      </section>
      <Modal show={showOrder} onHide={() => setShowOrder(false)}>
        <Modal.Body>
          <div className="d-flex justify-content-end">
            <img
              src={Close}
              alt="close"
              onClick={() => setShowOrder(false)}
              className="close"
            />
          </div>
          <h1>ORDER SAMPLE</h1>
          <p className="mt-3 mb-4">
            Working on a project that might incorporate one of our systems?
            Complete this form to have a system sample shipped to you.
          </p>
          <Slider ref={c => (slider.current = c)} {...settings}>
            {samples.map((item, index) => (
              <div key={index} className="sample-item">
                <img src={item} alt="sample" />
              </div>
            ))}
          </Slider>
          <div className="arrow-btns">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="txt-light-gray fa-2x "
              onClick={previous}
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              className="txt-light-gray fa-2x"
              onClick={next}
            />
          </div>
          <div className="contact-form">
            <h5 className="underline mt-5">Contact Information</h5>
            <form>
              <div className="mb-2">
                <label className="form-label">
                  Samples (You may select more than one)
                </label>
                <Select
                  options={sample_names}
                  value={sample}
                  onChange={v => handleSample(v)}
                />
              </div>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={handleInput}
                placeholder="Your Name"
                label="Your Name"
              />
              <Input
                type="email"
                name="email"
                value={email}
                onChange={handleInput}
                placeholder="Your Email"
                label="Your Email"
              />
              <Input
                type="tel"
                name="phone"
                value={phone}
                onChange={handleInput}
                placeholder="Phone"
                label="Phone"
              />
              <FormTextarea
                type="text"
                name="question"
                value={question}
                onChange={handleInput}
                placeholder="How can we help? Providing a brief project description can ensure we send the most appropriate sample."
                label="Questions or Project Details:"
              />
            </form>
            <h5 className="underline mt-4">Sample Shipping Address</h5>
            <form>
              <Input
                type="text"
                name="street_address1"
                value={street_address1}
                onChange={handleInput}
                placeholder="Address Line 1"
                label="Strees Address"
              />
              <Input
                type="text"
                name="street_address2"
                value={street_address2}
                onChange={handleInput}
                placeholder="Address Line 2"
                label="Address Line 2"
              />
              <div className="select-group">
                <div className="mb-2">
                  <label className="form-label">Country</label>
                  <Select
                    options={countries}
                    value={country}
                    onChange={v => handleCountry(v)}
                  />
                </div>
                <Input
                  type="text"
                  name="city"
                  value={city}
                  onChange={handleInput}
                  placeholder="Project City"
                  label="City"
                />
              </div>
              <div className="select-group">
                <Input
                  type="text"
                  name="region"
                  value={region}
                  onChange={handleInput}
                  placeholder="State"
                  label="State / Province / Region"
                />
                <Input
                  type="text"
                  name="postal"
                  value={postal}
                  onChange={handleInput}
                  label="Zip Postal Code"
                />
              </div>
            </form>
            <Button onClick={handleOrder} className="mt-4">
              Order a Sample
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showQuote} onHide={() => setShowQuote(false)}>
        <Modal.Body>
          <div className="d-flex justify-content-end">
            <img
              src={Close}
              alt="close"
              onClick={() => setShowQuote(false)}
              className="close"
            />
          </div>
          <h1>QUOTE REQUEST</h1>
          <p className="mt-3 mb-4">Complete this form to request a quote.</p>
          <div className="contact-form">
            <h5 className="underline mt-4">Contact Information</h5>
            <form>
              <Input
                type="text"
                name="request"
                value={request}
                onChange={handleInput}
                placeholder="Title of your request"
                label="Title"
              />
              <Input
                type="text"
                name="name"
                value={name}
                onChange={handleInput}
                placeholder="Your Name"
                label="Your Name"
              />
              <Input
                type="email"
                name="email"
                value={email}
                onChange={handleInput}
                placeholder="Your Email"
                label="Your Email"
              />
              <Input
                type="tel"
                name="phone"
                value={phone}
                onChange={handleInput}
                placeholder="Phone"
                label="Phone"
              />
              <div className="mb-2">
                <label className="form-label">I am(n)</label>
                <Select
                  options={jobs}
                  value={job}
                  onChange={v => handleJob(v)}
                />
              </div>
            </form>
            <h5 className="underline mt-4">Project Details</h5>
            <form>
              <Input
                type="text"
                name="project"
                value={project}
                onChange={handleInput}
                placeholder="Enter Project Name"
                label="Project Name"
              />
              <Input
                type="text"
                name="project_address1"
                value={project_address1}
                onChange={handleInput}
                placeholder="Address Line 1"
                label="Project Address"
              />
              <Input
                type="text"
                name="project_address2"
                value={project_address2}
                onChange={handleInput}
                placeholder="Address Line 2"
                label="Address Line 2"
              />
              <div className="select-group">
                <div className="mb-2">
                  <label className="form-label">Country</label>
                  <Select
                    options={countries}
                    value={country}
                    onChange={v => handleCountry(v)}
                  />
                </div>
                <Input
                  type="text"
                  name="city"
                  value={city}
                  onChange={handleInput}
                  placeholder="Project City"
                  label="City"
                />
              </div>
              <div className="select-group">
                <Input
                  type="text"
                  name="region"
                  value={region}
                  onChange={handleInput}
                  placeholder="State"
                  label="State / Province / Region"
                />
                <Input
                  type="text"
                  name="postal"
                  value={postal}
                  onChange={handleInput}
                  label="Zip Postal Code"
                />
              </div>
            </form>
            <h5 className="underline mt-4">Additional Information</h5>
            <form>
              <Input
                type="number"
                name="bid_rate"
                value={bid_rate}
                onChange={handleInput}
                placeholder="Enter Bid Rate"
                label="Bid Rate"
              />
              <FormTextarea
                type="text"
                name="notes"
                value={notes}
                onChange={handleInput}
                placeholder="What should we know about this project?"
                label="Project Notes"
              />
              <label className="form-label">Project Files</label>
              <div
                className="file-upload"
                onDragEnter={handleDragDropEvent}
                onDragOver={handleDragDropEvent}
                onDrop={e => {
                  handleDragDropEvent(e)
                  setFiles(e, "a")
                }}
              >
                <p>Drop files here or</p>
                <button
                  className="btn-second my-2"
                  onClick={() => inputRef.current.click()}
                >
                  Select Files
                </button>
                <p>
                  Upload drawings and/or specifications. <br />
                  (.pdf format is preferred)
                </p>
                <input
                  ref={inputRef}
                  type="file"
                  multiple
                  style={{ display: "none" }}
                  onChange={e => setFiles(e, "a")}
                />
              </div>
              <div className="file-list">
                <ul>
                  {fileNames.map(name => (
                    <li key={name}>
                      <strong className="me-2">{name}</strong>
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        onClick={() => removeFile(name)}
                        className="text-danger"
                      />
                    </li>
                  ))}
                </ul>
                {files.length > 0 && (
                  <ul className="mt-2">
                    <li>
                      <span className="fw-bold">File types found:&nbsp;</span>
                      {fileTypes.join(", ")}
                    </li>
                    <li>
                      <span className="fw-bold">Total Size:&nbsp;</span>
                      {totalSize}
                    </li>
                    <li>
                      <span className="fw-bold">Total Bytes:&nbsp;</span>
                      {totalSizeInBytes}
                    </li>
                    <li className="clear-all">
                      <button
                        className="btn-danger"
                        onClick={() => clearAllFiles()}
                      >
                        Clear All
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </form>
            <Button onClick={handleOrder} className="mt-4">
              Order a Sample
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </Layout>
  )
}

export default ContactUs
