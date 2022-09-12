import React from "react";
import { Link } from "react-router-dom";

const Image = ({ image, user }) => {
  return (
    <>
      <div className="overlay-container">
        <div style={{ padding: "0", marginBottom: "25px" }}>
          <Link
            to={`/images/${image._id}`}
          >
            <img
              src={`data:${image.contentType};base64,${image.imageBase64}`}
              alt={image.filename}
            />
          </Link>
        </div>
        <div className="home-overlay-display">
          <div>
            <span style={{ paddingLeft: "5px" }}>{user.lastname}</span>
          </div>
          <div style={{ fontSize: "20px" }}>
            <span style={{ marginRight: "15px" }}>
              <i className="far fa-heart"></i>
            </span>
            <span>
              <i className="fas fa-arrow-down"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Image;
