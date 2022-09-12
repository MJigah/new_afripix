import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import { getUserDetails, signout } from "./actions/userActions";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import DashboardScreen from "./screens/DashboardScreen";
import HomeScreen from "./screens/HomeScreen";
import SigninScreen from "./screens/SigninScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logout, reset } from "./features/auth/authSlice";
import SelectedImage from "./screens/SelectedImage";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { getCategory } from "./features/category/categorySlice";
import { getCategoryImages, searchReset } from "./features/searchCateg/searchCategSlice";
import { useEffect } from "react";
import { useState } from "react";


function App() {
  const { user } = useSelector((state) => state.auth);
  const [catArray, setCatArray] = useState([])
  // const { error, loading, userInfo } = userSignin;
  // const { user } = userInfo;
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.allCategories)

  useEffect(() => {
    dispatch(getCategory())
    setCatArray(categories)
  }, [dispatch, categories])
  
  const signoutHandler = () => {
    dispatch(logout());
    dispatch(reset());
  };

  const handleOnSearch = (string, results) => {
    // console.log(string, results);
    console.log('searched!')
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item);
    dispatch(getCategoryImages(item._id))
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    dispatch(searchReset())
    console.log("Cleared");
  };

  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   console.log(e.target.value)
  //   // dispatch(getCategoryImages())
  // }

  const formatResult = (item) => {
    console.log(item);
    return (
      <div className="result-wrapper">
        <span className="result-span">id: {item.id}</span>
        <span className="result-span">name: {item.name}</span>
      </div>
    );
  };

  return (
    <>
      <BrowserRouter>
        <header className="page-header">
          <div
            className="page-header__scroll"
            data-uk-sticky
            style={{ height: "120px" }}
          >
            <div className="uk-container uk-container-xlarge">
              <div
                className="page-header__inner"
                style={{ padding: "15px, 0px" }}
              >
                <div className="page-header__left">
                  <div className="page-header__logo logo">
                    <Link className="logo__link" to="/">
                      <img src="/img/logo.svg" alt="logo" />
                    </Link>
                  </div>
                  <div className="page-header__search">
                      <div style={{ width: 300, margin: 20 }}>
                        <ReactSearchAutocomplete
                          items={categories}
                          fuseOptions={{ keys: ["name", "visits"] }} // Search on both fields
                          resultStringKeyName="name" // String to display in the results
                          onSearch={handleOnSearch}
                          onHover={handleOnHover}
                          onSelect={handleOnSelect}
                          onFocus={handleOnFocus}
                          onClear={handleOnClear}
                          showIcon={true}
                          styling={{
                            height: "34px",
                            border: "1px solid darkgreen",
                            borderRadius: "4px",
                            backgroundColor: "white",
                            boxShadow: "none",
                            hoverBackgroundColor: "grey",
                            color: "black",
                            fontSize: "12px",
                            fontFamily: "Courier",
                            iconColor: "black",
                            lineColor: "black",
                            placeholderColor: "grey",
                            clearIconMargin: "3px 8px 0 0",
                            zIndex: 2,
                        }}
                        />
                      </div>
                  </div>
                </div>
                <div className="page-header__right">
                  <div className="page-header__mainmenu">
                    <nav className="mainmenu" data-uk-navbar="">
                      <ul className="uk-navbar-nav">
                        {/* <li>
                        <Link to="03_city-listings">
                          Listings
                          <span
                            className="uk-icon"
                            data-uk-icon="chevron-down"
                          ></span>
                        </Link>
                        <div className="uk-navbar-dropdown">
                          <ul className="uk-nav uk-navbar-dropdown-nav">
                            <li>
                              <Link to="03_city-listings.html">
                                City listings map
                              </Link>
                            </li>
                            <li>
                              <Link to="04_city-listings-no-map.html">
                                City listings
                              </Link>
                            </li>
                            <li>
                              {" "}
                              <Link to="05_city-place.html">City place</Link>
                            </li>
                          </ul>
                        </div>
                      </li> */}
                        <li>
                          <Link to="08_blog-grid.html">
                            Pages
                            <span
                              className="uk-icon"
                              data-uk-icon="chevron-down"
                            ></span>
                          </Link>
                          <div className="uk-navbar-dropdown">
                            <ul className="uk-nav uk-navbar-dropdown-nav">
                              <li>
                                <Link to="/about">About</Link>
                              </li>
                              <li>
                                <Link to="/contact">Contacts</Link>
                              </li>
                              <li>
                                <Link to="/signin">Signin</Link>
                              </li>
                              <li>
                                <Link to="/dashboard">Dashboard</Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          {user && user.username ? (
                            <>
                              <Link to="#">
                                {user.username}
                                <span
                                  className="uk-icon"
                                  data-uk-icon="chevron-down"
                                ></span>
                              </Link>
                              <div className="uk-navbar-dropdown">
                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                  <li>
                                    <Link to={"/"}>Home</Link>
                                  </li>
                                  <li>
                                    <Link to={`/dashboard/${user._id}`}>
                                      Profile
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#signout"
                                      onClick={signoutHandler}
                                    >
                                      Sign out
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </>
                          ) : (
                            <Link className="sing-in" to="/signin">
                              {" "}
                              <i className="fas fa-sign-in-alt"></i>
                              <span>Sign in or Register</span>
                            </Link>
                          )}
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="page-header__btn-menu">
                    <Link
                      to="#offcanvas"
                      data-uk-toggle
                      data-uk-icon="menu"
                    ></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/dashboard/:id" element={<DashboardScreen />}></Route>
            <Route path="/dashboard" element={<DashboardScreen />}></Route>
            <Route path="/signin" element={<SigninScreen />}></Route>
            <Route path="/contact" element={<ContactScreen />}></Route>
            <Route path="/about" element={<AboutScreen />}></Route>
            <Route path="/images/:imageid" element={<SelectedImage />}></Route>
            <Route path="/" element={<HomeScreen />} exact></Route>
          </Routes>
        </main>
        <footer className="page-footer">
          <div className="page-footer__top">
            <div className="uk-container">
              <div className="uk-grid" data-uk-grid>
                <div className="uk-width-1-3@m uk-width-1-2@s">
                  <div className="logo">
                    <Link className="logo__link" to="index.html">
                      <img
                        className="logo__img"
                        src="/img/logo.svg"
                        alt="Doremi"
                      />
                    </Link>
                  </div>
                  <p>
                    Eiusmod tempora incididunt dolore
                    <br /> magna aliqua sed enim lorem ipsum
                    <br /> sit amet consectetur.
                  </p>
                  <ul className="uk-list">
                    <li>
                      {" "}
                      <span>Email: </span>
                      <Link to="mailto:support@domain.com">
                        support@domain.com
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <span>Phone: </span>
                      <Link to="tel:104023513690">+1 (040) 2351 3690</Link>
                    </li>
                  </ul>
                </div>
                <div className="uk-width-1-3@m uk-width-1-2@s uk-flex-last@m">
                  <h3 className="uk-h3">Join Our Community</h3>
                  <p>Continue exploring the great places.</p>
                  <div
                    className="uk-grid uk-grid-small uk-child-width-1-1"
                    data-uk-grid
                  >
                    <div>
                      <img src="assets/img/LinkppStore.svg" alt="AppStore" />
                    </div>
                    <div>
                      <img src="assets/img/PlayStore.svg" alt="PlayStore" />
                    </div>
                  </div>
                </div>
                <div className="uk-width-1-3@m uk-visible@s">
                  <div
                    className="uk-grid uk-grid-small uk-child-width-1-2@s"
                    data-uk-grid
                  >
                    <div>
                      <h3 className="uk-h3">About</h3>
                      <ul className="uk-nav uk-nav-default">
                        <li>
                          {" "}
                          <Link to="page-typography.html">Our Company</Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="page-typography.html">Carers</Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="page-typography.html">Support</Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="page-typography.html">How It Works</Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="page-typography.html">Add a Place</Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="page-typography.html">Disclaimers</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="uk-h3">Top Cities</h3>
                      <ul className="uk-nav uk-nav-default">
                        <li>
                          {" "}
                          <Link to="page-typography.html">New York</Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="page-typography.html">Paris</Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="page-typography.html">London</Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="page-typography.html">Singapore</Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="page-typography.html">Bangkok</Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="page-typography.html">Dubai</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-footer__middle">
            <div className="uk-container">
              <div className="uk-grid uk-child-width-1-2@s" data-uk-grid>
                <div>
                  <h3 className="uk-h3">Signup For Latest News</h3>
                  <div className="subscribe-form">
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
                      <div className="subscribe-form__box">
                        <input
                          className="uk-input"
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          required
                        />
                        <input
                          className="uk-button uk-button-danger"
                          type="submit"
                          value="Subscribe"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div>
                  <h3 className="uk-h3">Connect Socially</h3>
                  <ul className="social">
                    <li>
                      <Link to="#!">
                        <i className="fab fa-twitter"></i>
                        <span>Twitter</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#!">
                        <i className="fab fa-facebook-f"></i>
                        <span>Facebook</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#!">
                        <i className="fab fa-youtube"></i>
                        <span>YouTube</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#!">
                        <i className="fab fa-instagram"></i>
                        <span>Instagram</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="page-footer__bottom">
            <div className="uk-container">
              <span>© 2020 Ecata City Portal - All rights reserved.</span>
            </div>
          </div>
          <div id="offcanvas" data-uk-offcanvas="overlay: true">
            <div className="uk-offcanvas-bar uk-flex uk-flex-column uk-flex-between">
              <button
                className="uk-offcanvas-close"
                type="button"
                data-uk-close=""
              ></button>
              <div>
                <div className="uk-margin">
                  <div className="logo">
                    <Link className="logo__link" to="index.html">
                      <img
                        className="logo__img"
                        src="/img/logo.svg"
                        alt="Doremi"
                      />
                    </Link>
                  </div>
                </div>
                <div className="uk-margin-medium">
                  <ul
                    className="uk-nav uk-nav-default uk-nav-parent-icon"
                    data-uk-nav
                  >
                    <li className="uk-parent">
                      <Link to="#!">Home</Link>
                      <ul className="uk-nav-sub">
                        <li>
                          <Link to="01_home.html">Home page 1</Link>
                        </li>
                        <li>
                          <Link to="02_home-header-style.html">
                            Home page 2
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="uk-parent">
                      <Link to="#!">Listings</Link>
                      <ul className="uk-nav-sub">
                        <li>
                          <Link to="03_city-listings.html">
                            City listings map
                          </Link>
                        </li>
                        <li>
                          <Link to="04_city-listings-no-map.html">
                            City listings
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="05_city-place.html">City place</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="uk-parent">
                      <Link to="#!">Pages</Link>
                      <ul className="uk-nav-sub">
                        <li>
                          <Link to="06_about.html">About</Link>
                        </li>
                        <li>
                          <Link to="08_blog-grid.html">Blog grid</Link>
                        </li>
                        <li>
                          <Link to="07_blog.html">Blog list</Link>
                        </li>
                        <li>
                          <Link to="09_blog-post.html">Blog post</Link>
                        </li>
                        <li>
                          <Link to="10_contact.html">Contacts</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="uk-margin uk-text-center">
                  <Link className="sing-in" to="#!">
                    {" "}
                    <i className="fas fa-sign-in-alt"></i>
                    <span>Sign in or Register</span>
                  </Link>
                </div>
                <div className="uk-margin">
                  {" "}
                  <Link className="uk-button uk-button-danger" to="#!">
                    {" "}
                    <span data-uk-icon="plus"></span>
                    <span>List An Item</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
