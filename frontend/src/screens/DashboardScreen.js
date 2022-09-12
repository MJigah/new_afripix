import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import DashImage from "../components/DashImage";
import {
  getUserImages,
  reset,
  upload,
} from "../features/userImage/userImageSlice";
import Avatar from "react-avatar-edit";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
// import img from "./blimg-6.jpg";
import img from "./abstract-user-flat-4.svg";
import { profileUpload } from "../features/auth/authSlice";

const DashboardScreen = () => {
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState("");
  const [orientation, setOrientation] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const userId = id;

  const [imageCrop, setImageCrop] = useState(false);
  const [profImage, setProfImage] = useState("");
  const [src, setSrc] = useState(false);
  const [profile, setProfile] = useState([]);
  const [pview, setPview] = useState(false);
  const [imageProfile, setImageProfile] = useState('')

  const { user, isSuccess, isError, isLoading, message, userPd } = useSelector(
    (state) => state.auth
  );

  const {
    userImages,
    isUserImageSuccess,
    isUserImageError,
    isUserImageLoading,
    userImageMessage,
  } = useSelector((state) => state.userImages);

  //================================================================
  //Styles
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "30px",
  };

  const iconStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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

    if (!userImages) {
      dispatch(getUserImages(userId));
    }

    // if (isUserImageSuccess) {
    //   toast.success(userImageMessage);
    // }

    // if (isUserImageError) {
    //   toast.error(userImageMessage);
    // }

    if(userPd){
      setImageProfile(`data:${userPd.contentType};base64,${userPd.imageBase64}`)
    }

    // dispatch(reset());
  }, [
    user,
    dispatch,
    userId,
    navigate,
    userImages,
    isUserImageSuccess,
    isUserImageError,
    userImageMessage,
    imageProfile,
    userPd
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myFile", image);
    formData.append("tags", tags);
    formData.append("orientation", orientation);
    formData.append("user", userId);
    dispatch(upload(formData));
    if (isUserImageSuccess) {
      toast.success(userImageMessage);
    }

    if (isUserImageError) {
      toast.error(userImageMessage);
    }
  };

  //Profile picture handlers
  const profileFinal = profile.map((item) => item.pview);

  const onClose = () => {
    setPview(null);
    setImageCrop(false);
  };

  const onCrop = (view) => {
    setPview(view);
  };

  const saveCropImage = () => {
    setProfile([...profile, { pview }]);
    setImageCrop(false);
    const imageData ={data: pview}
    console.log(imageData)
    dispatch(profileUpload(imageData))
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 71680000) {
      alert("File is too big!");
      elem.target.value = "";
    }
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
          <div style={{ margin: "50px 70px" }}>
            <div>
              <div className="">
                <div
                  className="article-full__info dashboard-article uk-width-1-3@m"
                  style={compStyle}
                >
                  <div className="article-full__author">
                    <span style={{ fontSize: "20px" }}>
                      <h5>
                        {" "}
                        {period + ", "}{" "}
                        {user ? user.firstname + " " + user.lastname : null}
                      </h5>
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
                  {/* Display Button trigger modal  */}
                  <button
                    type="button"
                    class="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    <img
                      className="profile-display"
                      src={userPd ? imageProfile : pview ? pview : img}
                      alt={`${user.username} profile`}
                      onClick={() => {
                        setImageCrop(true);
                      }}
                    />{" "}
                  </button>
                  {/* Display Image Modal */}
                  <div
                    class="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">
                            {userPd ? `Update` : `Upload`} Profile Picture
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <div className="profile-style">
                            <img
                              className="profile-display"
                              src={userPd ? imageProfile : pview ? pview : img}
                              alt="Preview"
                              onClick={() => {
                                setImageCrop(true);
                              }}
                            />

                            {imageCrop ? (
                              <div>
                                <Avatar
                                  width={500}
                                  height={600}
                                  onCrop={onCrop}
                                  onClose={onClose}
                                  onBeforeFileLoad={onBeforeFileLoad}
                                  src={null}
                                />
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            onClick={saveCropImage}
                            className="btn btn-primary profile-btn"
                            data-bs-dismiss="modal"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="profile_img text-center p-4">
                    <div className="flex flex-column justify-content align-items-center">
                  <img
                    className="profile-display"
                    src={profileFinal.length ? profileFinal : img}
                    alt="profile"
                    onClick={() => {
                      setImageCrop(true);
                    }}
                  />

                  <div>
                    <div>
                      <Dialog
                        visible={imageCrop}
                        onHide={() => setImageCrop(false)}
                      >
                        <div className="confirmation-content flex flex-column align-items-center">
                          <Avatar
                            width={200}
                            height={100}
                            onCrop={onCrop}
                            onClose={onClose}
                            src={src}
                            shadingColor={"#474649"}
                            backgroundColor={"#474649"}
                          />
                        </div>

                        <div className="flex flex-column align-items-center mt-5 w-12">
                          <div className="flex justify-content-around w-12 mt-4">
                            <Button
                              onClick={saveCropImage}
                              label="Save"
                              icon="pi pi-check"
                            />
                          </div>
                        </div>
                      </Dialog>
                    </div>

                    <div>
                      <InputText
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={(event) => {
                          const file = event.target.files[0];
                          if (file && file.type.substring(0, 5) === "image") {
                            setImage(file);
                          } else {
                            setImage(null);
                          }
                        }}
                      />
                    </div>
                  </div>
                    </div>
                  </div> */}
                </div>
                <div style={navStyle}>
                  <div className="user-nav " style={{ width: "100%" }}>
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
                          Photos
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
                              <div className="modal fade" id="exampleModal<%=i%>" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        style={{ width: "100%", marginBottom: "30px" }}
                      >
                        {" "}
                        {isUserImageLoading ? (
                          <span
                            style={iconStyle}
                            className="uk-icon uk-spinner"
                            uk-spinner=""
                          ></span>
                        ) : (
                          <div className="uk-position-relative">
                            {user && userImages ? (
                              <div
                                className="image-container"
                                data-uk-lightbox="animation: scale"
                              >
                                {userImages.map((image) => (
                                  <DashImage
                                    key={image._id}
                                    image={image}
                                    user={user}
                                  />
                                ))}
                              </div>
                            ) : (
                              <p>No Images Uploaded</p>
                            )}
                          </div>
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
