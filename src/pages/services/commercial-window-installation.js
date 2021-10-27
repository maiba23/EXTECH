import React, { useCallback, useReducer } from "react"
import ServiceTemplate from "../../components/services/service-template"
import { FormInput, FormTextarea } from "../../components/shared/FormControl"
import { Installation1, Installation2 } from "../../utils/imgLoader"

const data = {
  type: "installation",
  heading: "Installation",
  to: "commercial-window-installation",
  quote: `Due to the flexibility, lightness, and prefabrication of our products, our systems are incredibly easy to install by any crew.`,
}

const Services = () => {
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
  return (
    <ServiceTemplate data={data}>
      <div className="container promo">
        <div className="row">
          <div className="col-sm-6 promo-img">
            <img src={Installation1} alt="custom" />
          </div>
          <div className="col-sm-6 promo-text">
            {`If you need beginning-to-end installation services, EXTECH works with a network of qualified contractors across the country that can provide installation for your project. We also provide a warranty on all EXTECH installations. Please Contact us for more details.`}
          </div>
        </div>
        <div className="row flex-sm-row-reverse">
          <div className="col-sm-6 promo-img h-100">
            <img src={Installation2} alt="custom" />
          </div>
          <div className="col-sm-6 promo-text">
            <div className="contact-form d-block p-0">
              <h1 className="text-black text-uppercase">
                Become a Network Partner
              </h1>
              <p className="my-3 text-black">
                Interested in joining EXTECH's nationwide network of qualified
                installers? Please complete the following form to start the
                process of becoming a part of the EXTECH team.
              </p>
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
                <FormTextarea
                  type="text"
                  name="message"
                  value={message}
                  onChange={handleMessage}
                  placeholder="What should we know about this project?"
                  label="In brief, detail your experience with installing façade, window, skylight, and canopy systems *"
                />
              </form>
              <button className="btn-primary mt-3">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </ServiceTemplate>
  )
}

export default Services
