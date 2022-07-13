import React from "react";

const DashbaordHeader = () => {
  return (
    <header class="page-header">
      <div class="page-header__scroll" data-uk-sticky>
        <div class="uk-container uk-container-xlarge">
          <div class="page-header__inner">
            <div class="page-header__left">
              <div class="page-header__logo logo">
                <a class="logo__link" href="afripixels-home.html">
                  <h1>Afripixels</h1>
                </a>
              </div>
              <div class="page-header__search">
                <form class="uk-search uk-search-default uk-width-1-1">
                  <button
                    class="uk-search-icon-flip"
                    data-uk-search-icon
                  ></button>
                  <input
                    class="uk-input uk-search-input"
                    type="search"
                    placeholder="I'm looking for a..."
                  />
                </form>
              </div>
            </div>
            <div class="page-header__right">
              <div class="page-header__mainmenu">
                <nav class="mainmenu" data-uk-navbar="">
                  <ul class="uk-navbar-nav">
                    <li>
                      <a href="03_city-listings">
                        Listings
                        <span
                          class="uk-icon"
                          data-uk-icon="chevron-down"
                        ></span>
                      </a>
                      <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
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
                      <a href="08_blog-grid.html">
                        Pages
                        <span
                          class="uk-icon"
                          data-uk-icon="chevron-down"
                        ></span>
                      </a>
                      <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
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
              <div class="page-header__btn-menu">
                <a href="#offcanvas" data-uk-toggle data-uk-icon="menu"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashbaordHeader;
