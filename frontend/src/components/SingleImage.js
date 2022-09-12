import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectedImage } from "../features/selectImage/selectImageSlice";

const SingleImage = ({image}) => {

  const iconStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="modal-dialog modal-lg">
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
        <div className="modal-body" style={{ margin: 0 }}>
          <div data-uk-slideshow="min-height: 300; max-height: 630">
            <div className="uk-position-relative">
              <ul
                className="uk-slideshow-items uk-child-width-1-1"
                style={iconStyle}
              >
                <li className="modal-img-container uk-transition-active">
                  <img
                    src={`data:${image.contentType};base64,${image.imageBase64}`}
                    alt="img-gallery"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleImage;
