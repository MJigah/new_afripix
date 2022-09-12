import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getRelatedImages,
  reset,
  selectedImage,
} from "../features/selectImage/selectImageSlice";

const SelectedImage = () => {
  const dispatch = useDispatch();
  const { imageid } = useParams();
  const [filteredImage, setFilteredImage] = useState([]);

  const {
    singleImage,
    isSelectedSuccess,
    isSelectedError,
    isSelectedLoading,
    selectedMessage,
    relatedImages,
  } = useSelector((state) => state.selectImage);

  // dispatch(selectedImage(imageid))
  // const filtImages = relatedImages.imageId.filter((foundImage) => {
  //   return foundImage._id !== imageid;
  // })

  // console.log(filtImages)

  const iconStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px 0",
  };

  useEffect(() => {
    dispatch(selectedImage(imageid));
    dispatch(getRelatedImages(imageid));
  }, [dispatch, imageid]);

  if (!singleImage) {
    <span
      className="uk-text-center uk-icon uk-spinner"
      style={iconStyle}
      uk-spinner=""
    ></span>;
  }

  return (
    <div>
      <div className="page-content">
        <div
          className="uk-section-large uk-container"
          style={{ paddingTop: "50px" }}
        >
          <div className="uk-grid uk-grid-medium" data-uk-grid>
            <div className="uk-width-2-3@m">
              <article className="article-full">
                {singleImage && singleImage.imageBase64 ? (
                  <div
                    className="article-full__image"
                    data-uk-lightbox
                    style={{ margin: "20px 0" }}
                  >
                    <a href={`/uploads/${singleImage.filename}`}>
                      <img
                        src={`data:${singleImage.contentType};base64,${singleImage.imageBase64}`}
                        alt={singleImage.filename}
                      />
                    </a>
                  </div>
                ) : null}
                <div className="article-full__head">
                  {singleImage && singleImage.filename ? (
                    <h3
                      className="article-full__title"
                      style={{ margin: "20px 0", textAlign: "center" }}
                    >
                      {singleImage.filename}
                    </h3>
                  ) : null}
                  <div className="article-full__info">
                    <div className="article-full__author">
                      <i className="icon-user"></i>
                      {singleImage && singleImage.userId ? (
                        <a
                          href="09_blog-post.html"
                          style={{ textDecoration: "none" }}
                        >
                          {singleImage.userId.lastname +
                            " " +
                            singleImage.userId.firstname}
                        </a>
                      ) : null}
                    </div>
                    <div className="article-full__date">
                      <p>
                        Orientation:{" "}
                        {singleImage && singleImage.imageOrientation ? (
                          <span>{singleImage.imageOrientation.name}</span>
                        ) : null}
                      </p>
                    </div>
                  </div>
                </div>
                {relatedImages ? (
                  <div className="section-related-article">
                    <div className="uk-h2">
                      <span className="icon-folder"></span>Related Images
                    </div>
                    {relatedImages.map((relatedCategory) => (
                      <ul className="image-container-2">
                        {relatedCategory.imageId.map((image) => (
                          <div key={relatedCategory._id}>
                            <Link to={`/images/${image._id}`}>
                            <img
                              key={image._id}
                              src={`data:${image.contentType};base64,${image.imageBase64}`}
                              alt={image.filename}
                            />
                            </Link>
                            <div>
                              <p>{image.filename}</p>
                            </div>
                          </div>
                        ))}
                      </ul>
                    ))}
                  </div>
                ) : null}
                <div className="section-article-reviews" id="article-reviews">
                  <div
                    className="uk-grid uk-child-width-auto@s uk-flex-middle uk-flex-between uk-margin-medium-bottom"
                    data-uk-grid
                  >
                    <div>
                      <div className="uk-h2 uk-margin-remove">
                        <span className="icon-star"> </span>Post Comments
                      </div>
                    </div>
                    <div>
                      <a
                        className="uk-button uk-button-danger"
                        href="#add-reviews"
                        data-uk-scroll="offset: 50"
                      >
                        Add a comment
                      </a>
                    </div>
                  </div>
                  <div className="uk-comment">
                    <div className="uk-comment-header">
                      <div
                        className="uk-grid-medium uk-flex-middle"
                        data-uk-grid
                      >
                        <div className="uk-width-auto">
                          <img
                            className="uk-comment-avatar"
                            src="assets/img/avatar-1.png"
                            width="60"
                            height="60"
                            alt
                          />
                        </div>
                        <div className="uk-width-expand">
                          <div data-uk-grid>
                            <div>
                              <div className="uk-comment-title uk-margin-small-bottom">
                                Linus William
                              </div>
                              <div className="uk-comment-meta">1 day Ago</div>
                            </div>
                            <div>
                              <ul className="stars-list">
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
                    <div className="uk-comment-body">
                      <p>
                        It was indeed very good and fantastic to dine here and
                        stay. The atmosphere electrifying. Prices was also very
                        reasonable and service was awesome.
                      </p>
                    </div>
                  </div>
                  <div className="uk-comment">
                    <div className="uk-comment-header">
                      <div
                        className="uk-grid-medium uk-flex-middle"
                        data-uk-grid
                      >
                        <div className="uk-width-auto">
                          <img
                            className="uk-comment-avatar"
                            src="assets/img/avatar-2.png"
                            width="60"
                            height="60"
                            alt
                          />
                        </div>
                        <div className="uk-width-expand">
                          <div data-uk-grid>
                            <div>
                              <div className="uk-comment-title uk-margin-small-bottom">
                                Ameda Hilson
                              </div>
                              <div className="uk-comment-meta">1 day Ago</div>
                            </div>
                            <div>
                              <ul className="stars-list">
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
                    <div className="uk-comment-body">
                      <p>
                        It was indeed very good and fantastic to dine here and
                        stay. The atmosphere electrifying. Prices was also very
                        reasonable and service was awesome.
                      </p>
                    </div>
                  </div>
                  <div className="add-reviews-form" id="add-reviews">
                    <div className="uk-h2">
                      <span className="icon-star"></span>Leave A Reply
                    </div>
                    <form>
                      {/* <!-- Hidden Required Fields --> */}
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
                        value="Add Review"
                      />
                      {/* <!-- END Hidden Required Fields --> */}
                      <div
                        className="uk-grid uk-grid-medium uk-child-width-1-1"
                        data-uk-grid
                      >
                        <div>
                          <textarea
                            className="uk-textarea"
                            name="review"
                            placeholder="Write your review..."
                            required
                          ></textarea>
                        </div>
                        <div>
                          <input
                            className="uk-input"
                            type="text"
                            name="fio"
                            placeholder="Your Name *"
                            required
                          />
                        </div>
                        <div>
                          <input
                            className="uk-input"
                            type="text"
                            name="email"
                            placeholder="Your Email *"
                            required
                          />
                        </div>
                        {/* <div>
                            <label>
                              <input
                                className="uk-checkbox"
                                type="checkbox"
                                checked
                              />
                              <span className="uk-margin-small-left">
                                Save my name and email details for future use
                              </span>
                            </label>
                          </div> */}
                        <div>
                          <button
                            className="uk-button uk-button-danger uk-button-large"
                            type="submit"
                          >
                            Send comment
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </article>
            </div>
            <div className="uk-width-1-3@m">
              <aside className="sidebar" style={{ margin: "30px 0" }}>
                {singleImage && singleImage.imageCategory ? (
                  <div className="widjet widjet-tags-cloud">
                    <h4 className="widjet__title">Popular Tags</h4>
                    <ul className="tags-list">
                      {singleImage.imageCategory.map((category) => (
                        <li key={category._id}>
                          <a href="#!" style={{ textDecoration: "none" }}>
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <div className="widjet widjet-subscribe">
                  <img src="assets/img/img-subscribe.png" alt="img-subscribe" />
                  <div className="uk-h3">Join Us & Get Listed</div>
                  <p>
                    Eiusmod tempor incididunt ut labore exercitation ullamco
                    laboris.
                  </p>
                  <form>
                    {/* <!-- Hidden Required Fields --> */}
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
                      value="Join Us & Get Listed"
                    />
                    {/* <!-- END Hidden Required Fields --> */}
                    <div className="uk-margin-small">
                      <input
                        className="uk-input uk-width-1-1"
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="uk-margin-small">
                      <input
                        className="uk-button uk-button-primary uk-width-1-1"
                        type="submit"
                        value="SUBSCRIBE"
                      />
                    </div>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedImage;
