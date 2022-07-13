import React from "react";

const AboutMain = () => {
  return (
    <>
      <main className="page-main">
        <div className="section-banner">
          <div className="section-banner__bg about-banner">
            <div className="uk-container">
              <div className="section-banner__content">
                <div className="section-banner__breadcrumb">
                  <ul className="uk-breadcrumb">
                    <li>
                      <a href="afripixels-home.html">Home</a>
                    </li>
                    <li>
                      <span>About us</span>
                    </li>
                  </ul>
                </div>
                <div className="section-banner__title">About Afripixels</div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-about">
          <div className="uk-section-large uk-container about-section-padding">
            <div
              className="uk-grid uk-grid-large uk-child-width-1-2@m"
              data-uk-grid
            >
              <div>
                <div className="section-content">
                  <div className="uk-h1">
                    Sharing the African Community
                    <br /> to the world
                  </div>
                  <p>
                    Photographers and Image enthusiasts all over the world share
                    their creative african heritage through the web.
                  </p>
                  <blockquote>
                    <div className="uk-h4">Mission Statement</div>
                    <p>
                      Bringing the African community together with <br />
                      images that speak of our culture.
                    </p>
                  </blockquote>
                </div>
              </div>
              <div>
                <div className="uk-grid uk-grid-small" data-uk-grid>
                  <div className="uk-width-1-1">
                    <div className="uk-cover-container uk-height-medium uk-border-rounded">
                      <img src="assets/img/img-about-1.jpg" alt data-uk-cover />
                    </div>
                  </div>
                  <div className="uk-width-2-3">
                    <div className="uk-cover-container uk-height-medium uk-border-rounded">
                      <img src="assets/img/img-about-2.jpg" alt data-uk-cover />
                    </div>
                  </div>
                  <div className="uk-width-1-3">
                    <div className="uk-cover-container uk-height-small uk-border-rounded">
                      <img src="assets/img/img-about-3.jpg" alt data-uk-cover />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-benefits">
          <div className="uk-section uk-container">
            <div
              className="uk-grid uk-grid-large uk-child-width-1-2@m"
              data-uk-grid
            >
              <div>
                <div className="uk-text-center">
                  <img src="assets/img/img-benefits.png" alt="img-benefits" />
                </div>
              </div>
              <div>
                <div className="section-content">
                  <div className="uk-h1">Why Use Afripixels</div>
                  <ul className="benefit-list">
                    <li>
                      <div className="benefit-item">
                        <div className="benefit-item__icon">
                          <span className="icon-note"></span>
                        </div>
                        <div className="benefit-item__desc">
                          <div className="benefit-item__title">
                            It's the first of its kind
                          </div>
                          <div className="benefit-item__text">
                            Eiusmod tempora incididunt dolore magna aliqua sed
                            enim lorem ipsum sit amet consectetur.
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="benefit-item">
                        <div className="benefit-item__icon">
                          <span className="icon-badge"></span>
                        </div>
                        <div className="benefit-item__desc">
                          <div className="benefit-item__title">
                            Get Your Listings Promoted
                          </div>
                          <div className="benefit-item__text">
                            Eiusmod tempora incididunt dolore magna aliqua sed
                            enim lorem ipsum sit amet consectetur.
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="benefit-item">
                        <div className="benefit-item__icon">
                          <span className="icon-bubbles"></span>
                        </div>
                        <div className="benefit-item__desc">
                          <div className="benefit-item__title">
                            Premium Paying Visitor Sales
                          </div>
                          <div className="benefit-item__text">
                            Eiusmod tempora incididunt dolore magna aliqua sed
                            enim lorem ipsum sit amet consectetur.
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-reviews">
          <div className="uk-section-large testimonial-padding">
            <div className="uk-container uk-container-xlarge">
              <div className="section-title uk-text-center">
                <span>Read The User's Testimonials</span>
                <h3 className="uk-h3">What People Saying</h3>
              </div>
              <div className="section-content">
                <div data-uk-slider>
                  <div className="uk-position-relative" tabIndex={-1}>
                    <ul className="uk-slider-items uk-grid uk-child-width-1-1 uk-child-width-1-2@m uk-child-width-1-3@xl">
                      <li>
                        <div className="review-item">
                          <div className="review-item__box">
                            <div className="review-item__icon">
                              <img
                                src="assets/img/img-review-1.png"
                                alt="review"
                              />
                            </div>
                            <div className="review-item__desc">
                              <div className="review-item__text">
                                <p>
                                  Eiusmod temporl incididunt utys labore dolor
                                  magna aliqua sed enim audy. Lorem ipsum do
                                  dolor sit amet consectetur adipisicing elit
                                  sed eiusmod tempor incididunt.
                                </p>
                              </div>
                              <div className="review-item__info">
                                <div className="review-item__user">
                                  <div className="review-item__user-name">
                                    Oliver Zendu
                                  </div>
                                  <div className="review-item__posititon">
                                    Client Bangkok
                                  </div>
                                </div>
                                <div className="review-item__stars">
                                  <ul>
                                    <li>
                                      <i className="far fa-star"></i>
                                    </li>
                                    <li>
                                      <i className="far fa-star"></i>
                                    </li>
                                    <li>
                                      <i className="far fa-star"></i>
                                    </li>
                                    <li>
                                      <i className="far fa-star"></i>
                                    </li>
                                    <li>
                                      <i className="far fa-star"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="review-item">
                          <div className="review-item__box">
                            <div className="review-item__icon">
                              <img
                                src="assets/img/img-review-2.png"
                                alt="review"
                              />
                            </div>
                            <div className="review-item__desc">
                              <div className="review-item__text">
                                <p>
                                  Eiusmod temporl incididunt utys labore dolor
                                  magna aliqua sed enim audy. Lorem ipsum do
                                  dolor sit amet consectetur adipisicing elit
                                  sed eiusmod tempor incididunt.
                                </p>
                              </div>
                              <div className="review-item__info">
                                <div className="review-item__user">
                                  <div className="review-item__user-name">
                                    Ameda Hilson
                                  </div>
                                  <div className="review-item__posititon">
                                    Client USA
                                  </div>
                                </div>
                                <div className="review-item__stars">
                                  <ul>
                                    <li>
                                      <i className="far fa-star"></i>
                                    </li>
                                    <li>
                                      <i className="far fa-star"></i>
                                    </li>
                                    <li>
                                      <i className="far fa-star"></i>
                                    </li>
                                    <li>
                                      <i className="far fa-star"></i>
                                    </li>
                                    <li>
                                      <i className="far fa-star"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="review-item">
                          <div className="review-item__box">
                            <div className="review-item__icon">
                              <img
                                src="assets/img/img-review-3.png"
                                alt="review"
                              />
                            </div>
                            <div className="review-item__desc">
                              <div className="review-item__text">
                                <p>
                                  Eiusmod temporl incididunt utys labore dolor
                                  magna aliqua sed enim audy. Lorem ipsum do
                                  dolor sit amet consectetur adipisicing elit
                                  sed eiusmod tempor incididunt.
                                </p>
                              </div>
                              <div className="review-item__info">
                                <div className="review-item__user">
                                  <div className="review-item__user-name">
                                    Linus William
                                  </div>
                                  <div className="review-item__posititon">
                                    Client London
                                  </div>
                                </div>
                                <div className="review-item__stars">
                                  <ul>
                                    <li>
                                      <i className="far fa-star"></i>
                                    </li>
                                    <li>
                                      <i className="far fa-star"></i>
                                    </li>
                                    <li>
                                      <i className="far fa-star"></i>
                                    </li>
                                    <li>
                                      <i className="far fa-star"></i>
                                    </li>
                                    <li>
                                      <i className="far fa-star"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="review-item">
                          <div className="review-item__box">
                            <div className="review-item__icon">
                              <img
                                src="assets/img/img-review-1.png"
                                alt="review"
                              />
                            </div>
                            <div className="review-item__desc">
                              <div className="review-item__text">
                                <p>
                                  Eiusmod temporl incididunt utys labore dolor
                                  magna aliqua sed enim audy. Lorem ipsum do
                                  dolor sit amet consectetur adipisicing elit
                                  sed eiusmod tempor incididunt.
                                </p>
                              </div>
                              <div className="review-item__info">
                                <div className="review-item__user">
                                  <div className="review-item__user-name">
                                    Oliver Zendu
                                  </div>
                                  <div className="review-item__posititon">
                                    Client Bangkok
                                  </div>
                                </div>
                                <div className="review-item__stars">
                                  <ul>
                                    <li>
                                      <i className="far fa-star"></i>
                                    </li>
                                    <li>
                                      <i className="far fa-star"></i>
                                    </li>
                                    <li>
                                      <i className="far fa-star"></i>
                                    </li>
                                    <li>
                                      <i className="far fa-star"></i>
                                    </li>
                                    <li>
                                      <i className="far fa-star"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin-medium-top"></ul>
                </div>
              </div>
            </div>
            <div className="uk-container">
              <div className="uk-margin-large-top uk-text-center">
                <div className="section-content">
                  <div data-uk-slider></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutMain;
