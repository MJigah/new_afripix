import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectedImage } from "../features/selectImage/selectImageSlice";

const DashImage = ({ image, user }) => {
  // const filteredImages = image.userId.images.filter((foundImage) => {
  //   return foundImage._id !== image._id;
  // });
  const dispatch = useDispatch()

  const imageOnClick = () => {
    //Handle Click Image
    alert("Clicked!");
  };
  

  return (
    <>
      {/* Modal Button */}
      <div className="overlay-container">
        <button
          type="button"
          id="btn-1"
          data-bs-toggle="modal"
          data-bs-target={"#exampleModal" + image._id}
          style={{padding: "0", marginBottom: "25px"}}
        >
          <div className="uk-border-rounded img-overlay-contain">
            <img
              src={`data:${image.contentType};base64,${image.imageBase64}`}
              alt={image.filename}
              className="img-overlay"
            />
          </div>
        </button>
        <div className="overlay-display">
          <div onClick={imageOnClick}>
            <span className="uk-icon" data-uk-icon="pencil"></span>
          </div>
        <div>
          <button className="btn btn-light">Delete</button>
        </div>
        </div>
      </div>
      {/* Modal Content */}
      <div
        className="modal fade"
        id={"exampleModal" + image._id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content" id="modal-operate">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {image.filename}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-fullscreen-md-down" style={{ margin: 0 }}>
              <div>
                <div>
                  <img
                    src={`data:${image.contentType};base64,${image.imageBase64}`}
                    alt="img-gallery"
                    style={{ margin: "0" }}
                  />
                </div>
                {/* <div className="container text-center">
                  <div className="row">
                    <div className="col text-center">
                      <ul className="image-categories">
                        {image.imageCategory.map((category) => (
                          <div
                            style={{ marginRight: "8px" }}
                            key={category._id}
                          >
                            <button className="btn btn-light">
                              {category.name}
                            </button>
                          </div>
                        ))}
                      </ul>
                    </div>
                    <div className="col text-center">
                      <button className="uk-button uk-button-text">
                        {image.imageOrientation.name}
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashImage;
