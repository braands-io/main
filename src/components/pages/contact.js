import React, { memo, useState } from "react";
import Footer1 from "../components/footer1";
import { createGlobalStyle } from "styled-components";
import MyCustomSlider from "../components/MyCustomSlider";
import axios from "axios";
import { APP_DATA } from "../../core/utils";
import { toast } from "react-toastify";

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #fff !important;
    border-bottom: none;
  }
  header#myHeader .dropdown-toggle::after{
    color: rgba(255, 255, 255, .5);
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  .about-cards{
    padding: 0 14px;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  }
  .about-card__header{
    gap: 1.25em;
    padding-bottom: 1.65em;
  }
  .about-card__description {
   font-size: 1rem;
   color: #000;
   padding-bottom: 1.6rem;
   font-family: "Exo", "DM Sans", Helvetica, Arial, sans-serif;
  }
  .about-card__description > a{
    display: block;
    margin: 0 0 0.4rem;
  }
  .about-card__description > a:hover {
    color: #F20D6B;
  } 
  .about-image{
    height: 100%;
  }
  .about-image img{
    width: 90%;
    margin-right: auto;
    border-radius: 30px;
    -webkit-transform: translateX(0px);
    -ms-transform: translateX(0px);
    transform: translateX(0px);
    -webkit-animation: moreBtnAnim1 2s linear infinite;
    animation: moreBtnAnim1 2s linear infinite;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .about-image{
      display: none;
    }
  }
  @media (max-width: 576px) {
    .about-cards{
      margin-bottom: 3rem;
    }
  }
`;

const bg1 = {
  backgroundImage: "url('/img/background/header-bg.webp')",
};

const Contact = () => {
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    interest: "",
    budget: "",
    query: ""
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setInput({ ...input, [name]: val });
  }

  const saveContact = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("first_name", input.first_name);
    formData.append("last_name", input.last_name);
    formData.append("email", input.email);
    formData.append("interest", input.interest);
    formData.append("budget", input.budget);
    formData.append("query", input.query);

    axios.post(APP_DATA.API_URL + "/contactus", formData).then(res => {
      toast.success("Your request has been successfully submitted.");
      window.location.reload();
    }).catch(error => {
      toast.error("Some Error Occurred!!!")
    })
  }

  return (
    <div>
      <GlobalStyles />

      <section className="container mt-md-5 py-md-5 py-4">
        {/* <img src="/img/background/contact-header.jpg" width="100%" alt='Header' /> */}
        <div
          className="content-right d-flex top-header-card-container"
          style={bg1}
        >
          <MyCustomSlider />
        </div>
      </section>

      <div className="contact-section pt-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="mb-0 container text-center">
                <h1 className="second-title">Contact Us</h1>
                <p className="fs-20">
                  Unit of data stored on a digital ledger, called a blockchain,
                  that certifies a digital.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row d-flex justify-content-center">
                <div className="about-cards">
                  <div className="about-card">
                    <img
                      src="/img/location.jpg"
                      className="about-card__image"
                      alt=""
                    />

                    <div className="about-card__overlay">
                      <div className="about-card__header">
                        <svg
                          className="about-card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <div className="contactIconWrap">
                          <img src="/img/mapWhite.svg" alt="" />
                        </div>
                        <div className="about-card__header-text">
                          <h3 className="about-card__title">Address</h3>
                        </div>
                      </div>
                      <p className="about-card__description">
                        144-145, 1st Floor, JMD Megapolis, Sector-48, Gurugram, Haryana - 122018
                      </p>
                    </div>
                  </div>
                  <div className="about-card">
                    <img
                      src="/img/phone.jpg"
                      className="about-card__image"
                      alt=""
                    />
                    <div className="about-card__overlay">
                      <div className="about-card__header">
                        <svg
                          className="about-card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <div className="contactIconWrap">
                          <img src="/img/callWhite.svg" alt="" />
                        </div>
                        <div className="about-card__header-text">
                          <h3 className="about-card__title">Phone</h3>
                        </div>
                      </div>
                      <p className="about-card__description">
                        <a href="tel:700555927980">Landline:(+91) 124 429 1280</a>
                        <a href="tel:787238327981">Mobile: (+91) 8447215532</a>
                      </p>
                    </div>
                  </div>
                  <div className="about-card">
                    <img
                      src="/img/email.jpg"
                      className="about-card__image"
                      alt=""
                    />
                    <div className="about-card__overlay">
                      <div className="about-card__header">
                        <svg
                          className="about-card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <div className="contactIconWrap">
                          <img src="/img/mailWhite.svg" alt="" />
                        </div>
                        <div className="about-card__header-text">
                          <h3 className="mb-0 about-card__title">
                            Email Address
                          </h3>
                        </div>
                      </div>
                      <p className="about-card__description">
                        <a href="mailto:brands.io@gmail.com">
                          support@braands.io
                        </a>
                        <a href="mailto:brands.io@gmail.com">digitalsales@braands.io</a>
                      </p>
                    </div>
                  </div>
                  <div className="about-card">
                    <img
                      src="/img/location.jpg"
                      className="about-card__image"
                      alt=""
                    />
                    <div className="about-card__overlay">
                      <div className="about-card__header">
                        <svg
                          className="about-card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <div className="contactIconWrap">
                          <img src="/img/mapWhite.svg" alt="" />
                        </div>
                        <div className="about-card__header-text">
                          <h3 className="about-card__title">Support Compliance</h3>
                        </div>
                      </div>
                      <p className="about-card__description">
                        compliance@braands.io <br /> Mobile: (+91) 8447215532
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row about-content">
            <div className="col-0 col-lg-0 col-md-0 col-xl-6 carrer-content">
              <div className="carrer-image">
                <img src="/img/contact-us-carrer.jpg" width="100%" height="100%" />
              </div>
            </div>
            <div className="col-12 col-lg-12 col-md-12 col-xl-6">
              <div className="contact-form-section">
                <div className="contact-form">
                  <div className="form-top">
                    <h2>Contact form</h2>
                    <p>
                      Unit of data stored on a digital ledger, called a
                      blockchain.
                    </p>
                  </div>
                  <form method="post" onSubmit={saveContact}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            name="first_name"
                            value={input.first_name}
                            onChange={onChangeHandler}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            name="last_name"
                            value={input.last_name}
                            onChange={onChangeHandler}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email"
                            name="email"
                            value={input.email}
                            onChange={onChangeHandler}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <select className="form-select" name="interest"
                            value={input.interest}
                            onChange={onChangeHandler}>
                            <option selected>What you are interested?</option>
                            <option value="BSC">BSC</option>
                            <option value="ETH">ETH</option>
                            <option value="MATIC">MATIC</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <select className="form-select" name="budget"
                            value={input.budget}
                            onChange={onChangeHandler}>
                            <option selected>Select your budget?</option>
                            <option value="10">$10</option>
                            <option value="20">$20</option>
                            <option value="30">$30</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Describe about your query!..."
                            rows="6"
                            name="query"
                            value={input.query}
                            onChange={onChangeHandler}
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-md-12 text-end">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer1 />
    </div>
  );
};
export default memo(Contact);
