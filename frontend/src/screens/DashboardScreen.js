import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Image from "../components/Image";
import { upload } from "../features/image/imageSlice";
import { getUserImages } from "../features/userImage/userImageSlice";
import Spinner from '../components/Spinner'

const DashboardScreen = () => {
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState("");
  const [orientation, setOrientation] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const userId = id;

  const { user, isSuccess, isError, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const { userImages, isUserImageSuccess, isUserImageError, isUserImageLoading, userImageMessage } =
    useSelector((state) => state.userImages);

  //================================================================
  //Styles
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "30px"
  };

  const compStyle = {
    marginLeft: "0px",
    fontSize: "17px",
    width: "100%",
    display: "flex",
    alignItems: "right",
    justifyContent: "space-between",
  };
  //================================================================


  //================================================================
  //Image Setup
  
  var loadFile = (e) => {
    setImage(e.target.files[0]);
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById("output");
      output.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  //================================================================

  //================================================================
  //Get Time

  const today = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let period;
  const date = `${
    monthNames[today.getMonth()]
  } ${today.getDate()}, ${today.getFullYear()}`;
  if (today.getHours() <= 11) {
    period = "Morning";
  } else if (today.getHours() <= 16) {
    period = "Afternoon";
  } else if (today.getHours() <= 19) {
    period = "Evening";
  } else {
    period = "Night";
  }
  //================================================================
  useEffect(() => {
    if (!user) {
      navigate("/");
    }

    if(!userImages){
      dispatch(getUserImages(userId))
    }

  }, [user, dispatch, userId, navigate, userImages]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const navBar = document.getElementsByClassName("getNav");
    formData.append("myFile", image);
    formData.append("tags", tags);
    formData.append("orientation", orientation);
    formData.append("user", userId);
    dispatch(upload(formData));
  };

  return (
    <div className="page-wrapper">
      <div id="simpleModal" className="modal">
        <div className="modal-content">
          <div className="modal-head">
            <h4>Complete your profile</h4>
            <span className="closeBtn">&times;</span>
          </div>
          <div>
            <div
              className="section-city-place widjet widjet-form"
              id="add-reviews sign-in"
            >
              <form>
                <div
                  className="uk-grid uk-grid-medium uk-child-width-1-1"
                  data-uk-grid
                >
                  <div className="uk-grid uk-grid-small" data-uk-grid="true">
                    <div className="uk-width-2-3@m uk-first-column">
                      <input
                        className="uk-input"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        defaultValue={user ? user.email : null}
                        required
                      />
                    </div>
                    <div className="uk-width-1-3@m">
                      <input
                        className="uk-input uk-width-1-1"
                        type="text"
                        name="username"
                        placeholder="Username"
                        defaultValue={user ? user.username : null}
                      />
                    </div>
                  </div>
                  <div className="uk-grid uk-grid-small" data-uk-grid="true">
                    <div className="uk-width-2-3@m uk-first-column">
                      <input
                        className="uk-input"
                        type="text"
                        name="firstname"
                        placeholder="First name"
                        defaultValue={user ? user.firstname : null}
                      />
                    </div>
                    <div className="uk-width-1-3@m">
                      <input
                        className="uk-input uk-width-1-1"
                        type="text"
                        name="lastname"
                        placeholder="Last name"
                        defaultValue={user ? user.username : null}
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      className="uk-input uk-margin-medium"
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="uk-input uk-margin-medium"
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                  <div className="uk-margin">
                    <textarea
                      className="uk-textarea"
                      rows="5"
                      name="biodata"
                      placeholder="Biodata"
                      defaultValue={user ? user.biodata : null}
                    ></textarea>
                  </div>
                  <div>
                    <button
                      className="uk-button uk-button-danger uk-width-1-1"
                      type="submit"
                    >
                      complete your profile
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <main className="page-main">
        <div className="page-content">
          <div className="uk-section-large uk-container dashboard-banner">
            <div className="uk-grid uk-grid-medium" data-uk-grid>
              <div className="container">
                <div
                  className="article-full__info dashboard-article uk-width-1-3@m"
                  style={compStyle}
                >
                  <div className="article-full__author">
                    <span style={{ fontSize: "20px" }}>
                      {`${period}, ${user ? user.firstname : null} ${
                        user ? user.lastname : null
                      }`}
                    </span>
                  </div>
                  <div className="">
                    <div className="article-full__info dashboard-article">
                      <div className="article-full__date">
                        <i className="icon-calendar"></i>
                        <span>{date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="profile-container">
                  <div>
                    <div className="profile-display">
                      {/* <img src="/images/blimg-6.jpg"/> */}
                    </div>
                    <span>
                      <button
                        className="uk-button uk-button-primary"
                        id="modalBtn"
                        type="button"
                      >
                        COMPLETE YOUR PROFILE
                      </button>
                    </span>
                  </div>
                </div>
                <div className="container" style={navStyle}>
                  <div
                    className="user-nav uk-width-1-3@m uk-first-column"
                    style={{ width: "100%" }}
                  >
                    <nav style={navStyle}>
                      <div
                        className="nav nav-tabs text-center"
                        id="nav-tab"
                        role="tablist"
                      >
                        <button
                          className="nav-link secondary"
                          id="nav-home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-home"
                          type="button"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="false"
                        >
                          Uploads
                        </button>
                        <button
                          className="nav-link active getNav"
                          id="nav-profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-profile"
                          type="button"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="true"
                        >
                          Favourite
                        </button>
                        <button
                          className="nav-link"
                          id="nav-profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-contact"
                          type="button"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                        >
                          Downloads
                        </button>
                      </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >
                        <div
                          className="accordion upload-right"
                          id="accordionExample"
                        >
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                Click to Upload Images
                              </button>
                            </h2>
                            <div
                              id="collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body upload-container">
                                <div>
                                  <div>
                                    <form
                                      action="#"
                                      encType="multipart/form-data"
                                      className="container-xxl form-control"
                                      onSubmit={submitHandler}
                                    >
                                      <div className="input-group mb-3">
                                        <input
                                          type="file"
                                          name="images"
                                          className="form-control"
                                          id="inputGroupFile02"
                                          onChange={loadFile}
                                        />
                                        <label
                                          className="input-group-text"
                                          htmlFor="inputGroupFile02"
                                        >
                                          Upload
                                        </label>
                                      </div>
                                      <img
                                        id="output"
                                        className="uk-margin-small"
                                        alt="new-img"
                                      />
                                      <input
                                        className="form-control"
                                        list="datalistOptions"
                                        id="exampleDataList"
                                        placeholder="Enter tags"
                                        name="imageCategory"
                                        onChange={(e) =>
                                          setTags(e.target.value)
                                        }
                                      />
                                      {/* <datalist id="datalistOptions">
                                        <% categories.forEach((category) => { %>
                                          <option value="<%= category.name %>">
                                        <% }) %>
                                    </datalist> */}
                                      <div className="container">
                                        <p>Image Orientations: </p>
                                        <div
                                          className="container"
                                          id="image-orientations"
                                        >
                                          <div className="form-check disabled">
                                            <input
                                              className="form-check-input"
                                              type="radio"
                                              name="orientation"
                                              defaultValue="Portrait"
                                              checked={
                                                orientation === "Portrait"
                                              }
                                              onChange={(e) =>
                                                setOrientation(e.target.value)
                                              }
                                              id="#"
                                            />
                                            <label
                                              htmlFor="Portrait"
                                              className="form-check-label"
                                            >
                                              Portrait
                                            </label>
                                          </div>
                                          <div className="form-check disabled">
                                            <input
                                              type="radio"
                                              className="form-check-input "
                                              name="orientation"
                                              defaultValue="Landscape"
                                              checked={
                                                orientation === "Landscape"
                                              }
                                              onChange={(e) =>
                                                setOrientation(e.target.value)
                                              }
                                              id="#"
                                            />
                                            <label
                                              htmlFor="Landscape"
                                              className="form-check-label"
                                            >
                                              Landscape
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="text-center">
                                        <input
                                          type="submit"
                                          className="btn btn-secondary text-center"
                                          value="Upload Image"
                                        />
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="image2-container" id="photos">
                            {/* <% for(var i = 0; i < Images.length; i++){ %>
                            <% if(Images[i].imageBase64){ %>
                              <div className="modal fade" id="exampleModal<%=i%>" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                  <div className="modal-content" id="modal-operate">
                                    <div className="modal-header">
                                      <h5 className="modal-title" id="exampleModalLabel"><%= Images[i].filename %></h5>
                                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-dialog modal-fullscreen-md-down" style=" margin: 0;">
                                      <img src="data:<%=Images[i].contentType%>;base64,<%=Images[i].imageBase64%>" alt="Afripixels-images">
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="overlay-2">
                                <button type="button" id="btn-1" data-bs-toggle="modal" data-bs-target="#exampleModal<%=i%>">
                                  <img src="data:<%=Images[i].contentType%>;base64,<%=Images[i].imageBase64%>" alt="Afripixels-images">
                                </button>
                                <div className="overlay-2">
                                  <Link to="/<%=user._id%>/images/<%=Images[i]._id%>/edit"><span className="uk-icon" data-uk-icon="pencil"></span></Link>
                                  <form method="POST" action="/<%=user._id%>/images/<%=Images[i]._id%>/edit?_method=DELETE">
                                    <button className="btn bg-transparent"><i className="fa fa-trash icon-edit" aria-hidden="true"></i>
                                    </button>
                                  </form>
                                </div>
                              </div>
                            <% } %>
                          <% } %> */}
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade show active"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                        style={{ width: "100%", marginBottom: "30px;"}}
                      >
                        {isUserImageLoading ? <Spinner /> : (
                          <div>{user && userImages ? (
                            <div className="image-container">
                              {userImages.map((image) => (
                                <Image key={image._id} image={image} />
                              ))}
                            </div>
                          ) : (
                            <h1>Favourite ...</h1>
                          )}</div>
                        )}
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-contact"
                        role="tabpanel"
                        aria-labelledby="nav-contact-tab"
                      >
                        Downloads ...
                      </div>
                    </div>
                  </div>
                </div>
                {/* <Linkrticle className="article-full">
                <div className="article-full__head">
                  <h4 className="article-full__title">
                    <i>Welcome</i>, Ben Jason
                  </h4>
                </div>
                <div className="article-full__image shine" data-uk-lightbox>
                  <Link to="/images/img-21.jpg">
                    <img src="/images/img-21.jpg" alt="img-article" />
                  </Link>
                </div>
                <div className="uk-margin-medium-top article-full__content">
                  <p>
                    Laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore.
                  </p>
                  <p>
                    Enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.{" "}
                  </p>
                  <blockquote>
                    <p>
                      It was indeed very good and fantastic to dine here and
                      stay. The atmosphere was electrifying. Prices were also
                      very reasonable, service was awesome!
                    </p>
                    <div className="user">
                      {" "}
                      <strong>Mark Dennis</strong>
                      <span>Chief Executive</span>
                    </div>
                  </blockquote>
                </div>
              </Linkrticle> */}
                {/* <blockquote>
                    <p>
                      It was indeed very good and fantastic to dine here and
                      stay. The atmosphere was electrifying. Prices were also
                      very reasonable, service was awesome!
                    </p>
                    <div className="user">
                      {" "}
                      <strong>Mark Dennis</strong>
                      <span>Chief Executive</span>
                    </div>
                  </blockquote> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardScreen;
