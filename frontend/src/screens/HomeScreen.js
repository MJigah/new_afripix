import React from "react";
import data from "../data.js";
import Image from "../components/Image.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const newImages = (some) => {
    const sortedImage = data.images.sort((x, y) => {
      return y.visited - x.visited;
    });
    return sortedImage;
  };
  const favImages = newImages();
  const {user} = useSelector((state) => state.auth);
  // const { error, loading, userInfo } = userRegister;
  return (
    <div>
      <main className="page-main">
        <div className="section-banner section-banner--home-2">
          <div className="container-cover home-banner-container">
            <div className="section-banner__bg home-banner">
              <div className="uk-container">
                <div className="section-banner__content uk-text-center">
                  <div className="section-banner__title">
                    Explore our great Images
                  </div>
                  <div className="section-banner__text">
                    "I don't trust words. I trust pictures." - Gilles Peress
                  </div>
                  <div className="section-banner__form">
                    <form action="#!">
                      <div className="form-search">
                        <div className="form-search__box">
                          <input type="text" placeholder="Find Anything ..." />
                          <button
                            className="uk-button uk-button-danger"
                            type="submit"
                          >
                            SEARCH
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="section-banner__bottom">
                    <div className="popular-searches">
                      <span className="uk-margin-small-right">
                        What's Popular
                      </span>
                      {data.imageIcon.map((icon) => (
                        <ul>
                          <li key={icon._id}>
                            <Link
                              to="#!"
                              data-uk-tooltip={`title: ${icon.title}; pos: bottom`}
                            >
                              <img src={icon.src} alt="popular-search" />
                            </Link>
                          </li>
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-popular">
          <div className="uk-section-large uk-container popular-style">
            <div className="section-title uk-text-center">
              <span>See the world from our lens</span>
              <h3 className="uk-h3">Popular Images</h3>
            </div>
            <div className="image-container">
              {data.images.map((image) => (
                <Image key={image._id} image={image} />
              ))}
            </div>
          </div>
        </div>
        <div className="section-featured">
          <div className="uk-background-muted">
            <div className="uk-section-large uk-container uk-container-expand">
              <div className="section-title uk-text-center">
                <span>Check out your favourites picks</span>
                <h3 className="uk-h3">Favourites</h3>
              </div>
              <div className="section-content">
                <div data-uk-slider="sets: true">
                  <div className="uk-position-relative" tabIndex={-1}>
                    <ul className="uk-slider-items uk-grid uk-grid-medium uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-child-width-1-5@xl">
                      {favImages.map((image) => (
                        <li key={image._id}>
                          <div className="listing-card">
                            <div className="listing-card__box">
                              <div className="listing-card__media shine">
                                <Link to={image.imageBase64}>
                                  <img
                                    src={image.imageBase64}
                                    alt={image.filename}
                                  />
                                </Link>
                                <div className="listing-card__type">
                                  <img src="/img/ico-fork.svg" alt="ico-fork" />
                                </div>
                                <div className="listing-card__bookmark">
                                  <span className="icon-pin"></span>
                                </div>
                              </div>
                              <div className="listing-card__body">
                                <div className="listing-card__title">
                                  <Link to={image.imageBase64}>
                                    Planet Museum
                                  </Link>
                                </div>
                                <div className="listing-card__intro">
                                  Best relaxation facilities with welcome
                                </div>
                                <div className="listing-card__location">
                                  <span className="icon-location-pin"></span>
                                  <span>32 Simpson Road, NY 020103</span>
                                </div>
                                <div className="listing-card__phone">
                                  <span className="icon-call-in"></span>
                                  <span>+1 (009) 236 985</span>
                                </div>
                              </div>
                              <div className="listing-card__info">
                                <div className="listing-card__rating">
                                  <div className="rating-box">
                                    <div className="rating-box__icon">
                                      <span className="icon-star"></span>
                                    </div>
                                    <div className="rating-box__desc">
                                      <div className="rating-box__title">
                                        Rating<b>4.7</b>
                                      </div>
                                      <div className="rating-box__reviews">
                                        (5 reviews)
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="listing-card__works">
                                  {" "}
                                  <span>close</span>
                                </div>
                                <div className="listing-card__price">
                                  <span>$$</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin-medium-top"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="page-join-us">
        <div className="uk-container">
          <div className="join-us">
            <div className="join-us__box">
              <div className="join-us__title">Join Us & Get Listed</div>
              <div className="join-us__text">
                Eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
                <br /> exercitation ullamco laboris nisi ut aliquip exa dolor
              </div>
              <div className="join-us__btn">
                <Link
                  className="uk-button uk-button-danger"
                  to="10_contact.html"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
export default HomeScreen;
