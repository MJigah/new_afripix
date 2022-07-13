import React from "react";

const AboutHeader = () => {
  return (
    <>
      <header className="page-header">
        <div className="page-header__scroll" data-uk-sticky>
          <div className="uk-container uk-container-xlarge">
            <div className="page-header__inner about-inner">
              <div className="page-header__left">
                <div className="page-header__logo logo">
                  <a className="logo__link" href="afripixels-home.html" />
                  <h1>Afripixels</h1>
                </div>
              </div>
              <div className="page-header__right">
                <div className="page-header__mainmenu">
                  <nav className="mainmenu" data-uk-navbar="">
                    <ul className="uk-navbar-nav">
                      <li>
                        <a href="afripixels-home.html"> Home</a>
                      </li>
                      <li>
                        <a href="03_city-listings">
                          Listings
                          <span
                            className="uk-icon"
                            data-uk-icon="chevron-down"
                          ></span>
                        </a>
                        <div className="uk-navbar-dropdown">
                          <ul className="uk-nav uk-navbar-dropdown-nav">
                            <li>
                              <a href="03_city-listings.html">
                                City listings map
                              </a>
                            </li>
                            <li>
                              <a href="04_city-listings-no-map.html">
                                City listings
                              </a>
                            </li>
                            <li>
                              {" "}
                              <a href="05_city-place.html">City place</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        {" "}
                        <a href="08_blog-grid.html">
                          Pages
                          <span
                            className="uk-icon"
                            data-uk-icon="chevron-down"
                          ></span>
                        </a>
                        <div className="uk-navbar-dropdown">
                          <ul className="uk-nav uk-navbar-dropdown-nav">
                          <li>
                              <a href="/about">About</a>
                            </li>
                            <li>
                              <a href="/contact">Contacts</a>
                            </li>
                            <li>
                              <a href="/signin">Signin</a>
                            </li>
                            <li>
                              <a href="/dashboard">Dashboard</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="page-header__sing-in">
                  <a className="sing-in" href="afripixels-signin.html">
                    {" "}
                    <i className="fas fa-sign-in-alt"></i>
                    <span>Sign in or Register</span>
                  </a>
                </div>
                <div className="page-header__btn-menu">
                  <a href="#offcanvas" data-uk-toggle data-uk-icon="menu"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AboutHeader;
