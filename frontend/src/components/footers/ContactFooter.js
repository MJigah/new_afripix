import React from "react";

const ContactFooter = () => {
  return (
    <footer class="page-footer">
      <div class="page-footer__top">
        <div class="uk-container">
          <div class="uk-grid" data-uk-grid>
            <div class="uk-width-1-3@m uk-width-1-2@s">
              <div class="logo">
                <a class="logo__link" href="index.html">
                  <img
                    class="logo__img"
                    src="assets/img/logo.svg"
                    alt="Doremi"
                  />
                </a>
              </div>
              <p>
                Eiusmod tempora incididunt dolore
                <br /> magna aliqua sed enim lorem ipsum
                <br /> sit amet consectetur.
              </p>
              <ul class="uk-list">
                <li>
                  {" "}
                  <span>Email: </span>
                  <a href="mailto:support@domain.com">support@domain.com</a>
                </li>
                <li>
                  {" "}
                  <span>Phone: </span>
                  <a href="tel:104023513690">+1 (040) 2351 3690</a>
                </li>
              </ul>
            </div>
            <div class="uk-width-1-3@m uk-width-1-2@s uk-flex-last@m">
              <h3 class="uk-h3">Join Our Community</h3>
              <p>Continue exploring the great places.</p>
              <div
                class="uk-grid uk-grid-small uk-child-width-1-1"
                data-uk-grid
              >
                <div>
                  <img src="assets/img/AppStore.svg" alt="AppStore" />
                </div>
                <div>
                  <img src="assets/img/PlayStore.svg" alt="PlayStore" />
                </div>
              </div>
            </div>
            <div class="uk-width-1-3@m uk-visible@s">
              <div
                class="uk-grid uk-grid-small uk-child-width-1-2@s"
                data-uk-grid
              >
                <div>
                  <h3 class="uk-h3">About</h3>
                  <ul class="uk-nav uk-nav-default">
                    <li>
                      {" "}
                      <a href="page-typography.html">Our Company</a>
                    </li>
                    <li>
                      {" "}
                      <a href="page-typography.html">Carers</a>
                    </li>
                    <li>
                      {" "}
                      <a href="page-typography.html">Support</a>
                    </li>
                    <li>
                      {" "}
                      <a href="page-typography.html">How It Works</a>
                    </li>
                    <li>
                      {" "}
                      <a href="page-typography.html">Add a Place</a>
                    </li>
                    <li>
                      {" "}
                      <a href="page-typography.html">Disclaimers</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="uk-h3">Top Cities</h3>
                  <ul class="uk-nav uk-nav-default">
                    <li>
                      {" "}
                      <a href="page-typography.html">New York</a>
                    </li>
                    <li>
                      {" "}
                      <a href="page-typography.html">Paris</a>
                    </li>
                    <li>
                      {" "}
                      <a href="page-typography.html">London</a>
                    </li>
                    <li>
                      {" "}
                      <a href="page-typography.html">Singapore</a>
                    </li>
                    <li>
                      {" "}
                      <a href="page-typography.html">Bangkok</a>
                    </li>
                    <li>
                      {" "}
                      <a href="page-typography.html">Dubai</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-footer__middle">
        <div class="uk-container">
          <div class="uk-grid uk-child-width-1-2@s" data-uk-grid>
            <div>
              <h3 class="uk-h3">Signup For Latest News</h3>
              <div class="subscribe-form">
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
                    value="Form subscribe"
                  />
                  <div class="subscribe-form__box">
                    <input
                      class="uk-input"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                    <input
                      class="uk-button uk-button-danger"
                      type="submit"
                      value="Subscribe"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div>
              <h3 class="uk-h3">Connect Socially</h3>
              <ul class="social">
                <li>
                  <a href="#!">
                    <i class="fab fa-twitter"></i>
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i class="fab fa-facebook-f"></i>
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i class="fab fa-youtube"></i>
                    <span>YouTube</span>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i class="fab fa-instagram"></i>
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="page-footer__bottom">
        <div class="uk-container">
          <span>© 2020 Ecata City Portal - All rights reserved.</span>
        </div>
      </div>
      <div id="offcanvas" data-uk-offcanvas="overlay: true">
        <div class="uk-offcanvas-bar uk-flex uk-flex-column uk-flex-between">
          <button
            class="uk-offcanvas-close"
            type="button"
            data-uk-close=""
          ></button>
          <div>
            <div class="uk-margin">
              <div class="logo">
                <a class="logo__link" href="index.html">
                  <img
                    class="logo__img"
                    src="assets/img/logo.svg"
                    alt="Doremi"
                  />
                </a>
              </div>
            </div>
            <div class="uk-margin-medium">
              <ul class="uk-nav uk-nav-default uk-nav-parent-icon" data-uk-nav>
                <li class="uk-parent">
                  <a href="#!">Home</a>
                  <ul class="uk-nav-sub">
                    <li>
                      <a href="01_home.html">Home page 1</a>
                    </li>
                    <li>
                      <a href="02_home-header-style.html">Home page 2</a>
                    </li>
                  </ul>
                </li>
                <li class="uk-parent">
                  <a href="#!">Listings</a>
                  <ul class="uk-nav-sub">
                    <li>
                      <a href="03_city-listings.html">City listings map</a>
                    </li>
                    <li>
                      <a href="04_city-listings-no-map.html">City listings</a>
                    </li>
                    <li>
                      {" "}
                      <a href="05_city-place.html">City place</a>
                    </li>
                  </ul>
                </li>
                <li class="uk-parent">
                  <a href="#!">Pages</a>
                  <ul class="uk-nav-sub">
                    <li>
                      <a href="06_about.html">About</a>
                    </li>
                    <li>
                      <a href="08_blog-grid.html">Blog grid</a>
                    </li>
                    <li>
                      <a href="07_blog.html">Blog list</a>
                    </li>
                    <li>
                      <a href="09_blog-post.html">Blog post</a>
                    </li>
                    <li>
                      <a href="10_contact.html">Contacts</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div class="uk-margin uk-text-center">
              <a class="sing-in" href="#!">
                {" "}
                <i class="fas fa-sign-in-alt"></i>
                <span>Sign in or Register</span>
              </a>
            </div>
            <div class="uk-margin">
              {" "}
              <a class="uk-button uk-button-danger" href="#!">
                {" "}
                <span data-uk-icon="plus"></span>
                <span>List An Item</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
