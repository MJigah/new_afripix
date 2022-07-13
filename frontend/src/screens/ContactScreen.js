import React from "react";
import { Link } from 'react-router-dom'

const ContactScreen = () => {
  return (
    <>
      <div class="page-wrapper">
      <main class="page-main">
      <div class="section-banner">
        <div class="section-banner__bg contact-banner">
          <div class="uk-container">
            <div class="section-banner__content">
              <div class="section-banner__breadcrumb">
                <ul class="uk-breadcrumb">
                  <li>
                    <Link to="afripixels-home.html">Home</Link>
                  </li>
                  <li>
                    <span>Contact Us</span>
                  </li>
                </ul>
              </div>
              <div class="section-banner__title">Contact Us </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-content">
        <div class="uk-section-large uk-container">
          <div class="uk-grid uk-grid-medium" data-uk-grid>
            <div class="uk-width-1-3@m">
              <div class="contact-card">
                <div class="contact-card__box">
                  <div class="contact-card__icon">
                    <span class="icon-location-pin"></span>
                  </div>
                  <div class="contact-card__desc">
                    <div class="contact-card__title">Office Address</div>
                    <div class="contact-card__value">
                      No 33 Nouakchott Street, Wuse zone 1, FCT-Abuja, Nigeria
                    </div>
                    <Link class="contact-card__link" to="#!">
                      Get Directions
                    </Link>
                  </div>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-card__box">
                  <div class="contact-card__icon">
                    <span class="icon-call-in"></span>
                  </div>
                  <div class="contact-card__desc">
                    <div class="contact-card__title">Our Phone</div>
                    <Link class="contact-card__value" to="tel:1009236985">
                      +1 (009) 236 985
                    </Link>
                    <Link class="contact-card__value" to="tel:10092369869">
                      +1 (009) 236 986-9
                    </Link>
                  </div>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-card__box">
                  <div class="contact-card__icon">
                    <span class="icon-envelope-open"></span>
                  </div>
                  <div class="contact-card__desc">
                    <div class="contact-card__title">Email Address</div>
                    <Link
                      class="contact-card__value"
                      to="mailto:support@my-domain.com"
                    >
                      support@my-domain.com
                    </Link>
                    <Link
                      class="contact-card__value"
                      to="mailto:listings@ecata-dir.com"
                    >
                      listings@ecata-dir.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="uk-width-2-3@m">
              <h2 class="uk-h2">Get in touch with us</h2>
              <p>
                Continue exploring our great Pictures. Eiusmod temporl
                incididunt utys labore
                <br /> dolore magna aliqua sed enim audy lorem ipsum dolor.
              </p>
              <form>
                <input
                  type="hidden"
                  name="project_name"
                  value="Ecata - City Portal"
                />
                <input
                  type="hidden"
                  name="admin_email"
                  value="chernyh.mihail@gmail.com"
                />
                <input
                  type="hidden"
                  name="form_subject"
                  value="Form Contacts page"
                />
                <div
                  class="uk-grid uk-grid-medium uk-child-width-1-2@s"
                  data-uk-grid
                >
                  <div>
                    {" "}
                    <input
                      class="uk-input"
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    {" "}
                    <input
                      class="uk-input"
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div>
                    {" "}
                    <input
                      class="uk-input"
                      type="text"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    {" "}
                    <input
                      class="uk-input"
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div class="uk-width-1-1">
                    <input
                      class="uk-input"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div class="uk-width-1-1">
                    <textarea
                      class="uk-textarea"
                      name="message"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div class="uk-width-1-1">
                    <button
                      class="uk-button uk-button-danger uk-button-large"
                      type="submit"
                    >
                      Send message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>      </div>
    </>
  );
};

export default ContactScreen;
