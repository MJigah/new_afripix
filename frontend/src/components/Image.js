import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { likeImages } from "../features/image/imageSlice";

const Image = ({ image, user }) => {
  const dispatch = useDispatch()
  const [liked, setLiked] = useState(true)
  const [url, setUrl] = useState("")
  const bgColor = {
    color: "red",
  }

  const nonBgColor = {
    color: "#fff",
  }

  const {images, isImageLoading, isImageError, isImageSuccess} = useSelector((state) => state.images);

  const clickHandler = () => {
    const data = {image: image._id, user: user._id}
    dispatch(likeImages(data))
    const value = !liked
    setLiked(value)
    alert(liked)

  }

  useEffect(() => {
    const check = images.find((foundImage) => foundImage._id === image._id)
    setLiked(check.likes.includes(user._id))
    console.log(liked)
}, [user, image, images])
  
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
          <div style={{ fontSize: "25px" }}>
            <span  onClick={clickHandler} style={{ marginRight: "15px"}}>
              <i className={liked ? "fa fa-heart": "far far-heart"} aria-hidden="true" style={liked ? bgColor : nonBgColor}></i>
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
